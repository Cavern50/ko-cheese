(function() {
var exports = {};
exports.id = "pages/products";
exports.ids = ["pages/products"];
exports.modules = {

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ (function(module) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + ( false ? 0 : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + ( false ? 0 : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** be used inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?ca47"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (shouldResolveHref && pathname !== '/_error') {
      ;
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          parsed.pathname = addBasePath(pathname);
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2, _options$scroll;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;
      const shouldScroll = (_options$scroll = options.scroll) != null ? _options$scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll != null ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        parsed.pathname = pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL( true ? 'http://n' : 0);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./src/components/Common/Discount/Discount.jsx":
/*!*****************************************************!*\
  !*** ./src/components/Common/Discount/Discount.jsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Discount": function() { return /* binding */ Discount; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Discount_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Discount.module.scss */ "./src/components/Common/Discount/Discount.module.scss");
/* harmony import */ var _Discount_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Discount_module_scss__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\\u042E\u0437\u0435\u0440\\Desktop\\\u0421\u0430\u0439\u0442\u044B\\ko-cheese-react\\src\\components\\Common\\Discount\\Discount.jsx";


const Discount = ({
  text
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_Discount_module_scss__WEBPACK_IMPORTED_MODULE_2___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_Discount_module_scss__WEBPACK_IMPORTED_MODULE_2___default().text),
      children: text
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      className: (_Discount_module_scss__WEBPACK_IMPORTED_MODULE_2___default().close)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./src/components/Common/Footer/Footer.jsx":
/*!*************************************************!*\
  !*** ./src/components/Common/Footer/Footer.jsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Footer": function() { return /* binding */ Footer; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Footer_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer.module.scss */ "./src/components/Common/Footer/Footer.module.scss");
/* harmony import */ var _Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Footer_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/styles/Main.module.scss */ "./src/styles/Main.module.scss");
/* harmony import */ var src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_SVG_HeaderLogoSVG__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/SVG/HeaderLogoSVG */ "./src/components/SVG/HeaderLogoSVG.jsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\\u042E\u0437\u0435\u0440\\Desktop\\\u0421\u0430\u0439\u0442\u044B\\ko-cheese-react\\src\\components\\Common\\Footer\\Footer.jsx";





const Footer = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
    className: clsx__WEBPACK_IMPORTED_MODULE_3___default()((_Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().footer)),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: clsx__WEBPACK_IMPORTED_MODULE_3___default()((src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_5___default().wrapper)),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()((_Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container)),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: clsx__WEBPACK_IMPORTED_MODULE_3___default()((_Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().block)),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
            className: clsx__WEBPACK_IMPORTED_MODULE_3___default()((_Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().menu)),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
              className: clsx__WEBPACK_IMPORTED_MODULE_3___default()((_Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().link)),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "/",
                children: "\u041C\u0430\u0433\u0430\u0437\u0438\u043D"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 15,
                columnNumber: 25
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 22
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
              className: clsx__WEBPACK_IMPORTED_MODULE_3___default()((_Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().link)),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "/",
                children: "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 18,
                columnNumber: 25
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 22
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
              className: clsx__WEBPACK_IMPORTED_MODULE_3___default()((_Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().link)),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "/",
                children: "\u041E \u043D\u0430\u0441"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 21,
                columnNumber: 25
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 22
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
              className: clsx__WEBPACK_IMPORTED_MODULE_3___default()((_Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().link)),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "/",
                children: "\u041F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u044F"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 24,
                columnNumber: 25
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 22
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
              className: clsx__WEBPACK_IMPORTED_MODULE_3___default()((_Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().link)),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "/",
                children: "\u0420\u0435\u0446\u0435\u043F\u0442\u044B"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 25
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 22
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 19
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "mailto:",
            className: clsx__WEBPACK_IMPORTED_MODULE_3___default()((_Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().contact)),
            children: "\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043D\u0430\u043C"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 19
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 16
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: clsx__WEBPACK_IMPORTED_MODULE_3___default()((_Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().block)),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
            className: clsx__WEBPACK_IMPORTED_MODULE_3___default()((_Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().menu)),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              className: clsx__WEBPACK_IMPORTED_MODULE_3___default()((_Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().link)),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "/",
                children: "\u0422\u043E\u0447\u043A\u0438 \u043F\u0440\u043E\u0434\u0430\u0436"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 25
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 22
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              className: clsx__WEBPACK_IMPORTED_MODULE_3___default()((_Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().link)),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "/",
                children: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 25
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 22
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              className: clsx__WEBPACK_IMPORTED_MODULE_3___default()((_Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().link), (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().social)),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "/",
                children: "Instagram"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 25
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 22
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              className: clsx__WEBPACK_IMPORTED_MODULE_3___default()((_Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().link), (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().social)),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "/",
                children: "Facebook"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 25
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 22
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 19
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: clsx__WEBPACK_IMPORTED_MODULE_3___default()((_Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().info)),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: clsx__WEBPACK_IMPORTED_MODULE_3___default()((_Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().address)),
              children: "\u0421\u043C\u043E\u043B\u0435\u043D\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C, \u041A\u0430\u0440\u0434\u044B\u043C\u043E\u0432\u0441\u043A\u0438\u0439 \u0440\u0430\u0439\u043E\u043D, \u0441\u0435\u043B\u043E \u041A\u0430\u043C\u0435\u043D\u043A\u0430 \u041E\u041E\u041E \"\u041A\u0440\u0430\u0441\u043D\u0430\u044F \u0433\u043E\u0440\u043A\u0430\", \u041E\u0413\u0420\u041D 1136733008763, \u0418\u041D\u041D 6722041039"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 22
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: clsx__WEBPACK_IMPORTED_MODULE_3___default()((_Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().contacts)),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "tel:",
                className: clsx__WEBPACK_IMPORTED_MODULE_3___default()((_Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().contact)),
                children: "8 (800) 250-58-24"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 25
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "mailto:",
                className: clsx__WEBPACK_IMPORTED_MODULE_3___default()((_Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().contact)),
                children: "sales@koico.ru"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 25
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 22
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "https://asap-ag.ru",
              target: "_blank",
              className: clsx__WEBPACK_IMPORTED_MODULE_3___default()((_Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().asap)),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
                width: "51",
                height: "21",
                viewBox: "0 0 51 21",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
                  opacity: "0.56",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                    d: "M0.569496 18.4962V19.9436H0V16.2463H1.59281C2.06541 16.2463 2.43519 16.3496 2.70214 16.5561C2.97107 16.7627 3.10553 17.0361 3.10553 17.3763C3.10553 17.7352 2.97404 18.012 2.71104 18.2067C2.45002 18.3997 2.0753 18.4962 1.58688 18.4962H0.569496ZM0.569496 18.0975H1.59281C1.89733 18.0975 2.13067 18.0366 2.29282 17.9147C2.45496 17.7911 2.53604 17.6133 2.53604 17.3814C2.53604 17.1613 2.45496 16.9853 2.29282 16.8532C2.13067 16.7212 1.90821 16.6526 1.62544 16.6475H0.569496V18.0975Z",
                    fill: "#FAEEE2"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 75,
                    columnNumber: 31
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                    d: "M5.692 19.9436C5.66036 19.8895 5.63465 19.793 5.61488 19.6541C5.35979 19.881 5.05527 19.9944 4.70131 19.9944C4.38492 19.9944 4.12489 19.9182 3.92122 19.7659C3.71952 19.6118 3.61867 19.4171 3.61867 19.1818C3.61867 18.8957 3.74523 18.6739 3.99834 18.5165C4.25343 18.3574 4.61134 18.2778 5.07208 18.2778H5.60598V18.062C5.60598 17.8977 5.54863 17.7674 5.43394 17.6709C5.31925 17.5727 5.15018 17.5236 4.92674 17.5236C4.73097 17.5236 4.56685 17.5659 4.43436 17.6506C4.30187 17.7352 4.23563 17.8377 4.23563 17.9578H3.68393C3.68393 17.8207 3.74029 17.6887 3.853 17.5617C3.96769 17.433 4.12193 17.3315 4.31571 17.257C4.51148 17.1825 4.72603 17.1453 4.95936 17.1453C5.32914 17.1453 5.61883 17.2248 5.82844 17.384C6.03805 17.5414 6.1468 17.7589 6.15471 18.0366V19.3012C6.15471 19.5534 6.19228 19.754 6.26743 19.903V19.9436H5.692ZM4.7814 19.5856C4.95343 19.5856 5.11657 19.5475 5.27081 19.4713C5.42505 19.3951 5.53677 19.2961 5.60598 19.1742V18.6105H5.17589C4.50357 18.6105 4.16741 18.7789 4.16741 19.1158C4.16741 19.2631 4.22475 19.3782 4.33944 19.4611C4.45413 19.5441 4.60145 19.5856 4.7814 19.5856Z",
                    fill: "#FAEEE2"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 79,
                    columnNumber: 31
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                    d: "M8.77974 17.9477C8.77974 17.819 8.72239 17.7175 8.6077 17.643C8.49301 17.5668 8.3358 17.5287 8.13609 17.5287C7.9423 17.5287 7.78015 17.5719 7.64964 17.6582C7.52111 17.7445 7.45684 17.8461 7.45684 17.9629H6.91108C6.91108 17.7242 7.02774 17.5287 7.26108 17.3763C7.49441 17.224 7.78608 17.1478 8.13609 17.1478C8.5118 17.1478 8.80445 17.2172 9.01406 17.356C9.22367 17.4931 9.32847 17.6895 9.32847 17.9451C9.32847 18.0687 9.28497 18.1822 9.19796 18.2854C9.11095 18.3887 8.98736 18.4708 8.82719 18.5317C9.20092 18.6401 9.38779 18.8534 9.38779 19.1717C9.38779 19.4239 9.27409 19.6237 9.04669 19.7709C8.81928 19.9182 8.51575 19.9919 8.13609 19.9919C7.76631 19.9919 7.4608 19.9148 7.21955 19.7608C6.98029 19.605 6.86065 19.3951 6.86065 19.131H7.40642C7.40642 19.2648 7.47563 19.3799 7.61405 19.4764C7.75444 19.5712 7.92846 19.6186 8.13609 19.6186C8.34569 19.6186 8.51476 19.5771 8.64329 19.4942C8.77183 19.4112 8.83609 19.3037 8.83609 19.1717C8.83609 19.0176 8.78171 18.9076 8.67295 18.8415C8.56617 18.7738 8.39908 18.74 8.17168 18.74H7.62295V18.3438H8.21914C8.59287 18.3354 8.77974 18.2033 8.77974 17.9477Z",
                    fill: "#FAEEE2"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 83,
                    columnNumber: 31
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                    d: "M12.8107 18.6003C12.8107 19.0185 12.699 19.3553 12.4755 19.611C12.2521 19.8666 11.9495 19.9944 11.5679 19.9944C11.1783 19.9944 10.8718 19.8886 10.6484 19.677V21H10.0997V17.196H10.6009L10.6276 17.5008C10.8511 17.2638 11.1615 17.1453 11.559 17.1453C11.9446 17.1453 12.2491 17.2697 12.4726 17.5185C12.698 17.7674 12.8107 18.1136 12.8107 18.5571V18.6003ZM12.262 18.547C12.262 18.2372 12.1848 17.9926 12.0306 17.8131C11.8764 17.6337 11.6648 17.5439 11.3959 17.5439C11.0637 17.5439 10.8145 17.6701 10.6484 17.9223V19.2351C10.8125 19.4857 11.0637 19.611 11.4018 19.611C11.6648 19.611 11.8734 19.5221 12.0276 19.3443C12.1839 19.1649 12.262 18.8991 12.262 18.547Z",
                    fill: "#FAEEE2"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 87,
                    columnNumber: 31
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                    d: "M15.4921 19.9436C15.4604 19.8895 15.4347 19.793 15.415 19.6541C15.1599 19.881 14.8554 19.9944 14.5014 19.9944C14.185 19.9944 13.925 19.9182 13.7213 19.7659C13.5196 19.6118 13.4188 19.4171 13.4188 19.1818C13.4188 18.8957 13.5453 18.6739 13.7984 18.5165C14.0535 18.3574 14.4114 18.2778 14.8722 18.2778H15.4061V18.062C15.4061 17.8977 15.3487 17.7674 15.234 17.6709C15.1193 17.5727 14.9503 17.5236 14.7268 17.5236C14.5311 17.5236 14.3669 17.5659 14.2344 17.6506C14.102 17.7352 14.0357 17.8377 14.0357 17.9578H13.484C13.484 17.8207 13.5404 17.6887 13.6531 17.5617C13.7678 17.433 13.922 17.3315 14.1158 17.257C14.3116 17.1825 14.5261 17.1453 14.7594 17.1453C15.1292 17.1453 15.4189 17.2248 15.6285 17.384C15.8381 17.5414 15.9469 17.7589 15.9548 18.0366V19.3012C15.9548 19.5534 15.9924 19.754 16.0675 19.903V19.9436H15.4921ZM14.5815 19.5856C14.7535 19.5856 14.9167 19.5475 15.0709 19.4713C15.2251 19.3951 15.3369 19.2961 15.4061 19.1742V18.6105H14.976C14.3037 18.6105 13.9675 18.7789 13.9675 19.1158C13.9675 19.2631 14.0248 19.3782 14.1395 19.4611C14.2542 19.5441 14.4015 19.5856 14.5815 19.5856Z",
                    fill: "#FAEEE2"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 91,
                    columnNumber: 31
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                    d: "M18.2239 17.3535C18.6273 17.3535 18.9496 17.4694 19.1908 17.7014C19.4341 17.9316 19.5557 18.2355 19.5557 18.613V18.6562C19.5557 18.9152 19.4973 19.1471 19.3807 19.352C19.264 19.5551 19.0959 19.7134 18.8764 19.8268C18.6589 19.9385 18.4078 19.9944 18.123 19.9944C17.692 19.9944 17.3449 19.8717 17.0819 19.6262C16.8189 19.379 16.6874 19.0481 16.6874 18.6333V18.4048C16.6874 17.8275 16.812 17.3687 17.0612 17.0284C17.3123 16.6882 17.6821 16.4808 18.1705 16.4063C18.4473 16.364 18.6342 16.3123 18.7311 16.2514C18.828 16.1905 18.8764 16.1067 18.8764 16H19.3273C19.3273 16.2116 19.2709 16.3767 19.1582 16.4952C19.0475 16.6137 18.8695 16.6975 18.6243 16.7466L18.215 16.8253C17.8887 16.8913 17.6435 17.003 17.4794 17.1605C17.3172 17.3162 17.2114 17.5245 17.162 17.7852C17.4527 17.4974 17.8066 17.3535 18.2239 17.3535ZM18.1171 17.7395C17.8482 17.7395 17.6346 17.8173 17.4764 17.9731C17.3182 18.1271 17.2391 18.3413 17.2391 18.6155V18.6562C17.2391 18.9507 17.3182 19.1844 17.4764 19.357C17.6366 19.528 17.8521 19.6135 18.123 19.6135C18.3959 19.6135 18.6115 19.5272 18.7696 19.3545C18.9278 19.1818 19.0069 18.9296 19.0069 18.5978C19.0069 18.3388 18.9269 18.1314 18.7667 17.9756C18.6085 17.8182 18.392 17.7395 18.1171 17.7395Z",
                    fill: "#FAEEE2"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 95,
                    columnNumber: 31
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                    d: "M20.0273 18.5444C20.0273 18.2753 20.0886 18.0332 20.2112 17.8182C20.3358 17.6032 20.5078 17.4373 20.7273 17.3205C20.9488 17.2037 21.2009 17.1453 21.4837 17.1453C21.9207 17.1453 22.2736 17.2748 22.5426 17.5338C22.8135 17.7928 22.9489 18.1373 22.9489 18.5673V18.6003C22.9489 18.8678 22.8886 19.1082 22.768 19.3215C22.6493 19.5331 22.4783 19.6982 22.2548 19.8167C22.0334 19.9352 21.7783 19.9944 21.4896 19.9944C21.0546 19.9944 20.7016 19.8649 20.4307 19.6059C20.1618 19.3469 20.0273 19.0041 20.0273 18.5775V18.5444ZM20.579 18.6003C20.579 18.905 20.6611 19.1497 20.8252 19.3342C20.9913 19.5187 21.2127 19.611 21.4896 19.611C21.7684 19.611 21.9899 19.5179 22.154 19.3316C22.3181 19.1437 22.4002 18.8813 22.4002 18.5444C22.4002 18.2431 22.3161 17.9993 22.1481 17.8131C21.982 17.6252 21.7605 17.5312 21.4837 17.5312C21.2127 17.5312 20.9942 17.6235 20.8281 17.808C20.662 17.9926 20.579 18.2566 20.579 18.6003Z",
                    fill: "#FAEEE2"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 99,
                    columnNumber: 31
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                    d: "M25.9566 17.5769H24.8799V19.9436H24.3311V17.5769H23.2752V17.196H25.9566V17.5769Z",
                    fill: "#FAEEE2"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 103,
                    columnNumber: 31
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                    d: "M27.4901 18.773H27.0896V19.9436H26.5379V17.196H27.0896V18.3591H27.4485L28.5282 17.196H29.1926L27.9231 18.5165L29.2994 19.9436H28.6024L27.4901 18.773Z",
                    fill: "#FAEEE2"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 107,
                    columnNumber: 31
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                    d: "M31.7524 19.9436C31.7207 19.8895 31.695 19.793 31.6753 19.6541C31.4202 19.881 31.1157 19.9944 30.7617 19.9944C30.4453 19.9944 30.1853 19.9182 29.9816 19.7659C29.7799 19.6118 29.6791 19.4171 29.6791 19.1818C29.6791 18.8957 29.8056 18.6739 30.0587 18.5165C30.3138 18.3574 30.6717 18.2778 31.1325 18.2778H31.6664V18.062C31.6664 17.8977 31.609 17.7674 31.4943 17.6709C31.3796 17.5727 31.2106 17.5236 30.9871 17.5236C30.7914 17.5236 30.6272 17.5659 30.4947 17.6506C30.3623 17.7352 30.296 17.8377 30.296 17.9578H29.7443C29.7443 17.8207 29.8007 17.6887 29.9134 17.5617C30.0281 17.433 30.1823 17.3315 30.3761 17.257C30.5719 17.1825 30.7864 17.1453 31.0198 17.1453C31.3895 17.1453 31.6792 17.2248 31.8888 17.384C32.0984 17.5414 32.2072 17.7589 32.2151 18.0366V19.3012C32.2151 19.5534 32.2527 19.754 32.3278 19.903V19.9436H31.7524ZM30.8418 19.5856C31.0138 19.5856 31.177 19.5475 31.3312 19.4713C31.4854 19.3951 31.5972 19.2961 31.6664 19.1742V18.6105H31.2363C30.564 18.6105 30.2278 18.7789 30.2278 19.1158C30.2278 19.2631 30.2851 19.3782 30.3998 19.4611C30.5145 19.5441 30.6618 19.5856 30.8418 19.5856Z",
                    fill: "#FAEEE2"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 111,
                    columnNumber: 31
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                    d: "M35.8694 19.611C36.0651 19.611 36.2362 19.5602 36.3825 19.4586C36.5288 19.357 36.6099 19.2301 36.6257 19.0777H37.1448C37.1349 19.2351 37.0716 19.385 36.955 19.5272C36.8383 19.6694 36.6821 19.7828 36.4863 19.8674C36.2925 19.9521 36.0869 19.9944 35.8694 19.9944C35.4324 19.9944 35.0843 19.87 34.8253 19.6211C34.5682 19.3706 34.4397 19.0286 34.4397 18.5952V18.5165C34.4397 18.249 34.497 18.0112 34.6117 17.8029C34.7264 17.5947 34.8905 17.433 35.1041 17.3179C35.3196 17.2028 35.5737 17.1453 35.8664 17.1453C36.2263 17.1453 36.5249 17.2375 36.7622 17.422C37.0014 17.6066 37.129 17.8461 37.1448 18.1407H36.6257C36.6099 17.9629 36.5308 17.8173 36.3884 17.7039C36.248 17.5888 36.074 17.5312 35.8664 17.5312C35.5876 17.5312 35.3711 17.6176 35.2168 17.7902C35.0646 17.9612 34.9884 18.2092 34.9884 18.5343V18.6232C34.9884 18.9397 35.0646 19.1835 35.2168 19.3545C35.3691 19.5255 35.5866 19.611 35.8694 19.611Z",
                    fill: "#FAEEE2"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 115,
                    columnNumber: 31
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                    d: "M39.7431 19.9436C39.7115 19.8895 39.6858 19.793 39.666 19.6541C39.4109 19.881 39.1064 19.9944 38.7524 19.9944C38.4361 19.9944 38.176 19.9182 37.9724 19.7659C37.7707 19.6118 37.6698 19.4171 37.6698 19.1818C37.6698 18.8957 37.7964 18.6739 38.0495 18.5165C38.3046 18.3574 38.6625 18.2778 39.1232 18.2778H39.6571V18.062C39.6571 17.8977 39.5998 17.7674 39.4851 17.6709C39.3704 17.5727 39.2013 17.5236 38.9779 17.5236C38.7821 17.5236 38.618 17.5659 38.4855 17.6506C38.353 17.7352 38.2868 17.8377 38.2868 17.9578H37.7351C37.7351 17.8207 37.7914 17.6887 37.9041 17.5617C38.0188 17.433 38.1731 17.3315 38.3668 17.257C38.5626 17.1825 38.7772 17.1453 39.0105 17.1453C39.3803 17.1453 39.67 17.2248 39.8796 17.384C40.0892 17.5414 40.1979 17.7589 40.2058 18.0366V19.3012C40.2058 19.5534 40.2434 19.754 40.3186 19.903V19.9436H39.7431ZM38.8325 19.5856C39.0046 19.5856 39.1677 19.5475 39.3219 19.4713C39.4762 19.3951 39.5879 19.2961 39.6571 19.1742V18.6105H39.227C38.5547 18.6105 38.2185 18.7789 38.2185 19.1158C38.2185 19.2631 38.2759 19.3782 38.3906 19.4611C38.5053 19.5441 38.6526 19.5856 38.8325 19.5856Z",
                    fill: "#FAEEE2"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 119,
                    columnNumber: 31
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                    d: "M43.1423 17.196H43.691V19.9436H43.1423V17.9401L41.6622 19.9436H41.1135V17.196H41.6622V19.2021L43.1423 17.196ZM43.2906 16.1955C43.2906 16.4004 43.2086 16.5654 43.0444 16.6907C42.8823 16.8143 42.6687 16.8761 42.4037 16.8761C42.1388 16.8761 41.9242 16.8134 41.7601 16.6882C41.596 16.5629 41.5139 16.3987 41.5139 16.1955H41.9618C41.9618 16.314 41.9994 16.4071 42.0745 16.4749C42.1497 16.5409 42.2594 16.5739 42.4037 16.5739C42.5422 16.5739 42.6499 16.5409 42.7271 16.4749C42.8062 16.4088 42.8457 16.3157 42.8457 16.1955H43.2906Z",
                    fill: "#FAEEE2"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 123,
                    columnNumber: 31
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                    d: "M46.9568 17.5769H45.8801V19.9436H45.3313V17.5769H44.2754V17.196H46.9568V17.5769Z",
                    fill: "#FAEEE2"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 127,
                    columnNumber: 31
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                    d: "M49.4246 19.9436C49.3929 19.8895 49.3672 19.793 49.3475 19.6541C49.0924 19.881 48.7878 19.9944 48.4339 19.9944C48.1175 19.9944 47.8575 19.9182 47.6538 19.7659C47.4521 19.6118 47.3512 19.4171 47.3512 19.1818C47.3512 18.8957 47.4778 18.6739 47.7309 18.5165C47.986 18.3574 48.3439 18.2778 48.8046 18.2778H49.3386V18.062C49.3386 17.8977 49.2812 17.7674 49.1665 17.6709C49.0518 17.5727 48.8828 17.5236 48.6593 17.5236C48.4635 17.5236 48.2994 17.5659 48.1669 17.6506C48.0344 17.7352 47.9682 17.8377 47.9682 17.9578H47.4165C47.4165 17.8207 47.4729 17.6887 47.5856 17.5617C47.7003 17.433 47.8545 17.3315 48.0483 17.257C48.2441 17.1825 48.4586 17.1453 48.6919 17.1453C49.0617 17.1453 49.3514 17.2248 49.561 17.384C49.7706 17.5414 49.8794 17.7589 49.8873 18.0366V19.3012C49.8873 19.5534 49.9249 19.754 50 19.903V19.9436H49.4246ZM48.514 19.5856C48.686 19.5856 48.8491 19.5475 49.0034 19.4713C49.1576 19.3951 49.2693 19.2961 49.3386 19.1742V18.6105H48.9085C48.2361 18.6105 47.9 18.7789 47.9 19.1158C47.9 19.2631 47.9573 19.3782 48.072 19.4611C48.1867 19.5441 48.334 19.5856 48.514 19.5856Z",
                    fill: "#FAEEE2"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 131,
                    columnNumber: 31
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 74,
                  columnNumber: 28
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                  opacity: "0.56",
                  d: "M50.7463 1.85694C50.6194 1.47062 50.3657 1.17014 50.0697 0.912593C49.7313 0.655043 49.3508 0.440416 48.9702 0.311641C48.4627 0.182866 47.9552 0.13994 47.4478 0.13994H38.9901V8.51034L33.5348 0.13994H31.7164L26.2612 8.51034C26.2612 8.38157 26.3035 8.25279 26.3035 8.08109V6.83626C26.3035 6.44993 26.2612 6.06361 26.1343 5.72021C26.0075 5.33388 25.7537 5.03341 25.4577 4.77586C25.1194 4.5183 24.7388 4.30368 24.3582 4.1749C23.8507 4.04613 23.3433 4.0032 22.8358 4.0032H17.1692C16.3657 4.0032 16.3657 3.6598 16.3657 3.4881V2.88715C16.3657 2.71545 16.3657 2.37205 17.1692 2.37205H25.8806V0.0111663H17.1692C16.6617 -0.0317588 16.1119 0.0540888 15.6468 0.182864C15.2239 0.268714 14.8433 0.483341 14.5473 0.783817C14.2512 1.04137 13.9975 1.34185 13.8706 1.72817C13.7438 2.07157 13.7015 2.4579 13.7015 2.84422V3.44518C13.7015 3.8315 13.7438 4.21783 13.8706 4.56123C13.9975 4.94756 14.2512 5.24803 14.5473 5.50558C14.8856 5.76313 15.2662 5.97776 15.6468 6.10653C16.1542 6.23531 16.6617 6.27823 17.1692 6.27823H22.9204C23.7239 6.27823 23.7239 6.62163 23.7239 6.79333V8.03817C23.7239 8.20987 23.7239 8.55327 22.9204 8.55327H14.4627L8.96518 0.0970153H7.14677L0 11H3.08707L7.90797 3.35932L12.7289 11H27.7836L32.6891 3.35932L37.51 11H41.7811V7.30844H47.5323C48.0398 7.35136 48.5896 7.26551 49.0547 7.13674C49.4776 7.05089 49.8582 6.83626 50.1542 6.53578C50.4503 6.27823 50.704 5.97776 50.8309 5.59143C50.9577 5.24803 51 4.8617 51 4.47538V3.01593C51 2.6296 50.8731 2.24327 50.7463 1.85694ZM48.2512 2.93007V4.43245C48.2512 4.60415 48.2512 4.94756 47.4478 4.94756H41.6965V2.50082H47.4478C48.2512 2.50082 48.2512 2.75837 48.2512 2.93007Z",
                  fill: "#FAEEE2"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 136,
                  columnNumber: 28
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 25
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 22
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 19
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 16
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()((_Footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().corp)),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SVG_HeaderLogoSVG__WEBPACK_IMPORTED_MODULE_2__.Logo, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "\xA9 Pty Ltd and Wild Game Resources"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 16
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "Australia Pty Ltd"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 16
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "Terms & Conditions"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 16
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 10
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 7
  }, undefined);
};

/***/ }),

/***/ "./src/components/Common/Header/Header.jsx":
/*!*************************************************!*\
  !*** ./src/components/Common/Header/Header.jsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Header.module.scss */ "./src/components/Common/Header/Header.module.scss");
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Header_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/styles/Main.module.scss */ "./src/styles/Main.module.scss");
/* harmony import */ var src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _SVG_HeaderLogoSVG__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../SVG/HeaderLogoSVG */ "./src/components/SVG/HeaderLogoSVG.jsx");

var _jsxFileName = "C:\\Users\\\u042E\u0437\u0435\u0440\\Desktop\\\u0421\u0430\u0439\u0442\u044B\\ko-cheese-react\\src\\components\\Common\\Header\\Header.jsx";






const headerLinks = [{
  title: "Точки продаж",
  link: "/"
}, {
  title: "Доставка",
  link: "/"
}, {
  title: "Вопросы",
  link: "/"
}, {
  logo: true
}, {
  title: "Ферма",
  link: "/"
}, {
  title: "Продукция",
  link: "/products"
}, {
  title: "Войти",
  link: "/"
}];
const Header = ({
  promo
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default().header)),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_6___default().wrapper)),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container), promo ? (_Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default().border_accent) : ''),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
          className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default().nav)),
          children: headerLinks.map((el, i) => el.logo ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
            href: "/",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default().logo), promo ? (_Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default().logo_accent) : ''),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SVG_HeaderLogoSVG__WEBPACK_IMPORTED_MODULE_4__.Logo, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 28,
                columnNumber: 31
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 28
            }, undefined)
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 25
          }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
            href: el.link,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default().link), promo ? (_Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default().link_accent) : ''),
              children: el.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 28
            }, undefined)
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 25
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 16
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default().control)),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            type: "button",
            className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default().button), promo ? (_Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default().button_accent) : ''),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
              width: "20",
              height: "18",
              viewBox: "0 0 20 18",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                d: "M10.0493 3.63424L10.4686 4.28196L10.8885 3.6346C12.3803 1.33453 14.4578 0.883631 16.1377 1.52895C17.8493 2.18645 19.25 4.01976 19.25 6.51051C19.25 7.37032 18.7925 8.42411 18.0006 9.58141C17.219 10.7238 16.1593 11.8991 15.06 12.9882C13.9629 14.0752 12.8385 15.0645 11.9347 15.8362C11.6101 16.1134 11.3155 16.3611 11.0601 16.5759C10.9594 16.6606 10.8649 16.7401 10.7769 16.8144C10.664 16.9096 10.5592 16.9984 10.4658 17.0789C10.3671 16.9964 10.2561 16.9055 10.1369 16.8086C10.0097 16.7051 9.87042 16.5926 9.71965 16.4708C9.48358 16.2801 9.2193 16.0666 8.92885 15.8293C7.98374 15.057 6.80445 14.0673 5.65234 12.9798C4.4979 11.8901 3.38384 10.7144 2.56183 9.57177C1.72801 8.41274 1.25 7.36256 1.25 6.51051C1.25 4.0186 2.74286 2.17768 4.57391 1.51716C6.38163 0.865062 8.56776 1.34581 10.0493 3.63424Z",
                stroke: "#FAEEE2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 25
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 22
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 19
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            type: "button",
            className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default().button)),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
              width: "15",
              height: "21",
              viewBox: "0 0 15 21",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("rect", {
                x: "0.5",
                y: "6.5",
                width: "14",
                height: "14",
                stroke: "#FFF3E7"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 25
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                d: "M12 10V5.5C12 3.01472 9.98528 1 7.5 1V1C5.01472 1 3 3.01472 3 5.5V10",
                stroke: "#FFF3E7"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 25
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 22
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 19
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 16
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 10
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 7
  }, undefined);
};

/***/ }),

/***/ "./src/components/Common/Product/Product.jsx":
/*!***************************************************!*\
  !*** ./src/components/Common/Product/Product.jsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Product": function() { return /* binding */ Product; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/constants */ "./src/constants.js");
/* harmony import */ var _Product_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Product.module.scss */ "./src/components/Common/Product/Product.module.scss");
/* harmony import */ var _Product_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Product_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/styles/Main.module.scss */ "./src/styles/Main.module.scss");
/* harmony import */ var src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\\u042E\u0437\u0435\u0440\\Desktop\\\u0421\u0430\u0439\u0442\u044B\\ko-cheese-react\\src\\components\\Common\\Product\\Product.jsx";






const Product = ({
  status,
  image,
  name,
  addition,
  weight,
  price,
  link,
  tastes,
  additionClass,
  id
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_Product_module_scss__WEBPACK_IMPORTED_MODULE_5___default().card), additionClass && (_Product_module_scss__WEBPACK_IMPORTED_MODULE_5___default())[additionClass]),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      type: "button",
      className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_Product_module_scss__WEBPACK_IMPORTED_MODULE_5___default().add)),
      children: "+"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_6___default())[src_constants__WEBPACK_IMPORTED_MODULE_4__.allStatus[status].class]),
      children: src_constants__WEBPACK_IMPORTED_MODULE_4__.allStatus[status].title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      src: image,
      alt: name,
      className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_Product_module_scss__WEBPACK_IMPORTED_MODULE_5___default().image))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_Product_module_scss__WEBPACK_IMPORTED_MODULE_5___default().name)),
      children: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_Product_module_scss__WEBPACK_IMPORTED_MODULE_5___default().addition)),
      children: addition
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_Product_module_scss__WEBPACK_IMPORTED_MODULE_5___default().info)),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_Product_module_scss__WEBPACK_IMPORTED_MODULE_5___default().well)),
        children: (tastes === null || tastes === void 0 ? void 0 : tastes.length) && tastes.map(taste => src_constants__WEBPACK_IMPORTED_MODULE_4__.allTastes[taste])
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_Product_module_scss__WEBPACK_IMPORTED_MODULE_5___default().weight)),
        children: weight
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_Product_module_scss__WEBPACK_IMPORTED_MODULE_5___default().price)),
      children: [price, " \u0440\u0443\u0431."]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
      href: `/products/${id}`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_Product_module_scss__WEBPACK_IMPORTED_MODULE_5___default().more)),
        children: "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 10
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 7
  }, undefined);
};

/***/ }),

/***/ "./src/components/Common/Slider/Slider.jsx":
/*!*************************************************!*\
  !*** ./src/components/Common/Slider/Slider.jsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Slider": function() { return /* binding */ Slider; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ "swiper/react");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper */ "swiper");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Common_Slider_SliderNav_SliderNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Common/Slider/SliderNav/SliderNav */ "./src/components/Common/Slider/SliderNav/SliderNav.jsx");
/* harmony import */ var _Slider_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Slider.module.scss */ "./src/components/Common/Slider/Slider.module.scss");
/* harmony import */ var _Slider_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Slider_module_scss__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "C:\\Users\\\u042E\u0437\u0435\u0440\\Desktop\\\u0421\u0430\u0439\u0442\u044B\\ko-cheese-react\\src\\components\\Common\\Slider\\Slider.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const Slider = ({
  children,
  slides,
  params,
  title
}) => {
  swiper__WEBPACK_IMPORTED_MODULE_3___default().use([swiper__WEBPACK_IMPORTED_MODULE_3__.Navigation]);
  const prevRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
  const nextRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
  const [currentCount, setCurrentCount] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(1);
  const allCount = Math.ceil(slides.length / params.slider.slidesPerView);

  const _params$slider = params.slider,
        {
    sliderClass,
    slideClass
  } = _params$slider,
        restParams = _objectWithoutProperties(_params$slider, ["sliderClass", "slideClass"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_Slider_SliderNav_SliderNav__WEBPACK_IMPORTED_MODULE_4__.SliderNav, {
      title: title,
      prev: prevRef,
      next: nextRef,
      allCount: allCount,
      currentCount: currentCount,
      params: params.nav
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, _objectSpread(_objectSpread({
      onInit: swiper => {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.navigation.update();
      },
      navigation: true,
      onSlideChange: e => setCurrentCount(++e.snapIndex),
      speed: 500,
      className: (_Slider_module_scss__WEBPACK_IMPORTED_MODULE_5___default())[sliderClass]
    }, restParams), {}, {
      children: slides.map((slide, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
        className: (_Slider_module_scss__WEBPACK_IMPORTED_MODULE_5___default())[slideClass],
        children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(children, _objectSpread({}, slide))
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 16
      }, undefined))
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 10
    }, undefined)]
  }, void 0, true);
};

/***/ }),

/***/ "./src/components/Common/Slider/SliderNav/SliderNav.jsx":
/*!**************************************************************!*\
  !*** ./src/components/Common/Slider/SliderNav/SliderNav.jsx ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SliderNav": function() { return /* binding */ SliderNav; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SliderNav_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SliderNav.module.scss */ "./src/components/Common/Slider/SliderNav/SliderNav.module.scss");
/* harmony import */ var _SliderNav_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_SliderNav_module_scss__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\\u042E\u0437\u0435\u0440\\Desktop\\\u0421\u0430\u0439\u0442\u044B\\ko-cheese-react\\src\\components\\Common\\Slider\\SliderNav\\SliderNav.jsx";



const SliderNav = ({
  title,
  prev,
  next,
  allCount,
  currentCount,
  params
}) => {
  const {
    counter
  } = params;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_SliderNav_module_scss__WEBPACK_IMPORTED_MODULE_3___default().header)),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_SliderNav_module_scss__WEBPACK_IMPORTED_MODULE_3___default().title)),
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_SliderNav_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container)),
      children: [counter && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_SliderNav_module_scss__WEBPACK_IMPORTED_MODULE_3___default().counter)),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_SliderNav_module_scss__WEBPACK_IMPORTED_MODULE_3___default().counter__current)),
          children: currentCount < 10 ? "0" + currentCount : currentCount
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 19
        }, undefined), "/", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_SliderNav_module_scss__WEBPACK_IMPORTED_MODULE_3___default().counter__all)),
          children: allCount < 10 ? "0" + allCount : allCount
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 19
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 16
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_SliderNav_module_scss__WEBPACK_IMPORTED_MODULE_3___default().nav)),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          ref: prev,
          className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_SliderNav_module_scss__WEBPACK_IMPORTED_MODULE_3___default().prev)),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
            width: "9",
            height: "16",
            viewBox: "0 0 9 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M6.65715 0.92888L0.293191 7.29284C-0.0973333 7.68337 -0.0973332 8.31653 0.293191 8.70705L6.65715 15.071C7.04768 15.4615 7.68084 15.4615 8.07137 15.071C8.46189 14.6805 8.46189 14.0473 8.07137 13.6568L2.41451 7.99995L8.07136 2.34309C8.46189 1.95257 8.46189 1.3194 8.07136 0.92888C7.68084 0.538355 7.04768 0.538355 6.65715 0.92888Z",
              fill: "#184140"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 22
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 19
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 16
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          ref: next,
          className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_SliderNav_module_scss__WEBPACK_IMPORTED_MODULE_3___default().next)),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
            width: "9",
            height: "16",
            viewBox: "0 0 9 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              d: "M8.70711 8.70711C9.09763 8.31658 9.09763 7.68342 8.70711 7.29289L2.34315 0.928932C1.95262 0.538407 1.31946 0.538407 0.928933 0.928932C0.538408 1.31946 0.538408 1.95262 0.928933 2.34315L6.58579 8L0.928932 13.6569C0.538407 14.0474 0.538407 14.6805 0.928932 15.0711C1.31946 15.4616 1.95262 15.4616 2.34315 15.0711L8.70711 8.70711ZM7 9L8 9L8 7L7 7L7 9Z",
              fill: "#184140"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 22
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 19
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 16
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 10
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 7
  }, undefined);
};

/***/ }),

/***/ "./src/components/SVG/HeaderLogoSVG.jsx":
/*!**********************************************!*\
  !*** ./src/components/SVG/HeaderLogoSVG.jsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Logo": function() { return /* binding */ Logo; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\\u042E\u0437\u0435\u0440\\Desktop\\\u0421\u0430\u0439\u0442\u044B\\ko-cheese-react\\src\\components\\SVG\\HeaderLogoSVG.jsx";

const Logo = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
    width: "100",
    height: "36",
    viewBox: "0 0 100 36",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
      clipPath: "url(#clip0)",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M5.71937 35.0474C5.90387 35.2117 5.99612 35.3759 5.99612 35.573C5.99612 35.8029 5.78087 35.9671 5.50411 35.9671C5.31961 35.9671 5.10436 35.8686 4.91986 35.7044L1.93708 32.9452V35.4416C1.93708 35.7372 1.69108 35.9671 1.35282 35.9671C1.04532 35.9671 0.799316 35.7701 0.799316 35.4416V30.1204C0.799316 29.8248 1.04532 29.6277 1.35282 29.6277C1.72183 29.6277 1.93708 29.8248 1.93708 30.1533V32.1569L4.55085 29.9233C4.79686 29.7263 4.95061 29.6277 5.13511 29.6277C5.44261 29.6277 5.62711 29.8248 5.62711 30.1204C5.62711 30.2518 5.53486 30.3832 5.41186 30.5146L2.85959 32.5182L5.71937 35.0474Z",
        fill: "#FFF3E7"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M9.59407 29.6277C7.74906 29.6277 6.51904 31.0073 6.51904 32.8139C6.51904 34.489 7.68755 36 9.59407 36C11.5006 36 12.6691 34.489 12.6691 32.8139C12.6691 31.1387 11.5621 29.6277 9.59407 29.6277ZM9.56332 35.1131C8.21031 35.1131 7.6568 33.8978 7.6568 32.8139C7.6568 31.6971 8.24106 30.5146 9.59407 30.5146C10.9163 30.5146 11.5006 31.6642 11.5006 32.8139C11.5313 33.9306 11.0086 35.1131 9.56332 35.1131Z",
        fill: "#FFF3E7"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M17.5893 32.5839C18.4196 32.354 18.8501 31.8613 18.8501 31.2044C18.8501 30.1861 17.8046 29.6277 16.5131 29.6277C15.2523 29.6277 13.8685 30.0547 13.8685 30.6131C13.8685 30.9416 14.1146 31.1058 14.4528 31.1058C14.9448 31.1058 15.0678 30.5474 16.4208 30.5474C17.1588 30.5474 17.7123 30.6788 17.7123 31.3357C17.7123 32.0584 16.9436 32.2226 16.2671 32.2226H15.6213C15.2523 32.2226 15.1601 32.4525 15.1601 32.6825C15.1601 32.8795 15.3753 33.0438 15.6213 33.0438H16.2978C17.1281 33.0438 17.9276 33.208 17.9276 33.9635C17.9276 34.916 16.9128 35.146 16.2056 35.146C15.0063 35.146 14.6988 34.3576 14.1146 34.3576C13.807 34.3576 13.5918 34.6533 13.5918 34.8503C13.5918 35.4087 15.1908 36.0328 16.2978 36.0328C18.1121 36.0328 19.0961 35.0803 19.0961 34.0949C19.0653 33.1423 18.2966 32.7153 17.5893 32.5839Z",
        fill: "#FFF3E7"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M22.8472 31.927H21.525V30.1861C21.525 29.8248 21.2482 29.6277 20.9407 29.6277C20.6332 29.6277 20.3872 29.8248 20.3872 30.1861V35.343C20.3872 35.7044 20.541 35.9343 21.0637 35.9343H22.9087C24.477 35.9343 25.7993 35.3759 25.7993 33.8978C25.7685 32.2555 24.0772 31.927 22.8472 31.927ZM22.632 35.0474H21.525V32.8139H22.6935C23.7697 32.8139 24.5385 33.0109 24.5385 33.8978C24.5385 34.8503 23.5545 35.0474 22.632 35.0474Z",
        fill: "#FFF3E7"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M26.9373 29.6277C26.599 29.6277 26.3838 29.8576 26.3838 30.1861V35.4744C26.3838 35.7701 26.6298 36 26.9373 36C27.2755 36 27.5215 35.7701 27.5215 35.4744V30.1533C27.5215 29.8576 27.2755 29.6277 26.9373 29.6277Z",
        fill: "#FFF3E7"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M37.1774 29.6277C36.8391 29.6277 36.6546 29.7919 36.2856 30.2847L33.3336 34.1277V30.1861C33.3336 29.8248 33.0568 29.6277 32.7493 29.6277C32.4418 29.6277 32.1958 29.8248 32.1958 30.1861V35.3759C32.1958 35.9343 32.4418 36.0328 32.7493 36.0328C33.0876 36.0328 33.3336 35.8029 33.8256 35.146L36.5623 31.5328V35.5073C36.5623 35.8029 36.7161 36 37.1159 36C37.5156 36 37.7001 35.8357 37.7001 35.4744V30.1861C37.7001 29.8576 37.5464 29.6277 37.1774 29.6277Z",
        fill: "#FFF3E7"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M44.4958 32.5182L46.9866 30.5146C47.1403 30.3832 47.2018 30.2847 47.2018 30.1204C47.2018 29.8248 47.0173 29.6277 46.7098 29.6277C46.5253 29.6277 46.3716 29.6934 46.1256 29.9233L43.5118 32.1569V30.1533C43.5118 29.8248 43.2965 29.6277 42.9275 29.6277C42.62 29.6277 42.374 29.8248 42.374 30.1204V35.4744C42.374 35.8029 42.6508 36 42.9275 36C43.2658 36 43.5118 35.7701 43.5118 35.4744V32.9781L46.4946 35.7372C46.6791 35.9014 46.8943 36 47.0788 36C47.3556 36 47.5708 35.8358 47.5708 35.6058C47.5708 35.4087 47.4786 35.2445 47.2941 35.0803L44.4958 32.5182Z",
        fill: "#FFF3E7"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M51.2298 29.6277C49.3848 29.6277 48.1548 31.0073 48.1548 32.8139C48.1548 34.489 49.3233 36 51.2298 36C53.1363 36 54.3049 34.489 54.3049 32.8139C54.2741 31.1387 53.1671 29.6277 51.2298 29.6277ZM51.1991 35.1131C49.8461 35.1131 49.2925 33.8978 49.2925 32.8139C49.2925 31.6971 49.8768 30.5146 51.2298 30.5146C52.5521 30.5146 53.1363 31.6642 53.1363 32.8139C53.1363 33.9306 52.6136 35.1131 51.1991 35.1131Z",
        fill: "#FFF3E7"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M63.0074 30.1861C62.9459 29.792 62.6999 29.6277 62.2694 29.6277C61.8081 29.6277 61.6544 29.8248 61.3776 30.4489L59.4096 34.489L57.4416 30.4489C57.1341 29.8248 57.0111 29.6277 56.5498 29.6277C56.15 29.6277 55.8733 29.792 55.8425 30.1861L55.289 35.0474C55.2583 35.2774 55.2275 35.4744 55.2275 35.5073C55.2275 35.8029 55.412 36.0328 55.781 36.0328C56.1808 36.0328 56.3653 35.7701 56.4268 35.3759L56.8266 31.5657L58.5486 34.9817C58.9176 35.7044 59.1021 36.0328 59.4711 36.0328C59.8401 36.0328 60.0246 35.7044 60.3936 34.9817L62.1156 31.5657L62.5461 35.5073C62.5769 35.7372 62.7306 36.0328 63.1611 36.0328C63.4994 36.0328 63.7146 35.8357 63.7146 35.5073C63.7146 35.4744 63.6839 35.2774 63.6839 35.146L63.0074 30.1861Z",
        fill: "#FFF3E7"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M69.7111 29.6934H65.406C65.0678 29.6934 64.8525 29.9233 64.8525 30.219V35.4744C64.8525 35.8358 65.0985 36 65.406 36C65.775 36 66.0211 35.8029 66.0211 35.5073V30.5803H69.1576V35.5073C69.1576 35.8029 69.4036 36 69.7418 36C70.0186 36 70.2953 35.8358 70.2953 35.4744V30.219C70.2953 29.9233 70.0493 29.6934 69.7111 29.6934Z",
        fill: "#FFF3E7"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M77.0604 29.6277C76.7529 29.6277 76.5069 29.8577 76.5069 30.1204V30.4489H76.4762C75.8919 29.8577 75.3692 29.5949 74.5082 29.5949C72.6016 29.5949 71.5254 31.1387 71.5254 32.8139C71.5254 34.5876 72.7554 35.9671 74.6619 35.9671C75.3692 35.9671 75.9842 35.6387 76.4762 35.0474H76.5069V35.5073C76.5069 35.8357 76.7529 36 77.0604 36C77.3987 36 77.6139 35.8029 77.6139 35.4744V30.1533C77.5832 29.8577 77.3679 29.6277 77.0604 29.6277ZM74.5082 35.1131C73.1552 35.1131 72.6632 33.8321 72.6632 32.8139C72.6632 31.6314 73.3089 30.5146 74.5697 30.5146C75.8919 30.5146 76.5069 31.6971 76.5069 32.8139C76.5069 33.9963 75.9842 35.1131 74.5082 35.1131Z",
        fill: "#FFF3E7"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M83.9792 29.6277C83.6717 29.6277 83.4257 29.8248 83.4257 30.1861V32.1569H80.2891V30.1861C80.2891 29.8248 80.0124 29.6277 79.7049 29.6277C79.3666 29.6277 79.1514 29.8248 79.1514 30.1861V35.4744C79.1514 35.8357 79.3359 36 79.7049 36C80.0739 36 80.3199 35.8029 80.3199 35.4416V33.0109H83.4564V35.4087C83.4564 35.7044 83.6102 35.9671 84.0407 35.9671C84.3482 35.9671 84.5942 35.8029 84.5942 35.4416V30.1861C84.5634 29.8248 84.2867 29.6277 83.9792 29.6277Z",
        fill: "#FFF3E7"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M91.0826 29.6277C90.7444 29.6277 90.5599 29.7919 90.1909 30.2847L87.2388 34.1277V30.1861C87.2388 29.8248 86.9621 29.6277 86.6546 29.6277C86.3471 29.6277 86.1011 29.8248 86.1011 30.1861V35.3759C86.1011 35.9343 86.3471 36.0328 86.6546 36.0328C86.9928 36.0328 87.2388 35.8029 87.7308 35.146L90.4676 31.5328V35.5073C90.4676 35.8029 90.6214 36 91.0211 36C91.4209 36 91.6054 35.8357 91.6054 35.4744V30.1861C91.5746 29.8576 91.4209 29.6277 91.0826 29.6277Z",
        fill: "#FFF3E7"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M97.4475 29.6277H95.3565C94.2495 29.6277 92.9887 30.1533 92.9887 31.5C92.9887 32.4525 93.7882 33.0109 94.803 33.1095L93.0502 35.0803C92.8965 35.2445 92.835 35.4416 92.835 35.573C92.835 35.8686 93.081 36.0328 93.3885 36.0328C93.6037 36.0328 93.7882 35.9343 93.942 35.7701L96.033 33.2409H97.1093V35.4744C97.1093 35.8357 97.386 36 97.6935 36C98.0318 36 98.247 35.8029 98.247 35.4744V30.2847C98.2163 29.7591 98.0318 29.6277 97.4475 29.6277ZM97.0478 32.4525H95.5717C94.8952 32.4525 94.2187 32.2226 94.2187 31.5C94.2187 30.8102 94.8337 30.5146 95.6332 30.5146H97.0478V32.4525Z",
        fill: "#FFF3E7"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M5.53506 20.1679V16.2591C5.62731 16.3905 5.65806 16.5219 5.75031 16.6533C5.75031 16.6533 9.44035 21.1204 10.8856 22.6971C12.2079 24.1423 13.2226 24.438 14.4219 24.438C16.2362 24.438 17.5892 22.0073 15.5289 20.0693L10.1169 14.8139C9.99385 14.7153 10.0246 14.5182 10.1476 14.4197L14.1144 11.5292C14.9754 10.8394 15.5289 9.91971 15.5289 9.13139C15.5289 8.08029 14.5141 7.25912 13.1919 7.25912C12.2079 7.25912 11.3469 7.62044 10.3321 8.57299L5.99631 12.5803C5.81181 12.7445 5.68881 12.9745 5.53506 13.2044V12.3175V3.61314C5.53506 1.18248 4.6433 0 2.76753 0C0.891759 0 0 1.18248 0 3.61314V20.1679C0 22.5985 0.891759 23.781 2.79828 23.781C4.7048 23.781 5.53506 22.5657 5.53506 20.1679Z",
        fill: "#FFF3E7"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M26.9682 6.37228C21.4946 6.37228 17.5278 10.0183 17.5278 15.1752C17.5278 20.3321 21.4946 23.9781 26.9682 23.9781C32.4725 23.9781 36.3778 20.365 36.3778 15.2081C36.3778 10.0183 32.4725 6.37228 26.9682 6.37228ZM26.9682 20.0037C24.8464 20.0037 23.2474 17.7701 23.2474 15.1752C23.2474 12.5803 24.9079 10.3796 26.9682 10.3796C29.0284 10.3796 30.6582 12.646 30.6582 15.1424C30.6275 17.7044 29.0899 20.0037 26.9682 20.0037Z",
        fill: "#FFF3E7"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M58.4871 18.5584C60.5782 16.8175 61.6544 15.6679 61.6544 14.4526C61.6544 13.2701 60.6704 12.3504 59.5019 12.3504C58.2411 12.3504 57.1034 13.5328 55.4121 15.4051L51.9066 11.792C54.7049 10.2482 56.2731 7.81752 56.2731 5.4854C56.2731 2.4635 53.4441 0 48.9853 0C44.5573 0 41.6975 2.33212 41.6975 5.25548C41.6975 6.86496 42.497 8.90146 44.096 10.4124C40.2215 12.1204 38.3149 14.354 38.3149 17.3102C38.3149 21.2518 41.8205 24.2409 46.7405 24.2409C49.9693 24.2409 52.6753 23.354 54.7049 21.7117C56.3039 23.5839 57.3186 24.2409 58.4256 24.2409C59.7787 24.2409 60.7319 23.1241 60.7319 21.9088C60.6704 20.8248 59.8402 19.938 58.4871 18.5584ZM47.3863 20.6934C45.2953 20.6934 44.0345 18.854 44.0345 17.1788C44.0345 15.7993 45.1723 14.5182 47.171 13.6642L51.6606 18.4927C50.2461 19.6095 48.7701 20.6934 47.3863 20.6934ZM48.9238 8.73723C47.6015 7.65329 46.9558 6.24088 46.9558 5.38686C46.9558 4.40146 47.786 3.0219 49.2621 3.0219C50.9226 3.0219 51.7221 4.10584 51.7221 5.4854C51.6913 6.63504 50.7996 8.04745 48.9238 8.73723Z",
        fill: "#FFF3E7"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M77.2142 18.6898C76.2917 18.6898 75.0309 20.0037 73.4012 20.0037C70.8489 20.0037 69.3421 17.8029 69.3421 15.2409C69.3421 12.6788 70.9411 10.3796 73.1859 10.3796C74.7849 10.3796 76.0764 11.6934 77.122 11.6934C78.475 11.6934 79.4282 10.7737 79.4282 9.59125C79.4282 7.71899 76.9682 6.40512 73.2167 6.40512C67.3741 6.40512 63.6533 10.084 63.6533 15.208C63.6533 20.4635 67.4356 23.9781 72.8784 23.9781C76.7529 23.9781 79.4282 22.5657 79.4282 20.8248C79.3667 19.6423 78.5057 18.6898 77.2142 18.6898Z",
        fill: "#FFF3E7"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M90.621 6.37228C85.1475 6.37228 81.1807 10.0183 81.1807 15.1752C81.1807 20.3321 85.1475 23.9453 90.621 23.9453C96.1253 23.9453 100.031 20.3321 100.031 15.1752C99.9998 10.0183 96.1253 6.37228 90.621 6.37228ZM90.621 20.0037C88.4992 20.0037 86.9002 17.7701 86.9002 15.1752C86.9002 12.5803 88.5607 10.3796 90.621 10.3796C92.6813 10.3796 94.311 12.646 94.311 15.1424C94.2803 17.7044 92.7428 20.0037 90.621 20.0037Z",
        fill: "#FFF3E7"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("defs", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("clipPath", {
        id: "clip0",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("rect", {
          width: "100",
          height: "36",
          fill: "white"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 16
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 10
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 7
  }, undefined);
};

/***/ }),

/***/ "./src/components/SVG/TastesSVG/TastesSVG.jsx":
/*!****************************************************!*\
  !*** ./src/components/SVG/TastesSVG/TastesSVG.jsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedWine": function() { return /* binding */ RedWine; },
/* harmony export */   "WhiteWine": function() { return /* binding */ WhiteWine; },
/* harmony export */   "Vegetables": function() { return /* binding */ Vegetables; },
/* harmony export */   "Fruits": function() { return /* binding */ Fruits; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TastesSVG_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TastesSVG.module.scss */ "./src/components/SVG/TastesSVG/TastesSVG.module.scss");
/* harmony import */ var _TastesSVG_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_TastesSVG_module_scss__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\\u042E\u0437\u0435\u0440\\Desktop\\\u0421\u0430\u0439\u0442\u044B\\ko-cheese-react\\src\\components\\SVG\\TastesSVG\\TastesSVG.jsx";



const RedWine = ({
  border
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_TastesSVG_module_scss__WEBPACK_IMPORTED_MODULE_3___default().taste), border === "accent" ? (_TastesSVG_module_scss__WEBPACK_IMPORTED_MODULE_3___default().accent) : ""),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
      width: "8",
      height: "12",
      viewBox: "0 0 8 12",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M1.19368 0.742065C1.10812 0.742065 1.02607 0.776052 0.965577 0.836549C0.90508 0.897045 0.871094 0.979096 0.871094 1.06465V4.61309C0.871084 5.4128 1.16812 6.18401 1.70458 6.77709C2.24103 7.37017 2.97867 7.74285 3.77437 7.82282V10.4196H2.48402C2.39847 10.4196 2.31642 10.4536 2.25592 10.5141C2.19542 10.5746 2.16144 10.6567 2.16144 10.7422C2.16144 10.8278 2.19542 10.9098 2.25592 10.9703C2.31642 11.0308 2.39847 11.0648 2.48402 11.0648H5.70988C5.79543 11.0648 5.87749 11.0308 5.93798 10.9703C5.99848 10.9098 6.03247 10.8278 6.03247 10.7422C6.03247 10.6567 5.99848 10.5746 5.93798 10.5141C5.87749 10.4536 5.79543 10.4196 5.70988 10.4196H4.41954V7.83895V7.82282C5.21524 7.74285 5.95287 7.37017 6.48932 6.77709C7.02578 6.18401 7.32282 5.4128 7.32281 4.61309V1.06465C7.32281 0.979096 7.28882 0.897045 7.22833 0.836549C7.16783 0.776052 7.08578 0.742065 7.00022 0.742065H1.19368ZM1.51627 3.00017V1.38724H6.67764V3.00017H1.51627ZM6.32408 4.66148C6.24698 5.1247 6.02738 5.55236 5.69585 5.88493C5.36432 6.2175 4.93735 6.43844 4.47438 6.517C4.43261 6.52407 4.38985 6.52285 4.34856 6.5134C4.30726 6.50395 4.26823 6.48646 4.23369 6.46193C4.19915 6.4374 4.16978 6.4063 4.14726 6.37042C4.12474 6.33453 4.10951 6.29457 4.10244 6.2528C4.09536 6.21103 4.09658 6.16827 4.10603 6.12698C4.11548 6.08568 4.13297 6.04665 4.1575 6.01211C4.18204 5.97757 4.21313 5.9482 4.24901 5.92568C4.2849 5.90316 4.32486 5.88793 4.36663 5.88086C4.69732 5.82477 5.0023 5.667 5.23912 5.42948C5.47594 5.19196 5.63283 4.88652 5.68794 4.55567C5.70419 4.47339 5.75185 4.40067 5.82081 4.35293C5.88977 4.3052 5.97461 4.28619 6.05735 4.29995C6.14008 4.31371 6.2142 4.35916 6.264 4.42665C6.31379 4.49414 6.33534 4.57837 6.32408 4.66148Z",
        fill: "#FAEEE2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 10
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 7
  }, undefined);
};
const WhiteWine = ({
  border
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_TastesSVG_module_scss__WEBPACK_IMPORTED_MODULE_3___default().taste), border === "accent" ? (_TastesSVG_module_scss__WEBPACK_IMPORTED_MODULE_3___default().accent) : ""),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
      width: "8",
      height: "12",
      viewBox: "0 0 8 12",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M6.3324 4.53477C6.33822 4.48214 6.33362 4.42887 6.31886 4.37801C6.3041 4.32715 6.27947 4.2797 6.24637 4.23836C6.21327 4.19703 6.17235 4.16261 6.12595 4.13709C6.07955 4.11156 6.02858 4.09543 5.97594 4.08961C5.92331 4.08378 5.87004 4.08838 5.81918 4.10314C5.76832 4.1179 5.72087 4.14254 5.67953 4.17564C5.6382 4.20874 5.60378 4.24965 5.57826 4.29605C5.55273 4.34245 5.5366 4.39343 5.53077 4.44606C5.49779 4.74212 5.37197 5.02015 5.17134 5.24034C4.9707 5.46053 4.70554 5.61159 4.41382 5.67189C4.30902 5.69349 4.21708 5.75584 4.15825 5.84523C4.09942 5.93461 4.0785 6.0437 4.10011 6.14851C4.12171 6.25331 4.18406 6.34524 4.27344 6.40408C4.36283 6.46291 4.47192 6.48382 4.57673 6.46222C5.0354 6.36749 5.45231 6.12998 5.7677 5.78373C6.08309 5.43748 6.28077 5.00028 6.3324 4.53477Z",
        fill: "#FAEEE2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M1.30509 0.258057C1.19814 0.258057 1.09558 0.30054 1.01996 0.376161C0.944339 0.451781 0.901856 0.554345 0.901856 0.661289V4.69361C0.901586 5.47952 1.18823 6.23849 1.70795 6.82801C2.22768 7.41752 2.94474 7.79704 3.72448 7.89527V10.7421H2.51478C2.40784 10.7421 2.30528 10.7846 2.22966 10.8602C2.15404 10.9358 2.11155 11.0384 2.11155 11.1453C2.11155 11.2523 2.15404 11.3548 2.22966 11.4305C2.30528 11.5061 2.40784 11.5486 2.51478 11.5486H5.74064C5.84758 11.5486 5.95015 11.5061 6.02577 11.4305C6.10139 11.3548 6.14387 11.2523 6.14387 11.1453C6.14387 11.0384 6.10139 10.9358 6.02577 10.8602C5.95015 10.7846 5.84758 10.7421 5.74064 10.7421H4.53094V7.91947V7.89527C5.31069 7.79704 6.02774 7.41752 6.54747 6.82801C7.0672 6.23849 7.35384 5.47952 7.35357 4.69361V0.661289C7.35357 0.554345 7.31109 0.451781 7.23547 0.376161C7.15984 0.30054 7.05728 0.258057 6.95034 0.258057H1.30509ZM1.70832 2.67745V1.06452H6.5471V2.67745H1.70832ZM1.70832 3.48391H6.5471V4.69361C6.5471 5.33527 6.29221 5.95066 5.83848 6.40438C5.38476 6.8581 4.76938 7.113 4.12771 7.113C3.48605 7.113 2.87067 6.8581 2.41694 6.40438C1.96322 5.95066 1.70832 5.33527 1.70832 4.69361V3.48391Z",
        fill: "#FAEEE2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 10
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 7
  }, undefined);
};
const Vegetables = ({
  border
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_TastesSVG_module_scss__WEBPACK_IMPORTED_MODULE_3___default().taste), border === 'accent' ? (_TastesSVG_module_scss__WEBPACK_IMPORTED_MODULE_3___default().accent) : ''),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
      width: "12",
      height: "11",
      viewBox: "0 0 12 11",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M9.93538 4.50013C9.93501 4.0673 9.81858 3.64249 9.59823 3.26995C9.37788 2.8974 9.06167 2.59076 8.68254 2.38195C8.96829 2.08389 9.12816 1.68717 9.12892 1.27427H8.32246C8.32224 1.48809 8.23721 1.6931 8.08601 1.84429C7.93482 1.99549 7.72981 2.08052 7.51599 2.08074C6.88228 2.08158 6.27416 2.33086 5.82219 2.77506C5.37022 3.21927 5.11044 3.82298 5.09862 4.45658C4.58162 3.93001 4.29141 3.22191 4.29013 2.48397C4.28907 2.12735 4.16974 1.78117 3.95083 1.49965C3.73192 1.21813 3.4258 1.01718 3.08044 0.928299V0.0645752H2.27397V0.928299C1.92861 1.01718 1.62249 1.21813 1.40358 1.49965C1.18467 1.78117 1.06534 2.12735 1.06428 2.48397V4.50013H0.257812V4.90336C0.257812 6.40057 0.852578 7.83647 1.91127 8.89516C2.96996 9.95385 4.40585 10.5486 5.90306 10.5486C7.40028 10.5486 8.83617 9.95385 9.89486 8.89516C10.9535 7.83647 11.5483 6.40057 11.5483 4.90336V4.50013H9.93538ZM7.51599 2.8872C7.9436 2.88773 8.35355 3.05784 8.65592 3.36021C8.95828 3.66257 9.12839 4.07252 9.12892 4.50013H5.90306C5.9036 4.07252 6.0737 3.66257 6.37607 3.36021C6.67844 3.05784 7.08838 2.88773 7.51599 2.8872ZM1.87074 2.48397C1.87074 2.27008 1.95571 2.06495 2.10695 1.91371C2.25819 1.76247 2.46332 1.6775 2.67721 1.6775C2.89109 1.6775 3.09622 1.76247 3.24746 1.91371C3.3987 2.06495 3.48367 2.27008 3.48367 2.48397C3.48528 3.20238 3.70029 3.90413 4.10142 4.50013H1.87074V2.48397ZM5.90306 9.74215C4.68995 9.74064 3.52152 9.28416 2.62866 8.46291C1.73581 7.64165 1.18347 6.51536 1.08081 5.30659H10.7257C10.623 6.51543 10.0707 7.64177 9.17772 8.46304C8.28478 9.28431 7.11625 9.74074 5.90306 9.74215Z",
        fill: "#FAEEE2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 10
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 7
  }, undefined);
};
const Fruits = ({
  border
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_TastesSVG_module_scss__WEBPACK_IMPORTED_MODULE_3___default().taste), border === 'accent' ? (_TastesSVG_module_scss__WEBPACK_IMPORTED_MODULE_3___default().accent) : ''),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
      width: "10",
      height: "16",
      viewBox: "0 0 10 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M9.80133 7.90345C9.80133 6.9693 9.16288 6.20316 8.30937 5.96794C8.43314 5.66214 8.47987 5.33062 8.44546 5.00252C8.41104 4.67442 8.29654 4.35981 8.11202 4.08635C7.9275 3.81288 7.67861 3.58895 7.38724 3.43423C7.09588 3.27952 6.77096 3.19877 6.44106 3.19908C6.15208 3.19908 5.88326 3.26628 5.64132 3.37381C5.76901 2.65472 6.03111 1.57943 6.70988 1.31733L6.17224 0.510864C5.02975 1.02835 4.69372 2.58751 4.59963 3.39397C4.33753 3.27301 4.05527 3.19908 3.75285 3.19908C3.42295 3.19877 3.09803 3.27952 2.80667 3.43423C2.5153 3.58895 2.26641 3.81288 2.08189 4.08635C1.89737 4.35981 1.78286 4.67442 1.74845 5.00252C1.71404 5.33062 1.76077 5.66214 1.88454 5.96794C1.02431 6.19644 0.392578 6.97602 0.392578 7.90345C0.392578 8.83761 1.03103 9.61047 1.89126 9.83897C1.79717 10.0675 1.73669 10.3228 1.73669 10.5917C1.73669 11.5258 2.36842 12.2987 3.22864 12.5272C3.10488 12.833 3.05815 13.1645 3.09256 13.4926C3.12697 13.8207 3.24147 14.1353 3.426 14.4088C3.61052 14.6822 3.85941 14.9062 4.15077 15.0609C4.44214 15.2156 4.76706 15.2964 5.09695 15.296C5.42685 15.2964 5.75177 15.2156 6.04314 15.0609C6.3345 14.9062 6.58339 14.6822 6.76791 14.4088C6.95243 14.1353 7.06694 13.8207 7.10135 13.4926C7.13576 13.1645 7.08903 12.833 6.96526 12.5272C7.39303 12.4151 7.77154 12.1643 8.04152 11.814C8.31149 11.4638 8.45769 11.0339 8.45722 10.5917C8.45722 10.3228 8.40346 10.0742 8.30265 9.83897C8.73121 9.72729 9.11071 9.47679 9.38184 9.12662C9.65298 8.77645 9.80049 8.34633 9.80133 7.90345ZM7.99351 6.4787V6.49214H7.98678L7.99351 6.4787ZM6.44106 4.20716C6.99887 4.20716 7.44914 4.65744 7.44914 5.21524C7.44914 5.77304 6.99887 6.22332 6.44106 6.22332C5.88326 6.22332 5.43298 5.77304 5.43298 5.21524C5.43298 4.65744 5.88326 4.20716 6.44106 4.20716ZM6.10503 7.90345C6.10503 8.46126 5.65476 8.91154 5.09695 8.91154C4.53915 8.91154 4.08887 8.46126 4.08887 7.90345C4.08887 7.34565 4.53915 6.89537 5.09695 6.89537C5.65476 6.89537 6.10503 7.34565 6.10503 7.90345ZM3.75285 4.20716C4.31065 4.20716 4.76093 4.65744 4.76093 5.21524C4.76093 5.77304 4.31065 6.22332 3.75285 6.22332C3.19504 6.22332 2.74477 5.77304 2.74477 5.21524C2.74477 4.65744 3.19504 4.20716 3.75285 4.20716ZM1.40066 7.90345C1.40066 7.34565 1.85093 6.89537 2.40874 6.89537C2.96654 6.89537 3.41682 7.34565 3.41682 7.90345C3.41682 8.46126 2.96654 8.91154 2.40874 8.91154C1.85093 8.91154 1.40066 8.46126 1.40066 7.90345ZM2.74477 10.5917C2.74477 10.0339 3.19504 9.58359 3.75285 9.58359C4.31065 9.58359 4.76093 10.0339 4.76093 10.5917C4.76093 11.1495 4.31065 11.5998 3.75285 11.5998C3.19504 11.5998 2.74477 11.1495 2.74477 10.5917ZM5.09695 14.288C4.53915 14.288 4.08887 13.8377 4.08887 13.2799C4.08887 12.7221 4.53915 12.2718 5.09695 12.2718C5.65476 12.2718 6.10503 12.7221 6.10503 13.2799C6.10503 13.8377 5.65476 14.288 5.09695 14.288ZM6.44106 11.5998C5.88326 11.5998 5.43298 11.1495 5.43298 10.5917C5.43298 10.0339 5.88326 9.58359 6.44106 9.58359C6.99887 9.58359 7.44914 10.0339 7.44914 10.5917C7.44914 11.1495 6.99887 11.5998 6.44106 11.5998ZM7.78517 8.91154C7.22736 8.91154 6.77709 8.46126 6.77709 7.90345C6.77709 7.34565 7.22736 6.89537 7.78517 6.89537C8.34297 6.89537 8.79325 7.34565 8.79325 7.90345C8.79325 8.46126 8.34297 8.91154 7.78517 8.91154Z",
        fill: "#FAEEE2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 10
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 7
  }, undefined);
};

/***/ }),

/***/ "./src/components/Sections/Common/DiscountSection/DiscountSection.jsx":
/*!****************************************************************************!*\
  !*** ./src/components/Sections/Common/DiscountSection/DiscountSection.jsx ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiscountSection": function() { return /* binding */ DiscountSection; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _DiscountSection_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DiscountSection.module.scss */ "./src/components/Sections/Common/DiscountSection/DiscountSection.module.scss");
/* harmony import */ var _DiscountSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_DiscountSection_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/styles/Main.module.scss */ "./src/styles/Main.module.scss");
/* harmony import */ var src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\\u042E\u0437\u0435\u0440\\Desktop\\\u0421\u0430\u0439\u0442\u044B\\ko-cheese-react\\src\\components\\Sections\\Common\\DiscountSection\\DiscountSection.jsx";





const DiscountSection = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_DiscountSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default().discount)),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_5___default().wrapper)),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_DiscountSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container)),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_DiscountSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default().promo)),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_DiscountSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default().before)),
            children: "\u0421\u043A\u0438\u0434\u043A\u0430 \u0434\u043E"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 19
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_DiscountSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default().offer)),
            children: "10%"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 19
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_DiscountSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default().info)),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_DiscountSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default().category)),
              children: "\u043D\u0430 \u0441\u044B\u0440"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 22
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_DiscountSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default().name)),
              children: " \u0412\u0430\u043B\u0430\u043D\u0441\u0435"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 22
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 19
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_DiscountSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default().date)),
            children: "\u0414\u043E 15.05.2021"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 19
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
            href: "/",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_DiscountSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default().link)),
              children: "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 22
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 19
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 16
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 10
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 7
  }, undefined);
};

/***/ }),

/***/ "./src/components/Sections/Common/NewTastesSection/NewTaste/NewTaste.jsx":
/*!*******************************************************************************!*\
  !*** ./src/components/Sections/Common/NewTastesSection/NewTaste/NewTaste.jsx ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewTaste": function() { return /* binding */ NewTaste; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_SVG_TastesSVG_TastesSVG__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/SVG/TastesSVG/TastesSVG */ "./src/components/SVG/TastesSVG/TastesSVG.jsx");
/* harmony import */ var _NewTaste_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NewTaste.module.scss */ "./src/components/Sections/Common/NewTastesSection/NewTaste/NewTaste.module.scss");
/* harmony import */ var _NewTaste_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_NewTaste_module_scss__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\\u042E\u0437\u0435\u0440\\Desktop\\\u0421\u0430\u0439\u0442\u044B\\ko-cheese-react\\src\\components\\Sections\\Common\\NewTastesSection\\NewTaste\\NewTaste.jsx";






const NewTaste = ({
  href,
  name,
  addition,
  image,
  style,
  tastes
}) => {
  const allTastes = {
    "red-wine": /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SVG_TastesSVG_TastesSVG__WEBPACK_IMPORTED_MODULE_4__.RedWine, {}, 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 19
    }, undefined),
    "white-wine": /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SVG_TastesSVG_TastesSVG__WEBPACK_IMPORTED_MODULE_4__.WhiteWine, {}, 1, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }, undefined),
    vegetables: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SVG_TastesSVG_TastesSVG__WEBPACK_IMPORTED_MODULE_4__.Vegetables, {}, 2, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 19
    }, undefined),
    fruits: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SVG_TastesSVG_TastesSVG__WEBPACK_IMPORTED_MODULE_4__.Fruits, {}, 3, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 15
    }, undefined)
  };
  const countryFlags = {
    French: "/img/icons/french-flag.jpg",
    Russian: "/img/icons/rus-flag.jpg"
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
    href: href,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_NewTaste_module_scss__WEBPACK_IMPORTED_MODULE_5___default().card)),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_NewTaste_module_scss__WEBPACK_IMPORTED_MODULE_5___default().body)),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: image,
            alt: name,
            className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_NewTaste_module_scss__WEBPACK_IMPORTED_MODULE_5___default().image))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 19
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: !!style && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_NewTaste_module_scss__WEBPACK_IMPORTED_MODULE_5___default().style)),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_NewTaste_module_scss__WEBPACK_IMPORTED_MODULE_5___default().country)),
                children: [style, " style"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 28
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: countryFlags[style],
                alt: style,
                className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_NewTaste_module_scss__WEBPACK_IMPORTED_MODULE_5___default().flag))
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 28
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 19
          }, undefined), !!tastes.length && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_NewTaste_module_scss__WEBPACK_IMPORTED_MODULE_5___default().well)),
            children: tastes.map((taste, i) => allTastes[taste])
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 22
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 16
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_NewTaste_module_scss__WEBPACK_IMPORTED_MODULE_5___default().name)),
          children: name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 16
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_NewTaste_module_scss__WEBPACK_IMPORTED_MODULE_5___default().addition)),
          children: addition
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 16
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 10
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 7
  }, undefined);
};

/***/ }),

/***/ "./src/components/Sections/Common/NewTastesSection/NewTastesSection.jsx":
/*!******************************************************************************!*\
  !*** ./src/components/Sections/Common/NewTastesSection/NewTastesSection.jsx ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewTastesSection": function() { return /* binding */ NewTastesSection; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Common_Slider_Slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Common/Slider/Slider */ "./src/components/Common/Slider/Slider.jsx");
/* harmony import */ var _NewTaste_NewTaste__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NewTaste/NewTaste */ "./src/components/Sections/Common/NewTastesSection/NewTaste/NewTaste.jsx");
/* harmony import */ var _NewTastesSection_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NewTastesSection.module.scss */ "./src/components/Sections/Common/NewTastesSection/NewTastesSection.module.scss");
/* harmony import */ var _NewTastesSection_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_NewTastesSection_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/styles/Main.module.scss */ "./src/styles/Main.module.scss");
/* harmony import */ var src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\\u042E\u0437\u0435\u0440\\Desktop\\\u0421\u0430\u0439\u0442\u044B\\ko-cheese-react\\src\\components\\Sections\\Common\\NewTastesSection\\NewTastesSection.jsx";






const newProducts = [{
  href: "/",
  image: "img/content/slide-1.jpg",
  name: "Камамбер козий",
  addition: "с белой плесенью",
  style: "French",
  tastes: ["red-wine", "white-wine", "fruits"]
}, {
  href: "/",
  image: "img/content/slide-1.jpg",
  name: "Джем абрикосовый",
  addition: "с кленовыми шишками",
  tastes: ["red-wine", "vegetables", "fruits"]
}, {
  href: "/",
  image: "img/content/slide-1.jpg",
  name: "Брюш козий",
  addition: "с белой плесенью",
  style: "Russian",
  tastes: []
}, {
  href: "/",
  image: "img/content/slide-1.jpg",
  name: "Камамбер козий",
  addition: "с белой плесенью",
  style: "French",
  tastes: ["red-wine", "white-wine", "fruits"]
}, {
  href: "/",
  image: "img/content/slide-1.jpg",
  name: "Джем абрикосовый",
  addition: "с кленовыми шишками",
  tastes: ["red-wine", "vegetables", "fruits"]
}, {
  href: "/",
  image: "img/content/slide-1.jpg",
  name: "Брюш козий",
  addition: "с белой плесенью",
  style: "Russian",
  tastes: []
}, {
  href: "/",
  image: "img/content/slide-1.jpg",
  name: "Камамбер козий",
  addition: "с белой плесенью",
  style: "French",
  tastes: ["red-wine", "white-wine", "fruits"]
}, {
  href: "/",
  image: "img/content/slide-1.jpg",
  name: "Джем абрикосовый",
  addition: "с кленовыми шишками",
  tastes: ["red-wine", "vegetables", "fruits"]
}, {
  href: "/",
  image: "img/content/slide-1.jpg",
  name: "Брюш козий",
  addition: "с белой плесенью",
  style: "Russian",
  tastes: []
}];
const sliderParams = {
  slider: {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 50
  },
  nav: {
    counter: true
  }
};
const NewTastesSection = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_NewTastesSection_module_scss__WEBPACK_IMPORTED_MODULE_5___default().new)),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_6___default().wrapper)),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_Slider_Slider__WEBPACK_IMPORTED_MODULE_3__.Slider, {
        title: "Новые вкусы",
        slides: newProducts,
        params: sliderParams,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NewTaste_NewTaste__WEBPACK_IMPORTED_MODULE_4__.NewTaste, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 16
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 10
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 7
  }, undefined);
};

/***/ }),

/***/ "./src/components/Sections/Common/ProductsSection/ProductsSection.jsx":
/*!****************************************************************************!*\
  !*** ./src/components/Sections/Common/ProductsSection/ProductsSection.jsx ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsSection": function() { return /* binding */ ProductsSection; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Common_Product_Product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Common/Product/Product */ "./src/components/Common/Product/Product.jsx");
/* harmony import */ var _ProductsSection_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProductsSection.module.scss */ "./src/components/Sections/Common/ProductsSection/ProductsSection.module.scss");
/* harmony import */ var _ProductsSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ProductsSection_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/styles/Main.module.scss */ "./src/styles/Main.module.scss");
/* harmony import */ var src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\\u042E\u0437\u0435\u0440\\Desktop\\\u0421\u0430\u0439\u0442\u044B\\ko-cheese-react\\src\\components\\Sections\\Common\\ProductsSection\\ProductsSection.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const ProductsSection = ({
  products
}) => {
  // console.log(products)
  const [activeCategory, setActiveCategory] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);
  const [activeSubcategory, setActiveSubcategory] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);

  const setActiveItem = (i, setState) => {
    setState(i);
  };

  const categories = [{
    title: "Сыры",
    href: "/"
  }, {
    title: "Молоко",
    href: "/"
  }, {
    title: "Десерты",
    href: "/"
  }];
  const subCategories = [{
    title: "Свежие",
    href: "/"
  }, {
    title: "Мягкие",
    href: "/"
  }, {
    title: "Твердые",
    href: "/"
  }, {
    title: "С белой плесенью",
    href: "/"
  }, {
    title: "С голубой плесенью",
    href: "/"
  }, {
    title: "Коровий",
    href: "/"
  }, {
    title: "Козий",
    href: "/"
  }];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_ProductsSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default().products)),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_5___default().wrapper)),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_ProductsSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default().header)),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_ProductsSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default().categories)),
          children: categories.map((category, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_ProductsSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default().category), activeCategory === i ? (_ProductsSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default().active) : ""),
            onClick: () => setActiveItem(i, setActiveCategory),
            children: category.title
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 22
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 16
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_ProductsSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default().subcategories)),
          children: subCategories.map((subcategory, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            type: "button",
            className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_ProductsSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default().subcategory), activeSubcategory === i ? (_ProductsSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default().active) : ""),
            onClick: () => setActiveItem(i, setActiveSubcategory),
            children: subcategory.title
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 22
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 16
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_ProductsSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default().body)),
        children: products && products.map(product => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_Product_Product__WEBPACK_IMPORTED_MODULE_3__.Product, _objectSpread({}, product), product.id, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 22
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 10
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 7
  }, undefined);
};

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allStatus": function() { return /* binding */ allStatus; },
/* harmony export */   "allTastes": function() { return /* binding */ allTastes; },
/* harmony export */   "products": function() { return /* binding */ products; },
/* harmony export */   "BASE_URL": function() { return /* binding */ BASE_URL; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SVG_TastesSVG_TastesSVG__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/SVG/TastesSVG/TastesSVG */ "./src/components/SVG/TastesSVG/TastesSVG.jsx");

var _jsxFileName = "C:\\Users\\\u042E\u0437\u0435\u0440\\Desktop\\\u0421\u0430\u0439\u0442\u044B\\ko-cheese-react\\src\\constants.js";

const allStatus = {
  avaliable: {
    title: "в наличии",
    class: "avaliable"
  },
  preparing: {
    title: "созревает",
    class: "preparing"
  },
  "not-avaliable": {
    title: "нет в наличии",
    class: "not-avaliable"
  }
};
const allTastes = {
  "red-wine": /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SVG_TastesSVG_TastesSVG__WEBPACK_IMPORTED_MODULE_1__.RedWine, {
    border: "accent"
  }, 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 16
  }, undefined),
  "white-wine": /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SVG_TastesSVG_TastesSVG__WEBPACK_IMPORTED_MODULE_1__.WhiteWine, {
    border: "accent"
  }, 1, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 18
  }, undefined),
  vegetables: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SVG_TastesSVG_TastesSVG__WEBPACK_IMPORTED_MODULE_1__.Vegetables, {
    border: "accent"
  }, 2, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 16
  }, undefined),
  fruits: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SVG_TastesSVG_TastesSVG__WEBPACK_IMPORTED_MODULE_1__.Fruits, {
    border: "accent"
  }, 3, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 12
  }, undefined)
};
const products = [{
  status: "avaliable",
  allStatus: [{
    name: "avaliable",
    count: 20
  }, {
    name: "preparing",
    count: 15,
    date: "15.08.2021"
  }],
  image: "/static/img/content/camamberGoat.png",
  gallery: ["/static/img/content/camamberGoat.png", "/static/img/content/slide-1.jpg", "/static/img/content/recipe-2.jpg", "/static/img/content/recipe-3.jpg"],
  name: "Камамбер козий",
  description: "Французский сыр из молока козы продолговатой формы, имеющий свежий резкий запах и нежный сливочный вкус в середине и пикантный вкус у корочки, покрытой легкой белой плесенью.",
  addition: "с белой плесенью",
  weight: "200 гр",
  price: 320,
  tastes: ["red-wine", "fruits"],
  link: "/card",
  id: 23
}, {
  status: "preparing",
  allStatus: [{
    name: "avaliable",
    count: 20
  }, {
    name: "preparing",
    count: 15,
    date: "15.08.2021"
  }],
  image: "/static/img/content/camamberCow.png",
  gallery: ["/static/img/content/camamberCow.png", "/static/img/content/slide-1.jpg", "/static/img/content/recipe-2.jpg", "/static/img/content/recipe-3.jpg"],
  name: "Камамбер коровий",
  description: "Французский сыр из молока козы продолговатой формы, имеющий свежий резкий запах и нежный сливочный вкус в середине и пикантный вкус у корочки, покрытой легкой белой плесенью.",
  addition: "с белой плесенью",
  weight: "200 гр",
  price: 320,
  tastes: ["white-wine", "vegetables"],
  link: "/card",
  id: 20
}, {
  status: "avaliable",
  allStatus: [{
    name: "avaliable",
    count: 20
  }, {
    name: "preparing",
    count: 15,
    date: "15.08.2021"
  }],
  image: "/static/img/content/goatBalance.png",
  gallery: ["/static/img/content/goatBalance.png", "/static/img/content/slide-1.jpg", "/static/img/content/recipe-2.jpg", "/static/img/content/recipe-3.jpg"],
  name: "Cыр Козий Валансе",
  description: "Французский сыр из молока козы продолговатой формы, имеющий свежий резкий запах и нежный сливочный вкус в середине и пикантный вкус у корочки, покрытой легкой белой плесенью.",
  addition: "с белой плесенью",
  weight: "200 гр",
  price: 650,
  tastes: ["white-wine", "vegetables"],
  link: "/card",
  id: 2
}, {
  status: "avaliable",
  allStatus: [{
    name: "avaliable",
    count: 20
  }, {
    name: "preparing",
    count: 15,
    date: "15.08.2021"
  }],
  image: "/static/img/content/goatBalance2.png",
  gallery: ["/static/img/content/goatBalance2.png", "/static/img/content/slide-1.jpg", "/static/img/content/recipe-2.jpg", "/static/img/content/recipe-3.jpg"],
  name: "Cыр Козий Валансе",
  description: "Французский сыр из молока козы продолговатой формы, имеющий свежий резкий запах и нежный сливочный вкус в середине и пикантный вкус у корочки, покрытой легкой белой плесенью.",
  addition: "с белой плесенью",
  weight: "200 гр",
  price: 500,
  tastes: ["white-wine", "vegetables"],
  link: "/card",
  id: 3
}, {
  status: "preparing",
  allStatus: [{
    name: "avaliable",
    count: 20
  }, {
    name: "preparing",
    count: 15,
    date: "15.08.2021"
  }],
  image: "/static/img/content/bushDeShevr.png",
  gallery: ["/static/img/content/bushDeShevr.png", "/static/img/content/slide-1.jpg", "/static/img/content/recipe-2.jpg", "/static/img/content/recipe-3.jpg"],
  name: "Бюш де шевр",
  description: "Французский сыр из молока козы продолговатой формы, имеющий свежий резкий запах и нежный сливочный вкус в середине и пикантный вкус у корочки, покрытой легкой белой плесенью.",
  weight: "200 гр",
  price: 500,
  tastes: ["white-wine", "vegetables"],
  link: "/card",
  id: 4
}, {
  status: "avaliable",
  allStatus: [{
    name: "avaliable",
    count: 20
  }, {
    name: "preparing",
    count: 15,
    date: "15.08.2021"
  }],
  image: "/static/img/content/mozzarella.png",
  gallery: ["/static/img/content/mozzarella.png", "/static/img/content/slide-1.jpg", "/static/img/content/recipe-2.jpg", "/static/img/content/recipe-3.jpg"],
  name: "Моцарелла",
  description: "Французский сыр из молока козы продолговатой формы, имеющий свежий резкий запах и нежный сливочный вкус в середине и пикантный вкус у корочки, покрытой легкой белой плесенью.",
  weight: "200 гр",
  price: 500,
  link: "/card",
  id: 29
}, {
  status: "not-avaliable",
  allStatus: [{
    name: "avaliable",
    count: 20
  }, {
    name: "preparing",
    count: 15,
    date: "15.08.2021"
  }],
  image: "/static/img/content/buratta.png",
  gallery: ["/static/img/content/buratta.png", "/static/img/content/slide-1.jpg", "/static/img/content/recipe-2.jpg", "/static/img/content/recipe-3.jpg"],
  name: "Буратта",
  description: "Французский сыр из молока козы продолговатой формы, имеющий свежий резкий запах и нежный сливочный вкус в середине и пикантный вкус у корочки, покрытой легкой белой плесенью.",
  weight: "200 гр",
  price: 500,
  tastes: ["white-wine", "vegetables"],
  link: "/card",
  id: 18
}, {
  status: "avaliable",
  allStatus: [{
    name: "avaliable",
    count: 20
  }, {
    name: "preparing",
    count: 15,
    date: "15.08.2021"
  }],
  image: "/static/img/content/strachella.png",
  gallery: ["/static/img/content/strachella.png", "/static/img/content/slide-1.jpg", "/static/img/content/recipe-2.jpg", "/static/img/content/recipe-3.jpg"],
  name: "Страчелла",
  description: "Французский сыр из молока козы продолговатой формы, имеющий свежий резкий запах и нежный сливочный вкус в середине и пикантный вкус у корочки, покрытой легкой белой плесенью.",
  weight: "200 гр",
  price: 500,
  tastes: ["white-wine", "vegetables"],
  link: "/card",
  id: 7
}, {
  status: "preparing",
  allStatus: [{
    name: "avaliable",
    count: 20
  }, {
    name: "preparing",
    count: 15,
    date: "15.08.2021"
  }],
  image: "/static/img/content/bushDeShevr.png",
  gallery: ["/static/img/content/bushDeShevr.png", "/static/img/content/slide-1.jpg", "/static/img/content/recipe-2.jpg", "/static/img/content/recipe-3.jpg"],
  name: "Бюш де шевр",
  description: "Французский сыр из молока козы продолговатой формы, имеющий свежий резкий запах и нежный сливочный вкус в середине и пикантный вкус у корочки, покрытой легкой белой плесенью.",
  weight: "200 гр",
  price: 500,
  tastes: ["white-wine", "vegetables"],
  link: "/card",
  id: 40
}];
const BASE_URL = 'http://localhost:3001/';

/***/ }),

/***/ "./src/pages/products/index.jsx":
/*!**************************************!*\
  !*** ./src/pages/products/index.jsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Common_Header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Common/Header/Header */ "./src/components/Common/Header/Header.jsx");
/* harmony import */ var _components_Sections_Common_ProductsSection_ProductsSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Sections/Common/ProductsSection/ProductsSection */ "./src/components/Sections/Common/ProductsSection/ProductsSection.jsx");
/* harmony import */ var _components_Sections_Common_NewTastesSection_NewTastesSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/Sections/Common/NewTastesSection/NewTastesSection */ "./src/components/Sections/Common/NewTastesSection/NewTastesSection.jsx");
/* harmony import */ var _components_Sections_Common_DiscountSection_DiscountSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/Sections/Common/DiscountSection/DiscountSection */ "./src/components/Sections/Common/DiscountSection/DiscountSection.jsx");
/* harmony import */ var _components_Common_Footer_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/Common/Footer/Footer */ "./src/components/Common/Footer/Footer.jsx");
/* harmony import */ var _components_Common_Discount_Discount__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/Common/Discount/Discount */ "./src/components/Common/Discount/Discount.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/styles/Main.module.scss */ "./src/styles/Main.module.scss");
/* harmony import */ var src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_11__);


var _jsxFileName = "C:\\Users\\\u042E\u0437\u0435\u0440\\Desktop\\\u0421\u0430\u0439\u0442\u044B\\ko-cheese-react\\src\\pages\\products\\index.jsx";












const products = ({
  products
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_Header_Header__WEBPACK_IMPORTED_MODULE_4__.Header, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_11___default().main), (src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_11___default().pt)),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_11___default().wrapper),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_Discount_Discount__WEBPACK_IMPORTED_MODULE_9__.Discount, {
          text: "Вам представлена скидка на перый заказ 10%"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 19
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          className: (src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_11___default().title),
          children: "\u041F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u044F"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 19
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 16
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sections_Common_ProductsSection_ProductsSection__WEBPACK_IMPORTED_MODULE_5__.ProductsSection, {
        products: products
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 16
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sections_Common_NewTastesSection_NewTastesSection__WEBPACK_IMPORTED_MODULE_6__.NewTastesSection, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 16
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sections_Common_DiscountSection_DiscountSection__WEBPACK_IMPORTED_MODULE_7__.DiscountSection, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 16
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_Footer_Footer__WEBPACK_IMPORTED_MODULE_8__.Footer, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (products);

const request = async () => {
  const {
    data
  } = await axios__WEBPACK_IMPORTED_MODULE_10___default().get("http://localhost:3001/data");
  return data;
};

const getServerSideProps = async () => {
  const products = await request();
  return {
    props: {
      products
    }
  };
};

/***/ }),

/***/ "./src/components/Common/Discount/Discount.module.scss":
/*!*************************************************************!*\
  !*** ./src/components/Common/Discount/Discount.module.scss ***!
  \*************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Discount_container__1SqXN",
	"close": "Discount_close__3RN-B",
	"text": "Discount_text__12Cqy"
};


/***/ }),

/***/ "./src/components/Common/Footer/Footer.module.scss":
/*!*********************************************************!*\
  !*** ./src/components/Common/Footer/Footer.module.scss ***!
  \*********************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"contact": "Footer_contact__203ft",
	"link": "Footer_link__3MXpY",
	"footer": "Footer_footer__8d9Qn",
	"container": "Footer_container__1B1Ra",
	"block": "Footer_block__2e4uk",
	"menu": "Footer_menu__RiR_j",
	"info": "Footer_info__2x6eM",
	"address": "Footer_address__3AgBM",
	"contacts": "Footer_contacts__3poUO",
	"asap": "Footer_asap__3tT4a",
	"corp": "Footer_corp__2XLEw"
};


/***/ }),

/***/ "./src/components/Common/Header/Header.module.scss":
/*!*********************************************************!*\
  !*** ./src/components/Common/Header/Header.module.scss ***!
  \*********************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"control": "Header_control__3k1I4",
	"block": "Header_block__3H7KF",
	"logo": "Header_logo__2fEfp",
	"nav": "Header_nav__3GedQ",
	"container": "Header_container__2-0jh",
	"button": "Header_button__6qF6J",
	"link": "Header_link__1gOne",
	"header": "Header_header__2-fjq",
	"border_accent": "Header_border_accent__2j-dp",
	"link_accent": "Header_link_accent__3Jxrv",
	"button_accent": "Header_button_accent__2WSSL",
	"logo_accent": "Header_logo_accent__1HQBe"
};


/***/ }),

/***/ "./src/components/Common/Product/Product.module.scss":
/*!***********************************************************!*\
  !*** ./src/components/Common/Product/Product.module.scss ***!
  \***********************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"more": "Product_more__JYIHQ",
	"add": "Product_add__1kSnG",
	"card": "Product_card__1h7nS",
	"info": "Product_info__1Sg97",
	"card_slider": "Product_card_slider__9d1nZ",
	"image": "Product_image__1FywS",
	"name": "Product_name__3WiZK",
	"addition": "Product_addition__2spoQ",
	"weight": "Product_weight__2H9cL",
	"price": "Product_price__kFP5d",
	"well": "Product_well__2s1C3"
};


/***/ }),

/***/ "./src/components/Common/Slider/Slider.module.scss":
/*!*********************************************************!*\
  !*** ./src/components/Common/Slider/Slider.module.scss ***!
  \*********************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"product_slide": "Slider_product_slide__3VxDs",
	"recipe_slide": "Slider_recipe_slide__2qide"
};


/***/ }),

/***/ "./src/components/Common/Slider/SliderNav/SliderNav.module.scss":
/*!**********************************************************************!*\
  !*** ./src/components/Common/Slider/SliderNav/SliderNav.module.scss ***!
  \**********************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"nav": "SliderNav_nav__18_E-",
	"container": "SliderNav_container__3D8ys",
	"header": "SliderNav_header__1HRGQ",
	"counter": "SliderNav_counter__3pzNY",
	"counter__all": "SliderNav_counter__all__3s5FO"
};


/***/ }),

/***/ "./src/components/SVG/TastesSVG/TastesSVG.module.scss":
/*!************************************************************!*\
  !*** ./src/components/SVG/TastesSVG/TastesSVG.module.scss ***!
  \************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"taste": "TastesSVG_taste__2d5Wi",
	"accent": "TastesSVG_accent__RDAXg"
};


/***/ }),

/***/ "./src/components/Sections/Common/DiscountSection/DiscountSection.module.scss":
/*!************************************************************************************!*\
  !*** ./src/components/Sections/Common/DiscountSection/DiscountSection.module.scss ***!
  \************************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"link": "DiscountSection_link__lxjHg",
	"container": "DiscountSection_container__2RVNt",
	"promo": "DiscountSection_promo__392KW",
	"category": "DiscountSection_category__Dfjac",
	"offer": "DiscountSection_offer__3R0Nn",
	"name": "DiscountSection_name__22hlY",
	"date": "DiscountSection_date__2Z1_x"
};


/***/ }),

/***/ "./src/components/Sections/Common/NewTastesSection/NewTaste/NewTaste.module.scss":
/*!***************************************************************************************!*\
  !*** ./src/components/Sections/Common/NewTastesSection/NewTaste/NewTaste.module.scss ***!
  \***************************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"card": "NewTaste_card__2wqB_",
	"body": "NewTaste_body__3POzp",
	"image": "NewTaste_image__2ZTYb",
	"well": "NewTaste_well__3B58M",
	"name": "NewTaste_name__hmJ58",
	"addition": "NewTaste_addition__CgWgO",
	"style": "NewTaste_style__2rV_p",
	"country": "NewTaste_country__wxuXg",
	"flag": "NewTaste_flag__rRN84"
};


/***/ }),

/***/ "./src/components/Sections/Common/NewTastesSection/NewTastesSection.module.scss":
/*!**************************************************************************************!*\
  !*** ./src/components/Sections/Common/NewTastesSection/NewTastesSection.module.scss ***!
  \**************************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {

};


/***/ }),

/***/ "./src/components/Sections/Common/ProductsSection/ProductsSection.module.scss":
/*!************************************************************************************!*\
  !*** ./src/components/Sections/Common/ProductsSection/ProductsSection.module.scss ***!
  \************************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"body": "ProductsSection_body__1OAxl",
	"subcategories": "ProductsSection_subcategories__X5zyg",
	"categories": "ProductsSection_categories__3ujcM",
	"subcategory": "ProductsSection_subcategory__WA3SE",
	"active": "ProductsSection_active__1t6wD",
	"category": "ProductsSection_category__poWoM"
};


/***/ }),

/***/ "./src/styles/Main.module.scss":
/*!*************************************!*\
  !*** ./src/styles/Main.module.scss ***!
  \*************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"status": "Main_status__TA7Ad",
	"not-avaliable": "Main_not-avaliable__3L6CB",
	"preparing": "Main_preparing__1HqSx",
	"avaliable": "Main_avaliable__1Dr8Q",
	"modal": "Main_modal__3mTgu",
	"modal__close": "Main_modal__close__1dud9",
	"main": "Main_main__1-Skj",
	"wrapper": "Main_wrapper__OOp2r",
	"modal__box": "Main_modal__box__h7pHr",
	"italic": "Main_italic__1s-tP",
	"numbers": "Main_numbers__A0nmD",
	"flex": "Main_flex__1zUsh",
	"pt": "Main_pt__2igYb",
	"title": "Main_title__1boCF"
};


/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("clsx");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "swiper":
/*!*************************!*\
  !*** external "swiper" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("swiper");;

/***/ }),

/***/ "swiper/react":
/*!*******************************!*\
  !*** external "swiper/react" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("swiper/react");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/products/index.jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMiLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzIiwid2VicGFjazovL2tvLWNoZWVzZS1yZWFjdC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvdXNlLWludGVyc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qcyIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9taXR0LmpzIiwid2VicGFjazovL2tvLWNoZWVzZS1yZWFjdC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwuanMiLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanMiLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qcyIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanMiLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanMiLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzIiwid2VicGFjazovL2tvLWNoZWVzZS1yZWFjdC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzIiwid2VicGFjazovL2tvLWNoZWVzZS1yZWFjdC8uL3NyYy9jb21wb25lbnRzL0NvbW1vbi9EaXNjb3VudC9EaXNjb3VudC5qc3giLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvQ29tbW9uL0Zvb3Rlci9Gb290ZXIuanN4Iiwid2VicGFjazovL2tvLWNoZWVzZS1yZWFjdC8uL3NyYy9jb21wb25lbnRzL0NvbW1vbi9IZWFkZXIvSGVhZGVyLmpzeCIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvLi9zcmMvY29tcG9uZW50cy9Db21tb24vUHJvZHVjdC9Qcm9kdWN0LmpzeCIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvLi9zcmMvY29tcG9uZW50cy9Db21tb24vU2xpZGVyL1NsaWRlci5qc3giLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvQ29tbW9uL1NsaWRlci9TbGlkZXJOYXYvU2xpZGVyTmF2LmpzeCIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvLi9zcmMvY29tcG9uZW50cy9TVkcvSGVhZGVyTG9nb1NWRy5qc3giLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvU1ZHL1Rhc3Rlc1NWRy9UYXN0ZXNTVkcuanN4Iiwid2VicGFjazovL2tvLWNoZWVzZS1yZWFjdC8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb25zL0NvbW1vbi9EaXNjb3VudFNlY3Rpb24vRGlzY291bnRTZWN0aW9uLmpzeCIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvLi9zcmMvY29tcG9uZW50cy9TZWN0aW9ucy9Db21tb24vTmV3VGFzdGVzU2VjdGlvbi9OZXdUYXN0ZS9OZXdUYXN0ZS5qc3giLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbnMvQ29tbW9uL05ld1Rhc3Rlc1NlY3Rpb24vTmV3VGFzdGVzU2VjdGlvbi5qc3giLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbnMvQ29tbW9uL1Byb2R1Y3RzU2VjdGlvbi9Qcm9kdWN0c1NlY3Rpb24uanN4Iiwid2VicGFjazovL2tvLWNoZWVzZS1yZWFjdC8uL3NyYy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0Ly4vc3JjL3BhZ2VzL3Byb2R1Y3RzL2luZGV4LmpzeCIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvLi9zcmMvY29tcG9uZW50cy9Db21tb24vRGlzY291bnQvRGlzY291bnQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvQ29tbW9uL0Zvb3Rlci9Gb290ZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvQ29tbW9uL0hlYWRlci9IZWFkZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvQ29tbW9uL1Byb2R1Y3QvUHJvZHVjdC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvLi9zcmMvY29tcG9uZW50cy9Db21tb24vU2xpZGVyL1NsaWRlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvLi9zcmMvY29tcG9uZW50cy9Db21tb24vU2xpZGVyL1NsaWRlck5hdi9TbGlkZXJOYXYubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvU1ZHL1Rhc3Rlc1NWRy9UYXN0ZXNTVkcubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbnMvQ29tbW9uL0Rpc2NvdW50U2VjdGlvbi9EaXNjb3VudFNlY3Rpb24ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbnMvQ29tbW9uL05ld1Rhc3Rlc1NlY3Rpb24vTmV3VGFzdGUvTmV3VGFzdGUubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbnMvQ29tbW9uL05ld1Rhc3Rlc1NlY3Rpb24vTmV3VGFzdGVzU2VjdGlvbi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvLi9zcmMvY29tcG9uZW50cy9TZWN0aW9ucy9Db21tb24vUHJvZHVjdHNTZWN0aW9uL1Byb2R1Y3RzU2VjdGlvbi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvLi9zcmMvc3R5bGVzL01haW4ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovL2tvLWNoZWVzZS1yZWFjdC8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0L2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvZXh0ZXJuYWwgXCJjbHN4XCIiLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL2tvLWNoZWVzZS1yZWFjdC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2tvLWNoZWVzZS1yZWFjdC9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0L2V4dGVybmFsIFwic3dpcGVyXCIiLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0L2V4dGVybmFsIFwic3dpcGVyL3JlYWN0XCIiLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0L2lnbm9yZWR8QzpcXFVzZXJzXFzQrtC30LXRgFxcRGVza3RvcFxc0KHQsNC50YLRi1xca28tY2hlZXNlLXJlYWN0XFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJyZXF1aXJlIiwiZXhwb3J0cyIsIl9yZWFjdCIsIl9yb3V0ZXIiLCJfcm91dGVyMiIsIl91c2VJbnRlcnNlY3Rpb24iLCJwcmVmZXRjaGVkIiwicHJlZmV0Y2giLCJyb3V0ZXIiLCJocmVmIiwiYXMiLCJvcHRpb25zIiwiaXNMb2NhbFVSTCIsImNhdGNoIiwiZXJyIiwiY3VyTG9jYWxlIiwibG9jYWxlIiwiaXNNb2RpZmllZEV2ZW50IiwiZXZlbnQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsImUiLCJyZXBsYWNlIiwic2hhbGxvdyIsInNjcm9sbCIsIm5vZGVOYW1lIiwicHJldmVudERlZmF1bHQiLCJpbmRleE9mIiwiTGluayIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiYXJncyIsIkVycm9yIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwicGFzc0hyZWYiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsImRlZmF1bHQiLCJ1c2VSZWYiLCJjdXJyZW50IiwiY29uc29sZSIsIndhcm4iLCJwIiwidXNlUm91dGVyIiwidXNlTWVtbyIsInJlc29sdmVkSHJlZiIsInJlc29sdmVkQXMiLCJyZXNvbHZlSHJlZiIsImNoaWxkcmVuIiwiY3JlYXRlRWxlbWVudCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY2hpbGRSZWYiLCJyZWYiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJpc1Zpc2libGUiLCJ1c2VJbnRlcnNlY3Rpb24iLCJyb290TWFyZ2luIiwic2V0UmVmIiwidXNlQ2FsbGJhY2siLCJlbCIsInVzZUVmZmVjdCIsInNob3VsZFByZWZldGNoIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsIm9uQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJ0eXBlIiwibG9jYWxlRG9tYWluIiwiaXNMb2NhbGVEb21haW4iLCJnZXREb21haW5Mb2NhbGUiLCJsb2NhbGVzIiwiZG9tYWluTG9jYWxlcyIsImFkZEJhc2VQYXRoIiwiYWRkTG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNsb25lRWxlbWVudCIsIl9kZWZhdWx0IiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJwYXRoIiwiZW5kc1dpdGgiLCJzbGljZSIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZWxmIiwiY2IiLCJzdGFydCIsIkRhdGUiLCJub3ciLCJzZXRUaW1lb3V0IiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJNYXRoIiwibWF4IiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwiaWQiLCJjbGVhclRpbWVvdXQiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwibWFya0Fzc2V0RXJyb3IiLCJpc0Fzc2V0RXJyb3IiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwiX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiTVNfTUFYX0lETEVfREVMQVkiLCJ3aXRoRnV0dXJlIiwibWFwIiwiZ2VuZXJhdG9yIiwiZW50cnkiLCJnZXQiLCJmdXR1cmUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlc29sdmVyIiwicHJvbSIsInNldCIsInRoZW4iLCJ2YWx1ZSIsImhhc1ByZWZldGNoIiwibGluayIsImRvY3VtZW50Iiwid2luZG93IiwiTVNJbnB1dE1ldGhvZENvbnRleHQiLCJkb2N1bWVudE1vZGUiLCJyZWxMaXN0Iiwic3VwcG9ydHMiLCJfdW51c2VkIiwiY2FuUHJlZmV0Y2giLCJwcmVmZXRjaFZpYURvbSIsInJlcyIsInJlaiIsInF1ZXJ5U2VsZWN0b3IiLCJyZWwiLCJjcm9zc09yaWdpbiIsIm9ubG9hZCIsIm9uZXJyb3IiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiZGVmaW5lUHJvcGVydHkiLCJhcHBlbmRTY3JpcHQiLCJzcmMiLCJzY3JpcHQiLCJyZWplY3QiLCJib2R5IiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsIm1zIiwiY2FuY2VsbGVkIiwiciIsIl9fQlVJTERfTUFOSUZFU1QiLCJvbkJ1aWxkTWFuaWZlc3QiLCJfX0JVSUxEX01BTklGRVNUX0NCIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImFzc2V0UHJlZml4Iiwicm91dGUiLCJzY3JpcHRzIiwiZW5jb2RlVVJJIiwiY3NzIiwibWFuaWZlc3QiLCJhbGxGaWxlcyIsImZpbHRlciIsInYiLCJjcmVhdGVSb3V0ZUxvYWRlciIsImVudHJ5cG9pbnRzIiwiTWFwIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwibWF5YmVFeGVjdXRlU2NyaXB0IiwiZmV0Y2hTdHlsZVNoZWV0IiwiZmV0Y2giLCJvayIsInRleHQiLCJjb250ZW50Iiwid2hlbkVudHJ5cG9pbnQiLCJvbkVudHJ5cG9pbnQiLCJleGVjdXRlIiwiZm4iLCJjb21wb25lbnQiLCJlcnJvciIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwiYWxsIiwiaGFzIiwiZW50cnlwb2ludCIsInN0eWxlcyIsImFzc2lnbiIsImNuIiwibmF2aWdhdG9yIiwiY29ubmVjdGlvbiIsInNhdmVEYXRhIiwidGVzdCIsImVmZmVjdGl2ZVR5cGUiLCJvdXRwdXQiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJOZXh0Um91dGVyIiwiX3JvdXRlckNvbnRleHQiLCJfd2l0aFJvdXRlciIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsIkFycmF5IiwiaXNBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJkaXNhYmxlZCIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInVzZVN0YXRlIiwidW5kZWZpbmVkIiwidGFnTmFtZSIsIm9ic2VydmUiLCJpZGxlQ2FsbGJhY2siLCJlbGVtZW50IiwiY2FsbGJhY2siLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJkZWxldGUiLCJzaXplIiwiZGlzY29ubmVjdCIsIm9ic2VydmVycyIsImVudHJpZXMiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwid2l0aFJvdXRlciIsIkNvbXBvc2VkQ29tcG9uZW50IiwiV2l0aFJvdXRlcldyYXBwZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwibmFtZSIsImRpc3BsYXlOYW1lIiwibm9ybWFsaXplTG9jYWxlUGF0aCIsInBhdGhuYW1lIiwiZGV0ZWN0ZWRMb2NhbGUiLCJwYXRobmFtZVBhcnRzIiwic3BsaXQiLCJzb21lIiwidG9Mb3dlckNhc2UiLCJzcGxpY2UiLCJqb2luIiwibWl0dCIsImNyZWF0ZSIsImhhbmRsZXIiLCJwdXNoIiwib2ZmIiwiZW1pdCIsImV2dHMiLCJkZWxMb2NhbGUiLCJoYXNCYXNlUGF0aCIsImRlbEJhc2VQYXRoIiwiaW50ZXJwb2xhdGVBcyIsIl9ub3JtYWxpemVUcmFpbGluZ1NsYXNoIiwiX3JvdXRlTG9hZGVyIiwiX2Rlbm9ybWFsaXplUGFnZVBhdGgiLCJfbm9ybWFsaXplTG9jYWxlUGF0aCIsIl9taXR0IiwiX3V0aWxzIiwiX2lzRHluYW1pYyIsIl9wYXJzZVJlbGF0aXZlVXJsIiwiX3F1ZXJ5c3RyaW5nIiwiX3Jlc29sdmVSZXdyaXRlcyIsIl9yb3V0ZU1hdGNoZXIiLCJfcm91dGVSZWdleCIsIm9iaiIsIl9fZXNNb2R1bGUiLCJkZXRlY3REb21haW5Mb2NhbGUiLCJiYXNlUGF0aCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJhZGRQYXRoUHJlZml4IiwicHJlZml4Iiwic3RhcnRzV2l0aCIsInBhdGhOb1F1ZXJ5SGFzaCIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJsZW5ndGgiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJVUkwiLCJvcmlnaW4iLCJhc1BhdGhuYW1lIiwicXVlcnkiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImdldFJvdXRlUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZ3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJnZXRSb3V0ZU1hdGNoZXIiLCJwYXJhbXMiLCJldmVyeSIsInBhcmFtIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJyZXBsYWNlZCIsInNlZ21lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXN1bHQiLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJmaWx0ZXJlZFF1ZXJ5IiwiaW5jbHVkZXMiLCJyZXNvbHZlQXMiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsImFzUGF0aCIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpc0R5bmFtaWNSb3V0ZSIsInNlYXJjaFBhcmFtcyIsInNlYXJjaFBhcmFtc1RvVXJsUXVlcnkiLCJoYXNoIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlVXJsQXMiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJwcmVwYXJlZFVybCIsInByZXBhcmVkQXMiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwicGFnZXMiLCJjbGVhblBhdGhuYW1lIiwiZGVub3JtYWxpemVQYWdlUGF0aCIsInBhZ2UiLCJyZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiZmV0Y2hSZXRyeSIsImF0dGVtcHRzIiwiY3JlZGVudGlhbHMiLCJzdGF0dXMiLCJqc29uIiwiZGF0YSIsIm5vdEZvdW5kIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJSb3V0ZXIiLCJjb25zdHJ1Y3RvciIsIl9wYXRobmFtZSIsIl9xdWVyeSIsIl9hcyIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwiQ29tcG9uZW50Iiwic3Vic2NyaXB0aW9uIiwiaXNGYWxsYmFjayIsImlzUHJldmlldyIsImNvbXBvbmVudHMiLCJzZGMiLCJzZHIiLCJzdWIiLCJjbGMiLCJfYnBzIiwiX3dyYXBBcHAiLCJpc1NzciIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJpc1JlYWR5IiwiX2lkeCIsIm9uUG9wU3RhdGUiLCJzdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiX19OIiwiZm9yY2VkU2Nyb2xsIiwiaWR4IiwicGFyc2VSZWxhdGl2ZVVybCIsImNoYW5nZSIsImluaXRpYWwiLCJfX05fU1NHIiwiX19OX1NTUCIsImF1dG9FeHBvcnREeW5hbWljIiwiX19ORVhUX0RBVEFfXyIsImF1dG9FeHBvcnQiLCJnc3NwIiwiZ2lwIiwibG9jYXRpb24iLCJzZWFyY2giLCJyZWxvYWQiLCJiYWNrIiwiaGlzdG9yeSIsIm1ldGhvZCIsInNob3VsZFJlc29sdmVIcmVmIiwiX2giLCJfc2hvdWxkUmVzb2x2ZUhyZWYiLCJsb2NhbGVDaGFuZ2UiLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsInJvdXRlUHJvcHMiLCJhYm9ydENvbXBvbmVudExvYWQiLCJjbGVhbmVkQXMiLCJvbmx5QUhhc2hDaGFuZ2UiLCJzY3JvbGxUb0hhc2giLCJub3RpZnkiLCJwYXJzZWQiLCJyZXdyaXRlcyIsImdldFBhZ2VMaXN0IiwiX19yZXdyaXRlcyIsInVybElzTmV3IiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsIl9zZWxmJF9fTkVYVF9EQVRBX18kcCIsIl9zZWxmJF9fTkVYVF9EQVRBX18kcDIiLCJfb3B0aW9ucyRzY3JvbGwiLCJyb3V0ZUluZm8iLCJnZXRSb3V0ZUluZm8iLCJwYWdlUHJvcHMiLCJfX05fUkVESVJFQ1QiLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJuZXdVcmwiLCJuZXdBcyIsIl9fTl9QUkVWSUVXIiwibm90Rm91bmRSb3V0ZSIsImZldGNoQ29tcG9uZW50IiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwic3RhdHVzQ29kZSIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJzaG91bGRTY3JvbGwiLCJyZXNldFNjcm9sbCIsIngiLCJ5IiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwiZ2lwRXJyIiwicm91dGVJbmZvRXJyIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJtb2QiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJnZXREYXRhSHJlZiIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJfZ2V0U2VydmVyRGF0YSIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJzY3JvbGxUbyIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJfaXNTc2ciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiY2FjaGVLZXkiLCJyZXNvdXJjZUtleSIsImN0eCIsIkFwcFRyZWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiZm9ybWF0VXJsIiwicXVlcnlzdHJpbmciLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJXZWFrTWFwIiwiY2FjaGUiLCJuZXdPYmoiLCJoYXNQcm9wZXJ0eURlc2NyaXB0b3IiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJkZXNjIiwic2xhc2hlZFByb3RvY29scyIsInVybE9iaiIsImF1dGgiLCJob3N0bmFtZSIsInByb3RvY29sIiwiaG9zdCIsInBvcnQiLCJTdHJpbmciLCJ1cmxRdWVyeVRvU2VhcmNoUGFyYW1zIiwic3Vic3RyIiwic2xhc2hlcyIsIlRFU1RfUk9VVEUiLCJnbG9iYWxCYXNlIiwicmVzb2x2ZWRCYXNlIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsImlzTmFOIiwidXJsUXVlcnkiLCJVUkxTZWFyY2hQYXJhbXMiLCJpdGVtIiwiYXBwZW5kIiwic2VhcmNoUGFyYW1zTGlzdCIsImZyb20iLCJleGVjIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiY29kZSIsInNsdWdOYW1lIiwiZyIsIm0iLCJwb3MiLCJlc2NhcGVSZWdleCIsInN0ciIsInBhcnNlUGFyYW1ldGVyIiwibm9ybWFsaXplZFJvdXRlIiwic2VnbWVudHMiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsImZyb21DaGFyQ29kZSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIlJlZ0V4cCIsIm5hbWVkUmVnZXgiLCJleGVjT25jZSIsImdldERpc3BsYXlOYW1lIiwiaXNSZXNTZW50IiwiX2Zvcm1hdFVybCIsInVzZWQiLCJmaW5pc2hlZCIsImhlYWRlcnNTZW50IiwiX0FwcCRwcm90b3R5cGUiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJtZWFzdXJlIiwiRGlzY291bnQiLCJzIiwiY2xvc2UiLCJGb290ZXIiLCJjbHN4IiwiaGVhZGVyTGlua3MiLCJ0aXRsZSIsImxvZ28iLCJIZWFkZXIiLCJwcm9tbyIsIlByb2R1Y3QiLCJpbWFnZSIsImFkZGl0aW9uIiwid2VpZ2h0IiwicHJpY2UiLCJ0YXN0ZXMiLCJhZGRpdGlvbkNsYXNzIiwiYWxsU3RhdHVzIiwiY2xhc3MiLCJ0YXN0ZSIsImFsbFRhc3RlcyIsIlNsaWRlciIsInNsaWRlcyIsIlN3aXBlckNvcmUiLCJOYXZpZ2F0aW9uIiwicHJldlJlZiIsIlJlYWN0IiwibmV4dFJlZiIsImN1cnJlbnRDb3VudCIsInNldEN1cnJlbnRDb3VudCIsImFsbENvdW50IiwiY2VpbCIsInNsaWRlciIsInNsaWRlc1BlclZpZXciLCJzbGlkZXJDbGFzcyIsInNsaWRlQ2xhc3MiLCJyZXN0UGFyYW1zIiwibmF2Iiwic3dpcGVyIiwibmF2aWdhdGlvbiIsInByZXZFbCIsIm5leHRFbCIsInVwZGF0ZSIsInNuYXBJbmRleCIsInNsaWRlIiwiU2xpZGVyTmF2IiwicHJldiIsImNvdW50ZXIiLCJMb2dvIiwiUmVkV2luZSIsImJvcmRlciIsIldoaXRlV2luZSIsIlZlZ2V0YWJsZXMiLCJGcnVpdHMiLCJEaXNjb3VudFNlY3Rpb24iLCJOZXdUYXN0ZSIsInN0eWxlIiwidmVnZXRhYmxlcyIsImZydWl0cyIsImNvdW50cnlGbGFncyIsIkZyZW5jaCIsIlJ1c3NpYW4iLCJuZXdQcm9kdWN0cyIsInNsaWRlclBhcmFtcyIsInNsaWRlc1Blckdyb3VwIiwic3BhY2VCZXR3ZWVuIiwiTmV3VGFzdGVzU2VjdGlvbiIsIlByb2R1Y3RzU2VjdGlvbiIsInByb2R1Y3RzIiwiYWN0aXZlQ2F0ZWdvcnkiLCJzZXRBY3RpdmVDYXRlZ29yeSIsImFjdGl2ZVN1YmNhdGVnb3J5Iiwic2V0QWN0aXZlU3ViY2F0ZWdvcnkiLCJzZXRBY3RpdmVJdGVtIiwic2V0U3RhdGUiLCJjYXRlZ29yaWVzIiwic3ViQ2F0ZWdvcmllcyIsImNhdGVnb3J5Iiwic3ViY2F0ZWdvcnkiLCJwcm9kdWN0IiwiYXZhbGlhYmxlIiwicHJlcGFyaW5nIiwiY291bnQiLCJkYXRlIiwiZ2FsbGVyeSIsImRlc2NyaXB0aW9uIiwiQkFTRV9VUkwiLCJyZXF1ZXN0IiwiYXhpb3MiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7QUNOQSxjQUFjLG1CQUFPLENBQUMsc0ZBQStCOztBQUVyRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5Qzs7Ozs7Ozs7OztBQ3REQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDaEJhLGtCQUFrQixNQUFNLHdCQUF3QixrQkFBa0IsMkJBQTJCLHFCQUFxQixnQ0FBZ0MsZ0NBQWdDLG1DQUFtQyw0QkFBNEIsK0JBQStCLG9CQUFvQix5QkFBeUIsVUFBVTtBQUNwVixpRDs7Ozs7Ozs7OztBQ0RBLHlHQUE4Qzs7Ozs7Ozs7Ozs7O0FDQTlDLG1DOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJwYWdlcy9wcm9kdWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKTt2YXIgX3JvdXRlcjI9cmVxdWlyZShcIi4vcm91dGVyXCIpO3ZhciBfdXNlSW50ZXJzZWN0aW9uPXJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7Y29uc3QgcHJlZmV0Y2hlZD17fTtmdW5jdGlvbiBwcmVmZXRjaChyb3V0ZXIsaHJlZixhcyxvcHRpb25zKXtpZih0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCd8fCFyb3V0ZXIpcmV0dXJuO2lmKCEoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpKXJldHVybjsvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4vLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4vLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3Rcbi8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxucm91dGVyLnByZWZldGNoKGhyZWYsYXMsb3B0aW9ucykuY2F0Y2goZXJyPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpey8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbnRocm93IGVycjt9fSk7Y29uc3QgY3VyTG9jYWxlPW9wdGlvbnMmJnR5cGVvZiBvcHRpb25zLmxvY2FsZSE9PSd1bmRlZmluZWQnP29wdGlvbnMubG9jYWxlOnJvdXRlciYmcm91dGVyLmxvY2FsZTsvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxucHJlZmV0Y2hlZFtocmVmKyclJythcysoY3VyTG9jYWxlPyclJytjdXJMb2NhbGU6JycpXT10cnVlO31mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQpe2NvbnN0e3RhcmdldH09ZXZlbnQuY3VycmVudFRhcmdldDtyZXR1cm4gdGFyZ2V0JiZ0YXJnZXQhPT0nX3NlbGYnfHxldmVudC5tZXRhS2V5fHxldmVudC5jdHJsS2V5fHxldmVudC5zaGlmdEtleXx8ZXZlbnQuYWx0S2V5fHwvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuZXZlbnQubmF0aXZlRXZlbnQmJmV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoPT09Mjt9ZnVuY3Rpb24gbGlua0NsaWNrZWQoZSxyb3V0ZXIsaHJlZixhcyxyZXBsYWNlLHNoYWxsb3csc2Nyb2xsLGxvY2FsZSl7Y29uc3R7bm9kZU5hbWV9PWUuY3VycmVudFRhcmdldDtpZihub2RlTmFtZT09PSdBJyYmKGlzTW9kaWZpZWRFdmVudChlKXx8ISgwLF9yb3V0ZXIuaXNMb2NhbFVSTCkoaHJlZikpKXsvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbnJldHVybjt9ZS5wcmV2ZW50RGVmYXVsdCgpOy8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuaWYoc2Nyb2xsPT1udWxsJiZhcy5pbmRleE9mKCcjJyk+PTApe3Njcm9sbD1mYWxzZTt9Ly8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG5yb3V0ZXJbcmVwbGFjZT8ncmVwbGFjZSc6J3B1c2gnXShocmVmLGFzLHtzaGFsbG93LGxvY2FsZSxzY3JvbGx9KTt9ZnVuY3Rpb24gTGluayhwcm9wcyl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2Z1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzKXtyZXR1cm4gbmV3IEVycm9yKGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gKyh0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCc/XCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiOicnKSk7fS8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG5jb25zdCByZXF1aXJlZFByb3BzR3VhcmQ9e2hyZWY6dHJ1ZX07Y29uc3QgcmVxdWlyZWRQcm9wcz1PYmplY3Qua2V5cyhyZXF1aXJlZFByb3BzR3VhcmQpO3JlcXVpcmVkUHJvcHMuZm9yRWFjaChrZXk9PntpZihrZXk9PT0naHJlZicpe2lmKHByb3BzW2tleV09PW51bGx8fHR5cGVvZiBwcm9wc1trZXldIT09J3N0cmluZycmJnR5cGVvZiBwcm9wc1trZXldIT09J29iamVjdCcpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgc3RyaW5nYCBvciBgb2JqZWN0YCcsYWN0dWFsOnByb3BzW2tleV09PT1udWxsPydudWxsJzp0eXBlb2YgcHJvcHNba2V5XX0pO319ZWxzZXsvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuY29uc3QgXz1rZXk7fX0pOy8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG5jb25zdCBvcHRpb25hbFByb3BzR3VhcmQ9e2FzOnRydWUscmVwbGFjZTp0cnVlLHNjcm9sbDp0cnVlLHNoYWxsb3c6dHJ1ZSxwYXNzSHJlZjp0cnVlLHByZWZldGNoOnRydWUsbG9jYWxlOnRydWV9O2NvbnN0IG9wdGlvbmFsUHJvcHM9T2JqZWN0LmtleXMob3B0aW9uYWxQcm9wc0d1YXJkKTtvcHRpb25hbFByb3BzLmZvckVhY2goa2V5PT57Y29uc3QgdmFsVHlwZT10eXBlb2YgcHJvcHNba2V5XTtpZihrZXk9PT0nYXMnKXtpZihwcm9wc1trZXldJiZ2YWxUeXBlIT09J3N0cmluZycmJnZhbFR5cGUhPT0nb2JqZWN0Jyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2BzdHJpbmdgIG9yIGBvYmplY3RgJyxhY3R1YWw6dmFsVHlwZX0pO319ZWxzZSBpZihrZXk9PT0nbG9jYWxlJyl7aWYocHJvcHNba2V5XSYmdmFsVHlwZSE9PSdzdHJpbmcnKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYHN0cmluZ2AnLGFjdHVhbDp2YWxUeXBlfSk7fX1lbHNlIGlmKGtleT09PSdyZXBsYWNlJ3x8a2V5PT09J3Njcm9sbCd8fGtleT09PSdzaGFsbG93J3x8a2V5PT09J3Bhc3NIcmVmJ3x8a2V5PT09J3ByZWZldGNoJyl7aWYocHJvcHNba2V5XSE9bnVsbCYmdmFsVHlwZSE9PSdib29sZWFuJyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2Bib29sZWFuYCcsYWN0dWFsOnZhbFR5cGV9KTt9fWVsc2V7Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmNvbnN0IF89a2V5O319KTsvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG5jb25zdCBoYXNXYXJuZWQ9X3JlYWN0LmRlZmF1bHQudXNlUmVmKGZhbHNlKTtpZihwcm9wcy5wcmVmZXRjaCYmIWhhc1dhcm5lZC5jdXJyZW50KXtoYXNXYXJuZWQuY3VycmVudD10cnVlO2NvbnNvbGUud2FybignTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnKTt9fWNvbnN0IHA9cHJvcHMucHJlZmV0Y2ghPT1mYWxzZTtjb25zdCByb3V0ZXI9KDAsX3JvdXRlcjIudXNlUm91dGVyKSgpO2NvbnN0e2hyZWYsYXN9PV9yZWFjdC5kZWZhdWx0LnVzZU1lbW8oKCk9Pntjb25zdFtyZXNvbHZlZEhyZWYscmVzb2x2ZWRBc109KDAsX3JvdXRlci5yZXNvbHZlSHJlZikocm91dGVyLHByb3BzLmhyZWYsdHJ1ZSk7cmV0dXJue2hyZWY6cmVzb2x2ZWRIcmVmLGFzOnByb3BzLmFzPygwLF9yb3V0ZXIucmVzb2x2ZUhyZWYpKHJvdXRlcixwcm9wcy5hcyk6cmVzb2x2ZWRBc3x8cmVzb2x2ZWRIcmVmfTt9LFtyb3V0ZXIscHJvcHMuaHJlZixwcm9wcy5hc10pO2xldHtjaGlsZHJlbixyZXBsYWNlLHNoYWxsb3csc2Nyb2xsLGxvY2FsZX09cHJvcHM7Ly8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG5pZih0eXBlb2YgY2hpbGRyZW49PT0nc3RyaW5nJyl7Y2hpbGRyZW49LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsbnVsbCxjaGlsZHJlbik7fS8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxubGV0IGNoaWxkO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7dHJ5e2NoaWxkPV9yZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTt9Y2F0Y2goZXJyKXt0aHJvdyBuZXcgRXJyb3IoYE11bHRpcGxlIGNoaWxkcmVuIHdlcmUgcGFzc2VkIHRvIDxMaW5rPiB3aXRoIFxcYGhyZWZcXGAgb2YgXFxgJHtwcm9wcy5ocmVmfVxcYCBidXQgb25seSBvbmUgY2hpbGQgaXMgc3VwcG9ydGVkIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2xpbmstbXVsdGlwbGUtY2hpbGRyZW5gKyh0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCc/XCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiOicnKSk7fX1lbHNle2NoaWxkPV9yZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTt9Y29uc3QgY2hpbGRSZWY9Y2hpbGQmJnR5cGVvZiBjaGlsZD09PSdvYmplY3QnJiZjaGlsZC5yZWY7Y29uc3Rbc2V0SW50ZXJzZWN0aW9uUmVmLGlzVmlzaWJsZV09KDAsX3VzZUludGVyc2VjdGlvbi51c2VJbnRlcnNlY3Rpb24pKHtyb290TWFyZ2luOicyMDBweCd9KTtjb25zdCBzZXRSZWY9X3JlYWN0LmRlZmF1bHQudXNlQ2FsbGJhY2soZWw9PntzZXRJbnRlcnNlY3Rpb25SZWYoZWwpO2lmKGNoaWxkUmVmKXtpZih0eXBlb2YgY2hpbGRSZWY9PT0nZnVuY3Rpb24nKWNoaWxkUmVmKGVsKTtlbHNlIGlmKHR5cGVvZiBjaGlsZFJlZj09PSdvYmplY3QnKXtjaGlsZFJlZi5jdXJyZW50PWVsO319fSxbY2hpbGRSZWYsc2V0SW50ZXJzZWN0aW9uUmVmXSk7KDAsX3JlYWN0LnVzZUVmZmVjdCkoKCk9Pntjb25zdCBzaG91bGRQcmVmZXRjaD1pc1Zpc2libGUmJnAmJigwLF9yb3V0ZXIuaXNMb2NhbFVSTCkoaHJlZik7Y29uc3QgY3VyTG9jYWxlPXR5cGVvZiBsb2NhbGUhPT0ndW5kZWZpbmVkJz9sb2NhbGU6cm91dGVyJiZyb3V0ZXIubG9jYWxlO2NvbnN0IGlzUHJlZmV0Y2hlZD1wcmVmZXRjaGVkW2hyZWYrJyUnK2FzKyhjdXJMb2NhbGU/JyUnK2N1ckxvY2FsZTonJyldO2lmKHNob3VsZFByZWZldGNoJiYhaXNQcmVmZXRjaGVkKXtwcmVmZXRjaChyb3V0ZXIsaHJlZixhcyx7bG9jYWxlOmN1ckxvY2FsZX0pO319LFthcyxocmVmLGlzVmlzaWJsZSxsb2NhbGUscCxyb3V0ZXJdKTtjb25zdCBjaGlsZFByb3BzPXtyZWY6c2V0UmVmLG9uQ2xpY2s6ZT0+e2lmKGNoaWxkLnByb3BzJiZ0eXBlb2YgY2hpbGQucHJvcHMub25DbGljaz09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uQ2xpY2soZSk7fWlmKCFlLmRlZmF1bHRQcmV2ZW50ZWQpe2xpbmtDbGlja2VkKGUscm91dGVyLGhyZWYsYXMscmVwbGFjZSxzaGFsbG93LHNjcm9sbCxsb2NhbGUpO319fTtjaGlsZFByb3BzLm9uTW91c2VFbnRlcj1lPT57aWYoISgwLF9yb3V0ZXIuaXNMb2NhbFVSTCkoaHJlZikpcmV0dXJuO2lmKGNoaWxkLnByb3BzJiZ0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpO31wcmVmZXRjaChyb3V0ZXIsaHJlZixhcyx7cHJpb3JpdHk6dHJ1ZX0pO307Ly8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4vLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbmlmKHByb3BzLnBhc3NIcmVmfHxjaGlsZC50eXBlPT09J2EnJiYhKCdocmVmJ2luIGNoaWxkLnByb3BzKSl7Y29uc3QgY3VyTG9jYWxlPXR5cGVvZiBsb2NhbGUhPT0ndW5kZWZpbmVkJz9sb2NhbGU6cm91dGVyJiZyb3V0ZXIubG9jYWxlOy8vIHdlIG9ubHkgcmVuZGVyIGRvbWFpbiBsb2NhbGVzIGlmIHdlIGFyZSBjdXJyZW50bHkgb24gYSBkb21haW4gbG9jYWxlXG4vLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xuY29uc3QgbG9jYWxlRG9tYWluPXJvdXRlciYmcm91dGVyLmlzTG9jYWxlRG9tYWluJiYoMCxfcm91dGVyLmdldERvbWFpbkxvY2FsZSkoYXMsY3VyTG9jYWxlLHJvdXRlciYmcm91dGVyLmxvY2FsZXMscm91dGVyJiZyb3V0ZXIuZG9tYWluTG9jYWxlcyk7Y2hpbGRQcm9wcy5ocmVmPWxvY2FsZURvbWFpbnx8KDAsX3JvdXRlci5hZGRCYXNlUGF0aCkoKDAsX3JvdXRlci5hZGRMb2NhbGUpKGFzLGN1ckxvY2FsZSxyb3V0ZXImJnJvdXRlci5kZWZhdWx0TG9jYWxlKSk7fXJldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsY2hpbGRQcm9wcyk7fXZhciBfZGVmYXVsdD1MaW5rO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpbmsuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaD1yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtleHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoPXZvaWQgMDsvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL2Z1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpe3JldHVybiBwYXRoLmVuZHNXaXRoKCcvJykmJnBhdGghPT0nLyc/cGF0aC5zbGljZSgwLC0xKTpwYXRoO30vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9jb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaD1wcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0g/cGF0aD0+e2lmKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKXtyZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCk7fWVsc2UgaWYocGF0aC5lbmRzV2l0aCgnLycpKXtyZXR1cm4gcGF0aDt9ZWxzZXtyZXR1cm4gcGF0aCsnLyc7fX06cmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7ZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaD1ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjaz1leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2s9dm9pZCAwO2NvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2s9dHlwZW9mIHNlbGYhPT0ndW5kZWZpbmVkJyYmc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrfHxmdW5jdGlvbihjYil7bGV0IHN0YXJ0PURhdGUubm93KCk7cmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtjYih7ZGlkVGltZW91dDpmYWxzZSx0aW1lUmVtYWluaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIE1hdGgubWF4KDAsNTAtKERhdGUubm93KCktc3RhcnQpKTt9fSk7fSwxKTt9O2V4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1ZXN0SWRsZUNhbGxiYWNrO2NvbnN0IGNhbmNlbElkbGVDYWxsYmFjaz10eXBlb2Ygc2VsZiE9PSd1bmRlZmluZWQnJiZzZWxmLmNhbmNlbElkbGVDYWxsYmFja3x8ZnVuY3Rpb24oaWQpe3JldHVybiBjbGVhclRpbWVvdXQoaWQpO307ZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2s9Y2FuY2VsSWRsZUNhbGxiYWNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm1hcmtBc3NldEVycm9yPW1hcmtBc3NldEVycm9yO2V4cG9ydHMuaXNBc3NldEVycm9yPWlzQXNzZXRFcnJvcjtleHBvcnRzLmdldENsaWVudEJ1aWxkTWFuaWZlc3Q9Z2V0Q2xpZW50QnVpbGRNYW5pZmVzdDtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZVwiKSk7dmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTsvLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVk9MzgwMDtmdW5jdGlvbiB3aXRoRnV0dXJlKGtleSxtYXAsZ2VuZXJhdG9yKXtsZXQgZW50cnk9bWFwLmdldChrZXkpO2lmKGVudHJ5KXtpZignZnV0dXJlJ2luIGVudHJ5KXtyZXR1cm4gZW50cnkuZnV0dXJlO31yZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KTt9bGV0IHJlc29sdmVyO2NvbnN0IHByb209bmV3IFByb21pc2UocmVzb2x2ZT0+e3Jlc29sdmVyPXJlc29sdmU7fSk7bWFwLnNldChrZXksZW50cnk9e3Jlc29sdmU6cmVzb2x2ZXIsZnV0dXJlOnByb219KTtyZXR1cm4gZ2VuZXJhdG9yPy8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbmdlbmVyYXRvcigpLnRoZW4odmFsdWU9PihyZXNvbHZlcih2YWx1ZSksdmFsdWUpKTpwcm9tO31mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rKXt0cnl7bGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7cmV0dXJuKC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0JiYhIWRvY3VtZW50LmRvY3VtZW50TW9kZXx8bGluay5yZWxMaXN0LnN1cHBvcnRzKCdwcmVmZXRjaCcpKTt9Y2F0Y2goX3VudXNlZCl7cmV0dXJuIGZhbHNlO319Y29uc3QgY2FuUHJlZmV0Y2g9aGFzUHJlZmV0Y2goKTtmdW5jdGlvbiBwcmVmZXRjaFZpYURvbShocmVmLGFzLGxpbmspe3JldHVybiBuZXcgUHJvbWlzZSgocmVzLHJlaik9PntpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInByZWZldGNoXCJdW2hyZWZePVwiJHtocmVmfVwiXWApKXtyZXR1cm4gcmVzKCk7fWxpbms9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpOy8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG5pZihhcylsaW5rLmFzPWFzO2xpbmsucmVsPWBwcmVmZXRjaGA7bGluay5jcm9zc09yaWdpbj1wcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOO2xpbmsub25sb2FkPXJlcztsaW5rLm9uZXJyb3I9cmVqOy8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG5saW5rLmhyZWY9aHJlZjtkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO30pO31jb25zdCBBU1NFVF9MT0FEX0VSUk9SPVN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpOy8vIFRPRE86IHVuZXhwb3J0XG5mdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnIpe3JldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLEFTU0VUX0xPQURfRVJST1Ise30pO31mdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyKXtyZXR1cm4gZXJyJiZBU1NFVF9MT0FEX0VSUk9SIGluIGVycjt9ZnVuY3Rpb24gYXBwZW5kU2NyaXB0KHNyYyxzY3JpcHQpe3JldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57c2NyaXB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpOy8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4vLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4vLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbnNjcmlwdC5vbmxvYWQ9cmVzb2x2ZTtzY3JpcHQub25lcnJvcj0oKT0+cmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpOy8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuLy8gICAgYnJvd3NlciBiZWdpbnMgdG8gZmV0Y2guXG5zY3JpcHQuY3Jvc3NPcmlnaW49cHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjsvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG5zY3JpcHQuc3JjPXNyYztkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7fSk7fS8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KHAsbXMsZXJyKXtyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e2xldCBjYW5jZWxsZWQ9ZmFsc2U7cC50aGVuKHI9PnsvLyBSZXNvbHZlZCwgY2FuY2VsIHRoZSB0aW1lb3V0XG5jYW5jZWxsZWQ9dHJ1ZTtyZXNvbHZlKHIpO30pLmNhdGNoKHJlamVjdCk7KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2sucmVxdWVzdElkbGVDYWxsYmFjaykoKCk9PnNldFRpbWVvdXQoKCk9PntpZighY2FuY2VsbGVkKXtyZWplY3QoZXJyKTt9fSxtcykpO30pO30vLyBUT0RPOiBzdG9wIGV4cG9ydGluZyBvciBjYWNoZSB0aGUgZmFpbHVyZVxuLy8gSXQnZCBiZSBiZXN0IHRvIHN0b3AgZXhwb3J0aW5nIHRoaXMuIEl0J3MgYW4gaW1wbGVtZW50YXRpb24gZGV0YWlsLiBXZSdyZVxuLy8gb25seSBleHBvcnRpbmcgaXQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsdHkgd2l0aCB0aGUgYHBhZ2UtbG9hZGVyYC5cbi8vIE9ubHkgY2FjaGUgdGhpcyByZXNwb25zZSBhcyBhIGxhc3QgcmVzb3J0IGlmIHdlIGNhbm5vdCBlbGltaW5hdGUgYWxsIG90aGVyXG4vLyBjb2RlIGJyYW5jaGVzIHRoYXQgdXNlIHRoZSBCdWlsZCBNYW5pZmVzdCBDYWxsYmFjayBhbmQgcHVzaCB0aGVtIHRocm91Z2hcbi8vIHRoZSBSb3V0ZSBMb2FkZXIgaW50ZXJmYWNlLlxuZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpe2lmKHNlbGYuX19CVUlMRF9NQU5JRkVTVCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO31jb25zdCBvbkJ1aWxkTWFuaWZlc3Q9bmV3IFByb21pc2UocmVzb2x2ZT0+ey8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbmNvbnN0IGNiPXNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQjtzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0I9KCk9PntyZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7Y2ImJmNiKCk7fTt9KTtyZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChvbkJ1aWxkTWFuaWZlc3QsTVNfTUFYX0lETEVfREVMQVksbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjbGllbnQgYnVpbGQgbWFuaWZlc3QnKSkpO31mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LHJvdXRlKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe3JldHVybiBQcm9taXNlLnJlc29sdmUoe3NjcmlwdHM6W2Fzc2V0UHJlZml4KycvX25leHQvc3RhdGljL2NodW5rcy9wYWdlcycrZW5jb2RlVVJJKCgwLF9nZXRBc3NldFBhdGhGcm9tUm91dGUuZGVmYXVsdCkocm91dGUsJy5qcycpKV0sLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuY3NzOltdfSk7fXJldHVybiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkudGhlbihtYW5pZmVzdD0+e2lmKCEocm91dGUgaW4gbWFuaWZlc3QpKXt0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpO31jb25zdCBhbGxGaWxlcz1tYW5pZmVzdFtyb3V0ZV0ubWFwKGVudHJ5PT5hc3NldFByZWZpeCsnL19uZXh0LycrZW5jb2RlVVJJKGVudHJ5KSk7cmV0dXJue3NjcmlwdHM6YWxsRmlsZXMuZmlsdGVyKHY9PnYuZW5kc1dpdGgoJy5qcycpKSxjc3M6YWxsRmlsZXMuZmlsdGVyKHY9PnYuZW5kc1dpdGgoJy5jc3MnKSl9O30pO31mdW5jdGlvbiBjcmVhdGVSb3V0ZUxvYWRlcihhc3NldFByZWZpeCl7Y29uc3QgZW50cnlwb2ludHM9bmV3IE1hcCgpO2NvbnN0IGxvYWRlZFNjcmlwdHM9bmV3IE1hcCgpO2NvbnN0IHN0eWxlU2hlZXRzPW5ldyBNYXAoKTtjb25zdCByb3V0ZXM9bmV3IE1hcCgpO2Z1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmMpe2xldCBwcm9tPWxvYWRlZFNjcmlwdHMuZ2V0KHNyYyk7aWYocHJvbSl7cmV0dXJuIHByb207fS8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbmlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmNePVwiJHtzcmN9XCJdYCkpe3JldHVybiBQcm9taXNlLnJlc29sdmUoKTt9bG9hZGVkU2NyaXB0cy5zZXQoc3JjLHByb209YXBwZW5kU2NyaXB0KHNyYykpO3JldHVybiBwcm9tO31mdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZil7bGV0IHByb209c3R5bGVTaGVldHMuZ2V0KGhyZWYpO2lmKHByb20pe3JldHVybiBwcm9tO31zdHlsZVNoZWV0cy5zZXQoaHJlZixwcm9tPWZldGNoKGhyZWYpLnRoZW4ocmVzPT57aWYoIXJlcy5vayl7dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YCk7fXJldHVybiByZXMudGV4dCgpLnRoZW4odGV4dD0+KHtocmVmOmhyZWYsY29udGVudDp0ZXh0fSkpO30pLmNhdGNoKGVycj0+e3Rocm93IG1hcmtBc3NldEVycm9yKGVycik7fSkpO3JldHVybiBwcm9tO31yZXR1cm57d2hlbkVudHJ5cG9pbnQocm91dGUpe3JldHVybiB3aXRoRnV0dXJlKHJvdXRlLGVudHJ5cG9pbnRzKTt9LG9uRW50cnlwb2ludChyb3V0ZSxleGVjdXRlKXtQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSkudGhlbihmbj0+Zm4oKSkudGhlbihleHBvcnRzPT4oe2NvbXBvbmVudDpleHBvcnRzJiZleHBvcnRzLmRlZmF1bHR8fGV4cG9ydHMsZXhwb3J0czpleHBvcnRzfSksZXJyPT4oe2Vycm9yOmVycn0pKS50aGVuKGlucHV0PT57Y29uc3Qgb2xkPWVudHJ5cG9pbnRzLmdldChyb3V0ZSk7ZW50cnlwb2ludHMuc2V0KHJvdXRlLGlucHV0KTtpZihvbGQmJidyZXNvbHZlJ2luIG9sZClvbGQucmVzb2x2ZShpbnB1dCk7fSk7fSxsb2FkUm91dGUocm91dGUscHJlZmV0Y2gpe3JldHVybiB3aXRoRnV0dXJlKHJvdXRlLHJvdXRlcywoKT0+e3JldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgscm91dGUpLnRoZW4oKHtzY3JpcHRzLGNzc30pPT57cmV0dXJuIFByb21pc2UuYWxsKFtlbnRyeXBvaW50cy5oYXMocm91dGUpP1tdOlByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSldKTt9KS50aGVuKHJlcz0+e3JldHVybiB0aGlzLndoZW5FbnRyeXBvaW50KHJvdXRlKS50aGVuKGVudHJ5cG9pbnQ9Pih7ZW50cnlwb2ludCxzdHlsZXM6cmVzWzFdfSkpO30pLE1TX01BWF9JRExFX0RFTEFZLG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApKSkudGhlbigoe2VudHJ5cG9pbnQsc3R5bGVzfSk9Pntjb25zdCByZXM9T2JqZWN0LmFzc2lnbih7c3R5bGVzOnN0eWxlc30sZW50cnlwb2ludCk7cmV0dXJuJ2Vycm9yJ2luIGVudHJ5cG9pbnQ/ZW50cnlwb2ludDpyZXM7fSkuY2F0Y2goZXJyPT57aWYocHJlZmV0Y2gpey8vIHdlIGRvbid0IHdhbnQgdG8gY2FjaGUgZXJyb3JzIGR1cmluZyBwcmVmZXRjaFxudGhyb3cgZXJyO31yZXR1cm57ZXJyb3I6ZXJyfTt9KTt9KTt9LHByZWZldGNoKHJvdXRlKXsvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4vLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG5sZXQgY247aWYoY249bmF2aWdhdG9yLmNvbm5lY3Rpb24pey8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuaWYoY24uc2F2ZURhdGF8fC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSlyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7fXJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LHJvdXRlKS50aGVuKG91dHB1dD0+UHJvbWlzZS5hbGwoY2FuUHJlZmV0Y2g/b3V0cHV0LnNjcmlwdHMubWFwKHNjcmlwdD0+cHJlZmV0Y2hWaWFEb20oc2NyaXB0LCdzY3JpcHQnKSk6W10pKS50aGVuKCgpPT57KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2sucmVxdWVzdElkbGVDYWxsYmFjaykoKCk9PnRoaXMubG9hZFJvdXRlKHJvdXRlLHRydWUpLmNhdGNoKCgpPT57fSkpO30pLmNhdGNoKC8vIHN3YWxsb3cgcHJlZmV0Y2ggZXJyb3JzXG4oKT0+e30pO319O312YXIgX2RlZmF1bHQ9Y3JlYXRlUm91dGVMb2FkZXI7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtbG9hZGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZVJvdXRlcj11c2VSb3V0ZXI7ZXhwb3J0cy5tYWtlUHVibGljUm91dGVySW5zdGFuY2U9bWFrZVB1YmxpY1JvdXRlckluc3RhbmNlO2V4cG9ydHMuY3JlYXRlUm91dGVyPWV4cG9ydHMud2l0aFJvdXRlcj1leHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyMj1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIikpO2V4cG9ydHMuUm91dGVyPV9yb3V0ZXIyLmRlZmF1bHQ7ZXhwb3J0cy5OZXh0Um91dGVyPV9yb3V0ZXIyLk5leHRSb3V0ZXI7dmFyIF9yb3V0ZXJDb250ZXh0PXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHRcIik7dmFyIF93aXRoUm91dGVyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO2V4cG9ydHMud2l0aFJvdXRlcj1fd2l0aFJvdXRlci5kZWZhdWx0Oy8qIGdsb2JhbCB3aW5kb3cgKi9jb25zdCBzaW5nbGV0b25Sb3V0ZXI9e3JvdXRlcjpudWxsLC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG5yZWFkeUNhbGxiYWNrczpbXSxyZWFkeShjYil7aWYodGhpcy5yb3V0ZXIpcmV0dXJuIGNiKCk7aWYodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnKXt0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpO319fTsvLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcz1bJ3BhdGhuYW1lJywncm91dGUnLCdxdWVyeScsJ2FzUGF0aCcsJ2NvbXBvbmVudHMnLCdpc0ZhbGxiYWNrJywnYmFzZVBhdGgnLCdsb2NhbGUnLCdsb2NhbGVzJywnZGVmYXVsdExvY2FsZScsJ2lzUmVhZHknLCdpc1ByZXZpZXcnLCdpc0xvY2FsZURvbWFpbiddO2NvbnN0IHJvdXRlckV2ZW50cz1bJ3JvdXRlQ2hhbmdlU3RhcnQnLCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywncm91dGVDaGFuZ2VDb21wbGV0ZScsJ3JvdXRlQ2hhbmdlRXJyb3InLCdoYXNoQ2hhbmdlU3RhcnQnLCdoYXNoQ2hhbmdlQ29tcGxldGUnXTtjb25zdCBjb3JlTWV0aG9kRmllbGRzPVsncHVzaCcsJ3JlcGxhY2UnLCdyZWxvYWQnLCdiYWNrJywncHJlZmV0Y2gnLCdiZWZvcmVQb3BTdGF0ZSddOy8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsJ2V2ZW50cycse2dldCgpe3JldHVybiBfcm91dGVyMi5kZWZhdWx0LmV2ZW50czt9fSk7dXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2Ugd2UgbmVlZCB0byByZXR1cm5cbi8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4vLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlcixmaWVsZCx7Z2V0KCl7Y29uc3Qgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdO319KTt9KTtjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PnsvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuO3NpbmdsZXRvblJvdXRlcltmaWVsZF09KC4uLmFyZ3MpPT57Y29uc3Qgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO307fSk7cm91dGVyRXZlbnRzLmZvckVhY2goZXZlbnQ9PntzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9Pntfcm91dGVyMi5kZWZhdWx0LmV2ZW50cy5vbihldmVudCwoLi4uYXJncyk9Pntjb25zdCBldmVudEZpZWxkPWBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoMSl9YDtjb25zdCBfc2luZ2xldG9uUm91dGVyPXNpbmdsZXRvblJvdXRlcjtpZihfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKXt0cnl7X3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKTt9Y2F0Y2goZXJyKXtjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApO2NvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YCk7fX19KTt9KTt9KTtmdW5jdGlvbiBnZXRSb3V0ZXIoKXtpZighc2luZ2xldG9uUm91dGVyLnJvdXRlcil7Y29uc3QgbWVzc2FnZT0nTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicrJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIG9uIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fS8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxudmFyIF9kZWZhdWx0PXNpbmdsZXRvblJvdXRlcjsvLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O2Z1bmN0aW9uIHVzZVJvdXRlcigpe3JldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO30vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogYmUgdXNlZCBpbnNpZGUgdGhlIHNlcnZlci5cbmNvbnN0IGNyZWF0ZVJvdXRlcj0oLi4uYXJncyk9PntzaW5nbGV0b25Sb3V0ZXIucm91dGVyPW5ldyBfcm91dGVyMi5kZWZhdWx0KC4uLmFyZ3MpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKGNiPT5jYigpKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3M9W107cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fTsvLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnRzLmNyZWF0ZVJvdXRlcj1jcmVhdGVSb3V0ZXI7ZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcil7Y29uc3QgX3JvdXRlcj1yb3V0ZXI7Y29uc3QgaW5zdGFuY2U9e307Zm9yKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtpZih0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV09PT0nb2JqZWN0Jyl7aW5zdGFuY2VbcHJvcGVydHldPU9iamVjdC5hc3NpZ24oQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSk/W106e30sX3JvdXRlcltwcm9wZXJ0eV0pOy8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG5jb250aW51ZTt9aW5zdGFuY2VbcHJvcGVydHldPV9yb3V0ZXJbcHJvcGVydHldO30vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5pbnN0YW5jZS5ldmVudHM9X3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57aW5zdGFuY2VbZmllbGRdPSguLi5hcmdzKT0+e3JldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKTt9O30pO3JldHVybiBpbnN0YW5jZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VJbnRlcnNlY3Rpb249dXNlSW50ZXJzZWN0aW9uO3ZhciBfcmVhY3Q9cmVxdWlyZShcInJlYWN0XCIpO3ZhciBfcmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7Y29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI9dHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyIT09J3VuZGVmaW5lZCc7ZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uKHtyb290TWFyZ2luLGRpc2FibGVkfSl7Y29uc3QgaXNEaXNhYmxlZD1kaXNhYmxlZHx8IWhhc0ludGVyc2VjdGlvbk9ic2VydmVyO2NvbnN0IHVub2JzZXJ2ZT0oMCxfcmVhY3QudXNlUmVmKSgpO2NvbnN0W3Zpc2libGUsc2V0VmlzaWJsZV09KDAsX3JlYWN0LnVzZVN0YXRlKShmYWxzZSk7Y29uc3Qgc2V0UmVmPSgwLF9yZWFjdC51c2VDYWxsYmFjaykoZWw9PntpZih1bm9ic2VydmUuY3VycmVudCl7dW5vYnNlcnZlLmN1cnJlbnQoKTt1bm9ic2VydmUuY3VycmVudD11bmRlZmluZWQ7fWlmKGlzRGlzYWJsZWR8fHZpc2libGUpcmV0dXJuO2lmKGVsJiZlbC50YWdOYW1lKXt1bm9ic2VydmUuY3VycmVudD1vYnNlcnZlKGVsLGlzVmlzaWJsZT0+aXNWaXNpYmxlJiZzZXRWaXNpYmxlKGlzVmlzaWJsZSkse3Jvb3RNYXJnaW59KTt9fSxbaXNEaXNhYmxlZCxyb290TWFyZ2luLHZpc2libGVdKTsoMCxfcmVhY3QudXNlRWZmZWN0KSgoKT0+e2lmKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcil7aWYoIXZpc2libGUpe2NvbnN0IGlkbGVDYWxsYmFjaz0oMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+c2V0VmlzaWJsZSh0cnVlKSk7cmV0dXJuKCk9PigwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLmNhbmNlbElkbGVDYWxsYmFjaykoaWRsZUNhbGxiYWNrKTt9fX0sW3Zpc2libGVdKTtyZXR1cm5bc2V0UmVmLHZpc2libGVdO31mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsY2FsbGJhY2ssb3B0aW9ucyl7Y29uc3R7aWQsb2JzZXJ2ZXIsZWxlbWVudHN9PWNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpO2VsZW1lbnRzLnNldChlbGVtZW50LGNhbGxiYWNrKTtvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO3JldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKXtlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7b2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpOy8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbmlmKGVsZW1lbnRzLnNpemU9PT0wKXtvYnNlcnZlci5kaXNjb25uZWN0KCk7b2JzZXJ2ZXJzLmRlbGV0ZShpZCk7fX07fWNvbnN0IG9ic2VydmVycz1uZXcgTWFwKCk7ZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyl7Y29uc3QgaWQ9b3B0aW9ucy5yb290TWFyZ2lufHwnJztsZXQgaW5zdGFuY2U9b2JzZXJ2ZXJzLmdldChpZCk7aWYoaW5zdGFuY2Upe3JldHVybiBpbnN0YW5jZTt9Y29uc3QgZWxlbWVudHM9bmV3IE1hcCgpO2NvbnN0IG9ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzPT57ZW50cmllcy5mb3JFYWNoKGVudHJ5PT57Y29uc3QgY2FsbGJhY2s9ZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCk7Y29uc3QgaXNWaXNpYmxlPWVudHJ5LmlzSW50ZXJzZWN0aW5nfHxlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbz4wO2lmKGNhbGxiYWNrJiZpc1Zpc2libGUpe2NhbGxiYWNrKGlzVmlzaWJsZSk7fX0pO30sb3B0aW9ucyk7b2JzZXJ2ZXJzLnNldChpZCxpbnN0YW5jZT17aWQsb2JzZXJ2ZXIsZWxlbWVudHN9KTtyZXR1cm4gaW5zdGFuY2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVyc2VjdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXdpdGhSb3V0ZXI7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXI9cmVxdWlyZShcIi4vcm91dGVyXCIpO2Z1bmN0aW9uIHdpdGhSb3V0ZXIoQ29tcG9zZWRDb21wb25lbnQpe2Z1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKXtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb3NlZENvbXBvbmVudCxPYmplY3QuYXNzaWduKHtyb3V0ZXI6KDAsX3JvdXRlci51c2VSb3V0ZXIpKCl9LHByb3BzKSk7fVdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG47V2l0aFJvdXRlcldyYXBwZXIub3JpZ0dldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5vcmlnR2V0SW5pdGlhbFByb3BzO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdCBuYW1lPUNvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lfHxDb21wb3NlZENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7V2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWU9YHdpdGhSb3V0ZXIoJHtuYW1lfSlgO31yZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2l0aC1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVMb2NhbGVQYXRoPW5vcm1hbGl6ZUxvY2FsZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlUGF0aChwYXRobmFtZSxsb2NhbGVzKXtsZXQgZGV0ZWN0ZWRMb2NhbGU7Ly8gZmlyc3QgaXRlbSB3aWxsIGJlIGVtcHR5IHN0cmluZyBmcm9tIHNwbGl0dGluZyBhdCBmaXJzdCBjaGFyXG5jb25zdCBwYXRobmFtZVBhcnRzPXBhdGhuYW1lLnNwbGl0KCcvJyk7KGxvY2FsZXN8fFtdKS5zb21lKGxvY2FsZT0+e2lmKHBhdGhuYW1lUGFydHNbMV0udG9Mb3dlckNhc2UoKT09PWxvY2FsZS50b0xvd2VyQ2FzZSgpKXtkZXRlY3RlZExvY2FsZT1sb2NhbGU7cGF0aG5hbWVQYXJ0cy5zcGxpY2UoMSwxKTtwYXRobmFtZT1wYXRobmFtZVBhcnRzLmpvaW4oJy8nKXx8Jy8nO3JldHVybiB0cnVlO31yZXR1cm4gZmFsc2U7fSk7cmV0dXJue3BhdGhuYW1lLGRldGVjdGVkTG9jYWxlfTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtbG9jYWxlLXBhdGguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PW1pdHQ7Lypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovIC8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5mdW5jdGlvbiBtaXR0KCl7Y29uc3QgYWxsPU9iamVjdC5jcmVhdGUobnVsbCk7cmV0dXJue29uKHR5cGUsaGFuZGxlcil7OyhhbGxbdHlwZV18fChhbGxbdHlwZV09W10pKS5wdXNoKGhhbmRsZXIpO30sb2ZmKHR5cGUsaGFuZGxlcil7aWYoYWxsW3R5cGVdKXthbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpPj4+MCwxKTt9fSxlbWl0KHR5cGUsLi4uZXZ0cyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuOyhhbGxbdHlwZV18fFtdKS5zbGljZSgpLm1hcChoYW5kbGVyPT57aGFuZGxlciguLi5ldnRzKTt9KTt9fTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1taXR0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZ2V0RG9tYWluTG9jYWxlPWdldERvbWFpbkxvY2FsZTtleHBvcnRzLmFkZExvY2FsZT1hZGRMb2NhbGU7ZXhwb3J0cy5kZWxMb2NhbGU9ZGVsTG9jYWxlO2V4cG9ydHMuaGFzQmFzZVBhdGg9aGFzQmFzZVBhdGg7ZXhwb3J0cy5hZGRCYXNlUGF0aD1hZGRCYXNlUGF0aDtleHBvcnRzLmRlbEJhc2VQYXRoPWRlbEJhc2VQYXRoO2V4cG9ydHMuaXNMb2NhbFVSTD1pc0xvY2FsVVJMO2V4cG9ydHMuaW50ZXJwb2xhdGVBcz1pbnRlcnBvbGF0ZUFzO2V4cG9ydHMucmVzb2x2ZUhyZWY9cmVzb2x2ZUhyZWY7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2g9cmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2hcIik7dmFyIF9yb3V0ZUxvYWRlcj1yZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlclwiKTt2YXIgX2Rlbm9ybWFsaXplUGFnZVBhdGg9cmVxdWlyZShcIi4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGhcIik7dmFyIF9ub3JtYWxpemVMb2NhbGVQYXRoPXJlcXVpcmUoXCIuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aFwiKTt2YXIgX21pdHQ9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vdXRpbHNcIik7dmFyIF9pc0R5bmFtaWM9cmVxdWlyZShcIi4vdXRpbHMvaXMtZHluYW1pY1wiKTt2YXIgX3BhcnNlUmVsYXRpdmVVcmw9cmVxdWlyZShcIi4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsXCIpO3ZhciBfcXVlcnlzdHJpbmc9cmVxdWlyZShcIi4vdXRpbHMvcXVlcnlzdHJpbmdcIik7dmFyIF9yZXNvbHZlUmV3cml0ZXM9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9yZXNvbHZlLXJld3JpdGVzXCIpKTt2YXIgX3JvdXRlTWF0Y2hlcj1yZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO3ZhciBfcm91dGVSZWdleD1yZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iail7cmV0dXJuIG9iaiYmb2JqLl9fZXNNb2R1bGU/b2JqOntkZWZhdWx0Om9ian07fS8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmxldCBkZXRlY3REb21haW5Mb2NhbGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7ZGV0ZWN0RG9tYWluTG9jYWxlPXJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGU7fWNvbnN0IGJhc2VQYXRoPXByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEh8fCcnO2Z1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKXtyZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLHtjYW5jZWxsZWQ6dHJ1ZX0pO31mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGgscHJlZml4KXtyZXR1cm4gcHJlZml4JiZwYXRoLnN0YXJ0c1dpdGgoJy8nKT9wYXRoPT09Jy8nPygwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKShwcmVmaXgpOmAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKT09PScvJz9wYXRoLnN1YnN0cmluZygxKTpwYXRofWA6cGF0aDt9ZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKHBhdGgsbG9jYWxlLGxvY2FsZXMsZG9tYWluTG9jYWxlcyl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7bG9jYWxlPWxvY2FsZXx8KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGF0aCxsb2NhbGVzKS5kZXRlY3RlZExvY2FsZTtjb25zdCBkZXRlY3RlZERvbWFpbj1kZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcyx1bmRlZmluZWQsbG9jYWxlKTtpZihkZXRlY3RlZERvbWFpbil7cmV0dXJuYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHA/Jyc6J3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YmFzZVBhdGh8fCcnfSR7bG9jYWxlPT09ZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZT8nJzpgLyR7bG9jYWxlfWB9JHtwYXRofWA7fXJldHVybiBmYWxzZTt9cmV0dXJuIGZhbHNlO31mdW5jdGlvbiBhZGRMb2NhbGUocGF0aCxsb2NhbGUsZGVmYXVsdExvY2FsZSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Y29uc3QgcGF0aG5hbWU9cGF0aE5vUXVlcnlIYXNoKHBhdGgpO2NvbnN0IHBhdGhMb3dlcj1wYXRobmFtZS50b0xvd2VyQ2FzZSgpO2NvbnN0IGxvY2FsZUxvd2VyPWxvY2FsZSYmbG9jYWxlLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGxvY2FsZSYmbG9jYWxlIT09ZGVmYXVsdExvY2FsZSYmIXBhdGhMb3dlci5zdGFydHNXaXRoKCcvJytsb2NhbGVMb3dlcisnLycpJiZwYXRoTG93ZXIhPT0nLycrbG9jYWxlTG93ZXI/YWRkUGF0aFByZWZpeChwYXRoLCcvJytsb2NhbGUpOnBhdGg7fXJldHVybiBwYXRoO31mdW5jdGlvbiBkZWxMb2NhbGUocGF0aCxsb2NhbGUpe2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2NvbnN0IHBhdGhuYW1lPXBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtjb25zdCBwYXRoTG93ZXI9cGF0aG5hbWUudG9Mb3dlckNhc2UoKTtjb25zdCBsb2NhbGVMb3dlcj1sb2NhbGUmJmxvY2FsZS50b0xvd2VyQ2FzZSgpO3JldHVybiBsb2NhbGUmJihwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycrbG9jYWxlTG93ZXIrJy8nKXx8cGF0aExvd2VyPT09Jy8nK2xvY2FsZUxvd2VyKT8ocGF0aG5hbWUubGVuZ3RoPT09bG9jYWxlLmxlbmd0aCsxPycvJzonJykrcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCsxKTpwYXRoO31yZXR1cm4gcGF0aDt9ZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGgpe2NvbnN0IHF1ZXJ5SW5kZXg9cGF0aC5pbmRleE9mKCc/Jyk7Y29uc3QgaGFzaEluZGV4PXBhdGguaW5kZXhPZignIycpO2lmKHF1ZXJ5SW5kZXg+LTF8fGhhc2hJbmRleD4tMSl7cGF0aD1wYXRoLnN1YnN0cmluZygwLHF1ZXJ5SW5kZXg+LTE/cXVlcnlJbmRleDpoYXNoSW5kZXgpO31yZXR1cm4gcGF0aDt9ZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aCl7cGF0aD1wYXRoTm9RdWVyeUhhc2gocGF0aCk7cmV0dXJuIHBhdGg9PT1iYXNlUGF0aHx8cGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoKycvJyk7fWZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpey8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG5yZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLGJhc2VQYXRoKTt9ZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCl7cGF0aD1wYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCk7aWYoIXBhdGguc3RhcnRzV2l0aCgnLycpKXBhdGg9YC8ke3BhdGh9YDtyZXR1cm4gcGF0aDt9LyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmwpey8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbmlmKHVybC5zdGFydHNXaXRoKCcvJyl8fHVybC5zdGFydHNXaXRoKCcjJyl8fHVybC5zdGFydHNXaXRoKCc/JykpcmV0dXJuIHRydWU7dHJ5ey8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuY29uc3QgbG9jYXRpb25PcmlnaW49KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpO2NvbnN0IHJlc29sdmVkPW5ldyBVUkwodXJsLGxvY2F0aW9uT3JpZ2luKTtyZXR1cm4gcmVzb2x2ZWQub3JpZ2luPT09bG9jYXRpb25PcmlnaW4mJmhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKTt9Y2F0Y2goXyl7cmV0dXJuIGZhbHNlO319ZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhyb3V0ZSxhc1BhdGhuYW1lLHF1ZXJ5KXtsZXQgaW50ZXJwb2xhdGVkUm91dGU9Jyc7Y29uc3QgZHluYW1pY1JlZ2V4PSgwLF9yb3V0ZVJlZ2V4LmdldFJvdXRlUmVnZXgpKHJvdXRlKTtjb25zdCBkeW5hbWljR3JvdXBzPWR5bmFtaWNSZWdleC5ncm91cHM7Y29uc3QgZHluYW1pY01hdGNoZXM9Ly8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuKGFzUGF0aG5hbWUhPT1yb3V0ZT8oMCxfcm91dGVNYXRjaGVyLmdldFJvdXRlTWF0Y2hlcikoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKTonJyl8fC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxucXVlcnk7aW50ZXJwb2xhdGVkUm91dGU9cm91dGU7Y29uc3QgcGFyYW1zPU9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpO2lmKCFwYXJhbXMuZXZlcnkocGFyYW09PntsZXQgdmFsdWU9ZHluYW1pY01hdGNoZXNbcGFyYW1dfHwnJztjb25zdHtyZXBlYXQsb3B0aW9uYWx9PWR5bmFtaWNHcm91cHNbcGFyYW1dOy8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxubGV0IHJlcGxhY2VkPWBbJHtyZXBlYXQ/Jy4uLic6Jyd9JHtwYXJhbX1dYDtpZihvcHRpb25hbCl7cmVwbGFjZWQ9YCR7IXZhbHVlPycvJzonJ31bJHtyZXBsYWNlZH1dYDt9aWYocmVwZWF0JiYhQXJyYXkuaXNBcnJheSh2YWx1ZSkpdmFsdWU9W3ZhbHVlXTtyZXR1cm4ob3B0aW9uYWx8fHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSYmKC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuaW50ZXJwb2xhdGVkUm91dGU9aW50ZXJwb2xhdGVkUm91dGUucmVwbGFjZShyZXBsYWNlZCxyZXBlYXQ/dmFsdWUubWFwKC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3Rcbi8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbi8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4vLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbnNlZ21lbnQ9PmVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KSkuam9pbignLycpOmVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpfHwnLycpO30pKXtpbnRlcnBvbGF0ZWRSb3V0ZT0nJzsvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbi8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG59cmV0dXJue3BhcmFtcyxyZXN1bHQ6aW50ZXJwb2xhdGVkUm91dGV9O31mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnkscGFyYW1zKXtjb25zdCBmaWx0ZXJlZFF1ZXJ5PXt9O09iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKGtleT0+e2lmKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSl7ZmlsdGVyZWRRdWVyeVtrZXldPXF1ZXJ5W2tleV07fX0pO3JldHVybiBmaWx0ZXJlZFF1ZXJ5O30vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovZnVuY3Rpb24gcmVzb2x2ZUhyZWYocm91dGVyLGhyZWYscmVzb2x2ZUFzKXsvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xubGV0IGJhc2U7Y29uc3QgdXJsQXNTdHJpbmc9dHlwZW9mIGhyZWY9PT0nc3RyaW5nJz9ocmVmOigwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoaHJlZik7dHJ5e2Jhc2U9bmV3IFVSTCh1cmxBc1N0cmluZy5zdGFydHNXaXRoKCcjJyk/cm91dGVyLmFzUGF0aDpyb3V0ZXIucGF0aG5hbWUsJ2h0dHA6Ly9uJyk7fWNhdGNoKF8pey8vIGZhbGxiYWNrIHRvIC8gZm9yIGludmFsaWQgYXNQYXRoIHZhbHVlcyBlLmcuIC8vXG5iYXNlPW5ldyBVUkwoJy8nLCdodHRwOi8vbicpO30vLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuaWYoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKXtyZXR1cm4gcmVzb2x2ZUFzP1t1cmxBc1N0cmluZ106dXJsQXNTdHJpbmc7fXRyeXtjb25zdCBmaW5hbFVybD1uZXcgVVJMKHVybEFzU3RyaW5nLGJhc2UpO2ZpbmFsVXJsLnBhdGhuYW1lPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKShmaW5hbFVybC5wYXRobmFtZSk7bGV0IGludGVycG9sYXRlZEFzPScnO2lmKCgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKGZpbmFsVXJsLnBhdGhuYW1lKSYmZmluYWxVcmwuc2VhcmNoUGFyYW1zJiZyZXNvbHZlQXMpe2NvbnN0IHF1ZXJ5PSgwLF9xdWVyeXN0cmluZy5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KShmaW5hbFVybC5zZWFyY2hQYXJhbXMpO2NvbnN0e3Jlc3VsdCxwYXJhbXN9PWludGVycG9sYXRlQXMoZmluYWxVcmwucGF0aG5hbWUsZmluYWxVcmwucGF0aG5hbWUscXVlcnkpO2lmKHJlc3VsdCl7aW50ZXJwb2xhdGVkQXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh7cGF0aG5hbWU6cmVzdWx0LGhhc2g6ZmluYWxVcmwuaGFzaCxxdWVyeTpvbWl0UGFybXNGcm9tUXVlcnkocXVlcnkscGFyYW1zKX0pO319Ly8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbmNvbnN0IHJlc29sdmVkSHJlZj1maW5hbFVybC5vcmlnaW49PT1iYXNlLm9yaWdpbj9maW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpOmZpbmFsVXJsLmhyZWY7cmV0dXJuIHJlc29sdmVBcz9bcmVzb2x2ZWRIcmVmLGludGVycG9sYXRlZEFzfHxyZXNvbHZlZEhyZWZdOnJlc29sdmVkSHJlZjt9Y2F0Y2goXyl7cmV0dXJuIHJlc29sdmVBcz9bdXJsQXNTdHJpbmddOnVybEFzU3RyaW5nO319ZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsKXtjb25zdCBvcmlnaW49KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpO3JldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pP3VybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCk6dXJsO31mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyLHVybCxhcyl7Ly8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4vLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxubGV0W3Jlc29sdmVkSHJlZixyZXNvbHZlZEFzXT1yZXNvbHZlSHJlZihyb3V0ZXIsdXJsLHRydWUpO2NvbnN0IG9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7Y29uc3QgaHJlZkhhZE9yaWdpbj1yZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pO2NvbnN0IGFzSGFkT3JpZ2luPXJlc29sdmVkQXMmJnJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pO3Jlc29sdmVkSHJlZj1zdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpO3Jlc29sdmVkQXM9cmVzb2x2ZWRBcz9zdHJpcE9yaWdpbihyZXNvbHZlZEFzKTpyZXNvbHZlZEFzO2NvbnN0IHByZXBhcmVkVXJsPWhyZWZIYWRPcmlnaW4/cmVzb2x2ZWRIcmVmOmFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZik7Y29uc3QgcHJlcGFyZWRBcz1hcz9zdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIsYXMpKTpyZXNvbHZlZEFzfHxyZXNvbHZlZEhyZWY7cmV0dXJue3VybDpwcmVwYXJlZFVybCxhczphc0hhZE9yaWdpbj9wcmVwYXJlZEFzOmFkZEJhc2VQYXRoKHByZXBhcmVkQXMpfTt9ZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSxwYWdlcyl7Y29uc3QgY2xlYW5QYXRobmFtZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkoKDAsX2Rlbm9ybWFsaXplUGFnZVBhdGguZGVub3JtYWxpemVQYWdlUGF0aCkocGF0aG5hbWUpKTtpZihjbGVhblBhdGhuYW1lPT09Jy80MDQnfHxjbGVhblBhdGhuYW1lPT09Jy9fZXJyb3InKXtyZXR1cm4gcGF0aG5hbWU7fS8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbmlmKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lKSl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxucGFnZXMuc29tZShwYWdlPT57aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkocGFnZSkmJigwLF9yb3V0ZVJlZ2V4LmdldFJvdXRlUmVnZXgpKHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSkpe3BhdGhuYW1lPXBhZ2U7cmV0dXJuIHRydWU7fX0pO31yZXR1cm4oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkocGF0aG5hbWUpO31jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbj1wcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OJiZ0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcmJidzY3JvbGxSZXN0b3JhdGlvbidpbiB3aW5kb3cuaGlzdG9yeSYmISFmdW5jdGlvbigpe3RyeXtsZXQgdj0nX19uZXh0JzsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG5yZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LHYpLHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksdHJ1ZTt9Y2F0Y2gobil7fX0oKTtjb25zdCBTU0dfREFUQV9OT1RfRk9VTkQ9U3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKTtmdW5jdGlvbiBmZXRjaFJldHJ5KHVybCxhdHRlbXB0cyl7cmV0dXJuIGZldGNoKHVybCx7Ly8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4vLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbi8vXG4vLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4vLyA+IG9wdGlvbi5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbi8vXG4vLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG5jcmVkZW50aWFsczonc2FtZS1vcmlnaW4nfSkudGhlbihyZXM9PntpZighcmVzLm9rKXtpZihhdHRlbXB0cz4xJiZyZXMuc3RhdHVzPj01MDApe3JldHVybiBmZXRjaFJldHJ5KHVybCxhdHRlbXB0cy0xKTt9aWYocmVzLnN0YXR1cz09PTQwNCl7cmV0dXJuIHJlcy5qc29uKCkudGhlbihkYXRhPT57aWYoZGF0YS5ub3RGb3VuZCl7cmV0dXJue25vdEZvdW5kOlNTR19EQVRBX05PVF9GT1VORH07fXRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7fSk7fXRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7fXJldHVybiByZXMuanNvbigpO30pO31mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLGlzU2VydmVyUmVuZGVyKXtyZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZixpc1NlcnZlclJlbmRlcj8zOjEpLmNhdGNoKGVycj0+ey8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbi8vIGxvb3AuXG5pZighaXNTZXJ2ZXJSZW5kZXIpeygwLF9yb3V0ZUxvYWRlci5tYXJrQXNzZXRFcnJvcikoZXJyKTt9dGhyb3cgZXJyO30pO31jbGFzcyBSb3V0ZXJ7LyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4vLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuY29uc3RydWN0b3IoX3BhdGhuYW1lLF9xdWVyeSxfYXMse2luaXRpYWxQcm9wcyxwYWdlTG9hZGVyLEFwcCx3cmFwQXBwLENvbXBvbmVudCxlcnIsc3Vic2NyaXB0aW9uLGlzRmFsbGJhY2ssbG9jYWxlLGxvY2FsZXMsZGVmYXVsdExvY2FsZSxkb21haW5Mb2NhbGVzLGlzUHJldmlld30pe3RoaXMucm91dGU9dm9pZCAwO3RoaXMucGF0aG5hbWU9dm9pZCAwO3RoaXMucXVlcnk9dm9pZCAwO3RoaXMuYXNQYXRoPXZvaWQgMDt0aGlzLmJhc2VQYXRoPXZvaWQgMDt0aGlzLmNvbXBvbmVudHM9dm9pZCAwO3RoaXMuc2RjPXt9O3RoaXMuc2RyPXt9O3RoaXMuc3ViPXZvaWQgMDt0aGlzLmNsYz12b2lkIDA7dGhpcy5wYWdlTG9hZGVyPXZvaWQgMDt0aGlzLl9icHM9dm9pZCAwO3RoaXMuZXZlbnRzPXZvaWQgMDt0aGlzLl93cmFwQXBwPXZvaWQgMDt0aGlzLmlzU3NyPXZvaWQgMDt0aGlzLmlzRmFsbGJhY2s9dm9pZCAwO3RoaXMuX2luRmxpZ2h0Um91dGU9dm9pZCAwO3RoaXMuX3NoYWxsb3c9dm9pZCAwO3RoaXMubG9jYWxlPXZvaWQgMDt0aGlzLmxvY2FsZXM9dm9pZCAwO3RoaXMuZGVmYXVsdExvY2FsZT12b2lkIDA7dGhpcy5kb21haW5Mb2NhbGVzPXZvaWQgMDt0aGlzLmlzUmVhZHk9dm9pZCAwO3RoaXMuaXNQcmV2aWV3PXZvaWQgMDt0aGlzLmlzTG9jYWxlRG9tYWluPXZvaWQgMDt0aGlzLl9pZHg9MDt0aGlzLm9uUG9wU3RhdGU9ZT0+e2NvbnN0IHN0YXRlPWUuc3RhdGU7aWYoIXN0YXRlKXsvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbi8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuLy9cbi8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4vLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4vLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbi8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbi8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuY29uc3R7cGF0aG5hbWUscXVlcnl9PXRoaXM7dGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywoMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTphZGRCYXNlUGF0aChwYXRobmFtZSkscXVlcnl9KSwoMCxfdXRpbHMuZ2V0VVJMKSgpKTtyZXR1cm47fWlmKCFzdGF0ZS5fX04pe3JldHVybjt9bGV0IGZvcmNlZFNjcm9sbDtjb25zdHt1cmwsYXMsb3B0aW9ucyxpZHh9PXN0YXRlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pe2lmKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKXtpZih0aGlzLl9pZHghPT1pZHgpey8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxudHJ5e3Nlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyt0aGlzLl9pZHgsSlNPTi5zdHJpbmdpZnkoe3g6c2VsZi5wYWdlWE9mZnNldCx5OnNlbGYucGFnZVlPZmZzZXR9KSk7fWNhdGNoKF91bnVzZWQpe30vLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG50cnl7Y29uc3Qgdj1zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycraWR4KTtmb3JjZWRTY3JvbGw9SlNPTi5wYXJzZSh2KTt9Y2F0Y2goX3VudXNlZDIpe2ZvcmNlZFNjcm9sbD17eDowLHk6MH07fX19fXRoaXMuX2lkeD1pZHg7Y29uc3R7cGF0aG5hbWV9PSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHVybCk7Ly8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4vLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbmlmKHRoaXMuaXNTc3ImJmFzPT09dGhpcy5hc1BhdGgmJnBhdGhuYW1lPT09dGhpcy5wYXRobmFtZSl7cmV0dXJuO30vLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4vLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuaWYodGhpcy5fYnBzJiYhdGhpcy5fYnBzKHN0YXRlKSl7cmV0dXJuO310aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJyx1cmwsYXMsT2JqZWN0LmFzc2lnbih7fSxvcHRpb25zLHtzaGFsbG93Om9wdGlvbnMuc2hhbGxvdyYmdGhpcy5fc2hhbGxvdyxsb2NhbGU6b3B0aW9ucy5sb2NhbGV8fHRoaXMuZGVmYXVsdExvY2FsZX0pLGZvcmNlZFNjcm9sbCk7fTsvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbnRoaXMucm91dGU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKF9wYXRobmFtZSk7Ly8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG50aGlzLmNvbXBvbmVudHM9e307Ly8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbi8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbmlmKF9wYXRobmFtZSE9PScvX2Vycm9yJyl7dGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdPXtDb21wb25lbnQsaW5pdGlhbDp0cnVlLHByb3BzOmluaXRpYWxQcm9wcyxlcnIsX19OX1NTRzppbml0aWFsUHJvcHMmJmluaXRpYWxQcm9wcy5fX05fU1NHLF9fTl9TU1A6aW5pdGlhbFByb3BzJiZpbml0aWFsUHJvcHMuX19OX1NTUH07fXRoaXMuY29tcG9uZW50c1snL19hcHAnXT17Q29tcG9uZW50OkFwcCxzdHlsZVNoZWV0czpbLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL119Oy8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4vLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxudGhpcy5ldmVudHM9Um91dGVyLmV2ZW50czt0aGlzLnBhZ2VMb2FkZXI9cGFnZUxvYWRlcjt0aGlzLnBhdGhuYW1lPV9wYXRobmFtZTt0aGlzLnF1ZXJ5PV9xdWVyeTsvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbmNvbnN0IGF1dG9FeHBvcnREeW5hbWljPSgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKF9wYXRobmFtZSkmJnNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0O3RoaXMuYXNQYXRoPWF1dG9FeHBvcnREeW5hbWljP19wYXRobmFtZTpfYXM7dGhpcy5iYXNlUGF0aD1iYXNlUGF0aDt0aGlzLnN1Yj1zdWJzY3JpcHRpb247dGhpcy5jbGM9bnVsbDt0aGlzLl93cmFwQXBwPXdyYXBBcHA7Ly8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbnRoaXMuaXNTc3I9dHJ1ZTt0aGlzLmlzRmFsbGJhY2s9aXNGYWxsYmFjazt0aGlzLmlzUmVhZHk9ISEoc2VsZi5fX05FWFRfREFUQV9fLmdzc3B8fHNlbGYuX19ORVhUX0RBVEFfXy5naXB8fCFhdXRvRXhwb3J0RHluYW1pYyYmIXNlbGYubG9jYXRpb24uc2VhcmNoJiYhcHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyk7dGhpcy5pc1ByZXZpZXc9ISFpc1ByZXZpZXc7dGhpcy5pc0xvY2FsZURvbWFpbj1mYWxzZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXt0aGlzLmxvY2FsZT1sb2NhbGU7dGhpcy5sb2NhbGVzPWxvY2FsZXM7dGhpcy5kZWZhdWx0TG9jYWxlPWRlZmF1bHRMb2NhbGU7dGhpcy5kb21haW5Mb2NhbGVzPWRvbWFpbkxvY2FsZXM7dGhpcy5pc0xvY2FsZURvbWFpbj0hIWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLHNlbGYubG9jYXRpb24uaG9zdG5hbWUpO31pZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpey8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4vLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuaWYoX2FzLnN1YnN0cigwLDIpIT09Jy8vJyl7Ly8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbi8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuY29uc3Qgb3B0aW9ucz17bG9jYWxlfTtvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZj1fYXMhPT1fcGF0aG5hbWU7dGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywoMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTphZGRCYXNlUGF0aChfcGF0aG5hbWUpLHF1ZXJ5Ol9xdWVyeX0pLCgwLF91dGlscy5nZXRVUkwpKCksb3B0aW9ucyk7fXdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsdGhpcy5vblBvcFN0YXRlKTsvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG5pZihwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKXtpZihtYW51YWxTY3JvbGxSZXN0b3JhdGlvbil7d2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb249J21hbnVhbCc7fX19fXJlbG9hZCgpe3dpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTt9LyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9iYWNrKCl7d2luZG93Lmhpc3RvcnkuYmFjaygpO30vKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovcHVzaCh1cmwsYXMsb3B0aW9ucz17fSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTil7Ly8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4vLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuaWYobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pe3RyeXsvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyt0aGlzLl9pZHgsSlNPTi5zdHJpbmdpZnkoe3g6c2VsZi5wYWdlWE9mZnNldCx5OnNlbGYucGFnZVlPZmZzZXR9KSk7fWNhdGNoKF91bnVzZWQzKXt9fX07KHt1cmwsYXN9PXByZXBhcmVVcmxBcyh0aGlzLHVybCxhcykpO3JldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJyx1cmwsYXMsb3B0aW9ucyk7fS8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9yZXBsYWNlKHVybCxhcyxvcHRpb25zPXt9KXs7KHt1cmwsYXN9PXByZXBhcmVVcmxBcyh0aGlzLHVybCxhcykpO3JldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJyx1cmwsYXMsb3B0aW9ucyk7fWFzeW5jIGNoYW5nZShtZXRob2QsdXJsLGFzLG9wdGlvbnMsZm9yY2VkU2Nyb2xsKXtpZighaXNMb2NhbFVSTCh1cmwpKXt3aW5kb3cubG9jYXRpb24uaHJlZj11cmw7cmV0dXJuIGZhbHNlO31jb25zdCBzaG91bGRSZXNvbHZlSHJlZj11cmw9PT1hc3x8b3B0aW9ucy5faHx8b3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY7Ly8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4vLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbmlmKG9wdGlvbnMuX2gpe3RoaXMuaXNSZWFkeT10cnVlO31sZXQgbG9jYWxlQ2hhbmdlPW9wdGlvbnMubG9jYWxlIT09dGhpcy5sb2NhbGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7dGhpcy5sb2NhbGU9b3B0aW9ucy5sb2NhbGU9PT1mYWxzZT90aGlzLmRlZmF1bHRMb2NhbGU6b3B0aW9ucy5sb2NhbGV8fHRoaXMubG9jYWxlO2lmKHR5cGVvZiBvcHRpb25zLmxvY2FsZT09PSd1bmRlZmluZWQnKXtvcHRpb25zLmxvY2FsZT10aGlzLmxvY2FsZTt9Y29uc3QgcGFyc2VkQXM9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoaGFzQmFzZVBhdGgoYXMpP2RlbEJhc2VQYXRoKGFzKTphcyk7Y29uc3QgbG9jYWxlUGF0aFJlc3VsdD0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZXMpO2lmKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpe3RoaXMubG9jYWxlPWxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGU7cGFyc2VkQXMucGF0aG5hbWU9YWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpO2FzPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkQXMpO3VybD1hZGRCYXNlUGF0aCgoMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShoYXNCYXNlUGF0aCh1cmwpP2RlbEJhc2VQYXRoKHVybCk6dXJsLHRoaXMubG9jYWxlcykucGF0aG5hbWUpO31sZXQgZGlkTmF2aWdhdGU9ZmFsc2U7Ly8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4vLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe3ZhciBfdGhpcyRsb2NhbGVzOy8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbmlmKCEoKF90aGlzJGxvY2FsZXM9dGhpcy5sb2NhbGVzKSE9bnVsbCYmX3RoaXMkbG9jYWxlcy5pbmNsdWRlcyh0aGlzLmxvY2FsZSkpKXtwYXJzZWRBcy5wYXRobmFtZT1hZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsdGhpcy5sb2NhbGUpO3dpbmRvdy5sb2NhdGlvbi5ocmVmPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkQXMpOy8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4vLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuZGlkTmF2aWdhdGU9dHJ1ZTt9fWNvbnN0IGRldGVjdGVkRG9tYWluPWRldGVjdERvbWFpbkxvY2FsZSh0aGlzLmRvbWFpbkxvY2FsZXMsdW5kZWZpbmVkLHRoaXMubG9jYWxlKTsvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbi8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuaWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Ly8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbi8vIGNvcnJlY3QgZG9tYWluXG5pZighZGlkTmF2aWdhdGUmJmRldGVjdGVkRG9tYWluJiZ0aGlzLmlzTG9jYWxlRG9tYWluJiZzZWxmLmxvY2F0aW9uLmhvc3RuYW1lIT09ZGV0ZWN0ZWREb21haW4uZG9tYWluKXtjb25zdCBhc05vQmFzZVBhdGg9ZGVsQmFzZVBhdGgoYXMpO3dpbmRvdy5sb2NhdGlvbi5ocmVmPWBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwPycnOidzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2FkZEJhc2VQYXRoKGAke3RoaXMubG9jYWxlPT09ZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZT8nJzpgLyR7dGhpcy5sb2NhbGV9YH0ke2FzTm9CYXNlUGF0aD09PScvJz8nJzphc05vQmFzZVBhdGh9YHx8Jy8nKX1gOy8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4vLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuZGlkTmF2aWdhdGU9dHJ1ZTt9fWlmKGRpZE5hdmlnYXRlKXtyZXR1cm4gbmV3IFByb21pc2UoKCk9Pnt9KTt9fWlmKCFvcHRpb25zLl9oKXt0aGlzLmlzU3NyPWZhbHNlO30vLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG5pZihfdXRpbHMuU1Qpe3BlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7fWNvbnN0e3NoYWxsb3c9ZmFsc2V9PW9wdGlvbnM7Y29uc3Qgcm91dGVQcm9wcz17c2hhbGxvd307aWYodGhpcy5faW5GbGlnaHRSb3V0ZSl7dGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSxyb3V0ZVByb3BzKTt9YXM9YWRkQmFzZVBhdGgoYWRkTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKT9kZWxCYXNlUGF0aChhcyk6YXMsb3B0aW9ucy5sb2NhbGUsdGhpcy5kZWZhdWx0TG9jYWxlKSk7Y29uc3QgY2xlYW5lZEFzPWRlbExvY2FsZShoYXNCYXNlUGF0aChhcyk/ZGVsQmFzZVBhdGgoYXMpOmFzLHRoaXMubG9jYWxlKTt0aGlzLl9pbkZsaWdodFJvdXRlPWFzOy8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4vLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG4vLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4vLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4vLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbmlmKCFvcHRpb25zLl9oJiZ0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKXt0aGlzLmFzUGF0aD1jbGVhbmVkQXM7Um91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLGFzLHJvdXRlUHJvcHMpOy8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG50aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyk7dGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKTt0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sbnVsbCk7Um91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLGFzLHJvdXRlUHJvcHMpO3JldHVybiB0cnVlO31sZXQgcGFyc2VkPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHVybCk7bGV0e3BhdGhuYW1lLHF1ZXJ5fT1wYXJzZWQ7Ly8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4vLyB3aGVuIHJld3JpdHRlbiB0b1xubGV0IHBhZ2VzLHJld3JpdGVzO3RyeXtwYWdlcz1hd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTsoe19fcmV3cml0ZXM6cmV3cml0ZXN9PWF3YWl0KDAsX3JvdXRlTG9hZGVyLmdldENsaWVudEJ1aWxkTWFuaWZlc3QpKCkpO31jYXRjaChlcnIpey8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxud2luZG93LmxvY2F0aW9uLmhyZWY9YXM7cmV0dXJuIGZhbHNlO30vLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4vLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4vLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuaWYoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSYmIWxvY2FsZUNoYW5nZSl7bWV0aG9kPSdyZXBsYWNlU3RhdGUnO30vLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxubGV0IHJlc29sdmVkQXM9YXM7Ly8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbnBhdGhuYW1lPXBhdGhuYW1lPygwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShkZWxCYXNlUGF0aChwYXRobmFtZSkpOnBhdGhuYW1lO2lmKHNob3VsZFJlc29sdmVIcmVmJiZwYXRobmFtZSE9PScvX2Vycm9yJyl7O29wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmPXRydWU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyYmYXMuc3RhcnRzV2l0aCgnLycpKXtjb25zdCByZXdyaXRlc1Jlc3VsdD0oMCxfcmVzb2x2ZVJld3JpdGVzLmRlZmF1bHQpKGFkZEJhc2VQYXRoKGFkZExvY2FsZShjbGVhbmVkQXMsdGhpcy5sb2NhbGUpKSxwYWdlcyxyZXdyaXRlcyxxdWVyeSxwPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAscGFnZXMpLHRoaXMubG9jYWxlcyk7cmVzb2x2ZWRBcz1yZXdyaXRlc1Jlc3VsdC5hc1BhdGg7aWYocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UmJnJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZil7Ly8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbnBhdGhuYW1lPXJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtwYXJzZWQucGF0aG5hbWU9YWRkQmFzZVBhdGgocGF0aG5hbWUpO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1lbHNle3BhcnNlZC5wYXRobmFtZT1yZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLHBhZ2VzKTtpZihwYXJzZWQucGF0aG5hbWUhPT1wYXRobmFtZSl7cGF0aG5hbWU9cGFyc2VkLnBhdGhuYW1lO3BhcnNlZC5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXRobmFtZSk7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fX1jb25zdCByb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkocGF0aG5hbWUpO2lmKCFpc0xvY2FsVVJMKGFzKSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3Rocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2ArYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYCk7fXdpbmRvdy5sb2NhdGlvbi5ocmVmPWFzO3JldHVybiBmYWxzZTt9cmVzb2x2ZWRBcz1kZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksdGhpcy5sb2NhbGUpO2lmKCgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKHJvdXRlKSl7Y29uc3QgcGFyc2VkQXM9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkocmVzb2x2ZWRBcyk7Y29uc3QgYXNQYXRobmFtZT1wYXJzZWRBcy5wYXRobmFtZTtjb25zdCByb3V0ZVJlZ2V4PSgwLF9yb3V0ZVJlZ2V4LmdldFJvdXRlUmVnZXgpKHJvdXRlKTtjb25zdCByb3V0ZU1hdGNoPSgwLF9yb3V0ZU1hdGNoZXIuZ2V0Um91dGVNYXRjaGVyKShyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKTtjb25zdCBzaG91bGRJbnRlcnBvbGF0ZT1yb3V0ZT09PWFzUGF0aG5hbWU7Y29uc3QgaW50ZXJwb2xhdGVkQXM9c2hvdWxkSW50ZXJwb2xhdGU/aW50ZXJwb2xhdGVBcyhyb3V0ZSxhc1BhdGhuYW1lLHF1ZXJ5KTp7fTtpZighcm91dGVNYXRjaHx8c2hvdWxkSW50ZXJwb2xhdGUmJiFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpe2NvbnN0IG1pc3NpbmdQYXJhbXM9T2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihwYXJhbT0+IXF1ZXJ5W3BhcmFtXSk7aWYobWlzc2luZ1BhcmFtcy5sZW5ndGg+MCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnNvbGUud2FybihgJHtzaG91bGRJbnRlcnBvbGF0ZT9gSW50ZXJwb2xhdGluZyBocmVmYDpgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgK2B0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO310aHJvdyBuZXcgRXJyb3IoKHNob3VsZEludGVycG9sYXRlP2BUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGA6YFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkrYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtzaG91bGRJbnRlcnBvbGF0ZT8naHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCc6J2luY29tcGF0aWJsZS1ocmVmLWFzJ31gKTt9fWVsc2UgaWYoc2hvdWxkSW50ZXJwb2xhdGUpe2FzPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoT2JqZWN0LmFzc2lnbih7fSxwYXJzZWRBcyx7cGF0aG5hbWU6aW50ZXJwb2xhdGVkQXMucmVzdWx0LHF1ZXJ5Om9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxpbnRlcnBvbGF0ZWRBcy5wYXJhbXMpfSkpO31lbHNley8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG5PYmplY3QuYXNzaWduKHF1ZXJ5LHJvdXRlTWF0Y2gpO319Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0Jyxhcyxyb3V0ZVByb3BzKTt0cnl7dmFyIF9zZWxmJF9fTkVYVF9EQVRBX18kcCxfc2VsZiRfX05FWFRfREFUQV9fJHAyLF9vcHRpb25zJHNjcm9sbDtsZXQgcm91dGVJbmZvPWF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLHJlc29sdmVkQXMscm91dGVQcm9wcyk7bGV0e2Vycm9yLHByb3BzLF9fTl9TU0csX19OX1NTUH09cm91dGVJbmZvOy8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuaWYoKF9fTl9TU0d8fF9fTl9TU1ApJiZwcm9wcyl7aWYocHJvcHMucGFnZVByb3BzJiZwcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUKXtjb25zdCBkZXN0aW5hdGlvbj1wcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUOy8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4vLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4vLyBpdCdzIG5vdFxuaWYoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKXtjb25zdCBwYXJzZWRIcmVmPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKGRlc3RpbmF0aW9uKTtwYXJzZWRIcmVmLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkSHJlZi5wYXRobmFtZSxwYWdlcyk7aWYocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpe2NvbnN0e3VybDpuZXdVcmwsYXM6bmV3QXN9PXByZXBhcmVVcmxBcyh0aGlzLGRlc3RpbmF0aW9uLGRlc3RpbmF0aW9uKTtyZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLG5ld1VybCxuZXdBcyxvcHRpb25zKTt9fXdpbmRvdy5sb2NhdGlvbi5ocmVmPWRlc3RpbmF0aW9uO3JldHVybiBuZXcgUHJvbWlzZSgoKT0+e30pO310aGlzLmlzUHJldmlldz0hIXByb3BzLl9fTl9QUkVWSUVXOy8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbmlmKHByb3BzLm5vdEZvdW5kPT09U1NHX0RBVEFfTk9UX0ZPVU5EKXtsZXQgbm90Rm91bmRSb3V0ZTt0cnl7YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpO25vdEZvdW5kUm91dGU9Jy80MDQnO31jYXRjaChfKXtub3RGb3VuZFJvdXRlPScvX2Vycm9yJzt9cm91dGVJbmZvPWF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKG5vdEZvdW5kUm91dGUsbm90Rm91bmRSb3V0ZSxxdWVyeSxhcyxyZXNvbHZlZEFzLHtzaGFsbG93OmZhbHNlfSk7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLGFzLHJvdXRlUHJvcHMpO3RoaXMuY2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zKTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3QgYXBwQ29tcD10aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50O3dpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQ9YXBwQ29tcC5nZXRJbml0aWFsUHJvcHM9PT1hcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMmJiFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wczt9aWYob3B0aW9ucy5faCYmcGF0aG5hbWU9PT0nL19lcnJvcicmJigoX3NlbGYkX19ORVhUX0RBVEFfXyRwPXNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcyk9PW51bGw/dm9pZCAwOihfc2VsZiRfX05FWFRfREFUQV9fJHAyPV9zZWxmJF9fTkVYVF9EQVRBX18kcC5wYWdlUHJvcHMpPT1udWxsP3ZvaWQgMDpfc2VsZiRfX05FWFRfREFUQV9fJHAyLnN0YXR1c0NvZGUpPT09NTAwJiZwcm9wcyE9bnVsbCYmcHJvcHMucGFnZVByb3BzKXsvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2Vcbi8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbnByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlPTUwMDt9Ly8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZT1vcHRpb25zLnNoYWxsb3cmJnRoaXMucm91dGU9PT1yb3V0ZTtjb25zdCBzaG91bGRTY3JvbGw9KF9vcHRpb25zJHNjcm9sbD1vcHRpb25zLnNjcm9sbCkhPW51bGw/X29wdGlvbnMkc2Nyb2xsOiFpc1ZhbGlkU2hhbGxvd1JvdXRlO2NvbnN0IHJlc2V0U2Nyb2xsPXNob3VsZFNjcm9sbD97eDowLHk6MH06bnVsbDthd2FpdCB0aGlzLnNldChyb3V0ZSxwYXRobmFtZSxxdWVyeSxjbGVhbmVkQXMscm91dGVJbmZvLGZvcmNlZFNjcm9sbCE9bnVsbD9mb3JjZWRTY3JvbGw6cmVzZXRTY3JvbGwpLmNhdGNoKGU9PntpZihlLmNhbmNlbGxlZCllcnJvcj1lcnJvcnx8ZTtlbHNlIHRocm93IGU7fSk7aWYoZXJyb3Ipe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsZXJyb3IsY2xlYW5lZEFzLHJvdXRlUHJvcHMpO3Rocm93IGVycm9yO31pZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtpZih0aGlzLmxvY2FsZSl7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lmxhbmc9dGhpcy5sb2NhbGU7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLGFzLHJvdXRlUHJvcHMpO3JldHVybiB0cnVlO31jYXRjaChlcnIpe2lmKGVyci5jYW5jZWxsZWQpe3JldHVybiBmYWxzZTt9dGhyb3cgZXJyO319Y2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zPXt9KXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYodHlwZW9mIHdpbmRvdy5oaXN0b3J5PT09J3VuZGVmaW5lZCcpe2NvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYCk7cmV0dXJuO31pZih0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXT09PSd1bmRlZmluZWQnKXtjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO3JldHVybjt9fWlmKG1ldGhvZCE9PSdwdXNoU3RhdGUnfHwoMCxfdXRpbHMuZ2V0VVJMKSgpIT09YXMpe3RoaXMuX3NoYWxsb3c9b3B0aW9ucy5zaGFsbG93O3dpbmRvdy5oaXN0b3J5W21ldGhvZF0oe3VybCxhcyxvcHRpb25zLF9fTjp0cnVlLGlkeDp0aGlzLl9pZHg9bWV0aG9kIT09J3B1c2hTdGF0ZSc/dGhpcy5faWR4OnRoaXMuX2lkeCsxfSwvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbi8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuJycsYXMpO319YXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMsbG9hZEVycm9yRmFpbCl7aWYoZXJyLmNhbmNlbGxlZCl7Ly8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbnRocm93IGVycjt9aWYoKDAsX3JvdXRlTG9hZGVyLmlzQXNzZXRFcnJvcikoZXJyKXx8bG9hZEVycm9yRmFpbCl7Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJyxlcnIsYXMscm91dGVQcm9wcyk7Ly8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbi8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4vLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbi8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4vLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbndpbmRvdy5sb2NhdGlvbi5ocmVmPWFzOy8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbnRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKTt9dHJ5e2xldCBDb21wb25lbnQ7bGV0IHN0eWxlU2hlZXRzO2xldCBwcm9wcztpZih0eXBlb2YgQ29tcG9uZW50PT09J3VuZGVmaW5lZCd8fHR5cGVvZiBzdHlsZVNoZWV0cz09PSd1bmRlZmluZWQnKXs7KHtwYWdlOkNvbXBvbmVudCxzdHlsZVNoZWV0c309YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpKTt9Y29uc3Qgcm91dGVJbmZvPXtwcm9wcyxDb21wb25lbnQsc3R5bGVTaGVldHMsZXJyLGVycm9yOmVycn07aWYoIXJvdXRlSW5mby5wcm9wcyl7dHJ5e3JvdXRlSW5mby5wcm9wcz1hd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQse2VycixwYXRobmFtZSxxdWVyeX0pO31jYXRjaChnaXBFcnIpe2NvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsZ2lwRXJyKTtyb3V0ZUluZm8ucHJvcHM9e307fX1yZXR1cm4gcm91dGVJbmZvO31jYXRjaChyb3V0ZUluZm9FcnIpe3JldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VycixwYXRobmFtZSxxdWVyeSxhcyxyb3V0ZVByb3BzLHRydWUpO319YXN5bmMgZ2V0Um91dGVJbmZvKHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLHJlc29sdmVkQXMscm91dGVQcm9wcyl7dHJ5e2NvbnN0IGV4aXN0aW5nUm91dGVJbmZvPXRoaXMuY29tcG9uZW50c1tyb3V0ZV07aWYocm91dGVQcm9wcy5zaGFsbG93JiZleGlzdGluZ1JvdXRlSW5mbyYmdGhpcy5yb3V0ZT09PXJvdXRlKXtyZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm87fWNvbnN0IGNhY2hlZFJvdXRlSW5mbz1leGlzdGluZ1JvdXRlSW5mbyYmJ2luaXRpYWwnaW4gZXhpc3RpbmdSb3V0ZUluZm8/dW5kZWZpbmVkOmV4aXN0aW5nUm91dGVJbmZvO2NvbnN0IHJvdXRlSW5mbz1jYWNoZWRSb3V0ZUluZm8/Y2FjaGVkUm91dGVJbmZvOmF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4ocmVzPT4oe0NvbXBvbmVudDpyZXMucGFnZSxzdHlsZVNoZWV0czpyZXMuc3R5bGVTaGVldHMsX19OX1NTRzpyZXMubW9kLl9fTl9TU0csX19OX1NTUDpyZXMubW9kLl9fTl9TU1B9KSk7Y29uc3R7Q29tcG9uZW50LF9fTl9TU0csX19OX1NTUH09cm91dGVJbmZvO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdHtpc1ZhbGlkRWxlbWVudFR5cGV9PXJlcXVpcmUoJ3JlYWN0LWlzJyk7aWYoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKXt0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7fX1sZXQgZGF0YUhyZWY7aWYoX19OX1NTR3x8X19OX1NTUCl7ZGF0YUhyZWY9dGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lLHF1ZXJ5fSkscmVzb2x2ZWRBcyxfX05fU1NHLHRoaXMubG9jYWxlKTt9Y29uc3QgcHJvcHM9YXdhaXQgdGhpcy5fZ2V0RGF0YSgoKT0+X19OX1NTRz90aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKTpfX05fU1NQP3RoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpOnRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxue3BhdGhuYW1lLHF1ZXJ5LGFzUGF0aDphcyxsb2NhbGU6dGhpcy5sb2NhbGUsbG9jYWxlczp0aGlzLmxvY2FsZXMsZGVmYXVsdExvY2FsZTp0aGlzLmRlZmF1bHRMb2NhbGV9KSk7cm91dGVJbmZvLnByb3BzPXByb3BzO3RoaXMuY29tcG9uZW50c1tyb3V0ZV09cm91dGVJbmZvO3JldHVybiByb3V0ZUluZm87fWNhdGNoKGVycil7cmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMpO319c2V0KHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLGRhdGEscmVzZXRTY3JvbGwpe3RoaXMuaXNGYWxsYmFjaz1mYWxzZTt0aGlzLnJvdXRlPXJvdXRlO3RoaXMucGF0aG5hbWU9cGF0aG5hbWU7dGhpcy5xdWVyeT1xdWVyeTt0aGlzLmFzUGF0aD1hcztyZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSxyZXNldFNjcm9sbCk7fS8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9iZWZvcmVQb3BTdGF0ZShjYil7dGhpcy5fYnBzPWNiO31vbmx5QUhhc2hDaGFuZ2UoYXMpe2lmKCF0aGlzLmFzUGF0aClyZXR1cm4gZmFsc2U7Y29uc3Rbb2xkVXJsTm9IYXNoLG9sZEhhc2hdPXRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7Y29uc3RbbmV3VXJsTm9IYXNoLG5ld0hhc2hdPWFzLnNwbGl0KCcjJyk7Ly8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuaWYobmV3SGFzaCYmb2xkVXJsTm9IYXNoPT09bmV3VXJsTm9IYXNoJiZvbGRIYXNoPT09bmV3SGFzaCl7cmV0dXJuIHRydWU7fS8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbmlmKG9sZFVybE5vSGFzaCE9PW5ld1VybE5vSGFzaCl7cmV0dXJuIGZhbHNlO30vLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbi8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbi8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4vLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxucmV0dXJuIG9sZEhhc2ghPT1uZXdIYXNoO31zY3JvbGxUb0hhc2goYXMpe2NvbnN0WyxoYXNoXT1hcy5zcGxpdCgnIycpOy8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbi8vIFRvIG1pcnJvciBicm93c2Vyc1xuaWYoaGFzaD09PScnfHxoYXNoPT09J3RvcCcpe3dpbmRvdy5zY3JvbGxUbygwLDApO3JldHVybjt9Ly8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbmNvbnN0IGlkRWw9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7aWYoaWRFbCl7aWRFbC5zY3JvbGxJbnRvVmlldygpO3JldHVybjt9Ly8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4vLyBUbyBtaXJyb3IgYnJvd3NlcnNcbmNvbnN0IG5hbWVFbD1kb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtpZihuYW1lRWwpe25hbWVFbC5zY3JvbGxJbnRvVmlldygpO319dXJsSXNOZXcoYXNQYXRoKXtyZXR1cm4gdGhpcy5hc1BhdGghPT1hc1BhdGg7fS8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovYXN5bmMgcHJlZmV0Y2godXJsLGFzUGF0aD11cmwsb3B0aW9ucz17fSl7bGV0IHBhcnNlZD0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKSh1cmwpO2xldHtwYXRobmFtZX09cGFyc2VkO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2lmKG9wdGlvbnMubG9jYWxlPT09ZmFsc2Upe3BhdGhuYW1lPSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhdGhuYW1lLHRoaXMubG9jYWxlcykucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7bGV0IHBhcnNlZEFzPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKGFzUGF0aCk7Y29uc3QgbG9jYWxlUGF0aFJlc3VsdD0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZXMpO3BhcnNlZEFzLnBhdGhuYW1lPWxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWU7b3B0aW9ucy5sb2NhbGU9bG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZXx8dGhpcy5kZWZhdWx0TG9jYWxlO2FzUGF0aD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZEFzKTt9fWNvbnN0IHBhZ2VzPWF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO2xldCByZXNvbHZlZEFzPWFzUGF0aDtpZihwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTJiZhc1BhdGguc3RhcnRzV2l0aCgnLycpKXtsZXQgcmV3cml0ZXM7KHtfX3Jld3JpdGVzOnJld3JpdGVzfT1hd2FpdCgwLF9yb3V0ZUxvYWRlci5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KSgpKTtjb25zdCByZXdyaXRlc1Jlc3VsdD0oMCxfcmVzb2x2ZVJld3JpdGVzLmRlZmF1bHQpKGFkZEJhc2VQYXRoKGFkZExvY2FsZShhc1BhdGgsdGhpcy5sb2NhbGUpKSxwYWdlcyxyZXdyaXRlcyxwYXJzZWQucXVlcnkscD0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLHBhZ2VzKSx0aGlzLmxvY2FsZXMpO3Jlc29sdmVkQXM9ZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJld3JpdGVzUmVzdWx0LmFzUGF0aCksdGhpcy5sb2NhbGUpO2lmKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlJiZyZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpey8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbi8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG5wYXRobmFtZT1yZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1lbHNle3BhcnNlZC5wYXRobmFtZT1yZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZC5wYXRobmFtZSxwYWdlcyk7aWYocGFyc2VkLnBhdGhuYW1lIT09cGF0aG5hbWUpe3BhdGhuYW1lPXBhcnNlZC5wYXRobmFtZTtwYXJzZWQucGF0aG5hbWU9cGF0aG5hbWU7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWNvbnN0IHJvdXRlPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7Ly8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3JldHVybjt9YXdhaXQgUHJvbWlzZS5hbGwoW3RoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oaXNTc2c9PntyZXR1cm4gaXNTc2c/dGhpcy5fZ2V0U3RhdGljRGF0YSh0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYodXJsLHJlc29sdmVkQXMsdHJ1ZSx0eXBlb2Ygb3B0aW9ucy5sb2NhbGUhPT0ndW5kZWZpbmVkJz9vcHRpb25zLmxvY2FsZTp0aGlzLmxvY2FsZSkpOmZhbHNlO30pLHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5Pydsb2FkUGFnZSc6J3ByZWZldGNoJ10ocm91dGUpXSk7fWFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKXtsZXQgY2FuY2VsbGVkPWZhbHNlO2NvbnN0IGNhbmNlbD10aGlzLmNsYz0oKT0+e2NhbmNlbGxlZD10cnVlO307Y29uc3QgY29tcG9uZW50UmVzdWx0PWF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7aWYoY2FuY2VsbGVkKXtjb25zdCBlcnJvcj1uZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO2Vycm9yLmNhbmNlbGxlZD10cnVlO3Rocm93IGVycm9yO31pZihjYW5jZWw9PT10aGlzLmNsYyl7dGhpcy5jbGM9bnVsbDt9cmV0dXJuIGNvbXBvbmVudFJlc3VsdDt9X2dldERhdGEoZm4pe2xldCBjYW5jZWxsZWQ9ZmFsc2U7Y29uc3QgY2FuY2VsPSgpPT57Y2FuY2VsbGVkPXRydWU7fTt0aGlzLmNsYz1jYW5jZWw7cmV0dXJuIGZuKCkudGhlbihkYXRhPT57aWYoY2FuY2VsPT09dGhpcy5jbGMpe3RoaXMuY2xjPW51bGw7fWlmKGNhbmNlbGxlZCl7Y29uc3QgZXJyPW5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO2Vyci5jYW5jZWxsZWQ9dHJ1ZTt0aHJvdyBlcnI7fXJldHVybiBkYXRhO30pO31fZ2V0U3RhdGljRGF0YShkYXRhSHJlZil7Y29uc3R7aHJlZjpjYWNoZUtleX09bmV3IFVSTChkYXRhSHJlZix3aW5kb3cubG9jYXRpb24uaHJlZik7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0ncHJvZHVjdGlvbicmJiF0aGlzLmlzUHJldmlldyYmdGhpcy5zZGNbY2FjaGVLZXldKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSk7fXJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLHRoaXMuaXNTc3IpLnRoZW4oZGF0YT0+e3RoaXMuc2RjW2NhY2hlS2V5XT1kYXRhO3JldHVybiBkYXRhO30pO31fZ2V0U2VydmVyRGF0YShkYXRhSHJlZil7Y29uc3R7aHJlZjpyZXNvdXJjZUtleX09bmV3IFVSTChkYXRhSHJlZix3aW5kb3cubG9jYXRpb24uaHJlZik7aWYodGhpcy5zZHJbcmVzb3VyY2VLZXldKXtyZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldO31yZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldPWZldGNoTmV4dERhdGEoZGF0YUhyZWYsdGhpcy5pc1NzcikudGhlbihkYXRhPT57ZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtyZXR1cm4gZGF0YTt9KS5jYXRjaChlcnI9PntkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO3Rocm93IGVycjt9KTt9Z2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCxjdHgpe2NvbnN0e0NvbXBvbmVudDpBcHB9PXRoaXMuY29tcG9uZW50c1snL19hcHAnXTtjb25zdCBBcHBUcmVlPXRoaXMuX3dyYXBBcHAoQXBwKTtjdHguQXBwVHJlZT1BcHBUcmVlO3JldHVybigwLF91dGlscy5sb2FkR2V0SW5pdGlhbFByb3BzKShBcHAse0FwcFRyZWUsQ29tcG9uZW50LHJvdXRlcjp0aGlzLGN0eH0pO31hYm9ydENvbXBvbmVudExvYWQoYXMscm91dGVQcm9wcyl7aWYodGhpcy5jbGMpe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLGFzLHJvdXRlUHJvcHMpO3RoaXMuY2xjKCk7dGhpcy5jbGM9bnVsbDt9fW5vdGlmeShkYXRhLHJlc2V0U2Nyb2xsKXtyZXR1cm4gdGhpcy5zdWIoZGF0YSx0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50LHJlc2V0U2Nyb2xsKTt9fWV4cG9ydHMuZGVmYXVsdD1Sb3V0ZXI7Um91dGVyLmV2ZW50cz0oMCxfbWl0dC5kZWZhdWx0KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZm9ybWF0VXJsPWZvcm1hdFVybDt2YXIgcXVlcnlzdHJpbmc9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vcXVlcnlzdHJpbmdcIikpO2Z1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpe2lmKHR5cGVvZiBXZWFrTWFwIT09XCJmdW5jdGlvblwiKXJldHVybiBudWxsO3ZhciBjYWNoZT1uZXcgV2Vha01hcCgpO19nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZT1mdW5jdGlvbigpe3JldHVybiBjYWNoZTt9O3JldHVybiBjYWNoZTt9ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKXtpZihvYmomJm9iai5fX2VzTW9kdWxlKXtyZXR1cm4gb2JqO31pZihvYmo9PT1udWxsfHx0eXBlb2Ygb2JqIT09XCJvYmplY3RcIiYmdHlwZW9mIG9iaiE9PVwiZnVuY3Rpb25cIil7cmV0dXJue2RlZmF1bHQ6b2JqfTt9dmFyIGNhY2hlPV9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO2lmKGNhY2hlJiZjYWNoZS5oYXMob2JqKSl7cmV0dXJuIGNhY2hlLmdldChvYmopO312YXIgbmV3T2JqPXt9O3ZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3I9T2JqZWN0LmRlZmluZVByb3BlcnR5JiZPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO2Zvcih2YXIga2V5IGluIG9iail7aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaixrZXkpKXt2YXIgZGVzYz1oYXNQcm9wZXJ0eURlc2NyaXB0b3I/T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosa2V5KTpudWxsO2lmKGRlc2MmJihkZXNjLmdldHx8ZGVzYy5zZXQpKXtPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLGtleSxkZXNjKTt9ZWxzZXtuZXdPYmpba2V5XT1vYmpba2V5XTt9fX1uZXdPYmouZGVmYXVsdD1vYmo7aWYoY2FjaGUpe2NhY2hlLnNldChvYmosbmV3T2JqKTt9cmV0dXJuIG5ld09iajt9Ly8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHM9L2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvO2Z1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmope2xldHthdXRoLGhvc3RuYW1lfT11cmxPYmo7bGV0IHByb3RvY29sPXVybE9iai5wcm90b2NvbHx8Jyc7bGV0IHBhdGhuYW1lPXVybE9iai5wYXRobmFtZXx8Jyc7bGV0IGhhc2g9dXJsT2JqLmhhc2h8fCcnO2xldCBxdWVyeT11cmxPYmoucXVlcnl8fCcnO2xldCBob3N0PWZhbHNlO2F1dGg9YXV0aD9lbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksJzonKSsnQCc6Jyc7aWYodXJsT2JqLmhvc3Qpe2hvc3Q9YXV0aCt1cmxPYmouaG9zdDt9ZWxzZSBpZihob3N0bmFtZSl7aG9zdD1hdXRoKyh+aG9zdG5hbWUuaW5kZXhPZignOicpP2BbJHtob3N0bmFtZX1dYDpob3N0bmFtZSk7aWYodXJsT2JqLnBvcnQpe2hvc3QrPSc6Jyt1cmxPYmoucG9ydDt9fWlmKHF1ZXJ5JiZ0eXBlb2YgcXVlcnk9PT0nb2JqZWN0Jyl7cXVlcnk9U3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkpKTt9bGV0IHNlYXJjaD11cmxPYmouc2VhcmNofHxxdWVyeSYmYD8ke3F1ZXJ5fWB8fCcnO2lmKHByb3RvY29sJiZwcm90b2NvbC5zdWJzdHIoLTEpIT09JzonKXByb3RvY29sKz0nOic7aWYodXJsT2JqLnNsYXNoZXN8fCghcHJvdG9jb2x8fHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpJiZob3N0IT09ZmFsc2Upe2hvc3Q9Jy8vJysoaG9zdHx8JycpO2lmKHBhdGhuYW1lJiZwYXRobmFtZVswXSE9PScvJylwYXRobmFtZT0nLycrcGF0aG5hbWU7fWVsc2UgaWYoIWhvc3Qpe2hvc3Q9Jyc7fWlmKGhhc2gmJmhhc2hbMF0hPT0nIycpaGFzaD0nIycraGFzaDtpZihzZWFyY2gmJnNlYXJjaFswXSE9PSc/JylzZWFyY2g9Jz8nK3NlYXJjaDtwYXRobmFtZT1wYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csZW5jb2RlVVJJQ29tcG9uZW50KTtzZWFyY2g9c2VhcmNoLnJlcGxhY2UoJyMnLCclMjMnKTtyZXR1cm5gJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3JtYXQtdXJsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuaXNEeW5hbWljUm91dGU9aXNEeW5hbWljUm91dGU7Ly8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURT0vXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpLztmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZSl7cmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSk7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXMtZHluYW1pYy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnBhcnNlUmVsYXRpdmVVcmw9cGFyc2VSZWxhdGl2ZVVybDt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi8uLi91dGlsc1wiKTt2YXIgX3F1ZXJ5c3RyaW5nPXJlcXVpcmUoXCIuL3F1ZXJ5c3RyaW5nXCIpOy8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL2Z1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsLGJhc2Upe2NvbnN0IGdsb2JhbEJhc2U9bmV3IFVSTCh0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCc/J2h0dHA6Ly9uJzooMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCkpO2NvbnN0IHJlc29sdmVkQmFzZT1iYXNlP25ldyBVUkwoYmFzZSxnbG9iYWxCYXNlKTpnbG9iYWxCYXNlO2NvbnN0e3BhdGhuYW1lLHNlYXJjaFBhcmFtcyxzZWFyY2gsaGFzaCxocmVmLG9yaWdpbn09bmV3IFVSTCh1cmwscmVzb2x2ZWRCYXNlKTtpZihvcmlnaW4hPT1nbG9iYWxCYXNlLm9yaWdpbil7dGhyb3cgbmV3IEVycm9yKGBpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMLCByb3V0ZXIgcmVjZWl2ZWQgJHt1cmx9YCk7fXJldHVybntwYXRobmFtZSxxdWVyeTooMCxfcXVlcnlzdHJpbmcuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSkoc2VhcmNoUGFyYW1zKSxzZWFyY2gsaGFzaCxocmVmOmhyZWYuc2xpY2UoZ2xvYmFsQmFzZS5vcmlnaW4ubGVuZ3RoKX07fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFyc2UtcmVsYXRpdmUtdXJsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeT1zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5O2V4cG9ydHMudXJsUXVlcnlUb1NlYXJjaFBhcmFtcz11cmxRdWVyeVRvU2VhcmNoUGFyYW1zO2V4cG9ydHMuYXNzaWduPWFzc2lnbjtmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyl7Y29uc3QgcXVlcnk9e307c2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLGtleSk9PntpZih0eXBlb2YgcXVlcnlba2V5XT09PSd1bmRlZmluZWQnKXtxdWVyeVtrZXldPXZhbHVlO31lbHNlIGlmKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpeztxdWVyeVtrZXldLnB1c2godmFsdWUpO31lbHNle3F1ZXJ5W2tleV09W3F1ZXJ5W2tleV0sdmFsdWVdO319KTtyZXR1cm4gcXVlcnk7fWZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW0pe2lmKHR5cGVvZiBwYXJhbT09PSdzdHJpbmcnfHx0eXBlb2YgcGFyYW09PT0nbnVtYmVyJyYmIWlzTmFOKHBhcmFtKXx8dHlwZW9mIHBhcmFtPT09J2Jvb2xlYW4nKXtyZXR1cm4gU3RyaW5nKHBhcmFtKTt9ZWxzZXtyZXR1cm4nJzt9fWZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXModXJsUXVlcnkpe2NvbnN0IHJlc3VsdD1uZXcgVVJMU2VhcmNoUGFyYW1zKCk7T2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksdmFsdWVdKT0+e2lmKEFycmF5LmlzQXJyYXkodmFsdWUpKXt2YWx1ZS5mb3JFYWNoKGl0ZW09PnJlc3VsdC5hcHBlbmQoa2V5LHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKTt9ZWxzZXtyZXN1bHQuc2V0KGtleSxzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSk7fX0pO3JldHVybiByZXN1bHQ7fWZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsLi4uc2VhcmNoUGFyYW1zTGlzdCl7c2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKHNlYXJjaFBhcmFtcz0+e0FycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaChrZXk9PnRhcmdldC5kZWxldGUoa2V5KSk7c2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLGtleSk9PnRhcmdldC5hcHBlbmQoa2V5LHZhbHVlKSk7fSk7cmV0dXJuIHRhcmdldDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xdWVyeXN0cmluZy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmdldFJvdXRlTWF0Y2hlcj1nZXRSb3V0ZU1hdGNoZXI7ZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpe2NvbnN0e3JlLGdyb3Vwc309cm91dGVSZWdleDtyZXR1cm4gcGF0aG5hbWU9Pntjb25zdCByb3V0ZU1hdGNoPXJlLmV4ZWMocGF0aG5hbWUpO2lmKCFyb3V0ZU1hdGNoKXtyZXR1cm4gZmFsc2U7fWNvbnN0IGRlY29kZT1wYXJhbT0+e3RyeXtyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKTt9Y2F0Y2goXyl7Y29uc3QgZXJyPW5ldyBFcnJvcignZmFpbGVkIHRvIGRlY29kZSBwYXJhbScpO2Vyci5jb2RlPSdERUNPREVfRkFJTEVEJzt0aHJvdyBlcnI7fX07Y29uc3QgcGFyYW1zPXt9O09iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaChzbHVnTmFtZT0+e2NvbnN0IGc9Z3JvdXBzW3NsdWdOYW1lXTtjb25zdCBtPXJvdXRlTWF0Y2hbZy5wb3NdO2lmKG0hPT11bmRlZmluZWQpe3BhcmFtc1tzbHVnTmFtZV09fm0uaW5kZXhPZignLycpP20uc3BsaXQoJy8nKS5tYXAoZW50cnk9PmRlY29kZShlbnRyeSkpOmcucmVwZWF0P1tkZWNvZGUobSldOmRlY29kZShtKTt9fSk7cmV0dXJuIHBhcmFtczt9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLW1hdGNoZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXRSb3V0ZVJlZ2V4PWdldFJvdXRlUmVnZXg7Ly8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cil7cmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csJ1xcXFwkJicpO31mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbSl7Y29uc3Qgb3B0aW9uYWw9cGFyYW0uc3RhcnRzV2l0aCgnWycpJiZwYXJhbS5lbmRzV2l0aCgnXScpO2lmKG9wdGlvbmFsKXtwYXJhbT1wYXJhbS5zbGljZSgxLC0xKTt9Y29uc3QgcmVwZWF0PXBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpO2lmKHJlcGVhdCl7cGFyYW09cGFyYW0uc2xpY2UoMyk7fXJldHVybntrZXk6cGFyYW0scmVwZWF0LG9wdGlvbmFsfTt9ZnVuY3Rpb24gZ2V0Um91dGVSZWdleChub3JtYWxpemVkUm91dGUpe2NvbnN0IHNlZ21lbnRzPShub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sJycpfHwnLycpLnNsaWNlKDEpLnNwbGl0KCcvJyk7Y29uc3QgZ3JvdXBzPXt9O2xldCBncm91cEluZGV4PTE7Y29uc3QgcGFyYW1ldGVyaXplZFJvdXRlPXNlZ21lbnRzLm1hcChzZWdtZW50PT57aWYoc2VnbWVudC5zdGFydHNXaXRoKCdbJykmJnNlZ21lbnQuZW5kc1dpdGgoJ10nKSl7Y29uc3R7a2V5LG9wdGlvbmFsLHJlcGVhdH09cGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLC0xKSk7Z3JvdXBzW2tleV09e3Bvczpncm91cEluZGV4KysscmVwZWF0LG9wdGlvbmFsfTtyZXR1cm4gcmVwZWF0P29wdGlvbmFsPycoPzovKC4rPykpPyc6Jy8oLis/KSc6Jy8oW14vXSs/KSc7fWVsc2V7cmV0dXJuYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWA7fX0pLmpvaW4oJycpOy8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbmlmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJyl7bGV0IHJvdXRlS2V5Q2hhckNvZGU9OTc7bGV0IHJvdXRlS2V5Q2hhckxlbmd0aD0xOy8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbmNvbnN0IGdldFNhZmVSb3V0ZUtleT0oKT0+e2xldCByb3V0ZUtleT0nJztmb3IobGV0IGk9MDtpPHJvdXRlS2V5Q2hhckxlbmd0aDtpKyspe3JvdXRlS2V5Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpO3JvdXRlS2V5Q2hhckNvZGUrKztpZihyb3V0ZUtleUNoYXJDb2RlPjEyMil7cm91dGVLZXlDaGFyTGVuZ3RoKys7cm91dGVLZXlDaGFyQ29kZT05Nzt9fXJldHVybiByb3V0ZUtleTt9O2NvbnN0IHJvdXRlS2V5cz17fTtsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU9c2VnbWVudHMubWFwKHNlZ21lbnQ9PntpZihzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSYmc2VnbWVudC5lbmRzV2l0aCgnXScpKXtjb25zdHtrZXksb3B0aW9uYWwscmVwZWF0fT1wYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsLTEpKTsvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4vLyB0aGUgbmFtZWQgcmVnZXhcbmxldCBjbGVhbmVkS2V5PWtleS5yZXBsYWNlKC9cXFcvZywnJyk7bGV0IGludmFsaWRLZXk9ZmFsc2U7Ly8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4vLyBzYWZlIGtleVxuaWYoY2xlYW5lZEtleS5sZW5ndGg9PT0wfHxjbGVhbmVkS2V5Lmxlbmd0aD4zMCl7aW52YWxpZEtleT10cnVlO31pZighaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwxKSkpKXtpbnZhbGlkS2V5PXRydWU7fWlmKGludmFsaWRLZXkpe2NsZWFuZWRLZXk9Z2V0U2FmZVJvdXRlS2V5KCk7fXJvdXRlS2V5c1tjbGVhbmVkS2V5XT1rZXk7cmV0dXJuIHJlcGVhdD9vcHRpb25hbD9gKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YDpgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWA6YC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgO31lbHNle3JldHVybmAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gO319KS5qb2luKCcnKTtyZXR1cm57cmU6bmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxncm91cHMscm91dGVLZXlzLG5hbWVkUmVnZXg6YF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgfTt9cmV0dXJue3JlOm5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksZ3JvdXBzfTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1yZWdleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmV4ZWNPbmNlPWV4ZWNPbmNlO2V4cG9ydHMuZ2V0TG9jYXRpb25PcmlnaW49Z2V0TG9jYXRpb25PcmlnaW47ZXhwb3J0cy5nZXRVUkw9Z2V0VVJMO2V4cG9ydHMuZ2V0RGlzcGxheU5hbWU9Z2V0RGlzcGxheU5hbWU7ZXhwb3J0cy5pc1Jlc1NlbnQ9aXNSZXNTZW50O2V4cG9ydHMubG9hZEdldEluaXRpYWxQcm9wcz1sb2FkR2V0SW5pdGlhbFByb3BzO2V4cG9ydHMuZm9ybWF0V2l0aFZhbGlkYXRpb249Zm9ybWF0V2l0aFZhbGlkYXRpb247ZXhwb3J0cy5TVD1leHBvcnRzLlNQPWV4cG9ydHMudXJsT2JqZWN0S2V5cz12b2lkIDA7dmFyIF9mb3JtYXRVcmw9cmVxdWlyZShcIi4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmxcIik7LyoqXG4gKiBVdGlsc1xuICovZnVuY3Rpb24gZXhlY09uY2UoZm4pe2xldCB1c2VkPWZhbHNlO2xldCByZXN1bHQ7cmV0dXJuKC4uLmFyZ3MpPT57aWYoIXVzZWQpe3VzZWQ9dHJ1ZTtyZXN1bHQ9Zm4oLi4uYXJncyk7fXJldHVybiByZXN1bHQ7fTt9ZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKXtjb25zdHtwcm90b2NvbCxob3N0bmFtZSxwb3J0fT13aW5kb3cubG9jYXRpb247cmV0dXJuYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydD8nOicrcG9ydDonJ31gO31mdW5jdGlvbiBnZXRVUkwoKXtjb25zdHtocmVmfT13aW5kb3cubG9jYXRpb247Y29uc3Qgb3JpZ2luPWdldExvY2F0aW9uT3JpZ2luKCk7cmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpO31mdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpe3JldHVybiB0eXBlb2YgQ29tcG9uZW50PT09J3N0cmluZyc/Q29tcG9uZW50OkNvbXBvbmVudC5kaXNwbGF5TmFtZXx8Q29tcG9uZW50Lm5hbWV8fCdVbmtub3duJzt9ZnVuY3Rpb24gaXNSZXNTZW50KHJlcyl7cmV0dXJuIHJlcy5maW5pc2hlZHx8cmVzLmhlYWRlcnNTZW50O31hc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzKEFwcCxjdHgpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt2YXIgX0FwcCRwcm90b3R5cGU7aWYoKF9BcHAkcHJvdG90eXBlPUFwcC5wcm90b3R5cGUpIT1udWxsJiZfQXBwJHByb3RvdHlwZS5nZXRJbml0aWFsUHJvcHMpe2NvbnN0IG1lc3NhZ2U9YFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmA7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO319Ly8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuY29uc3QgcmVzPWN0eC5yZXN8fGN0eC5jdHgmJmN0eC5jdHgucmVzO2lmKCFBcHAuZ2V0SW5pdGlhbFByb3BzKXtpZihjdHguY3R4JiZjdHguQ29tcG9uZW50KXsvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG5yZXR1cm57cGFnZVByb3BzOmF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCxjdHguY3R4KX07fXJldHVybnt9O31jb25zdCBwcm9wcz1hd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eCk7aWYocmVzJiZpc1Jlc1NlbnQocmVzKSl7cmV0dXJuIHByb3BzO31pZighcHJvcHMpe2NvbnN0IG1lc3NhZ2U9YFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmA7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31pZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aD09PTAmJiFjdHguY3R4KXtjb25zb2xlLndhcm4oYCR7Z2V0RGlzcGxheU5hbWUoQXBwKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgKTt9fXJldHVybiBwcm9wczt9Y29uc3QgdXJsT2JqZWN0S2V5cz1bJ2F1dGgnLCdoYXNoJywnaG9zdCcsJ2hvc3RuYW1lJywnaHJlZicsJ3BhdGgnLCdwYXRobmFtZScsJ3BvcnQnLCdwcm90b2NvbCcsJ3F1ZXJ5Jywnc2VhcmNoJywnc2xhc2hlcyddO2V4cG9ydHMudXJsT2JqZWN0S2V5cz11cmxPYmplY3RLZXlzO2Z1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXtpZih1cmwhPT1udWxsJiZ0eXBlb2YgdXJsPT09J29iamVjdCcpe09iamVjdC5rZXlzKHVybCkuZm9yRWFjaChrZXk9PntpZih1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KT09PS0xKXtjb25zb2xlLndhcm4oYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YCk7fX0pO319cmV0dXJuKDAsX2Zvcm1hdFVybC5mb3JtYXRVcmwpKHVybCk7fWNvbnN0IFNQPXR5cGVvZiBwZXJmb3JtYW5jZSE9PSd1bmRlZmluZWQnO2V4cG9ydHMuU1A9U1A7Y29uc3QgU1Q9U1AmJnR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrPT09J2Z1bmN0aW9uJyYmdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmU9PT0nZnVuY3Rpb24nO2V4cG9ydHMuU1Q9U1Q7XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlscy5qcy5tYXAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzIGZyb20gJy4vRGlzY291bnQubW9kdWxlLnNjc3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERpc2NvdW50ID0gKHt0ZXh0fSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3MudGV4dH0+e3RleHR9PC9wPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17cy5jbG9zZX0+PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHMgZnJvbSBcIi4vRm9vdGVyLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBnIGZyb20gXCJzcmMvc3R5bGVzL01haW4ubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgTG9nbyB9IGZyb20gXCJAY29tcG9uZW50cy9TVkcvSGVhZGVyTG9nb1NWR1wiO1xyXG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICAgcmV0dXJuIChcclxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e2Nsc3gocy5mb290ZXIpfT5cclxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goZy53cmFwcGVyKX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KHMuY29udGFpbmVyKX0+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KHMuYmxvY2spfT5cclxuICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9e2Nsc3gocy5tZW51KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2Nsc3gocy5saW5rKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+0JzQsNCz0LDQt9C40L08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2Nsc3gocy5saW5rKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+0JTQvtGB0YLQsNCy0LrQsDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17Y2xzeChzLmxpbmspfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj7QniDQvdCw0YE8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2Nsc3gocy5saW5rKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+0J/RgNC+0LTRg9C60YbQuNGPPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtjbHN4KHMubGluayl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPtCg0LXRhtC10L/RgtGLPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzpcIiBjbGFzc05hbWU9e2Nsc3gocy5jb250YWN0KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgINCd0LDQv9C40YHQsNGC0Ywg0L3QsNC8XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KHMuYmxvY2spfT5cclxuICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9e2Nsc3gocy5tZW51KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e2Nsc3gocy5saW5rKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+0KLQvtGH0LrQuCDQv9GA0L7QtNCw0LY8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e2Nsc3gocy5saW5rKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+0JrQvtC90YLQsNC60YLRizwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17Y2xzeChzLmxpbmssIHMuc29jaWFsKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+SW5zdGFncmFtPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtjbHN4KHMubGluaywgcy5zb2NpYWwpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5GYWNlYm9vazwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KHMuaW5mbyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChzLmFkZHJlc3MpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAg0KHQvNC+0LvQtdC90YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsINCa0LDRgNC00YvQvNC+0LLRgdC60LjQuSDRgNCw0LnQvtC9LCDRgdC10LvQviDQmtCw0LzQtdC90LrQsCDQntCe0J5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXCLQmtGA0LDRgdC90LDRjyDQs9C+0YDQutCwXCIsINCe0JPQoNCdIDExMzY3MzMwMDg3NjMsINCY0J3QnSA2NzIyMDQxMDM5XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChzLmNvbnRhY3RzKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ0ZWw6XCIgY2xhc3NOYW1lPXtjbHN4KHMuY29udGFjdCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA4ICg4MDApIDI1MC01OC0yNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86XCIgY2xhc3NOYW1lPXtjbHN4KHMuY29udGFjdCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzYWxlc0Brb2ljby5ydVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9hc2FwLWFnLnJ1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KHMuYXNhcCl9XHJcbiAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjUxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDUxIDIxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBvcGFjaXR5PVwiMC41NlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTAuNTY5NDk2IDE4LjQ5NjJWMTkuOTQzNkgwVjE2LjI0NjNIMS41OTI4MUMyLjA2NTQxIDE2LjI0NjMgMi40MzUxOSAxNi4zNDk2IDIuNzAyMTQgMTYuNTU2MUMyLjk3MTA3IDE2Ljc2MjcgMy4xMDU1MyAxNy4wMzYxIDMuMTA1NTMgMTcuMzc2M0MzLjEwNTUzIDE3LjczNTIgMi45NzQwNCAxOC4wMTIgMi43MTEwNCAxOC4yMDY3QzIuNDUwMDIgMTguMzk5NyAyLjA3NTMgMTguNDk2MiAxLjU4Njg4IDE4LjQ5NjJIMC41Njk0OTZaTTAuNTY5NDk2IDE4LjA5NzVIMS41OTI4MUMxLjg5NzMzIDE4LjA5NzUgMi4xMzA2NyAxOC4wMzY2IDIuMjkyODIgMTcuOTE0N0MyLjQ1NDk2IDE3Ljc5MTEgMi41MzYwNCAxNy42MTMzIDIuNTM2MDQgMTcuMzgxNEMyLjUzNjA0IDE3LjE2MTMgMi40NTQ5NiAxNi45ODUzIDIuMjkyODIgMTYuODUzMkMyLjEzMDY3IDE2LjcyMTIgMS45MDgyMSAxNi42NTI2IDEuNjI1NDQgMTYuNjQ3NUgwLjU2OTQ5NlYxOC4wOTc1WlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjRkFFRUUyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk01LjY5MiAxOS45NDM2QzUuNjYwMzYgMTkuODg5NSA1LjYzNDY1IDE5Ljc5MyA1LjYxNDg4IDE5LjY1NDFDNS4zNTk3OSAxOS44ODEgNS4wNTUyNyAxOS45OTQ0IDQuNzAxMzEgMTkuOTk0NEM0LjM4NDkyIDE5Ljk5NDQgNC4xMjQ4OSAxOS45MTgyIDMuOTIxMjIgMTkuNzY1OUMzLjcxOTUyIDE5LjYxMTggMy42MTg2NyAxOS40MTcxIDMuNjE4NjcgMTkuMTgxOEMzLjYxODY3IDE4Ljg5NTcgMy43NDUyMyAxOC42NzM5IDMuOTk4MzQgMTguNTE2NUM0LjI1MzQzIDE4LjM1NzQgNC42MTEzNCAxOC4yNzc4IDUuMDcyMDggMTguMjc3OEg1LjYwNTk4VjE4LjA2MkM1LjYwNTk4IDE3Ljg5NzcgNS41NDg2MyAxNy43Njc0IDUuNDMzOTQgMTcuNjcwOUM1LjMxOTI1IDE3LjU3MjcgNS4xNTAxOCAxNy41MjM2IDQuOTI2NzQgMTcuNTIzNkM0LjczMDk3IDE3LjUyMzYgNC41NjY4NSAxNy41NjU5IDQuNDM0MzYgMTcuNjUwNkM0LjMwMTg3IDE3LjczNTIgNC4yMzU2MyAxNy44Mzc3IDQuMjM1NjMgMTcuOTU3OEgzLjY4MzkzQzMuNjgzOTMgMTcuODIwNyAzLjc0MDI5IDE3LjY4ODcgMy44NTMgMTcuNTYxN0MzLjk2NzY5IDE3LjQzMyA0LjEyMTkzIDE3LjMzMTUgNC4zMTU3MSAxNy4yNTdDNC41MTE0OCAxNy4xODI1IDQuNzI2MDMgMTcuMTQ1MyA0Ljk1OTM2IDE3LjE0NTNDNS4zMjkxNCAxNy4xNDUzIDUuNjE4ODMgMTcuMjI0OCA1LjgyODQ0IDE3LjM4NEM2LjAzODA1IDE3LjU0MTQgNi4xNDY4IDE3Ljc1ODkgNi4xNTQ3MSAxOC4wMzY2VjE5LjMwMTJDNi4xNTQ3MSAxOS41NTM0IDYuMTkyMjggMTkuNzU0IDYuMjY3NDMgMTkuOTAzVjE5Ljk0MzZINS42OTJaTTQuNzgxNCAxOS41ODU2QzQuOTUzNDMgMTkuNTg1NiA1LjExNjU3IDE5LjU0NzUgNS4yNzA4MSAxOS40NzEzQzUuNDI1MDUgMTkuMzk1MSA1LjUzNjc3IDE5LjI5NjEgNS42MDU5OCAxOS4xNzQyVjE4LjYxMDVINS4xNzU4OUM0LjUwMzU3IDE4LjYxMDUgNC4xNjc0MSAxOC43Nzg5IDQuMTY3NDEgMTkuMTE1OEM0LjE2NzQxIDE5LjI2MzEgNC4yMjQ3NSAxOS4zNzgyIDQuMzM5NDQgMTkuNDYxMUM0LjQ1NDEzIDE5LjU0NDEgNC42MDE0NSAxOS41ODU2IDQuNzgxNCAxOS41ODU2WlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjRkFFRUUyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk04Ljc3OTc0IDE3Ljk0NzdDOC43Nzk3NCAxNy44MTkgOC43MjIzOSAxNy43MTc1IDguNjA3NyAxNy42NDNDOC40OTMwMSAxNy41NjY4IDguMzM1OCAxNy41Mjg3IDguMTM2MDkgMTcuNTI4N0M3Ljk0MjMgMTcuNTI4NyA3Ljc4MDE1IDE3LjU3MTkgNy42NDk2NCAxNy42NTgyQzcuNTIxMTEgMTcuNzQ0NSA3LjQ1Njg0IDE3Ljg0NjEgNy40NTY4NCAxNy45NjI5SDYuOTExMDhDNi45MTEwOCAxNy43MjQyIDcuMDI3NzQgMTcuNTI4NyA3LjI2MTA4IDE3LjM3NjNDNy40OTQ0MSAxNy4yMjQgNy43ODYwOCAxNy4xNDc4IDguMTM2MDkgMTcuMTQ3OEM4LjUxMTggMTcuMTQ3OCA4LjgwNDQ1IDE3LjIxNzIgOS4wMTQwNiAxNy4zNTZDOS4yMjM2NyAxNy40OTMxIDkuMzI4NDcgMTcuNjg5NSA5LjMyODQ3IDE3Ljk0NTFDOS4zMjg0NyAxOC4wNjg3IDkuMjg0OTcgMTguMTgyMiA5LjE5Nzk2IDE4LjI4NTRDOS4xMTA5NSAxOC4zODg3IDguOTg3MzYgMTguNDcwOCA4LjgyNzE5IDE4LjUzMTdDOS4yMDA5MiAxOC42NDAxIDkuMzg3NzkgMTguODUzNCA5LjM4Nzc5IDE5LjE3MTdDOS4zODc3OSAxOS40MjM5IDkuMjc0MDkgMTkuNjIzNyA5LjA0NjY5IDE5Ljc3MDlDOC44MTkyOCAxOS45MTgyIDguNTE1NzUgMTkuOTkxOSA4LjEzNjA5IDE5Ljk5MTlDNy43NjYzMSAxOS45OTE5IDcuNDYwOCAxOS45MTQ4IDcuMjE5NTUgMTkuNzYwOEM2Ljk4MDI5IDE5LjYwNSA2Ljg2MDY1IDE5LjM5NTEgNi44NjA2NSAxOS4xMzFINy40MDY0MkM3LjQwNjQyIDE5LjI2NDggNy40NzU2MyAxOS4zNzk5IDcuNjE0MDUgMTkuNDc2NEM3Ljc1NDQ0IDE5LjU3MTIgNy45Mjg0NiAxOS42MTg2IDguMTM2MDkgMTkuNjE4NkM4LjM0NTY5IDE5LjYxODYgOC41MTQ3NiAxOS41NzcxIDguNjQzMjkgMTkuNDk0MkM4Ljc3MTgzIDE5LjQxMTIgOC44MzYwOSAxOS4zMDM3IDguODM2MDkgMTkuMTcxN0M4LjgzNjA5IDE5LjAxNzYgOC43ODE3MSAxOC45MDc2IDguNjcyOTUgMTguODQxNUM4LjU2NjE3IDE4Ljc3MzggOC4zOTkwOCAxOC43NCA4LjE3MTY4IDE4Ljc0SDcuNjIyOTVWMTguMzQzOEg4LjIxOTE0QzguNTkyODcgMTguMzM1NCA4Ljc3OTc0IDE4LjIwMzMgOC43Nzk3NCAxNy45NDc3WlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjRkFFRUUyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMi44MTA3IDE4LjYwMDNDMTIuODEwNyAxOS4wMTg1IDEyLjY5OSAxOS4zNTUzIDEyLjQ3NTUgMTkuNjExQzEyLjI1MjEgMTkuODY2NiAxMS45NDk1IDE5Ljk5NDQgMTEuNTY3OSAxOS45OTQ0QzExLjE3ODMgMTkuOTk0NCAxMC44NzE4IDE5Ljg4ODYgMTAuNjQ4NCAxOS42NzdWMjFIMTAuMDk5N1YxNy4xOTZIMTAuNjAwOUwxMC42Mjc2IDE3LjUwMDhDMTAuODUxMSAxNy4yNjM4IDExLjE2MTUgMTcuMTQ1MyAxMS41NTkgMTcuMTQ1M0MxMS45NDQ2IDE3LjE0NTMgMTIuMjQ5MSAxNy4yNjk3IDEyLjQ3MjYgMTcuNTE4NUMxMi42OTggMTcuNzY3NCAxMi44MTA3IDE4LjExMzYgMTIuODEwNyAxOC41NTcxVjE4LjYwMDNaTTEyLjI2MiAxOC41NDdDMTIuMjYyIDE4LjIzNzIgMTIuMTg0OCAxNy45OTI2IDEyLjAzMDYgMTcuODEzMUMxMS44NzY0IDE3LjYzMzcgMTEuNjY0OCAxNy41NDM5IDExLjM5NTkgMTcuNTQzOUMxMS4wNjM3IDE3LjU0MzkgMTAuODE0NSAxNy42NzAxIDEwLjY0ODQgMTcuOTIyM1YxOS4yMzUxQzEwLjgxMjUgMTkuNDg1NyAxMS4wNjM3IDE5LjYxMSAxMS40MDE4IDE5LjYxMUMxMS42NjQ4IDE5LjYxMSAxMS44NzM0IDE5LjUyMjEgMTIuMDI3NiAxOS4zNDQzQzEyLjE4MzkgMTkuMTY0OSAxMi4yNjIgMTguODk5MSAxMi4yNjIgMTguNTQ3WlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjRkFFRUUyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xNS40OTIxIDE5Ljk0MzZDMTUuNDYwNCAxOS44ODk1IDE1LjQzNDcgMTkuNzkzIDE1LjQxNSAxOS42NTQxQzE1LjE1OTkgMTkuODgxIDE0Ljg1NTQgMTkuOTk0NCAxNC41MDE0IDE5Ljk5NDRDMTQuMTg1IDE5Ljk5NDQgMTMuOTI1IDE5LjkxODIgMTMuNzIxMyAxOS43NjU5QzEzLjUxOTYgMTkuNjExOCAxMy40MTg4IDE5LjQxNzEgMTMuNDE4OCAxOS4xODE4QzEzLjQxODggMTguODk1NyAxMy41NDUzIDE4LjY3MzkgMTMuNzk4NCAxOC41MTY1QzE0LjA1MzUgMTguMzU3NCAxNC40MTE0IDE4LjI3NzggMTQuODcyMiAxOC4yNzc4SDE1LjQwNjFWMTguMDYyQzE1LjQwNjEgMTcuODk3NyAxNS4zNDg3IDE3Ljc2NzQgMTUuMjM0IDE3LjY3MDlDMTUuMTE5MyAxNy41NzI3IDE0Ljk1MDMgMTcuNTIzNiAxNC43MjY4IDE3LjUyMzZDMTQuNTMxMSAxNy41MjM2IDE0LjM2NjkgMTcuNTY1OSAxNC4yMzQ0IDE3LjY1MDZDMTQuMTAyIDE3LjczNTIgMTQuMDM1NyAxNy44Mzc3IDE0LjAzNTcgMTcuOTU3OEgxMy40ODRDMTMuNDg0IDE3LjgyMDcgMTMuNTQwNCAxNy42ODg3IDEzLjY1MzEgMTcuNTYxN0MxMy43Njc4IDE3LjQzMyAxMy45MjIgMTcuMzMxNSAxNC4xMTU4IDE3LjI1N0MxNC4zMTE2IDE3LjE4MjUgMTQuNTI2MSAxNy4xNDUzIDE0Ljc1OTQgMTcuMTQ1M0MxNS4xMjkyIDE3LjE0NTMgMTUuNDE4OSAxNy4yMjQ4IDE1LjYyODUgMTcuMzg0QzE1LjgzODEgMTcuNTQxNCAxNS45NDY5IDE3Ljc1ODkgMTUuOTU0OCAxOC4wMzY2VjE5LjMwMTJDMTUuOTU0OCAxOS41NTM0IDE1Ljk5MjQgMTkuNzU0IDE2LjA2NzUgMTkuOTAzVjE5Ljk0MzZIMTUuNDkyMVpNMTQuNTgxNSAxOS41ODU2QzE0Ljc1MzUgMTkuNTg1NiAxNC45MTY3IDE5LjU0NzUgMTUuMDcwOSAxOS40NzEzQzE1LjIyNTEgMTkuMzk1MSAxNS4zMzY5IDE5LjI5NjEgMTUuNDA2MSAxOS4xNzQyVjE4LjYxMDVIMTQuOTc2QzE0LjMwMzcgMTguNjEwNSAxMy45Njc1IDE4Ljc3ODkgMTMuOTY3NSAxOS4xMTU4QzEzLjk2NzUgMTkuMjYzMSAxNC4wMjQ4IDE5LjM3ODIgMTQuMTM5NSAxOS40NjExQzE0LjI1NDIgMTkuNTQ0MSAxNC40MDE1IDE5LjU4NTYgMTQuNTgxNSAxOS41ODU2WlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjRkFFRUUyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xOC4yMjM5IDE3LjM1MzVDMTguNjI3MyAxNy4zNTM1IDE4Ljk0OTYgMTcuNDY5NCAxOS4xOTA4IDE3LjcwMTRDMTkuNDM0MSAxNy45MzE2IDE5LjU1NTcgMTguMjM1NSAxOS41NTU3IDE4LjYxM1YxOC42NTYyQzE5LjU1NTcgMTguOTE1MiAxOS40OTczIDE5LjE0NzEgMTkuMzgwNyAxOS4zNTJDMTkuMjY0IDE5LjU1NTEgMTkuMDk1OSAxOS43MTM0IDE4Ljg3NjQgMTkuODI2OEMxOC42NTg5IDE5LjkzODUgMTguNDA3OCAxOS45OTQ0IDE4LjEyMyAxOS45OTQ0QzE3LjY5MiAxOS45OTQ0IDE3LjM0NDkgMTkuODcxNyAxNy4wODE5IDE5LjYyNjJDMTYuODE4OSAxOS4zNzkgMTYuNjg3NCAxOS4wNDgxIDE2LjY4NzQgMTguNjMzM1YxOC40MDQ4QzE2LjY4NzQgMTcuODI3NSAxNi44MTIgMTcuMzY4NyAxNy4wNjEyIDE3LjAyODRDMTcuMzEyMyAxNi42ODgyIDE3LjY4MjEgMTYuNDgwOCAxOC4xNzA1IDE2LjQwNjNDMTguNDQ3MyAxNi4zNjQgMTguNjM0MiAxNi4zMTIzIDE4LjczMTEgMTYuMjUxNEMxOC44MjggMTYuMTkwNSAxOC44NzY0IDE2LjEwNjcgMTguODc2NCAxNkgxOS4zMjczQzE5LjMyNzMgMTYuMjExNiAxOS4yNzA5IDE2LjM3NjcgMTkuMTU4MiAxNi40OTUyQzE5LjA0NzUgMTYuNjEzNyAxOC44Njk1IDE2LjY5NzUgMTguNjI0MyAxNi43NDY2TDE4LjIxNSAxNi44MjUzQzE3Ljg4ODcgMTYuODkxMyAxNy42NDM1IDE3LjAwMyAxNy40Nzk0IDE3LjE2MDVDMTcuMzE3MiAxNy4zMTYyIDE3LjIxMTQgMTcuNTI0NSAxNy4xNjIgMTcuNzg1MkMxNy40NTI3IDE3LjQ5NzQgMTcuODA2NiAxNy4zNTM1IDE4LjIyMzkgMTcuMzUzNVpNMTguMTE3MSAxNy43Mzk1QzE3Ljg0ODIgMTcuNzM5NSAxNy42MzQ2IDE3LjgxNzMgMTcuNDc2NCAxNy45NzMxQzE3LjMxODIgMTguMTI3MSAxNy4yMzkxIDE4LjM0MTMgMTcuMjM5MSAxOC42MTU1VjE4LjY1NjJDMTcuMjM5MSAxOC45NTA3IDE3LjMxODIgMTkuMTg0NCAxNy40NzY0IDE5LjM1N0MxNy42MzY2IDE5LjUyOCAxNy44NTIxIDE5LjYxMzUgMTguMTIzIDE5LjYxMzVDMTguMzk1OSAxOS42MTM1IDE4LjYxMTUgMTkuNTI3MiAxOC43Njk2IDE5LjM1NDVDMTguOTI3OCAxOS4xODE4IDE5LjAwNjkgMTguOTI5NiAxOS4wMDY5IDE4LjU5NzhDMTkuMDA2OSAxOC4zMzg4IDE4LjkyNjkgMTguMTMxNCAxOC43NjY3IDE3Ljk3NTZDMTguNjA4NSAxNy44MTgyIDE4LjM5MiAxNy43Mzk1IDE4LjExNzEgMTcuNzM5NVpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI0ZBRUVFMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMjAuMDI3MyAxOC41NDQ0QzIwLjAyNzMgMTguMjc1MyAyMC4wODg2IDE4LjAzMzIgMjAuMjExMiAxNy44MTgyQzIwLjMzNTggMTcuNjAzMiAyMC41MDc4IDE3LjQzNzMgMjAuNzI3MyAxNy4zMjA1QzIwLjk0ODggMTcuMjAzNyAyMS4yMDA5IDE3LjE0NTMgMjEuNDgzNyAxNy4xNDUzQzIxLjkyMDcgMTcuMTQ1MyAyMi4yNzM2IDE3LjI3NDggMjIuNTQyNiAxNy41MzM4QzIyLjgxMzUgMTcuNzkyOCAyMi45NDg5IDE4LjEzNzMgMjIuOTQ4OSAxOC41NjczVjE4LjYwMDNDMjIuOTQ4OSAxOC44Njc4IDIyLjg4ODYgMTkuMTA4MiAyMi43NjggMTkuMzIxNUMyMi42NDkzIDE5LjUzMzEgMjIuNDc4MyAxOS42OTgyIDIyLjI1NDggMTkuODE2N0MyMi4wMzM0IDE5LjkzNTIgMjEuNzc4MyAxOS45OTQ0IDIxLjQ4OTYgMTkuOTk0NEMyMS4wNTQ2IDE5Ljk5NDQgMjAuNzAxNiAxOS44NjQ5IDIwLjQzMDcgMTkuNjA1OUMyMC4xNjE4IDE5LjM0NjkgMjAuMDI3MyAxOS4wMDQxIDIwLjAyNzMgMTguNTc3NVYxOC41NDQ0Wk0yMC41NzkgMTguNjAwM0MyMC41NzkgMTguOTA1IDIwLjY2MTEgMTkuMTQ5NyAyMC44MjUyIDE5LjMzNDJDMjAuOTkxMyAxOS41MTg3IDIxLjIxMjcgMTkuNjExIDIxLjQ4OTYgMTkuNjExQzIxLjc2ODQgMTkuNjExIDIxLjk4OTkgMTkuNTE3OSAyMi4xNTQgMTkuMzMxNkMyMi4zMTgxIDE5LjE0MzcgMjIuNDAwMiAxOC44ODEzIDIyLjQwMDIgMTguNTQ0NEMyMi40MDAyIDE4LjI0MzEgMjIuMzE2MSAxNy45OTkzIDIyLjE0ODEgMTcuODEzMUMyMS45ODIgMTcuNjI1MiAyMS43NjA1IDE3LjUzMTIgMjEuNDgzNyAxNy41MzEyQzIxLjIxMjcgMTcuNTMxMiAyMC45OTQyIDE3LjYyMzUgMjAuODI4MSAxNy44MDhDMjAuNjYyIDE3Ljk5MjYgMjAuNTc5IDE4LjI1NjYgMjAuNTc5IDE4LjYwMDNaXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNGQUVFRTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTI1Ljk1NjYgMTcuNTc2OUgyNC44Nzk5VjE5Ljk0MzZIMjQuMzMxMVYxNy41NzY5SDIzLjI3NTJWMTcuMTk2SDI1Ljk1NjZWMTcuNTc2OVpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI0ZBRUVFMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMjcuNDkwMSAxOC43NzNIMjcuMDg5NlYxOS45NDM2SDI2LjUzNzlWMTcuMTk2SDI3LjA4OTZWMTguMzU5MUgyNy40NDg1TDI4LjUyODIgMTcuMTk2SDI5LjE5MjZMMjcuOTIzMSAxOC41MTY1TDI5LjI5OTQgMTkuOTQzNkgyOC42MDI0TDI3LjQ5MDEgMTguNzczWlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjRkFFRUUyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0zMS43NTI0IDE5Ljk0MzZDMzEuNzIwNyAxOS44ODk1IDMxLjY5NSAxOS43OTMgMzEuNjc1MyAxOS42NTQxQzMxLjQyMDIgMTkuODgxIDMxLjExNTcgMTkuOTk0NCAzMC43NjE3IDE5Ljk5NDRDMzAuNDQ1MyAxOS45OTQ0IDMwLjE4NTMgMTkuOTE4MiAyOS45ODE2IDE5Ljc2NTlDMjkuNzc5OSAxOS42MTE4IDI5LjY3OTEgMTkuNDE3MSAyOS42NzkxIDE5LjE4MThDMjkuNjc5MSAxOC44OTU3IDI5LjgwNTYgMTguNjczOSAzMC4wNTg3IDE4LjUxNjVDMzAuMzEzOCAxOC4zNTc0IDMwLjY3MTcgMTguMjc3OCAzMS4xMzI1IDE4LjI3NzhIMzEuNjY2NFYxOC4wNjJDMzEuNjY2NCAxNy44OTc3IDMxLjYwOSAxNy43Njc0IDMxLjQ5NDMgMTcuNjcwOUMzMS4zNzk2IDE3LjU3MjcgMzEuMjEwNiAxNy41MjM2IDMwLjk4NzEgMTcuNTIzNkMzMC43OTE0IDE3LjUyMzYgMzAuNjI3MiAxNy41NjU5IDMwLjQ5NDcgMTcuNjUwNkMzMC4zNjIzIDE3LjczNTIgMzAuMjk2IDE3LjgzNzcgMzAuMjk2IDE3Ljk1NzhIMjkuNzQ0M0MyOS43NDQzIDE3LjgyMDcgMjkuODAwNyAxNy42ODg3IDI5LjkxMzQgMTcuNTYxN0MzMC4wMjgxIDE3LjQzMyAzMC4xODIzIDE3LjMzMTUgMzAuMzc2MSAxNy4yNTdDMzAuNTcxOSAxNy4xODI1IDMwLjc4NjQgMTcuMTQ1MyAzMS4wMTk4IDE3LjE0NTNDMzEuMzg5NSAxNy4xNDUzIDMxLjY3OTIgMTcuMjI0OCAzMS44ODg4IDE3LjM4NEMzMi4wOTg0IDE3LjU0MTQgMzIuMjA3MiAxNy43NTg5IDMyLjIxNTEgMTguMDM2NlYxOS4zMDEyQzMyLjIxNTEgMTkuNTUzNCAzMi4yNTI3IDE5Ljc1NCAzMi4zMjc4IDE5LjkwM1YxOS45NDM2SDMxLjc1MjRaTTMwLjg0MTggMTkuNTg1NkMzMS4wMTM4IDE5LjU4NTYgMzEuMTc3IDE5LjU0NzUgMzEuMzMxMiAxOS40NzEzQzMxLjQ4NTQgMTkuMzk1MSAzMS41OTcyIDE5LjI5NjEgMzEuNjY2NCAxOS4xNzQyVjE4LjYxMDVIMzEuMjM2M0MzMC41NjQgMTguNjEwNSAzMC4yMjc4IDE4Ljc3ODkgMzAuMjI3OCAxOS4xMTU4QzMwLjIyNzggMTkuMjYzMSAzMC4yODUxIDE5LjM3ODIgMzAuMzk5OCAxOS40NjExQzMwLjUxNDUgMTkuNTQ0MSAzMC42NjE4IDE5LjU4NTYgMzAuODQxOCAxOS41ODU2WlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjRkFFRUUyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0zNS44Njk0IDE5LjYxMUMzNi4wNjUxIDE5LjYxMSAzNi4yMzYyIDE5LjU2MDIgMzYuMzgyNSAxOS40NTg2QzM2LjUyODggMTkuMzU3IDM2LjYwOTkgMTkuMjMwMSAzNi42MjU3IDE5LjA3NzdIMzcuMTQ0OEMzNy4xMzQ5IDE5LjIzNTEgMzcuMDcxNiAxOS4zODUgMzYuOTU1IDE5LjUyNzJDMzYuODM4MyAxOS42Njk0IDM2LjY4MjEgMTkuNzgyOCAzNi40ODYzIDE5Ljg2NzRDMzYuMjkyNSAxOS45NTIxIDM2LjA4NjkgMTkuOTk0NCAzNS44Njk0IDE5Ljk5NDRDMzUuNDMyNCAxOS45OTQ0IDM1LjA4NDMgMTkuODcgMzQuODI1MyAxOS42MjExQzM0LjU2ODIgMTkuMzcwNiAzNC40Mzk3IDE5LjAyODYgMzQuNDM5NyAxOC41OTUyVjE4LjUxNjVDMzQuNDM5NyAxOC4yNDkgMzQuNDk3IDE4LjAxMTIgMzQuNjExNyAxNy44MDI5QzM0LjcyNjQgMTcuNTk0NyAzNC44OTA1IDE3LjQzMyAzNS4xMDQxIDE3LjMxNzlDMzUuMzE5NiAxNy4yMDI4IDM1LjU3MzcgMTcuMTQ1MyAzNS44NjY0IDE3LjE0NTNDMzYuMjI2MyAxNy4xNDUzIDM2LjUyNDkgMTcuMjM3NSAzNi43NjIyIDE3LjQyMkMzNy4wMDE0IDE3LjYwNjYgMzcuMTI5IDE3Ljg0NjEgMzcuMTQ0OCAxOC4xNDA3SDM2LjYyNTdDMzYuNjA5OSAxNy45NjI5IDM2LjUzMDggMTcuODE3MyAzNi4zODg0IDE3LjcwMzlDMzYuMjQ4IDE3LjU4ODggMzYuMDc0IDE3LjUzMTIgMzUuODY2NCAxNy41MzEyQzM1LjU4NzYgMTcuNTMxMiAzNS4zNzExIDE3LjYxNzYgMzUuMjE2OCAxNy43OTAyQzM1LjA2NDYgMTcuOTYxMiAzNC45ODg0IDE4LjIwOTIgMzQuOTg4NCAxOC41MzQzVjE4LjYyMzJDMzQuOTg4NCAxOC45Mzk3IDM1LjA2NDYgMTkuMTgzNSAzNS4yMTY4IDE5LjM1NDVDMzUuMzY5MSAxOS41MjU1IDM1LjU4NjYgMTkuNjExIDM1Ljg2OTQgMTkuNjExWlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjRkFFRUUyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0zOS43NDMxIDE5Ljk0MzZDMzkuNzExNSAxOS44ODk1IDM5LjY4NTggMTkuNzkzIDM5LjY2NiAxOS42NTQxQzM5LjQxMDkgMTkuODgxIDM5LjEwNjQgMTkuOTk0NCAzOC43NTI0IDE5Ljk5NDRDMzguNDM2MSAxOS45OTQ0IDM4LjE3NiAxOS45MTgyIDM3Ljk3MjQgMTkuNzY1OUMzNy43NzA3IDE5LjYxMTggMzcuNjY5OCAxOS40MTcxIDM3LjY2OTggMTkuMTgxOEMzNy42Njk4IDE4Ljg5NTcgMzcuNzk2NCAxOC42NzM5IDM4LjA0OTUgMTguNTE2NUMzOC4zMDQ2IDE4LjM1NzQgMzguNjYyNSAxOC4yNzc4IDM5LjEyMzIgMTguMjc3OEgzOS42NTcxVjE4LjA2MkMzOS42NTcxIDE3Ljg5NzcgMzkuNTk5OCAxNy43Njc0IDM5LjQ4NTEgMTcuNjcwOUMzOS4zNzA0IDE3LjU3MjcgMzkuMjAxMyAxNy41MjM2IDM4Ljk3NzkgMTcuNTIzNkMzOC43ODIxIDE3LjUyMzYgMzguNjE4IDE3LjU2NTkgMzguNDg1NSAxNy42NTA2QzM4LjM1MyAxNy43MzUyIDM4LjI4NjggMTcuODM3NyAzOC4yODY4IDE3Ljk1NzhIMzcuNzM1MUMzNy43MzUxIDE3LjgyMDcgMzcuNzkxNCAxNy42ODg3IDM3LjkwNDEgMTcuNTYxN0MzOC4wMTg4IDE3LjQzMyAzOC4xNzMxIDE3LjMzMTUgMzguMzY2OCAxNy4yNTdDMzguNTYyNiAxNy4xODI1IDM4Ljc3NzIgMTcuMTQ1MyAzOS4wMTA1IDE3LjE0NTNDMzkuMzgwMyAxNy4xNDUzIDM5LjY3IDE3LjIyNDggMzkuODc5NiAxNy4zODRDNDAuMDg5MiAxNy41NDE0IDQwLjE5NzkgMTcuNzU4OSA0MC4yMDU4IDE4LjAzNjZWMTkuMzAxMkM0MC4yMDU4IDE5LjU1MzQgNDAuMjQzNCAxOS43NTQgNDAuMzE4NiAxOS45MDNWMTkuOTQzNkgzOS43NDMxWk0zOC44MzI1IDE5LjU4NTZDMzkuMDA0NiAxOS41ODU2IDM5LjE2NzcgMTkuNTQ3NSAzOS4zMjE5IDE5LjQ3MTNDMzkuNDc2MiAxOS4zOTUxIDM5LjU4NzkgMTkuMjk2MSAzOS42NTcxIDE5LjE3NDJWMTguNjEwNUgzOS4yMjdDMzguNTU0NyAxOC42MTA1IDM4LjIxODUgMTguNzc4OSAzOC4yMTg1IDE5LjExNThDMzguMjE4NSAxOS4yNjMxIDM4LjI3NTkgMTkuMzc4MiAzOC4zOTA2IDE5LjQ2MTFDMzguNTA1MyAxOS41NDQxIDM4LjY1MjYgMTkuNTg1NiAzOC44MzI1IDE5LjU4NTZaXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNGQUVFRTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTQzLjE0MjMgMTcuMTk2SDQzLjY5MVYxOS45NDM2SDQzLjE0MjNWMTcuOTQwMUw0MS42NjIyIDE5Ljk0MzZINDEuMTEzNVYxNy4xOTZINDEuNjYyMlYxOS4yMDIxTDQzLjE0MjMgMTcuMTk2Wk00My4yOTA2IDE2LjE5NTVDNDMuMjkwNiAxNi40MDA0IDQzLjIwODYgMTYuNTY1NCA0My4wNDQ0IDE2LjY5MDdDNDIuODgyMyAxNi44MTQzIDQyLjY2ODcgMTYuODc2MSA0Mi40MDM3IDE2Ljg3NjFDNDIuMTM4OCAxNi44NzYxIDQxLjkyNDIgMTYuODEzNCA0MS43NjAxIDE2LjY4ODJDNDEuNTk2IDE2LjU2MjkgNDEuNTEzOSAxNi4zOTg3IDQxLjUxMzkgMTYuMTk1NUg0MS45NjE4QzQxLjk2MTggMTYuMzE0IDQxLjk5OTQgMTYuNDA3MSA0Mi4wNzQ1IDE2LjQ3NDlDNDIuMTQ5NyAxNi41NDA5IDQyLjI1OTQgMTYuNTczOSA0Mi40MDM3IDE2LjU3MzlDNDIuNTQyMiAxNi41NzM5IDQyLjY0OTkgMTYuNTQwOSA0Mi43MjcxIDE2LjQ3NDlDNDIuODA2MiAxNi40MDg4IDQyLjg0NTcgMTYuMzE1NyA0Mi44NDU3IDE2LjE5NTVINDMuMjkwNlpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI0ZBRUVFMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNNDYuOTU2OCAxNy41NzY5SDQ1Ljg4MDFWMTkuOTQzNkg0NS4zMzEzVjE3LjU3NjlINDQuMjc1NFYxNy4xOTZINDYuOTU2OFYxNy41NzY5WlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjRkFFRUUyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk00OS40MjQ2IDE5Ljk0MzZDNDkuMzkyOSAxOS44ODk1IDQ5LjM2NzIgMTkuNzkzIDQ5LjM0NzUgMTkuNjU0MUM0OS4wOTI0IDE5Ljg4MSA0OC43ODc4IDE5Ljk5NDQgNDguNDMzOSAxOS45OTQ0QzQ4LjExNzUgMTkuOTk0NCA0Ny44NTc1IDE5LjkxODIgNDcuNjUzOCAxOS43NjU5QzQ3LjQ1MjEgMTkuNjExOCA0Ny4zNTEyIDE5LjQxNzEgNDcuMzUxMiAxOS4xODE4QzQ3LjM1MTIgMTguODk1NyA0Ny40Nzc4IDE4LjY3MzkgNDcuNzMwOSAxOC41MTY1QzQ3Ljk4NiAxOC4zNTc0IDQ4LjM0MzkgMTguMjc3OCA0OC44MDQ2IDE4LjI3NzhINDkuMzM4NlYxOC4wNjJDNDkuMzM4NiAxNy44OTc3IDQ5LjI4MTIgMTcuNzY3NCA0OS4xNjY1IDE3LjY3MDlDNDkuMDUxOCAxNy41NzI3IDQ4Ljg4MjggMTcuNTIzNiA0OC42NTkzIDE3LjUyMzZDNDguNDYzNSAxNy41MjM2IDQ4LjI5OTQgMTcuNTY1OSA0OC4xNjY5IDE3LjY1MDZDNDguMDM0NCAxNy43MzUyIDQ3Ljk2ODIgMTcuODM3NyA0Ny45NjgyIDE3Ljk1NzhINDcuNDE2NUM0Ny40MTY1IDE3LjgyMDcgNDcuNDcyOSAxNy42ODg3IDQ3LjU4NTYgMTcuNTYxN0M0Ny43MDAzIDE3LjQzMyA0Ny44NTQ1IDE3LjMzMTUgNDguMDQ4MyAxNy4yNTdDNDguMjQ0MSAxNy4xODI1IDQ4LjQ1ODYgMTcuMTQ1MyA0OC42OTE5IDE3LjE0NTNDNDkuMDYxNyAxNy4xNDUzIDQ5LjM1MTQgMTcuMjI0OCA0OS41NjEgMTcuMzg0QzQ5Ljc3MDYgMTcuNTQxNCA0OS44Nzk0IDE3Ljc1ODkgNDkuODg3MyAxOC4wMzY2VjE5LjMwMTJDNDkuODg3MyAxOS41NTM0IDQ5LjkyNDkgMTkuNzU0IDUwIDE5LjkwM1YxOS45NDM2SDQ5LjQyNDZaTTQ4LjUxNCAxOS41ODU2QzQ4LjY4NiAxOS41ODU2IDQ4Ljg0OTEgMTkuNTQ3NSA0OS4wMDM0IDE5LjQ3MTNDNDkuMTU3NiAxOS4zOTUxIDQ5LjI2OTMgMTkuMjk2MSA0OS4zMzg2IDE5LjE3NDJWMTguNjEwNUg0OC45MDg1QzQ4LjIzNjEgMTguNjEwNSA0Ny45IDE4Ljc3ODkgNDcuOSAxOS4xMTU4QzQ3LjkgMTkuMjYzMSA0Ny45NTczIDE5LjM3ODIgNDguMDcyIDE5LjQ2MTFDNDguMTg2NyAxOS41NDQxIDQ4LjMzNCAxOS41ODU2IDQ4LjUxNCAxOS41ODU2WlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjRkFFRUUyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5PVwiMC41NlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNNTAuNzQ2MyAxLjg1Njk0QzUwLjYxOTQgMS40NzA2MiA1MC4zNjU3IDEuMTcwMTQgNTAuMDY5NyAwLjkxMjU5M0M0OS43MzEzIDAuNjU1MDQzIDQ5LjM1MDggMC40NDA0MTYgNDguOTcwMiAwLjMxMTY0MUM0OC40NjI3IDAuMTgyODY2IDQ3Ljk1NTIgMC4xMzk5NCA0Ny40NDc4IDAuMTM5OTRIMzguOTkwMVY4LjUxMDM0TDMzLjUzNDggMC4xMzk5NEgzMS43MTY0TDI2LjI2MTIgOC41MTAzNEMyNi4yNjEyIDguMzgxNTcgMjYuMzAzNSA4LjI1Mjc5IDI2LjMwMzUgOC4wODEwOVY2LjgzNjI2QzI2LjMwMzUgNi40NDk5MyAyNi4yNjEyIDYuMDYzNjEgMjYuMTM0MyA1LjcyMDIxQzI2LjAwNzUgNS4zMzM4OCAyNS43NTM3IDUuMDMzNDEgMjUuNDU3NyA0Ljc3NTg2QzI1LjExOTQgNC41MTgzIDI0LjczODggNC4zMDM2OCAyNC4zNTgyIDQuMTc0OUMyMy44NTA3IDQuMDQ2MTMgMjMuMzQzMyA0LjAwMzIgMjIuODM1OCA0LjAwMzJIMTcuMTY5MkMxNi4zNjU3IDQuMDAzMiAxNi4zNjU3IDMuNjU5OCAxNi4zNjU3IDMuNDg4MVYyLjg4NzE1QzE2LjM2NTcgMi43MTU0NSAxNi4zNjU3IDIuMzcyMDUgMTcuMTY5MiAyLjM3MjA1SDI1Ljg4MDZWMC4wMTExNjYzSDE3LjE2OTJDMTYuNjYxNyAtMC4wMzE3NTg4IDE2LjExMTkgMC4wNTQwODg4IDE1LjY0NjggMC4xODI4NjRDMTUuMjIzOSAwLjI2ODcxNCAxNC44NDMzIDAuNDgzMzQxIDE0LjU0NzMgMC43ODM4MTdDMTQuMjUxMiAxLjA0MTM3IDEzLjk5NzUgMS4zNDE4NSAxMy44NzA2IDEuNzI4MTdDMTMuNzQzOCAyLjA3MTU3IDEzLjcwMTUgMi40NTc5IDEzLjcwMTUgMi44NDQyMlYzLjQ0NTE4QzEzLjcwMTUgMy44MzE1IDEzLjc0MzggNC4yMTc4MyAxMy44NzA2IDQuNTYxMjNDMTMuOTk3NSA0Ljk0NzU2IDE0LjI1MTIgNS4yNDgwMyAxNC41NDczIDUuNTA1NThDMTQuODg1NiA1Ljc2MzEzIDE1LjI2NjIgNS45Nzc3NiAxNS42NDY4IDYuMTA2NTNDMTYuMTU0MiA2LjIzNTMxIDE2LjY2MTcgNi4yNzgyMyAxNy4xNjkyIDYuMjc4MjNIMjIuOTIwNEMyMy43MjM5IDYuMjc4MjMgMjMuNzIzOSA2LjYyMTYzIDIzLjcyMzkgNi43OTMzM1Y4LjAzODE3QzIzLjcyMzkgOC4yMDk4NyAyMy43MjM5IDguNTUzMjcgMjIuOTIwNCA4LjU1MzI3SDE0LjQ2MjdMOC45NjUxOCAwLjA5NzAxNTNINy4xNDY3N0wwIDExSDMuMDg3MDdMNy45MDc5NyAzLjM1OTMyTDEyLjcyODkgMTFIMjcuNzgzNkwzMi42ODkxIDMuMzU5MzJMMzcuNTEgMTFINDEuNzgxMVY3LjMwODQ0SDQ3LjUzMjNDNDguMDM5OCA3LjM1MTM2IDQ4LjU4OTYgNy4yNjU1MSA0OS4wNTQ3IDcuMTM2NzRDNDkuNDc3NiA3LjA1MDg5IDQ5Ljg1ODIgNi44MzYyNiA1MC4xNTQyIDYuNTM1NzhDNTAuNDUwMyA2LjI3ODIzIDUwLjcwNCA1Ljk3Nzc2IDUwLjgzMDkgNS41OTE0M0M1MC45NTc3IDUuMjQ4MDMgNTEgNC44NjE3IDUxIDQuNDc1MzhWMy4wMTU5M0M1MSAyLjYyOTYgNTAuODczMSAyLjI0MzI3IDUwLjc0NjMgMS44NTY5NFpNNDguMjUxMiAyLjkzMDA3VjQuNDMyNDVDNDguMjUxMiA0LjYwNDE1IDQ4LjI1MTIgNC45NDc1NiA0Ny40NDc4IDQuOTQ3NTZINDEuNjk2NVYyLjUwMDgySDQ3LjQ0NzhDNDguMjUxMiAyLjUwMDgyIDQ4LjI1MTIgMi43NTgzNyA0OC4yNTEyIDIuOTMwMDdaXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNGQUVFRTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChzLmNvcnApfT5cclxuICAgICAgICAgICAgICAgezxMb2dvIC8+fVxyXG4gICAgICAgICAgICAgICA8c3Bhbj7CqSBQdHkgTHRkIGFuZCBXaWxkIEdhbWUgUmVzb3VyY2VzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICA8c3Bhbj5BdXN0cmFsaWEgUHR5IEx0ZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgPHNwYW4+VGVybXMgJiBDb25kaXRpb25zPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHMgZnJvbSBcIi4vSGVhZGVyLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBnIGZyb20gXCJzcmMvc3R5bGVzL01haW4ubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgTG9nbyB9IGZyb20gXCIuLi8uLi9TVkcvSGVhZGVyTG9nb1NWR1wiO1xyXG5cclxuY29uc3QgaGVhZGVyTGlua3MgPSBbXHJcbiAgIHsgdGl0bGU6IFwi0KLQvtGH0LrQuCDQv9GA0L7QtNCw0LZcIiwgbGluazogXCIvXCIgfSxcclxuICAgeyB0aXRsZTogXCLQlNC+0YHRgtCw0LLQutCwXCIsIGxpbms6IFwiL1wiIH0sXHJcbiAgIHsgdGl0bGU6IFwi0JLQvtC/0YDQvtGB0YtcIiwgbGluazogXCIvXCIgfSxcclxuICAgeyBsb2dvOiB0cnVlIH0sXHJcbiAgIHsgdGl0bGU6IFwi0KTQtdGA0LzQsFwiLCBsaW5rOiBcIi9cIiB9LFxyXG4gICB7IHRpdGxlOiBcItCf0YDQvtC00YPQutGG0LjRj1wiLCBsaW5rOiBcIi9wcm9kdWN0c1wiIH0sXHJcbiAgIHsgdGl0bGU6IFwi0JLQvtC50YLQuFwiLCBsaW5rOiBcIi9cIiB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlciA9ICh7cHJvbW99KSA9PiB7XHJcbiAgIHJldHVybiAoXHJcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtjbHN4KHMuaGVhZGVyKX0+XHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KGcud3JhcHBlcil9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChzLmNvbnRhaW5lciwgcHJvbW8gPyBzLmJvcmRlcl9hY2NlbnQgOiAnJyl9PlxyXG4gICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17Y2xzeChzLm5hdil9PlxyXG4gICAgICAgICAgICAgICAgICB7aGVhZGVyTGlua3MubWFwKChlbCwgaSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgZWwubG9nbyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Nsc3gocy5sb2dvLCBwcm9tbyA/IHMubG9nb19hY2NlbnQgOiAnJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9nbyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17ZWwubGlua30ga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjbHN4KHMubGluaywgcHJvbW8gPyBzLmxpbmtfYWNjZW50IDogJycpfT57ZWwudGl0bGV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KHMuY29udHJvbCl9PlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e2Nsc3gocy5idXR0b24sIHByb21vID8gcy5idXR0b25fYWNjZW50IDogJycpfT5cclxuICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMThcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDE4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTEwLjA0OTMgMy42MzQyNEwxMC40Njg2IDQuMjgxOTZMMTAuODg4NSAzLjYzNDZDMTIuMzgwMyAxLjMzNDUzIDE0LjQ1NzggMC44ODM2MzEgMTYuMTM3NyAxLjUyODk1QzE3Ljg0OTMgMi4xODY0NSAxOS4yNSA0LjAxOTc2IDE5LjI1IDYuNTEwNTFDMTkuMjUgNy4zNzAzMiAxOC43OTI1IDguNDI0MTEgMTguMDAwNiA5LjU4MTQxQzE3LjIxOSAxMC43MjM4IDE2LjE1OTMgMTEuODk5MSAxNS4wNiAxMi45ODgyQzEzLjk2MjkgMTQuMDc1MiAxMi44Mzg1IDE1LjA2NDUgMTEuOTM0NyAxNS44MzYyQzExLjYxMDEgMTYuMTEzNCAxMS4zMTU1IDE2LjM2MTEgMTEuMDYwMSAxNi41NzU5QzEwLjk1OTQgMTYuNjYwNiAxMC44NjQ5IDE2Ljc0MDEgMTAuNzc2OSAxNi44MTQ0QzEwLjY2NCAxNi45MDk2IDEwLjU1OTIgMTYuOTk4NCAxMC40NjU4IDE3LjA3ODlDMTAuMzY3MSAxNi45OTY0IDEwLjI1NjEgMTYuOTA1NSAxMC4xMzY5IDE2LjgwODZDMTAuMDA5NyAxNi43MDUxIDkuODcwNDIgMTYuNTkyNiA5LjcxOTY1IDE2LjQ3MDhDOS40ODM1OCAxNi4yODAxIDkuMjE5MyAxNi4wNjY2IDguOTI4ODUgMTUuODI5M0M3Ljk4Mzc0IDE1LjA1NyA2LjgwNDQ1IDE0LjA2NzMgNS42NTIzNCAxMi45Nzk4QzQuNDk3OSAxMS44OTAxIDMuMzgzODQgMTAuNzE0NCAyLjU2MTgzIDkuNTcxNzdDMS43MjgwMSA4LjQxMjc0IDEuMjUgNy4zNjI1NiAxLjI1IDYuNTEwNTFDMS4yNSA0LjAxODYgMi43NDI4NiAyLjE3NzY4IDQuNTczOTEgMS41MTcxNkM2LjM4MTYzIDAuODY1MDYyIDguNTY3NzYgMS4zNDU4MSAxMC4wNDkzIDMuNjM0MjRaXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiI0ZBRUVFMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtjbHN4KHMuYnV0dG9uKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxNSAyMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgeD1cIjAuNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHk9XCI2LjVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjE0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCIjRkZGM0U3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMiAxMFY1LjVDMTIgMy4wMTQ3MiA5Ljk4NTI4IDEgNy41IDFWMUM1LjAxNDcyIDEgMyAzLjAxNDcyIDMgNS41VjEwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiI0ZGRjNFN1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBhbGxTdGF0dXMsIGFsbFRhc3RlcyB9IGZyb20gXCJzcmMvY29uc3RhbnRzXCI7XHJcblxyXG5cclxuaW1wb3J0IHMgZnJvbSBcIi4vUHJvZHVjdC5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgZyBmcm9tIFwic3JjL3N0eWxlcy9NYWluLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvZHVjdCA9ICh7XHJcbiAgIHN0YXR1cyxcclxuICAgaW1hZ2UsXHJcbiAgIG5hbWUsXHJcbiAgIGFkZGl0aW9uLFxyXG4gICB3ZWlnaHQsXHJcbiAgIHByaWNlLFxyXG4gICBsaW5rLFxyXG4gICB0YXN0ZXMsXHJcbiAgIGFkZGl0aW9uQ2xhc3MsXHJcbiAgIGlkXHJcbn0pID0+IHtcclxuICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3gocy5jYXJkLCBhZGRpdGlvbkNsYXNzICYmIHNbYWRkaXRpb25DbGFzc10pfT5cclxuICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtjbHN4KHMuYWRkKX0+XHJcbiAgICAgICAgICAgICtcclxuICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xzeChnW2FsbFN0YXR1c1tzdGF0dXNdLmNsYXNzXSl9PlxyXG4gICAgICAgICAgICB7YWxsU3RhdHVzW3N0YXR1c10udGl0bGV9XHJcbiAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgPGltZyBzcmM9e2ltYWdlfSBhbHQ9e25hbWV9IGNsYXNzTmFtZT17Y2xzeChzLmltYWdlKX0gLz5cclxuICAgICAgICAgPGgzIGNsYXNzTmFtZT17Y2xzeChzLm5hbWUpfT57bmFtZX08L2gzPlxyXG4gICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Nsc3gocy5hZGRpdGlvbil9PnthZGRpdGlvbn08L3NwYW4+XHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KHMuaW5mbyl9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChzLndlbGwpfT5cclxuICAgICAgICAgICAgICAge3Rhc3Rlcz8ubGVuZ3RoICYmIHRhc3Rlcy5tYXAoKHRhc3RlKSA9PiBhbGxUYXN0ZXNbdGFzdGVdKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xzeChzLndlaWdodCl9Pnt3ZWlnaHR9PC9zcGFuPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPGgzIGNsYXNzTmFtZT17Y2xzeChzLnByaWNlKX0+e3ByaWNlfSDRgNGD0LEuPC9oMz5cclxuICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9kdWN0cy8ke2lkfWB9PlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Nsc3gocy5tb3JlKX0+0J/QvtC00YDQvtCx0L3QtdC1PC9hPlxyXG4gICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tIFwic3dpcGVyL3JlYWN0XCI7XHJcbmltcG9ydCBTd2lwZXJDb3JlLCB7IE5hdmlnYXRpb24gfSBmcm9tIFwic3dpcGVyXCI7XHJcbmltcG9ydCB7IFNsaWRlck5hdiB9IGZyb20gXCJAY29tcG9uZW50cy9Db21tb24vU2xpZGVyL1NsaWRlck5hdi9TbGlkZXJOYXZcIjtcclxuXHJcbmltcG9ydCBzIGZyb20gXCIuL1NsaWRlci5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNsaWRlciA9ICh7IGNoaWxkcmVuLCBzbGlkZXMsIHBhcmFtcywgdGl0bGUgfSkgPT4ge1xyXG4gICBTd2lwZXJDb3JlLnVzZShbTmF2aWdhdGlvbl0pO1xyXG4gICBjb25zdCBwcmV2UmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG4gICBjb25zdCBuZXh0UmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG4gICBjb25zdCBbY3VycmVudENvdW50LCBzZXRDdXJyZW50Q291bnRdID0gUmVhY3QudXNlU3RhdGUoMSk7XHJcbiAgIGNvbnN0IGFsbENvdW50ID0gTWF0aC5jZWlsKHNsaWRlcy5sZW5ndGggLyBwYXJhbXMuc2xpZGVyLnNsaWRlc1BlclZpZXcpO1xyXG4gICBjb25zdCB7c2xpZGVyQ2xhc3MsIHNsaWRlQ2xhc3MsIC4uLnJlc3RQYXJhbXN9ID0gcGFyYW1zLnNsaWRlcjtcclxuICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICAgPFNsaWRlck5hdlxyXG4gICAgICAgICAgICB0aXRsZT17dGl0bGV9XHJcbiAgICAgICAgICAgIHByZXY9e3ByZXZSZWZ9XHJcbiAgICAgICAgICAgIG5leHQ9e25leHRSZWZ9XHJcbiAgICAgICAgICAgIGFsbENvdW50PXthbGxDb3VudH1cclxuICAgICAgICAgICAgY3VycmVudENvdW50PXtjdXJyZW50Q291bnR9XHJcbiAgICAgICAgICAgIHBhcmFtcz17cGFyYW1zLm5hdn1cclxuICAgICAgICAgLz5cclxuICAgICAgICAgPFN3aXBlclxyXG4gICAgICAgICAgICBvbkluaXQ9eyhzd2lwZXIpID0+IHtcclxuICAgICAgICAgICAgICAgc3dpcGVyLnBhcmFtcy5uYXZpZ2F0aW9uLnByZXZFbCA9IHByZXZSZWYuY3VycmVudDtcclxuICAgICAgICAgICAgICAgc3dpcGVyLnBhcmFtcy5uYXZpZ2F0aW9uLm5leHRFbCA9IG5leHRSZWYuY3VycmVudDtcclxuICAgICAgICAgICAgICAgc3dpcGVyLm5hdmlnYXRpb24udXBkYXRlKCk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG5hdmlnYXRpb25cclxuICAgICAgICAgICAgb25TbGlkZUNoYW5nZT17KGUpID0+IHNldEN1cnJlbnRDb3VudCgrK2Uuc25hcEluZGV4KX1cclxuICAgICAgICAgICAgc3BlZWQ9ezUwMH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzW3NsaWRlckNsYXNzXX1cclxuICAgICAgICAgICAgey4uLnJlc3RQYXJhbXN9XHJcbiAgICAgICAgID5cclxuICAgICAgICAgICAge3NsaWRlcy5tYXAoKHNsaWRlLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBrZXk9e2l9IGNsYXNzTmFtZT17c1tzbGlkZUNsYXNzXX0+XHJcbiAgICAgICAgICAgICAgICAgIHtSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHsgLi4uc2xpZGUgfSl9XHJcbiAgICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICA8L1N3aXBlcj5cclxuICAgICAgPC8+XHJcbiAgICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcclxuaW1wb3J0IHMgZnJvbSBcIi4vU2xpZGVyTmF2Lm1vZHVsZS5zY3NzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU2xpZGVyTmF2ID0gKHtcclxuICAgdGl0bGUsXHJcbiAgIHByZXYsXHJcbiAgIG5leHQsXHJcbiAgIGFsbENvdW50LFxyXG4gICBjdXJyZW50Q291bnQsXHJcbiAgIHBhcmFtcyxcclxufSkgPT4ge1xyXG4gICBjb25zdCB7IGNvdW50ZXIgfSA9IHBhcmFtcztcclxuICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3gocy5oZWFkZXIpfT5cclxuICAgICAgICAgPGgyIGNsYXNzTmFtZT17Y2xzeChzLnRpdGxlKX0+e3RpdGxlfTwvaDI+XHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KHMuY29udGFpbmVyKX0+XHJcbiAgICAgICAgICAgIHtjb3VudGVyICYmIChcclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3gocy5jb3VudGVyKX0+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xzeChzLmNvdW50ZXJfX2N1cnJlbnQpfT5cclxuICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRDb3VudCA8IDEwID8gXCIwXCIgKyBjdXJyZW50Q291bnQgOiBjdXJyZW50Q291bnR9XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgL1xyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Nsc3gocy5jb3VudGVyX19hbGwpfT5cclxuICAgICAgICAgICAgICAgICAgICAge2FsbENvdW50IDwgMTAgPyBcIjBcIiArIGFsbENvdW50IDogYWxsQ291bnR9XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChzLm5hdil9PlxyXG4gICAgICAgICAgICAgICA8YnV0dG9uIHJlZj17cHJldn0gY2xhc3NOYW1lPXtjbHN4KHMucHJldil9PlxyXG4gICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiOVwiXHJcbiAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE2XCJcclxuICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA5IDE2XCJcclxuICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTYuNjU3MTUgMC45Mjg4OEwwLjI5MzE5MSA3LjI5Mjg0Qy0wLjA5NzMzMzMgNy42ODMzNyAtMC4wOTczMzMyIDguMzE2NTMgMC4yOTMxOTEgOC43MDcwNUw2LjY1NzE1IDE1LjA3MUM3LjA0NzY4IDE1LjQ2MTUgNy42ODA4NCAxNS40NjE1IDguMDcxMzcgMTUuMDcxQzguNDYxODkgMTQuNjgwNSA4LjQ2MTg5IDE0LjA0NzMgOC4wNzEzNyAxMy42NTY4TDIuNDE0NTEgNy45OTk5NUw4LjA3MTM2IDIuMzQzMDlDOC40NjE4OSAxLjk1MjU3IDguNDYxODkgMS4zMTk0IDguMDcxMzYgMC45Mjg4OEM3LjY4MDg0IDAuNTM4MzU1IDcuMDQ3NjggMC41MzgzNTUgNi42NTcxNSAwLjkyODg4WlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjMTg0MTQwXCJcclxuICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICA8YnV0dG9uIHJlZj17bmV4dH0gY2xhc3NOYW1lPXtjbHN4KHMubmV4dCl9PlxyXG4gICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiOVwiXHJcbiAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE2XCJcclxuICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA5IDE2XCJcclxuICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTguNzA3MTEgOC43MDcxMUM5LjA5NzYzIDguMzE2NTggOS4wOTc2MyA3LjY4MzQyIDguNzA3MTEgNy4yOTI4OUwyLjM0MzE1IDAuOTI4OTMyQzEuOTUyNjIgMC41Mzg0MDcgMS4zMTk0NiAwLjUzODQwNyAwLjkyODkzMyAwLjkyODkzMkMwLjUzODQwOCAxLjMxOTQ2IDAuNTM4NDA4IDEuOTUyNjIgMC45Mjg5MzMgMi4zNDMxNUw2LjU4NTc5IDhMMC45Mjg5MzIgMTMuNjU2OUMwLjUzODQwNyAxNC4wNDc0IDAuNTM4NDA3IDE0LjY4MDUgMC45Mjg5MzIgMTUuMDcxMUMxLjMxOTQ2IDE1LjQ2MTYgMS45NTI2MiAxNS40NjE2IDIuMzQzMTUgMTUuMDcxMUw4LjcwNzExIDguNzA3MTFaTTcgOUw4IDlMOCA3TDcgN0w3IDlaXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiMxODQxNDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMb2dvID0gKCkgPT4ge1xyXG4gICByZXR1cm4gKFxyXG4gICAgICA8c3ZnXHJcbiAgICAgICAgIHdpZHRoPVwiMTAwXCJcclxuICAgICAgICAgaGVpZ2h0PVwiMzZcIlxyXG4gICAgICAgICB2aWV3Qm94PVwiMCAwIDEwMCAzNlwiXHJcbiAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgID5cclxuICAgICAgICAgPGcgY2xpcFBhdGg9XCJ1cmwoI2NsaXAwKVwiPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICBkPVwiTTUuNzE5MzcgMzUuMDQ3NEM1LjkwMzg3IDM1LjIxMTcgNS45OTYxMiAzNS4zNzU5IDUuOTk2MTIgMzUuNTczQzUuOTk2MTIgMzUuODAyOSA1Ljc4MDg3IDM1Ljk2NzEgNS41MDQxMSAzNS45NjcxQzUuMzE5NjEgMzUuOTY3MSA1LjEwNDM2IDM1Ljg2ODYgNC45MTk4NiAzNS43MDQ0TDEuOTM3MDggMzIuOTQ1MlYzNS40NDE2QzEuOTM3MDggMzUuNzM3MiAxLjY5MTA4IDM1Ljk2NzEgMS4zNTI4MiAzNS45NjcxQzEuMDQ1MzIgMzUuOTY3MSAwLjc5OTMxNiAzNS43NzAxIDAuNzk5MzE2IDM1LjQ0MTZWMzAuMTIwNEMwLjc5OTMxNiAyOS44MjQ4IDEuMDQ1MzIgMjkuNjI3NyAxLjM1MjgyIDI5LjYyNzdDMS43MjE4MyAyOS42Mjc3IDEuOTM3MDggMjkuODI0OCAxLjkzNzA4IDMwLjE1MzNWMzIuMTU2OUw0LjU1MDg1IDI5LjkyMzNDNC43OTY4NiAyOS43MjYzIDQuOTUwNjEgMjkuNjI3NyA1LjEzNTExIDI5LjYyNzdDNS40NDI2MSAyOS42Mjc3IDUuNjI3MTEgMjkuODI0OCA1LjYyNzExIDMwLjEyMDRDNS42MjcxMSAzMC4yNTE4IDUuNTM0ODYgMzAuMzgzMiA1LjQxMTg2IDMwLjUxNDZMMi44NTk1OSAzMi41MTgyTDUuNzE5MzcgMzUuMDQ3NFpcIlxyXG4gICAgICAgICAgICAgICBmaWxsPVwiI0ZGRjNFN1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgIGQ9XCJNOS41OTQwNyAyOS42Mjc3QzcuNzQ5MDYgMjkuNjI3NyA2LjUxOTA0IDMxLjAwNzMgNi41MTkwNCAzMi44MTM5QzYuNTE5MDQgMzQuNDg5IDcuNjg3NTUgMzYgOS41OTQwNyAzNkMxMS41MDA2IDM2IDEyLjY2OTEgMzQuNDg5IDEyLjY2OTEgMzIuODEzOUMxMi42NjkxIDMxLjEzODcgMTEuNTYyMSAyOS42Mjc3IDkuNTk0MDcgMjkuNjI3N1pNOS41NjMzMiAzNS4xMTMxQzguMjEwMzEgMzUuMTEzMSA3LjY1NjggMzMuODk3OCA3LjY1NjggMzIuODEzOUM3LjY1NjggMzEuNjk3MSA4LjI0MTA2IDMwLjUxNDYgOS41OTQwNyAzMC41MTQ2QzEwLjkxNjMgMzAuNTE0NiAxMS41MDA2IDMxLjY2NDIgMTEuNTAwNiAzMi44MTM5QzExLjUzMTMgMzMuOTMwNiAxMS4wMDg2IDM1LjExMzEgOS41NjMzMiAzNS4xMTMxWlwiXHJcbiAgICAgICAgICAgICAgIGZpbGw9XCIjRkZGM0U3XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgZD1cIk0xNy41ODkzIDMyLjU4MzlDMTguNDE5NiAzMi4zNTQgMTguODUwMSAzMS44NjEzIDE4Ljg1MDEgMzEuMjA0NEMxOC44NTAxIDMwLjE4NjEgMTcuODA0NiAyOS42Mjc3IDE2LjUxMzEgMjkuNjI3N0MxNS4yNTIzIDI5LjYyNzcgMTMuODY4NSAzMC4wNTQ3IDEzLjg2ODUgMzAuNjEzMUMxMy44Njg1IDMwLjk0MTYgMTQuMTE0NiAzMS4xMDU4IDE0LjQ1MjggMzEuMTA1OEMxNC45NDQ4IDMxLjEwNTggMTUuMDY3OCAzMC41NDc0IDE2LjQyMDggMzAuNTQ3NEMxNy4xNTg4IDMwLjU0NzQgMTcuNzEyMyAzMC42Nzg4IDE3LjcxMjMgMzEuMzM1N0MxNy43MTIzIDMyLjA1ODQgMTYuOTQzNiAzMi4yMjI2IDE2LjI2NzEgMzIuMjIyNkgxNS42MjEzQzE1LjI1MjMgMzIuMjIyNiAxNS4xNjAxIDMyLjQ1MjUgMTUuMTYwMSAzMi42ODI1QzE1LjE2MDEgMzIuODc5NSAxNS4zNzUzIDMzLjA0MzggMTUuNjIxMyAzMy4wNDM4SDE2LjI5NzhDMTcuMTI4MSAzMy4wNDM4IDE3LjkyNzYgMzMuMjA4IDE3LjkyNzYgMzMuOTYzNUMxNy45Mjc2IDM0LjkxNiAxNi45MTI4IDM1LjE0NiAxNi4yMDU2IDM1LjE0NkMxNS4wMDYzIDM1LjE0NiAxNC42OTg4IDM0LjM1NzYgMTQuMTE0NiAzNC4zNTc2QzEzLjgwNyAzNC4zNTc2IDEzLjU5MTggMzQuNjUzMyAxMy41OTE4IDM0Ljg1MDNDMTMuNTkxOCAzNS40MDg3IDE1LjE5MDggMzYuMDMyOCAxNi4yOTc4IDM2LjAzMjhDMTguMTEyMSAzNi4wMzI4IDE5LjA5NjEgMzUuMDgwMyAxOS4wOTYxIDM0LjA5NDlDMTkuMDY1MyAzMy4xNDIzIDE4LjI5NjYgMzIuNzE1MyAxNy41ODkzIDMyLjU4MzlaXCJcclxuICAgICAgICAgICAgICAgZmlsbD1cIiNGRkYzRTdcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICBkPVwiTTIyLjg0NzIgMzEuOTI3SDIxLjUyNVYzMC4xODYxQzIxLjUyNSAyOS44MjQ4IDIxLjI0ODIgMjkuNjI3NyAyMC45NDA3IDI5LjYyNzdDMjAuNjMzMiAyOS42Mjc3IDIwLjM4NzIgMjkuODI0OCAyMC4zODcyIDMwLjE4NjFWMzUuMzQzQzIwLjM4NzIgMzUuNzA0NCAyMC41NDEgMzUuOTM0MyAyMS4wNjM3IDM1LjkzNDNIMjIuOTA4N0MyNC40NzcgMzUuOTM0MyAyNS43OTkzIDM1LjM3NTkgMjUuNzk5MyAzMy44OTc4QzI1Ljc2ODUgMzIuMjU1NSAyNC4wNzcyIDMxLjkyNyAyMi44NDcyIDMxLjkyN1pNMjIuNjMyIDM1LjA0NzRIMjEuNTI1VjMyLjgxMzlIMjIuNjkzNUMyMy43Njk3IDMyLjgxMzkgMjQuNTM4NSAzMy4wMTA5IDI0LjUzODUgMzMuODk3OEMyNC41Mzg1IDM0Ljg1MDMgMjMuNTU0NSAzNS4wNDc0IDIyLjYzMiAzNS4wNDc0WlwiXHJcbiAgICAgICAgICAgICAgIGZpbGw9XCIjRkZGM0U3XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgZD1cIk0yNi45MzczIDI5LjYyNzdDMjYuNTk5IDI5LjYyNzcgMjYuMzgzOCAyOS44NTc2IDI2LjM4MzggMzAuMTg2MVYzNS40NzQ0QzI2LjM4MzggMzUuNzcwMSAyNi42Mjk4IDM2IDI2LjkzNzMgMzZDMjcuMjc1NSAzNiAyNy41MjE1IDM1Ljc3MDEgMjcuNTIxNSAzNS40NzQ0VjMwLjE1MzNDMjcuNTIxNSAyOS44NTc2IDI3LjI3NTUgMjkuNjI3NyAyNi45MzczIDI5LjYyNzdaXCJcclxuICAgICAgICAgICAgICAgZmlsbD1cIiNGRkYzRTdcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICBkPVwiTTM3LjE3NzQgMjkuNjI3N0MzNi44MzkxIDI5LjYyNzcgMzYuNjU0NiAyOS43OTE5IDM2LjI4NTYgMzAuMjg0N0wzMy4zMzM2IDM0LjEyNzdWMzAuMTg2MUMzMy4zMzM2IDI5LjgyNDggMzMuMDU2OCAyOS42Mjc3IDMyLjc0OTMgMjkuNjI3N0MzMi40NDE4IDI5LjYyNzcgMzIuMTk1OCAyOS44MjQ4IDMyLjE5NTggMzAuMTg2MVYzNS4zNzU5QzMyLjE5NTggMzUuOTM0MyAzMi40NDE4IDM2LjAzMjggMzIuNzQ5MyAzNi4wMzI4QzMzLjA4NzYgMzYuMDMyOCAzMy4zMzM2IDM1LjgwMjkgMzMuODI1NiAzNS4xNDZMMzYuNTYyMyAzMS41MzI4VjM1LjUwNzNDMzYuNTYyMyAzNS44MDI5IDM2LjcxNjEgMzYgMzcuMTE1OSAzNkMzNy41MTU2IDM2IDM3LjcwMDEgMzUuODM1NyAzNy43MDAxIDM1LjQ3NDRWMzAuMTg2MUMzNy43MDAxIDI5Ljg1NzYgMzcuNTQ2NCAyOS42Mjc3IDM3LjE3NzQgMjkuNjI3N1pcIlxyXG4gICAgICAgICAgICAgICBmaWxsPVwiI0ZGRjNFN1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgIGQ9XCJNNDQuNDk1OCAzMi41MTgyTDQ2Ljk4NjYgMzAuNTE0NkM0Ny4xNDAzIDMwLjM4MzIgNDcuMjAxOCAzMC4yODQ3IDQ3LjIwMTggMzAuMTIwNEM0Ny4yMDE4IDI5LjgyNDggNDcuMDE3MyAyOS42Mjc3IDQ2LjcwOTggMjkuNjI3N0M0Ni41MjUzIDI5LjYyNzcgNDYuMzcxNiAyOS42OTM0IDQ2LjEyNTYgMjkuOTIzM0w0My41MTE4IDMyLjE1NjlWMzAuMTUzM0M0My41MTE4IDI5LjgyNDggNDMuMjk2NSAyOS42Mjc3IDQyLjkyNzUgMjkuNjI3N0M0Mi42MiAyOS42Mjc3IDQyLjM3NCAyOS44MjQ4IDQyLjM3NCAzMC4xMjA0VjM1LjQ3NDRDNDIuMzc0IDM1LjgwMjkgNDIuNjUwOCAzNiA0Mi45Mjc1IDM2QzQzLjI2NTggMzYgNDMuNTExOCAzNS43NzAxIDQzLjUxMTggMzUuNDc0NFYzMi45NzgxTDQ2LjQ5NDYgMzUuNzM3MkM0Ni42NzkxIDM1LjkwMTQgNDYuODk0MyAzNiA0Ny4wNzg4IDM2QzQ3LjM1NTYgMzYgNDcuNTcwOCAzNS44MzU4IDQ3LjU3MDggMzUuNjA1OEM0Ny41NzA4IDM1LjQwODcgNDcuNDc4NiAzNS4yNDQ1IDQ3LjI5NDEgMzUuMDgwM0w0NC40OTU4IDMyLjUxODJaXCJcclxuICAgICAgICAgICAgICAgZmlsbD1cIiNGRkYzRTdcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICBkPVwiTTUxLjIyOTggMjkuNjI3N0M0OS4zODQ4IDI5LjYyNzcgNDguMTU0OCAzMS4wMDczIDQ4LjE1NDggMzIuODEzOUM0OC4xNTQ4IDM0LjQ4OSA0OS4zMjMzIDM2IDUxLjIyOTggMzZDNTMuMTM2MyAzNiA1NC4zMDQ5IDM0LjQ4OSA1NC4zMDQ5IDMyLjgxMzlDNTQuMjc0MSAzMS4xMzg3IDUzLjE2NzEgMjkuNjI3NyA1MS4yMjk4IDI5LjYyNzdaTTUxLjE5OTEgMzUuMTEzMUM0OS44NDYxIDM1LjExMzEgNDkuMjkyNSAzMy44OTc4IDQ5LjI5MjUgMzIuODEzOUM0OS4yOTI1IDMxLjY5NzEgNDkuODc2OCAzMC41MTQ2IDUxLjIyOTggMzAuNTE0NkM1Mi41NTIxIDMwLjUxNDYgNTMuMTM2MyAzMS42NjQyIDUzLjEzNjMgMzIuODEzOUM1My4xMzYzIDMzLjkzMDYgNTIuNjEzNiAzNS4xMTMxIDUxLjE5OTEgMzUuMTEzMVpcIlxyXG4gICAgICAgICAgICAgICBmaWxsPVwiI0ZGRjNFN1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgIGQ9XCJNNjMuMDA3NCAzMC4xODYxQzYyLjk0NTkgMjkuNzkyIDYyLjY5OTkgMjkuNjI3NyA2Mi4yNjk0IDI5LjYyNzdDNjEuODA4MSAyOS42Mjc3IDYxLjY1NDQgMjkuODI0OCA2MS4zNzc2IDMwLjQ0ODlMNTkuNDA5NiAzNC40ODlMNTcuNDQxNiAzMC40NDg5QzU3LjEzNDEgMjkuODI0OCA1Ny4wMTExIDI5LjYyNzcgNTYuNTQ5OCAyOS42Mjc3QzU2LjE1IDI5LjYyNzcgNTUuODczMyAyOS43OTIgNTUuODQyNSAzMC4xODYxTDU1LjI4OSAzNS4wNDc0QzU1LjI1ODMgMzUuMjc3NCA1NS4yMjc1IDM1LjQ3NDQgNTUuMjI3NSAzNS41MDczQzU1LjIyNzUgMzUuODAyOSA1NS40MTIgMzYuMDMyOCA1NS43ODEgMzYuMDMyOEM1Ni4xODA4IDM2LjAzMjggNTYuMzY1MyAzNS43NzAxIDU2LjQyNjggMzUuMzc1OUw1Ni44MjY2IDMxLjU2NTdMNTguNTQ4NiAzNC45ODE3QzU4LjkxNzYgMzUuNzA0NCA1OS4xMDIxIDM2LjAzMjggNTkuNDcxMSAzNi4wMzI4QzU5Ljg0MDEgMzYuMDMyOCA2MC4wMjQ2IDM1LjcwNDQgNjAuMzkzNiAzNC45ODE3TDYyLjExNTYgMzEuNTY1N0w2Mi41NDYxIDM1LjUwNzNDNjIuNTc2OSAzNS43MzcyIDYyLjczMDYgMzYuMDMyOCA2My4xNjExIDM2LjAzMjhDNjMuNDk5NCAzNi4wMzI4IDYzLjcxNDYgMzUuODM1NyA2My43MTQ2IDM1LjUwNzNDNjMuNzE0NiAzNS40NzQ0IDYzLjY4MzkgMzUuMjc3NCA2My42ODM5IDM1LjE0Nkw2My4wMDc0IDMwLjE4NjFaXCJcclxuICAgICAgICAgICAgICAgZmlsbD1cIiNGRkYzRTdcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICBkPVwiTTY5LjcxMTEgMjkuNjkzNEg2NS40MDZDNjUuMDY3OCAyOS42OTM0IDY0Ljg1MjUgMjkuOTIzMyA2NC44NTI1IDMwLjIxOVYzNS40NzQ0QzY0Ljg1MjUgMzUuODM1OCA2NS4wOTg1IDM2IDY1LjQwNiAzNkM2NS43NzUgMzYgNjYuMDIxMSAzNS44MDI5IDY2LjAyMTEgMzUuNTA3M1YzMC41ODAzSDY5LjE1NzZWMzUuNTA3M0M2OS4xNTc2IDM1LjgwMjkgNjkuNDAzNiAzNiA2OS43NDE4IDM2QzcwLjAxODYgMzYgNzAuMjk1MyAzNS44MzU4IDcwLjI5NTMgMzUuNDc0NFYzMC4yMTlDNzAuMjk1MyAyOS45MjMzIDcwLjA0OTMgMjkuNjkzNCA2OS43MTExIDI5LjY5MzRaXCJcclxuICAgICAgICAgICAgICAgZmlsbD1cIiNGRkYzRTdcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICBkPVwiTTc3LjA2MDQgMjkuNjI3N0M3Ni43NTI5IDI5LjYyNzcgNzYuNTA2OSAyOS44NTc3IDc2LjUwNjkgMzAuMTIwNFYzMC40NDg5SDc2LjQ3NjJDNzUuODkxOSAyOS44NTc3IDc1LjM2OTIgMjkuNTk0OSA3NC41MDgyIDI5LjU5NDlDNzIuNjAxNiAyOS41OTQ5IDcxLjUyNTQgMzEuMTM4NyA3MS41MjU0IDMyLjgxMzlDNzEuNTI1NCAzNC41ODc2IDcyLjc1NTQgMzUuOTY3MSA3NC42NjE5IDM1Ljk2NzFDNzUuMzY5MiAzNS45NjcxIDc1Ljk4NDIgMzUuNjM4NyA3Ni40NzYyIDM1LjA0NzRINzYuNTA2OVYzNS41MDczQzc2LjUwNjkgMzUuODM1NyA3Ni43NTI5IDM2IDc3LjA2MDQgMzZDNzcuMzk4NyAzNiA3Ny42MTM5IDM1LjgwMjkgNzcuNjEzOSAzNS40NzQ0VjMwLjE1MzNDNzcuNTgzMiAyOS44NTc3IDc3LjM2NzkgMjkuNjI3NyA3Ny4wNjA0IDI5LjYyNzdaTTc0LjUwODIgMzUuMTEzMUM3My4xNTUyIDM1LjExMzEgNzIuNjYzMiAzMy44MzIxIDcyLjY2MzIgMzIuODEzOUM3Mi42NjMyIDMxLjYzMTQgNzMuMzA4OSAzMC41MTQ2IDc0LjU2OTcgMzAuNTE0NkM3NS44OTE5IDMwLjUxNDYgNzYuNTA2OSAzMS42OTcxIDc2LjUwNjkgMzIuODEzOUM3Ni41MDY5IDMzLjk5NjMgNzUuOTg0MiAzNS4xMTMxIDc0LjUwODIgMzUuMTEzMVpcIlxyXG4gICAgICAgICAgICAgICBmaWxsPVwiI0ZGRjNFN1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgIGQ9XCJNODMuOTc5MiAyOS42Mjc3QzgzLjY3MTcgMjkuNjI3NyA4My40MjU3IDI5LjgyNDggODMuNDI1NyAzMC4xODYxVjMyLjE1NjlIODAuMjg5MVYzMC4xODYxQzgwLjI4OTEgMjkuODI0OCA4MC4wMTI0IDI5LjYyNzcgNzkuNzA0OSAyOS42Mjc3Qzc5LjM2NjYgMjkuNjI3NyA3OS4xNTE0IDI5LjgyNDggNzkuMTUxNCAzMC4xODYxVjM1LjQ3NDRDNzkuMTUxNCAzNS44MzU3IDc5LjMzNTkgMzYgNzkuNzA0OSAzNkM4MC4wNzM5IDM2IDgwLjMxOTkgMzUuODAyOSA4MC4zMTk5IDM1LjQ0MTZWMzMuMDEwOUg4My40NTY0VjM1LjQwODdDODMuNDU2NCAzNS43MDQ0IDgzLjYxMDIgMzUuOTY3MSA4NC4wNDA3IDM1Ljk2NzFDODQuMzQ4MiAzNS45NjcxIDg0LjU5NDIgMzUuODAyOSA4NC41OTQyIDM1LjQ0MTZWMzAuMTg2MUM4NC41NjM0IDI5LjgyNDggODQuMjg2NyAyOS42Mjc3IDgzLjk3OTIgMjkuNjI3N1pcIlxyXG4gICAgICAgICAgICAgICBmaWxsPVwiI0ZGRjNFN1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgIGQ9XCJNOTEuMDgyNiAyOS42Mjc3QzkwLjc0NDQgMjkuNjI3NyA5MC41NTk5IDI5Ljc5MTkgOTAuMTkwOSAzMC4yODQ3TDg3LjIzODggMzQuMTI3N1YzMC4xODYxQzg3LjIzODggMjkuODI0OCA4Ni45NjIxIDI5LjYyNzcgODYuNjU0NiAyOS42Mjc3Qzg2LjM0NzEgMjkuNjI3NyA4Ni4xMDExIDI5LjgyNDggODYuMTAxMSAzMC4xODYxVjM1LjM3NTlDODYuMTAxMSAzNS45MzQzIDg2LjM0NzEgMzYuMDMyOCA4Ni42NTQ2IDM2LjAzMjhDODYuOTkyOCAzNi4wMzI4IDg3LjIzODggMzUuODAyOSA4Ny43MzA4IDM1LjE0Nkw5MC40Njc2IDMxLjUzMjhWMzUuNTA3M0M5MC40Njc2IDM1LjgwMjkgOTAuNjIxNCAzNiA5MS4wMjExIDM2QzkxLjQyMDkgMzYgOTEuNjA1NCAzNS44MzU3IDkxLjYwNTQgMzUuNDc0NFYzMC4xODYxQzkxLjU3NDYgMjkuODU3NiA5MS40MjA5IDI5LjYyNzcgOTEuMDgyNiAyOS42Mjc3WlwiXHJcbiAgICAgICAgICAgICAgIGZpbGw9XCIjRkZGM0U3XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgZD1cIk05Ny40NDc1IDI5LjYyNzdIOTUuMzU2NUM5NC4yNDk1IDI5LjYyNzcgOTIuOTg4NyAzMC4xNTMzIDkyLjk4ODcgMzEuNUM5Mi45ODg3IDMyLjQ1MjUgOTMuNzg4MiAzMy4wMTA5IDk0LjgwMyAzMy4xMDk1TDkzLjA1MDIgMzUuMDgwM0M5Mi44OTY1IDM1LjI0NDUgOTIuODM1IDM1LjQ0MTYgOTIuODM1IDM1LjU3M0M5Mi44MzUgMzUuODY4NiA5My4wODEgMzYuMDMyOCA5My4zODg1IDM2LjAzMjhDOTMuNjAzNyAzNi4wMzI4IDkzLjc4ODIgMzUuOTM0MyA5My45NDIgMzUuNzcwMUw5Ni4wMzMgMzMuMjQwOUg5Ny4xMDkzVjM1LjQ3NDRDOTcuMTA5MyAzNS44MzU3IDk3LjM4NiAzNiA5Ny42OTM1IDM2Qzk4LjAzMTggMzYgOTguMjQ3IDM1LjgwMjkgOTguMjQ3IDM1LjQ3NDRWMzAuMjg0N0M5OC4yMTYzIDI5Ljc1OTEgOTguMDMxOCAyOS42Mjc3IDk3LjQ0NzUgMjkuNjI3N1pNOTcuMDQ3OCAzMi40NTI1SDk1LjU3MTdDOTQuODk1MiAzMi40NTI1IDk0LjIxODcgMzIuMjIyNiA5NC4yMTg3IDMxLjVDOTQuMjE4NyAzMC44MTAyIDk0LjgzMzcgMzAuNTE0NiA5NS42MzMyIDMwLjUxNDZIOTcuMDQ3OFYzMi40NTI1WlwiXHJcbiAgICAgICAgICAgICAgIGZpbGw9XCIjRkZGM0U3XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgZD1cIk01LjUzNTA2IDIwLjE2NzlWMTYuMjU5MUM1LjYyNzMxIDE2LjM5MDUgNS42NTgwNiAxNi41MjE5IDUuNzUwMzEgMTYuNjUzM0M1Ljc1MDMxIDE2LjY1MzMgOS40NDAzNSAyMS4xMjA0IDEwLjg4NTYgMjIuNjk3MUMxMi4yMDc5IDI0LjE0MjMgMTMuMjIyNiAyNC40MzggMTQuNDIxOSAyNC40MzhDMTYuMjM2MiAyNC40MzggMTcuNTg5MiAyMi4wMDczIDE1LjUyODkgMjAuMDY5M0wxMC4xMTY5IDE0LjgxMzlDOS45OTM4NSAxNC43MTUzIDEwLjAyNDYgMTQuNTE4MiAxMC4xNDc2IDE0LjQxOTdMMTQuMTE0NCAxMS41MjkyQzE0Ljk3NTQgMTAuODM5NCAxNS41Mjg5IDkuOTE5NzEgMTUuNTI4OSA5LjEzMTM5QzE1LjUyODkgOC4wODAyOSAxNC41MTQxIDcuMjU5MTIgMTMuMTkxOSA3LjI1OTEyQzEyLjIwNzkgNy4yNTkxMiAxMS4zNDY5IDcuNjIwNDQgMTAuMzMyMSA4LjU3Mjk5TDUuOTk2MzEgMTIuNTgwM0M1LjgxMTgxIDEyLjc0NDUgNS42ODg4MSAxMi45NzQ1IDUuNTM1MDYgMTMuMjA0NFYxMi4zMTc1VjMuNjEzMTRDNS41MzUwNiAxLjE4MjQ4IDQuNjQzMyAwIDIuNzY3NTMgMEMwLjg5MTc1OSAwIDAgMS4xODI0OCAwIDMuNjEzMTRWMjAuMTY3OUMwIDIyLjU5ODUgMC44OTE3NTkgMjMuNzgxIDIuNzk4MjggMjMuNzgxQzQuNzA0OCAyMy43ODEgNS41MzUwNiAyMi41NjU3IDUuNTM1MDYgMjAuMTY3OVpcIlxyXG4gICAgICAgICAgICAgICBmaWxsPVwiI0ZGRjNFN1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgIGQ9XCJNMjYuOTY4MiA2LjM3MjI4QzIxLjQ5NDYgNi4zNzIyOCAxNy41Mjc4IDEwLjAxODMgMTcuNTI3OCAxNS4xNzUyQzE3LjUyNzggMjAuMzMyMSAyMS40OTQ2IDIzLjk3ODEgMjYuOTY4MiAyMy45NzgxQzMyLjQ3MjUgMjMuOTc4MSAzNi4zNzc4IDIwLjM2NSAzNi4zNzc4IDE1LjIwODFDMzYuMzc3OCAxMC4wMTgzIDMyLjQ3MjUgNi4zNzIyOCAyNi45NjgyIDYuMzcyMjhaTTI2Ljk2ODIgMjAuMDAzN0MyNC44NDY0IDIwLjAwMzcgMjMuMjQ3NCAxNy43NzAxIDIzLjI0NzQgMTUuMTc1MkMyMy4yNDc0IDEyLjU4MDMgMjQuOTA3OSAxMC4zNzk2IDI2Ljk2ODIgMTAuMzc5NkMyOS4wMjg0IDEwLjM3OTYgMzAuNjU4MiAxMi42NDYgMzAuNjU4MiAxNS4xNDI0QzMwLjYyNzUgMTcuNzA0NCAyOS4wODk5IDIwLjAwMzcgMjYuOTY4MiAyMC4wMDM3WlwiXHJcbiAgICAgICAgICAgICAgIGZpbGw9XCIjRkZGM0U3XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgZD1cIk01OC40ODcxIDE4LjU1ODRDNjAuNTc4MiAxNi44MTc1IDYxLjY1NDQgMTUuNjY3OSA2MS42NTQ0IDE0LjQ1MjZDNjEuNjU0NCAxMy4yNzAxIDYwLjY3MDQgMTIuMzUwNCA1OS41MDE5IDEyLjM1MDRDNTguMjQxMSAxMi4zNTA0IDU3LjEwMzQgMTMuNTMyOCA1NS40MTIxIDE1LjQwNTFMNTEuOTA2NiAxMS43OTJDNTQuNzA0OSAxMC4yNDgyIDU2LjI3MzEgNy44MTc1MiA1Ni4yNzMxIDUuNDg1NEM1Ni4yNzMxIDIuNDYzNSA1My40NDQxIDAgNDguOTg1MyAwQzQ0LjU1NzMgMCA0MS42OTc1IDIuMzMyMTIgNDEuNjk3NSA1LjI1NTQ4QzQxLjY5NzUgNi44NjQ5NiA0Mi40OTcgOC45MDE0NiA0NC4wOTYgMTAuNDEyNEM0MC4yMjE1IDEyLjEyMDQgMzguMzE0OSAxNC4zNTQgMzguMzE0OSAxNy4zMTAyQzM4LjMxNDkgMjEuMjUxOCA0MS44MjA1IDI0LjI0MDkgNDYuNzQwNSAyNC4yNDA5QzQ5Ljk2OTMgMjQuMjQwOSA1Mi42NzUzIDIzLjM1NCA1NC43MDQ5IDIxLjcxMTdDNTYuMzAzOSAyMy41ODM5IDU3LjMxODYgMjQuMjQwOSA1OC40MjU2IDI0LjI0MDlDNTkuNzc4NyAyNC4yNDA5IDYwLjczMTkgMjMuMTI0MSA2MC43MzE5IDIxLjkwODhDNjAuNjcwNCAyMC44MjQ4IDU5Ljg0MDIgMTkuOTM4IDU4LjQ4NzEgMTguNTU4NFpNNDcuMzg2MyAyMC42OTM0QzQ1LjI5NTMgMjAuNjkzNCA0NC4wMzQ1IDE4Ljg1NCA0NC4wMzQ1IDE3LjE3ODhDNDQuMDM0NSAxNS43OTkzIDQ1LjE3MjMgMTQuNTE4MiA0Ny4xNzEgMTMuNjY0Mkw1MS42NjA2IDE4LjQ5MjdDNTAuMjQ2MSAxOS42MDk1IDQ4Ljc3MDEgMjAuNjkzNCA0Ny4zODYzIDIwLjY5MzRaTTQ4LjkyMzggOC43MzcyM0M0Ny42MDE1IDcuNjUzMjkgNDYuOTU1OCA2LjI0MDg4IDQ2Ljk1NTggNS4zODY4NkM0Ni45NTU4IDQuNDAxNDYgNDcuNzg2IDMuMDIxOSA0OS4yNjIxIDMuMDIxOUM1MC45MjI2IDMuMDIxOSA1MS43MjIxIDQuMTA1ODQgNTEuNzIyMSA1LjQ4NTRDNTEuNjkxMyA2LjYzNTA0IDUwLjc5OTYgOC4wNDc0NSA0OC45MjM4IDguNzM3MjNaXCJcclxuICAgICAgICAgICAgICAgZmlsbD1cIiNGRkYzRTdcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICBkPVwiTTc3LjIxNDIgMTguNjg5OEM3Ni4yOTE3IDE4LjY4OTggNzUuMDMwOSAyMC4wMDM3IDczLjQwMTIgMjAuMDAzN0M3MC44NDg5IDIwLjAwMzcgNjkuMzQyMSAxNy44MDI5IDY5LjM0MjEgMTUuMjQwOUM2OS4zNDIxIDEyLjY3ODggNzAuOTQxMSAxMC4zNzk2IDczLjE4NTkgMTAuMzc5NkM3NC43ODQ5IDEwLjM3OTYgNzYuMDc2NCAxMS42OTM0IDc3LjEyMiAxMS42OTM0Qzc4LjQ3NSAxMS42OTM0IDc5LjQyODIgMTAuNzczNyA3OS40MjgyIDkuNTkxMjVDNzkuNDI4MiA3LjcxODk5IDc2Ljk2ODIgNi40MDUxMiA3My4yMTY3IDYuNDA1MTJDNjcuMzc0MSA2LjQwNTEyIDYzLjY1MzMgMTAuMDg0IDYzLjY1MzMgMTUuMjA4QzYzLjY1MzMgMjAuNDYzNSA2Ny40MzU2IDIzLjk3ODEgNzIuODc4NCAyMy45NzgxQzc2Ljc1MjkgMjMuOTc4MSA3OS40MjgyIDIyLjU2NTcgNzkuNDI4MiAyMC44MjQ4Qzc5LjM2NjcgMTkuNjQyMyA3OC41MDU3IDE4LjY4OTggNzcuMjE0MiAxOC42ODk4WlwiXHJcbiAgICAgICAgICAgICAgIGZpbGw9XCIjRkZGM0U3XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgZD1cIk05MC42MjEgNi4zNzIyOEM4NS4xNDc1IDYuMzcyMjggODEuMTgwNyAxMC4wMTgzIDgxLjE4MDcgMTUuMTc1MkM4MS4xODA3IDIwLjMzMjEgODUuMTQ3NSAyMy45NDUzIDkwLjYyMSAyMy45NDUzQzk2LjEyNTMgMjMuOTQ1MyAxMDAuMDMxIDIwLjMzMjEgMTAwLjAzMSAxNS4xNzUyQzk5Ljk5OTggMTAuMDE4MyA5Ni4xMjUzIDYuMzcyMjggOTAuNjIxIDYuMzcyMjhaTTkwLjYyMSAyMC4wMDM3Qzg4LjQ5OTIgMjAuMDAzNyA4Ni45MDAyIDE3Ljc3MDEgODYuOTAwMiAxNS4xNzUyQzg2LjkwMDIgMTIuNTgwMyA4OC41NjA3IDEwLjM3OTYgOTAuNjIxIDEwLjM3OTZDOTIuNjgxMyAxMC4zNzk2IDk0LjMxMSAxMi42NDYgOTQuMzExIDE1LjE0MjRDOTQuMjgwMyAxNy43MDQ0IDkyLjc0MjggMjAuMDAzNyA5MC42MjEgMjAuMDAzN1pcIlxyXG4gICAgICAgICAgICAgICBmaWxsPVwiI0ZGRjNFN1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgIDwvZz5cclxuICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgIDxjbGlwUGF0aCBpZD1cImNsaXAwXCI+XHJcbiAgICAgICAgICAgICAgIDxyZWN0IHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMzZcIiBmaWxsPVwid2hpdGVcIiAvPlxyXG4gICAgICAgICAgICA8L2NsaXBQYXRoPlxyXG4gICAgICAgICA8L2RlZnM+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICApO1xyXG59OyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcclxuaW1wb3J0IHMgZnJvbSBcIi4vVGFzdGVzU1ZHLm1vZHVsZS5zY3NzXCI7XHJcbmV4cG9ydCBjb25zdCBSZWRXaW5lID0gKHsgYm9yZGVyIH0pID0+IHtcclxuICAgcmV0dXJuIChcclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbHN4KHMudGFzdGUsIGJvcmRlciA9PT0gXCJhY2NlbnRcIiA/IHMuYWNjZW50IDogXCJcIil9PlxyXG4gICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIHdpZHRoPVwiOFwiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjEyXCJcclxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCA4IDEyXCJcclxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICBkPVwiTTEuMTkzNjggMC43NDIwNjVDMS4xMDgxMiAwLjc0MjA2NSAxLjAyNjA3IDAuNzc2MDUyIDAuOTY1NTc3IDAuODM2NTQ5QzAuOTA1MDggMC44OTcwNDUgMC44NzEwOTQgMC45NzkwOTYgMC44NzEwOTQgMS4wNjQ2NVY0LjYxMzA5QzAuODcxMDg0IDUuNDEyOCAxLjE2ODEyIDYuMTg0MDEgMS43MDQ1OCA2Ljc3NzA5QzIuMjQxMDMgNy4zNzAxNyAyLjk3ODY3IDcuNzQyODUgMy43NzQzNyA3LjgyMjgyVjEwLjQxOTZIMi40ODQwMkMyLjM5ODQ3IDEwLjQxOTYgMi4zMTY0MiAxMC40NTM2IDIuMjU1OTIgMTAuNTE0MUMyLjE5NTQyIDEwLjU3NDYgMi4xNjE0NCAxMC42NTY3IDIuMTYxNDQgMTAuNzQyMkMyLjE2MTQ0IDEwLjgyNzggMi4xOTU0MiAxMC45MDk4IDIuMjU1OTIgMTAuOTcwM0MyLjMxNjQyIDExLjAzMDggMi4zOTg0NyAxMS4wNjQ4IDIuNDg0MDIgMTEuMDY0OEg1LjcwOTg4QzUuNzk1NDMgMTEuMDY0OCA1Ljg3NzQ5IDExLjAzMDggNS45Mzc5OCAxMC45NzAzQzUuOTk4NDggMTAuOTA5OCA2LjAzMjQ3IDEwLjgyNzggNi4wMzI0NyAxMC43NDIyQzYuMDMyNDcgMTAuNjU2NyA1Ljk5ODQ4IDEwLjU3NDYgNS45Mzc5OCAxMC41MTQxQzUuODc3NDkgMTAuNDUzNiA1Ljc5NTQzIDEwLjQxOTYgNS43MDk4OCAxMC40MTk2SDQuNDE5NTRWNy44Mzg5NVY3LjgyMjgyQzUuMjE1MjQgNy43NDI4NSA1Ljk1Mjg3IDcuMzcwMTcgNi40ODkzMiA2Ljc3NzA5QzcuMDI1NzggNi4xODQwMSA3LjMyMjgyIDUuNDEyOCA3LjMyMjgxIDQuNjEzMDlWMS4wNjQ2NUM3LjMyMjgxIDAuOTc5MDk2IDcuMjg4ODIgMC44OTcwNDUgNy4yMjgzMyAwLjgzNjU0OUM3LjE2NzgzIDAuNzc2MDUyIDcuMDg1NzggMC43NDIwNjUgNy4wMDAyMiAwLjc0MjA2NUgxLjE5MzY4Wk0xLjUxNjI3IDMuMDAwMTdWMS4zODcyNEg2LjY3NzY0VjMuMDAwMTdIMS41MTYyN1pNNi4zMjQwOCA0LjY2MTQ4QzYuMjQ2OTggNS4xMjQ3IDYuMDI3MzggNS41NTIzNiA1LjY5NTg1IDUuODg0OTNDNS4zNjQzMiA2LjIxNzUgNC45MzczNSA2LjQzODQ0IDQuNDc0MzggNi41MTdDNC40MzI2MSA2LjUyNDA3IDQuMzg5ODUgNi41MjI4NSA0LjM0ODU2IDYuNTEzNEM0LjMwNzI2IDYuNTAzOTUgNC4yNjgyMyA2LjQ4NjQ2IDQuMjMzNjkgNi40NjE5M0M0LjE5OTE1IDYuNDM3NCA0LjE2OTc4IDYuNDA2MyA0LjE0NzI2IDYuMzcwNDJDNC4xMjQ3NCA2LjMzNDUzIDQuMTA5NTEgNi4yOTQ1NyA0LjEwMjQ0IDYuMjUyOEM0LjA5NTM2IDYuMjExMDMgNC4wOTY1OCA2LjE2ODI3IDQuMTA2MDMgNi4xMjY5OEM0LjExNTQ4IDYuMDg1NjggNC4xMzI5NyA2LjA0NjY1IDQuMTU3NSA2LjAxMjExQzQuMTgyMDQgNS45Nzc1NyA0LjIxMzEzIDUuOTQ4MiA0LjI0OTAxIDUuOTI1NjhDNC4yODQ5IDUuOTAzMTYgNC4zMjQ4NiA1Ljg4NzkzIDQuMzY2NjMgNS44ODA4NkM0LjY5NzMyIDUuODI0NzcgNS4wMDIzIDUuNjY3IDUuMjM5MTIgNS40Mjk0OEM1LjQ3NTk0IDUuMTkxOTYgNS42MzI4MyA0Ljg4NjUyIDUuNjg3OTQgNC41NTU2N0M1LjcwNDE5IDQuNDczMzkgNS43NTE4NSA0LjQwMDY3IDUuODIwODEgNC4zNTI5M0M1Ljg4OTc3IDQuMzA1MiA1Ljk3NDYxIDQuMjg2MTkgNi4wNTczNSA0LjI5OTk1QzYuMTQwMDggNC4zMTM3MSA2LjIxNDIgNC4zNTkxNiA2LjI2NCA0LjQyNjY1QzYuMzEzNzkgNC40OTQxNCA2LjMzNTM0IDQuNTc4MzcgNi4zMjQwOCA0LjY2MTQ4WlwiXHJcbiAgICAgICAgICAgICAgIGZpbGw9XCIjRkFFRUUyXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgPC9zdmc+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBXaGl0ZVdpbmUgPSAoeyBib3JkZXIgfSkgPT4ge1xyXG4gICByZXR1cm4gKFxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2Nsc3gocy50YXN0ZSwgYm9yZGVyID09PSBcImFjY2VudFwiID8gcy5hY2NlbnQgOiBcIlwiKX0+XHJcbiAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgd2lkdGg9XCI4XCJcclxuICAgICAgICAgICAgaGVpZ2h0PVwiMTJcIlxyXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDggMTJcIlxyXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgIGQ9XCJNNi4zMzI0IDQuNTM0NzdDNi4zMzgyMiA0LjQ4MjE0IDYuMzMzNjIgNC40Mjg4NyA2LjMxODg2IDQuMzc4MDFDNi4zMDQxIDQuMzI3MTUgNi4yNzk0NyA0LjI3OTcgNi4yNDYzNyA0LjIzODM2QzYuMjEzMjcgNC4xOTcwMyA2LjE3MjM1IDQuMTYyNjEgNi4xMjU5NSA0LjEzNzA5QzYuMDc5NTUgNC4xMTE1NiA2LjAyODU4IDQuMDk1NDMgNS45NzU5NCA0LjA4OTYxQzUuOTIzMzEgNC4wODM3OCA1Ljg3MDA0IDQuMDg4MzggNS44MTkxOCA0LjEwMzE0QzUuNzY4MzIgNC4xMTc5IDUuNzIwODcgNC4xNDI1NCA1LjY3OTUzIDQuMTc1NjRDNS42MzgyIDQuMjA4NzQgNS42MDM3OCA0LjI0OTY1IDUuNTc4MjYgNC4yOTYwNUM1LjU1MjczIDQuMzQyNDUgNS41MzY2IDQuMzkzNDMgNS41MzA3NyA0LjQ0NjA2QzUuNDk3NzkgNC43NDIxMiA1LjM3MTk3IDUuMDIwMTUgNS4xNzEzNCA1LjI0MDM0QzQuOTcwNyA1LjQ2MDUzIDQuNzA1NTQgNS42MTE1OSA0LjQxMzgyIDUuNjcxODlDNC4zMDkwMiA1LjY5MzQ5IDQuMjE3MDggNS43NTU4NCA0LjE1ODI1IDUuODQ1MjNDNC4wOTk0MiA1LjkzNDYxIDQuMDc4NSA2LjA0MzcgNC4xMDAxMSA2LjE0ODUxQzQuMTIxNzEgNi4yNTMzMSA0LjE4NDA2IDYuMzQ1MjQgNC4yNzM0NCA2LjQwNDA4QzQuMzYyODMgNi40NjI5MSA0LjQ3MTkyIDYuNDgzODIgNC41NzY3MyA2LjQ2MjIyQzUuMDM1NCA2LjM2NzQ5IDUuNDUyMzEgNi4xMjk5OCA1Ljc2NzcgNS43ODM3M0M2LjA4MzA5IDUuNDM3NDggNi4yODA3NyA1LjAwMDI4IDYuMzMyNCA0LjUzNDc3WlwiXHJcbiAgICAgICAgICAgICAgIGZpbGw9XCIjRkFFRUUyXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgZD1cIk0xLjMwNTA5IDAuMjU4MDU3QzEuMTk4MTQgMC4yNTgwNTcgMS4wOTU1OCAwLjMwMDU0IDEuMDE5OTYgMC4zNzYxNjFDMC45NDQzMzkgMC40NTE3ODEgMC45MDE4NTYgMC41NTQzNDUgMC45MDE4NTYgMC42NjEyODlWNC42OTM2MUMwLjkwMTU4NiA1LjQ3OTUyIDEuMTg4MjMgNi4yMzg0OSAxLjcwNzk1IDYuODI4MDFDMi4yMjc2OCA3LjQxNzUyIDIuOTQ0NzQgNy43OTcwNCAzLjcyNDQ4IDcuODk1MjdWMTAuNzQyMUgyLjUxNDc4QzIuNDA3ODQgMTAuNzQyMSAyLjMwNTI4IDEwLjc4NDYgMi4yMjk2NiAxMC44NjAyQzIuMTU0MDQgMTAuOTM1OCAyLjExMTU1IDExLjAzODQgMi4xMTE1NSAxMS4xNDUzQzIuMTExNTUgMTEuMjUyMyAyLjE1NDA0IDExLjM1NDggMi4yMjk2NiAxMS40MzA1QzIuMzA1MjggMTEuNTA2MSAyLjQwNzg0IDExLjU0ODYgMi41MTQ3OCAxMS41NDg2SDUuNzQwNjRDNS44NDc1OCAxMS41NDg2IDUuOTUwMTUgMTEuNTA2MSA2LjAyNTc3IDExLjQzMDVDNi4xMDEzOSAxMS4zNTQ4IDYuMTQzODcgMTEuMjUyMyA2LjE0Mzg3IDExLjE0NTNDNi4xNDM4NyAxMS4wMzg0IDYuMTAxMzkgMTAuOTM1OCA2LjAyNTc3IDEwLjg2MDJDNS45NTAxNSAxMC43ODQ2IDUuODQ3NTggMTAuNzQyMSA1Ljc0MDY0IDEwLjc0MjFINC41MzA5NFY3LjkxOTQ3VjcuODk1MjdDNS4zMTA2OSA3Ljc5NzA0IDYuMDI3NzQgNy40MTc1MiA2LjU0NzQ3IDYuODI4MDFDNy4wNjcyIDYuMjM4NDkgNy4zNTM4NCA1LjQ3OTUyIDcuMzUzNTcgNC42OTM2MVYwLjY2MTI4OUM3LjM1MzU3IDAuNTU0MzQ1IDcuMzExMDkgMC40NTE3ODEgNy4yMzU0NyAwLjM3NjE2MUM3LjE1OTg0IDAuMzAwNTQgNy4wNTcyOCAwLjI1ODA1NyA2Ljk1MDM0IDAuMjU4MDU3SDEuMzA1MDlaTTEuNzA4MzIgMi42Nzc0NVYxLjA2NDUySDYuNTQ3MVYyLjY3NzQ1SDEuNzA4MzJaTTEuNzA4MzIgMy40ODM5MUg2LjU0NzFWNC42OTM2MUM2LjU0NzEgNS4zMzUyNyA2LjI5MjIxIDUuOTUwNjYgNS44Mzg0OCA2LjQwNDM4QzUuMzg0NzYgNi44NTgxIDQuNzY5MzggNy4xMTMgNC4xMjc3MSA3LjExM0MzLjQ4NjA1IDcuMTEzIDIuODcwNjcgNi44NTgxIDIuNDE2OTQgNi40MDQzOEMxLjk2MzIyIDUuOTUwNjYgMS43MDgzMiA1LjMzNTI3IDEuNzA4MzIgNC42OTM2MVYzLjQ4MzkxWlwiXHJcbiAgICAgICAgICAgICAgIGZpbGw9XCIjRkFFRUUyXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgPC9zdmc+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBWZWdldGFibGVzID0gKHsgYm9yZGVyIH0pID0+IHtcclxuICAgcmV0dXJuIChcclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbHN4KHMudGFzdGUsIGJvcmRlciA9PT0gJ2FjY2VudCcgPyBzLmFjY2VudCA6ICcnKX0+XHJcbiAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgd2lkdGg9XCIxMlwiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjExXCJcclxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxMiAxMVwiXHJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgID5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgZD1cIk05LjkzNTM4IDQuNTAwMTNDOS45MzUwMSA0LjA2NzMgOS44MTg1OCAzLjY0MjQ5IDkuNTk4MjMgMy4yNjk5NUM5LjM3Nzg4IDIuODk3NCA5LjA2MTY3IDIuNTkwNzYgOC42ODI1NCAyLjM4MTk1QzguOTY4MjkgMi4wODM4OSA5LjEyODE2IDEuNjg3MTcgOS4xMjg5MiAxLjI3NDI3SDguMzIyNDZDOC4zMjIyNCAxLjQ4ODA5IDguMjM3MjEgMS42OTMxIDguMDg2MDEgMS44NDQyOUM3LjkzNDgyIDEuOTk1NDkgNy43Mjk4MSAyLjA4MDUyIDcuNTE1OTkgMi4wODA3NEM2Ljg4MjI4IDIuMDgxNTggNi4yNzQxNiAyLjMzMDg2IDUuODIyMTkgMi43NzUwNkM1LjM3MDIyIDMuMjE5MjcgNS4xMTA0NCAzLjgyMjk4IDUuMDk4NjIgNC40NTY1OEM0LjU4MTYyIDMuOTMwMDEgNC4yOTE0MSAzLjIyMTkxIDQuMjkwMTMgMi40ODM5N0M0LjI4OTA3IDIuMTI3MzUgNC4xNjk3NCAxLjc4MTE3IDMuOTUwODMgMS40OTk2NUMzLjczMTkyIDEuMjE4MTMgMy40MjU4IDEuMDE3MTggMy4wODA0NCAwLjkyODI5OVYwLjA2NDU3NTJIMi4yNzM5N1YwLjkyODI5OUMxLjkyODYxIDEuMDE3MTggMS42MjI0OSAxLjIxODEzIDEuNDAzNTggMS40OTk2NUMxLjE4NDY3IDEuNzgxMTcgMS4wNjUzNCAyLjEyNzM1IDEuMDY0MjggMi40ODM5N1Y0LjUwMDEzSDAuMjU3ODEyVjQuOTAzMzZDMC4yNTc4MTIgNi40MDA1NyAwLjg1MjU3OCA3LjgzNjQ3IDEuOTExMjcgOC44OTUxNkMyLjk2OTk2IDkuOTUzODUgNC40MDU4NSAxMC41NDg2IDUuOTAzMDYgMTAuNTQ4NkM3LjQwMDI4IDEwLjU0ODYgOC44MzYxNyA5Ljk1Mzg1IDkuODk0ODYgOC44OTUxNkMxMC45NTM1IDcuODM2NDcgMTEuNTQ4MyA2LjQwMDU3IDExLjU0ODMgNC45MDMzNlY0LjUwMDEzSDkuOTM1MzhaTTcuNTE1OTkgMi44ODcyQzcuOTQzNiAyLjg4NzczIDguMzUzNTUgMy4wNTc4NCA4LjY1NTkyIDMuMzYwMjFDOC45NTgyOCAzLjY2MjU3IDkuMTI4MzkgNC4wNzI1MiA5LjEyODkyIDQuNTAwMTNINS45MDMwNkM1LjkwMzYgNC4wNzI1MiA2LjA3MzcgMy42NjI1NyA2LjM3NjA3IDMuMzYwMjFDNi42Nzg0NCAzLjA1Nzg0IDcuMDg4MzggMi44ODc3MyA3LjUxNTk5IDIuODg3MlpNMS44NzA3NCAyLjQ4Mzk3QzEuODcwNzQgMi4yNzAwOCAxLjk1NTcxIDIuMDY0OTUgMi4xMDY5NSAxLjkxMzcxQzIuMjU4MTkgMS43NjI0NyAyLjQ2MzMyIDEuNjc3NSAyLjY3NzIxIDEuNjc3NUMyLjg5MTA5IDEuNjc3NSAzLjA5NjIyIDEuNzYyNDcgMy4yNDc0NiAxLjkxMzcxQzMuMzk4NyAyLjA2NDk1IDMuNDgzNjcgMi4yNzAwOCAzLjQ4MzY3IDIuNDgzOTdDMy40ODUyOCAzLjIwMjM4IDMuNzAwMjkgMy45MDQxMyA0LjEwMTQyIDQuNTAwMTNIMS44NzA3NFYyLjQ4Mzk3Wk01LjkwMzA2IDkuNzQyMTVDNC42ODk5NSA5Ljc0MDY0IDMuNTIxNTIgOS4yODQxNiAyLjYyODY2IDguNDYyOTFDMS43MzU4MSA3LjY0MTY1IDEuMTgzNDcgNi41MTUzNiAxLjA4MDgxIDUuMzA2NTlIMTAuNzI1N0MxMC42MjMgNi41MTU0MyAxMC4wNzA3IDcuNjQxNzcgOS4xNzc3MiA4LjQ2MzA0QzguMjg0NzggOS4yODQzMSA3LjExNjI1IDkuNzQwNzQgNS45MDMwNiA5Ljc0MjE1WlwiXHJcbiAgICAgICAgICAgICAgIGZpbGw9XCIjRkFFRUUyXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgPC9zdmc+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBGcnVpdHMgPSAoeyBib3JkZXIgfSkgPT4ge1xyXG4gICByZXR1cm4gKFxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2Nsc3gocy50YXN0ZSwgYm9yZGVyID09PSAnYWNjZW50JyA/IHMuYWNjZW50IDogJycpfT5cclxuICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICB3aWR0aD1cIjEwXCJcclxuICAgICAgICAgICAgaGVpZ2h0PVwiMTZcIlxyXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEwIDE2XCJcclxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICBkPVwiTTkuODAxMzMgNy45MDM0NUM5LjgwMTMzIDYuOTY5MyA5LjE2Mjg4IDYuMjAzMTYgOC4zMDkzNyA1Ljk2Nzk0QzguNDMzMTQgNS42NjIxNCA4LjQ3OTg3IDUuMzMwNjIgOC40NDU0NiA1LjAwMjUyQzguNDExMDQgNC42NzQ0MiA4LjI5NjU0IDQuMzU5ODEgOC4xMTIwMiA0LjA4NjM1QzcuOTI3NSAzLjgxMjg4IDcuNjc4NjEgMy41ODg5NSA3LjM4NzI0IDMuNDM0MjNDNy4wOTU4OCAzLjI3OTUyIDYuNzcwOTYgMy4xOTg3NyA2LjQ0MTA2IDMuMTk5MDhDNi4xNTIwOCAzLjE5OTA4IDUuODgzMjYgMy4yNjYyOCA1LjY0MTMyIDMuMzczODFDNS43NjkwMSAyLjY1NDcyIDYuMDMxMTEgMS41Nzk0MyA2LjcwOTg4IDEuMzE3MzNMNi4xNzIyNCAwLjUxMDg2NEM1LjAyOTc1IDEuMDI4MzUgNC42OTM3MiAyLjU4NzUxIDQuNTk5NjMgMy4zOTM5N0M0LjMzNzUzIDMuMjczMDEgNC4wNTUyNyAzLjE5OTA4IDMuNzUyODUgMy4xOTkwOEMzLjQyMjk1IDMuMTk4NzcgMy4wOTgwMyAzLjI3OTUyIDIuODA2NjcgMy40MzQyM0MyLjUxNTMgMy41ODg5NSAyLjI2NjQxIDMuODEyODggMi4wODE4OSA0LjA4NjM1QzEuODk3MzcgNC4zNTk4MSAxLjc4Mjg2IDQuNjc0NDIgMS43NDg0NSA1LjAwMjUyQzEuNzE0MDQgNS4zMzA2MiAxLjc2MDc3IDUuNjYyMTQgMS44ODQ1NCA1Ljk2Nzk0QzEuMDI0MzEgNi4xOTY0NCAwLjM5MjU3OCA2Ljk3NjAyIDAuMzkyNTc4IDcuOTAzNDVDMC4zOTI1NzggOC44Mzc2MSAxLjAzMTAzIDkuNjEwNDcgMS44OTEyNiA5LjgzODk3QzEuNzk3MTcgMTAuMDY3NSAxLjczNjY5IDEwLjMyMjggMS43MzY2OSAxMC41OTE3QzEuNzM2NjkgMTEuNTI1OCAyLjM2ODQyIDEyLjI5ODcgMy4yMjg2NCAxMi41MjcyQzMuMTA0ODggMTIuODMzIDMuMDU4MTUgMTMuMTY0NSAzLjA5MjU2IDEzLjQ5MjZDMy4xMjY5NyAxMy44MjA3IDMuMjQxNDcgMTQuMTM1MyAzLjQyNiAxNC40MDg4QzMuNjEwNTIgMTQuNjgyMiAzLjg1OTQxIDE0LjkwNjIgNC4xNTA3NyAxNS4wNjA5QzQuNDQyMTQgMTUuMjE1NiA0Ljc2NzA2IDE1LjI5NjQgNS4wOTY5NSAxNS4yOTZDNS40MjY4NSAxNS4yOTY0IDUuNzUxNzcgMTUuMjE1NiA2LjA0MzE0IDE1LjA2MDlDNi4zMzQ1IDE0LjkwNjIgNi41ODMzOSAxNC42ODIyIDYuNzY3OTEgMTQuNDA4OEM2Ljk1MjQzIDE0LjEzNTMgNy4wNjY5NCAxMy44MjA3IDcuMTAxMzUgMTMuNDkyNkM3LjEzNTc2IDEzLjE2NDUgNy4wODkwMyAxMi44MzMgNi45NjUyNiAxMi41MjcyQzcuMzkzMDMgMTIuNDE1MSA3Ljc3MTU0IDEyLjE2NDMgOC4wNDE1MiAxMS44MTRDOC4zMTE0OSAxMS40NjM4IDguNDU3NjkgMTEuMDMzOSA4LjQ1NzIyIDEwLjU5MTdDOC40NTcyMiAxMC4zMjI4IDguNDAzNDYgMTAuMDc0MiA4LjMwMjY1IDkuODM4OTdDOC43MzEyMSA5LjcyNzI5IDkuMTEwNzEgOS40NzY3OSA5LjM4MTg0IDkuMTI2NjJDOS42NTI5OCA4Ljc3NjQ1IDkuODAwNDkgOC4zNDYzMyA5LjgwMTMzIDcuOTAzNDVaTTcuOTkzNTEgNi40Nzg3VjYuNDkyMTRINy45ODY3OEw3Ljk5MzUxIDYuNDc4N1pNNi40NDEwNiA0LjIwNzE2QzYuOTk4ODcgNC4yMDcxNiA3LjQ0OTE0IDQuNjU3NDQgNy40NDkxNCA1LjIxNTI0QzcuNDQ5MTQgNS43NzMwNCA2Ljk5ODg3IDYuMjIzMzIgNi40NDEwNiA2LjIyMzMyQzUuODgzMjYgNi4yMjMzMiA1LjQzMjk4IDUuNzczMDQgNS40MzI5OCA1LjIxNTI0QzUuNDMyOTggNC42NTc0NCA1Ljg4MzI2IDQuMjA3MTYgNi40NDEwNiA0LjIwNzE2Wk02LjEwNTAzIDcuOTAzNDVDNi4xMDUwMyA4LjQ2MTI2IDUuNjU0NzYgOC45MTE1NCA1LjA5Njk1IDguOTExNTRDNC41MzkxNSA4LjkxMTU0IDQuMDg4ODcgOC40NjEyNiA0LjA4ODg3IDcuOTAzNDVDNC4wODg4NyA3LjM0NTY1IDQuNTM5MTUgNi44OTUzNyA1LjA5Njk1IDYuODk1MzdDNS42NTQ3NiA2Ljg5NTM3IDYuMTA1MDMgNy4zNDU2NSA2LjEwNTAzIDcuOTAzNDVaTTMuNzUyODUgNC4yMDcxNkM0LjMxMDY1IDQuMjA3MTYgNC43NjA5MyA0LjY1NzQ0IDQuNzYwOTMgNS4yMTUyNEM0Ljc2MDkzIDUuNzczMDQgNC4zMTA2NSA2LjIyMzMyIDMuNzUyODUgNi4yMjMzMkMzLjE5NTA0IDYuMjIzMzIgMi43NDQ3NyA1Ljc3MzA0IDIuNzQ0NzcgNS4yMTUyNEMyLjc0NDc3IDQuNjU3NDQgMy4xOTUwNCA0LjIwNzE2IDMuNzUyODUgNC4yMDcxNlpNMS40MDA2NiA3LjkwMzQ1QzEuNDAwNjYgNy4zNDU2NSAxLjg1MDkzIDYuODk1MzcgMi40MDg3NCA2Ljg5NTM3QzIuOTY2NTQgNi44OTUzNyAzLjQxNjgyIDcuMzQ1NjUgMy40MTY4MiA3LjkwMzQ1QzMuNDE2ODIgOC40NjEyNiAyLjk2NjU0IDguOTExNTQgMi40MDg3NCA4LjkxMTU0QzEuODUwOTMgOC45MTE1NCAxLjQwMDY2IDguNDYxMjYgMS40MDA2NiA3LjkwMzQ1Wk0yLjc0NDc3IDEwLjU5MTdDMi43NDQ3NyAxMC4wMzM5IDMuMTk1MDQgOS41ODM1OSAzLjc1Mjg1IDkuNTgzNTlDNC4zMTA2NSA5LjU4MzU5IDQuNzYwOTMgMTAuMDMzOSA0Ljc2MDkzIDEwLjU5MTdDNC43NjA5MyAxMS4xNDk1IDQuMzEwNjUgMTEuNTk5OCAzLjc1Mjg1IDExLjU5OThDMy4xOTUwNCAxMS41OTk4IDIuNzQ0NzcgMTEuMTQ5NSAyLjc0NDc3IDEwLjU5MTdaTTUuMDk2OTUgMTQuMjg4QzQuNTM5MTUgMTQuMjg4IDQuMDg4ODcgMTMuODM3NyA0LjA4ODg3IDEzLjI3OTlDNC4wODg4NyAxMi43MjIxIDQuNTM5MTUgMTIuMjcxOCA1LjA5Njk1IDEyLjI3MThDNS42NTQ3NiAxMi4yNzE4IDYuMTA1MDMgMTIuNzIyMSA2LjEwNTAzIDEzLjI3OTlDNi4xMDUwMyAxMy44Mzc3IDUuNjU0NzYgMTQuMjg4IDUuMDk2OTUgMTQuMjg4Wk02LjQ0MTA2IDExLjU5OThDNS44ODMyNiAxMS41OTk4IDUuNDMyOTggMTEuMTQ5NSA1LjQzMjk4IDEwLjU5MTdDNS40MzI5OCAxMC4wMzM5IDUuODgzMjYgOS41ODM1OSA2LjQ0MTA2IDkuNTgzNTlDNi45OTg4NyA5LjU4MzU5IDcuNDQ5MTQgMTAuMDMzOSA3LjQ0OTE0IDEwLjU5MTdDNy40NDkxNCAxMS4xNDk1IDYuOTk4ODcgMTEuNTk5OCA2LjQ0MTA2IDExLjU5OThaTTcuNzg1MTcgOC45MTE1NEM3LjIyNzM2IDguOTExNTQgNi43NzcwOSA4LjQ2MTI2IDYuNzc3MDkgNy45MDM0NUM2Ljc3NzA5IDcuMzQ1NjUgNy4yMjczNiA2Ljg5NTM3IDcuNzg1MTcgNi44OTUzN0M4LjM0Mjk3IDYuODk1MzcgOC43OTMyNSA3LjM0NTY1IDguNzkzMjUgNy45MDM0NUM4Ljc5MzI1IDguNDYxMjYgOC4zNDI5NyA4LjkxMTU0IDcuNzg1MTcgOC45MTE1NFpcIlxyXG4gICAgICAgICAgICAgICBmaWxsPVwiI0ZBRUVFMlwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgIDwvc3ZnPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmltcG9ydCBzIGZyb20gXCIuL0Rpc2NvdW50U2VjdGlvbi5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgZyBmcm9tIFwic3JjL3N0eWxlcy9NYWluLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRGlzY291bnRTZWN0aW9uID0gKCkgPT4ge1xyXG4gICByZXR1cm4gKFxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2Nsc3gocy5kaXNjb3VudCl9PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChnLndyYXBwZXIpfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3gocy5jb250YWluZXIpfT5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3gocy5wcm9tbyl9PlxyXG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtjbHN4KHMuYmVmb3JlKX0+0KHQutC40LTQutCwINC00L48L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Nsc3gocy5vZmZlcil9PjEwJTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17Y2xzeChzLmluZm8pfT5cclxuICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbHN4KHMuY2F0ZWdvcnkpfT7QvdCwINGB0YvRgDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbHN4KHMubmFtZSl9PiDQktCw0LvQsNC90YHQtTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3gocy5kYXRlKX0+0JTQviAxNS4wNS4yMDIxPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y2xzeChzLmxpbmspfT7Qn9C+0YHQvNC+0YLRgNC10YLRjDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHtcclxuICAgUmVkV2luZSxcclxuICAgV2hpdGVXaW5lLFxyXG4gICBWZWdldGFibGVzLFxyXG4gICBGcnVpdHMsXHJcbn0gZnJvbSBcIkBjb21wb25lbnRzL1NWRy9UYXN0ZXNTVkcvVGFzdGVzU1ZHXCI7XHJcbmltcG9ydCBzIGZyb20gXCIuL05ld1Rhc3RlLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBnIGZyb20gXCJzcmMvc3R5bGVzL01haW4ubW9kdWxlLnNjc3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBOZXdUYXN0ZSA9ICh7IGhyZWYsIG5hbWUsIGFkZGl0aW9uLCBpbWFnZSwgc3R5bGUsIHRhc3RlcyB9KSA9PiB7XHJcbiAgIGNvbnN0IGFsbFRhc3RlcyA9IHtcclxuICAgICAgXCJyZWQtd2luZVwiOiA8UmVkV2luZSBrZXk9ezB9Lz4sXHJcbiAgICAgIFwid2hpdGUtd2luZVwiOiA8V2hpdGVXaW5lIGtleT17MX0vPixcclxuICAgICAgdmVnZXRhYmxlczogPFZlZ2V0YWJsZXMga2V5PXsyfS8+LFxyXG4gICAgICBmcnVpdHM6IDxGcnVpdHMga2V5PXszfS8+LFxyXG4gICB9O1xyXG4gICBjb25zdCBjb3VudHJ5RmxhZ3MgPSB7XHJcbiAgICAgIEZyZW5jaDogXCIvaW1nL2ljb25zL2ZyZW5jaC1mbGFnLmpwZ1wiLFxyXG4gICAgICBSdXNzaWFuOiBcIi9pbWcvaWNvbnMvcnVzLWZsYWcuanBnXCIsXHJcbiAgIH07XHJcblxyXG4gICByZXR1cm4gKFxyXG4gICAgICA8TGluayBocmVmPXtocmVmfT5cclxuICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KHMuY2FyZCl9PlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChzLmJvZHkpfT5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlfSBhbHQ9e25hbWV9IGNsYXNzTmFtZT17Y2xzeChzLmltYWdlKX0gLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgeyEhc3R5bGUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChzLnN0eWxlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xzeChzLmNvdW50cnkpfT57c3R5bGV9IHN0eWxlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17Y291bnRyeUZsYWdzW3N0eWxlXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtzdHlsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KHMuZmxhZyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIHshIXRhc3Rlcy5sZW5ndGggJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChzLndlbGwpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Rhc3Rlcy5tYXAoKHRhc3RlLCBpKSA9PiBhbGxUYXN0ZXNbdGFzdGVdKX1cclxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtjbHN4KHMubmFtZSl9PntuYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xzeChzLmFkZGl0aW9uKX0+e2FkZGl0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcbmltcG9ydCB7IFNsaWRlciB9IGZyb20gXCJAY29tcG9uZW50cy9Db21tb24vU2xpZGVyL1NsaWRlclwiO1xyXG5pbXBvcnQgeyBOZXdUYXN0ZSB9IGZyb20gXCIuL05ld1Rhc3RlL05ld1Rhc3RlXCI7XHJcblxyXG5pbXBvcnQgcyBmcm9tIFwiLi9OZXdUYXN0ZXNTZWN0aW9uLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBnIGZyb20gXCJzcmMvc3R5bGVzL01haW4ubW9kdWxlLnNjc3NcIjtcclxuXHJcbmNvbnN0IG5ld1Byb2R1Y3RzID0gW1xyXG4gICB7XHJcbiAgICAgIGhyZWY6IFwiL1wiLFxyXG4gICAgICBpbWFnZTogXCJpbWcvY29udGVudC9zbGlkZS0xLmpwZ1wiLFxyXG4gICAgICBuYW1lOiBcItCa0LDQvNCw0LzQsdC10YAg0LrQvtC30LjQuVwiLFxyXG4gICAgICBhZGRpdGlvbjogXCLRgSDQsdC10LvQvtC5INC/0LvQtdGB0LXQvdGM0Y5cIixcclxuICAgICAgc3R5bGU6IFwiRnJlbmNoXCIsXHJcbiAgICAgIHRhc3RlczogW1wicmVkLXdpbmVcIiwgXCJ3aGl0ZS13aW5lXCIsIFwiZnJ1aXRzXCJdLFxyXG4gICB9LFxyXG4gICB7XHJcbiAgICAgIGhyZWY6IFwiL1wiLFxyXG4gICAgICBpbWFnZTogXCJpbWcvY29udGVudC9zbGlkZS0xLmpwZ1wiLFxyXG4gICAgICBuYW1lOiBcItCU0LbQtdC8INCw0LHRgNC40LrQvtGB0L7QstGL0LlcIixcclxuICAgICAgYWRkaXRpb246IFwi0YEg0LrQu9C10L3QvtCy0YvQvNC4INGI0LjRiNC60LDQvNC4XCIsXHJcbiAgICAgIHRhc3RlczogW1wicmVkLXdpbmVcIiwgXCJ2ZWdldGFibGVzXCIsIFwiZnJ1aXRzXCJdLFxyXG4gICB9LFxyXG4gICB7XHJcbiAgICAgIGhyZWY6IFwiL1wiLFxyXG4gICAgICBpbWFnZTogXCJpbWcvY29udGVudC9zbGlkZS0xLmpwZ1wiLFxyXG4gICAgICBuYW1lOiBcItCR0YDRjtGIINC60L7Qt9C40LlcIixcclxuICAgICAgYWRkaXRpb246IFwi0YEg0LHQtdC70L7QuSDQv9C70LXRgdC10L3RjNGOXCIsXHJcbiAgICAgIHN0eWxlOiBcIlJ1c3NpYW5cIixcclxuICAgICAgdGFzdGVzOiBbXSxcclxuICAgfSxcclxuICAge1xyXG4gICAgICBocmVmOiBcIi9cIixcclxuICAgICAgaW1hZ2U6IFwiaW1nL2NvbnRlbnQvc2xpZGUtMS5qcGdcIixcclxuICAgICAgbmFtZTogXCLQmtCw0LzQsNC80LHQtdGAINC60L7Qt9C40LlcIixcclxuICAgICAgYWRkaXRpb246IFwi0YEg0LHQtdC70L7QuSDQv9C70LXRgdC10L3RjNGOXCIsXHJcbiAgICAgIHN0eWxlOiBcIkZyZW5jaFwiLFxyXG4gICAgICB0YXN0ZXM6IFtcInJlZC13aW5lXCIsIFwid2hpdGUtd2luZVwiLCBcImZydWl0c1wiXSxcclxuICAgfSxcclxuICAge1xyXG4gICAgICBocmVmOiBcIi9cIixcclxuICAgICAgaW1hZ2U6IFwiaW1nL2NvbnRlbnQvc2xpZGUtMS5qcGdcIixcclxuICAgICAgbmFtZTogXCLQlNC20LXQvCDQsNCx0YDQuNC60L7RgdC+0LLRi9C5XCIsXHJcbiAgICAgIGFkZGl0aW9uOiBcItGBINC60LvQtdC90L7QstGL0LzQuCDRiNC40YjQutCw0LzQuFwiLFxyXG4gICAgICB0YXN0ZXM6IFtcInJlZC13aW5lXCIsIFwidmVnZXRhYmxlc1wiLCBcImZydWl0c1wiXSxcclxuICAgfSxcclxuICAge1xyXG4gICAgICBocmVmOiBcIi9cIixcclxuICAgICAgaW1hZ2U6IFwiaW1nL2NvbnRlbnQvc2xpZGUtMS5qcGdcIixcclxuICAgICAgbmFtZTogXCLQkdGA0Y7RiCDQutC+0LfQuNC5XCIsXHJcbiAgICAgIGFkZGl0aW9uOiBcItGBINCx0LXQu9C+0Lkg0L/Qu9C10YHQtdC90YzRjlwiLFxyXG4gICAgICBzdHlsZTogXCJSdXNzaWFuXCIsXHJcbiAgICAgIHRhc3RlczogW10sXHJcbiAgIH0sXHJcbiAgIHtcclxuICAgICAgaHJlZjogXCIvXCIsXHJcbiAgICAgIGltYWdlOiBcImltZy9jb250ZW50L3NsaWRlLTEuanBnXCIsXHJcbiAgICAgIG5hbWU6IFwi0JrQsNC80LDQvNCx0LXRgCDQutC+0LfQuNC5XCIsXHJcbiAgICAgIGFkZGl0aW9uOiBcItGBINCx0LXQu9C+0Lkg0L/Qu9C10YHQtdC90YzRjlwiLFxyXG4gICAgICBzdHlsZTogXCJGcmVuY2hcIixcclxuICAgICAgdGFzdGVzOiBbXCJyZWQtd2luZVwiLCBcIndoaXRlLXdpbmVcIiwgXCJmcnVpdHNcIl0sXHJcbiAgIH0sXHJcbiAgIHtcclxuICAgICAgaHJlZjogXCIvXCIsXHJcbiAgICAgIGltYWdlOiBcImltZy9jb250ZW50L3NsaWRlLTEuanBnXCIsXHJcbiAgICAgIG5hbWU6IFwi0JTQttC10Lwg0LDQsdGA0LjQutC+0YHQvtCy0YvQuVwiLFxyXG4gICAgICBhZGRpdGlvbjogXCLRgSDQutC70LXQvdC+0LLRi9C80Lgg0YjQuNGI0LrQsNC80LhcIixcclxuICAgICAgdGFzdGVzOiBbXCJyZWQtd2luZVwiLCBcInZlZ2V0YWJsZXNcIiwgXCJmcnVpdHNcIl0sXHJcbiAgIH0sXHJcbiAgIHtcclxuICAgICAgaHJlZjogXCIvXCIsXHJcbiAgICAgIGltYWdlOiBcImltZy9jb250ZW50L3NsaWRlLTEuanBnXCIsXHJcbiAgICAgIG5hbWU6IFwi0JHRgNGO0Ygg0LrQvtC30LjQuVwiLFxyXG4gICAgICBhZGRpdGlvbjogXCLRgSDQsdC10LvQvtC5INC/0LvQtdGB0LXQvdGM0Y5cIixcclxuICAgICAgc3R5bGU6IFwiUnVzc2lhblwiLFxyXG4gICAgICB0YXN0ZXM6IFtdLFxyXG4gICB9LFxyXG5dO1xyXG5jb25zdCBzbGlkZXJQYXJhbXMgPSB7XHJcbiAgIHNsaWRlcjoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICBzbGlkZXNQZXJHcm91cDogMyxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiA1MCxcclxuICAgfSxcclxuICAgbmF2OiB7XHJcbiAgICAgIGNvdW50ZXI6IHRydWUsXHJcbiAgIH0sXHJcbn07XHJcbmV4cG9ydCBjb25zdCBOZXdUYXN0ZXNTZWN0aW9uID0gKCkgPT4ge1xyXG4gICByZXR1cm4gKFxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2Nsc3gocy5uZXcpfT5cclxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goZy53cmFwcGVyKX0+XHJcbiAgICAgICAgICAgIDxTbGlkZXJcclxuICAgICAgICAgICAgICAgdGl0bGU9e1wi0J3QvtCy0YvQtSDQstC60YPRgdGLXCJ9XHJcbiAgICAgICAgICAgICAgIHNsaWRlcz17bmV3UHJvZHVjdHN9XHJcbiAgICAgICAgICAgICAgIHBhcmFtcz17c2xpZGVyUGFyYW1zfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgIDxOZXdUYXN0ZSAvPlxyXG4gICAgICAgICAgICA8L1NsaWRlcj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgKTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xyXG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSBcIkBjb21wb25lbnRzL0NvbW1vbi9Qcm9kdWN0L1Byb2R1Y3RcIjtcclxuXHJcbmltcG9ydCBzIGZyb20gXCIuL1Byb2R1Y3RzU2VjdGlvbi5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgZyBmcm9tIFwic3JjL3N0eWxlcy9NYWluLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFByb2R1Y3RzU2VjdGlvbiA9ICh7IHByb2R1Y3RzIH0pID0+IHtcclxuICAgLy8gY29uc29sZS5sb2cocHJvZHVjdHMpXHJcbiAgIGNvbnN0IFthY3RpdmVDYXRlZ29yeSwgc2V0QWN0aXZlQ2F0ZWdvcnldID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcbiAgIGNvbnN0IFthY3RpdmVTdWJjYXRlZ29yeSwgc2V0QWN0aXZlU3ViY2F0ZWdvcnldID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcblxyXG4gICBjb25zdCBzZXRBY3RpdmVJdGVtID0gKGksIHNldFN0YXRlKSA9PiB7XHJcbiAgICAgIHNldFN0YXRlKGkpO1xyXG4gICB9O1xyXG5cclxuICAgY29uc3QgY2F0ZWdvcmllcyA9IFtcclxuICAgICAge1xyXG4gICAgICAgICB0aXRsZTogXCLQodGL0YDRi1wiLFxyXG4gICAgICAgICBocmVmOiBcIi9cIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICB0aXRsZTogXCLQnNC+0LvQvtC60L5cIixcclxuICAgICAgICAgaHJlZjogXCIvXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAgdGl0bGU6IFwi0JTQtdGB0LXRgNGC0YtcIixcclxuICAgICAgICAgaHJlZjogXCIvXCIsXHJcbiAgICAgIH0sXHJcbiAgIF07XHJcblxyXG4gICBjb25zdCBzdWJDYXRlZ29yaWVzID0gW1xyXG4gICAgICB7XHJcbiAgICAgICAgIHRpdGxlOiBcItCh0LLQtdC20LjQtVwiLFxyXG4gICAgICAgICBocmVmOiBcIi9cIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICB0aXRsZTogXCLQnNGP0LPQutC40LVcIixcclxuICAgICAgICAgaHJlZjogXCIvXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAgdGl0bGU6IFwi0KLQstC10YDQtNGL0LVcIixcclxuICAgICAgICAgaHJlZjogXCIvXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAgdGl0bGU6IFwi0KEg0LHQtdC70L7QuSDQv9C70LXRgdC10L3RjNGOXCIsXHJcbiAgICAgICAgIGhyZWY6IFwiL1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgIHRpdGxlOiBcItChINCz0L7Qu9GD0LHQvtC5INC/0LvQtdGB0LXQvdGM0Y5cIixcclxuICAgICAgICAgaHJlZjogXCIvXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAgdGl0bGU6IFwi0JrQvtGA0L7QstC40LlcIixcclxuICAgICAgICAgaHJlZjogXCIvXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAgdGl0bGU6IFwi0JrQvtC30LjQuVwiLFxyXG4gICAgICAgICBocmVmOiBcIi9cIixcclxuICAgICAgfSxcclxuICAgXTtcclxuXHJcbiAgIHJldHVybiAoXHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xzeChzLnByb2R1Y3RzKX0+XHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KGcud3JhcHBlcil9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChzLmhlYWRlcil9PlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChzLmNhdGVnb3JpZXMpfT5cclxuICAgICAgICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICA8aDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzLmNhdGVnb3J5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVDYXRlZ29yeSA9PT0gaSA/IHMuYWN0aXZlIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVJdGVtKGksIHNldEFjdGl2ZUNhdGVnb3J5KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChzLnN1YmNhdGVnb3JpZXMpfT5cclxuICAgICAgICAgICAgICAgICAge3N1YkNhdGVnb3JpZXMubWFwKChzdWJjYXRlZ29yeSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuc3ViY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVN1YmNhdGVnb3J5ID09PSBpID8gcy5hY3RpdmUgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZUl0ZW0oaSwgc2V0QWN0aXZlU3ViY2F0ZWdvcnkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3N1YmNhdGVnb3J5LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3gocy5ib2R5KX0+XHJcbiAgICAgICAgICAgICAgIHtwcm9kdWN0cyAmJlxyXG4gICAgICAgICAgICAgICAgICBwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3Qga2V5PXtwcm9kdWN0LmlkfSB7Li4ucHJvZHVjdH0gLz5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICApO1xyXG59O1xyXG5cclxuIiwiaW1wb3J0IHtcclxuICAgUmVkV2luZSxcclxuICAgV2hpdGVXaW5lLFxyXG4gICBWZWdldGFibGVzLFxyXG4gICBGcnVpdHMsXHJcbn0gZnJvbSBcIkBjb21wb25lbnRzL1NWRy9UYXN0ZXNTVkcvVGFzdGVzU1ZHXCI7XHJcblxyXG5leHBvcnQgY29uc3QgYWxsU3RhdHVzID0ge1xyXG4gICBhdmFsaWFibGU6IHtcclxuICAgICAgdGl0bGU6IFwi0LIg0L3QsNC70LjRh9C40LhcIixcclxuICAgICAgY2xhc3M6IFwiYXZhbGlhYmxlXCIsXHJcbiAgIH0sXHJcbiAgIHByZXBhcmluZzoge1xyXG4gICAgICB0aXRsZTogXCLRgdC+0LfRgNC10LLQsNC10YJcIixcclxuICAgICAgY2xhc3M6IFwicHJlcGFyaW5nXCIsXHJcbiAgIH0sXHJcbiAgIFwibm90LWF2YWxpYWJsZVwiOiB7XHJcbiAgICAgIHRpdGxlOiBcItC90LXRgiDQsiDQvdCw0LvQuNGH0LjQuFwiLFxyXG4gICAgICBjbGFzczogXCJub3QtYXZhbGlhYmxlXCIsXHJcbiAgIH0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWxsVGFzdGVzID0ge1xyXG4gICBcInJlZC13aW5lXCI6IDxSZWRXaW5lIGJvcmRlcj17XCJhY2NlbnRcIn0ga2V5PXswfSAvPixcclxuICAgXCJ3aGl0ZS13aW5lXCI6IDxXaGl0ZVdpbmUgYm9yZGVyPXtcImFjY2VudFwifSBrZXk9ezF9IC8+LFxyXG4gICB2ZWdldGFibGVzOiA8VmVnZXRhYmxlcyBib3JkZXI9e1wiYWNjZW50XCJ9IGtleT17Mn0gLz4sXHJcbiAgIGZydWl0czogPEZydWl0cyBib3JkZXI9e1wiYWNjZW50XCJ9IGtleT17M30gLz4sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcHJvZHVjdHMgPSBbXHJcbiAgIHtcclxuICAgICAgc3RhdHVzOiBcImF2YWxpYWJsZVwiLFxyXG4gICAgICBhbGxTdGF0dXM6IFtcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcImF2YWxpYWJsZVwiLFxyXG4gICAgICAgICAgICBjb3VudDogMjAsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJwcmVwYXJpbmdcIixcclxuICAgICAgICAgICAgY291bnQ6IDE1LFxyXG4gICAgICAgICAgICBkYXRlOiBcIjE1LjA4LjIwMjFcIixcclxuICAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgaW1hZ2U6IFwiL3N0YXRpYy9pbWcvY29udGVudC9jYW1hbWJlckdvYXQucG5nXCIsXHJcbiAgICAgIGdhbGxlcnk6IFtcclxuICAgICAgICAgXCIvc3RhdGljL2ltZy9jb250ZW50L2NhbWFtYmVyR29hdC5wbmdcIixcclxuICAgICAgICAgXCIvc3RhdGljL2ltZy9jb250ZW50L3NsaWRlLTEuanBnXCIsXHJcbiAgICAgICAgIFwiL3N0YXRpYy9pbWcvY29udGVudC9yZWNpcGUtMi5qcGdcIixcclxuICAgICAgICAgXCIvc3RhdGljL2ltZy9jb250ZW50L3JlY2lwZS0zLmpwZ1wiLFxyXG4gICAgICBdLFxyXG4gICAgICBuYW1lOiBcItCa0LDQvNCw0LzQsdC10YAg0LrQvtC30LjQuVwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgXCLQpNGA0LDQvdGG0YPQt9GB0LrQuNC5INGB0YvRgCDQuNC3INC80L7Qu9C+0LrQsCDQutC+0LfRiyDQv9GA0L7QtNC+0LvQs9C+0LLQsNGC0L7QuSDRhNC+0YDQvNGLLCDQuNC80LXRjtGJ0LjQuSDRgdCy0LXQttC40Lkg0YDQtdC30LrQuNC5INC30LDQv9Cw0YUg0Lgg0L3QtdC20L3Ri9C5INGB0LvQuNCy0L7Rh9C90YvQuSDQstC60YPRgSDQsiDRgdC10YDQtdC00LjQvdC1INC4INC/0LjQutCw0L3RgtC90YvQuSDQstC60YPRgSDRgyDQutC+0YDQvtGH0LrQuCwg0L/QvtC60YDRi9GC0L7QuSDQu9C10LPQutC+0Lkg0LHQtdC70L7QuSDQv9C70LXRgdC10L3RjNGOLlwiLFxyXG4gICAgICBhZGRpdGlvbjogXCLRgSDQsdC10LvQvtC5INC/0LvQtdGB0LXQvdGM0Y5cIixcclxuICAgICAgd2VpZ2h0OiBcIjIwMCDQs9GAXCIsXHJcbiAgICAgIHByaWNlOiAzMjAsXHJcbiAgICAgIHRhc3RlczogW1wicmVkLXdpbmVcIiwgXCJmcnVpdHNcIl0sXHJcbiAgICAgIGxpbms6IFwiL2NhcmRcIixcclxuICAgICAgaWQ6IDIzLFxyXG4gICB9LFxyXG4gICB7XHJcbiAgICAgIHN0YXR1czogXCJwcmVwYXJpbmdcIixcclxuICAgICAgYWxsU3RhdHVzOiBbXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJhdmFsaWFibGVcIixcclxuICAgICAgICAgICAgY291bnQ6IDIwLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwicHJlcGFyaW5nXCIsXHJcbiAgICAgICAgICAgIGNvdW50OiAxNSxcclxuICAgICAgICAgICAgZGF0ZTogXCIxNS4wOC4yMDIxXCIsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIGltYWdlOiBcIi9zdGF0aWMvaW1nL2NvbnRlbnQvY2FtYW1iZXJDb3cucG5nXCIsXHJcbiAgICAgIGdhbGxlcnk6IFtcclxuICAgICAgICAgXCIvc3RhdGljL2ltZy9jb250ZW50L2NhbWFtYmVyQ293LnBuZ1wiLFxyXG4gICAgICAgICBcIi9zdGF0aWMvaW1nL2NvbnRlbnQvc2xpZGUtMS5qcGdcIixcclxuICAgICAgICAgXCIvc3RhdGljL2ltZy9jb250ZW50L3JlY2lwZS0yLmpwZ1wiLFxyXG4gICAgICAgICBcIi9zdGF0aWMvaW1nL2NvbnRlbnQvcmVjaXBlLTMuanBnXCIsXHJcbiAgICAgIF0sXHJcbiAgICAgIG5hbWU6IFwi0JrQsNC80LDQvNCx0LXRgCDQutC+0YDQvtCy0LjQuVwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgXCLQpNGA0LDQvdGG0YPQt9GB0LrQuNC5INGB0YvRgCDQuNC3INC80L7Qu9C+0LrQsCDQutC+0LfRiyDQv9GA0L7QtNC+0LvQs9C+0LLQsNGC0L7QuSDRhNC+0YDQvNGLLCDQuNC80LXRjtGJ0LjQuSDRgdCy0LXQttC40Lkg0YDQtdC30LrQuNC5INC30LDQv9Cw0YUg0Lgg0L3QtdC20L3Ri9C5INGB0LvQuNCy0L7Rh9C90YvQuSDQstC60YPRgSDQsiDRgdC10YDQtdC00LjQvdC1INC4INC/0LjQutCw0L3RgtC90YvQuSDQstC60YPRgSDRgyDQutC+0YDQvtGH0LrQuCwg0L/QvtC60YDRi9GC0L7QuSDQu9C10LPQutC+0Lkg0LHQtdC70L7QuSDQv9C70LXRgdC10L3RjNGOLlwiLFxyXG4gICAgICBhZGRpdGlvbjogXCLRgSDQsdC10LvQvtC5INC/0LvQtdGB0LXQvdGM0Y5cIixcclxuICAgICAgd2VpZ2h0OiBcIjIwMCDQs9GAXCIsXHJcbiAgICAgIHByaWNlOiAzMjAsXHJcbiAgICAgIHRhc3RlczogW1wid2hpdGUtd2luZVwiLCBcInZlZ2V0YWJsZXNcIl0sXHJcbiAgICAgIGxpbms6IFwiL2NhcmRcIixcclxuICAgICAgaWQ6IDIwLFxyXG4gICB9LFxyXG4gICB7XHJcbiAgICAgIHN0YXR1czogXCJhdmFsaWFibGVcIixcclxuICAgICAgYWxsU3RhdHVzOiBbXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJhdmFsaWFibGVcIixcclxuICAgICAgICAgICAgY291bnQ6IDIwLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwicHJlcGFyaW5nXCIsXHJcbiAgICAgICAgICAgIGNvdW50OiAxNSxcclxuICAgICAgICAgICAgZGF0ZTogXCIxNS4wOC4yMDIxXCIsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIGltYWdlOiBcIi9zdGF0aWMvaW1nL2NvbnRlbnQvZ29hdEJhbGFuY2UucG5nXCIsXHJcbiAgICAgIGdhbGxlcnk6IFtcclxuICAgICAgICAgXCIvc3RhdGljL2ltZy9jb250ZW50L2dvYXRCYWxhbmNlLnBuZ1wiLFxyXG4gICAgICAgICBcIi9zdGF0aWMvaW1nL2NvbnRlbnQvc2xpZGUtMS5qcGdcIixcclxuICAgICAgICAgXCIvc3RhdGljL2ltZy9jb250ZW50L3JlY2lwZS0yLmpwZ1wiLFxyXG4gICAgICAgICBcIi9zdGF0aWMvaW1nL2NvbnRlbnQvcmVjaXBlLTMuanBnXCIsXHJcbiAgICAgIF0sXHJcbiAgICAgIG5hbWU6IFwiQ9GL0YAg0JrQvtC30LjQuSDQktCw0LvQsNC90YHQtVwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgXCLQpNGA0LDQvdGG0YPQt9GB0LrQuNC5INGB0YvRgCDQuNC3INC80L7Qu9C+0LrQsCDQutC+0LfRiyDQv9GA0L7QtNC+0LvQs9C+0LLQsNGC0L7QuSDRhNC+0YDQvNGLLCDQuNC80LXRjtGJ0LjQuSDRgdCy0LXQttC40Lkg0YDQtdC30LrQuNC5INC30LDQv9Cw0YUg0Lgg0L3QtdC20L3Ri9C5INGB0LvQuNCy0L7Rh9C90YvQuSDQstC60YPRgSDQsiDRgdC10YDQtdC00LjQvdC1INC4INC/0LjQutCw0L3RgtC90YvQuSDQstC60YPRgSDRgyDQutC+0YDQvtGH0LrQuCwg0L/QvtC60YDRi9GC0L7QuSDQu9C10LPQutC+0Lkg0LHQtdC70L7QuSDQv9C70LXRgdC10L3RjNGOLlwiLFxyXG4gICAgICBhZGRpdGlvbjogXCLRgSDQsdC10LvQvtC5INC/0LvQtdGB0LXQvdGM0Y5cIixcclxuICAgICAgd2VpZ2h0OiBcIjIwMCDQs9GAXCIsXHJcbiAgICAgIHByaWNlOiA2NTAsXHJcbiAgICAgIHRhc3RlczogW1wid2hpdGUtd2luZVwiLCBcInZlZ2V0YWJsZXNcIl0sXHJcbiAgICAgIGxpbms6IFwiL2NhcmRcIixcclxuICAgICAgaWQ6IDIsXHJcbiAgIH0sXHJcbiAgIHtcclxuICAgICAgc3RhdHVzOiBcImF2YWxpYWJsZVwiLFxyXG4gICAgICBhbGxTdGF0dXM6IFtcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcImF2YWxpYWJsZVwiLFxyXG4gICAgICAgICAgICBjb3VudDogMjAsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJwcmVwYXJpbmdcIixcclxuICAgICAgICAgICAgY291bnQ6IDE1LFxyXG4gICAgICAgICAgICBkYXRlOiBcIjE1LjA4LjIwMjFcIixcclxuICAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgaW1hZ2U6IFwiL3N0YXRpYy9pbWcvY29udGVudC9nb2F0QmFsYW5jZTIucG5nXCIsXHJcbiAgICAgIGdhbGxlcnk6IFtcclxuICAgICAgICAgXCIvc3RhdGljL2ltZy9jb250ZW50L2dvYXRCYWxhbmNlMi5wbmdcIixcclxuICAgICAgICAgXCIvc3RhdGljL2ltZy9jb250ZW50L3NsaWRlLTEuanBnXCIsXHJcbiAgICAgICAgIFwiL3N0YXRpYy9pbWcvY29udGVudC9yZWNpcGUtMi5qcGdcIixcclxuICAgICAgICAgXCIvc3RhdGljL2ltZy9jb250ZW50L3JlY2lwZS0zLmpwZ1wiLFxyXG4gICAgICBdLFxyXG4gICAgICBuYW1lOiBcIkPRi9GAINCa0L7Qt9C40Lkg0JLQsNC70LDQvdGB0LVcIixcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgIFwi0KTRgNCw0L3RhtGD0LfRgdC60LjQuSDRgdGL0YAg0LjQtyDQvNC+0LvQvtC60LAg0LrQvtC30Ysg0L/RgNC+0LTQvtC70LPQvtCy0LDRgtC+0Lkg0YTQvtGA0LzRiywg0LjQvNC10Y7RidC40Lkg0YHQstC10LbQuNC5INGA0LXQt9C60LjQuSDQt9Cw0L/QsNGFINC4INC90LXQttC90YvQuSDRgdC70LjQstC+0YfQvdGL0Lkg0LLQutGD0YEg0LIg0YHQtdGA0LXQtNC40L3QtSDQuCDQv9C40LrQsNC90YLQvdGL0Lkg0LLQutGD0YEg0YMg0LrQvtGA0L7Rh9C60LgsINC/0L7QutGA0YvRgtC+0Lkg0LvQtdCz0LrQvtC5INCx0LXQu9C+0Lkg0L/Qu9C10YHQtdC90YzRji5cIixcclxuICAgICAgYWRkaXRpb246IFwi0YEg0LHQtdC70L7QuSDQv9C70LXRgdC10L3RjNGOXCIsXHJcbiAgICAgIHdlaWdodDogXCIyMDAg0LPRgFwiLFxyXG4gICAgICBwcmljZTogNTAwLFxyXG4gICAgICB0YXN0ZXM6IFtcIndoaXRlLXdpbmVcIiwgXCJ2ZWdldGFibGVzXCJdLFxyXG4gICAgICBsaW5rOiBcIi9jYXJkXCIsXHJcbiAgICAgIGlkOiAzLFxyXG4gICB9LFxyXG4gICB7XHJcbiAgICAgIHN0YXR1czogXCJwcmVwYXJpbmdcIixcclxuICAgICAgYWxsU3RhdHVzOiBbXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJhdmFsaWFibGVcIixcclxuICAgICAgICAgICAgY291bnQ6IDIwLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwicHJlcGFyaW5nXCIsXHJcbiAgICAgICAgICAgIGNvdW50OiAxNSxcclxuICAgICAgICAgICAgZGF0ZTogXCIxNS4wOC4yMDIxXCIsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIGltYWdlOiBcIi9zdGF0aWMvaW1nL2NvbnRlbnQvYnVzaERlU2hldnIucG5nXCIsXHJcbiAgICAgIGdhbGxlcnk6IFtcclxuICAgICAgICAgXCIvc3RhdGljL2ltZy9jb250ZW50L2J1c2hEZVNoZXZyLnBuZ1wiLFxyXG4gICAgICAgICBcIi9zdGF0aWMvaW1nL2NvbnRlbnQvc2xpZGUtMS5qcGdcIixcclxuICAgICAgICAgXCIvc3RhdGljL2ltZy9jb250ZW50L3JlY2lwZS0yLmpwZ1wiLFxyXG4gICAgICAgICBcIi9zdGF0aWMvaW1nL2NvbnRlbnQvcmVjaXBlLTMuanBnXCIsXHJcbiAgICAgIF0sXHJcbiAgICAgIG5hbWU6IFwi0JHRjtGIINC00LUg0YjQtdCy0YBcIixcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgIFwi0KTRgNCw0L3RhtGD0LfRgdC60LjQuSDRgdGL0YAg0LjQtyDQvNC+0LvQvtC60LAg0LrQvtC30Ysg0L/RgNC+0LTQvtC70LPQvtCy0LDRgtC+0Lkg0YTQvtGA0LzRiywg0LjQvNC10Y7RidC40Lkg0YHQstC10LbQuNC5INGA0LXQt9C60LjQuSDQt9Cw0L/QsNGFINC4INC90LXQttC90YvQuSDRgdC70LjQstC+0YfQvdGL0Lkg0LLQutGD0YEg0LIg0YHQtdGA0LXQtNC40L3QtSDQuCDQv9C40LrQsNC90YLQvdGL0Lkg0LLQutGD0YEg0YMg0LrQvtGA0L7Rh9C60LgsINC/0L7QutGA0YvRgtC+0Lkg0LvQtdCz0LrQvtC5INCx0LXQu9C+0Lkg0L/Qu9C10YHQtdC90YzRji5cIixcclxuICAgICAgd2VpZ2h0OiBcIjIwMCDQs9GAXCIsXHJcbiAgICAgIHByaWNlOiA1MDAsXHJcbiAgICAgIHRhc3RlczogW1wid2hpdGUtd2luZVwiLCBcInZlZ2V0YWJsZXNcIl0sXHJcbiAgICAgIGxpbms6IFwiL2NhcmRcIixcclxuICAgICAgaWQ6IDQsXHJcbiAgIH0sXHJcbiAgIHtcclxuICAgICAgc3RhdHVzOiBcImF2YWxpYWJsZVwiLFxyXG4gICAgICBhbGxTdGF0dXM6IFtcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcImF2YWxpYWJsZVwiLFxyXG4gICAgICAgICAgICBjb3VudDogMjAsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJwcmVwYXJpbmdcIixcclxuICAgICAgICAgICAgY291bnQ6IDE1LFxyXG4gICAgICAgICAgICBkYXRlOiBcIjE1LjA4LjIwMjFcIixcclxuICAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgaW1hZ2U6IFwiL3N0YXRpYy9pbWcvY29udGVudC9tb3p6YXJlbGxhLnBuZ1wiLFxyXG4gICAgICBnYWxsZXJ5OiBbXHJcbiAgICAgICAgIFwiL3N0YXRpYy9pbWcvY29udGVudC9tb3p6YXJlbGxhLnBuZ1wiLFxyXG4gICAgICAgICBcIi9zdGF0aWMvaW1nL2NvbnRlbnQvc2xpZGUtMS5qcGdcIixcclxuICAgICAgICAgXCIvc3RhdGljL2ltZy9jb250ZW50L3JlY2lwZS0yLmpwZ1wiLFxyXG4gICAgICAgICBcIi9zdGF0aWMvaW1nL2NvbnRlbnQvcmVjaXBlLTMuanBnXCIsXHJcbiAgICAgIF0sXHJcbiAgICAgIG5hbWU6IFwi0JzQvtGG0LDRgNC10LvQu9CwXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICBcItCk0YDQsNC90YbRg9C30YHQutC40Lkg0YHRi9GAINC40Lcg0LzQvtC70L7QutCwINC60L7Qt9GLINC/0YDQvtC00L7Qu9Cz0L7QstCw0YLQvtC5INGE0L7RgNC80YssINC40LzQtdGO0YnQuNC5INGB0LLQtdC20LjQuSDRgNC10LfQutC40Lkg0LfQsNC/0LDRhSDQuCDQvdC10LbQvdGL0Lkg0YHQu9C40LLQvtGH0L3Ri9C5INCy0LrRg9GBINCyINGB0LXRgNC10LTQuNC90LUg0Lgg0L/QuNC60LDQvdGC0L3Ri9C5INCy0LrRg9GBINGDINC60L7RgNC+0YfQutC4LCDQv9C+0LrRgNGL0YLQvtC5INC70LXQs9C60L7QuSDQsdC10LvQvtC5INC/0LvQtdGB0LXQvdGM0Y4uXCIsXHJcbiAgICAgIHdlaWdodDogXCIyMDAg0LPRgFwiLFxyXG4gICAgICBwcmljZTogNTAwLFxyXG4gICAgICBsaW5rOiBcIi9jYXJkXCIsXHJcbiAgICAgIGlkOiAyOSxcclxuICAgfSxcclxuICAge1xyXG4gICAgICBzdGF0dXM6IFwibm90LWF2YWxpYWJsZVwiLFxyXG4gICAgICBhbGxTdGF0dXM6IFtcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcImF2YWxpYWJsZVwiLFxyXG4gICAgICAgICAgICBjb3VudDogMjAsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJwcmVwYXJpbmdcIixcclxuICAgICAgICAgICAgY291bnQ6IDE1LFxyXG4gICAgICAgICAgICBkYXRlOiBcIjE1LjA4LjIwMjFcIixcclxuICAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgaW1hZ2U6IFwiL3N0YXRpYy9pbWcvY29udGVudC9idXJhdHRhLnBuZ1wiLFxyXG4gICAgICBnYWxsZXJ5OiBbXHJcbiAgICAgICAgIFwiL3N0YXRpYy9pbWcvY29udGVudC9idXJhdHRhLnBuZ1wiLFxyXG4gICAgICAgICBcIi9zdGF0aWMvaW1nL2NvbnRlbnQvc2xpZGUtMS5qcGdcIixcclxuICAgICAgICAgXCIvc3RhdGljL2ltZy9jb250ZW50L3JlY2lwZS0yLmpwZ1wiLFxyXG4gICAgICAgICBcIi9zdGF0aWMvaW1nL2NvbnRlbnQvcmVjaXBlLTMuanBnXCIsXHJcbiAgICAgIF0sXHJcbiAgICAgIG5hbWU6IFwi0JHRg9GA0LDRgtGC0LBcIixcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgIFwi0KTRgNCw0L3RhtGD0LfRgdC60LjQuSDRgdGL0YAg0LjQtyDQvNC+0LvQvtC60LAg0LrQvtC30Ysg0L/RgNC+0LTQvtC70LPQvtCy0LDRgtC+0Lkg0YTQvtGA0LzRiywg0LjQvNC10Y7RidC40Lkg0YHQstC10LbQuNC5INGA0LXQt9C60LjQuSDQt9Cw0L/QsNGFINC4INC90LXQttC90YvQuSDRgdC70LjQstC+0YfQvdGL0Lkg0LLQutGD0YEg0LIg0YHQtdGA0LXQtNC40L3QtSDQuCDQv9C40LrQsNC90YLQvdGL0Lkg0LLQutGD0YEg0YMg0LrQvtGA0L7Rh9C60LgsINC/0L7QutGA0YvRgtC+0Lkg0LvQtdCz0LrQvtC5INCx0LXQu9C+0Lkg0L/Qu9C10YHQtdC90YzRji5cIixcclxuICAgICAgd2VpZ2h0OiBcIjIwMCDQs9GAXCIsXHJcbiAgICAgIHByaWNlOiA1MDAsXHJcbiAgICAgIHRhc3RlczogW1wid2hpdGUtd2luZVwiLCBcInZlZ2V0YWJsZXNcIl0sXHJcbiAgICAgIGxpbms6IFwiL2NhcmRcIixcclxuICAgICAgaWQ6IDE4LFxyXG4gICB9LFxyXG4gICB7XHJcbiAgICAgIHN0YXR1czogXCJhdmFsaWFibGVcIixcclxuICAgICAgYWxsU3RhdHVzOiBbXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJhdmFsaWFibGVcIixcclxuICAgICAgICAgICAgY291bnQ6IDIwLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwicHJlcGFyaW5nXCIsXHJcbiAgICAgICAgICAgIGNvdW50OiAxNSxcclxuICAgICAgICAgICAgZGF0ZTogXCIxNS4wOC4yMDIxXCIsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIGltYWdlOiBcIi9zdGF0aWMvaW1nL2NvbnRlbnQvc3RyYWNoZWxsYS5wbmdcIixcclxuICAgICAgZ2FsbGVyeTogW1xyXG4gICAgICAgICBcIi9zdGF0aWMvaW1nL2NvbnRlbnQvc3RyYWNoZWxsYS5wbmdcIixcclxuICAgICAgICAgXCIvc3RhdGljL2ltZy9jb250ZW50L3NsaWRlLTEuanBnXCIsXHJcbiAgICAgICAgIFwiL3N0YXRpYy9pbWcvY29udGVudC9yZWNpcGUtMi5qcGdcIixcclxuICAgICAgICAgXCIvc3RhdGljL2ltZy9jb250ZW50L3JlY2lwZS0zLmpwZ1wiLFxyXG4gICAgICBdLFxyXG4gICAgICBuYW1lOiBcItCh0YLRgNCw0YfQtdC70LvQsFwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgXCLQpNGA0LDQvdGG0YPQt9GB0LrQuNC5INGB0YvRgCDQuNC3INC80L7Qu9C+0LrQsCDQutC+0LfRiyDQv9GA0L7QtNC+0LvQs9C+0LLQsNGC0L7QuSDRhNC+0YDQvNGLLCDQuNC80LXRjtGJ0LjQuSDRgdCy0LXQttC40Lkg0YDQtdC30LrQuNC5INC30LDQv9Cw0YUg0Lgg0L3QtdC20L3Ri9C5INGB0LvQuNCy0L7Rh9C90YvQuSDQstC60YPRgSDQsiDRgdC10YDQtdC00LjQvdC1INC4INC/0LjQutCw0L3RgtC90YvQuSDQstC60YPRgSDRgyDQutC+0YDQvtGH0LrQuCwg0L/QvtC60YDRi9GC0L7QuSDQu9C10LPQutC+0Lkg0LHQtdC70L7QuSDQv9C70LXRgdC10L3RjNGOLlwiLFxyXG4gICAgICB3ZWlnaHQ6IFwiMjAwINCz0YBcIixcclxuICAgICAgcHJpY2U6IDUwMCxcclxuICAgICAgdGFzdGVzOiBbXCJ3aGl0ZS13aW5lXCIsIFwidmVnZXRhYmxlc1wiXSxcclxuICAgICAgbGluazogXCIvY2FyZFwiLFxyXG4gICAgICBpZDogNyxcclxuICAgfSxcclxuICAge1xyXG4gICAgICBzdGF0dXM6IFwicHJlcGFyaW5nXCIsXHJcbiAgICAgIGFsbFN0YXR1czogW1xyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiYXZhbGlhYmxlXCIsXHJcbiAgICAgICAgICAgIGNvdW50OiAyMCxcclxuICAgICAgICAgfSxcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcInByZXBhcmluZ1wiLFxyXG4gICAgICAgICAgICBjb3VudDogMTUsXHJcbiAgICAgICAgICAgIGRhdGU6IFwiMTUuMDguMjAyMVwiLFxyXG4gICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICBpbWFnZTogXCIvc3RhdGljL2ltZy9jb250ZW50L2J1c2hEZVNoZXZyLnBuZ1wiLFxyXG4gICAgICBnYWxsZXJ5OiBbXHJcbiAgICAgICAgIFwiL3N0YXRpYy9pbWcvY29udGVudC9idXNoRGVTaGV2ci5wbmdcIixcclxuICAgICAgICAgXCIvc3RhdGljL2ltZy9jb250ZW50L3NsaWRlLTEuanBnXCIsXHJcbiAgICAgICAgIFwiL3N0YXRpYy9pbWcvY29udGVudC9yZWNpcGUtMi5qcGdcIixcclxuICAgICAgICAgXCIvc3RhdGljL2ltZy9jb250ZW50L3JlY2lwZS0zLmpwZ1wiLFxyXG4gICAgICBdLFxyXG4gICAgICBuYW1lOiBcItCR0Y7RiCDQtNC1INGI0LXQstGAXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICBcItCk0YDQsNC90YbRg9C30YHQutC40Lkg0YHRi9GAINC40Lcg0LzQvtC70L7QutCwINC60L7Qt9GLINC/0YDQvtC00L7Qu9Cz0L7QstCw0YLQvtC5INGE0L7RgNC80YssINC40LzQtdGO0YnQuNC5INGB0LLQtdC20LjQuSDRgNC10LfQutC40Lkg0LfQsNC/0LDRhSDQuCDQvdC10LbQvdGL0Lkg0YHQu9C40LLQvtGH0L3Ri9C5INCy0LrRg9GBINCyINGB0LXRgNC10LTQuNC90LUg0Lgg0L/QuNC60LDQvdGC0L3Ri9C5INCy0LrRg9GBINGDINC60L7RgNC+0YfQutC4LCDQv9C+0LrRgNGL0YLQvtC5INC70LXQs9C60L7QuSDQsdC10LvQvtC5INC/0LvQtdGB0LXQvdGM0Y4uXCIsXHJcbiAgICAgIHdlaWdodDogXCIyMDAg0LPRgFwiLFxyXG4gICAgICBwcmljZTogNTAwLFxyXG4gICAgICB0YXN0ZXM6IFtcIndoaXRlLXdpbmVcIiwgXCJ2ZWdldGFibGVzXCJdLFxyXG4gICAgICBsaW5rOiBcIi9jYXJkXCIsXHJcbiAgICAgIGlkOiA0MCxcclxuICAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBCQVNFX1VSTCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDEvJzsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIkBjb21wb25lbnRzL0NvbW1vbi9IZWFkZXIvSGVhZGVyXCI7XHJcbmltcG9ydCB7IFByb2R1Y3RzU2VjdGlvbiB9IGZyb20gXCJAY29tcG9uZW50cy9TZWN0aW9ucy9Db21tb24vUHJvZHVjdHNTZWN0aW9uL1Byb2R1Y3RzU2VjdGlvblwiO1xyXG5pbXBvcnQgeyBOZXdUYXN0ZXNTZWN0aW9uIH0gZnJvbSBcIkBjb21wb25lbnRzL1NlY3Rpb25zL0NvbW1vbi9OZXdUYXN0ZXNTZWN0aW9uL05ld1Rhc3Rlc1NlY3Rpb25cIjtcclxuaW1wb3J0IHsgRGlzY291bnRTZWN0aW9uIH0gZnJvbSBcIkBjb21wb25lbnRzL1NlY3Rpb25zL0NvbW1vbi9EaXNjb3VudFNlY3Rpb24vRGlzY291bnRTZWN0aW9uXCI7XHJcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gXCJAY29tcG9uZW50cy9Db21tb24vRm9vdGVyL0Zvb3RlclwiO1xyXG5pbXBvcnQgeyBEaXNjb3VudCB9IGZyb20gXCJAY29tcG9uZW50cy9Db21tb24vRGlzY291bnQvRGlzY291bnRcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuaW1wb3J0IGcgZnJvbSBcInNyYy9zdHlsZXMvTWFpbi5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuY29uc3QgcHJvZHVjdHMgPSAoe3Byb2R1Y3RzfSkgPT4ge1xyXG5cclxuICAgcmV0dXJuIChcclxuICAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+PC9IZWFkPlxyXG4gICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT17Y2xzeChnLm1haW4sIGcucHQpfT5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2cud3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICAgIDxEaXNjb3VudFxyXG4gICAgICAgICAgICAgICAgICAgICB0ZXh0PXtcItCS0LDQvCDQv9GA0LXQtNGB0YLQsNCy0LvQtdC90LAg0YHQutC40LTQutCwINC90LAg0L/QtdGA0YvQuSDQt9Cw0LrQsNC3IDEwJVwifVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtnLnRpdGxlfT7Qn9GA0L7QtNGD0LrRhtC40Y88L2gxPlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPFByb2R1Y3RzU2VjdGlvbiBwcm9kdWN0cz17cHJvZHVjdHN9Lz5cclxuICAgICAgICAgICAgICAgPE5ld1Rhc3Rlc1NlY3Rpb24gLz5cclxuICAgICAgICAgICAgICAgPERpc2NvdW50U2VjdGlvbiAvPlxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICAgPC8+XHJcbiAgICk7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvZHVjdHM7XHJcblxyXG5jb25zdCByZXF1ZXN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9kYXRhXCIpO1xyXG4gICByZXR1cm4gZGF0YTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgcmVxdWVzdCgpO1xyXG4gICByZXR1cm4geyBwcm9wczogeyBwcm9kdWN0cyB9IH07XHJcbn07XHJcblxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJEaXNjb3VudF9jb250YWluZXJfXzFTcVhOXCIsXG5cdFwiY2xvc2VcIjogXCJEaXNjb3VudF9jbG9zZV9fM1JOLUJcIixcblx0XCJ0ZXh0XCI6IFwiRGlzY291bnRfdGV4dF9fMTJDcXlcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhY3RcIjogXCJGb290ZXJfY29udGFjdF9fMjAzZnRcIixcblx0XCJsaW5rXCI6IFwiRm9vdGVyX2xpbmtfXzNNWHBZXCIsXG5cdFwiZm9vdGVyXCI6IFwiRm9vdGVyX2Zvb3Rlcl9fOGQ5UW5cIixcblx0XCJjb250YWluZXJcIjogXCJGb290ZXJfY29udGFpbmVyX18xQjFSYVwiLFxuXHRcImJsb2NrXCI6IFwiRm9vdGVyX2Jsb2NrX18yZTR1a1wiLFxuXHRcIm1lbnVcIjogXCJGb290ZXJfbWVudV9fUmlSX2pcIixcblx0XCJpbmZvXCI6IFwiRm9vdGVyX2luZm9fXzJ4NmVNXCIsXG5cdFwiYWRkcmVzc1wiOiBcIkZvb3Rlcl9hZGRyZXNzX18zQWdCTVwiLFxuXHRcImNvbnRhY3RzXCI6IFwiRm9vdGVyX2NvbnRhY3RzX18zcG9VT1wiLFxuXHRcImFzYXBcIjogXCJGb290ZXJfYXNhcF9fM3RUNGFcIixcblx0XCJjb3JwXCI6IFwiRm9vdGVyX2NvcnBfXzJYTEV3XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250cm9sXCI6IFwiSGVhZGVyX2NvbnRyb2xfXzNrMUk0XCIsXG5cdFwiYmxvY2tcIjogXCJIZWFkZXJfYmxvY2tfXzNIN0tGXCIsXG5cdFwibG9nb1wiOiBcIkhlYWRlcl9sb2dvX18yZkVmcFwiLFxuXHRcIm5hdlwiOiBcIkhlYWRlcl9uYXZfXzNHZWRRXCIsXG5cdFwiY29udGFpbmVyXCI6IFwiSGVhZGVyX2NvbnRhaW5lcl9fMi0wamhcIixcblx0XCJidXR0b25cIjogXCJIZWFkZXJfYnV0dG9uX182cUY2SlwiLFxuXHRcImxpbmtcIjogXCJIZWFkZXJfbGlua19fMWdPbmVcIixcblx0XCJoZWFkZXJcIjogXCJIZWFkZXJfaGVhZGVyX18yLWZqcVwiLFxuXHRcImJvcmRlcl9hY2NlbnRcIjogXCJIZWFkZXJfYm9yZGVyX2FjY2VudF9fMmotZHBcIixcblx0XCJsaW5rX2FjY2VudFwiOiBcIkhlYWRlcl9saW5rX2FjY2VudF9fM0p4cnZcIixcblx0XCJidXR0b25fYWNjZW50XCI6IFwiSGVhZGVyX2J1dHRvbl9hY2NlbnRfXzJXU1NMXCIsXG5cdFwibG9nb19hY2NlbnRcIjogXCJIZWFkZXJfbG9nb19hY2NlbnRfXzFIUUJlXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtb3JlXCI6IFwiUHJvZHVjdF9tb3JlX19KWUlIUVwiLFxuXHRcImFkZFwiOiBcIlByb2R1Y3RfYWRkX18xa1NuR1wiLFxuXHRcImNhcmRcIjogXCJQcm9kdWN0X2NhcmRfXzFoN25TXCIsXG5cdFwiaW5mb1wiOiBcIlByb2R1Y3RfaW5mb19fMVNnOTdcIixcblx0XCJjYXJkX3NsaWRlclwiOiBcIlByb2R1Y3RfY2FyZF9zbGlkZXJfXzlkMW5aXCIsXG5cdFwiaW1hZ2VcIjogXCJQcm9kdWN0X2ltYWdlX18xRnl3U1wiLFxuXHRcIm5hbWVcIjogXCJQcm9kdWN0X25hbWVfXzNXaVpLXCIsXG5cdFwiYWRkaXRpb25cIjogXCJQcm9kdWN0X2FkZGl0aW9uX18yc3BvUVwiLFxuXHRcIndlaWdodFwiOiBcIlByb2R1Y3Rfd2VpZ2h0X18ySDljTFwiLFxuXHRcInByaWNlXCI6IFwiUHJvZHVjdF9wcmljZV9fa0ZQNWRcIixcblx0XCJ3ZWxsXCI6IFwiUHJvZHVjdF93ZWxsX18yczFDM1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicHJvZHVjdF9zbGlkZVwiOiBcIlNsaWRlcl9wcm9kdWN0X3NsaWRlX18zVnhEc1wiLFxuXHRcInJlY2lwZV9zbGlkZVwiOiBcIlNsaWRlcl9yZWNpcGVfc2xpZGVfXzJxaWRlXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJuYXZcIjogXCJTbGlkZXJOYXZfbmF2X18xOF9FLVwiLFxuXHRcImNvbnRhaW5lclwiOiBcIlNsaWRlck5hdl9jb250YWluZXJfXzNEOHlzXCIsXG5cdFwiaGVhZGVyXCI6IFwiU2xpZGVyTmF2X2hlYWRlcl9fMUhSR1FcIixcblx0XCJjb3VudGVyXCI6IFwiU2xpZGVyTmF2X2NvdW50ZXJfXzNwek5ZXCIsXG5cdFwiY291bnRlcl9fYWxsXCI6IFwiU2xpZGVyTmF2X2NvdW50ZXJfX2FsbF9fM3M1Rk9cIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRhc3RlXCI6IFwiVGFzdGVzU1ZHX3Rhc3RlX18yZDVXaVwiLFxuXHRcImFjY2VudFwiOiBcIlRhc3Rlc1NWR19hY2NlbnRfX1JEQVhnXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsaW5rXCI6IFwiRGlzY291bnRTZWN0aW9uX2xpbmtfX2x4akhnXCIsXG5cdFwiY29udGFpbmVyXCI6IFwiRGlzY291bnRTZWN0aW9uX2NvbnRhaW5lcl9fMlJWTnRcIixcblx0XCJwcm9tb1wiOiBcIkRpc2NvdW50U2VjdGlvbl9wcm9tb19fMzkyS1dcIixcblx0XCJjYXRlZ29yeVwiOiBcIkRpc2NvdW50U2VjdGlvbl9jYXRlZ29yeV9fRGZqYWNcIixcblx0XCJvZmZlclwiOiBcIkRpc2NvdW50U2VjdGlvbl9vZmZlcl9fM1IwTm5cIixcblx0XCJuYW1lXCI6IFwiRGlzY291bnRTZWN0aW9uX25hbWVfXzIyaGxZXCIsXG5cdFwiZGF0ZVwiOiBcIkRpc2NvdW50U2VjdGlvbl9kYXRlX18yWjFfeFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY2FyZFwiOiBcIk5ld1Rhc3RlX2NhcmRfXzJ3cUJfXCIsXG5cdFwiYm9keVwiOiBcIk5ld1Rhc3RlX2JvZHlfXzNQT3pwXCIsXG5cdFwiaW1hZ2VcIjogXCJOZXdUYXN0ZV9pbWFnZV9fMlpUWWJcIixcblx0XCJ3ZWxsXCI6IFwiTmV3VGFzdGVfd2VsbF9fM0I1OE1cIixcblx0XCJuYW1lXCI6IFwiTmV3VGFzdGVfbmFtZV9faG1KNThcIixcblx0XCJhZGRpdGlvblwiOiBcIk5ld1Rhc3RlX2FkZGl0aW9uX19DZ1dnT1wiLFxuXHRcInN0eWxlXCI6IFwiTmV3VGFzdGVfc3R5bGVfXzJyVl9wXCIsXG5cdFwiY291bnRyeVwiOiBcIk5ld1Rhc3RlX2NvdW50cnlfX3d4dVhnXCIsXG5cdFwiZmxhZ1wiOiBcIk5ld1Rhc3RlX2ZsYWdfX3JSTjg0XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJvZHlcIjogXCJQcm9kdWN0c1NlY3Rpb25fYm9keV9fMU9BeGxcIixcblx0XCJzdWJjYXRlZ29yaWVzXCI6IFwiUHJvZHVjdHNTZWN0aW9uX3N1YmNhdGVnb3JpZXNfX1g1enlnXCIsXG5cdFwiY2F0ZWdvcmllc1wiOiBcIlByb2R1Y3RzU2VjdGlvbl9jYXRlZ29yaWVzX18zdWpjTVwiLFxuXHRcInN1YmNhdGVnb3J5XCI6IFwiUHJvZHVjdHNTZWN0aW9uX3N1YmNhdGVnb3J5X19XQTNTRVwiLFxuXHRcImFjdGl2ZVwiOiBcIlByb2R1Y3RzU2VjdGlvbl9hY3RpdmVfXzF0NndEXCIsXG5cdFwiY2F0ZWdvcnlcIjogXCJQcm9kdWN0c1NlY3Rpb25fY2F0ZWdvcnlfX3BvV29NXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzdGF0dXNcIjogXCJNYWluX3N0YXR1c19fVEE3QWRcIixcblx0XCJub3QtYXZhbGlhYmxlXCI6IFwiTWFpbl9ub3QtYXZhbGlhYmxlX18zTDZDQlwiLFxuXHRcInByZXBhcmluZ1wiOiBcIk1haW5fcHJlcGFyaW5nX18xSHFTeFwiLFxuXHRcImF2YWxpYWJsZVwiOiBcIk1haW5fYXZhbGlhYmxlX18xRHI4UVwiLFxuXHRcIm1vZGFsXCI6IFwiTWFpbl9tb2RhbF9fM21UZ3VcIixcblx0XCJtb2RhbF9fY2xvc2VcIjogXCJNYWluX21vZGFsX19jbG9zZV9fMWR1ZDlcIixcblx0XCJtYWluXCI6IFwiTWFpbl9tYWluX18xLVNralwiLFxuXHRcIndyYXBwZXJcIjogXCJNYWluX3dyYXBwZXJfX09PcDJyXCIsXG5cdFwibW9kYWxfX2JveFwiOiBcIk1haW5fbW9kYWxfX2JveF9faDdwSHJcIixcblx0XCJpdGFsaWNcIjogXCJNYWluX2l0YWxpY19fMXMtdFBcIixcblx0XCJudW1iZXJzXCI6IFwiTWFpbl9udW1iZXJzX19BMG5tRFwiLFxuXHRcImZsZXhcIjogXCJNYWluX2ZsZXhfXzF6VXNoXCIsXG5cdFwicHRcIjogXCJNYWluX3B0X18yaWdZYlwiLFxuXHRcInRpdGxlXCI6IFwiTWFpbl90aXRsZV9fMWJvQ0ZcIlxufTtcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbHN4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzd2lwZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3aXBlci9yZWFjdFwiKTs7IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==