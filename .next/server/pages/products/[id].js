(function() {
var exports = {};
exports.id = "pages/products/[id]";
exports.ids = ["pages/products/[id]"];
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

/***/ "./src/api/APIService.js":
/*!*******************************!*\
  !*** ./src/api/APIService.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/constants */ "./src/constants.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // import {handleErrorFunc} from '../App';
// import {LOCAL_STORAGE_DATA_NAME} from '../constants'

class API {
  constructor(localStorageData = '') {
    _defineProperty(this, "handleSuccess", response => {
      const res = response.data; // if (res.statusCode && res.statusCode !== 200) {
      //     if (res.statusCode !== 401) {
      //         handleErrorFunc(res?.statusCode, res?.message)
      //     }
      // }

      return response;
    });

    _defineProperty(this, "handleError", error => {
      // handleErrorFunc(null, error)
      return Promise.reject(error);
    });

    _defineProperty(this, "create", async headers => {
      // const localStorageData = JSON.parse(localStorage.getItem(this.localStorageData))
      // let token = localStorageData?.accessToken
      // const headerAuth = token && {Authorization: token ? `Bearer ${token}` : ''}
      const service = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
        headers: _objectSpread({
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }, headers)
      });
      service.interceptors.response.use(this.handleSuccess, this.handleError);
      service.interceptors.request.use(request => {
        // console.log('Starting Request', request)
        return request;
      });
      service.interceptors.response.use(response => {
        // console.log('Response:', response)
        return response;
      });
      return service;
    });

    _defineProperty(this, "get", async (path = '', headers) => {
      const service = await this.create(headers);
      return service.request({
        method: 'GET',
        url: `${this.url}${path}`
      }).then(res => res.data).catch(err => this.handleError(err));
    });

    _defineProperty(this, "post", async (path = '', data = {}, headers) => {
      const service = await this.create(headers);
      return service.request({
        method: 'POST',
        url: `${this.url}${path}`,
        data
      }).then(res => res.data).catch(err => this.handleError(err));
    });

    _defineProperty(this, "put", async (path = '', data = {}, headers) => {
      const service = await this.create(headers);
      return service.request({
        method: 'PUT',
        url: `${this.url}${path}`,
        data
      }).then(res => res.data).catch(err => this.handleError(err));
    });

    _defineProperty(this, "delete", async (path = '', headers) => {
      const service = await this.create(headers);
      return service.request({
        method: 'DELETE',
        url: `${this.url}${path}`
      }).then(res => res.data).catch(err => this.handleError(err));
    });

    const baseUrlFromLS = src_constants__WEBPACK_IMPORTED_MODULE_1__.BASE_URL;
    this.url = baseUrlFromLS || process.env.REACT_APP_BASE_URL || '';
    console.log(this.url); // this.localStorageData = localStorageData
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new API());

/***/ }),

/***/ "./src/api/ProductsAPI.js":
/*!********************************!*\
  !*** ./src/api/ProductsAPI.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _APIService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./APIService */ "./src/api/APIService.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class ProductsAPI {
  constructor() {
    _defineProperty(this, "getProducts", () => _APIService__WEBPACK_IMPORTED_MODULE_0__.default.get('data'));

    _defineProperty(this, "getProduct", id => _APIService__WEBPACK_IMPORTED_MODULE_0__.default.get(`data/${id}`));
  } // auth = (username, password) => API.post('/api/auth/token/', {username, password, api: 'operator.up-line'})
  // checkToken = (payload) => API.post('/api/auth/CheckTokenLifeTime', payload)
  // refreshToken = () => API.get('/api/auth/refreshToken')


}

/* harmony default export */ __webpack_exports__["default"] = (new ProductsAPI());

/***/ }),

/***/ "./src/components/Common/Accordion/Accordion.jsx":
/*!*******************************************************!*\
  !*** ./src/components/Common/Accordion/Accordion.jsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_collapsible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-collapsible */ "react-collapsible");
/* harmony import */ var react_collapsible__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_collapsible__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Accordion_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Accordion.module.scss */ "./src/components/Common/Accordion/Accordion.module.scss");
/* harmony import */ var _Accordion_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Accordion_module_scss__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\\u042E\u0437\u0435\u0440\\Desktop\\\u0421\u0430\u0439\u0442\u044B\\ko-cheese-react\\src\\components\\Common\\Accordion\\Accordion.jsx";





const Accordion = ({
  title,
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_3___default()((_Accordion_module_scss__WEBPACK_IMPORTED_MODULE_4___default().tab)),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_collapsible__WEBPACK_IMPORTED_MODULE_2___default()), {
      triggerClassName: clsx__WEBPACK_IMPORTED_MODULE_3___default()((_Accordion_module_scss__WEBPACK_IMPORTED_MODULE_4___default().trigger)),
      triggerOpenedClassName: clsx__WEBPACK_IMPORTED_MODULE_3___default()((_Accordion_module_scss__WEBPACK_IMPORTED_MODULE_4___default().trigger), (_Accordion_module_scss__WEBPACK_IMPORTED_MODULE_4___default().trigger_open)),
      triggerTagName: "h3",
      contentInnerClassName: clsx__WEBPACK_IMPORTED_MODULE_3___default()((_Accordion_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content)),
      trigger: title,
      transitionTime: 200,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 10
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 7
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Accordion);

/***/ }),

/***/ "./src/components/Common/BackButton/BackButton.jsx":
/*!*********************************************************!*\
  !*** ./src/components/Common/BackButton/BackButton.jsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackButton": function() { return /* binding */ BackButton; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _BackButton_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BackButton.module.scss */ "./src/components/Common/BackButton/BackButton.module.scss");
/* harmony import */ var _BackButton_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_BackButton_module_scss__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\\u042E\u0437\u0435\u0440\\Desktop\\\u0421\u0430\u0439\u0442\u044B\\ko-cheese-react\\src\\components\\Common\\BackButton\\BackButton.jsx";



const BackButton = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_BackButton_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      className: (_BackButton_module_scss__WEBPACK_IMPORTED_MODULE_3___default().button),
      onClick: () => router.back(),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
        width: "11",
        height: "12",
        viewBox: "0 0 11 12",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
          d: "M0.46967 5.46967C0.176777 5.76256 0.176777 6.23744 0.46967 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989593 6.3033 0.6967C6.01041 0.403806 5.53553 0.403806 5.24264 0.6967L0.46967 5.46967ZM11 5.25L1 5.25L1 6.75L11 6.75L11 5.25Z",
          fill: "#184240"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 16
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 10
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 7
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

/***/ "./src/components/Pages/Card/PurchaseControl/PurchaseControl.jsx":
/*!***********************************************************************!*\
  !*** ./src/components/Pages/Card/PurchaseControl/PurchaseControl.jsx ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchaseControl": function() { return /* binding */ PurchaseControl; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PurchaseControl_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PurchaseControl.module.scss */ "./src/components/Pages/Card/PurchaseControl/PurchaseControl.module.scss");
/* harmony import */ var _PurchaseControl_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_PurchaseControl_module_scss__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\\u042E\u0437\u0435\u0440\\Desktop\\\u0421\u0430\u0439\u0442\u044B\\ko-cheese-react\\src\\components\\Pages\\Card\\PurchaseControl\\PurchaseControl.jsx";



const PurchaseControl = ({
  id
}) => {
  const [count, setCount] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(1);

  const changeCount = operation => {
    if (count === 1 && operation === "-") {
      return false;
    }

    setCount(prev => operation === "-" ? prev - 1 : prev + 1);
  };

  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
    setCount(1);
  }, [id]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_PurchaseControl_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_PurchaseControl_module_scss__WEBPACK_IMPORTED_MODULE_3___default().counter)),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_PurchaseControl_module_scss__WEBPACK_IMPORTED_MODULE_3___default().change), (_PurchaseControl_module_scss__WEBPACK_IMPORTED_MODULE_3___default().minus)),
          onClick: () => changeCount("-"),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
            width: "11",
            height: "2",
            viewBox: "0 0 11 2",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("rect", {
              x: "0.3",
              y: "0.500012",
              width: "9.83479",
              height: "0.6",
              rx: "0.3",
              stroke: "#184240",
              strokeWidth: "0.6"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 22
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 19
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 16
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_PurchaseControl_module_scss__WEBPACK_IMPORTED_MODULE_3___default().count)),
          children: count
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 16
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_PurchaseControl_module_scss__WEBPACK_IMPORTED_MODULE_3___default().change), (_PurchaseControl_module_scss__WEBPACK_IMPORTED_MODULE_3___default().plus)),
          onClick: () => changeCount("+"),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
            width: "12",
            height: "10",
            viewBox: "0 0 12 10",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("rect", {
              x: "0.3",
              y: "4.49983",
              width: "11.2654",
              height: "0.6",
              rx: "0.3",
              stroke: "#184240",
              strokeWidth: "0.6"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 22
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("rect", {
              x: "6.55178",
              y: "0.570808",
              width: "8.85841",
              height: "0.741591",
              rx: "0.370795",
              transform: "rotate(90 6.55178 0.570808)",
              stroke: "#184240",
              strokeWidth: "0.741591"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 22
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 19
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 16
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_PurchaseControl_module_scss__WEBPACK_IMPORTED_MODULE_3___default().add)),
        children: "\u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_PurchaseControl_module_scss__WEBPACK_IMPORTED_MODULE_3___default().favorite)),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
          width: "19",
          height: "17",
          viewBox: "0 0 19 17",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
            d: "M9.29928 2.8843L9.71861 3.53202L10.1385 2.88466C11.6303 0.584595 13.7078 0.133692 15.3877 0.77901C17.0993 1.43651 18.5 3.26982 18.5 5.76058C18.5 6.62038 18.0425 7.67417 17.2506 8.83147C16.469 9.97383 15.4093 11.1491 14.31 12.2383C13.2129 13.3253 12.0885 14.3146 11.1847 15.0863C10.8601 15.3635 10.5655 15.6111 10.3101 15.826C10.2094 15.9106 10.1149 15.9902 10.0269 16.0644C9.91405 16.1596 9.80919 16.2485 9.71578 16.329C9.61709 16.2464 9.50606 16.1556 9.3869 16.0586C9.25968 15.9552 9.12042 15.8427 8.96965 15.7209C8.73358 15.5301 8.4693 15.3166 8.17885 15.0793C7.23374 14.3071 6.05445 13.3174 4.90234 12.2299C3.7479 11.1401 2.63384 9.96442 1.81183 8.82183C0.978006 7.6628 0.5 6.61263 0.5 5.76058C0.5 3.26866 1.99286 1.42774 3.82391 0.767222C5.63163 0.115123 7.81776 0.595876 9.29928 2.8843Z",
            stroke: "#184240"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 19
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 16
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_PurchaseControl_module_scss__WEBPACK_IMPORTED_MODULE_3___default().delivery)),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
          d: "M17.9543 10.2835L16.24 6.13794C16.1963 6.0309 16.1231 5.93957 16.0296 5.87532C15.9361 5.81108 15.8265 5.77678 15.7143 5.77668H14V4.59223C14 4.43516 13.9398 4.28452 13.8326 4.17346C13.7255 4.0624 13.5801 4 13.4286 4H2.57143C2.41988 4 2.27453 4.0624 2.16737 4.17346C2.0602 4.28452 2 4.43516 2 4.59223V14.6601C2 14.8172 2.0602 14.9678 2.16737 15.0789C2.27453 15.1899 2.41988 15.2523 2.57143 15.2523H3.79429C3.92588 15.7542 4.21314 16.1972 4.61177 16.513C5.0104 16.8289 5.49823 17 6 17C6.50177 17 6.9896 16.8289 7.38823 16.513C7.78686 16.1972 8.07412 15.7542 8.20571 15.2523H11.7943C11.9259 15.7542 12.2131 16.1972 12.6118 16.513C13.0104 16.8289 13.4982 17 14 17C14.5018 17 14.9896 16.8289 15.3882 16.513C15.7869 16.1972 16.0741 15.7542 16.2057 15.2523H17.4286C17.5801 15.2523 17.7255 15.1899 17.8326 15.0789C17.9398 14.9678 18 14.8172 18 14.6601V10.5145C17.9999 10.4351 17.9843 10.3566 17.9543 10.2835ZM14 6.96114H15.3371L16.56 9.92228H14V6.96114ZM6 15.8446C5.77396 15.8446 5.553 15.7751 5.36506 15.6449C5.17712 15.5148 5.03064 15.3298 4.94414 15.1134C4.85764 14.8969 4.83501 14.6588 4.8791 14.429C4.9232 14.1993 5.03205 13.9882 5.19188 13.8226C5.35171 13.6569 5.55535 13.5441 5.77704 13.4984C5.99873 13.4527 6.22852 13.4762 6.43735 13.5658C6.64618 13.6555 6.82467 13.8073 6.95025 14.0021C7.07583 14.1968 7.14286 14.4258 7.14286 14.6601C7.14286 14.9742 7.02245 15.2755 6.80812 15.4976C6.59379 15.7198 6.3031 15.8446 6 15.8446ZM11.7943 14.0679H8.20571C8.07412 13.566 7.78686 13.123 7.38823 12.8072C6.9896 12.4913 6.50177 12.3202 6 12.3202C5.49823 12.3202 5.0104 12.4913 4.61177 12.8072C4.21314 13.123 3.92588 13.566 3.79429 14.0679H3.14286V5.18446H12.8571V12.6228C12.5969 12.7794 12.3691 12.9876 12.1867 13.2355C12.0043 13.4835 11.871 13.7664 11.7943 14.0679ZM14 15.8446C13.774 15.8446 13.553 15.7751 13.3651 15.6449C13.1771 15.5148 13.0306 15.3298 12.9441 15.1134C12.8576 14.8969 12.835 14.6588 12.8791 14.429C12.9232 14.1993 13.032 13.9882 13.1919 13.8226C13.3517 13.6569 13.5553 13.5441 13.777 13.4984C13.9987 13.4527 14.2285 13.4762 14.4374 13.5658C14.6462 13.6555 14.8247 13.8073 14.9503 14.0021C15.0758 14.1968 15.1429 14.4258 15.1429 14.6601C15.1429 14.9742 15.0224 15.2755 14.8081 15.4976C14.5938 15.7198 14.3031 15.8446 14 15.8446ZM16.8571 14.0679H16.2057C16.0794 13.5606 15.7943 13.1111 15.3952 12.7897C14.9961 12.4682 14.5055 12.2929 14 12.2912V11.1067H16.8571V14.0679Z",
          fill: "#728D8C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 16
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_PurchaseControl_module_scss__WEBPACK_IMPORTED_MODULE_3___default().text)),
        children: "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430: "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_PurchaseControl_module_scss__WEBPACK_IMPORTED_MODULE_3___default().terms)),
        children: "15.05.2021 ~ 15:30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 10
    }, undefined)]
  }, void 0, true);
};

/***/ }),

/***/ "./src/components/Pages/Card/Thumbnails/Thumbnails.jsx":
/*!*************************************************************!*\
  !*** ./src/components/Pages/Card/Thumbnails/Thumbnails.jsx ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Thumbnails": function() { return /* binding */ Thumbnails; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Thumbnails_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Thumbnails.module.scss */ "./src/components/Pages/Card/Thumbnails/Thumbnails.module.scss");
/* harmony import */ var _Thumbnails_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Thumbnails_module_scss__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\\u042E\u0437\u0435\u0440\\Desktop\\\u0421\u0430\u0439\u0442\u044B\\ko-cheese-react\\src\\components\\Pages\\Card\\Thumbnails\\Thumbnails.jsx";



const Thumbnails = ({
  gallery
}) => {
  const [activeMain, setActiveMain] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
  const [activeMini, setActiveMini] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);

  const switchImage = (image, i) => {
    setActiveMain(image);
    setActiveMini(i);
  };

  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
    setActiveMain('');
    setActiveMini(0);
  }, [gallery]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_Thumbnails_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Thumbnails_module_scss__WEBPACK_IMPORTED_MODULE_3___default().preview),
      children: gallery.map((image, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_Thumbnails_module_scss__WEBPACK_IMPORTED_MODULE_3___default().mini), i === activeMini ? (_Thumbnails_module_scss__WEBPACK_IMPORTED_MODULE_3___default().active) : ""),
        src: image,
        alt: "",
        onClick: () => switchImage(image, i)
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 16
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      className: (_Thumbnails_module_scss__WEBPACK_IMPORTED_MODULE_3___default().main),
      src: activeMain || gallery[0],
      alt: ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 10
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
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

/***/ "./src/components/Sections/Card/DescriptionSection/DescriptionSection.jsx":
/*!********************************************************************************!*\
  !*** ./src/components/Sections/Card/DescriptionSection/DescriptionSection.jsx ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DescriptionSection": function() { return /* binding */ DescriptionSection; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Common_Accordion_Accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Common/Accordion/Accordion */ "./src/components/Common/Accordion/Accordion.jsx");
/* harmony import */ var _components_Common_Slider_Slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Common/Slider/Slider */ "./src/components/Common/Slider/Slider.jsx");
/* harmony import */ var _components_Common_Product_Product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Common/Product/Product */ "./src/components/Common/Product/Product.jsx");
/* harmony import */ var _components_Common_BackButton_BackButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/Common/BackButton/BackButton */ "./src/components/Common/BackButton/BackButton.jsx");
/* harmony import */ var _components_Pages_Card_Thumbnails_Thumbnails__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/Pages/Card/Thumbnails/Thumbnails */ "./src/components/Pages/Card/Thumbnails/Thumbnails.jsx");
/* harmony import */ var _components_Pages_Card_PurchaseControl_PurchaseControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/Pages/Card/PurchaseControl/PurchaseControl */ "./src/components/Pages/Card/PurchaseControl/PurchaseControl.jsx");
/* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/constants */ "./src/constants.js");
/* harmony import */ var _DescriptionSection_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./DescriptionSection.module.scss */ "./src/components/Sections/Card/DescriptionSection/DescriptionSection.module.scss");
/* harmony import */ var _DescriptionSection_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_DescriptionSection_module_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/styles/Main.module.scss */ "./src/styles/Main.module.scss");
/* harmony import */ var src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_11__);


var _jsxFileName = "C:\\Users\\\u042E\u0437\u0435\u0440\\Desktop\\\u0421\u0430\u0439\u0442\u044B\\ko-cheese-react\\src\\components\\Sections\\Card\\DescriptionSection\\DescriptionSection.jsx";











const sliderParams = {
  slider: {
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 0,
    slideClass: "product_slide"
  },
  nav: {
    counter: false
  }
};
const DescriptionSection = ({
  id,
  product,
  products
}) => {
  var _product$tastes;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_BackButton_BackButton__WEBPACK_IMPORTED_MODULE_6__.BackButton, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_DescriptionSection_module_scss__WEBPACK_IMPORTED_MODULE_10___default().container),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pages_Card_Thumbnails_Thumbnails__WEBPACK_IMPORTED_MODULE_7__.Thumbnails, {
        gallery: product.gallery
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_DescriptionSection_module_scss__WEBPACK_IMPORTED_MODULE_10___default().info),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: (_DescriptionSection_module_scss__WEBPACK_IMPORTED_MODULE_10___default().title),
          children: [product.name, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 19
          }, undefined), product.addition]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 16
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_DescriptionSection_module_scss__WEBPACK_IMPORTED_MODULE_10___default().statuses)),
          children: product.allStatus.map(status => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_11___default())[status.name]),
            children: [src_constants__WEBPACK_IMPORTED_MODULE_9__.allStatus[status.name].title, status.count && ` ${status.count}  шт `, status.date && `до ${status.date}`]
          }, status.name, true, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 22
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 16
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_DescriptionSection_module_scss__WEBPACK_IMPORTED_MODULE_10___default().price)),
          children: [product.price, " \u0440\u0443\u0431."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 16
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_DescriptionSection_module_scss__WEBPACK_IMPORTED_MODULE_10___default().description)),
          children: product.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 16
        }, undefined), ((_product$tastes = product.tastes) === null || _product$tastes === void 0 ? void 0 : _product$tastes.length) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_DescriptionSection_module_scss__WEBPACK_IMPORTED_MODULE_10___default().with)),
            children: "\u0421 \u0447\u0435\u043C \u0443\u043F\u043E\u0442\u0440\u0435\u0431\u043B\u044F\u044E\u0442"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 22
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_DescriptionSection_module_scss__WEBPACK_IMPORTED_MODULE_10___default().tastes)),
            children: product.tastes.map(taste => src_constants__WEBPACK_IMPORTED_MODULE_9__.allTastes[taste])
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 22
          }, undefined)]
        }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pages_Card_PurchaseControl_PurchaseControl__WEBPACK_IMPORTED_MODULE_8__.PurchaseControl, {
          id: id
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 16
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_DescriptionSection_module_scss__WEBPACK_IMPORTED_MODULE_10___default().about)),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_Accordion_Accordion__WEBPACK_IMPORTED_MODULE_3__.default, {
            title: "Состав",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos minus delectus totam dolores inventore labore itaque. Eos id dolore a quam aliquid nesciunt vitae non explicabo dignissimos reprehenderit laboriosam earum consequuntur labore, fugit enim dolor voluptatibus quidem fuga at ipsam ab? Illum adipisci temporibus veniam cum sint"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 22
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 19
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_Accordion_Accordion__WEBPACK_IMPORTED_MODULE_3__.default, {
            title: "Описание",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos minus delectus totam dolores inventore labore itaque. Eos id dolore a quam aliquid nesciunt vitae non explicabo dignissimos reprehenderit laboriosam earum consequuntur labore, fugit enim dolor voluptatibus quidem fuga at ipsam ab? Illum adipisci temporibus veniam cum sint"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 22
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 19
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 16
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_DescriptionSection_module_scss__WEBPACK_IMPORTED_MODULE_10___default().products)),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_Slider_Slider__WEBPACK_IMPORTED_MODULE_4__.Slider, {
        title: "Сырная продукция",
        slides: products,
        params: sliderParams,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_Product_Product__WEBPACK_IMPORTED_MODULE_5__.Product, {
          additionClass: "card_slider"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 16
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 10
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
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

/***/ "./src/pages/products/[id].jsx":
/*!*************************************!*\
  !*** ./src/pages/products/[id].jsx ***!
  \*************************************/
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
/* harmony import */ var _components_Sections_Card_DescriptionSection_DescriptionSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Sections/Card/DescriptionSection/DescriptionSection */ "./src/components/Sections/Card/DescriptionSection/DescriptionSection.jsx");
/* harmony import */ var _components_Common_Footer_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/Common/Footer/Footer */ "./src/components/Common/Footer/Footer.jsx");
/* harmony import */ var src_api_ProductsAPI__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/api/ProductsAPI */ "./src/api/ProductsAPI.js");
/* harmony import */ var src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/styles/Main.module.scss */ "./src/styles/Main.module.scss");
/* harmony import */ var src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "C:\\Users\\\u042E\u0437\u0435\u0440\\Desktop\\\u0421\u0430\u0439\u0442\u044B\\ko-cheese-react\\src\\pages\\products\\[id].jsx";









const card = ({
  id,
  product,
  products
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_Header_Header__WEBPACK_IMPORTED_MODULE_4__.Header, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_8___default().main), (src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_8___default().pt)),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_8___default().wrapper),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sections_Card_DescriptionSection_DescriptionSection__WEBPACK_IMPORTED_MODULE_5__.DescriptionSection, {
          product: product,
          products: products,
          id: id
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 16
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_Footer_Footer__WEBPACK_IMPORTED_MODULE_6__.Footer, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 10
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (card);

const getProducts = async id => {
  const product = await src_api_ProductsAPI__WEBPACK_IMPORTED_MODULE_7__.default.getProduct(id);
  const products = await src_api_ProductsAPI__WEBPACK_IMPORTED_MODULE_7__.default.getProducts();
  return {
    product,
    products
  };
};

const getServerSideProps = async appContext => {
  const {
    product,
    products
  } = await getProducts(appContext.query.id);
  return {
    props: {
      id: appContext.query.id,
      product,
      products
    }
  };
};

/***/ }),

/***/ "./src/components/Common/Accordion/Accordion.module.scss":
/*!***************************************************************!*\
  !*** ./src/components/Common/Accordion/Accordion.module.scss ***!
  \***************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"tab": "Accordion_tab__2nFVA",
	"trigger": "Accordion_trigger__3HaEZ",
	"trigger_open": "Accordion_trigger_open__3Bvkc",
	"content": "Accordion_content__-Hup8"
};


/***/ }),

/***/ "./src/components/Common/BackButton/BackButton.module.scss":
/*!*****************************************************************!*\
  !*** ./src/components/Common/BackButton/BackButton.module.scss ***!
  \*****************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "BackButton_container__3DXyJ",
	"button": "BackButton_button__1yZ3j"
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

/***/ "./src/components/Pages/Card/PurchaseControl/PurchaseControl.module.scss":
/*!*******************************************************************************!*\
  !*** ./src/components/Pages/Card/PurchaseControl/PurchaseControl.module.scss ***!
  \*******************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"delivery": "PurchaseControl_delivery__3qlA5",
	"counter": "PurchaseControl_counter__1CI_c",
	"container": "PurchaseControl_container__62AJF",
	"favorite": "PurchaseControl_favorite__1gjKR",
	"count": "PurchaseControl_count__RocAX",
	"change": "PurchaseControl_change__3UsJO",
	"minus": "PurchaseControl_minus__3O2nq",
	"plus": "PurchaseControl_plus__3oMVE",
	"add": "PurchaseControl_add__16e_W",
	"text": "PurchaseControl_text__3b-1s"
};


/***/ }),

/***/ "./src/components/Pages/Card/Thumbnails/Thumbnails.module.scss":
/*!*********************************************************************!*\
  !*** ./src/components/Pages/Card/Thumbnails/Thumbnails.module.scss ***!
  \*********************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Thumbnails_container__3_13Q",
	"preview": "Thumbnails_preview__2h0sf",
	"mini": "Thumbnails_mini__oUwiQ",
	"active": "Thumbnails_active__32m0p",
	"main": "Thumbnails_main__1odvg"
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

/***/ "./src/components/Sections/Card/DescriptionSection/DescriptionSection.module.scss":
/*!****************************************************************************************!*\
  !*** ./src/components/Sections/Card/DescriptionSection/DescriptionSection.module.scss ***!
  \****************************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "DescriptionSection_container__hmm07",
	"title": "DescriptionSection_title__9JnkV",
	"statuses": "DescriptionSection_statuses__3UJJa",
	"info": "DescriptionSection_info__IUaro",
	"price": "DescriptionSection_price__3jkWV",
	"description": "DescriptionSection_description__1QNjR",
	"with": "DescriptionSection_with__fmhYg",
	"tastes": "DescriptionSection_tastes__p34io",
	"about": "DescriptionSection_about__1lRyO",
	"products": "DescriptionSection_products__2L55R"
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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-collapsible":
/*!************************************!*\
  !*** external "react-collapsible" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-collapsible");;

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/products/[id].jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMiLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzIiwid2VicGFjazovL2tvLWNoZWVzZS1yZWFjdC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvdXNlLWludGVyc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qcyIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9taXR0LmpzIiwid2VicGFjazovL2tvLWNoZWVzZS1yZWFjdC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwuanMiLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanMiLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qcyIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanMiLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanMiLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzIiwid2VicGFjazovL2tvLWNoZWVzZS1yZWFjdC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzIiwid2VicGFjazovL2tvLWNoZWVzZS1yZWFjdC8uL3NyYy9hcGkvQVBJU2VydmljZS5qcyIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvLi9zcmMvYXBpL1Byb2R1Y3RzQVBJLmpzIiwid2VicGFjazovL2tvLWNoZWVzZS1yZWFjdC8uL3NyYy9jb21wb25lbnRzL0NvbW1vbi9BY2NvcmRpb24vQWNjb3JkaW9uLmpzeCIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvLi9zcmMvY29tcG9uZW50cy9Db21tb24vQmFja0J1dHRvbi9CYWNrQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvLi9zcmMvY29tcG9uZW50cy9Db21tb24vRm9vdGVyL0Zvb3Rlci5qc3giLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvQ29tbW9uL0hlYWRlci9IZWFkZXIuanN4Iiwid2VicGFjazovL2tvLWNoZWVzZS1yZWFjdC8uL3NyYy9jb21wb25lbnRzL0NvbW1vbi9Qcm9kdWN0L1Byb2R1Y3QuanN4Iiwid2VicGFjazovL2tvLWNoZWVzZS1yZWFjdC8uL3NyYy9jb21wb25lbnRzL0NvbW1vbi9TbGlkZXIvU2xpZGVyLmpzeCIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvLi9zcmMvY29tcG9uZW50cy9Db21tb24vU2xpZGVyL1NsaWRlck5hdi9TbGlkZXJOYXYuanN4Iiwid2VicGFjazovL2tvLWNoZWVzZS1yZWFjdC8uL3NyYy9jb21wb25lbnRzL1BhZ2VzL0NhcmQvUHVyY2hhc2VDb250cm9sL1B1cmNoYXNlQ29udHJvbC5qc3giLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvUGFnZXMvQ2FyZC9UaHVtYm5haWxzL1RodW1ibmFpbHMuanN4Iiwid2VicGFjazovL2tvLWNoZWVzZS1yZWFjdC8uL3NyYy9jb21wb25lbnRzL1NWRy9IZWFkZXJMb2dvU1ZHLmpzeCIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvLi9zcmMvY29tcG9uZW50cy9TVkcvVGFzdGVzU1ZHL1Rhc3Rlc1NWRy5qc3giLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbnMvQ2FyZC9EZXNjcmlwdGlvblNlY3Rpb24vRGVzY3JpcHRpb25TZWN0aW9uLmpzeCIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvLi9zcmMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL2tvLWNoZWVzZS1yZWFjdC8uL3NyYy9wYWdlcy9wcm9kdWN0cy9baWRdLmpzeCIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvLi9zcmMvY29tcG9uZW50cy9Db21tb24vQWNjb3JkaW9uL0FjY29yZGlvbi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvLi9zcmMvY29tcG9uZW50cy9Db21tb24vQmFja0J1dHRvbi9CYWNrQnV0dG9uLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2tvLWNoZWVzZS1yZWFjdC8uL3NyYy9jb21wb25lbnRzL0NvbW1vbi9Gb290ZXIvRm9vdGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2tvLWNoZWVzZS1yZWFjdC8uL3NyYy9jb21wb25lbnRzL0NvbW1vbi9IZWFkZXIvSGVhZGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2tvLWNoZWVzZS1yZWFjdC8uL3NyYy9jb21wb25lbnRzL0NvbW1vbi9Qcm9kdWN0L1Byb2R1Y3QubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvQ29tbW9uL1NsaWRlci9TbGlkZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvQ29tbW9uL1NsaWRlci9TbGlkZXJOYXYvU2xpZGVyTmF2Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL2tvLWNoZWVzZS1yZWFjdC8uL3NyYy9jb21wb25lbnRzL1BhZ2VzL0NhcmQvUHVyY2hhc2VDb250cm9sL1B1cmNoYXNlQ29udHJvbC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvLi9zcmMvY29tcG9uZW50cy9QYWdlcy9DYXJkL1RodW1ibmFpbHMvVGh1bWJuYWlscy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvLi9zcmMvY29tcG9uZW50cy9TVkcvVGFzdGVzU1ZHL1Rhc3Rlc1NWRy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvLi9zcmMvY29tcG9uZW50cy9TZWN0aW9ucy9DYXJkL0Rlc2NyaXB0aW9uU2VjdGlvbi9EZXNjcmlwdGlvblNlY3Rpb24ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0Ly4vc3JjL3N0eWxlcy9NYWluLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2tvLWNoZWVzZS1yZWFjdC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovL2tvLWNoZWVzZS1yZWFjdC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0L2V4dGVybmFsIFwiY2xzeFwiIiwid2VicGFjazovL2tvLWNoZWVzZS1yZWFjdC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0L2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2tvLWNoZWVzZS1yZWFjdC9leHRlcm5hbCBcInJlYWN0LWNvbGxhcHNpYmxlXCIiLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0L2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvZXh0ZXJuYWwgXCJzd2lwZXJcIiIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvZXh0ZXJuYWwgXCJzd2lwZXIvcmVhY3RcIiIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvaWdub3JlZHxDOlxcVXNlcnNcXNCu0LfQtdGAXFxEZXNrdG9wXFzQodCw0LnRgtGLXFxrby1jaGVlc2UtcmVhY3RcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJleHBvcnRzIiwiX3JlYWN0IiwiX3JvdXRlciIsIl9yb3V0ZXIyIiwiX3VzZUludGVyc2VjdGlvbiIsInByZWZldGNoZWQiLCJwcmVmZXRjaCIsInJvdXRlciIsImhyZWYiLCJhcyIsIm9wdGlvbnMiLCJpc0xvY2FsVVJMIiwiY2F0Y2giLCJlcnIiLCJjdXJMb2NhbGUiLCJsb2NhbGUiLCJpc01vZGlmaWVkRXZlbnQiLCJldmVudCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJtZXRhS2V5IiwiY3RybEtleSIsInNoaWZ0S2V5IiwiYWx0S2V5IiwibmF0aXZlRXZlbnQiLCJ3aGljaCIsImxpbmtDbGlja2VkIiwiZSIsInJlcGxhY2UiLCJzaGFsbG93Iiwic2Nyb2xsIiwibm9kZU5hbWUiLCJwcmV2ZW50RGVmYXVsdCIsImluZGV4T2YiLCJMaW5rIiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJhcmdzIiwiRXJyb3IiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJwYXNzSHJlZiIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwiZGVmYXVsdCIsInVzZVJlZiIsImN1cnJlbnQiLCJjb25zb2xlIiwid2FybiIsInAiLCJ1c2VSb3V0ZXIiLCJ1c2VNZW1vIiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZWRBcyIsInJlc29sdmVIcmVmIiwiY2hpbGRyZW4iLCJjcmVhdGVFbGVtZW50IiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjaGlsZFJlZiIsInJlZiIsInNldEludGVyc2VjdGlvblJlZiIsImlzVmlzaWJsZSIsInVzZUludGVyc2VjdGlvbiIsInJvb3RNYXJnaW4iLCJzZXRSZWYiLCJ1c2VDYWxsYmFjayIsImVsIiwidXNlRWZmZWN0Iiwic2hvdWxkUHJlZmV0Y2giLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwib25DbGljayIsImRlZmF1bHRQcmV2ZW50ZWQiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsInR5cGUiLCJsb2NhbGVEb21haW4iLCJpc0xvY2FsZURvbWFpbiIsImdldERvbWFpbkxvY2FsZSIsImxvY2FsZXMiLCJkb21haW5Mb2NhbGVzIiwiYWRkQmFzZVBhdGgiLCJhZGRMb2NhbGUiLCJkZWZhdWx0TG9jYWxlIiwiY2xvbmVFbGVtZW50IiwiX2RlZmF1bHQiLCJyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCIsInBhdGgiLCJlbmRzV2l0aCIsInNsaWNlIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJjYiIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJtYXgiLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJpZCIsImNsZWFyVGltZW91dCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJtYXJrQXNzZXRFcnJvciIsImlzQXNzZXRFcnJvciIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJNU19NQVhfSURMRV9ERUxBWSIsIndpdGhGdXR1cmUiLCJtYXAiLCJnZW5lcmF0b3IiLCJlbnRyeSIsImdldCIsImZ1dHVyZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJwcm9tIiwic2V0IiwidGhlbiIsInZhbHVlIiwiaGFzUHJlZmV0Y2giLCJsaW5rIiwiZG9jdW1lbnQiLCJ3aW5kb3ciLCJNU0lucHV0TWV0aG9kQ29udGV4dCIsImRvY3VtZW50TW9kZSIsInJlbExpc3QiLCJzdXBwb3J0cyIsIl91bnVzZWQiLCJjYW5QcmVmZXRjaCIsInByZWZldGNoVmlhRG9tIiwicmVzIiwicmVqIiwicXVlcnlTZWxlY3RvciIsInJlbCIsImNyb3NzT3JpZ2luIiwib25sb2FkIiwib25lcnJvciIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJkZWZpbmVQcm9wZXJ0eSIsImFwcGVuZFNjcmlwdCIsInNyYyIsInNjcmlwdCIsInJlamVjdCIsImJvZHkiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0IiwibXMiLCJjYW5jZWxsZWQiLCJyIiwiX19CVUlMRF9NQU5JRkVTVCIsIm9uQnVpbGRNYW5pZmVzdCIsIl9fQlVJTERfTUFOSUZFU1RfQ0IiLCJnZXRGaWxlc0ZvclJvdXRlIiwiYXNzZXRQcmVmaXgiLCJyb3V0ZSIsInNjcmlwdHMiLCJlbmNvZGVVUkkiLCJjc3MiLCJtYW5pZmVzdCIsImFsbEZpbGVzIiwiZmlsdGVyIiwidiIsImNyZWF0ZVJvdXRlTG9hZGVyIiwiZW50cnlwb2ludHMiLCJNYXAiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJtYXliZUV4ZWN1dGVTY3JpcHQiLCJmZXRjaFN0eWxlU2hlZXQiLCJmZXRjaCIsIm9rIiwidGV4dCIsImNvbnRlbnQiLCJ3aGVuRW50cnlwb2ludCIsIm9uRW50cnlwb2ludCIsImV4ZWN1dGUiLCJmbiIsImNvbXBvbmVudCIsImVycm9yIiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJhbGwiLCJoYXMiLCJlbnRyeXBvaW50Iiwic3R5bGVzIiwiYXNzaWduIiwiY24iLCJuYXZpZ2F0b3IiLCJjb25uZWN0aW9uIiwic2F2ZURhdGEiLCJ0ZXN0IiwiZWZmZWN0aXZlVHlwZSIsIm91dHB1dCIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsIk5leHRSb3V0ZXIiLCJfcm91dGVyQ29udGV4dCIsIl93aXRoUm91dGVyIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwib24iLCJldmVudEZpZWxkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwidXNlQ29udGV4dCIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiQXJyYXkiLCJpc0FycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImRpc2FibGVkIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidXNlU3RhdGUiLCJ1bmRlZmluZWQiLCJ0YWdOYW1lIiwib2JzZXJ2ZSIsImlkbGVDYWxsYmFjayIsImVsZW1lbnQiLCJjYWxsYmFjayIsIm9ic2VydmVyIiwiZWxlbWVudHMiLCJjcmVhdGVPYnNlcnZlciIsImRlbGV0ZSIsInNpemUiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZXJzIiwiZW50cmllcyIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ3aXRoUm91dGVyIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJuYW1lIiwiZGlzcGxheU5hbWUiLCJub3JtYWxpemVMb2NhbGVQYXRoIiwicGF0aG5hbWUiLCJkZXRlY3RlZExvY2FsZSIsInBhdGhuYW1lUGFydHMiLCJzcGxpdCIsInNvbWUiLCJ0b0xvd2VyQ2FzZSIsInNwbGljZSIsImpvaW4iLCJtaXR0IiwiY3JlYXRlIiwiaGFuZGxlciIsInB1c2giLCJvZmYiLCJlbWl0IiwiZXZ0cyIsImRlbExvY2FsZSIsImhhc0Jhc2VQYXRoIiwiZGVsQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZUFzIiwiX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2giLCJfcm91dGVMb2FkZXIiLCJfZGVub3JtYWxpemVQYWdlUGF0aCIsIl9ub3JtYWxpemVMb2NhbGVQYXRoIiwiX21pdHQiLCJfdXRpbHMiLCJfaXNEeW5hbWljIiwiX3BhcnNlUmVsYXRpdmVVcmwiLCJfcXVlcnlzdHJpbmciLCJfcmVzb2x2ZVJld3JpdGVzIiwiX3JvdXRlTWF0Y2hlciIsIl9yb3V0ZVJlZ2V4Iiwib2JqIiwiX19lc01vZHVsZSIsImRldGVjdERvbWFpbkxvY2FsZSIsImJhc2VQYXRoIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImFkZFBhdGhQcmVmaXgiLCJwcmVmaXgiLCJzdGFydHNXaXRoIiwicGF0aE5vUXVlcnlIYXNoIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsImxlbmd0aCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsIlVSTCIsIm9yaWdpbiIsImFzUGF0aG5hbWUiLCJxdWVyeSIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZ2V0Um91dGVSZWdleCIsImR5bmFtaWNHcm91cHMiLCJncm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImdldFJvdXRlTWF0Y2hlciIsInBhcmFtcyIsImV2ZXJ5IiwicGFyYW0iLCJyZXBlYXQiLCJvcHRpb25hbCIsInJlcGxhY2VkIiwic2VnbWVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlc3VsdCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsImZpbHRlcmVkUXVlcnkiLCJpbmNsdWRlcyIsInJlc29sdmVBcyIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwiYXNQYXRoIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImlzRHluYW1pY1JvdXRlIiwic2VhcmNoUGFyYW1zIiwic2VhcmNoUGFyYW1zVG9VcmxRdWVyeSIsImhhc2giLCJzdHJpcE9yaWdpbiIsInByZXBhcmVVcmxBcyIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInByZXBhcmVkVXJsIiwicHJlcGFyZWRBcyIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYWdlcyIsImNsZWFuUGF0aG5hbWUiLCJkZW5vcm1hbGl6ZVBhZ2VQYXRoIiwicGFnZSIsInJlIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJTU0dfREFUQV9OT1RfRk9VTkQiLCJmZXRjaFJldHJ5IiwiYXR0ZW1wdHMiLCJjcmVkZW50aWFscyIsInN0YXR1cyIsImpzb24iLCJkYXRhIiwibm90Rm91bmQiLCJmZXRjaE5leHREYXRhIiwiZGF0YUhyZWYiLCJpc1NlcnZlclJlbmRlciIsIlJvdXRlciIsImNvbnN0cnVjdG9yIiwiX3BhdGhuYW1lIiwiX3F1ZXJ5IiwiX2FzIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJDb21wb25lbnQiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwiaXNQcmV2aWV3IiwiY29tcG9uZW50cyIsInNkYyIsInNkciIsInN1YiIsImNsYyIsIl9icHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImlzUmVhZHkiLCJfaWR4Iiwib25Qb3BTdGF0ZSIsInN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJfX04iLCJmb3JjZWRTY3JvbGwiLCJpZHgiLCJwYXJzZVJlbGF0aXZlVXJsIiwiY2hhbmdlIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJfX05fU1NQIiwiYXV0b0V4cG9ydER5bmFtaWMiLCJfX05FWFRfREFUQV9fIiwiYXV0b0V4cG9ydCIsImdzc3AiLCJnaXAiLCJsb2NhdGlvbiIsInNlYXJjaCIsInJlbG9hZCIsImJhY2siLCJoaXN0b3J5IiwibWV0aG9kIiwic2hvdWxkUmVzb2x2ZUhyZWYiLCJfaCIsIl9zaG91bGRSZXNvbHZlSHJlZiIsImxvY2FsZUNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwicm91dGVQcm9wcyIsImFib3J0Q29tcG9uZW50TG9hZCIsImNsZWFuZWRBcyIsIm9ubHlBSGFzaENoYW5nZSIsInNjcm9sbFRvSGFzaCIsIm5vdGlmeSIsInBhcnNlZCIsInJld3JpdGVzIiwiZ2V0UGFnZUxpc3QiLCJfX3Jld3JpdGVzIiwidXJsSXNOZXciLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwiX3NlbGYkX19ORVhUX0RBVEFfXyRwIiwiX3NlbGYkX19ORVhUX0RBVEFfXyRwMiIsIl9vcHRpb25zJHNjcm9sbCIsInJvdXRlSW5mbyIsImdldFJvdXRlSW5mbyIsInBhZ2VQcm9wcyIsIl9fTl9SRURJUkVDVCIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5ld1VybCIsIm5ld0FzIiwiX19OX1BSRVZJRVciLCJub3RGb3VuZFJvdXRlIiwiZmV0Y2hDb21wb25lbnQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJzdGF0dXNDb2RlIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsInNob3VsZFNjcm9sbCIsInJlc2V0U2Nyb2xsIiwieCIsInkiLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImxvYWRFcnJvckZhaWwiLCJnaXBFcnIiLCJyb3V0ZUluZm9FcnIiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsIm1vZCIsImlzVmFsaWRFbGVtZW50VHlwZSIsImdldERhdGFIcmVmIiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwibmV3VXJsTm9IYXNoIiwibmV3SGFzaCIsInNjcm9sbFRvIiwiaWRFbCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJuYW1lRWwiLCJnZXRFbGVtZW50c0J5TmFtZSIsIl9pc1NzZyIsImlzU3NnIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwibG9hZFBhZ2UiLCJjYWNoZUtleSIsInJlc291cmNlS2V5IiwiY3R4IiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJmb3JtYXRVcmwiLCJxdWVyeXN0cmluZyIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsIldlYWtNYXAiLCJjYWNoZSIsIm5ld09iaiIsImhhc1Byb3BlcnR5RGVzY3JpcHRvciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImRlc2MiLCJzbGFzaGVkUHJvdG9jb2xzIiwidXJsT2JqIiwiYXV0aCIsImhvc3RuYW1lIiwicHJvdG9jb2wiLCJob3N0IiwicG9ydCIsIlN0cmluZyIsInVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMiLCJzdWJzdHIiLCJzbGFzaGVzIiwiVEVTVF9ST1VURSIsImdsb2JhbEJhc2UiLCJyZXNvbHZlZEJhc2UiLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwiaXNOYU4iLCJ1cmxRdWVyeSIsIlVSTFNlYXJjaFBhcmFtcyIsIml0ZW0iLCJhcHBlbmQiLCJzZWFyY2hQYXJhbXNMaXN0IiwiZnJvbSIsImV4ZWMiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJjb2RlIiwic2x1Z05hbWUiLCJnIiwibSIsInBvcyIsImVzY2FwZVJlZ2V4Iiwic3RyIiwicGFyc2VQYXJhbWV0ZXIiLCJub3JtYWxpemVkUm91dGUiLCJzZWdtZW50cyIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwiZnJvbUNoYXJDb2RlIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwiUmVnRXhwIiwibmFtZWRSZWdleCIsImV4ZWNPbmNlIiwiZ2V0RGlzcGxheU5hbWUiLCJpc1Jlc1NlbnQiLCJfZm9ybWF0VXJsIiwidXNlZCIsImZpbmlzaGVkIiwiaGVhZGVyc1NlbnQiLCJfQXBwJHByb3RvdHlwZSIsInVybE9iamVjdEtleXMiLCJTUCIsIm1lYXN1cmUiLCJBUEkiLCJsb2NhbFN0b3JhZ2VEYXRhIiwicmVzcG9uc2UiLCJoZWFkZXJzIiwic2VydmljZSIsImF4aW9zIiwiaW50ZXJjZXB0b3JzIiwidXNlIiwiaGFuZGxlU3VjY2VzcyIsImhhbmRsZUVycm9yIiwicmVxdWVzdCIsImJhc2VVcmxGcm9tTFMiLCJCQVNFX1VSTCIsImVudiIsIlJFQUNUX0FQUF9CQVNFX1VSTCIsImxvZyIsIlByb2R1Y3RzQVBJIiwiQWNjb3JkaW9uIiwidGl0bGUiLCJjbHN4IiwicyIsIkJhY2tCdXR0b24iLCJGb290ZXIiLCJoZWFkZXJMaW5rcyIsImxvZ28iLCJIZWFkZXIiLCJwcm9tbyIsIlByb2R1Y3QiLCJpbWFnZSIsImFkZGl0aW9uIiwid2VpZ2h0IiwicHJpY2UiLCJ0YXN0ZXMiLCJhZGRpdGlvbkNsYXNzIiwiYWxsU3RhdHVzIiwiY2xhc3MiLCJ0YXN0ZSIsImFsbFRhc3RlcyIsIlNsaWRlciIsInNsaWRlcyIsIlN3aXBlckNvcmUiLCJOYXZpZ2F0aW9uIiwicHJldlJlZiIsIlJlYWN0IiwibmV4dFJlZiIsImN1cnJlbnRDb3VudCIsInNldEN1cnJlbnRDb3VudCIsImFsbENvdW50IiwiY2VpbCIsInNsaWRlciIsInNsaWRlc1BlclZpZXciLCJzbGlkZXJDbGFzcyIsInNsaWRlQ2xhc3MiLCJyZXN0UGFyYW1zIiwibmF2Iiwic3dpcGVyIiwibmF2aWdhdGlvbiIsInByZXZFbCIsIm5leHRFbCIsInVwZGF0ZSIsInNuYXBJbmRleCIsInNsaWRlIiwiU2xpZGVyTmF2IiwicHJldiIsImNvdW50ZXIiLCJQdXJjaGFzZUNvbnRyb2wiLCJjb3VudCIsInNldENvdW50IiwiY2hhbmdlQ291bnQiLCJvcGVyYXRpb24iLCJUaHVtYm5haWxzIiwiZ2FsbGVyeSIsImFjdGl2ZU1haW4iLCJzZXRBY3RpdmVNYWluIiwiYWN0aXZlTWluaSIsInNldEFjdGl2ZU1pbmkiLCJzd2l0Y2hJbWFnZSIsIkxvZ28iLCJSZWRXaW5lIiwiYm9yZGVyIiwiV2hpdGVXaW5lIiwiVmVnZXRhYmxlcyIsIkZydWl0cyIsInNsaWRlclBhcmFtcyIsInNsaWRlc1Blckdyb3VwIiwic3BhY2VCZXR3ZWVuIiwiRGVzY3JpcHRpb25TZWN0aW9uIiwicHJvZHVjdCIsInByb2R1Y3RzIiwiZGF0ZSIsImRlc2NyaXB0aW9uIiwiYXZhbGlhYmxlIiwicHJlcGFyaW5nIiwidmVnZXRhYmxlcyIsImZydWl0cyIsImNhcmQiLCJnZXRQcm9kdWN0cyIsImdldFNlcnZlclNpZGVQcm9wcyIsImFwcENvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7QUNOQSxjQUFjLG1CQUFPLENBQUMsc0ZBQStCOztBQUVyRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDaEJhLGtCQUFrQixNQUFNLHdCQUF3QixrQkFBa0IsMkJBQTJCLHFCQUFxQixnQ0FBZ0MsZ0NBQWdDLG1DQUFtQyw0QkFBNEIsK0JBQStCLG9CQUFvQix5QkFBeUIsVUFBVTtBQUNwVixpRDs7Ozs7Ozs7OztBQ0RBLHlHQUE4Qzs7Ozs7Ozs7Ozs7O0FDQTlDLG1DOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJwYWdlcy9wcm9kdWN0cy9baWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXI9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpO3ZhciBfcm91dGVyMj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7dmFyIF91c2VJbnRlcnNlY3Rpb249cmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtjb25zdCBwcmVmZXRjaGVkPXt9O2Z1bmN0aW9uIHByZWZldGNoKHJvdXRlcixocmVmLGFzLG9wdGlvbnMpe2lmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJ3x8IXJvdXRlcilyZXR1cm47aWYoISgwLF9yb3V0ZXIuaXNMb2NhbFVSTCkoaHJlZikpcmV0dXJuOy8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbi8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbi8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG5yb3V0ZXIucHJlZmV0Y2goaHJlZixhcyxvcHRpb25zKS5jYXRjaChlcnI9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Ly8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xudGhyb3cgZXJyO319KTtjb25zdCBjdXJMb2NhbGU9b3B0aW9ucyYmdHlwZW9mIG9wdGlvbnMubG9jYWxlIT09J3VuZGVmaW5lZCc/b3B0aW9ucy5sb2NhbGU6cm91dGVyJiZyb3V0ZXIubG9jYWxlOy8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG5wcmVmZXRjaGVkW2hyZWYrJyUnK2FzKyhjdXJMb2NhbGU/JyUnK2N1ckxvY2FsZTonJyldPXRydWU7fWZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCl7Y29uc3R7dGFyZ2V0fT1ldmVudC5jdXJyZW50VGFyZ2V0O3JldHVybiB0YXJnZXQmJnRhcmdldCE9PSdfc2VsZid8fGV2ZW50Lm1ldGFLZXl8fGV2ZW50LmN0cmxLZXl8fGV2ZW50LnNoaWZ0S2V5fHxldmVudC5hbHRLZXl8fC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG5ldmVudC5uYXRpdmVFdmVudCYmZXZlbnQubmF0aXZlRXZlbnQud2hpY2g9PT0yO31mdW5jdGlvbiBsaW5rQ2xpY2tlZChlLHJvdXRlcixocmVmLGFzLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlKXtjb25zdHtub2RlTmFtZX09ZS5jdXJyZW50VGFyZ2V0O2lmKG5vZGVOYW1lPT09J0EnJiYoaXNNb2RpZmllZEV2ZW50KGUpfHwhKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSkpey8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxucmV0dXJuO31lLnByZXZlbnREZWZhdWx0KCk7Ly8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG5pZihzY3JvbGw9PW51bGwmJmFzLmluZGV4T2YoJyMnKT49MCl7c2Nyb2xsPWZhbHNlO30vLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbnJvdXRlcltyZXBsYWNlPydyZXBsYWNlJzoncHVzaCddKGhyZWYsYXMse3NoYWxsb3csbG9jYWxlLHNjcm9sbH0pO31mdW5jdGlvbiBMaW5rKHByb3BzKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7ZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3Mpe3JldHVybiBuZXcgRXJyb3IoYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmArKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz9cIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCI6JycpKTt9Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbmNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZD17aHJlZjp0cnVlfTtjb25zdCByZXF1aXJlZFByb3BzPU9iamVjdC5rZXlzKHJlcXVpcmVkUHJvcHNHdWFyZCk7cmVxdWlyZWRQcm9wcy5mb3JFYWNoKGtleT0+e2lmKGtleT09PSdocmVmJyl7aWYocHJvcHNba2V5XT09bnVsbHx8dHlwZW9mIHByb3BzW2tleV0hPT0nc3RyaW5nJyYmdHlwZW9mIHByb3BzW2tleV0hPT0nb2JqZWN0Jyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2BzdHJpbmdgIG9yIGBvYmplY3RgJyxhY3R1YWw6cHJvcHNba2V5XT09PW51bGw/J251bGwnOnR5cGVvZiBwcm9wc1trZXldfSk7fX1lbHNley8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5jb25zdCBfPWtleTt9fSk7Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbmNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZD17YXM6dHJ1ZSxyZXBsYWNlOnRydWUsc2Nyb2xsOnRydWUsc2hhbGxvdzp0cnVlLHBhc3NIcmVmOnRydWUscHJlZmV0Y2g6dHJ1ZSxsb2NhbGU6dHJ1ZX07Y29uc3Qgb3B0aW9uYWxQcm9wcz1PYmplY3Qua2V5cyhvcHRpb25hbFByb3BzR3VhcmQpO29wdGlvbmFsUHJvcHMuZm9yRWFjaChrZXk9Pntjb25zdCB2YWxUeXBlPXR5cGVvZiBwcm9wc1trZXldO2lmKGtleT09PSdhcycpe2lmKHByb3BzW2tleV0mJnZhbFR5cGUhPT0nc3RyaW5nJyYmdmFsVHlwZSE9PSdvYmplY3QnKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYHN0cmluZ2Agb3IgYG9iamVjdGAnLGFjdHVhbDp2YWxUeXBlfSk7fX1lbHNlIGlmKGtleT09PSdsb2NhbGUnKXtpZihwcm9wc1trZXldJiZ2YWxUeXBlIT09J3N0cmluZycpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgc3RyaW5nYCcsYWN0dWFsOnZhbFR5cGV9KTt9fWVsc2UgaWYoa2V5PT09J3JlcGxhY2UnfHxrZXk9PT0nc2Nyb2xsJ3x8a2V5PT09J3NoYWxsb3cnfHxrZXk9PT0ncGFzc0hyZWYnfHxrZXk9PT0ncHJlZmV0Y2gnKXtpZihwcm9wc1trZXldIT1udWxsJiZ2YWxUeXBlIT09J2Jvb2xlYW4nKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYGJvb2xlYW5gJyxhY3R1YWw6dmFsVHlwZX0pO319ZWxzZXsvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuY29uc3QgXz1rZXk7fX0pOy8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbmNvbnN0IGhhc1dhcm5lZD1fcmVhY3QuZGVmYXVsdC51c2VSZWYoZmFsc2UpO2lmKHByb3BzLnByZWZldGNoJiYhaGFzV2FybmVkLmN1cnJlbnQpe2hhc1dhcm5lZC5jdXJyZW50PXRydWU7Y29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCcpO319Y29uc3QgcD1wcm9wcy5wcmVmZXRjaCE9PWZhbHNlO2NvbnN0IHJvdXRlcj0oMCxfcm91dGVyMi51c2VSb3V0ZXIpKCk7Y29uc3R7aHJlZixhc309X3JlYWN0LmRlZmF1bHQudXNlTWVtbygoKT0+e2NvbnN0W3Jlc29sdmVkSHJlZixyZXNvbHZlZEFzXT0oMCxfcm91dGVyLnJlc29sdmVIcmVmKShyb3V0ZXIscHJvcHMuaHJlZix0cnVlKTtyZXR1cm57aHJlZjpyZXNvbHZlZEhyZWYsYXM6cHJvcHMuYXM/KDAsX3JvdXRlci5yZXNvbHZlSHJlZikocm91dGVyLHByb3BzLmFzKTpyZXNvbHZlZEFzfHxyZXNvbHZlZEhyZWZ9O30sW3JvdXRlcixwcm9wcy5ocmVmLHByb3BzLmFzXSk7bGV0e2NoaWxkcmVuLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlfT1wcm9wczsvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbmlmKHR5cGVvZiBjaGlsZHJlbj09PSdzdHJpbmcnKXtjaGlsZHJlbj0vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIixudWxsLGNoaWxkcmVuKTt9Ly8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG5sZXQgY2hpbGQ7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXt0cnl7Y2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO31jYXRjaChlcnIpe3Rocm93IG5ldyBFcnJvcihgTXVsdGlwbGUgY2hpbGRyZW4gd2VyZSBwYXNzZWQgdG8gPExpbms+IHdpdGggXFxgaHJlZlxcYCBvZiBcXGAke3Byb3BzLmhyZWZ9XFxgIGJ1dCBvbmx5IG9uZSBjaGlsZCBpcyBzdXBwb3J0ZWQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbGluay1tdWx0aXBsZS1jaGlsZHJlbmArKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz9cIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCI6JycpKTt9fWVsc2V7Y2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO31jb25zdCBjaGlsZFJlZj1jaGlsZCYmdHlwZW9mIGNoaWxkPT09J29iamVjdCcmJmNoaWxkLnJlZjtjb25zdFtzZXRJbnRlcnNlY3Rpb25SZWYsaXNWaXNpYmxlXT0oMCxfdXNlSW50ZXJzZWN0aW9uLnVzZUludGVyc2VjdGlvbikoe3Jvb3RNYXJnaW46JzIwMHB4J30pO2NvbnN0IHNldFJlZj1fcmVhY3QuZGVmYXVsdC51c2VDYWxsYmFjayhlbD0+e3NldEludGVyc2VjdGlvblJlZihlbCk7aWYoY2hpbGRSZWYpe2lmKHR5cGVvZiBjaGlsZFJlZj09PSdmdW5jdGlvbicpY2hpbGRSZWYoZWwpO2Vsc2UgaWYodHlwZW9mIGNoaWxkUmVmPT09J29iamVjdCcpe2NoaWxkUmVmLmN1cnJlbnQ9ZWw7fX19LFtjaGlsZFJlZixzZXRJbnRlcnNlY3Rpb25SZWZdKTsoMCxfcmVhY3QudXNlRWZmZWN0KSgoKT0+e2NvbnN0IHNob3VsZFByZWZldGNoPWlzVmlzaWJsZSYmcCYmKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKTtjb25zdCBjdXJMb2NhbGU9dHlwZW9mIGxvY2FsZSE9PSd1bmRlZmluZWQnP2xvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Y29uc3QgaXNQcmVmZXRjaGVkPXByZWZldGNoZWRbaHJlZisnJScrYXMrKGN1ckxvY2FsZT8nJScrY3VyTG9jYWxlOicnKV07aWYoc2hvdWxkUHJlZmV0Y2gmJiFpc1ByZWZldGNoZWQpe3ByZWZldGNoKHJvdXRlcixocmVmLGFzLHtsb2NhbGU6Y3VyTG9jYWxlfSk7fX0sW2FzLGhyZWYsaXNWaXNpYmxlLGxvY2FsZSxwLHJvdXRlcl0pO2NvbnN0IGNoaWxkUHJvcHM9e3JlZjpzZXRSZWYsb25DbGljazplPT57aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25DbGljayhlKTt9aWYoIWUuZGVmYXVsdFByZXZlbnRlZCl7bGlua0NsaWNrZWQoZSxyb3V0ZXIsaHJlZixhcyxyZXBsYWNlLHNoYWxsb3csc2Nyb2xsLGxvY2FsZSk7fX19O2NoaWxkUHJvcHMub25Nb3VzZUVudGVyPWU9PntpZighKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSlyZXR1cm47aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXI9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSk7fXByZWZldGNoKHJvdXRlcixocmVmLGFzLHtwcmlvcml0eTp0cnVlfSk7fTsvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbi8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuaWYocHJvcHMucGFzc0hyZWZ8fGNoaWxkLnR5cGU9PT0nYScmJiEoJ2hyZWYnaW4gY2hpbGQucHJvcHMpKXtjb25zdCBjdXJMb2NhbGU9dHlwZW9mIGxvY2FsZSE9PSd1bmRlZmluZWQnP2xvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Ly8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbi8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG5jb25zdCBsb2NhbGVEb21haW49cm91dGVyJiZyb3V0ZXIuaXNMb2NhbGVEb21haW4mJigwLF9yb3V0ZXIuZ2V0RG9tYWluTG9jYWxlKShhcyxjdXJMb2NhbGUscm91dGVyJiZyb3V0ZXIubG9jYWxlcyxyb3V0ZXImJnJvdXRlci5kb21haW5Mb2NhbGVzKTtjaGlsZFByb3BzLmhyZWY9bG9jYWxlRG9tYWlufHwoMCxfcm91dGVyLmFkZEJhc2VQYXRoKSgoMCxfcm91dGVyLmFkZExvY2FsZSkoYXMsY3VyTG9jYWxlLHJvdXRlciYmcm91dGVyLmRlZmF1bHRMb2NhbGUpKTt9cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCxjaGlsZFByb3BzKTt9dmFyIF9kZWZhdWx0PUxpbms7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoPXJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO2V4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9dm9pZCAwOy8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCl7cmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSYmcGF0aCE9PScvJz9wYXRoLnNsaWNlKDAsLTEpOnBhdGg7fS8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL2NvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoPXByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSD9wYXRoPT57aWYoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpe3JldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKTt9ZWxzZSBpZihwYXRoLmVuZHNXaXRoKCcvJykpe3JldHVybiBwYXRoO31lbHNle3JldHVybiBwYXRoKycvJzt9fTpyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtleHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoPW5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrPWV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjaz12b2lkIDA7Y29uc3QgcmVxdWVzdElkbGVDYWxsYmFjaz10eXBlb2Ygc2VsZiE9PSd1bmRlZmluZWQnJiZzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2t8fGZ1bmN0aW9uKGNiKXtsZXQgc3RhcnQ9RGF0ZS5ub3coKTtyZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpe2NiKHtkaWRUaW1lb3V0OmZhbHNlLHRpbWVSZW1haW5pbmc6ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5tYXgoMCw1MC0oRGF0ZS5ub3coKS1zdGFydCkpO319KTt9LDEpO307ZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVlc3RJZGxlQ2FsbGJhY2s7Y29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrPXR5cGVvZiBzZWxmIT09J3VuZGVmaW5lZCcmJnNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrfHxmdW5jdGlvbihpZCl7cmV0dXJuIGNsZWFyVGltZW91dChpZCk7fTtleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjaz1jYW5jZWxJZGxlQ2FsbGJhY2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubWFya0Fzc2V0RXJyb3I9bWFya0Fzc2V0RXJyb3I7ZXhwb3J0cy5pc0Fzc2V0RXJyb3I9aXNBc3NldEVycm9yO2V4cG9ydHMuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdD1nZXRDbGllbnRCdWlsZE1hbmlmZXN0O2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9nZXRBc3NldFBhdGhGcm9tUm91dGU9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlXCIpKTt2YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpOy8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWT0zODAwO2Z1bmN0aW9uIHdpdGhGdXR1cmUoa2V5LG1hcCxnZW5lcmF0b3Ipe2xldCBlbnRyeT1tYXAuZ2V0KGtleSk7aWYoZW50cnkpe2lmKCdmdXR1cmUnaW4gZW50cnkpe3JldHVybiBlbnRyeS5mdXR1cmU7fXJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpO31sZXQgcmVzb2x2ZXI7Y29uc3QgcHJvbT1uZXcgUHJvbWlzZShyZXNvbHZlPT57cmVzb2x2ZXI9cmVzb2x2ZTt9KTttYXAuc2V0KGtleSxlbnRyeT17cmVzb2x2ZTpyZXNvbHZlcixmdXR1cmU6cHJvbX0pO3JldHVybiBnZW5lcmF0b3I/Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuZ2VuZXJhdG9yKCkudGhlbih2YWx1ZT0+KHJlc29sdmVyKHZhbHVlKSx2YWx1ZSkpOnByb207fWZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbmspe3RyeXtsaW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtyZXR1cm4oLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4vLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQmJiEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlfHxsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJykpO31jYXRjaChfdW51c2VkKXtyZXR1cm4gZmFsc2U7fX1jb25zdCBjYW5QcmVmZXRjaD1oYXNQcmVmZXRjaCgpO2Z1bmN0aW9uIHByZWZldGNoVmlhRG9tKGhyZWYsYXMsbGluayl7cmV0dXJuIG5ldyBQcm9taXNlKChyZXMscmVqKT0+e2lmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpe3JldHVybiByZXMoKTt9bGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7Ly8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbmlmKGFzKWxpbmsuYXM9YXM7bGluay5yZWw9YHByZWZldGNoYDtsaW5rLmNyb3NzT3JpZ2luPXByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47bGluay5vbmxvYWQ9cmVzO2xpbmsub25lcnJvcj1yZWo7Ly8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbmxpbmsuaHJlZj1ocmVmO2RvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7fSk7fWNvbnN0IEFTU0VUX0xPQURfRVJST1I9U3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJyk7Ly8gVE9ETzogdW5leHBvcnRcbmZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycil7cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsQVNTRVRfTE9BRF9FUlJPUix7fSk7fWZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnIpe3JldHVybiBlcnImJkFTU0VUX0xPQURfRVJST1IgaW4gZXJyO31mdW5jdGlvbiBhcHBlbmRTY3JpcHQoc3JjLHNjcmlwdCl7cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntzY3JpcHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7Ly8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbi8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbi8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0Llxuc2NyaXB0Lm9ubG9hZD1yZXNvbHZlO3NjcmlwdC5vbmVycm9yPSgpPT5yZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSk7Ly8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4vLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbnNjcmlwdC5jcm9zc09yaWdpbj1wcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOOy8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4vLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbnNjcmlwdC5zcmM9c3JjO2RvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTt9KTt9Ly8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocCxtcyxlcnIpe3JldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57bGV0IGNhbmNlbGxlZD1mYWxzZTtwLnRoZW4ocj0+ey8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbmNhbmNlbGxlZD10cnVlO3Jlc29sdmUocik7fSkuY2F0Y2gocmVqZWN0KTsoMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+c2V0VGltZW91dCgoKT0+e2lmKCFjYW5jZWxsZWQpe3JlamVjdChlcnIpO319LG1zKSk7fSk7fS8vIFRPRE86IHN0b3AgZXhwb3J0aW5nIG9yIGNhY2hlIHRoZSBmYWlsdXJlXG4vLyBJdCdkIGJlIGJlc3QgdG8gc3RvcCBleHBvcnRpbmcgdGhpcy4gSXQncyBhbiBpbXBsZW1lbnRhdGlvbiBkZXRhaWwuIFdlJ3JlXG4vLyBvbmx5IGV4cG9ydGluZyBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWx0eSB3aXRoIHRoZSBgcGFnZS1sb2FkZXJgLlxuLy8gT25seSBjYWNoZSB0aGlzIHJlc3BvbnNlIGFzIGEgbGFzdCByZXNvcnQgaWYgd2UgY2Fubm90IGVsaW1pbmF0ZSBhbGwgb3RoZXJcbi8vIGNvZGUgYnJhbmNoZXMgdGhhdCB1c2UgdGhlIEJ1aWxkIE1hbmlmZXN0IENhbGxiYWNrIGFuZCBwdXNoIHRoZW0gdGhyb3VnaFxuLy8gdGhlIFJvdXRlIExvYWRlciBpbnRlcmZhY2UuXG5mdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCl7aWYoc2VsZi5fX0JVSUxEX01BTklGRVNUKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7fWNvbnN0IG9uQnVpbGRNYW5pZmVzdD1uZXcgUHJvbWlzZShyZXNvbHZlPT57Ly8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuY29uc3QgY2I9c2VsZi5fX0JVSUxEX01BTklGRVNUX0NCO3NlbGYuX19CVUlMRF9NQU5JRkVTVF9DQj0oKT0+e3Jlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtjYiYmY2IoKTt9O30pO3JldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KG9uQnVpbGRNYW5pZmVzdCxNU19NQVhfSURMRV9ERUxBWSxtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKSk7fWZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgscm91dGUpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSh7c2NyaXB0czpbYXNzZXRQcmVmaXgrJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJytlbmNvZGVVUkkoKDAsX2dldEFzc2V0UGF0aEZyb21Sb3V0ZS5kZWZhdWx0KShyb3V0ZSwnLmpzJykpXSwvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG5jc3M6W119KTt9cmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKG1hbmlmZXN0PT57aWYoIShyb3V0ZSBpbiBtYW5pZmVzdCkpe3Rocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSk7fWNvbnN0IGFsbEZpbGVzPW1hbmlmZXN0W3JvdXRlXS5tYXAoZW50cnk9PmFzc2V0UHJlZml4KycvX25leHQvJytlbmNvZGVVUkkoZW50cnkpKTtyZXR1cm57c2NyaXB0czphbGxGaWxlcy5maWx0ZXIodj0+di5lbmRzV2l0aCgnLmpzJykpLGNzczphbGxGaWxlcy5maWx0ZXIodj0+di5lbmRzV2l0aCgnLmNzcycpKX07fSk7fWZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4KXtjb25zdCBlbnRyeXBvaW50cz1uZXcgTWFwKCk7Y29uc3QgbG9hZGVkU2NyaXB0cz1uZXcgTWFwKCk7Y29uc3Qgc3R5bGVTaGVldHM9bmV3IE1hcCgpO2NvbnN0IHJvdXRlcz1uZXcgTWFwKCk7ZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYyl7bGV0IHByb209bG9hZGVkU2NyaXB0cy5nZXQoc3JjKTtpZihwcm9tKXtyZXR1cm4gcHJvbTt9Ly8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuaWYoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO31sb2FkZWRTY3JpcHRzLnNldChzcmMscHJvbT1hcHBlbmRTY3JpcHQoc3JjKSk7cmV0dXJuIHByb207fWZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmKXtsZXQgcHJvbT1zdHlsZVNoZWV0cy5nZXQoaHJlZik7aWYocHJvbSl7cmV0dXJuIHByb207fXN0eWxlU2hlZXRzLnNldChocmVmLHByb209ZmV0Y2goaHJlZikudGhlbihyZXM9PntpZighcmVzLm9rKXt0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKTt9cmV0dXJuIHJlcy50ZXh0KCkudGhlbih0ZXh0PT4oe2hyZWY6aHJlZixjb250ZW50OnRleHR9KSk7fSkuY2F0Y2goZXJyPT57dGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKTt9KSk7cmV0dXJuIHByb207fXJldHVybnt3aGVuRW50cnlwb2ludChyb3V0ZSl7cmV0dXJuIHdpdGhGdXR1cmUocm91dGUsZW50cnlwb2ludHMpO30sb25FbnRyeXBvaW50KHJvdXRlLGV4ZWN1dGUpe1Byb21pc2UucmVzb2x2ZShleGVjdXRlKS50aGVuKGZuPT5mbigpKS50aGVuKGV4cG9ydHM9Pih7Y29tcG9uZW50OmV4cG9ydHMmJmV4cG9ydHMuZGVmYXVsdHx8ZXhwb3J0cyxleHBvcnRzOmV4cG9ydHN9KSxlcnI9Pih7ZXJyb3I6ZXJyfSkpLnRoZW4oaW5wdXQ9Pntjb25zdCBvbGQ9ZW50cnlwb2ludHMuZ2V0KHJvdXRlKTtlbnRyeXBvaW50cy5zZXQocm91dGUsaW5wdXQpO2lmKG9sZCYmJ3Jlc29sdmUnaW4gb2xkKW9sZC5yZXNvbHZlKGlucHV0KTt9KTt9LGxvYWRSb3V0ZShyb3V0ZSxwcmVmZXRjaCl7cmV0dXJuIHdpdGhGdXR1cmUocm91dGUscm91dGVzLCgpPT57cmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQoZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSkudGhlbigoe3NjcmlwdHMsY3NzfSk9PntyZXR1cm4gUHJvbWlzZS5hbGwoW2VudHJ5cG9pbnRzLmhhcyhyb3V0ZSk/W106UHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKV0pO30pLnRoZW4ocmVzPT57cmV0dXJuIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLnRoZW4oZW50cnlwb2ludD0+KHtlbnRyeXBvaW50LHN0eWxlczpyZXNbMV19KSk7fSksTVNfTUFYX0lETEVfREVMQVksbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YCkpKS50aGVuKCh7ZW50cnlwb2ludCxzdHlsZXN9KT0+e2NvbnN0IHJlcz1PYmplY3QuYXNzaWduKHtzdHlsZXM6c3R5bGVzfSxlbnRyeXBvaW50KTtyZXR1cm4nZXJyb3InaW4gZW50cnlwb2ludD9lbnRyeXBvaW50OnJlczt9KS5jYXRjaChlcnI9PntpZihwcmVmZXRjaCl7Ly8gd2UgZG9uJ3Qgd2FudCB0byBjYWNoZSBlcnJvcnMgZHVyaW5nIHByZWZldGNoXG50aHJvdyBlcnI7fXJldHVybntlcnJvcjplcnJ9O30pO30pO30scHJlZmV0Y2gocm91dGUpey8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbi8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbmxldCBjbjtpZihjbj1uYXZpZ2F0b3IuY29ubmVjdGlvbil7Ly8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG5pZihjbi5zYXZlRGF0YXx8LzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKXJldHVybiBQcm9taXNlLnJlc29sdmUoKTt9cmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgscm91dGUpLnRoZW4ob3V0cHV0PT5Qcm9taXNlLmFsbChjYW5QcmVmZXRjaD9vdXRwdXQuc2NyaXB0cy5tYXAoc2NyaXB0PT5wcmVmZXRjaFZpYURvbShzY3JpcHQsJ3NjcmlwdCcpKTpbXSkpLnRoZW4oKCk9PnsoMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+dGhpcy5sb2FkUm91dGUocm91dGUsdHJ1ZSkuY2F0Y2goKCk9Pnt9KSk7fSkuY2F0Y2goLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbigpPT57fSk7fX07fXZhciBfZGVmYXVsdD1jcmVhdGVSb3V0ZUxvYWRlcjtleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1sb2FkZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMudXNlUm91dGVyPXVzZVJvdXRlcjtleHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZT1tYWtlUHVibGljUm91dGVySW5zdGFuY2U7ZXhwb3J0cy5jcmVhdGVSb3V0ZXI9ZXhwb3J0cy53aXRoUm91dGVyPWV4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXIyPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKSk7ZXhwb3J0cy5Sb3V0ZXI9X3JvdXRlcjIuZGVmYXVsdDtleHBvcnRzLk5leHRSb3V0ZXI9X3JvdXRlcjIuTmV4dFJvdXRlcjt2YXIgX3JvdXRlckNvbnRleHQ9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dFwiKTt2YXIgX3dpdGhSb3V0ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93aXRoLXJvdXRlclwiKSk7ZXhwb3J0cy53aXRoUm91dGVyPV93aXRoUm91dGVyLmRlZmF1bHQ7LyogZ2xvYmFsIHdpbmRvdyAqL2NvbnN0IHNpbmdsZXRvblJvdXRlcj17cm91dGVyOm51bGwsLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbnJlYWR5Q2FsbGJhY2tzOltdLHJlYWR5KGNiKXtpZih0aGlzLnJvdXRlcilyZXR1cm4gY2IoKTtpZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpe3RoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7fX19Oy8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzPVsncGF0aG5hbWUnLCdyb3V0ZScsJ3F1ZXJ5JywnYXNQYXRoJywnY29tcG9uZW50cycsJ2lzRmFsbGJhY2snLCdiYXNlUGF0aCcsJ2xvY2FsZScsJ2xvY2FsZXMnLCdkZWZhdWx0TG9jYWxlJywnaXNSZWFkeScsJ2lzUHJldmlldycsJ2lzTG9jYWxlRG9tYWluJ107Y29uc3Qgcm91dGVyRXZlbnRzPVsncm91dGVDaGFuZ2VTdGFydCcsJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywncm91dGVDaGFuZ2VFcnJvcicsJ2hhc2hDaGFuZ2VTdGFydCcsJ2hhc2hDaGFuZ2VDb21wbGV0ZSddO2NvbnN0IGNvcmVNZXRob2RGaWVsZHM9WydwdXNoJywncmVwbGFjZScsJ3JlbG9hZCcsJ2JhY2snLCdwcmVmZXRjaCcsJ2JlZm9yZVBvcFN0YXRlJ107Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwnZXZlbnRzJyx7Z2V0KCl7cmV0dXJuIF9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO319KTt1cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSB3ZSBuZWVkIHRvIHJldHVyblxuLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4vLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbi8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLGZpZWxkLHtnZXQoKXtjb25zdCByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF07fX0pO30pO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG47c2luZ2xldG9uUm91dGVyW2ZpZWxkXT0oLi4uYXJncyk9Pntjb25zdCByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncyk7fTt9KTtyb3V0ZXJFdmVudHMuZm9yRWFjaChldmVudD0+e3NpbmdsZXRvblJvdXRlci5yZWFkeSgoKT0+e19yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzLm9uKGV2ZW50LCguLi5hcmdzKT0+e2NvbnN0IGV2ZW50RmllbGQ9YG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZygxKX1gO2NvbnN0IF9zaW5nbGV0b25Sb3V0ZXI9c2luZ2xldG9uUm91dGVyO2lmKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pe3RyeXtfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpO31jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YCk7Y29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKTt9fX0pO30pO30pO2Z1bmN0aW9uIGdldFJvdXRlcigpe2lmKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKXtjb25zdCBtZXNzYWdlPSdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJysnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgb24gdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbic7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31yZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Ly8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG52YXIgX2RlZmF1bHQ9c2luZ2xldG9uUm91dGVyOy8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7ZnVuY3Rpb24gdXNlUm91dGVyKCl7cmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7fS8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiBiZSB1c2VkIGluc2lkZSB0aGUgc2VydmVyLlxuY29uc3QgY3JlYXRlUm91dGVyPSguLi5hcmdzKT0+e3NpbmdsZXRvblJvdXRlci5yb3V0ZXI9bmV3IF9yb3V0ZXIyLmRlZmF1bHQoLi4uYXJncyk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goY2I9PmNiKCkpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcz1bXTtyZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Oy8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydHMuY3JlYXRlUm91dGVyPWNyZWF0ZVJvdXRlcjtmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKXtjb25zdCBfcm91dGVyPXJvdXRlcjtjb25zdCBpbnN0YW5jZT17fTtmb3IoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe2lmKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XT09PSdvYmplY3QnKXtpbnN0YW5jZVtwcm9wZXJ0eV09T2JqZWN0LmFzc2lnbihBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKT9bXTp7fSxfcm91dGVyW3Byb3BlcnR5XSk7Ly8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbmNvbnRpbnVlO31pbnN0YW5jZVtwcm9wZXJ0eV09X3JvdXRlcltwcm9wZXJ0eV07fS8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbmluc3RhbmNlLmV2ZW50cz1fcm91dGVyMi5kZWZhdWx0LmV2ZW50cztjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PntpbnN0YW5jZVtmaWVsZF09KC4uLmFyZ3MpPT57cmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO307fSk7cmV0dXJuIGluc3RhbmNlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZUludGVyc2VjdGlvbj11c2VJbnRlcnNlY3Rpb247dmFyIF9yZWFjdD1yZXF1aXJlKFwicmVhY3RcIik7dmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtjb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcj10eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIhPT0ndW5kZWZpbmVkJztmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oe3Jvb3RNYXJnaW4sZGlzYWJsZWR9KXtjb25zdCBpc0Rpc2FibGVkPWRpc2FibGVkfHwhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7Y29uc3QgdW5vYnNlcnZlPSgwLF9yZWFjdC51c2VSZWYpKCk7Y29uc3RbdmlzaWJsZSxzZXRWaXNpYmxlXT0oMCxfcmVhY3QudXNlU3RhdGUpKGZhbHNlKTtjb25zdCBzZXRSZWY9KDAsX3JlYWN0LnVzZUNhbGxiYWNrKShlbD0+e2lmKHVub2JzZXJ2ZS5jdXJyZW50KXt1bm9ic2VydmUuY3VycmVudCgpO3Vub2JzZXJ2ZS5jdXJyZW50PXVuZGVmaW5lZDt9aWYoaXNEaXNhYmxlZHx8dmlzaWJsZSlyZXR1cm47aWYoZWwmJmVsLnRhZ05hbWUpe3Vub2JzZXJ2ZS5jdXJyZW50PW9ic2VydmUoZWwsaXNWaXNpYmxlPT5pc1Zpc2libGUmJnNldFZpc2libGUoaXNWaXNpYmxlKSx7cm9vdE1hcmdpbn0pO319LFtpc0Rpc2FibGVkLHJvb3RNYXJnaW4sdmlzaWJsZV0pOygwLF9yZWFjdC51c2VFZmZlY3QpKCgpPT57aWYoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKXtpZighdmlzaWJsZSl7Y29uc3QgaWRsZUNhbGxiYWNrPSgwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT5zZXRWaXNpYmxlKHRydWUpKTtyZXR1cm4oKT0+KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2suY2FuY2VsSWRsZUNhbGxiYWNrKShpZGxlQ2FsbGJhY2spO319fSxbdmlzaWJsZV0pO3JldHVybltzZXRSZWYsdmlzaWJsZV07fWZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCxjYWxsYmFjayxvcHRpb25zKXtjb25zdHtpZCxvYnNlcnZlcixlbGVtZW50c309Y3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyk7ZWxlbWVudHMuc2V0KGVsZW1lbnQsY2FsbGJhY2spO29ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7cmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpe2VsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7Ly8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuaWYoZWxlbWVudHMuc2l6ZT09PTApe29ic2VydmVyLmRpc2Nvbm5lY3QoKTtvYnNlcnZlcnMuZGVsZXRlKGlkKTt9fTt9Y29uc3Qgb2JzZXJ2ZXJzPW5ldyBNYXAoKTtmdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zKXtjb25zdCBpZD1vcHRpb25zLnJvb3RNYXJnaW58fCcnO2xldCBpbnN0YW5jZT1vYnNlcnZlcnMuZ2V0KGlkKTtpZihpbnN0YW5jZSl7cmV0dXJuIGluc3RhbmNlO31jb25zdCBlbGVtZW50cz1uZXcgTWFwKCk7Y29uc3Qgb2JzZXJ2ZXI9bmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXM9PntlbnRyaWVzLmZvckVhY2goZW50cnk9Pntjb25zdCBjYWxsYmFjaz1lbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtjb25zdCBpc1Zpc2libGU9ZW50cnkuaXNJbnRlcnNlY3Rpbmd8fGVudHJ5LmludGVyc2VjdGlvblJhdGlvPjA7aWYoY2FsbGJhY2smJmlzVmlzaWJsZSl7Y2FsbGJhY2soaXNWaXNpYmxlKTt9fSk7fSxvcHRpb25zKTtvYnNlcnZlcnMuc2V0KGlkLGluc3RhbmNlPXtpZCxvYnNlcnZlcixlbGVtZW50c30pO3JldHVybiBpbnN0YW5jZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJzZWN0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9d2l0aFJvdXRlcjt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7ZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCl7ZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpe3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LE9iamVjdC5hc3NpZ24oe3JvdXRlcjooMCxfcm91dGVyLnVzZVJvdXRlcikoKX0scHJvcHMpKTt9V2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcy8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbjtXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0IG5hbWU9Q29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvc2VkQ29tcG9uZW50Lm5hbWV8fCdVbmtub3duJztXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZT1gd2l0aFJvdXRlcigke25hbWV9KWA7fXJldHVybiBXaXRoUm91dGVyV3JhcHBlcjt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD13aXRoLXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZUxvY2FsZVBhdGg9bm9ybWFsaXplTG9jYWxlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKHBhdGhuYW1lLGxvY2FsZXMpe2xldCBkZXRlY3RlZExvY2FsZTsvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbmNvbnN0IHBhdGhuYW1lUGFydHM9cGF0aG5hbWUuc3BsaXQoJy8nKTsobG9jYWxlc3x8W10pLnNvbWUobG9jYWxlPT57aWYocGF0aG5hbWVQYXJ0c1sxXS50b0xvd2VyQ2FzZSgpPT09bG9jYWxlLnRvTG93ZXJDYXNlKCkpe2RldGVjdGVkTG9jYWxlPWxvY2FsZTtwYXRobmFtZVBhcnRzLnNwbGljZSgxLDEpO3BhdGhuYW1lPXBhdGhuYW1lUGFydHMuam9pbignLycpfHwnLyc7cmV0dXJuIHRydWU7fXJldHVybiBmYWxzZTt9KTtyZXR1cm57cGF0aG5hbWUsZGV0ZWN0ZWRMb2NhbGV9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9bWl0dDsvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi8gLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcbmZ1bmN0aW9uIG1pdHQoKXtjb25zdCBhbGw9T2JqZWN0LmNyZWF0ZShudWxsKTtyZXR1cm57b24odHlwZSxoYW5kbGVyKXs7KGFsbFt0eXBlXXx8KGFsbFt0eXBlXT1bXSkpLnB1c2goaGFuZGxlcik7fSxvZmYodHlwZSxoYW5kbGVyKXtpZihhbGxbdHlwZV0pe2FsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcik+Pj4wLDEpO319LGVtaXQodHlwZSwuLi5ldnRzKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG47KGFsbFt0eXBlXXx8W10pLnNsaWNlKCkubWFwKGhhbmRsZXI9PntoYW5kbGVyKC4uLmV2dHMpO30pO319O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1pdHQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXREb21haW5Mb2NhbGU9Z2V0RG9tYWluTG9jYWxlO2V4cG9ydHMuYWRkTG9jYWxlPWFkZExvY2FsZTtleHBvcnRzLmRlbExvY2FsZT1kZWxMb2NhbGU7ZXhwb3J0cy5oYXNCYXNlUGF0aD1oYXNCYXNlUGF0aDtleHBvcnRzLmFkZEJhc2VQYXRoPWFkZEJhc2VQYXRoO2V4cG9ydHMuZGVsQmFzZVBhdGg9ZGVsQmFzZVBhdGg7ZXhwb3J0cy5pc0xvY2FsVVJMPWlzTG9jYWxVUkw7ZXhwb3J0cy5pbnRlcnBvbGF0ZUFzPWludGVycG9sYXRlQXM7ZXhwb3J0cy5yZXNvbHZlSHJlZj1yZXNvbHZlSHJlZjtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaD1yZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaFwiKTt2YXIgX3JvdXRlTG9hZGVyPXJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyXCIpO3ZhciBfZGVub3JtYWxpemVQYWdlUGF0aD1yZXF1aXJlKFwiLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aFwiKTt2YXIgX25vcm1hbGl6ZUxvY2FsZVBhdGg9cmVxdWlyZShcIi4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoXCIpO3ZhciBfbWl0dD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi91dGlsc1wiKTt2YXIgX2lzRHluYW1pYz1yZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO3ZhciBfcGFyc2VSZWxhdGl2ZVVybD1yZXF1aXJlKFwiLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmxcIik7dmFyIF9xdWVyeXN0cmluZz1yZXF1aXJlKFwiLi91dGlscy9xdWVyeXN0cmluZ1wiKTt2YXIgX3Jlc29sdmVSZXdyaXRlcz1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXNcIikpO3ZhciBfcm91dGVNYXRjaGVyPXJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLW1hdGNoZXJcIik7dmFyIF9yb3V0ZVJlZ2V4PXJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmo6e2RlZmF1bHQ6b2JqfTt9Ly8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxubGV0IGRldGVjdERvbWFpbkxvY2FsZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtkZXRlY3REb21haW5Mb2NhbGU9cmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZTt9Y29uc3QgYmFzZVBhdGg9cHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSHx8Jyc7ZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpe3JldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJykse2NhbmNlbGxlZDp0cnVlfSk7fWZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aCxwcmVmaXgpe3JldHVybiBwcmVmaXgmJnBhdGguc3RhcnRzV2l0aCgnLycpP3BhdGg9PT0nLyc/KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gpKHByZWZpeCk6YCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpPT09Jy8nP3BhdGguc3Vic3RyaW5nKDEpOnBhdGh9YDpwYXRoO31mdW5jdGlvbiBnZXREb21haW5Mb2NhbGUocGF0aCxsb2NhbGUsbG9jYWxlcyxkb21haW5Mb2NhbGVzKXtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtsb2NhbGU9bG9jYWxlfHwoMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXRoLGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlO2NvbnN0IGRldGVjdGVkRG9tYWluPWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLHVuZGVmaW5lZCxsb2NhbGUpO2lmKGRldGVjdGVkRG9tYWluKXtyZXR1cm5gaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cD8nJzoncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtiYXNlUGF0aHx8Jyd9JHtsb2NhbGU9PT1kZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlPycnOmAvJHtsb2NhbGV9YH0ke3BhdGh9YDt9cmV0dXJuIGZhbHNlO31yZXR1cm4gZmFsc2U7fWZ1bmN0aW9uIGFkZExvY2FsZShwYXRoLGxvY2FsZSxkZWZhdWx0TG9jYWxlKXtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtjb25zdCBwYXRobmFtZT1wYXRoTm9RdWVyeUhhc2gocGF0aCk7Y29uc3QgcGF0aExvd2VyPXBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7Y29uc3QgbG9jYWxlTG93ZXI9bG9jYWxlJiZsb2NhbGUudG9Mb3dlckNhc2UoKTtyZXR1cm4gbG9jYWxlJiZsb2NhbGUhPT1kZWZhdWx0TG9jYWxlJiYhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nK2xvY2FsZUxvd2VyKycvJykmJnBhdGhMb3dlciE9PScvJytsb2NhbGVMb3dlcj9hZGRQYXRoUHJlZml4KHBhdGgsJy8nK2xvY2FsZSk6cGF0aDt9cmV0dXJuIHBhdGg7fWZ1bmN0aW9uIGRlbExvY2FsZShwYXRoLGxvY2FsZSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Y29uc3QgcGF0aG5hbWU9cGF0aE5vUXVlcnlIYXNoKHBhdGgpO2NvbnN0IHBhdGhMb3dlcj1wYXRobmFtZS50b0xvd2VyQ2FzZSgpO2NvbnN0IGxvY2FsZUxvd2VyPWxvY2FsZSYmbG9jYWxlLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGxvY2FsZSYmKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJytsb2NhbGVMb3dlcisnLycpfHxwYXRoTG93ZXI9PT0nLycrbG9jYWxlTG93ZXIpPyhwYXRobmFtZS5sZW5ndGg9PT1sb2NhbGUubGVuZ3RoKzE/Jy8nOicnKStwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoKzEpOnBhdGg7fXJldHVybiBwYXRoO31mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aCl7Y29uc3QgcXVlcnlJbmRleD1wYXRoLmluZGV4T2YoJz8nKTtjb25zdCBoYXNoSW5kZXg9cGF0aC5pbmRleE9mKCcjJyk7aWYocXVlcnlJbmRleD4tMXx8aGFzaEluZGV4Pi0xKXtwYXRoPXBhdGguc3Vic3RyaW5nKDAscXVlcnlJbmRleD4tMT9xdWVyeUluZGV4Omhhc2hJbmRleCk7fXJldHVybiBwYXRoO31mdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoKXtwYXRoPXBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtyZXR1cm4gcGF0aD09PWJhc2VQYXRofHxwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGgrJy8nKTt9ZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCl7Ly8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbnJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsYmFzZVBhdGgpO31mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKXtwYXRoPXBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKTtpZighcGF0aC5zdGFydHNXaXRoKCcvJykpcGF0aD1gLyR7cGF0aH1gO3JldHVybiBwYXRoO30vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9mdW5jdGlvbiBpc0xvY2FsVVJMKHVybCl7Ly8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuaWYodXJsLnN0YXJ0c1dpdGgoJy8nKXx8dXJsLnN0YXJ0c1dpdGgoJyMnKXx8dXJsLnN0YXJ0c1dpdGgoJz8nKSlyZXR1cm4gdHJ1ZTt0cnl7Ly8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG5jb25zdCBsb2NhdGlvbk9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7Y29uc3QgcmVzb2x2ZWQ9bmV3IFVSTCh1cmwsbG9jYXRpb25PcmlnaW4pO3JldHVybiByZXNvbHZlZC5vcmlnaW49PT1sb2NhdGlvbk9yaWdpbiYmaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpO31jYXRjaChfKXtyZXR1cm4gZmFsc2U7fX1mdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKHJvdXRlLGFzUGF0aG5hbWUscXVlcnkpe2xldCBpbnRlcnBvbGF0ZWRSb3V0ZT0nJztjb25zdCBkeW5hbWljUmVnZXg9KDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocm91dGUpO2NvbnN0IGR5bmFtaWNHcm91cHM9ZHluYW1pY1JlZ2V4Lmdyb3Vwcztjb25zdCBkeW5hbWljTWF0Y2hlcz0vLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4oYXNQYXRobmFtZSE9PXJvdXRlPygwLF9yb3V0ZU1hdGNoZXIuZ2V0Um91dGVNYXRjaGVyKShkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpOicnKXx8Ly8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4vLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG5xdWVyeTtpbnRlcnBvbGF0ZWRSb3V0ZT1yb3V0ZTtjb25zdCBwYXJhbXM9T2JqZWN0LmtleXMoZHluYW1pY0dyb3Vwcyk7aWYoIXBhcmFtcy5ldmVyeShwYXJhbT0+e2xldCB2YWx1ZT1keW5hbWljTWF0Y2hlc1twYXJhbV18fCcnO2NvbnN0e3JlcGVhdCxvcHRpb25hbH09ZHluYW1pY0dyb3Vwc1twYXJhbV07Ly8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4vLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG5sZXQgcmVwbGFjZWQ9YFske3JlcGVhdD8nLi4uJzonJ30ke3BhcmFtfV1gO2lmKG9wdGlvbmFsKXtyZXBsYWNlZD1gJHshdmFsdWU/Jy8nOicnfVske3JlcGxhY2VkfV1gO31pZihyZXBlYXQmJiFBcnJheS5pc0FycmF5KHZhbHVlKSl2YWx1ZT1bdmFsdWVdO3JldHVybihvcHRpb25hbHx8cGFyYW0gaW4gZHluYW1pY01hdGNoZXMpJiYoLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG5pbnRlcnBvbGF0ZWRSb3V0ZT1pbnRlcnBvbGF0ZWRSb3V0ZS5yZXBsYWNlKHJlcGxhY2VkLHJlcGVhdD92YWx1ZS5tYXAoLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbi8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuc2VnbWVudD0+ZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpKS5qb2luKCcvJyk6ZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSl8fCcvJyk7fSkpe2ludGVycG9sYXRlZFJvdXRlPScnOy8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG4vLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbn1yZXR1cm57cGFyYW1zLHJlc3VsdDppbnRlcnBvbGF0ZWRSb3V0ZX07fWZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxwYXJhbXMpe2NvbnN0IGZpbHRlcmVkUXVlcnk9e307T2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goa2V5PT57aWYoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKXtmaWx0ZXJlZFF1ZXJ5W2tleV09cXVlcnlba2V5XTt9fSk7cmV0dXJuIGZpbHRlcmVkUXVlcnk7fS8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9mdW5jdGlvbiByZXNvbHZlSHJlZihyb3V0ZXIsaHJlZixyZXNvbHZlQXMpey8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG5sZXQgYmFzZTtjb25zdCB1cmxBc1N0cmluZz10eXBlb2YgaHJlZj09PSdzdHJpbmcnP2hyZWY6KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShocmVmKTt0cnl7YmFzZT1uZXcgVVJMKHVybEFzU3RyaW5nLnN0YXJ0c1dpdGgoJyMnKT9yb3V0ZXIuYXNQYXRoOnJvdXRlci5wYXRobmFtZSwnaHR0cDovL24nKTt9Y2F0Y2goXyl7Ly8gZmFsbGJhY2sgdG8gLyBmb3IgaW52YWxpZCBhc1BhdGggdmFsdWVzIGUuZy4gLy9cbmJhc2U9bmV3IFVSTCgnLycsJ2h0dHA6Ly9uJyk7fS8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG5pZighaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpe3JldHVybiByZXNvbHZlQXM/W3VybEFzU3RyaW5nXTp1cmxBc1N0cmluZzt9dHJ5e2NvbnN0IGZpbmFsVXJsPW5ldyBVUkwodXJsQXNTdHJpbmcsYmFzZSk7ZmluYWxVcmwucGF0aG5hbWU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gpKGZpbmFsVXJsLnBhdGhuYW1lKTtsZXQgaW50ZXJwb2xhdGVkQXM9Jyc7aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkoZmluYWxVcmwucGF0aG5hbWUpJiZmaW5hbFVybC5zZWFyY2hQYXJhbXMmJnJlc29sdmVBcyl7Y29uc3QgcXVlcnk9KDAsX3F1ZXJ5c3RyaW5nLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkpKGZpbmFsVXJsLnNlYXJjaFBhcmFtcyk7Y29uc3R7cmVzdWx0LHBhcmFtc309aW50ZXJwb2xhdGVBcyhmaW5hbFVybC5wYXRobmFtZSxmaW5hbFVybC5wYXRobmFtZSxxdWVyeSk7aWYocmVzdWx0KXtpbnRlcnBvbGF0ZWRBcz0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTpyZXN1bHQsaGFzaDpmaW5hbFVybC5oYXNoLHF1ZXJ5Om9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxwYXJhbXMpfSk7fX0vLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuY29uc3QgcmVzb2x2ZWRIcmVmPWZpbmFsVXJsLm9yaWdpbj09PWJhc2Uub3JpZ2luP2ZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aCk6ZmluYWxVcmwuaHJlZjtyZXR1cm4gcmVzb2x2ZUFzP1tyZXNvbHZlZEhyZWYsaW50ZXJwb2xhdGVkQXN8fHJlc29sdmVkSHJlZl06cmVzb2x2ZWRIcmVmO31jYXRjaChfKXtyZXR1cm4gcmVzb2x2ZUFzP1t1cmxBc1N0cmluZ106dXJsQXNTdHJpbmc7fX1mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmwpe2NvbnN0IG9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7cmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbik/dXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTp1cmw7fWZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXIsdXJsLGFzKXsvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbi8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG5sZXRbcmVzb2x2ZWRIcmVmLHJlc29sdmVkQXNdPXJlc29sdmVIcmVmKHJvdXRlcix1cmwsdHJ1ZSk7Y29uc3Qgb3JpZ2luPSgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKTtjb25zdCBocmVmSGFkT3JpZ2luPXJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbik7Y29uc3QgYXNIYWRPcmlnaW49cmVzb2x2ZWRBcyYmcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbik7cmVzb2x2ZWRIcmVmPXN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZik7cmVzb2x2ZWRBcz1yZXNvbHZlZEFzP3N0cmlwT3JpZ2luKHJlc29sdmVkQXMpOnJlc29sdmVkQXM7Y29uc3QgcHJlcGFyZWRVcmw9aHJlZkhhZE9yaWdpbj9yZXNvbHZlZEhyZWY6YWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKTtjb25zdCBwcmVwYXJlZEFzPWFzP3N0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlcixhcykpOnJlc29sdmVkQXN8fHJlc29sdmVkSHJlZjtyZXR1cm57dXJsOnByZXBhcmVkVXJsLGFzOmFzSGFkT3JpZ2luP3ByZXBhcmVkQXM6YWRkQmFzZVBhdGgocHJlcGFyZWRBcyl9O31mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLHBhZ2VzKXtjb25zdCBjbGVhblBhdGhuYW1lPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKSgoMCxfZGVub3JtYWxpemVQYWdlUGF0aC5kZW5vcm1hbGl6ZVBhZ2VQYXRoKShwYXRobmFtZSkpO2lmKGNsZWFuUGF0aG5hbWU9PT0nLzQwNCd8fGNsZWFuUGF0aG5hbWU9PT0nL19lcnJvcicpe3JldHVybiBwYXRobmFtZTt9Ly8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuaWYoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUpKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG5wYWdlcy5zb21lKHBhZ2U9PntpZigoMCxfaXNEeW5hbWljLmlzRHluYW1pY1JvdXRlKShwYWdlKSYmKDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lKSl7cGF0aG5hbWU9cGFnZTtyZXR1cm4gdHJ1ZTt9fSk7fXJldHVybigwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7fWNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uPXByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04mJnR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyYmJ3Njcm9sbFJlc3RvcmF0aW9uJ2luIHdpbmRvdy5oaXN0b3J5JiYhIWZ1bmN0aW9uKCl7dHJ5e2xldCB2PSdfX25leHQnOy8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbnJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsdiksc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSx0cnVlO31jYXRjaChuKXt9fSgpO2NvbnN0IFNTR19EQVRBX05PVF9GT1VORD1TeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpO2Z1bmN0aW9uIGZldGNoUmV0cnkodXJsLGF0dGVtcHRzKXtyZXR1cm4gZmV0Y2godXJsLHsvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbi8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuLy9cbi8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbi8vID4gb3B0aW9uLlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuLy9cbi8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4vLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4vLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbmNyZWRlbnRpYWxzOidzYW1lLW9yaWdpbid9KS50aGVuKHJlcz0+e2lmKCFyZXMub2spe2lmKGF0dGVtcHRzPjEmJnJlcy5zdGF0dXM+PTUwMCl7cmV0dXJuIGZldGNoUmV0cnkodXJsLGF0dGVtcHRzLTEpO31pZihyZXMuc3RhdHVzPT09NDA0KXtyZXR1cm4gcmVzLmpzb24oKS50aGVuKGRhdGE9PntpZihkYXRhLm5vdEZvdW5kKXtyZXR1cm57bm90Rm91bmQ6U1NHX0RBVEFfTk9UX0ZPVU5EfTt9dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTt9KTt9dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTt9cmV0dXJuIHJlcy5qc29uKCk7fSk7fWZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsaXNTZXJ2ZXJSZW5kZXIpe3JldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLGlzU2VydmVyUmVuZGVyPzM6MSkuY2F0Y2goZXJyPT57Ly8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4vLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuLy8gbG9vcC5cbmlmKCFpc1NlcnZlclJlbmRlcil7KDAsX3JvdXRlTG9hZGVyLm1hcmtBc3NldEVycm9yKShlcnIpO310aHJvdyBlcnI7fSk7fWNsYXNzIFJvdXRlcnsvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi8gLy8gU3RhdGljIERhdGEgQ2FjaGVcbi8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG5jb25zdHJ1Y3RvcihfcGF0aG5hbWUsX3F1ZXJ5LF9hcyx7aW5pdGlhbFByb3BzLHBhZ2VMb2FkZXIsQXBwLHdyYXBBcHAsQ29tcG9uZW50LGVycixzdWJzY3JpcHRpb24saXNGYWxsYmFjayxsb2NhbGUsbG9jYWxlcyxkZWZhdWx0TG9jYWxlLGRvbWFpbkxvY2FsZXMsaXNQcmV2aWV3fSl7dGhpcy5yb3V0ZT12b2lkIDA7dGhpcy5wYXRobmFtZT12b2lkIDA7dGhpcy5xdWVyeT12b2lkIDA7dGhpcy5hc1BhdGg9dm9pZCAwO3RoaXMuYmFzZVBhdGg9dm9pZCAwO3RoaXMuY29tcG9uZW50cz12b2lkIDA7dGhpcy5zZGM9e307dGhpcy5zZHI9e307dGhpcy5zdWI9dm9pZCAwO3RoaXMuY2xjPXZvaWQgMDt0aGlzLnBhZ2VMb2FkZXI9dm9pZCAwO3RoaXMuX2Jwcz12b2lkIDA7dGhpcy5ldmVudHM9dm9pZCAwO3RoaXMuX3dyYXBBcHA9dm9pZCAwO3RoaXMuaXNTc3I9dm9pZCAwO3RoaXMuaXNGYWxsYmFjaz12b2lkIDA7dGhpcy5faW5GbGlnaHRSb3V0ZT12b2lkIDA7dGhpcy5fc2hhbGxvdz12b2lkIDA7dGhpcy5sb2NhbGU9dm9pZCAwO3RoaXMubG9jYWxlcz12b2lkIDA7dGhpcy5kZWZhdWx0TG9jYWxlPXZvaWQgMDt0aGlzLmRvbWFpbkxvY2FsZXM9dm9pZCAwO3RoaXMuaXNSZWFkeT12b2lkIDA7dGhpcy5pc1ByZXZpZXc9dm9pZCAwO3RoaXMuaXNMb2NhbGVEb21haW49dm9pZCAwO3RoaXMuX2lkeD0wO3RoaXMub25Qb3BTdGF0ZT1lPT57Y29uc3Qgc3RhdGU9ZS5zdGF0ZTtpZighc3RhdGUpey8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4vLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4vL1xuLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbi8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbi8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG5jb25zdHtwYXRobmFtZSxxdWVyeX09dGhpczt0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOmFkZEJhc2VQYXRoKHBhdGhuYW1lKSxxdWVyeX0pLCgwLF91dGlscy5nZXRVUkwpKCkpO3JldHVybjt9aWYoIXN0YXRlLl9fTil7cmV0dXJuO31sZXQgZm9yY2VkU2Nyb2xsO2NvbnN0e3VybCxhcyxvcHRpb25zLGlkeH09c3RhdGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTil7aWYobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pe2lmKHRoaXMuX2lkeCE9PWlkeCl7Ly8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG50cnl7c2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK3RoaXMuX2lkeCxKU09OLnN0cmluZ2lmeSh7eDpzZWxmLnBhZ2VYT2Zmc2V0LHk6c2VsZi5wYWdlWU9mZnNldH0pKTt9Y2F0Y2goX3VudXNlZCl7fS8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbnRyeXtjb25zdCB2PXNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJytpZHgpO2ZvcmNlZFNjcm9sbD1KU09OLnBhcnNlKHYpO31jYXRjaChfdW51c2VkMil7Zm9yY2VkU2Nyb2xsPXt4OjAseTowfTt9fX19dGhpcy5faWR4PWlkeDtjb25zdHtwYXRobmFtZX09KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTsvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbi8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuaWYodGhpcy5pc1NzciYmYXM9PT10aGlzLmFzUGF0aCYmcGF0aG5hbWU9PT10aGlzLnBhdGhuYW1lKXtyZXR1cm47fS8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbi8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG5pZih0aGlzLl9icHMmJiF0aGlzLl9icHMoc3RhdGUpKXtyZXR1cm47fXRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLHVybCxhcyxPYmplY3QuYXNzaWduKHt9LG9wdGlvbnMse3NoYWxsb3c6b3B0aW9ucy5zaGFsbG93JiZ0aGlzLl9zaGFsbG93LGxvY2FsZTpvcHRpb25zLmxvY2FsZXx8dGhpcy5kZWZhdWx0TG9jYWxlfSksZm9yY2VkU2Nyb2xsKTt9Oy8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxudGhpcy5yb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkoX3BhdGhuYW1lKTsvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbnRoaXMuY29tcG9uZW50cz17fTsvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4vLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuaWYoX3BhdGhuYW1lIT09Jy9fZXJyb3InKXt0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV09e0NvbXBvbmVudCxpbml0aWFsOnRydWUscHJvcHM6aW5pdGlhbFByb3BzLGVycixfX05fU1NHOmluaXRpYWxQcm9wcyYmaW5pdGlhbFByb3BzLl9fTl9TU0csX19OX1NTUDppbml0aWFsUHJvcHMmJmluaXRpYWxQcm9wcy5fX05fU1NQfTt9dGhpcy5jb21wb25lbnRzWycvX2FwcCddPXtDb21wb25lbnQ6QXBwLHN0eWxlU2hlZXRzOlsvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXX07Ly8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbi8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG50aGlzLmV2ZW50cz1Sb3V0ZXIuZXZlbnRzO3RoaXMucGFnZUxvYWRlcj1wYWdlTG9hZGVyO3RoaXMucGF0aG5hbWU9X3BhdGhuYW1lO3RoaXMucXVlcnk9X3F1ZXJ5Oy8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4vLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuY29uc3QgYXV0b0V4cG9ydER5bmFtaWM9KDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkoX3BhdGhuYW1lKSYmc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnQ7dGhpcy5hc1BhdGg9YXV0b0V4cG9ydER5bmFtaWM/X3BhdGhuYW1lOl9hczt0aGlzLmJhc2VQYXRoPWJhc2VQYXRoO3RoaXMuc3ViPXN1YnNjcmlwdGlvbjt0aGlzLmNsYz1udWxsO3RoaXMuX3dyYXBBcHA9d3JhcEFwcDsvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4vLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxudGhpcy5pc1Nzcj10cnVlO3RoaXMuaXNGYWxsYmFjaz1pc0ZhbGxiYWNrO3RoaXMuaXNSZWFkeT0hIShzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcHx8c2VsZi5fX05FWFRfREFUQV9fLmdpcHx8IWF1dG9FeHBvcnREeW5hbWljJiYhc2VsZi5sb2NhdGlvbi5zZWFyY2gmJiFwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKTt0aGlzLmlzUHJldmlldz0hIWlzUHJldmlldzt0aGlzLmlzTG9jYWxlRG9tYWluPWZhbHNlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe3RoaXMubG9jYWxlPWxvY2FsZTt0aGlzLmxvY2FsZXM9bG9jYWxlczt0aGlzLmRlZmF1bHRMb2NhbGU9ZGVmYXVsdExvY2FsZTt0aGlzLmRvbWFpbkxvY2FsZXM9ZG9tYWluTG9jYWxlczt0aGlzLmlzTG9jYWxlRG9tYWluPSEhZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSk7fWlmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7Ly8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbi8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG5pZihfYXMuc3Vic3RyKDAsMikhPT0nLy8nKXsvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG5jb25zdCBvcHRpb25zPXtsb2NhbGV9O29wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmPV9hcyE9PV9wYXRobmFtZTt0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOmFkZEJhc2VQYXRoKF9wYXRobmFtZSkscXVlcnk6X3F1ZXJ5fSksKDAsX3V0aWxzLmdldFVSTCkoKSxvcHRpb25zKTt9d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJyx0aGlzLm9uUG9wU3RhdGUpOy8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4vLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pe2lmKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKXt3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbj0nbWFudWFsJzt9fX19cmVsb2FkKCl7d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO30vKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL2JhY2soKXt3aW5kb3cuaGlzdG9yeS5iYWNrKCk7fS8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9wdXNoKHVybCxhcyxvcHRpb25zPXt9KXtpZihwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKXsvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2Vcbi8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG5pZihtYW51YWxTY3JvbGxSZXN0b3JhdGlvbil7dHJ5ey8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK3RoaXMuX2lkeCxKU09OLnN0cmluZ2lmeSh7eDpzZWxmLnBhZ2VYT2Zmc2V0LHk6c2VsZi5wYWdlWU9mZnNldH0pKTt9Y2F0Y2goX3VudXNlZDMpe319fTsoe3VybCxhc309cHJlcGFyZVVybEFzKHRoaXMsdXJsLGFzKSk7cmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLHVybCxhcyxvcHRpb25zKTt9LyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL3JlcGxhY2UodXJsLGFzLG9wdGlvbnM9e30pezsoe3VybCxhc309cHJlcGFyZVVybEFzKHRoaXMsdXJsLGFzKSk7cmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLHVybCxhcyxvcHRpb25zKTt9YXN5bmMgY2hhbmdlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyxmb3JjZWRTY3JvbGwpe2lmKCFpc0xvY2FsVVJMKHVybCkpe3dpbmRvdy5sb2NhdGlvbi5ocmVmPXVybDtyZXR1cm4gZmFsc2U7fWNvbnN0IHNob3VsZFJlc29sdmVIcmVmPXVybD09PWFzfHxvcHRpb25zLl9ofHxvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZjsvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbi8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuaWYob3B0aW9ucy5faCl7dGhpcy5pc1JlYWR5PXRydWU7fWxldCBsb2NhbGVDaGFuZ2U9b3B0aW9ucy5sb2NhbGUhPT10aGlzLmxvY2FsZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXt0aGlzLmxvY2FsZT1vcHRpb25zLmxvY2FsZT09PWZhbHNlP3RoaXMuZGVmYXVsdExvY2FsZTpvcHRpb25zLmxvY2FsZXx8dGhpcy5sb2NhbGU7aWYodHlwZW9mIG9wdGlvbnMubG9jYWxlPT09J3VuZGVmaW5lZCcpe29wdGlvbnMubG9jYWxlPXRoaXMubG9jYWxlO31jb25zdCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShoYXNCYXNlUGF0aChhcyk/ZGVsQmFzZVBhdGgoYXMpOmFzKTtjb25zdCBsb2NhbGVQYXRoUmVzdWx0PSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhcnNlZEFzLnBhdGhuYW1lLHRoaXMubG9jYWxlcyk7aWYobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSl7dGhpcy5sb2NhbGU9bG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZTtwYXJzZWRBcy5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSk7YXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7dXJsPWFkZEJhc2VQYXRoKCgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKGhhc0Jhc2VQYXRoKHVybCk/ZGVsQmFzZVBhdGgodXJsKTp1cmwsdGhpcy5sb2NhbGVzKS5wYXRobmFtZSk7fWxldCBkaWROYXZpZ2F0ZT1mYWxzZTsvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbi8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuaWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7dmFyIF90aGlzJGxvY2FsZXM7Ly8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuaWYoISgoX3RoaXMkbG9jYWxlcz10aGlzLmxvY2FsZXMpIT1udWxsJiZfdGhpcyRsb2NhbGVzLmluY2x1ZGVzKHRoaXMubG9jYWxlKSkpe3BhcnNlZEFzLnBhdGhuYW1lPWFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZSk7d2luZG93LmxvY2F0aW9uLmhyZWY9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7Ly8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3Jcbi8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG5kaWROYXZpZ2F0ZT10cnVlO319Y29uc3QgZGV0ZWN0ZWREb21haW49ZGV0ZWN0RG9tYWluTG9jYWxlKHRoaXMuZG9tYWluTG9jYWxlcyx1bmRlZmluZWQsdGhpcy5sb2NhbGUpOy8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG5pZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXsvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuLy8gY29ycmVjdCBkb21haW5cbmlmKCFkaWROYXZpZ2F0ZSYmZGV0ZWN0ZWREb21haW4mJnRoaXMuaXNMb2NhbGVEb21haW4mJnNlbGYubG9jYXRpb24uaG9zdG5hbWUhPT1kZXRlY3RlZERvbWFpbi5kb21haW4pe2NvbnN0IGFzTm9CYXNlUGF0aD1kZWxCYXNlUGF0aChhcyk7d2luZG93LmxvY2F0aW9uLmhyZWY9YGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHA/Jyc6J3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YWRkQmFzZVBhdGgoYCR7dGhpcy5sb2NhbGU9PT1kZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlPycnOmAvJHt0aGlzLmxvY2FsZX1gfSR7YXNOb0Jhc2VQYXRoPT09Jy8nPycnOmFzTm9CYXNlUGF0aH1gfHwnLycpfWA7Ly8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3Jcbi8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG5kaWROYXZpZ2F0ZT10cnVlO319aWYoZGlkTmF2aWdhdGUpe3JldHVybiBuZXcgUHJvbWlzZSgoKT0+e30pO319aWYoIW9wdGlvbnMuX2gpe3RoaXMuaXNTc3I9ZmFsc2U7fS8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbmlmKF91dGlscy5TVCl7cGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTt9Y29uc3R7c2hhbGxvdz1mYWxzZX09b3B0aW9ucztjb25zdCByb3V0ZVByb3BzPXtzaGFsbG93fTtpZih0aGlzLl9pbkZsaWdodFJvdXRlKXt0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLHJvdXRlUHJvcHMpO31hcz1hZGRCYXNlUGF0aChhZGRMb2NhbGUoaGFzQmFzZVBhdGgoYXMpP2RlbEJhc2VQYXRoKGFzKTphcyxvcHRpb25zLmxvY2FsZSx0aGlzLmRlZmF1bHRMb2NhbGUpKTtjb25zdCBjbGVhbmVkQXM9ZGVsTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKT9kZWxCYXNlUGF0aChhcyk6YXMsdGhpcy5sb2NhbGUpO3RoaXMuX2luRmxpZ2h0Um91dGU9YXM7Ly8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2Vcbi8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbi8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbi8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbi8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuaWYoIW9wdGlvbnMuX2gmJnRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpe3RoaXMuYXNQYXRoPWNsZWFuZWRBcztSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsYXMscm91dGVQcm9wcyk7Ly8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbnRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zKTt0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpO3RoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSxudWxsKTtSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsYXMscm91dGVQcm9wcyk7cmV0dXJuIHRydWU7fWxldCBwYXJzZWQ9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTtsZXR7cGF0aG5hbWUscXVlcnl9PXBhcnNlZDsvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4vLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbi8vIHdoZW4gcmV3cml0dGVuIHRvXG5sZXQgcGFnZXMscmV3cml0ZXM7dHJ5e3BhZ2VzPWF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpOyh7X19yZXdyaXRlczpyZXdyaXRlc309YXdhaXQoMCxfcm91dGVMb2FkZXIuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCkoKSk7fWNhdGNoKGVycil7Ly8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4vLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG53aW5kb3cubG9jYXRpb24uaHJlZj1hcztyZXR1cm4gZmFsc2U7fS8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4vLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbi8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbi8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4vLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG5pZighdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpJiYhbG9jYWxlQ2hhbmdlKXttZXRob2Q9J3JlcGxhY2VTdGF0ZSc7fS8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4vLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG5sZXQgcmVzb2x2ZWRBcz1hczsvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4vLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4vLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxucGF0aG5hbWU9cGF0aG5hbWU/KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSk6cGF0aG5hbWU7aWYoc2hvdWxkUmVzb2x2ZUhyZWYmJnBhdGhuYW1lIT09Jy9fZXJyb3InKXs7b3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY9dHJ1ZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTJiZhcy5zdGFydHNXaXRoKCcvJykpe2NvbnN0IHJld3JpdGVzUmVzdWx0PSgwLF9yZXNvbHZlUmV3cml0ZXMuZGVmYXVsdCkoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcyx0aGlzLmxvY2FsZSkpLHBhZ2VzLHJld3JpdGVzLHF1ZXJ5LHA9PnJlc29sdmVEeW5hbWljUm91dGUocCxwYWdlcyksdGhpcy5sb2NhbGVzKTtyZXNvbHZlZEFzPXJld3JpdGVzUmVzdWx0LmFzUGF0aDtpZihyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSYmcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKXsvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4vLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxucGF0aG5hbWU9cmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO3BhcnNlZC5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXRobmFtZSk7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWVsc2V7cGFyc2VkLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUscGFnZXMpO2lmKHBhcnNlZC5wYXRobmFtZSE9PXBhdGhuYW1lKXtwYXRobmFtZT1wYXJzZWQucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPWFkZEJhc2VQYXRoKHBhdGhuYW1lKTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319fWNvbnN0IHJvdXRlPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7aWYoIWlzTG9jYWxVUkwoYXMpKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCtgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgKTt9d2luZG93LmxvY2F0aW9uLmhyZWY9YXM7cmV0dXJuIGZhbHNlO31yZXNvbHZlZEFzPWRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSx0aGlzLmxvY2FsZSk7aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkocm91dGUpKXtjb25zdCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShyZXNvbHZlZEFzKTtjb25zdCBhc1BhdGhuYW1lPXBhcnNlZEFzLnBhdGhuYW1lO2NvbnN0IHJvdXRlUmVnZXg9KDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocm91dGUpO2NvbnN0IHJvdXRlTWF0Y2g9KDAsX3JvdXRlTWF0Y2hlci5nZXRSb3V0ZU1hdGNoZXIpKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO2NvbnN0IHNob3VsZEludGVycG9sYXRlPXJvdXRlPT09YXNQYXRobmFtZTtjb25zdCBpbnRlcnBvbGF0ZWRBcz1zaG91bGRJbnRlcnBvbGF0ZT9pbnRlcnBvbGF0ZUFzKHJvdXRlLGFzUGF0aG5hbWUscXVlcnkpOnt9O2lmKCFyb3V0ZU1hdGNofHxzaG91bGRJbnRlcnBvbGF0ZSYmIWludGVycG9sYXRlZEFzLnJlc3VsdCl7Y29uc3QgbWlzc2luZ1BhcmFtcz1PYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKHBhcmFtPT4hcXVlcnlbcGFyYW1dKTtpZihtaXNzaW5nUGFyYW1zLmxlbmd0aD4wKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc29sZS53YXJuKGAke3Nob3VsZEludGVycG9sYXRlP2BJbnRlcnBvbGF0aW5nIGhyZWZgOmBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGArYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYCk7fXRocm93IG5ldyBFcnJvcigoc2hvdWxkSW50ZXJwb2xhdGU/YFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYDpgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKStgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke3Nob3VsZEludGVycG9sYXRlPydocmVmLWludGVycG9sYXRpb24tZmFpbGVkJzonaW5jb21wYXRpYmxlLWhyZWYtYXMnfWApO319ZWxzZSBpZihzaG91bGRJbnRlcnBvbGF0ZSl7YXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShPYmplY3QuYXNzaWduKHt9LHBhcnNlZEFzLHtwYXRobmFtZTppbnRlcnBvbGF0ZWRBcy5yZXN1bHQscXVlcnk6b21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LGludGVycG9sYXRlZEFzLnBhcmFtcyl9KSk7fWVsc2V7Ly8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbk9iamVjdC5hc3NpZ24ocXVlcnkscm91dGVNYXRjaCk7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLGFzLHJvdXRlUHJvcHMpO3RyeXt2YXIgX3NlbGYkX19ORVhUX0RBVEFfXyRwLF9zZWxmJF9fTkVYVF9EQVRBX18kcDIsX29wdGlvbnMkc2Nyb2xsO2xldCByb3V0ZUluZm89YXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUscGF0aG5hbWUscXVlcnksYXMscmVzb2x2ZWRBcyxyb3V0ZVByb3BzKTtsZXR7ZXJyb3IscHJvcHMsX19OX1NTRyxfX05fU1NQfT1yb3V0ZUluZm87Ly8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG5pZigoX19OX1NTR3x8X19OX1NTUCkmJnByb3BzKXtpZihwcm9wcy5wYWdlUHJvcHMmJnByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Qpe2NvbnN0IGRlc3RpbmF0aW9uPXByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Q7Ly8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbi8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbi8vIGl0J3Mgbm90XG5pZihkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpe2NvbnN0IHBhcnNlZEhyZWY9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoZGVzdGluYXRpb24pO3BhcnNlZEhyZWYucGF0aG5hbWU9cmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWRIcmVmLnBhdGhuYW1lLHBhZ2VzKTtpZihwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSl7Y29uc3R7dXJsOm5ld1VybCxhczpuZXdBc309cHJlcGFyZVVybEFzKHRoaXMsZGVzdGluYXRpb24sZGVzdGluYXRpb24pO3JldHVybiB0aGlzLmNoYW5nZShtZXRob2QsbmV3VXJsLG5ld0FzLG9wdGlvbnMpO319d2luZG93LmxvY2F0aW9uLmhyZWY9ZGVzdGluYXRpb247cmV0dXJuIG5ldyBQcm9taXNlKCgpPT57fSk7fXRoaXMuaXNQcmV2aWV3PSEhcHJvcHMuX19OX1BSRVZJRVc7Ly8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuaWYocHJvcHMubm90Rm91bmQ9PT1TU0dfREFUQV9OT1RfRk9VTkQpe2xldCBub3RGb3VuZFJvdXRlO3RyeXthd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0Jyk7bm90Rm91bmRSb3V0ZT0nLzQwNCc7fWNhdGNoKF8pe25vdEZvdW5kUm91dGU9Jy9fZXJyb3InO31yb3V0ZUluZm89YXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8obm90Rm91bmRSb3V0ZSxub3RGb3VuZFJvdXRlLHF1ZXJ5LGFzLHJlc29sdmVkQXMse3NoYWxsb3c6ZmFsc2V9KTt9fVJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsYXMscm91dGVQcm9wcyk7dGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsdXJsLGFzLG9wdGlvbnMpO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdCBhcHBDb21wPXRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7d2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZD1hcHBDb21wLmdldEluaXRpYWxQcm9wcz09PWFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyYmIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO31pZihvcHRpb25zLl9oJiZwYXRobmFtZT09PScvX2Vycm9yJyYmKChfc2VsZiRfX05FWFRfREFUQV9fJHA9c2VsZi5fX05FWFRfREFUQV9fLnByb3BzKT09bnVsbD92b2lkIDA6KF9zZWxmJF9fTkVYVF9EQVRBX18kcDI9X3NlbGYkX19ORVhUX0RBVEFfXyRwLnBhZ2VQcm9wcyk9PW51bGw/dm9pZCAwOl9zZWxmJF9fTkVYVF9EQVRBX18kcDIuc3RhdHVzQ29kZSk9PT01MDAmJnByb3BzIT1udWxsJiZwcm9wcy5wYWdlUHJvcHMpey8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxucHJvcHMucGFnZVByb3BzLnN0YXR1c0NvZGU9NTAwO30vLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG5jb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlPW9wdGlvbnMuc2hhbGxvdyYmdGhpcy5yb3V0ZT09PXJvdXRlO2NvbnN0IHNob3VsZFNjcm9sbD0oX29wdGlvbnMkc2Nyb2xsPW9wdGlvbnMuc2Nyb2xsKSE9bnVsbD9fb3B0aW9ucyRzY3JvbGw6IWlzVmFsaWRTaGFsbG93Um91dGU7Y29uc3QgcmVzZXRTY3JvbGw9c2hvdWxkU2Nyb2xsP3t4OjAseTowfTpudWxsO2F3YWl0IHRoaXMuc2V0KHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGNsZWFuZWRBcyxyb3V0ZUluZm8sZm9yY2VkU2Nyb2xsIT1udWxsP2ZvcmNlZFNjcm9sbDpyZXNldFNjcm9sbCkuY2F0Y2goZT0+e2lmKGUuY2FuY2VsbGVkKWVycm9yPWVycm9yfHxlO2Vsc2UgdGhyb3cgZTt9KTtpZihlcnJvcil7Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJyxlcnJvcixjbGVhbmVkQXMscm91dGVQcm9wcyk7dGhyb3cgZXJyb3I7fWlmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2lmKHRoaXMubG9jYWxlKXtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZz10aGlzLmxvY2FsZTt9fVJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsYXMscm91dGVQcm9wcyk7cmV0dXJuIHRydWU7fWNhdGNoKGVycil7aWYoZXJyLmNhbmNlbGxlZCl7cmV0dXJuIGZhbHNlO310aHJvdyBlcnI7fX1jaGFuZ2VTdGF0ZShtZXRob2QsdXJsLGFzLG9wdGlvbnM9e30pe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZih0eXBlb2Ygd2luZG93Lmhpc3Rvcnk9PT0ndW5kZWZpbmVkJyl7Y29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKTtyZXR1cm47fWlmKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdPT09J3VuZGVmaW5lZCcpe2NvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYCk7cmV0dXJuO319aWYobWV0aG9kIT09J3B1c2hTdGF0ZSd8fCgwLF91dGlscy5nZXRVUkwpKCkhPT1hcyl7dGhpcy5fc2hhbGxvdz1vcHRpb25zLnNoYWxsb3c7d2luZG93Lmhpc3RvcnlbbWV0aG9kXSh7dXJsLGFzLG9wdGlvbnMsX19OOnRydWUsaWR4OnRoaXMuX2lkeD1tZXRob2QhPT0ncHVzaFN0YXRlJz90aGlzLl9pZHg6dGhpcy5faWR4KzF9LC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4nJyxhcyk7fX1hc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIscGF0aG5hbWUscXVlcnksYXMscm91dGVQcm9wcyxsb2FkRXJyb3JGYWlsKXtpZihlcnIuY2FuY2VsbGVkKXsvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xudGhyb3cgZXJyO31pZigoMCxfcm91dGVMb2FkZXIuaXNBc3NldEVycm9yKShlcnIpfHxsb2FkRXJyb3JGYWlsKXtSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLGVycixhcyxyb3V0ZVByb3BzKTsvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbi8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2Vcbi8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxud2luZG93LmxvY2F0aW9uLmhyZWY9YXM7Ly8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4vLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxudGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpO310cnl7bGV0IENvbXBvbmVudDtsZXQgc3R5bGVTaGVldHM7bGV0IHByb3BzO2lmKHR5cGVvZiBDb21wb25lbnQ9PT0ndW5kZWZpbmVkJ3x8dHlwZW9mIHN0eWxlU2hlZXRzPT09J3VuZGVmaW5lZCcpezsoe3BhZ2U6Q29tcG9uZW50LHN0eWxlU2hlZXRzfT1hd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJykpO31jb25zdCByb3V0ZUluZm89e3Byb3BzLENvbXBvbmVudCxzdHlsZVNoZWV0cyxlcnIsZXJyb3I6ZXJyfTtpZighcm91dGVJbmZvLnByb3BzKXt0cnl7cm91dGVJbmZvLnByb3BzPWF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCx7ZXJyLHBhdGhuYW1lLHF1ZXJ5fSk7fWNhdGNoKGdpcEVycil7Y29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJyxnaXBFcnIpO3JvdXRlSW5mby5wcm9wcz17fTt9fXJldHVybiByb3V0ZUluZm87fWNhdGNoKHJvdXRlSW5mb0Vycil7cmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMsdHJ1ZSk7fX1hc3luYyBnZXRSb3V0ZUluZm8ocm91dGUscGF0aG5hbWUscXVlcnksYXMscmVzb2x2ZWRBcyxyb3V0ZVByb3BzKXt0cnl7Y29uc3QgZXhpc3RpbmdSb3V0ZUluZm89dGhpcy5jb21wb25lbnRzW3JvdXRlXTtpZihyb3V0ZVByb3BzLnNoYWxsb3cmJmV4aXN0aW5nUm91dGVJbmZvJiZ0aGlzLnJvdXRlPT09cm91dGUpe3JldHVybiBleGlzdGluZ1JvdXRlSW5mbzt9Y29uc3QgY2FjaGVkUm91dGVJbmZvPWV4aXN0aW5nUm91dGVJbmZvJiYnaW5pdGlhbCdpbiBleGlzdGluZ1JvdXRlSW5mbz91bmRlZmluZWQ6ZXhpc3RpbmdSb3V0ZUluZm87Y29uc3Qgcm91dGVJbmZvPWNhY2hlZFJvdXRlSW5mbz9jYWNoZWRSb3V0ZUluZm86YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihyZXM9Pih7Q29tcG9uZW50OnJlcy5wYWdlLHN0eWxlU2hlZXRzOnJlcy5zdHlsZVNoZWV0cyxfX05fU1NHOnJlcy5tb2QuX19OX1NTRyxfX05fU1NQOnJlcy5tb2QuX19OX1NTUH0pKTtjb25zdHtDb21wb25lbnQsX19OX1NTRyxfX05fU1NQfT1yb3V0ZUluZm87aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0e2lzVmFsaWRFbGVtZW50VHlwZX09cmVxdWlyZSgncmVhY3QtaXMnKTtpZighaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpe3Rocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgKTt9fWxldCBkYXRhSHJlZjtpZihfX05fU1NHfHxfX05fU1NQKXtkYXRhSHJlZj10aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoKDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh7cGF0aG5hbWUscXVlcnl9KSxyZXNvbHZlZEFzLF9fTl9TU0csdGhpcy5sb2NhbGUpO31jb25zdCBwcm9wcz1hd2FpdCB0aGlzLl9nZXREYXRhKCgpPT5fX05fU1NHP3RoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpOl9fTl9TU1A/dGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZik6dGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG57cGF0aG5hbWUscXVlcnksYXNQYXRoOmFzLGxvY2FsZTp0aGlzLmxvY2FsZSxsb2NhbGVzOnRoaXMubG9jYWxlcyxkZWZhdWx0TG9jYWxlOnRoaXMuZGVmYXVsdExvY2FsZX0pKTtyb3V0ZUluZm8ucHJvcHM9cHJvcHM7dGhpcy5jb21wb25lbnRzW3JvdXRlXT1yb3V0ZUluZm87cmV0dXJuIHJvdXRlSW5mbzt9Y2F0Y2goZXJyKXtyZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIscGF0aG5hbWUscXVlcnksYXMscm91dGVQcm9wcyk7fX1zZXQocm91dGUscGF0aG5hbWUscXVlcnksYXMsZGF0YSxyZXNldFNjcm9sbCl7dGhpcy5pc0ZhbGxiYWNrPWZhbHNlO3RoaXMucm91dGU9cm91dGU7dGhpcy5wYXRobmFtZT1wYXRobmFtZTt0aGlzLnF1ZXJ5PXF1ZXJ5O3RoaXMuYXNQYXRoPWFzO3JldHVybiB0aGlzLm5vdGlmeShkYXRhLHJlc2V0U2Nyb2xsKTt9LyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL2JlZm9yZVBvcFN0YXRlKGNiKXt0aGlzLl9icHM9Y2I7fW9ubHlBSGFzaENoYW5nZShhcyl7aWYoIXRoaXMuYXNQYXRoKXJldHVybiBmYWxzZTtjb25zdFtvbGRVcmxOb0hhc2gsb2xkSGFzaF09dGhpcy5hc1BhdGguc3BsaXQoJyMnKTtjb25zdFtuZXdVcmxOb0hhc2gsbmV3SGFzaF09YXMuc3BsaXQoJyMnKTsvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG5pZihuZXdIYXNoJiZvbGRVcmxOb0hhc2g9PT1uZXdVcmxOb0hhc2gmJm9sZEhhc2g9PT1uZXdIYXNoKXtyZXR1cm4gdHJ1ZTt9Ly8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuaWYob2xkVXJsTm9IYXNoIT09bmV3VXJsTm9IYXNoKXtyZXR1cm4gZmFsc2U7fS8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbi8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG5yZXR1cm4gb2xkSGFzaCE9PW5ld0hhc2g7fXNjcm9sbFRvSGFzaChhcyl7Y29uc3RbLGhhc2hdPWFzLnNwbGl0KCcjJyk7Ly8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlIG9yIGAjdG9wYFxuLy8gVG8gbWlycm9yIGJyb3dzZXJzXG5pZihoYXNoPT09Jyd8fGhhc2g9PT0ndG9wJyl7d2luZG93LnNjcm9sbFRvKDAsMCk7cmV0dXJuO30vLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuY29uc3QgaWRFbD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtpZihpZEVsKXtpZEVsLnNjcm9sbEludG9WaWV3KCk7cmV0dXJuO30vLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbi8vIFRvIG1pcnJvciBicm93c2Vyc1xuY29uc3QgbmFtZUVsPWRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdO2lmKG5hbWVFbCl7bmFtZUVsLnNjcm9sbEludG9WaWV3KCk7fX11cmxJc05ldyhhc1BhdGgpe3JldHVybiB0aGlzLmFzUGF0aCE9PWFzUGF0aDt9LyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9hc3luYyBwcmVmZXRjaCh1cmwsYXNQYXRoPXVybCxvcHRpb25zPXt9KXtsZXQgcGFyc2VkPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHVybCk7bGV0e3BhdGhuYW1lfT1wYXJzZWQ7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7aWYob3B0aW9ucy5sb2NhbGU9PT1mYWxzZSl7cGF0aG5hbWU9KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGF0aG5hbWUsdGhpcy5sb2NhbGVzKS5wYXRobmFtZTtwYXJzZWQucGF0aG5hbWU9cGF0aG5hbWU7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTtsZXQgcGFyc2VkQXM9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoYXNQYXRoKTtjb25zdCBsb2NhbGVQYXRoUmVzdWx0PSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhcnNlZEFzLnBhdGhuYW1lLHRoaXMubG9jYWxlcyk7cGFyc2VkQXMucGF0aG5hbWU9bG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZTtvcHRpb25zLmxvY2FsZT1sb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlfHx0aGlzLmRlZmF1bHRMb2NhbGU7YXNQYXRoPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkQXMpO319Y29uc3QgcGFnZXM9YXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7bGV0IHJlc29sdmVkQXM9YXNQYXRoO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMmJmFzUGF0aC5zdGFydHNXaXRoKCcvJykpe2xldCByZXdyaXRlczsoe19fcmV3cml0ZXM6cmV3cml0ZXN9PWF3YWl0KDAsX3JvdXRlTG9hZGVyLmdldENsaWVudEJ1aWxkTWFuaWZlc3QpKCkpO2NvbnN0IHJld3JpdGVzUmVzdWx0PSgwLF9yZXNvbHZlUmV3cml0ZXMuZGVmYXVsdCkoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCx0aGlzLmxvY2FsZSkpLHBhZ2VzLHJld3JpdGVzLHBhcnNlZC5xdWVyeSxwPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAscGFnZXMpLHRoaXMubG9jYWxlcyk7cmVzb2x2ZWRBcz1kZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSx0aGlzLmxvY2FsZSk7aWYocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UmJnJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZil7Ly8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbnBhdGhuYW1lPXJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtwYXJzZWQucGF0aG5hbWU9cGF0aG5hbWU7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWVsc2V7cGFyc2VkLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLHBhZ2VzKTtpZihwYXJzZWQucGF0aG5hbWUhPT1wYXRobmFtZSl7cGF0aG5hbWU9cGFyc2VkLnBhdGhuYW1lO3BhcnNlZC5wYXRobmFtZT1wYXRobmFtZTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319Y29uc3Qgcm91dGU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKHBhdGhuYW1lKTsvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7cmV0dXJuO31hd2FpdCBQcm9taXNlLmFsbChbdGhpcy5wYWdlTG9hZGVyLl9pc1NzZyhyb3V0ZSkudGhlbihpc1NzZz0+e3JldHVybiBpc1NzZz90aGlzLl9nZXRTdGF0aWNEYXRhKHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZih1cmwscmVzb2x2ZWRBcyx0cnVlLHR5cGVvZiBvcHRpb25zLmxvY2FsZSE9PSd1bmRlZmluZWQnP29wdGlvbnMubG9jYWxlOnRoaXMubG9jYWxlKSk6ZmFsc2U7fSksdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHk/J2xvYWRQYWdlJzoncHJlZmV0Y2gnXShyb3V0ZSldKTt9YXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGUpe2xldCBjYW5jZWxsZWQ9ZmFsc2U7Y29uc3QgY2FuY2VsPXRoaXMuY2xjPSgpPT57Y2FuY2VsbGVkPXRydWU7fTtjb25zdCBjb21wb25lbnRSZXN1bHQ9YXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtpZihjYW5jZWxsZWQpe2NvbnN0IGVycm9yPW5ldyBFcnJvcihgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYCk7ZXJyb3IuY2FuY2VsbGVkPXRydWU7dGhyb3cgZXJyb3I7fWlmKGNhbmNlbD09PXRoaXMuY2xjKXt0aGlzLmNsYz1udWxsO31yZXR1cm4gY29tcG9uZW50UmVzdWx0O31fZ2V0RGF0YShmbil7bGV0IGNhbmNlbGxlZD1mYWxzZTtjb25zdCBjYW5jZWw9KCk9PntjYW5jZWxsZWQ9dHJ1ZTt9O3RoaXMuY2xjPWNhbmNlbDtyZXR1cm4gZm4oKS50aGVuKGRhdGE9PntpZihjYW5jZWw9PT10aGlzLmNsYyl7dGhpcy5jbGM9bnVsbDt9aWYoY2FuY2VsbGVkKXtjb25zdCBlcnI9bmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJyk7ZXJyLmNhbmNlbGxlZD10cnVlO3Rocm93IGVycjt9cmV0dXJuIGRhdGE7fSk7fV9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKXtjb25zdHtocmVmOmNhY2hlS2V5fT1uZXcgVVJMKGRhdGFIcmVmLHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdwcm9kdWN0aW9uJyYmIXRoaXMuaXNQcmV2aWV3JiZ0aGlzLnNkY1tjYWNoZUtleV0pe3JldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKTt9cmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsdGhpcy5pc1NzcikudGhlbihkYXRhPT57dGhpcy5zZGNbY2FjaGVLZXldPWRhdGE7cmV0dXJuIGRhdGE7fSk7fV9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKXtjb25zdHtocmVmOnJlc291cmNlS2V5fT1uZXcgVVJMKGRhdGFIcmVmLHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtpZih0aGlzLnNkcltyZXNvdXJjZUtleV0pe3JldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV07fXJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV09ZmV0Y2hOZXh0RGF0YShkYXRhSHJlZix0aGlzLmlzU3NyKS50aGVuKGRhdGE9PntkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO3JldHVybiBkYXRhO30pLmNhdGNoKGVycj0+e2RlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07dGhyb3cgZXJyO30pO31nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LGN0eCl7Y29uc3R7Q29tcG9uZW50OkFwcH09dGhpcy5jb21wb25lbnRzWycvX2FwcCddO2NvbnN0IEFwcFRyZWU9dGhpcy5fd3JhcEFwcChBcHApO2N0eC5BcHBUcmVlPUFwcFRyZWU7cmV0dXJuKDAsX3V0aWxzLmxvYWRHZXRJbml0aWFsUHJvcHMpKEFwcCx7QXBwVHJlZSxDb21wb25lbnQscm91dGVyOnRoaXMsY3R4fSk7fWFib3J0Q29tcG9uZW50TG9hZChhcyxyb3V0ZVByb3BzKXtpZih0aGlzLmNsYyl7Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJyxidWlsZENhbmNlbGxhdGlvbkVycm9yKCksYXMscm91dGVQcm9wcyk7dGhpcy5jbGMoKTt0aGlzLmNsYz1udWxsO319bm90aWZ5KGRhdGEscmVzZXRTY3JvbGwpe3JldHVybiB0aGlzLnN1YihkYXRhLHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQscmVzZXRTY3JvbGwpO319ZXhwb3J0cy5kZWZhdWx0PVJvdXRlcjtSb3V0ZXIuZXZlbnRzPSgwLF9taXR0LmRlZmF1bHQpKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5mb3JtYXRVcmw9Zm9ybWF0VXJsO3ZhciBxdWVyeXN0cmluZz1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9xdWVyeXN0cmluZ1wiKSk7ZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCl7aWYodHlwZW9mIFdlYWtNYXAhPT1cImZ1bmN0aW9uXCIpcmV0dXJuIG51bGw7dmFyIGNhY2hlPW5ldyBXZWFrTWFwKCk7X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlPWZ1bmN0aW9uKCl7cmV0dXJuIGNhY2hlO307cmV0dXJuIGNhY2hlO31mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmope2lmKG9iaiYmb2JqLl9fZXNNb2R1bGUpe3JldHVybiBvYmo7fWlmKG9iaj09PW51bGx8fHR5cGVvZiBvYmohPT1cIm9iamVjdFwiJiZ0eXBlb2Ygb2JqIT09XCJmdW5jdGlvblwiKXtyZXR1cm57ZGVmYXVsdDpvYmp9O312YXIgY2FjaGU9X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7aWYoY2FjaGUmJmNhY2hlLmhhcyhvYmopKXtyZXR1cm4gY2FjaGUuZ2V0KG9iaik7fXZhciBuZXdPYmo9e307dmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvcj1PYmplY3QuZGVmaW5lUHJvcGVydHkmJk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7Zm9yKHZhciBrZXkgaW4gb2JqKXtpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLGtleSkpe3ZhciBkZXNjPWhhc1Byb3BlcnR5RGVzY3JpcHRvcj9PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaixrZXkpOm51bGw7aWYoZGVzYyYmKGRlc2MuZ2V0fHxkZXNjLnNldCkpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosa2V5LGRlc2MpO31lbHNle25ld09ialtrZXldPW9ialtrZXldO319fW5ld09iai5kZWZhdWx0PW9iajtpZihjYWNoZSl7Y2FjaGUuc2V0KG9iaixuZXdPYmopO31yZXR1cm4gbmV3T2JqO30vLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuY29uc3Qgc2xhc2hlZFByb3RvY29scz0vaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS87ZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iail7bGV0e2F1dGgsaG9zdG5hbWV9PXVybE9iajtsZXQgcHJvdG9jb2w9dXJsT2JqLnByb3RvY29sfHwnJztsZXQgcGF0aG5hbWU9dXJsT2JqLnBhdGhuYW1lfHwnJztsZXQgaGFzaD11cmxPYmouaGFzaHx8Jyc7bGV0IHF1ZXJ5PXVybE9iai5xdWVyeXx8Jyc7bGV0IGhvc3Q9ZmFsc2U7YXV0aD1hdXRoP2VuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwnOicpKydAJzonJztpZih1cmxPYmouaG9zdCl7aG9zdD1hdXRoK3VybE9iai5ob3N0O31lbHNlIGlmKGhvc3RuYW1lKXtob3N0PWF1dGgrKH5ob3N0bmFtZS5pbmRleE9mKCc6Jyk/YFske2hvc3RuYW1lfV1gOmhvc3RuYW1lKTtpZih1cmxPYmoucG9ydCl7aG9zdCs9JzonK3VybE9iai5wb3J0O319aWYocXVlcnkmJnR5cGVvZiBxdWVyeT09PSdvYmplY3QnKXtxdWVyeT1TdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSkpO31sZXQgc2VhcmNoPXVybE9iai5zZWFyY2h8fHF1ZXJ5JiZgPyR7cXVlcnl9YHx8Jyc7aWYocHJvdG9jb2wmJnByb3RvY29sLnN1YnN0cigtMSkhPT0nOicpcHJvdG9jb2wrPSc6JztpZih1cmxPYmouc2xhc2hlc3x8KCFwcm90b2NvbHx8c2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkmJmhvc3QhPT1mYWxzZSl7aG9zdD0nLy8nKyhob3N0fHwnJyk7aWYocGF0aG5hbWUmJnBhdGhuYW1lWzBdIT09Jy8nKXBhdGhuYW1lPScvJytwYXRobmFtZTt9ZWxzZSBpZighaG9zdCl7aG9zdD0nJzt9aWYoaGFzaCYmaGFzaFswXSE9PScjJyloYXNoPScjJytoYXNoO2lmKHNlYXJjaCYmc2VhcmNoWzBdIT09Jz8nKXNlYXJjaD0nPycrc2VhcmNoO3BhdGhuYW1lPXBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZyxlbmNvZGVVUklDb21wb25lbnQpO3NlYXJjaD1zZWFyY2gucmVwbGFjZSgnIycsJyUyMycpO3JldHVybmAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvcm1hdC11cmwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5pc0R5bmFtaWNSb3V0ZT1pc0R5bmFtaWNSb3V0ZTsvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFPS9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvO2Z1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlKXtyZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pcy1keW5hbWljLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMucGFyc2VSZWxhdGl2ZVVybD1wYXJzZVJlbGF0aXZlVXJsO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uLy4uL3V0aWxzXCIpO3ZhciBfcXVlcnlzdHJpbmc9cmVxdWlyZShcIi4vcXVlcnlzdHJpbmdcIik7LyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmwsYmFzZSl7Y29uc3QgZ2xvYmFsQmFzZT1uZXcgVVJMKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJz8naHR0cDovL24nOigwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKSk7Y29uc3QgcmVzb2x2ZWRCYXNlPWJhc2U/bmV3IFVSTChiYXNlLGdsb2JhbEJhc2UpOmdsb2JhbEJhc2U7Y29uc3R7cGF0aG5hbWUsc2VhcmNoUGFyYW1zLHNlYXJjaCxoYXNoLGhyZWYsb3JpZ2lufT1uZXcgVVJMKHVybCxyZXNvbHZlZEJhc2UpO2lmKG9yaWdpbiE9PWdsb2JhbEJhc2Uub3JpZ2luKXt0aHJvdyBuZXcgRXJyb3IoYGludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwsIHJvdXRlciByZWNlaXZlZCAke3VybH1gKTt9cmV0dXJue3BhdGhuYW1lLHF1ZXJ5OigwLF9xdWVyeXN0cmluZy5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KShzZWFyY2hQYXJhbXMpLHNlYXJjaCxoYXNoLGhyZWY6aHJlZi5zbGljZShnbG9iYWxCYXNlLm9yaWdpbi5sZW5ndGgpfTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXJzZS1yZWxhdGl2ZS11cmwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5PXNlYXJjaFBhcmFtc1RvVXJsUXVlcnk7ZXhwb3J0cy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zPXVybFF1ZXJ5VG9TZWFyY2hQYXJhbXM7ZXhwb3J0cy5hc3NpZ249YXNzaWduO2Z1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKXtjb25zdCBxdWVyeT17fTtzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsa2V5KT0+e2lmKHR5cGVvZiBxdWVyeVtrZXldPT09J3VuZGVmaW5lZCcpe3F1ZXJ5W2tleV09dmFsdWU7fWVsc2UgaWYoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSl7O3F1ZXJ5W2tleV0ucHVzaCh2YWx1ZSk7fWVsc2V7cXVlcnlba2V5XT1bcXVlcnlba2V5XSx2YWx1ZV07fX0pO3JldHVybiBxdWVyeTt9ZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbSl7aWYodHlwZW9mIHBhcmFtPT09J3N0cmluZyd8fHR5cGVvZiBwYXJhbT09PSdudW1iZXInJiYhaXNOYU4ocGFyYW0pfHx0eXBlb2YgcGFyYW09PT0nYm9vbGVhbicpe3JldHVybiBTdHJpbmcocGFyYW0pO31lbHNle3JldHVybicnO319ZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyh1cmxRdWVyeSl7Y29uc3QgcmVzdWx0PW5ldyBVUkxTZWFyY2hQYXJhbXMoKTtPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSx2YWx1ZV0pPT57aWYoQXJyYXkuaXNBcnJheSh2YWx1ZSkpe3ZhbHVlLmZvckVhY2goaXRlbT0+cmVzdWx0LmFwcGVuZChrZXksc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpO31lbHNle3Jlc3VsdC5zZXQoa2V5LHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKTt9fSk7cmV0dXJuIHJlc3VsdDt9ZnVuY3Rpb24gYXNzaWduKHRhcmdldCwuLi5zZWFyY2hQYXJhbXNMaXN0KXtzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goc2VhcmNoUGFyYW1zPT57QXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKGtleT0+dGFyZ2V0LmRlbGV0ZShrZXkpKTtzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsa2V5KT0+dGFyZ2V0LmFwcGVuZChrZXksdmFsdWUpKTt9KTtyZXR1cm4gdGFyZ2V0O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXF1ZXJ5c3RyaW5nLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZ2V0Um91dGVNYXRjaGVyPWdldFJvdXRlTWF0Y2hlcjtmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCl7Y29uc3R7cmUsZ3JvdXBzfT1yb3V0ZVJlZ2V4O3JldHVybiBwYXRobmFtZT0+e2NvbnN0IHJvdXRlTWF0Y2g9cmUuZXhlYyhwYXRobmFtZSk7aWYoIXJvdXRlTWF0Y2gpe3JldHVybiBmYWxzZTt9Y29uc3QgZGVjb2RlPXBhcmFtPT57dHJ5e3JldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pO31jYXRjaChfKXtjb25zdCBlcnI9bmV3IEVycm9yKCdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJyk7ZXJyLmNvZGU9J0RFQ09ERV9GQUlMRUQnO3Rocm93IGVycjt9fTtjb25zdCBwYXJhbXM9e307T2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKHNsdWdOYW1lPT57Y29uc3QgZz1ncm91cHNbc2x1Z05hbWVdO2NvbnN0IG09cm91dGVNYXRjaFtnLnBvc107aWYobSE9PXVuZGVmaW5lZCl7cGFyYW1zW3NsdWdOYW1lXT1+bS5pbmRleE9mKCcvJyk/bS5zcGxpdCgnLycpLm1hcChlbnRyeT0+ZGVjb2RlKGVudHJ5KSk6Zy5yZXBlYXQ/W2RlY29kZShtKV06ZGVjb2RlKG0pO319KTtyZXR1cm4gcGFyYW1zO307fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtbWF0Y2hlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmdldFJvdXRlUmVnZXg9Z2V0Um91dGVSZWdleDsvLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyKXtyZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywnXFxcXCQmJyk7fWZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtKXtjb25zdCBvcHRpb25hbD1wYXJhbS5zdGFydHNXaXRoKCdbJykmJnBhcmFtLmVuZHNXaXRoKCddJyk7aWYob3B0aW9uYWwpe3BhcmFtPXBhcmFtLnNsaWNlKDEsLTEpO31jb25zdCByZXBlYXQ9cGFyYW0uc3RhcnRzV2l0aCgnLi4uJyk7aWYocmVwZWF0KXtwYXJhbT1wYXJhbS5zbGljZSgzKTt9cmV0dXJue2tleTpwYXJhbSxyZXBlYXQsb3B0aW9uYWx9O31mdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZSl7Y29uc3Qgc2VnbWVudHM9KG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywnJyl8fCcvJykuc2xpY2UoMSkuc3BsaXQoJy8nKTtjb25zdCBncm91cHM9e307bGV0IGdyb3VwSW5kZXg9MTtjb25zdCBwYXJhbWV0ZXJpemVkUm91dGU9c2VnbWVudHMubWFwKHNlZ21lbnQ9PntpZihzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSYmc2VnbWVudC5lbmRzV2l0aCgnXScpKXtjb25zdHtrZXksb3B0aW9uYWwscmVwZWF0fT1wYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsLTEpKTtncm91cHNba2V5XT17cG9zOmdyb3VwSW5kZXgrKyxyZXBlYXQsb3B0aW9uYWx9O3JldHVybiByZXBlYXQ/b3B0aW9uYWw/Jyg/Oi8oLis/KSk/JzonLyguKz8pJzonLyhbXi9dKz8pJzt9ZWxzZXtyZXR1cm5gLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YDt9fSkuam9pbignJyk7Ly8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4vLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuaWYodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnKXtsZXQgcm91dGVLZXlDaGFyQ29kZT05NztsZXQgcm91dGVLZXlDaGFyTGVuZ3RoPTE7Ly8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuY29uc3QgZ2V0U2FmZVJvdXRlS2V5PSgpPT57bGV0IHJvdXRlS2V5PScnO2ZvcihsZXQgaT0wO2k8cm91dGVLZXlDaGFyTGVuZ3RoO2krKyl7cm91dGVLZXkrPVN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSk7cm91dGVLZXlDaGFyQ29kZSsrO2lmKHJvdXRlS2V5Q2hhckNvZGU+MTIyKXtyb3V0ZUtleUNoYXJMZW5ndGgrKztyb3V0ZUtleUNoYXJDb2RlPTk3O319cmV0dXJuIHJvdXRlS2V5O307Y29uc3Qgcm91dGVLZXlzPXt9O2xldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZT1zZWdtZW50cy5tYXAoc2VnbWVudD0+e2lmKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpJiZzZWdtZW50LmVuZHNXaXRoKCddJykpe2NvbnN0e2tleSxvcHRpb25hbCxyZXBlYXR9PXBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwtMSkpOy8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbi8vIHRoZSBuYW1lZCByZWdleFxubGV0IGNsZWFuZWRLZXk9a2V5LnJlcGxhY2UoL1xcVy9nLCcnKTtsZXQgaW52YWxpZEtleT1mYWxzZTsvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbi8vIHNhZmUga2V5XG5pZihjbGVhbmVkS2V5Lmxlbmd0aD09PTB8fGNsZWFuZWRLZXkubGVuZ3RoPjMwKXtpbnZhbGlkS2V5PXRydWU7fWlmKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLDEpKSkpe2ludmFsaWRLZXk9dHJ1ZTt9aWYoaW52YWxpZEtleSl7Y2xlYW5lZEtleT1nZXRTYWZlUm91dGVLZXkoKTt9cm91dGVLZXlzW2NsZWFuZWRLZXldPWtleTtyZXR1cm4gcmVwZWF0P29wdGlvbmFsP2AoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gOmAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYDpgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWA7fWVsc2V7cmV0dXJuYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWA7fX0pLmpvaW4oJycpO3JldHVybntyZTpuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLGdyb3Vwcyxyb3V0ZUtleXMsbmFtZWRSZWdleDpgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGB9O31yZXR1cm57cmU6bmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxncm91cHN9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLXJlZ2V4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZXhlY09uY2U9ZXhlY09uY2U7ZXhwb3J0cy5nZXRMb2NhdGlvbk9yaWdpbj1nZXRMb2NhdGlvbk9yaWdpbjtleHBvcnRzLmdldFVSTD1nZXRVUkw7ZXhwb3J0cy5nZXREaXNwbGF5TmFtZT1nZXREaXNwbGF5TmFtZTtleHBvcnRzLmlzUmVzU2VudD1pc1Jlc1NlbnQ7ZXhwb3J0cy5sb2FkR2V0SW5pdGlhbFByb3BzPWxvYWRHZXRJbml0aWFsUHJvcHM7ZXhwb3J0cy5mb3JtYXRXaXRoVmFsaWRhdGlvbj1mb3JtYXRXaXRoVmFsaWRhdGlvbjtleHBvcnRzLlNUPWV4cG9ydHMuU1A9ZXhwb3J0cy51cmxPYmplY3RLZXlzPXZvaWQgMDt2YXIgX2Zvcm1hdFVybD1yZXF1aXJlKFwiLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybFwiKTsvKipcbiAqIFV0aWxzXG4gKi9mdW5jdGlvbiBleGVjT25jZShmbil7bGV0IHVzZWQ9ZmFsc2U7bGV0IHJlc3VsdDtyZXR1cm4oLi4uYXJncyk9PntpZighdXNlZCl7dXNlZD10cnVlO3Jlc3VsdD1mbiguLi5hcmdzKTt9cmV0dXJuIHJlc3VsdDt9O31mdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpe2NvbnN0e3Byb3RvY29sLGhvc3RuYW1lLHBvcnR9PXdpbmRvdy5sb2NhdGlvbjtyZXR1cm5gJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0Pyc6Jytwb3J0OicnfWA7fWZ1bmN0aW9uIGdldFVSTCgpe2NvbnN0e2hyZWZ9PXdpbmRvdy5sb2NhdGlvbjtjb25zdCBvcmlnaW49Z2V0TG9jYXRpb25PcmlnaW4oKTtyZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCk7fWZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKENvbXBvbmVudCl7cmV0dXJuIHR5cGVvZiBDb21wb25lbnQ9PT0nc3RyaW5nJz9Db21wb25lbnQ6Q29tcG9uZW50LmRpc3BsYXlOYW1lfHxDb21wb25lbnQubmFtZXx8J1Vua25vd24nO31mdW5jdGlvbiBpc1Jlc1NlbnQocmVzKXtyZXR1cm4gcmVzLmZpbmlzaGVkfHxyZXMuaGVhZGVyc1NlbnQ7fWFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHMoQXBwLGN0eCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3ZhciBfQXBwJHByb3RvdHlwZTtpZigoX0FwcCRwcm90b3R5cGU9QXBwLnByb3RvdHlwZSkhPW51bGwmJl9BcHAkcHJvdG90eXBlLmdldEluaXRpYWxQcm9wcyl7Y29uc3QgbWVzc2FnZT1gXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYDt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fX0vLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG5jb25zdCByZXM9Y3R4LnJlc3x8Y3R4LmN0eCYmY3R4LmN0eC5yZXM7aWYoIUFwcC5nZXRJbml0aWFsUHJvcHMpe2lmKGN0eC5jdHgmJmN0eC5Db21wb25lbnQpey8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbnJldHVybntwYWdlUHJvcHM6YXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LGN0eC5jdHgpfTt9cmV0dXJue307fWNvbnN0IHByb3BzPWF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KTtpZihyZXMmJmlzUmVzU2VudChyZXMpKXtyZXR1cm4gcHJvcHM7fWlmKCFwcm9wcyl7Y29uc3QgbWVzc2FnZT1gXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYDt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fWlmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZihPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoPT09MCYmIWN0eC5jdHgpe2NvbnNvbGUud2FybihgJHtnZXREaXNwbGF5TmFtZShBcHApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2ApO319cmV0dXJuIHByb3BzO31jb25zdCB1cmxPYmplY3RLZXlzPVsnYXV0aCcsJ2hhc2gnLCdob3N0JywnaG9zdG5hbWUnLCdocmVmJywncGF0aCcsJ3BhdGhuYW1lJywncG9ydCcsJ3Byb3RvY29sJywncXVlcnknLCdzZWFyY2gnLCdzbGFzaGVzJ107ZXhwb3J0cy51cmxPYmplY3RLZXlzPXVybE9iamVjdEtleXM7ZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe2lmKHVybCE9PW51bGwmJnR5cGVvZiB1cmw9PT0nb2JqZWN0Jyl7T2JqZWN0LmtleXModXJsKS5mb3JFYWNoKGtleT0+e2lmKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpPT09LTEpe2NvbnNvbGUud2FybihgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gKTt9fSk7fX1yZXR1cm4oMCxfZm9ybWF0VXJsLmZvcm1hdFVybCkodXJsKTt9Y29uc3QgU1A9dHlwZW9mIHBlcmZvcm1hbmNlIT09J3VuZGVmaW5lZCc7ZXhwb3J0cy5TUD1TUDtjb25zdCBTVD1TUCYmdHlwZW9mIHBlcmZvcm1hbmNlLm1hcms9PT0nZnVuY3Rpb24nJiZ0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZT09PSdmdW5jdGlvbic7ZXhwb3J0cy5TVD1TVDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWxzLmpzLm1hcCIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7QkFTRV9VUkx9IGZyb20gJ3NyYy9jb25zdGFudHMnO1xyXG4vLyBpbXBvcnQge2hhbmRsZUVycm9yRnVuY30gZnJvbSAnLi4vQXBwJztcclxuLy8gaW1wb3J0IHtMT0NBTF9TVE9SQUdFX0RBVEFfTkFNRX0gZnJvbSAnLi4vY29uc3RhbnRzJ1xyXG5cclxuY2xhc3MgQVBJIHtcclxuICAgIGNvbnN0cnVjdG9yKGxvY2FsU3RvcmFnZURhdGEgPSAnJykge1xyXG4gICAgICAgIGNvbnN0IGJhc2VVcmxGcm9tTFMgPSBCQVNFX1VSTDtcclxuICAgICAgICB0aGlzLnVybCA9IGJhc2VVcmxGcm9tTFMgfHwgcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0JBU0VfVVJMIHx8ICcnXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy51cmwpXHJcbiAgICAgICAgLy8gdGhpcy5sb2NhbFN0b3JhZ2VEYXRhID0gbG9jYWxTdG9yYWdlRGF0YVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVN1Y2Nlc3MgPSAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zdCByZXMgPSByZXNwb25zZS5kYXRhXHJcblxyXG4gICAgICAgIC8vIGlmIChyZXMuc3RhdHVzQ29kZSAmJiByZXMuc3RhdHVzQ29kZSAhPT0gMjAwKSB7XHJcbiAgICAgICAgLy8gICAgIGlmIChyZXMuc3RhdHVzQ29kZSAhPT0gNDAxKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBoYW5kbGVFcnJvckZ1bmMocmVzPy5zdGF0dXNDb2RlLCByZXM/Lm1lc3NhZ2UpXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUVycm9yID0gKGVycm9yKSA9PiB7XHJcbiAgICAgICAgLy8gaGFuZGxlRXJyb3JGdW5jKG51bGwsIGVycm9yKVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcilcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUgPSBhc3luYyAoaGVhZGVycykgPT4ge1xyXG4gICAgICAgIC8vIGNvbnN0IGxvY2FsU3RvcmFnZURhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMubG9jYWxTdG9yYWdlRGF0YSkpXHJcbiAgICAgICAgLy8gbGV0IHRva2VuID0gbG9jYWxTdG9yYWdlRGF0YT8uYWNjZXNzVG9rZW5cclxuXHJcbiAgICAgICAgLy8gY29uc3QgaGVhZGVyQXV0aCA9IHRva2VuICYmIHtBdXRob3JpemF0aW9uOiB0b2tlbiA/IGBCZWFyZXIgJHt0b2tlbn1gIDogJyd9XHJcbiAgICAgICAgY29uc3Qgc2VydmljZSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgLi4uaGVhZGVycyxcclxuICAgICAgICAgICAgICAgIC8vIC4uLmhlYWRlckF1dGhcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIHNlcnZpY2UuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZSh0aGlzLmhhbmRsZVN1Y2Nlc3MsIHRoaXMuaGFuZGxlRXJyb3IpXHJcbiAgICAgICAgc2VydmljZS5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UocmVxdWVzdCA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdTdGFydGluZyBSZXF1ZXN0JywgcmVxdWVzdClcclxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3RcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBzZXJ2aWNlLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnUmVzcG9uc2U6JywgcmVzcG9uc2UpXHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiBzZXJ2aWNlXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0ID0gYXN5bmMgKHBhdGggPSAnJywgaGVhZGVycykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNlcnZpY2UgPSBhd2FpdCB0aGlzLmNyZWF0ZShoZWFkZXJzKVxyXG5cclxuICAgICAgICByZXR1cm4gc2VydmljZS5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiBgJHt0aGlzLnVybH0ke3BhdGh9YCxcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmRhdGEpXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnIpKVxyXG4gICAgfVxyXG5cclxuICAgIHBvc3QgPSBhc3luYyAocGF0aCA9ICcnLCBkYXRhID0ge30sIGhlYWRlcnMpID0+IHtcclxuICAgICAgICBjb25zdCBzZXJ2aWNlID0gYXdhaXQgdGhpcy5jcmVhdGUoaGVhZGVycylcclxuXHJcbiAgICAgICAgcmV0dXJuIHNlcnZpY2UucmVxdWVzdCh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICB1cmw6IGAke3RoaXMudXJsfSR7cGF0aH1gLFxyXG4gICAgICAgICAgICBkYXRhXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5kYXRhKVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHRoaXMuaGFuZGxlRXJyb3IoZXJyKSlcclxuICAgIH1cclxuXHJcbiAgICBwdXQgPSBhc3luYyAocGF0aCA9ICcnLCBkYXRhID0ge30sIGhlYWRlcnMpID0+IHtcclxuICAgICAgICBjb25zdCBzZXJ2aWNlID0gYXdhaXQgdGhpcy5jcmVhdGUoaGVhZGVycylcclxuXHJcbiAgICAgICAgcmV0dXJuIHNlcnZpY2UucmVxdWVzdCh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICAgIHVybDogYCR7dGhpcy51cmx9JHtwYXRofWAsXHJcbiAgICAgICAgICAgIGRhdGFcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmRhdGEpXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnIpKVxyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZSA9IGFzeW5jIChwYXRoID0gJycsIGhlYWRlcnMpID0+IHtcclxuICAgICAgICBjb25zdCBzZXJ2aWNlID0gYXdhaXQgdGhpcy5jcmVhdGUoaGVhZGVycylcclxuXHJcbiAgICAgICAgcmV0dXJuIHNlcnZpY2UucmVxdWVzdCh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgICAgIHVybDogYCR7dGhpcy51cmx9JHtwYXRofWAsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5kYXRhKVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHRoaXMuaGFuZGxlRXJyb3IoZXJyKSlcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgQVBJKClcclxuIiwiaW1wb3J0IEFQSSBmcm9tICcuL0FQSVNlcnZpY2UnXHJcblxyXG5jbGFzcyBQcm9kdWN0c0FQSSB7XHJcbiAgICBnZXRQcm9kdWN0cyA9ICgpID0+IEFQSS5nZXQoJ2RhdGEnKTtcclxuICAgIGdldFByb2R1Y3QgPSAoaWQpID0+IEFQSS5nZXQoYGRhdGEvJHtpZH1gKVxyXG4gICAgLy8gYXV0aCA9ICh1c2VybmFtZSwgcGFzc3dvcmQpID0+IEFQSS5wb3N0KCcvYXBpL2F1dGgvdG9rZW4vJywge3VzZXJuYW1lLCBwYXNzd29yZCwgYXBpOiAnb3BlcmF0b3IudXAtbGluZSd9KVxyXG4gICAgLy8gY2hlY2tUb2tlbiA9IChwYXlsb2FkKSA9PiBBUEkucG9zdCgnL2FwaS9hdXRoL0NoZWNrVG9rZW5MaWZlVGltZScsIHBheWxvYWQpXHJcbiAgICAvLyByZWZyZXNoVG9rZW4gPSAoKSA9PiBBUEkuZ2V0KCcvYXBpL2F1dGgvcmVmcmVzaFRva2VuJylcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFByb2R1Y3RzQVBJKCk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENvbGxhcHNpYmxlIGZyb20gXCJyZWFjdC1jb2xsYXBzaWJsZVwiO1xyXG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xyXG5pbXBvcnQgcyBmcm9tIFwiLi9BY2NvcmRpb24ubW9kdWxlLnNjc3NcIjtcclxuXHJcbmNvbnN0IEFjY29yZGlvbiA9ICh7IHRpdGxlLCBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KHMudGFiKX0+XHJcbiAgICAgICAgIDxDb2xsYXBzaWJsZVxyXG4gICAgICAgICAgICB0cmlnZ2VyQ2xhc3NOYW1lPXtjbHN4KHMudHJpZ2dlcil9XHJcbiAgICAgICAgICAgIHRyaWdnZXJPcGVuZWRDbGFzc05hbWU9e2Nsc3gocy50cmlnZ2VyLCBzLnRyaWdnZXJfb3Blbil9XHJcbiAgICAgICAgICAgIHRyaWdnZXJUYWdOYW1lPXtcImgzXCJ9XHJcbiAgICAgICAgICAgIGNvbnRlbnRJbm5lckNsYXNzTmFtZT17Y2xzeChzLmNvbnRlbnQpfVxyXG4gICAgICAgICAgICB0cmlnZ2VyPXt0aXRsZX1cclxuICAgICAgICAgICAgdHJhbnNpdGlvblRpbWU9ezIwMH1cclxuICAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgIDwvQ29sbGFwc2libGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWNjb3JkaW9uO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgcyBmcm9tIFwiLi9CYWNrQnV0dG9uLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQmFja0J1dHRvbiA9ICgpID0+IHtcclxuICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzLmJ1dHRvbn0gb25DbGljaz17KCkgPT4gcm91dGVyLmJhY2soKX0+XHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgd2lkdGg9XCIxMVwiXHJcbiAgICAgICAgICAgICAgIGhlaWdodD1cIjEyXCJcclxuICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxMSAxMlwiXHJcbiAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgZD1cIk0wLjQ2OTY3IDUuNDY5NjdDMC4xNzY3NzcgNS43NjI1NiAwLjE3Njc3NyA2LjIzNzQ0IDAuNDY5NjcgNi41MzAzM0w1LjI0MjY0IDExLjMwMzNDNS41MzU1MyAxMS41OTYyIDYuMDEwNDEgMTEuNTk2MiA2LjMwMzMgMTEuMzAzM0M2LjU5NjE5IDExLjAxMDQgNi41OTYxOSAxMC41MzU1IDYuMzAzMyAxMC4yNDI2TDIuMDYwNjYgNkw2LjMwMzMgMS43NTczNkM2LjU5NjE5IDEuNDY0NDcgNi41OTYxOSAwLjk4OTU5MyA2LjMwMzMgMC42OTY3QzYuMDEwNDEgMC40MDM4MDYgNS41MzU1MyAwLjQwMzgwNiA1LjI0MjY0IDAuNjk2N0wwLjQ2OTY3IDUuNDY5NjdaTTExIDUuMjVMMSA1LjI1TDEgNi43NUwxMSA2Ljc1TDExIDUuMjVaXCJcclxuICAgICAgICAgICAgICAgICAgZmlsbD1cIiMxODQyNDBcIlxyXG4gICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzIGZyb20gXCIuL0Zvb3Rlci5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgZyBmcm9tIFwic3JjL3N0eWxlcy9NYWluLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB7IExvZ28gfSBmcm9tIFwiQGNvbXBvbmVudHMvU1ZHL0hlYWRlckxvZ29TVkdcIjtcclxuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcbiAgIHJldHVybiAoXHJcbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtjbHN4KHMuZm9vdGVyKX0+XHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KGcud3JhcHBlcil9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChzLmNvbnRhaW5lcil9PlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChzLmJsb2NrKX0+XHJcbiAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPXtjbHN4KHMubWVudSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtjbHN4KHMubGluayl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPtCc0LDQs9Cw0LfQuNC9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtjbHN4KHMubGluayl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPtCU0L7RgdGC0LDQstC60LA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2Nsc3gocy5saW5rKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+0J4g0L3QsNGBPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtjbHN4KHMubGluayl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPtCf0YDQvtC00YPQutGG0LjRjzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17Y2xzeChzLmxpbmspfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj7QoNC10YbQtdC/0YLRizwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86XCIgY2xhc3NOYW1lPXtjbHN4KHMuY29udGFjdCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICDQndCw0L/QuNGB0LDRgtGMINC90LDQvFxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChzLmJsb2NrKX0+XHJcbiAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPXtjbHN4KHMubWVudSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtjbHN4KHMubGluayl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPtCi0L7Rh9C60Lgg0L/RgNC+0LTQsNC2PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtjbHN4KHMubGluayl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPtCa0L7QvdGC0LDQutGC0Ys8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e2Nsc3gocy5saW5rLCBzLnNvY2lhbCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPkluc3RhZ3JhbTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17Y2xzeChzLmxpbmssIHMuc29jaWFsKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+RmFjZWJvb2s8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChzLmluZm8pfT5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3gocy5hZGRyZXNzKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINCh0LzQvtC70LXQvdGB0LrQsNGPINC+0LHQu9Cw0YHRgtGMLCDQmtCw0YDQtNGL0LzQvtCy0YHQutC40Lkg0YDQsNC50L7QvSwg0YHQtdC70L4g0JrQsNC80LXQvdC60LAg0J7QntCeXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwi0JrRgNCw0YHQvdCw0Y8g0LPQvtGA0LrQsFwiLCDQntCT0KDQnSAxMTM2NzMzMDA4NzYzLCDQmNCd0J0gNjcyMjA0MTAzOVxyXG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3gocy5jb250YWN0cyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwidGVsOlwiIGNsYXNzTmFtZT17Y2xzeChzLmNvbnRhY3QpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgOCAoODAwKSAyNTAtNTgtMjRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOlwiIGNsYXNzTmFtZT17Y2xzeChzLmNvbnRhY3QpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FsZXNAa29pY28ucnVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vYXNhcC1hZy5ydVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChzLmFzYXApfVxyXG4gICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI1MVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA1MSAyMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgb3BhY2l0eT1cIjAuNTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0wLjU2OTQ5NiAxOC40OTYyVjE5Ljk0MzZIMFYxNi4yNDYzSDEuNTkyODFDMi4wNjU0MSAxNi4yNDYzIDIuNDM1MTkgMTYuMzQ5NiAyLjcwMjE0IDE2LjU1NjFDMi45NzEwNyAxNi43NjI3IDMuMTA1NTMgMTcuMDM2MSAzLjEwNTUzIDE3LjM3NjNDMy4xMDU1MyAxNy43MzUyIDIuOTc0MDQgMTguMDEyIDIuNzExMDQgMTguMjA2N0MyLjQ1MDAyIDE4LjM5OTcgMi4wNzUzIDE4LjQ5NjIgMS41ODY4OCAxOC40OTYySDAuNTY5NDk2Wk0wLjU2OTQ5NiAxOC4wOTc1SDEuNTkyODFDMS44OTczMyAxOC4wOTc1IDIuMTMwNjcgMTguMDM2NiAyLjI5MjgyIDE3LjkxNDdDMi40NTQ5NiAxNy43OTExIDIuNTM2MDQgMTcuNjEzMyAyLjUzNjA0IDE3LjM4MTRDMi41MzYwNCAxNy4xNjEzIDIuNDU0OTYgMTYuOTg1MyAyLjI5MjgyIDE2Ljg1MzJDMi4xMzA2NyAxNi43MjEyIDEuOTA4MjEgMTYuNjUyNiAxLjYyNTQ0IDE2LjY0NzVIMC41Njk0OTZWMTguMDk3NVpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI0ZBRUVFMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNNS42OTIgMTkuOTQzNkM1LjY2MDM2IDE5Ljg4OTUgNS42MzQ2NSAxOS43OTMgNS42MTQ4OCAxOS42NTQxQzUuMzU5NzkgMTkuODgxIDUuMDU1MjcgMTkuOTk0NCA0LjcwMTMxIDE5Ljk5NDRDNC4zODQ5MiAxOS45OTQ0IDQuMTI0ODkgMTkuOTE4MiAzLjkyMTIyIDE5Ljc2NTlDMy43MTk1MiAxOS42MTE4IDMuNjE4NjcgMTkuNDE3MSAzLjYxODY3IDE5LjE4MThDMy42MTg2NyAxOC44OTU3IDMuNzQ1MjMgMTguNjczOSAzLjk5ODM0IDE4LjUxNjVDNC4yNTM0MyAxOC4zNTc0IDQuNjExMzQgMTguMjc3OCA1LjA3MjA4IDE4LjI3NzhINS42MDU5OFYxOC4wNjJDNS42MDU5OCAxNy44OTc3IDUuNTQ4NjMgMTcuNzY3NCA1LjQzMzk0IDE3LjY3MDlDNS4zMTkyNSAxNy41NzI3IDUuMTUwMTggMTcuNTIzNiA0LjkyNjc0IDE3LjUyMzZDNC43MzA5NyAxNy41MjM2IDQuNTY2ODUgMTcuNTY1OSA0LjQzNDM2IDE3LjY1MDZDNC4zMDE4NyAxNy43MzUyIDQuMjM1NjMgMTcuODM3NyA0LjIzNTYzIDE3Ljk1NzhIMy42ODM5M0MzLjY4MzkzIDE3LjgyMDcgMy43NDAyOSAxNy42ODg3IDMuODUzIDE3LjU2MTdDMy45Njc2OSAxNy40MzMgNC4xMjE5MyAxNy4zMzE1IDQuMzE1NzEgMTcuMjU3QzQuNTExNDggMTcuMTgyNSA0LjcyNjAzIDE3LjE0NTMgNC45NTkzNiAxNy4xNDUzQzUuMzI5MTQgMTcuMTQ1MyA1LjYxODgzIDE3LjIyNDggNS44Mjg0NCAxNy4zODRDNi4wMzgwNSAxNy41NDE0IDYuMTQ2OCAxNy43NTg5IDYuMTU0NzEgMTguMDM2NlYxOS4zMDEyQzYuMTU0NzEgMTkuNTUzNCA2LjE5MjI4IDE5Ljc1NCA2LjI2NzQzIDE5LjkwM1YxOS45NDM2SDUuNjkyWk00Ljc4MTQgMTkuNTg1NkM0Ljk1MzQzIDE5LjU4NTYgNS4xMTY1NyAxOS41NDc1IDUuMjcwODEgMTkuNDcxM0M1LjQyNTA1IDE5LjM5NTEgNS41MzY3NyAxOS4yOTYxIDUuNjA1OTggMTkuMTc0MlYxOC42MTA1SDUuMTc1ODlDNC41MDM1NyAxOC42MTA1IDQuMTY3NDEgMTguNzc4OSA0LjE2NzQxIDE5LjExNThDNC4xNjc0MSAxOS4yNjMxIDQuMjI0NzUgMTkuMzc4MiA0LjMzOTQ0IDE5LjQ2MTFDNC40NTQxMyAxOS41NDQxIDQuNjAxNDUgMTkuNTg1NiA0Ljc4MTQgMTkuNTg1NlpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI0ZBRUVFMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNOC43Nzk3NCAxNy45NDc3QzguNzc5NzQgMTcuODE5IDguNzIyMzkgMTcuNzE3NSA4LjYwNzcgMTcuNjQzQzguNDkzMDEgMTcuNTY2OCA4LjMzNTggMTcuNTI4NyA4LjEzNjA5IDE3LjUyODdDNy45NDIzIDE3LjUyODcgNy43ODAxNSAxNy41NzE5IDcuNjQ5NjQgMTcuNjU4MkM3LjUyMTExIDE3Ljc0NDUgNy40NTY4NCAxNy44NDYxIDcuNDU2ODQgMTcuOTYyOUg2LjkxMTA4QzYuOTExMDggMTcuNzI0MiA3LjAyNzc0IDE3LjUyODcgNy4yNjEwOCAxNy4zNzYzQzcuNDk0NDEgMTcuMjI0IDcuNzg2MDggMTcuMTQ3OCA4LjEzNjA5IDE3LjE0NzhDOC41MTE4IDE3LjE0NzggOC44MDQ0NSAxNy4yMTcyIDkuMDE0MDYgMTcuMzU2QzkuMjIzNjcgMTcuNDkzMSA5LjMyODQ3IDE3LjY4OTUgOS4zMjg0NyAxNy45NDUxQzkuMzI4NDcgMTguMDY4NyA5LjI4NDk3IDE4LjE4MjIgOS4xOTc5NiAxOC4yODU0QzkuMTEwOTUgMTguMzg4NyA4Ljk4NzM2IDE4LjQ3MDggOC44MjcxOSAxOC41MzE3QzkuMjAwOTIgMTguNjQwMSA5LjM4Nzc5IDE4Ljg1MzQgOS4zODc3OSAxOS4xNzE3QzkuMzg3NzkgMTkuNDIzOSA5LjI3NDA5IDE5LjYyMzcgOS4wNDY2OSAxOS43NzA5QzguODE5MjggMTkuOTE4MiA4LjUxNTc1IDE5Ljk5MTkgOC4xMzYwOSAxOS45OTE5QzcuNzY2MzEgMTkuOTkxOSA3LjQ2MDggMTkuOTE0OCA3LjIxOTU1IDE5Ljc2MDhDNi45ODAyOSAxOS42MDUgNi44NjA2NSAxOS4zOTUxIDYuODYwNjUgMTkuMTMxSDcuNDA2NDJDNy40MDY0MiAxOS4yNjQ4IDcuNDc1NjMgMTkuMzc5OSA3LjYxNDA1IDE5LjQ3NjRDNy43NTQ0NCAxOS41NzEyIDcuOTI4NDYgMTkuNjE4NiA4LjEzNjA5IDE5LjYxODZDOC4zNDU2OSAxOS42MTg2IDguNTE0NzYgMTkuNTc3MSA4LjY0MzI5IDE5LjQ5NDJDOC43NzE4MyAxOS40MTEyIDguODM2MDkgMTkuMzAzNyA4LjgzNjA5IDE5LjE3MTdDOC44MzYwOSAxOS4wMTc2IDguNzgxNzEgMTguOTA3NiA4LjY3Mjk1IDE4Ljg0MTVDOC41NjYxNyAxOC43NzM4IDguMzk5MDggMTguNzQgOC4xNzE2OCAxOC43NEg3LjYyMjk1VjE4LjM0MzhIOC4yMTkxNEM4LjU5Mjg3IDE4LjMzNTQgOC43Nzk3NCAxOC4yMDMzIDguNzc5NzQgMTcuOTQ3N1pcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI0ZBRUVFMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTIuODEwNyAxOC42MDAzQzEyLjgxMDcgMTkuMDE4NSAxMi42OTkgMTkuMzU1MyAxMi40NzU1IDE5LjYxMUMxMi4yNTIxIDE5Ljg2NjYgMTEuOTQ5NSAxOS45OTQ0IDExLjU2NzkgMTkuOTk0NEMxMS4xNzgzIDE5Ljk5NDQgMTAuODcxOCAxOS44ODg2IDEwLjY0ODQgMTkuNjc3VjIxSDEwLjA5OTdWMTcuMTk2SDEwLjYwMDlMMTAuNjI3NiAxNy41MDA4QzEwLjg1MTEgMTcuMjYzOCAxMS4xNjE1IDE3LjE0NTMgMTEuNTU5IDE3LjE0NTNDMTEuOTQ0NiAxNy4xNDUzIDEyLjI0OTEgMTcuMjY5NyAxMi40NzI2IDE3LjUxODVDMTIuNjk4IDE3Ljc2NzQgMTIuODEwNyAxOC4xMTM2IDEyLjgxMDcgMTguNTU3MVYxOC42MDAzWk0xMi4yNjIgMTguNTQ3QzEyLjI2MiAxOC4yMzcyIDEyLjE4NDggMTcuOTkyNiAxMi4wMzA2IDE3LjgxMzFDMTEuODc2NCAxNy42MzM3IDExLjY2NDggMTcuNTQzOSAxMS4zOTU5IDE3LjU0MzlDMTEuMDYzNyAxNy41NDM5IDEwLjgxNDUgMTcuNjcwMSAxMC42NDg0IDE3LjkyMjNWMTkuMjM1MUMxMC44MTI1IDE5LjQ4NTcgMTEuMDYzNyAxOS42MTEgMTEuNDAxOCAxOS42MTFDMTEuNjY0OCAxOS42MTEgMTEuODczNCAxOS41MjIxIDEyLjAyNzYgMTkuMzQ0M0MxMi4xODM5IDE5LjE2NDkgMTIuMjYyIDE4Ljg5OTEgMTIuMjYyIDE4LjU0N1pcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI0ZBRUVFMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTUuNDkyMSAxOS45NDM2QzE1LjQ2MDQgMTkuODg5NSAxNS40MzQ3IDE5Ljc5MyAxNS40MTUgMTkuNjU0MUMxNS4xNTk5IDE5Ljg4MSAxNC44NTU0IDE5Ljk5NDQgMTQuNTAxNCAxOS45OTQ0QzE0LjE4NSAxOS45OTQ0IDEzLjkyNSAxOS45MTgyIDEzLjcyMTMgMTkuNzY1OUMxMy41MTk2IDE5LjYxMTggMTMuNDE4OCAxOS40MTcxIDEzLjQxODggMTkuMTgxOEMxMy40MTg4IDE4Ljg5NTcgMTMuNTQ1MyAxOC42NzM5IDEzLjc5ODQgMTguNTE2NUMxNC4wNTM1IDE4LjM1NzQgMTQuNDExNCAxOC4yNzc4IDE0Ljg3MjIgMTguMjc3OEgxNS40MDYxVjE4LjA2MkMxNS40MDYxIDE3Ljg5NzcgMTUuMzQ4NyAxNy43Njc0IDE1LjIzNCAxNy42NzA5QzE1LjExOTMgMTcuNTcyNyAxNC45NTAzIDE3LjUyMzYgMTQuNzI2OCAxNy41MjM2QzE0LjUzMTEgMTcuNTIzNiAxNC4zNjY5IDE3LjU2NTkgMTQuMjM0NCAxNy42NTA2QzE0LjEwMiAxNy43MzUyIDE0LjAzNTcgMTcuODM3NyAxNC4wMzU3IDE3Ljk1NzhIMTMuNDg0QzEzLjQ4NCAxNy44MjA3IDEzLjU0MDQgMTcuNjg4NyAxMy42NTMxIDE3LjU2MTdDMTMuNzY3OCAxNy40MzMgMTMuOTIyIDE3LjMzMTUgMTQuMTE1OCAxNy4yNTdDMTQuMzExNiAxNy4xODI1IDE0LjUyNjEgMTcuMTQ1MyAxNC43NTk0IDE3LjE0NTNDMTUuMTI5MiAxNy4xNDUzIDE1LjQxODkgMTcuMjI0OCAxNS42Mjg1IDE3LjM4NEMxNS44MzgxIDE3LjU0MTQgMTUuOTQ2OSAxNy43NTg5IDE1Ljk1NDggMTguMDM2NlYxOS4zMDEyQzE1Ljk1NDggMTkuNTUzNCAxNS45OTI0IDE5Ljc1NCAxNi4wNjc1IDE5LjkwM1YxOS45NDM2SDE1LjQ5MjFaTTE0LjU4MTUgMTkuNTg1NkMxNC43NTM1IDE5LjU4NTYgMTQuOTE2NyAxOS41NDc1IDE1LjA3MDkgMTkuNDcxM0MxNS4yMjUxIDE5LjM5NTEgMTUuMzM2OSAxOS4yOTYxIDE1LjQwNjEgMTkuMTc0MlYxOC42MTA1SDE0Ljk3NkMxNC4zMDM3IDE4LjYxMDUgMTMuOTY3NSAxOC43Nzg5IDEzLjk2NzUgMTkuMTE1OEMxMy45Njc1IDE5LjI2MzEgMTQuMDI0OCAxOS4zNzgyIDE0LjEzOTUgMTkuNDYxMUMxNC4yNTQyIDE5LjU0NDEgMTQuNDAxNSAxOS41ODU2IDE0LjU4MTUgMTkuNTg1NlpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI0ZBRUVFMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTguMjIzOSAxNy4zNTM1QzE4LjYyNzMgMTcuMzUzNSAxOC45NDk2IDE3LjQ2OTQgMTkuMTkwOCAxNy43MDE0QzE5LjQzNDEgMTcuOTMxNiAxOS41NTU3IDE4LjIzNTUgMTkuNTU1NyAxOC42MTNWMTguNjU2MkMxOS41NTU3IDE4LjkxNTIgMTkuNDk3MyAxOS4xNDcxIDE5LjM4MDcgMTkuMzUyQzE5LjI2NCAxOS41NTUxIDE5LjA5NTkgMTkuNzEzNCAxOC44NzY0IDE5LjgyNjhDMTguNjU4OSAxOS45Mzg1IDE4LjQwNzggMTkuOTk0NCAxOC4xMjMgMTkuOTk0NEMxNy42OTIgMTkuOTk0NCAxNy4zNDQ5IDE5Ljg3MTcgMTcuMDgxOSAxOS42MjYyQzE2LjgxODkgMTkuMzc5IDE2LjY4NzQgMTkuMDQ4MSAxNi42ODc0IDE4LjYzMzNWMTguNDA0OEMxNi42ODc0IDE3LjgyNzUgMTYuODEyIDE3LjM2ODcgMTcuMDYxMiAxNy4wMjg0QzE3LjMxMjMgMTYuNjg4MiAxNy42ODIxIDE2LjQ4MDggMTguMTcwNSAxNi40MDYzQzE4LjQ0NzMgMTYuMzY0IDE4LjYzNDIgMTYuMzEyMyAxOC43MzExIDE2LjI1MTRDMTguODI4IDE2LjE5MDUgMTguODc2NCAxNi4xMDY3IDE4Ljg3NjQgMTZIMTkuMzI3M0MxOS4zMjczIDE2LjIxMTYgMTkuMjcwOSAxNi4zNzY3IDE5LjE1ODIgMTYuNDk1MkMxOS4wNDc1IDE2LjYxMzcgMTguODY5NSAxNi42OTc1IDE4LjYyNDMgMTYuNzQ2NkwxOC4yMTUgMTYuODI1M0MxNy44ODg3IDE2Ljg5MTMgMTcuNjQzNSAxNy4wMDMgMTcuNDc5NCAxNy4xNjA1QzE3LjMxNzIgMTcuMzE2MiAxNy4yMTE0IDE3LjUyNDUgMTcuMTYyIDE3Ljc4NTJDMTcuNDUyNyAxNy40OTc0IDE3LjgwNjYgMTcuMzUzNSAxOC4yMjM5IDE3LjM1MzVaTTE4LjExNzEgMTcuNzM5NUMxNy44NDgyIDE3LjczOTUgMTcuNjM0NiAxNy44MTczIDE3LjQ3NjQgMTcuOTczMUMxNy4zMTgyIDE4LjEyNzEgMTcuMjM5MSAxOC4zNDEzIDE3LjIzOTEgMTguNjE1NVYxOC42NTYyQzE3LjIzOTEgMTguOTUwNyAxNy4zMTgyIDE5LjE4NDQgMTcuNDc2NCAxOS4zNTdDMTcuNjM2NiAxOS41MjggMTcuODUyMSAxOS42MTM1IDE4LjEyMyAxOS42MTM1QzE4LjM5NTkgMTkuNjEzNSAxOC42MTE1IDE5LjUyNzIgMTguNzY5NiAxOS4zNTQ1QzE4LjkyNzggMTkuMTgxOCAxOS4wMDY5IDE4LjkyOTYgMTkuMDA2OSAxOC41OTc4QzE5LjAwNjkgMTguMzM4OCAxOC45MjY5IDE4LjEzMTQgMTguNzY2NyAxNy45NzU2QzE4LjYwODUgMTcuODE4MiAxOC4zOTIgMTcuNzM5NSAxOC4xMTcxIDE3LjczOTVaXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNGQUVFRTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTIwLjAyNzMgMTguNTQ0NEMyMC4wMjczIDE4LjI3NTMgMjAuMDg4NiAxOC4wMzMyIDIwLjIxMTIgMTcuODE4MkMyMC4zMzU4IDE3LjYwMzIgMjAuNTA3OCAxNy40MzczIDIwLjcyNzMgMTcuMzIwNUMyMC45NDg4IDE3LjIwMzcgMjEuMjAwOSAxNy4xNDUzIDIxLjQ4MzcgMTcuMTQ1M0MyMS45MjA3IDE3LjE0NTMgMjIuMjczNiAxNy4yNzQ4IDIyLjU0MjYgMTcuNTMzOEMyMi44MTM1IDE3Ljc5MjggMjIuOTQ4OSAxOC4xMzczIDIyLjk0ODkgMTguNTY3M1YxOC42MDAzQzIyLjk0ODkgMTguODY3OCAyMi44ODg2IDE5LjEwODIgMjIuNzY4IDE5LjMyMTVDMjIuNjQ5MyAxOS41MzMxIDIyLjQ3ODMgMTkuNjk4MiAyMi4yNTQ4IDE5LjgxNjdDMjIuMDMzNCAxOS45MzUyIDIxLjc3ODMgMTkuOTk0NCAyMS40ODk2IDE5Ljk5NDRDMjEuMDU0NiAxOS45OTQ0IDIwLjcwMTYgMTkuODY0OSAyMC40MzA3IDE5LjYwNTlDMjAuMTYxOCAxOS4zNDY5IDIwLjAyNzMgMTkuMDA0MSAyMC4wMjczIDE4LjU3NzVWMTguNTQ0NFpNMjAuNTc5IDE4LjYwMDNDMjAuNTc5IDE4LjkwNSAyMC42NjExIDE5LjE0OTcgMjAuODI1MiAxOS4zMzQyQzIwLjk5MTMgMTkuNTE4NyAyMS4yMTI3IDE5LjYxMSAyMS40ODk2IDE5LjYxMUMyMS43Njg0IDE5LjYxMSAyMS45ODk5IDE5LjUxNzkgMjIuMTU0IDE5LjMzMTZDMjIuMzE4MSAxOS4xNDM3IDIyLjQwMDIgMTguODgxMyAyMi40MDAyIDE4LjU0NDRDMjIuNDAwMiAxOC4yNDMxIDIyLjMxNjEgMTcuOTk5MyAyMi4xNDgxIDE3LjgxMzFDMjEuOTgyIDE3LjYyNTIgMjEuNzYwNSAxNy41MzEyIDIxLjQ4MzcgMTcuNTMxMkMyMS4yMTI3IDE3LjUzMTIgMjAuOTk0MiAxNy42MjM1IDIwLjgyODEgMTcuODA4QzIwLjY2MiAxNy45OTI2IDIwLjU3OSAxOC4yNTY2IDIwLjU3OSAxOC42MDAzWlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjRkFFRUUyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0yNS45NTY2IDE3LjU3NjlIMjQuODc5OVYxOS45NDM2SDI0LjMzMTFWMTcuNTc2OUgyMy4yNzUyVjE3LjE5NkgyNS45NTY2VjE3LjU3NjlaXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNGQUVFRTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTI3LjQ5MDEgMTguNzczSDI3LjA4OTZWMTkuOTQzNkgyNi41Mzc5VjE3LjE5NkgyNy4wODk2VjE4LjM1OTFIMjcuNDQ4NUwyOC41MjgyIDE3LjE5NkgyOS4xOTI2TDI3LjkyMzEgMTguNTE2NUwyOS4yOTk0IDE5Ljk0MzZIMjguNjAyNEwyNy40OTAxIDE4Ljc3M1pcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI0ZBRUVFMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMzEuNzUyNCAxOS45NDM2QzMxLjcyMDcgMTkuODg5NSAzMS42OTUgMTkuNzkzIDMxLjY3NTMgMTkuNjU0MUMzMS40MjAyIDE5Ljg4MSAzMS4xMTU3IDE5Ljk5NDQgMzAuNzYxNyAxOS45OTQ0QzMwLjQ0NTMgMTkuOTk0NCAzMC4xODUzIDE5LjkxODIgMjkuOTgxNiAxOS43NjU5QzI5Ljc3OTkgMTkuNjExOCAyOS42NzkxIDE5LjQxNzEgMjkuNjc5MSAxOS4xODE4QzI5LjY3OTEgMTguODk1NyAyOS44MDU2IDE4LjY3MzkgMzAuMDU4NyAxOC41MTY1QzMwLjMxMzggMTguMzU3NCAzMC42NzE3IDE4LjI3NzggMzEuMTMyNSAxOC4yNzc4SDMxLjY2NjRWMTguMDYyQzMxLjY2NjQgMTcuODk3NyAzMS42MDkgMTcuNzY3NCAzMS40OTQzIDE3LjY3MDlDMzEuMzc5NiAxNy41NzI3IDMxLjIxMDYgMTcuNTIzNiAzMC45ODcxIDE3LjUyMzZDMzAuNzkxNCAxNy41MjM2IDMwLjYyNzIgMTcuNTY1OSAzMC40OTQ3IDE3LjY1MDZDMzAuMzYyMyAxNy43MzUyIDMwLjI5NiAxNy44Mzc3IDMwLjI5NiAxNy45NTc4SDI5Ljc0NDNDMjkuNzQ0MyAxNy44MjA3IDI5LjgwMDcgMTcuNjg4NyAyOS45MTM0IDE3LjU2MTdDMzAuMDI4MSAxNy40MzMgMzAuMTgyMyAxNy4zMzE1IDMwLjM3NjEgMTcuMjU3QzMwLjU3MTkgMTcuMTgyNSAzMC43ODY0IDE3LjE0NTMgMzEuMDE5OCAxNy4xNDUzQzMxLjM4OTUgMTcuMTQ1MyAzMS42NzkyIDE3LjIyNDggMzEuODg4OCAxNy4zODRDMzIuMDk4NCAxNy41NDE0IDMyLjIwNzIgMTcuNzU4OSAzMi4yMTUxIDE4LjAzNjZWMTkuMzAxMkMzMi4yMTUxIDE5LjU1MzQgMzIuMjUyNyAxOS43NTQgMzIuMzI3OCAxOS45MDNWMTkuOTQzNkgzMS43NTI0Wk0zMC44NDE4IDE5LjU4NTZDMzEuMDEzOCAxOS41ODU2IDMxLjE3NyAxOS41NDc1IDMxLjMzMTIgMTkuNDcxM0MzMS40ODU0IDE5LjM5NTEgMzEuNTk3MiAxOS4yOTYxIDMxLjY2NjQgMTkuMTc0MlYxOC42MTA1SDMxLjIzNjNDMzAuNTY0IDE4LjYxMDUgMzAuMjI3OCAxOC43Nzg5IDMwLjIyNzggMTkuMTE1OEMzMC4yMjc4IDE5LjI2MzEgMzAuMjg1MSAxOS4zNzgyIDMwLjM5OTggMTkuNDYxMUMzMC41MTQ1IDE5LjU0NDEgMzAuNjYxOCAxOS41ODU2IDMwLjg0MTggMTkuNTg1NlpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI0ZBRUVFMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMzUuODY5NCAxOS42MTFDMzYuMDY1MSAxOS42MTEgMzYuMjM2MiAxOS41NjAyIDM2LjM4MjUgMTkuNDU4NkMzNi41Mjg4IDE5LjM1NyAzNi42MDk5IDE5LjIzMDEgMzYuNjI1NyAxOS4wNzc3SDM3LjE0NDhDMzcuMTM0OSAxOS4yMzUxIDM3LjA3MTYgMTkuMzg1IDM2Ljk1NSAxOS41MjcyQzM2LjgzODMgMTkuNjY5NCAzNi42ODIxIDE5Ljc4MjggMzYuNDg2MyAxOS44Njc0QzM2LjI5MjUgMTkuOTUyMSAzNi4wODY5IDE5Ljk5NDQgMzUuODY5NCAxOS45OTQ0QzM1LjQzMjQgMTkuOTk0NCAzNS4wODQzIDE5Ljg3IDM0LjgyNTMgMTkuNjIxMUMzNC41NjgyIDE5LjM3MDYgMzQuNDM5NyAxOS4wMjg2IDM0LjQzOTcgMTguNTk1MlYxOC41MTY1QzM0LjQzOTcgMTguMjQ5IDM0LjQ5NyAxOC4wMTEyIDM0LjYxMTcgMTcuODAyOUMzNC43MjY0IDE3LjU5NDcgMzQuODkwNSAxNy40MzMgMzUuMTA0MSAxNy4zMTc5QzM1LjMxOTYgMTcuMjAyOCAzNS41NzM3IDE3LjE0NTMgMzUuODY2NCAxNy4xNDUzQzM2LjIyNjMgMTcuMTQ1MyAzNi41MjQ5IDE3LjIzNzUgMzYuNzYyMiAxNy40MjJDMzcuMDAxNCAxNy42MDY2IDM3LjEyOSAxNy44NDYxIDM3LjE0NDggMTguMTQwN0gzNi42MjU3QzM2LjYwOTkgMTcuOTYyOSAzNi41MzA4IDE3LjgxNzMgMzYuMzg4NCAxNy43MDM5QzM2LjI0OCAxNy41ODg4IDM2LjA3NCAxNy41MzEyIDM1Ljg2NjQgMTcuNTMxMkMzNS41ODc2IDE3LjUzMTIgMzUuMzcxMSAxNy42MTc2IDM1LjIxNjggMTcuNzkwMkMzNS4wNjQ2IDE3Ljk2MTIgMzQuOTg4NCAxOC4yMDkyIDM0Ljk4ODQgMTguNTM0M1YxOC42MjMyQzM0Ljk4ODQgMTguOTM5NyAzNS4wNjQ2IDE5LjE4MzUgMzUuMjE2OCAxOS4zNTQ1QzM1LjM2OTEgMTkuNTI1NSAzNS41ODY2IDE5LjYxMSAzNS44Njk0IDE5LjYxMVpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI0ZBRUVFMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMzkuNzQzMSAxOS45NDM2QzM5LjcxMTUgMTkuODg5NSAzOS42ODU4IDE5Ljc5MyAzOS42NjYgMTkuNjU0MUMzOS40MTA5IDE5Ljg4MSAzOS4xMDY0IDE5Ljk5NDQgMzguNzUyNCAxOS45OTQ0QzM4LjQzNjEgMTkuOTk0NCAzOC4xNzYgMTkuOTE4MiAzNy45NzI0IDE5Ljc2NTlDMzcuNzcwNyAxOS42MTE4IDM3LjY2OTggMTkuNDE3MSAzNy42Njk4IDE5LjE4MThDMzcuNjY5OCAxOC44OTU3IDM3Ljc5NjQgMTguNjczOSAzOC4wNDk1IDE4LjUxNjVDMzguMzA0NiAxOC4zNTc0IDM4LjY2MjUgMTguMjc3OCAzOS4xMjMyIDE4LjI3NzhIMzkuNjU3MVYxOC4wNjJDMzkuNjU3MSAxNy44OTc3IDM5LjU5OTggMTcuNzY3NCAzOS40ODUxIDE3LjY3MDlDMzkuMzcwNCAxNy41NzI3IDM5LjIwMTMgMTcuNTIzNiAzOC45Nzc5IDE3LjUyMzZDMzguNzgyMSAxNy41MjM2IDM4LjYxOCAxNy41NjU5IDM4LjQ4NTUgMTcuNjUwNkMzOC4zNTMgMTcuNzM1MiAzOC4yODY4IDE3LjgzNzcgMzguMjg2OCAxNy45NTc4SDM3LjczNTFDMzcuNzM1MSAxNy44MjA3IDM3Ljc5MTQgMTcuNjg4NyAzNy45MDQxIDE3LjU2MTdDMzguMDE4OCAxNy40MzMgMzguMTczMSAxNy4zMzE1IDM4LjM2NjggMTcuMjU3QzM4LjU2MjYgMTcuMTgyNSAzOC43NzcyIDE3LjE0NTMgMzkuMDEwNSAxNy4xNDUzQzM5LjM4MDMgMTcuMTQ1MyAzOS42NyAxNy4yMjQ4IDM5Ljg3OTYgMTcuMzg0QzQwLjA4OTIgMTcuNTQxNCA0MC4xOTc5IDE3Ljc1ODkgNDAuMjA1OCAxOC4wMzY2VjE5LjMwMTJDNDAuMjA1OCAxOS41NTM0IDQwLjI0MzQgMTkuNzU0IDQwLjMxODYgMTkuOTAzVjE5Ljk0MzZIMzkuNzQzMVpNMzguODMyNSAxOS41ODU2QzM5LjAwNDYgMTkuNTg1NiAzOS4xNjc3IDE5LjU0NzUgMzkuMzIxOSAxOS40NzEzQzM5LjQ3NjIgMTkuMzk1MSAzOS41ODc5IDE5LjI5NjEgMzkuNjU3MSAxOS4xNzQyVjE4LjYxMDVIMzkuMjI3QzM4LjU1NDcgMTguNjEwNSAzOC4yMTg1IDE4Ljc3ODkgMzguMjE4NSAxOS4xMTU4QzM4LjIxODUgMTkuMjYzMSAzOC4yNzU5IDE5LjM3ODIgMzguMzkwNiAxOS40NjExQzM4LjUwNTMgMTkuNTQ0MSAzOC42NTI2IDE5LjU4NTYgMzguODMyNSAxOS41ODU2WlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjRkFFRUUyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk00My4xNDIzIDE3LjE5Nkg0My42OTFWMTkuOTQzNkg0My4xNDIzVjE3Ljk0MDFMNDEuNjYyMiAxOS45NDM2SDQxLjExMzVWMTcuMTk2SDQxLjY2MjJWMTkuMjAyMUw0My4xNDIzIDE3LjE5NlpNNDMuMjkwNiAxNi4xOTU1QzQzLjI5MDYgMTYuNDAwNCA0My4yMDg2IDE2LjU2NTQgNDMuMDQ0NCAxNi42OTA3QzQyLjg4MjMgMTYuODE0MyA0Mi42Njg3IDE2Ljg3NjEgNDIuNDAzNyAxNi44NzYxQzQyLjEzODggMTYuODc2MSA0MS45MjQyIDE2LjgxMzQgNDEuNzYwMSAxNi42ODgyQzQxLjU5NiAxNi41NjI5IDQxLjUxMzkgMTYuMzk4NyA0MS41MTM5IDE2LjE5NTVINDEuOTYxOEM0MS45NjE4IDE2LjMxNCA0MS45OTk0IDE2LjQwNzEgNDIuMDc0NSAxNi40NzQ5QzQyLjE0OTcgMTYuNTQwOSA0Mi4yNTk0IDE2LjU3MzkgNDIuNDAzNyAxNi41NzM5QzQyLjU0MjIgMTYuNTczOSA0Mi42NDk5IDE2LjU0MDkgNDIuNzI3MSAxNi40NzQ5QzQyLjgwNjIgMTYuNDA4OCA0Mi44NDU3IDE2LjMxNTcgNDIuODQ1NyAxNi4xOTU1SDQzLjI5MDZaXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNGQUVFRTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTQ2Ljk1NjggMTcuNTc2OUg0NS44ODAxVjE5Ljk0MzZINDUuMzMxM1YxNy41NzY5SDQ0LjI3NTRWMTcuMTk2SDQ2Ljk1NjhWMTcuNTc2OVpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI0ZBRUVFMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNNDkuNDI0NiAxOS45NDM2QzQ5LjM5MjkgMTkuODg5NSA0OS4zNjcyIDE5Ljc5MyA0OS4zNDc1IDE5LjY1NDFDNDkuMDkyNCAxOS44ODEgNDguNzg3OCAxOS45OTQ0IDQ4LjQzMzkgMTkuOTk0NEM0OC4xMTc1IDE5Ljk5NDQgNDcuODU3NSAxOS45MTgyIDQ3LjY1MzggMTkuNzY1OUM0Ny40NTIxIDE5LjYxMTggNDcuMzUxMiAxOS40MTcxIDQ3LjM1MTIgMTkuMTgxOEM0Ny4zNTEyIDE4Ljg5NTcgNDcuNDc3OCAxOC42NzM5IDQ3LjczMDkgMTguNTE2NUM0Ny45ODYgMTguMzU3NCA0OC4zNDM5IDE4LjI3NzggNDguODA0NiAxOC4yNzc4SDQ5LjMzODZWMTguMDYyQzQ5LjMzODYgMTcuODk3NyA0OS4yODEyIDE3Ljc2NzQgNDkuMTY2NSAxNy42NzA5QzQ5LjA1MTggMTcuNTcyNyA0OC44ODI4IDE3LjUyMzYgNDguNjU5MyAxNy41MjM2QzQ4LjQ2MzUgMTcuNTIzNiA0OC4yOTk0IDE3LjU2NTkgNDguMTY2OSAxNy42NTA2QzQ4LjAzNDQgMTcuNzM1MiA0Ny45NjgyIDE3LjgzNzcgNDcuOTY4MiAxNy45NTc4SDQ3LjQxNjVDNDcuNDE2NSAxNy44MjA3IDQ3LjQ3MjkgMTcuNjg4NyA0Ny41ODU2IDE3LjU2MTdDNDcuNzAwMyAxNy40MzMgNDcuODU0NSAxNy4zMzE1IDQ4LjA0ODMgMTcuMjU3QzQ4LjI0NDEgMTcuMTgyNSA0OC40NTg2IDE3LjE0NTMgNDguNjkxOSAxNy4xNDUzQzQ5LjA2MTcgMTcuMTQ1MyA0OS4zNTE0IDE3LjIyNDggNDkuNTYxIDE3LjM4NEM0OS43NzA2IDE3LjU0MTQgNDkuODc5NCAxNy43NTg5IDQ5Ljg4NzMgMTguMDM2NlYxOS4zMDEyQzQ5Ljg4NzMgMTkuNTUzNCA0OS45MjQ5IDE5Ljc1NCA1MCAxOS45MDNWMTkuOTQzNkg0OS40MjQ2Wk00OC41MTQgMTkuNTg1NkM0OC42ODYgMTkuNTg1NiA0OC44NDkxIDE5LjU0NzUgNDkuMDAzNCAxOS40NzEzQzQ5LjE1NzYgMTkuMzk1MSA0OS4yNjkzIDE5LjI5NjEgNDkuMzM4NiAxOS4xNzQyVjE4LjYxMDVINDguOTA4NUM0OC4yMzYxIDE4LjYxMDUgNDcuOSAxOC43Nzg5IDQ3LjkgMTkuMTE1OEM0Ny45IDE5LjI2MzEgNDcuOTU3MyAxOS4zNzgyIDQ4LjA3MiAxOS40NjExQzQ4LjE4NjcgMTkuNTQ0MSA0OC4zMzQgMTkuNTg1NiA0OC41MTQgMTkuNTg1NlpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI0ZBRUVFMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eT1cIjAuNTZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTUwLjc0NjMgMS44NTY5NEM1MC42MTk0IDEuNDcwNjIgNTAuMzY1NyAxLjE3MDE0IDUwLjA2OTcgMC45MTI1OTNDNDkuNzMxMyAwLjY1NTA0MyA0OS4zNTA4IDAuNDQwNDE2IDQ4Ljk3MDIgMC4zMTE2NDFDNDguNDYyNyAwLjE4Mjg2NiA0Ny45NTUyIDAuMTM5OTQgNDcuNDQ3OCAwLjEzOTk0SDM4Ljk5MDFWOC41MTAzNEwzMy41MzQ4IDAuMTM5OTRIMzEuNzE2NEwyNi4yNjEyIDguNTEwMzRDMjYuMjYxMiA4LjM4MTU3IDI2LjMwMzUgOC4yNTI3OSAyNi4zMDM1IDguMDgxMDlWNi44MzYyNkMyNi4zMDM1IDYuNDQ5OTMgMjYuMjYxMiA2LjA2MzYxIDI2LjEzNDMgNS43MjAyMUMyNi4wMDc1IDUuMzMzODggMjUuNzUzNyA1LjAzMzQxIDI1LjQ1NzcgNC43NzU4NkMyNS4xMTk0IDQuNTE4MyAyNC43Mzg4IDQuMzAzNjggMjQuMzU4MiA0LjE3NDlDMjMuODUwNyA0LjA0NjEzIDIzLjM0MzMgNC4wMDMyIDIyLjgzNTggNC4wMDMySDE3LjE2OTJDMTYuMzY1NyA0LjAwMzIgMTYuMzY1NyAzLjY1OTggMTYuMzY1NyAzLjQ4ODFWMi44ODcxNUMxNi4zNjU3IDIuNzE1NDUgMTYuMzY1NyAyLjM3MjA1IDE3LjE2OTIgMi4zNzIwNUgyNS44ODA2VjAuMDExMTY2M0gxNy4xNjkyQzE2LjY2MTcgLTAuMDMxNzU4OCAxNi4xMTE5IDAuMDU0MDg4OCAxNS42NDY4IDAuMTgyODY0QzE1LjIyMzkgMC4yNjg3MTQgMTQuODQzMyAwLjQ4MzM0MSAxNC41NDczIDAuNzgzODE3QzE0LjI1MTIgMS4wNDEzNyAxMy45OTc1IDEuMzQxODUgMTMuODcwNiAxLjcyODE3QzEzLjc0MzggMi4wNzE1NyAxMy43MDE1IDIuNDU3OSAxMy43MDE1IDIuODQ0MjJWMy40NDUxOEMxMy43MDE1IDMuODMxNSAxMy43NDM4IDQuMjE3ODMgMTMuODcwNiA0LjU2MTIzQzEzLjk5NzUgNC45NDc1NiAxNC4yNTEyIDUuMjQ4MDMgMTQuNTQ3MyA1LjUwNTU4QzE0Ljg4NTYgNS43NjMxMyAxNS4yNjYyIDUuOTc3NzYgMTUuNjQ2OCA2LjEwNjUzQzE2LjE1NDIgNi4yMzUzMSAxNi42NjE3IDYuMjc4MjMgMTcuMTY5MiA2LjI3ODIzSDIyLjkyMDRDMjMuNzIzOSA2LjI3ODIzIDIzLjcyMzkgNi42MjE2MyAyMy43MjM5IDYuNzkzMzNWOC4wMzgxN0MyMy43MjM5IDguMjA5ODcgMjMuNzIzOSA4LjU1MzI3IDIyLjkyMDQgOC41NTMyN0gxNC40NjI3TDguOTY1MTggMC4wOTcwMTUzSDcuMTQ2NzdMMCAxMUgzLjA4NzA3TDcuOTA3OTcgMy4zNTkzMkwxMi43Mjg5IDExSDI3Ljc4MzZMMzIuNjg5MSAzLjM1OTMyTDM3LjUxIDExSDQxLjc4MTFWNy4zMDg0NEg0Ny41MzIzQzQ4LjAzOTggNy4zNTEzNiA0OC41ODk2IDcuMjY1NTEgNDkuMDU0NyA3LjEzNjc0QzQ5LjQ3NzYgNy4wNTA4OSA0OS44NTgyIDYuODM2MjYgNTAuMTU0MiA2LjUzNTc4QzUwLjQ1MDMgNi4yNzgyMyA1MC43MDQgNS45Nzc3NiA1MC44MzA5IDUuNTkxNDNDNTAuOTU3NyA1LjI0ODAzIDUxIDQuODYxNyA1MSA0LjQ3NTM4VjMuMDE1OTNDNTEgMi42Mjk2IDUwLjg3MzEgMi4yNDMyNyA1MC43NDYzIDEuODU2OTRaTTQ4LjI1MTIgMi45MzAwN1Y0LjQzMjQ1QzQ4LjI1MTIgNC42MDQxNSA0OC4yNTEyIDQuOTQ3NTYgNDcuNDQ3OCA0Ljk0NzU2SDQxLjY5NjVWMi41MDA4Mkg0Ny40NDc4QzQ4LjI1MTIgMi41MDA4MiA0OC4yNTEyIDIuNzU4MzcgNDguMjUxMiAyLjkzMDA3WlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjRkFFRUUyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3gocy5jb3JwKX0+XHJcbiAgICAgICAgICAgICAgIHs8TG9nbyAvPn1cclxuICAgICAgICAgICAgICAgPHNwYW4+wqkgUHR5IEx0ZCBhbmQgV2lsZCBHYW1lIFJlc291cmNlczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgPHNwYW4+QXVzdHJhbGlhIFB0eSBMdGQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgIDxzcGFuPlRlcm1zICYgQ29uZGl0aW9uczwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgKTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBzIGZyb20gXCIuL0hlYWRlci5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgZyBmcm9tIFwic3JjL3N0eWxlcy9NYWluLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB7IExvZ28gfSBmcm9tIFwiLi4vLi4vU1ZHL0hlYWRlckxvZ29TVkdcIjtcclxuXHJcbmNvbnN0IGhlYWRlckxpbmtzID0gW1xyXG4gICB7IHRpdGxlOiBcItCi0L7Rh9C60Lgg0L/RgNC+0LTQsNC2XCIsIGxpbms6IFwiL1wiIH0sXHJcbiAgIHsgdGl0bGU6IFwi0JTQvtGB0YLQsNCy0LrQsFwiLCBsaW5rOiBcIi9cIiB9LFxyXG4gICB7IHRpdGxlOiBcItCS0L7Qv9GA0L7RgdGLXCIsIGxpbms6IFwiL1wiIH0sXHJcbiAgIHsgbG9nbzogdHJ1ZSB9LFxyXG4gICB7IHRpdGxlOiBcItCk0LXRgNC80LBcIiwgbGluazogXCIvXCIgfSxcclxuICAgeyB0aXRsZTogXCLQn9GA0L7QtNGD0LrRhtC40Y9cIiwgbGluazogXCIvcHJvZHVjdHNcIiB9LFxyXG4gICB7IHRpdGxlOiBcItCS0L7QudGC0LhcIiwgbGluazogXCIvXCIgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXIgPSAoe3Byb21vfSkgPT4ge1xyXG4gICByZXR1cm4gKFxyXG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT17Y2xzeChzLmhlYWRlcil9PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChnLndyYXBwZXIpfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3gocy5jb250YWluZXIsIHByb21vID8gcy5ib3JkZXJfYWNjZW50IDogJycpfT5cclxuICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9e2Nsc3gocy5uYXYpfT5cclxuICAgICAgICAgICAgICAgICAge2hlYWRlckxpbmtzLm1hcCgoZWwsIGkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgIGVsLmxvZ28gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjbHN4KHMubG9nbywgcHJvbW8gPyBzLmxvZ29fYWNjZW50IDogJycpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvZ28gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2VsLmxpbmt9IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y2xzeChzLmxpbmssIHByb21vID8gcy5saW5rX2FjY2VudCA6ICcnKX0+e2VsLnRpdGxlfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChzLmNvbnRyb2wpfT5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtjbHN4KHMuYnV0dG9uLCBwcm9tbyA/IHMuYnV0dG9uX2FjY2VudCA6ICcnKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAxOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMC4wNDkzIDMuNjM0MjRMMTAuNDY4NiA0LjI4MTk2TDEwLjg4ODUgMy42MzQ2QzEyLjM4MDMgMS4zMzQ1MyAxNC40NTc4IDAuODgzNjMxIDE2LjEzNzcgMS41Mjg5NUMxNy44NDkzIDIuMTg2NDUgMTkuMjUgNC4wMTk3NiAxOS4yNSA2LjUxMDUxQzE5LjI1IDcuMzcwMzIgMTguNzkyNSA4LjQyNDExIDE4LjAwMDYgOS41ODE0MUMxNy4yMTkgMTAuNzIzOCAxNi4xNTkzIDExLjg5OTEgMTUuMDYgMTIuOTg4MkMxMy45NjI5IDE0LjA3NTIgMTIuODM4NSAxNS4wNjQ1IDExLjkzNDcgMTUuODM2MkMxMS42MTAxIDE2LjExMzQgMTEuMzE1NSAxNi4zNjExIDExLjA2MDEgMTYuNTc1OUMxMC45NTk0IDE2LjY2MDYgMTAuODY0OSAxNi43NDAxIDEwLjc3NjkgMTYuODE0NEMxMC42NjQgMTYuOTA5NiAxMC41NTkyIDE2Ljk5ODQgMTAuNDY1OCAxNy4wNzg5QzEwLjM2NzEgMTYuOTk2NCAxMC4yNTYxIDE2LjkwNTUgMTAuMTM2OSAxNi44MDg2QzEwLjAwOTcgMTYuNzA1MSA5Ljg3MDQyIDE2LjU5MjYgOS43MTk2NSAxNi40NzA4QzkuNDgzNTggMTYuMjgwMSA5LjIxOTMgMTYuMDY2NiA4LjkyODg1IDE1LjgyOTNDNy45ODM3NCAxNS4wNTcgNi44MDQ0NSAxNC4wNjczIDUuNjUyMzQgMTIuOTc5OEM0LjQ5NzkgMTEuODkwMSAzLjM4Mzg0IDEwLjcxNDQgMi41NjE4MyA5LjU3MTc3QzEuNzI4MDEgOC40MTI3NCAxLjI1IDcuMzYyNTYgMS4yNSA2LjUxMDUxQzEuMjUgNC4wMTg2IDIuNzQyODYgMi4xNzc2OCA0LjU3MzkxIDEuNTE3MTZDNi4zODE2MyAwLjg2NTA2MiA4LjU2Nzc2IDEuMzQ1ODEgMTAuMDQ5MyAzLjYzNDI0WlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cIiNGQUVFRTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17Y2xzeChzLmJ1dHRvbil9PlxyXG4gICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTUgMjFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHg9XCIwLjVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB5PVwiNi41XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiI0ZGRjNFN1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTIgMTBWNS41QzEyIDMuMDE0NzIgOS45ODUyOCAxIDcuNSAxVjFDNS4wMTQ3MiAxIDMgMy4wMTQ3MiAzIDUuNVYxMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cIiNGRkYzRTdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG4gICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgYWxsU3RhdHVzLCBhbGxUYXN0ZXMgfSBmcm9tIFwic3JjL2NvbnN0YW50c1wiO1xyXG5cclxuXHJcbmltcG9ydCBzIGZyb20gXCIuL1Byb2R1Y3QubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IGcgZnJvbSBcInNyYy9zdHlsZXMvTWFpbi5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2R1Y3QgPSAoe1xyXG4gICBzdGF0dXMsXHJcbiAgIGltYWdlLFxyXG4gICBuYW1lLFxyXG4gICBhZGRpdGlvbixcclxuICAgd2VpZ2h0LFxyXG4gICBwcmljZSxcclxuICAgbGluayxcclxuICAgdGFzdGVzLFxyXG4gICBhZGRpdGlvbkNsYXNzLFxyXG4gICBpZFxyXG59KSA9PiB7XHJcbiAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KHMuY2FyZCwgYWRkaXRpb25DbGFzcyAmJiBzW2FkZGl0aW9uQ2xhc3NdKX0+XHJcbiAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17Y2xzeChzLmFkZCl9PlxyXG4gICAgICAgICAgICArXHJcbiAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Nsc3goZ1thbGxTdGF0dXNbc3RhdHVzXS5jbGFzc10pfT5cclxuICAgICAgICAgICAge2FsbFN0YXR1c1tzdGF0dXNdLnRpdGxlfVxyXG4gICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgIDxpbWcgc3JjPXtpbWFnZX0gYWx0PXtuYW1lfSBjbGFzc05hbWU9e2Nsc3gocy5pbWFnZSl9IC8+XHJcbiAgICAgICAgIDxoMyBjbGFzc05hbWU9e2Nsc3gocy5uYW1lKX0+e25hbWV9PC9oMz5cclxuICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbHN4KHMuYWRkaXRpb24pfT57YWRkaXRpb259PC9zcGFuPlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChzLmluZm8pfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3gocy53ZWxsKX0+XHJcbiAgICAgICAgICAgICAgIHt0YXN0ZXM/Lmxlbmd0aCAmJiB0YXN0ZXMubWFwKCh0YXN0ZSkgPT4gYWxsVGFzdGVzW3Rhc3RlXSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Nsc3gocy53ZWlnaHQpfT57d2VpZ2h0fTwvc3Bhbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDxoMyBjbGFzc05hbWU9e2Nsc3gocy5wcmljZSl9PntwcmljZX0g0YDRg9CxLjwvaDM+XHJcbiAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZHVjdHMvJHtpZH1gfT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjbHN4KHMubW9yZSl9PtCf0L7QtNGA0L7QsdC90LXQtTwvYT5cclxuICAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgKTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSBcInN3aXBlci9yZWFjdFwiO1xyXG5pbXBvcnQgU3dpcGVyQ29yZSwgeyBOYXZpZ2F0aW9uIH0gZnJvbSBcInN3aXBlclwiO1xyXG5pbXBvcnQgeyBTbGlkZXJOYXYgfSBmcm9tIFwiQGNvbXBvbmVudHMvQ29tbW9uL1NsaWRlci9TbGlkZXJOYXYvU2xpZGVyTmF2XCI7XHJcblxyXG5pbXBvcnQgcyBmcm9tIFwiLi9TbGlkZXIubW9kdWxlLnNjc3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTbGlkZXIgPSAoeyBjaGlsZHJlbiwgc2xpZGVzLCBwYXJhbXMsIHRpdGxlIH0pID0+IHtcclxuICAgU3dpcGVyQ29yZS51c2UoW05hdmlnYXRpb25dKTtcclxuICAgY29uc3QgcHJldlJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuICAgY29uc3QgbmV4dFJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuICAgY29uc3QgW2N1cnJlbnRDb3VudCwgc2V0Q3VycmVudENvdW50XSA9IFJlYWN0LnVzZVN0YXRlKDEpO1xyXG4gICBjb25zdCBhbGxDb3VudCA9IE1hdGguY2VpbChzbGlkZXMubGVuZ3RoIC8gcGFyYW1zLnNsaWRlci5zbGlkZXNQZXJWaWV3KTtcclxuICAgY29uc3Qge3NsaWRlckNsYXNzLCBzbGlkZUNsYXNzLCAuLi5yZXN0UGFyYW1zfSA9IHBhcmFtcy5zbGlkZXI7XHJcbiAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgIDxTbGlkZXJOYXZcclxuICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxyXG4gICAgICAgICAgICBwcmV2PXtwcmV2UmVmfVxyXG4gICAgICAgICAgICBuZXh0PXtuZXh0UmVmfVxyXG4gICAgICAgICAgICBhbGxDb3VudD17YWxsQ291bnR9XHJcbiAgICAgICAgICAgIGN1cnJlbnRDb3VudD17Y3VycmVudENvdW50fVxyXG4gICAgICAgICAgICBwYXJhbXM9e3BhcmFtcy5uYXZ9XHJcbiAgICAgICAgIC8+XHJcbiAgICAgICAgIDxTd2lwZXJcclxuICAgICAgICAgICAgb25Jbml0PXsoc3dpcGVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgIHN3aXBlci5wYXJhbXMubmF2aWdhdGlvbi5wcmV2RWwgPSBwcmV2UmVmLmN1cnJlbnQ7XHJcbiAgICAgICAgICAgICAgIHN3aXBlci5wYXJhbXMubmF2aWdhdGlvbi5uZXh0RWwgPSBuZXh0UmVmLmN1cnJlbnQ7XHJcbiAgICAgICAgICAgICAgIHN3aXBlci5uYXZpZ2F0aW9uLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uXHJcbiAgICAgICAgICAgIG9uU2xpZGVDaGFuZ2U9eyhlKSA9PiBzZXRDdXJyZW50Q291bnQoKytlLnNuYXBJbmRleCl9XHJcbiAgICAgICAgICAgIHNwZWVkPXs1MDB9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c1tzbGlkZXJDbGFzc119XHJcbiAgICAgICAgICAgIHsuLi5yZXN0UGFyYW1zfVxyXG4gICAgICAgICA+XHJcbiAgICAgICAgICAgIHtzbGlkZXMubWFwKChzbGlkZSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICA8U3dpcGVyU2xpZGUga2V5PXtpfSBjbGFzc05hbWU9e3Nbc2xpZGVDbGFzc119PlxyXG4gICAgICAgICAgICAgICAgICB7UmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7IC4uLnNsaWRlIH0pfVxyXG4gICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgPC9Td2lwZXI+XHJcbiAgICAgIDwvPlxyXG4gICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcbmltcG9ydCBzIGZyb20gXCIuL1NsaWRlck5hdi5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNsaWRlck5hdiA9ICh7XHJcbiAgIHRpdGxlLFxyXG4gICBwcmV2LFxyXG4gICBuZXh0LFxyXG4gICBhbGxDb3VudCxcclxuICAgY3VycmVudENvdW50LFxyXG4gICBwYXJhbXMsXHJcbn0pID0+IHtcclxuICAgY29uc3QgeyBjb3VudGVyIH0gPSBwYXJhbXM7XHJcbiAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KHMuaGVhZGVyKX0+XHJcbiAgICAgICAgIDxoMiBjbGFzc05hbWU9e2Nsc3gocy50aXRsZSl9Pnt0aXRsZX08L2gyPlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChzLmNvbnRhaW5lcil9PlxyXG4gICAgICAgICAgICB7Y291bnRlciAmJiAoXHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KHMuY291bnRlcil9PlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Nsc3gocy5jb3VudGVyX19jdXJyZW50KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50Q291bnQgPCAxMCA/IFwiMFwiICsgY3VycmVudENvdW50IDogY3VycmVudENvdW50fVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIC9cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbHN4KHMuY291bnRlcl9fYWxsKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgIHthbGxDb3VudCA8IDEwID8gXCIwXCIgKyBhbGxDb3VudCA6IGFsbENvdW50fVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3gocy5uYXYpfT5cclxuICAgICAgICAgICAgICAgPGJ1dHRvbiByZWY9e3ByZXZ9IGNsYXNzTmFtZT17Y2xzeChzLnByZXYpfT5cclxuICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjlcIlxyXG4gICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgOSAxNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk02LjY1NzE1IDAuOTI4ODhMMC4yOTMxOTEgNy4yOTI4NEMtMC4wOTczMzMzIDcuNjgzMzcgLTAuMDk3MzMzMiA4LjMxNjUzIDAuMjkzMTkxIDguNzA3MDVMNi42NTcxNSAxNS4wNzFDNy4wNDc2OCAxNS40NjE1IDcuNjgwODQgMTUuNDYxNSA4LjA3MTM3IDE1LjA3MUM4LjQ2MTg5IDE0LjY4MDUgOC40NjE4OSAxNC4wNDczIDguMDcxMzcgMTMuNjU2OEwyLjQxNDUxIDcuOTk5OTVMOC4wNzEzNiAyLjM0MzA5QzguNDYxODkgMS45NTI1NyA4LjQ2MTg5IDEuMzE5NCA4LjA3MTM2IDAuOTI4ODhDNy42ODA4NCAwLjUzODM1NSA3LjA0NzY4IDAuNTM4MzU1IDYuNjU3MTUgMC45Mjg4OFpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiIzE4NDE0MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgPGJ1dHRvbiByZWY9e25leHR9IGNsYXNzTmFtZT17Y2xzeChzLm5leHQpfT5cclxuICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjlcIlxyXG4gICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgOSAxNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk04LjcwNzExIDguNzA3MTFDOS4wOTc2MyA4LjMxNjU4IDkuMDk3NjMgNy42ODM0MiA4LjcwNzExIDcuMjkyODlMMi4zNDMxNSAwLjkyODkzMkMxLjk1MjYyIDAuNTM4NDA3IDEuMzE5NDYgMC41Mzg0MDcgMC45Mjg5MzMgMC45Mjg5MzJDMC41Mzg0MDggMS4zMTk0NiAwLjUzODQwOCAxLjk1MjYyIDAuOTI4OTMzIDIuMzQzMTVMNi41ODU3OSA4TDAuOTI4OTMyIDEzLjY1NjlDMC41Mzg0MDcgMTQuMDQ3NCAwLjUzODQwNyAxNC42ODA1IDAuOTI4OTMyIDE1LjA3MTFDMS4zMTk0NiAxNS40NjE2IDEuOTUyNjIgMTUuNDYxNiAyLjM0MzE1IDE1LjA3MTFMOC43MDcxMSA4LjcwNzExWk03IDlMOCA5TDggN0w3IDdMNyA5WlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjMTg0MTQwXCJcclxuICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcbmltcG9ydCBzIGZyb20gXCIuL1B1cmNoYXNlQ29udHJvbC5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFB1cmNoYXNlQ29udHJvbCA9ICh7aWR9KSA9PiB7XHJcbiAgIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gUmVhY3QudXNlU3RhdGUoMSk7XHJcbiAgIGNvbnN0IGNoYW5nZUNvdW50ID0gKG9wZXJhdGlvbikgPT4ge1xyXG4gICAgICBpZiAoY291bnQgPT09IDEgJiYgb3BlcmF0aW9uID09PSBcIi1cIikge1xyXG4gICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgc2V0Q291bnQoKHByZXYpID0+IChvcGVyYXRpb24gPT09IFwiLVwiID8gcHJldiAtIDEgOiBwcmV2ICsgMSkpO1xyXG4gICB9O1xyXG4gICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBzZXRDb3VudCgxKTtcclxuICAgfSwgW2lkXSk7XHJcblxyXG4gICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChzLmNvdW50ZXIpfT5cclxuICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3gocy5jaGFuZ2UsIHMubWludXMpfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VDb3VudChcIi1cIil9XHJcbiAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjExXCJcclxuICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTEgMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgPHJlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgeD1cIjAuM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk9XCIwLjUwMDAxMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiOS44MzQ3OVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjAuNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ4PVwiMC4zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiIzE4NDI0MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMC42XCJcclxuICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Nsc3gocy5jb3VudCl9Pntjb3VudH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KHMuY2hhbmdlLCBzLnBsdXMpfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VDb3VudChcIitcIil9XHJcbiAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEyXCJcclxuICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEyIDEwXCJcclxuICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICA8cmVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4PVwiMC4zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgeT1cIjQuNDk5ODNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjExLjI2NTRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIwLjZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByeD1cIjAuM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cIiMxODQyNDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjAuNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxyZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg9XCI2LjU1MTc4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgeT1cIjAuNTcwODA4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI4Ljg1ODQxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMC43NDE1OTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByeD1cIjAuMzcwNzk1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwicm90YXRlKDkwIDYuNTUxNzggMC41NzA4MDgpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiIzE4NDI0MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMC43NDE1OTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y2xzeChzLmFkZCl9PtCyINC60L7RgNC30LjQvdGDPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjbHN4KHMuZmF2b3JpdGUpfT5cclxuICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjE5XCJcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTdcIlxyXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE5IDE3XCJcclxuICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICBkPVwiTTkuMjk5MjggMi44ODQzTDkuNzE4NjEgMy41MzIwMkwxMC4xMzg1IDIuODg0NjZDMTEuNjMwMyAwLjU4NDU5NSAxMy43MDc4IDAuMTMzNjkyIDE1LjM4NzcgMC43NzkwMUMxNy4wOTkzIDEuNDM2NTEgMTguNSAzLjI2OTgyIDE4LjUgNS43NjA1OEMxOC41IDYuNjIwMzggMTguMDQyNSA3LjY3NDE3IDE3LjI1MDYgOC44MzE0N0MxNi40NjkgOS45NzM4MyAxNS40MDkzIDExLjE0OTEgMTQuMzEgMTIuMjM4M0MxMy4yMTI5IDEzLjMyNTMgMTIuMDg4NSAxNC4zMTQ2IDExLjE4NDcgMTUuMDg2M0MxMC44NjAxIDE1LjM2MzUgMTAuNTY1NSAxNS42MTExIDEwLjMxMDEgMTUuODI2QzEwLjIwOTQgMTUuOTEwNiAxMC4xMTQ5IDE1Ljk5MDIgMTAuMDI2OSAxNi4wNjQ0QzkuOTE0MDUgMTYuMTU5NiA5LjgwOTE5IDE2LjI0ODUgOS43MTU3OCAxNi4zMjlDOS42MTcwOSAxNi4yNDY0IDkuNTA2MDYgMTYuMTU1NiA5LjM4NjkgMTYuMDU4NkM5LjI1OTY4IDE1Ljk1NTIgOS4xMjA0MiAxNS44NDI3IDguOTY5NjUgMTUuNzIwOUM4LjczMzU4IDE1LjUzMDEgOC40NjkzIDE1LjMxNjYgOC4xNzg4NSAxNS4wNzkzQzcuMjMzNzQgMTQuMzA3MSA2LjA1NDQ1IDEzLjMxNzQgNC45MDIzNCAxMi4yMjk5QzMuNzQ3OSAxMS4xNDAxIDIuNjMzODQgOS45NjQ0MiAxLjgxMTgzIDguODIxODNDMC45NzgwMDYgNy42NjI4IDAuNSA2LjYxMjYzIDAuNSA1Ljc2MDU4QzAuNSAzLjI2ODY2IDEuOTkyODYgMS40Mjc3NCAzLjgyMzkxIDAuNzY3MjIyQzUuNjMxNjMgMC4xMTUxMjMgNy44MTc3NiAwLjU5NTg3NiA5LjI5OTI4IDIuODg0M1pcIlxyXG4gICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCIjMTg0MjQwXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3gocy5kZWxpdmVyeSl9PlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgIHdpZHRoPVwiMjBcIlxyXG4gICAgICAgICAgICAgICBoZWlnaHQ9XCIyMFwiXHJcbiAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxyXG4gICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNMTcuOTU0MyAxMC4yODM1TDE2LjI0IDYuMTM3OTRDMTYuMTk2MyA2LjAzMDkgMTYuMTIzMSA1LjkzOTU3IDE2LjAyOTYgNS44NzUzMkMxNS45MzYxIDUuODExMDggMTUuODI2NSA1Ljc3Njc4IDE1LjcxNDMgNS43NzY2OEgxNFY0LjU5MjIzQzE0IDQuNDM1MTYgMTMuOTM5OCA0LjI4NDUyIDEzLjgzMjYgNC4xNzM0NkMxMy43MjU1IDQuMDYyNCAxMy41ODAxIDQgMTMuNDI4NiA0SDIuNTcxNDNDMi40MTk4OCA0IDIuMjc0NTMgNC4wNjI0IDIuMTY3MzcgNC4xNzM0NkMyLjA2MDIgNC4yODQ1MiAyIDQuNDM1MTYgMiA0LjU5MjIzVjE0LjY2MDFDMiAxNC44MTcyIDIuMDYwMiAxNC45Njc4IDIuMTY3MzcgMTUuMDc4OUMyLjI3NDUzIDE1LjE4OTkgMi40MTk4OCAxNS4yNTIzIDIuNTcxNDMgMTUuMjUyM0gzLjc5NDI5QzMuOTI1ODggMTUuNzU0MiA0LjIxMzE0IDE2LjE5NzIgNC42MTE3NyAxNi41MTNDNS4wMTA0IDE2LjgyODkgNS40OTgyMyAxNyA2IDE3QzYuNTAxNzcgMTcgNi45ODk2IDE2LjgyODkgNy4zODgyMyAxNi41MTNDNy43ODY4NiAxNi4xOTcyIDguMDc0MTIgMTUuNzU0MiA4LjIwNTcxIDE1LjI1MjNIMTEuNzk0M0MxMS45MjU5IDE1Ljc1NDIgMTIuMjEzMSAxNi4xOTcyIDEyLjYxMTggMTYuNTEzQzEzLjAxMDQgMTYuODI4OSAxMy40OTgyIDE3IDE0IDE3QzE0LjUwMTggMTcgMTQuOTg5NiAxNi44Mjg5IDE1LjM4ODIgMTYuNTEzQzE1Ljc4NjkgMTYuMTk3MiAxNi4wNzQxIDE1Ljc1NDIgMTYuMjA1NyAxNS4yNTIzSDE3LjQyODZDMTcuNTgwMSAxNS4yNTIzIDE3LjcyNTUgMTUuMTg5OSAxNy44MzI2IDE1LjA3ODlDMTcuOTM5OCAxNC45Njc4IDE4IDE0LjgxNzIgMTggMTQuNjYwMVYxMC41MTQ1QzE3Ljk5OTkgMTAuNDM1MSAxNy45ODQzIDEwLjM1NjYgMTcuOTU0MyAxMC4yODM1Wk0xNCA2Ljk2MTE0SDE1LjMzNzFMMTYuNTYgOS45MjIyOEgxNFY2Ljk2MTE0Wk02IDE1Ljg0NDZDNS43NzM5NiAxNS44NDQ2IDUuNTUzIDE1Ljc3NTEgNS4zNjUwNiAxNS42NDQ5QzUuMTc3MTIgMTUuNTE0OCA1LjAzMDY0IDE1LjMyOTggNC45NDQxNCAxNS4xMTM0QzQuODU3NjQgMTQuODk2OSA0LjgzNTAxIDE0LjY1ODggNC44NzkxIDE0LjQyOUM0LjkyMzIgMTQuMTk5MyA1LjAzMjA1IDEzLjk4ODIgNS4xOTE4OCAxMy44MjI2QzUuMzUxNzEgMTMuNjU2OSA1LjU1NTM1IDEzLjU0NDEgNS43NzcwNCAxMy40OTg0QzUuOTk4NzMgMTMuNDUyNyA2LjIyODUyIDEzLjQ3NjIgNi40MzczNSAxMy41NjU4QzYuNjQ2MTggMTMuNjU1NSA2LjgyNDY3IDEzLjgwNzMgNi45NTAyNSAxNC4wMDIxQzcuMDc1ODMgMTQuMTk2OCA3LjE0Mjg2IDE0LjQyNTggNy4xNDI4NiAxNC42NjAxQzcuMTQyODYgMTQuOTc0MiA3LjAyMjQ1IDE1LjI3NTUgNi44MDgxMiAxNS40OTc2QzYuNTkzNzkgMTUuNzE5OCA2LjMwMzEgMTUuODQ0NiA2IDE1Ljg0NDZaTTExLjc5NDMgMTQuMDY3OUg4LjIwNTcxQzguMDc0MTIgMTMuNTY2IDcuNzg2ODYgMTMuMTIzIDcuMzg4MjMgMTIuODA3MkM2Ljk4OTYgMTIuNDkxMyA2LjUwMTc3IDEyLjMyMDIgNiAxMi4zMjAyQzUuNDk4MjMgMTIuMzIwMiA1LjAxMDQgMTIuNDkxMyA0LjYxMTc3IDEyLjgwNzJDNC4yMTMxNCAxMy4xMjMgMy45MjU4OCAxMy41NjYgMy43OTQyOSAxNC4wNjc5SDMuMTQyODZWNS4xODQ0NkgxMi44NTcxVjEyLjYyMjhDMTIuNTk2OSAxMi43Nzk0IDEyLjM2OTEgMTIuOTg3NiAxMi4xODY3IDEzLjIzNTVDMTIuMDA0MyAxMy40ODM1IDExLjg3MSAxMy43NjY0IDExLjc5NDMgMTQuMDY3OVpNMTQgMTUuODQ0NkMxMy43NzQgMTUuODQ0NiAxMy41NTMgMTUuNzc1MSAxMy4zNjUxIDE1LjY0NDlDMTMuMTc3MSAxNS41MTQ4IDEzLjAzMDYgMTUuMzI5OCAxMi45NDQxIDE1LjExMzRDMTIuODU3NiAxNC44OTY5IDEyLjgzNSAxNC42NTg4IDEyLjg3OTEgMTQuNDI5QzEyLjkyMzIgMTQuMTk5MyAxMy4wMzIgMTMuOTg4MiAxMy4xOTE5IDEzLjgyMjZDMTMuMzUxNyAxMy42NTY5IDEzLjU1NTMgMTMuNTQ0MSAxMy43NzcgMTMuNDk4NEMxMy45OTg3IDEzLjQ1MjcgMTQuMjI4NSAxMy40NzYyIDE0LjQzNzQgMTMuNTY1OEMxNC42NDYyIDEzLjY1NTUgMTQuODI0NyAxMy44MDczIDE0Ljk1MDMgMTQuMDAyMUMxNS4wNzU4IDE0LjE5NjggMTUuMTQyOSAxNC40MjU4IDE1LjE0MjkgMTQuNjYwMUMxNS4xNDI5IDE0Ljk3NDIgMTUuMDIyNCAxNS4yNzU1IDE0LjgwODEgMTUuNDk3NkMxNC41OTM4IDE1LjcxOTggMTQuMzAzMSAxNS44NDQ2IDE0IDE1Ljg0NDZaTTE2Ljg1NzEgMTQuMDY3OUgxNi4yMDU3QzE2LjA3OTQgMTMuNTYwNiAxNS43OTQzIDEzLjExMTEgMTUuMzk1MiAxMi43ODk3QzE0Ljk5NjEgMTIuNDY4MiAxNC41MDU1IDEyLjI5MjkgMTQgMTIuMjkxMlYxMS4xMDY3SDE2Ljg1NzFWMTQuMDY3OVpcIlxyXG4gICAgICAgICAgICAgICAgICBmaWxsPVwiIzcyOEQ4Q1wiXHJcbiAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Nsc3gocy50ZXh0KX0+0JTQvtGB0YLQsNCy0LrQsDogPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Nsc3gocy50ZXJtcyl9PjE1LjA1LjIwMjEgfiAxNTozMDwvc3Bhbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvPlxyXG4gICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcbmltcG9ydCBzIGZyb20gXCIuL1RodW1ibmFpbHMubW9kdWxlLnNjc3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBUaHVtYm5haWxzID0gKHsgZ2FsbGVyeSB9KSA9PiB7XHJcbiAgIGNvbnN0IFthY3RpdmVNYWluLCBzZXRBY3RpdmVNYWluXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gICBjb25zdCBbYWN0aXZlTWluaSwgc2V0QWN0aXZlTWluaV0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuXHJcbiAgIGNvbnN0IHN3aXRjaEltYWdlID0gKGltYWdlLCBpKSA9PiB7XHJcbiAgICAgIHNldEFjdGl2ZU1haW4oaW1hZ2UpO1xyXG4gICAgICBzZXRBY3RpdmVNaW5pKGkpO1xyXG4gICB9O1xyXG4gICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBzZXRBY3RpdmVNYWluKCcnKTtcclxuICAgICAgc2V0QWN0aXZlTWluaSgwKTtcclxuICAgfSwgW2dhbGxlcnldKTtcclxuICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3MuY29udGFpbmVyfT5cclxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MucHJldmlld30+XHJcbiAgICAgICAgICAgIHtnYWxsZXJ5Lm1hcCgoaW1hZ2UsIGkpID0+IChcclxuICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3gocy5taW5pLCBpID09PSBhY3RpdmVNaW5pID8gcy5hY3RpdmUgOiBcIlwiKX1cclxuICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZX1cclxuICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzd2l0Y2hJbWFnZShpbWFnZSwgaSl9XHJcbiAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPGltZyBjbGFzc05hbWU9e3MubWFpbn0gc3JjPXthY3RpdmVNYWluIHx8IGdhbGxlcnlbMF19IGFsdD1cIlwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgTG9nbyA9ICgpID0+IHtcclxuICAgcmV0dXJuIChcclxuICAgICAgPHN2Z1xyXG4gICAgICAgICB3aWR0aD1cIjEwMFwiXHJcbiAgICAgICAgIGhlaWdodD1cIjM2XCJcclxuICAgICAgICAgdmlld0JveD1cIjAgMCAxMDAgMzZcIlxyXG4gICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICA+XHJcbiAgICAgICAgIDxnIGNsaXBQYXRoPVwidXJsKCNjbGlwMClcIj5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgZD1cIk01LjcxOTM3IDM1LjA0NzRDNS45MDM4NyAzNS4yMTE3IDUuOTk2MTIgMzUuMzc1OSA1Ljk5NjEyIDM1LjU3M0M1Ljk5NjEyIDM1LjgwMjkgNS43ODA4NyAzNS45NjcxIDUuNTA0MTEgMzUuOTY3MUM1LjMxOTYxIDM1Ljk2NzEgNS4xMDQzNiAzNS44Njg2IDQuOTE5ODYgMzUuNzA0NEwxLjkzNzA4IDMyLjk0NTJWMzUuNDQxNkMxLjkzNzA4IDM1LjczNzIgMS42OTEwOCAzNS45NjcxIDEuMzUyODIgMzUuOTY3MUMxLjA0NTMyIDM1Ljk2NzEgMC43OTkzMTYgMzUuNzcwMSAwLjc5OTMxNiAzNS40NDE2VjMwLjEyMDRDMC43OTkzMTYgMjkuODI0OCAxLjA0NTMyIDI5LjYyNzcgMS4zNTI4MiAyOS42Mjc3QzEuNzIxODMgMjkuNjI3NyAxLjkzNzA4IDI5LjgyNDggMS45MzcwOCAzMC4xNTMzVjMyLjE1NjlMNC41NTA4NSAyOS45MjMzQzQuNzk2ODYgMjkuNzI2MyA0Ljk1MDYxIDI5LjYyNzcgNS4xMzUxMSAyOS42Mjc3QzUuNDQyNjEgMjkuNjI3NyA1LjYyNzExIDI5LjgyNDggNS42MjcxMSAzMC4xMjA0QzUuNjI3MTEgMzAuMjUxOCA1LjUzNDg2IDMwLjM4MzIgNS40MTE4NiAzMC41MTQ2TDIuODU5NTkgMzIuNTE4Mkw1LjcxOTM3IDM1LjA0NzRaXCJcclxuICAgICAgICAgICAgICAgZmlsbD1cIiNGRkYzRTdcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICBkPVwiTTkuNTk0MDcgMjkuNjI3N0M3Ljc0OTA2IDI5LjYyNzcgNi41MTkwNCAzMS4wMDczIDYuNTE5MDQgMzIuODEzOUM2LjUxOTA0IDM0LjQ4OSA3LjY4NzU1IDM2IDkuNTk0MDcgMzZDMTEuNTAwNiAzNiAxMi42NjkxIDM0LjQ4OSAxMi42NjkxIDMyLjgxMzlDMTIuNjY5MSAzMS4xMzg3IDExLjU2MjEgMjkuNjI3NyA5LjU5NDA3IDI5LjYyNzdaTTkuNTYzMzIgMzUuMTEzMUM4LjIxMDMxIDM1LjExMzEgNy42NTY4IDMzLjg5NzggNy42NTY4IDMyLjgxMzlDNy42NTY4IDMxLjY5NzEgOC4yNDEwNiAzMC41MTQ2IDkuNTk0MDcgMzAuNTE0NkMxMC45MTYzIDMwLjUxNDYgMTEuNTAwNiAzMS42NjQyIDExLjUwMDYgMzIuODEzOUMxMS41MzEzIDMzLjkzMDYgMTEuMDA4NiAzNS4xMTMxIDkuNTYzMzIgMzUuMTEzMVpcIlxyXG4gICAgICAgICAgICAgICBmaWxsPVwiI0ZGRjNFN1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgIGQ9XCJNMTcuNTg5MyAzMi41ODM5QzE4LjQxOTYgMzIuMzU0IDE4Ljg1MDEgMzEuODYxMyAxOC44NTAxIDMxLjIwNDRDMTguODUwMSAzMC4xODYxIDE3LjgwNDYgMjkuNjI3NyAxNi41MTMxIDI5LjYyNzdDMTUuMjUyMyAyOS42Mjc3IDEzLjg2ODUgMzAuMDU0NyAxMy44Njg1IDMwLjYxMzFDMTMuODY4NSAzMC45NDE2IDE0LjExNDYgMzEuMTA1OCAxNC40NTI4IDMxLjEwNThDMTQuOTQ0OCAzMS4xMDU4IDE1LjA2NzggMzAuNTQ3NCAxNi40MjA4IDMwLjU0NzRDMTcuMTU4OCAzMC41NDc0IDE3LjcxMjMgMzAuNjc4OCAxNy43MTIzIDMxLjMzNTdDMTcuNzEyMyAzMi4wNTg0IDE2Ljk0MzYgMzIuMjIyNiAxNi4yNjcxIDMyLjIyMjZIMTUuNjIxM0MxNS4yNTIzIDMyLjIyMjYgMTUuMTYwMSAzMi40NTI1IDE1LjE2MDEgMzIuNjgyNUMxNS4xNjAxIDMyLjg3OTUgMTUuMzc1MyAzMy4wNDM4IDE1LjYyMTMgMzMuMDQzOEgxNi4yOTc4QzE3LjEyODEgMzMuMDQzOCAxNy45Mjc2IDMzLjIwOCAxNy45Mjc2IDMzLjk2MzVDMTcuOTI3NiAzNC45MTYgMTYuOTEyOCAzNS4xNDYgMTYuMjA1NiAzNS4xNDZDMTUuMDA2MyAzNS4xNDYgMTQuNjk4OCAzNC4zNTc2IDE0LjExNDYgMzQuMzU3NkMxMy44MDcgMzQuMzU3NiAxMy41OTE4IDM0LjY1MzMgMTMuNTkxOCAzNC44NTAzQzEzLjU5MTggMzUuNDA4NyAxNS4xOTA4IDM2LjAzMjggMTYuMjk3OCAzNi4wMzI4QzE4LjExMjEgMzYuMDMyOCAxOS4wOTYxIDM1LjA4MDMgMTkuMDk2MSAzNC4wOTQ5QzE5LjA2NTMgMzMuMTQyMyAxOC4yOTY2IDMyLjcxNTMgMTcuNTg5MyAzMi41ODM5WlwiXHJcbiAgICAgICAgICAgICAgIGZpbGw9XCIjRkZGM0U3XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgZD1cIk0yMi44NDcyIDMxLjkyN0gyMS41MjVWMzAuMTg2MUMyMS41MjUgMjkuODI0OCAyMS4yNDgyIDI5LjYyNzcgMjAuOTQwNyAyOS42Mjc3QzIwLjYzMzIgMjkuNjI3NyAyMC4zODcyIDI5LjgyNDggMjAuMzg3MiAzMC4xODYxVjM1LjM0M0MyMC4zODcyIDM1LjcwNDQgMjAuNTQxIDM1LjkzNDMgMjEuMDYzNyAzNS45MzQzSDIyLjkwODdDMjQuNDc3IDM1LjkzNDMgMjUuNzk5MyAzNS4zNzU5IDI1Ljc5OTMgMzMuODk3OEMyNS43Njg1IDMyLjI1NTUgMjQuMDc3MiAzMS45MjcgMjIuODQ3MiAzMS45MjdaTTIyLjYzMiAzNS4wNDc0SDIxLjUyNVYzMi44MTM5SDIyLjY5MzVDMjMuNzY5NyAzMi44MTM5IDI0LjUzODUgMzMuMDEwOSAyNC41Mzg1IDMzLjg5NzhDMjQuNTM4NSAzNC44NTAzIDIzLjU1NDUgMzUuMDQ3NCAyMi42MzIgMzUuMDQ3NFpcIlxyXG4gICAgICAgICAgICAgICBmaWxsPVwiI0ZGRjNFN1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgIGQ9XCJNMjYuOTM3MyAyOS42Mjc3QzI2LjU5OSAyOS42Mjc3IDI2LjM4MzggMjkuODU3NiAyNi4zODM4IDMwLjE4NjFWMzUuNDc0NEMyNi4zODM4IDM1Ljc3MDEgMjYuNjI5OCAzNiAyNi45MzczIDM2QzI3LjI3NTUgMzYgMjcuNTIxNSAzNS43NzAxIDI3LjUyMTUgMzUuNDc0NFYzMC4xNTMzQzI3LjUyMTUgMjkuODU3NiAyNy4yNzU1IDI5LjYyNzcgMjYuOTM3MyAyOS42Mjc3WlwiXHJcbiAgICAgICAgICAgICAgIGZpbGw9XCIjRkZGM0U3XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgZD1cIk0zNy4xNzc0IDI5LjYyNzdDMzYuODM5MSAyOS42Mjc3IDM2LjY1NDYgMjkuNzkxOSAzNi4yODU2IDMwLjI4NDdMMzMuMzMzNiAzNC4xMjc3VjMwLjE4NjFDMzMuMzMzNiAyOS44MjQ4IDMzLjA1NjggMjkuNjI3NyAzMi43NDkzIDI5LjYyNzdDMzIuNDQxOCAyOS42Mjc3IDMyLjE5NTggMjkuODI0OCAzMi4xOTU4IDMwLjE4NjFWMzUuMzc1OUMzMi4xOTU4IDM1LjkzNDMgMzIuNDQxOCAzNi4wMzI4IDMyLjc0OTMgMzYuMDMyOEMzMy4wODc2IDM2LjAzMjggMzMuMzMzNiAzNS44MDI5IDMzLjgyNTYgMzUuMTQ2TDM2LjU2MjMgMzEuNTMyOFYzNS41MDczQzM2LjU2MjMgMzUuODAyOSAzNi43MTYxIDM2IDM3LjExNTkgMzZDMzcuNTE1NiAzNiAzNy43MDAxIDM1LjgzNTcgMzcuNzAwMSAzNS40NzQ0VjMwLjE4NjFDMzcuNzAwMSAyOS44NTc2IDM3LjU0NjQgMjkuNjI3NyAzNy4xNzc0IDI5LjYyNzdaXCJcclxuICAgICAgICAgICAgICAgZmlsbD1cIiNGRkYzRTdcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICBkPVwiTTQ0LjQ5NTggMzIuNTE4Mkw0Ni45ODY2IDMwLjUxNDZDNDcuMTQwMyAzMC4zODMyIDQ3LjIwMTggMzAuMjg0NyA0Ny4yMDE4IDMwLjEyMDRDNDcuMjAxOCAyOS44MjQ4IDQ3LjAxNzMgMjkuNjI3NyA0Ni43MDk4IDI5LjYyNzdDNDYuNTI1MyAyOS42Mjc3IDQ2LjM3MTYgMjkuNjkzNCA0Ni4xMjU2IDI5LjkyMzNMNDMuNTExOCAzMi4xNTY5VjMwLjE1MzNDNDMuNTExOCAyOS44MjQ4IDQzLjI5NjUgMjkuNjI3NyA0Mi45Mjc1IDI5LjYyNzdDNDIuNjIgMjkuNjI3NyA0Mi4zNzQgMjkuODI0OCA0Mi4zNzQgMzAuMTIwNFYzNS40NzQ0QzQyLjM3NCAzNS44MDI5IDQyLjY1MDggMzYgNDIuOTI3NSAzNkM0My4yNjU4IDM2IDQzLjUxMTggMzUuNzcwMSA0My41MTE4IDM1LjQ3NDRWMzIuOTc4MUw0Ni40OTQ2IDM1LjczNzJDNDYuNjc5MSAzNS45MDE0IDQ2Ljg5NDMgMzYgNDcuMDc4OCAzNkM0Ny4zNTU2IDM2IDQ3LjU3MDggMzUuODM1OCA0Ny41NzA4IDM1LjYwNThDNDcuNTcwOCAzNS40MDg3IDQ3LjQ3ODYgMzUuMjQ0NSA0Ny4yOTQxIDM1LjA4MDNMNDQuNDk1OCAzMi41MTgyWlwiXHJcbiAgICAgICAgICAgICAgIGZpbGw9XCIjRkZGM0U3XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgZD1cIk01MS4yMjk4IDI5LjYyNzdDNDkuMzg0OCAyOS42Mjc3IDQ4LjE1NDggMzEuMDA3MyA0OC4xNTQ4IDMyLjgxMzlDNDguMTU0OCAzNC40ODkgNDkuMzIzMyAzNiA1MS4yMjk4IDM2QzUzLjEzNjMgMzYgNTQuMzA0OSAzNC40ODkgNTQuMzA0OSAzMi44MTM5QzU0LjI3NDEgMzEuMTM4NyA1My4xNjcxIDI5LjYyNzcgNTEuMjI5OCAyOS42Mjc3Wk01MS4xOTkxIDM1LjExMzFDNDkuODQ2MSAzNS4xMTMxIDQ5LjI5MjUgMzMuODk3OCA0OS4yOTI1IDMyLjgxMzlDNDkuMjkyNSAzMS42OTcxIDQ5Ljg3NjggMzAuNTE0NiA1MS4yMjk4IDMwLjUxNDZDNTIuNTUyMSAzMC41MTQ2IDUzLjEzNjMgMzEuNjY0MiA1My4xMzYzIDMyLjgxMzlDNTMuMTM2MyAzMy45MzA2IDUyLjYxMzYgMzUuMTEzMSA1MS4xOTkxIDM1LjExMzFaXCJcclxuICAgICAgICAgICAgICAgZmlsbD1cIiNGRkYzRTdcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICBkPVwiTTYzLjAwNzQgMzAuMTg2MUM2Mi45NDU5IDI5Ljc5MiA2Mi42OTk5IDI5LjYyNzcgNjIuMjY5NCAyOS42Mjc3QzYxLjgwODEgMjkuNjI3NyA2MS42NTQ0IDI5LjgyNDggNjEuMzc3NiAzMC40NDg5TDU5LjQwOTYgMzQuNDg5TDU3LjQ0MTYgMzAuNDQ4OUM1Ny4xMzQxIDI5LjgyNDggNTcuMDExMSAyOS42Mjc3IDU2LjU0OTggMjkuNjI3N0M1Ni4xNSAyOS42Mjc3IDU1Ljg3MzMgMjkuNzkyIDU1Ljg0MjUgMzAuMTg2MUw1NS4yODkgMzUuMDQ3NEM1NS4yNTgzIDM1LjI3NzQgNTUuMjI3NSAzNS40NzQ0IDU1LjIyNzUgMzUuNTA3M0M1NS4yMjc1IDM1LjgwMjkgNTUuNDEyIDM2LjAzMjggNTUuNzgxIDM2LjAzMjhDNTYuMTgwOCAzNi4wMzI4IDU2LjM2NTMgMzUuNzcwMSA1Ni40MjY4IDM1LjM3NTlMNTYuODI2NiAzMS41NjU3TDU4LjU0ODYgMzQuOTgxN0M1OC45MTc2IDM1LjcwNDQgNTkuMTAyMSAzNi4wMzI4IDU5LjQ3MTEgMzYuMDMyOEM1OS44NDAxIDM2LjAzMjggNjAuMDI0NiAzNS43MDQ0IDYwLjM5MzYgMzQuOTgxN0w2Mi4xMTU2IDMxLjU2NTdMNjIuNTQ2MSAzNS41MDczQzYyLjU3NjkgMzUuNzM3MiA2Mi43MzA2IDM2LjAzMjggNjMuMTYxMSAzNi4wMzI4QzYzLjQ5OTQgMzYuMDMyOCA2My43MTQ2IDM1LjgzNTcgNjMuNzE0NiAzNS41MDczQzYzLjcxNDYgMzUuNDc0NCA2My42ODM5IDM1LjI3NzQgNjMuNjgzOSAzNS4xNDZMNjMuMDA3NCAzMC4xODYxWlwiXHJcbiAgICAgICAgICAgICAgIGZpbGw9XCIjRkZGM0U3XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgZD1cIk02OS43MTExIDI5LjY5MzRINjUuNDA2QzY1LjA2NzggMjkuNjkzNCA2NC44NTI1IDI5LjkyMzMgNjQuODUyNSAzMC4yMTlWMzUuNDc0NEM2NC44NTI1IDM1LjgzNTggNjUuMDk4NSAzNiA2NS40MDYgMzZDNjUuNzc1IDM2IDY2LjAyMTEgMzUuODAyOSA2Ni4wMjExIDM1LjUwNzNWMzAuNTgwM0g2OS4xNTc2VjM1LjUwNzNDNjkuMTU3NiAzNS44MDI5IDY5LjQwMzYgMzYgNjkuNzQxOCAzNkM3MC4wMTg2IDM2IDcwLjI5NTMgMzUuODM1OCA3MC4yOTUzIDM1LjQ3NDRWMzAuMjE5QzcwLjI5NTMgMjkuOTIzMyA3MC4wNDkzIDI5LjY5MzQgNjkuNzExMSAyOS42OTM0WlwiXHJcbiAgICAgICAgICAgICAgIGZpbGw9XCIjRkZGM0U3XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgZD1cIk03Ny4wNjA0IDI5LjYyNzdDNzYuNzUyOSAyOS42Mjc3IDc2LjUwNjkgMjkuODU3NyA3Ni41MDY5IDMwLjEyMDRWMzAuNDQ4OUg3Ni40NzYyQzc1Ljg5MTkgMjkuODU3NyA3NS4zNjkyIDI5LjU5NDkgNzQuNTA4MiAyOS41OTQ5QzcyLjYwMTYgMjkuNTk0OSA3MS41MjU0IDMxLjEzODcgNzEuNTI1NCAzMi44MTM5QzcxLjUyNTQgMzQuNTg3NiA3Mi43NTU0IDM1Ljk2NzEgNzQuNjYxOSAzNS45NjcxQzc1LjM2OTIgMzUuOTY3MSA3NS45ODQyIDM1LjYzODcgNzYuNDc2MiAzNS4wNDc0SDc2LjUwNjlWMzUuNTA3M0M3Ni41MDY5IDM1LjgzNTcgNzYuNzUyOSAzNiA3Ny4wNjA0IDM2Qzc3LjM5ODcgMzYgNzcuNjEzOSAzNS44MDI5IDc3LjYxMzkgMzUuNDc0NFYzMC4xNTMzQzc3LjU4MzIgMjkuODU3NyA3Ny4zNjc5IDI5LjYyNzcgNzcuMDYwNCAyOS42Mjc3Wk03NC41MDgyIDM1LjExMzFDNzMuMTU1MiAzNS4xMTMxIDcyLjY2MzIgMzMuODMyMSA3Mi42NjMyIDMyLjgxMzlDNzIuNjYzMiAzMS42MzE0IDczLjMwODkgMzAuNTE0NiA3NC41Njk3IDMwLjUxNDZDNzUuODkxOSAzMC41MTQ2IDc2LjUwNjkgMzEuNjk3MSA3Ni41MDY5IDMyLjgxMzlDNzYuNTA2OSAzMy45OTYzIDc1Ljk4NDIgMzUuMTEzMSA3NC41MDgyIDM1LjExMzFaXCJcclxuICAgICAgICAgICAgICAgZmlsbD1cIiNGRkYzRTdcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICBkPVwiTTgzLjk3OTIgMjkuNjI3N0M4My42NzE3IDI5LjYyNzcgODMuNDI1NyAyOS44MjQ4IDgzLjQyNTcgMzAuMTg2MVYzMi4xNTY5SDgwLjI4OTFWMzAuMTg2MUM4MC4yODkxIDI5LjgyNDggODAuMDEyNCAyOS42Mjc3IDc5LjcwNDkgMjkuNjI3N0M3OS4zNjY2IDI5LjYyNzcgNzkuMTUxNCAyOS44MjQ4IDc5LjE1MTQgMzAuMTg2MVYzNS40NzQ0Qzc5LjE1MTQgMzUuODM1NyA3OS4zMzU5IDM2IDc5LjcwNDkgMzZDODAuMDczOSAzNiA4MC4zMTk5IDM1LjgwMjkgODAuMzE5OSAzNS40NDE2VjMzLjAxMDlIODMuNDU2NFYzNS40MDg3QzgzLjQ1NjQgMzUuNzA0NCA4My42MTAyIDM1Ljk2NzEgODQuMDQwNyAzNS45NjcxQzg0LjM0ODIgMzUuOTY3MSA4NC41OTQyIDM1LjgwMjkgODQuNTk0MiAzNS40NDE2VjMwLjE4NjFDODQuNTYzNCAyOS44MjQ4IDg0LjI4NjcgMjkuNjI3NyA4My45NzkyIDI5LjYyNzdaXCJcclxuICAgICAgICAgICAgICAgZmlsbD1cIiNGRkYzRTdcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICBkPVwiTTkxLjA4MjYgMjkuNjI3N0M5MC43NDQ0IDI5LjYyNzcgOTAuNTU5OSAyOS43OTE5IDkwLjE5MDkgMzAuMjg0N0w4Ny4yMzg4IDM0LjEyNzdWMzAuMTg2MUM4Ny4yMzg4IDI5LjgyNDggODYuOTYyMSAyOS42Mjc3IDg2LjY1NDYgMjkuNjI3N0M4Ni4zNDcxIDI5LjYyNzcgODYuMTAxMSAyOS44MjQ4IDg2LjEwMTEgMzAuMTg2MVYzNS4zNzU5Qzg2LjEwMTEgMzUuOTM0MyA4Ni4zNDcxIDM2LjAzMjggODYuNjU0NiAzNi4wMzI4Qzg2Ljk5MjggMzYuMDMyOCA4Ny4yMzg4IDM1LjgwMjkgODcuNzMwOCAzNS4xNDZMOTAuNDY3NiAzMS41MzI4VjM1LjUwNzNDOTAuNDY3NiAzNS44MDI5IDkwLjYyMTQgMzYgOTEuMDIxMSAzNkM5MS40MjA5IDM2IDkxLjYwNTQgMzUuODM1NyA5MS42MDU0IDM1LjQ3NDRWMzAuMTg2MUM5MS41NzQ2IDI5Ljg1NzYgOTEuNDIwOSAyOS42Mjc3IDkxLjA4MjYgMjkuNjI3N1pcIlxyXG4gICAgICAgICAgICAgICBmaWxsPVwiI0ZGRjNFN1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgIGQ9XCJNOTcuNDQ3NSAyOS42Mjc3SDk1LjM1NjVDOTQuMjQ5NSAyOS42Mjc3IDkyLjk4ODcgMzAuMTUzMyA5Mi45ODg3IDMxLjVDOTIuOTg4NyAzMi40NTI1IDkzLjc4ODIgMzMuMDEwOSA5NC44MDMgMzMuMTA5NUw5My4wNTAyIDM1LjA4MDNDOTIuODk2NSAzNS4yNDQ1IDkyLjgzNSAzNS40NDE2IDkyLjgzNSAzNS41NzNDOTIuODM1IDM1Ljg2ODYgOTMuMDgxIDM2LjAzMjggOTMuMzg4NSAzNi4wMzI4QzkzLjYwMzcgMzYuMDMyOCA5My43ODgyIDM1LjkzNDMgOTMuOTQyIDM1Ljc3MDFMOTYuMDMzIDMzLjI0MDlIOTcuMTA5M1YzNS40NzQ0Qzk3LjEwOTMgMzUuODM1NyA5Ny4zODYgMzYgOTcuNjkzNSAzNkM5OC4wMzE4IDM2IDk4LjI0NyAzNS44MDI5IDk4LjI0NyAzNS40NzQ0VjMwLjI4NDdDOTguMjE2MyAyOS43NTkxIDk4LjAzMTggMjkuNjI3NyA5Ny40NDc1IDI5LjYyNzdaTTk3LjA0NzggMzIuNDUyNUg5NS41NzE3Qzk0Ljg5NTIgMzIuNDUyNSA5NC4yMTg3IDMyLjIyMjYgOTQuMjE4NyAzMS41Qzk0LjIxODcgMzAuODEwMiA5NC44MzM3IDMwLjUxNDYgOTUuNjMzMiAzMC41MTQ2SDk3LjA0NzhWMzIuNDUyNVpcIlxyXG4gICAgICAgICAgICAgICBmaWxsPVwiI0ZGRjNFN1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgIGQ9XCJNNS41MzUwNiAyMC4xNjc5VjE2LjI1OTFDNS42MjczMSAxNi4zOTA1IDUuNjU4MDYgMTYuNTIxOSA1Ljc1MDMxIDE2LjY1MzNDNS43NTAzMSAxNi42NTMzIDkuNDQwMzUgMjEuMTIwNCAxMC44ODU2IDIyLjY5NzFDMTIuMjA3OSAyNC4xNDIzIDEzLjIyMjYgMjQuNDM4IDE0LjQyMTkgMjQuNDM4QzE2LjIzNjIgMjQuNDM4IDE3LjU4OTIgMjIuMDA3MyAxNS41Mjg5IDIwLjA2OTNMMTAuMTE2OSAxNC44MTM5QzkuOTkzODUgMTQuNzE1MyAxMC4wMjQ2IDE0LjUxODIgMTAuMTQ3NiAxNC40MTk3TDE0LjExNDQgMTEuNTI5MkMxNC45NzU0IDEwLjgzOTQgMTUuNTI4OSA5LjkxOTcxIDE1LjUyODkgOS4xMzEzOUMxNS41Mjg5IDguMDgwMjkgMTQuNTE0MSA3LjI1OTEyIDEzLjE5MTkgNy4yNTkxMkMxMi4yMDc5IDcuMjU5MTIgMTEuMzQ2OSA3LjYyMDQ0IDEwLjMzMjEgOC41NzI5OUw1Ljk5NjMxIDEyLjU4MDNDNS44MTE4MSAxMi43NDQ1IDUuNjg4ODEgMTIuOTc0NSA1LjUzNTA2IDEzLjIwNDRWMTIuMzE3NVYzLjYxMzE0QzUuNTM1MDYgMS4xODI0OCA0LjY0MzMgMCAyLjc2NzUzIDBDMC44OTE3NTkgMCAwIDEuMTgyNDggMCAzLjYxMzE0VjIwLjE2NzlDMCAyMi41OTg1IDAuODkxNzU5IDIzLjc4MSAyLjc5ODI4IDIzLjc4MUM0LjcwNDggMjMuNzgxIDUuNTM1MDYgMjIuNTY1NyA1LjUzNTA2IDIwLjE2NzlaXCJcclxuICAgICAgICAgICAgICAgZmlsbD1cIiNGRkYzRTdcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICBkPVwiTTI2Ljk2ODIgNi4zNzIyOEMyMS40OTQ2IDYuMzcyMjggMTcuNTI3OCAxMC4wMTgzIDE3LjUyNzggMTUuMTc1MkMxNy41Mjc4IDIwLjMzMjEgMjEuNDk0NiAyMy45NzgxIDI2Ljk2ODIgMjMuOTc4MUMzMi40NzI1IDIzLjk3ODEgMzYuMzc3OCAyMC4zNjUgMzYuMzc3OCAxNS4yMDgxQzM2LjM3NzggMTAuMDE4MyAzMi40NzI1IDYuMzcyMjggMjYuOTY4MiA2LjM3MjI4Wk0yNi45NjgyIDIwLjAwMzdDMjQuODQ2NCAyMC4wMDM3IDIzLjI0NzQgMTcuNzcwMSAyMy4yNDc0IDE1LjE3NTJDMjMuMjQ3NCAxMi41ODAzIDI0LjkwNzkgMTAuMzc5NiAyNi45NjgyIDEwLjM3OTZDMjkuMDI4NCAxMC4zNzk2IDMwLjY1ODIgMTIuNjQ2IDMwLjY1ODIgMTUuMTQyNEMzMC42Mjc1IDE3LjcwNDQgMjkuMDg5OSAyMC4wMDM3IDI2Ljk2ODIgMjAuMDAzN1pcIlxyXG4gICAgICAgICAgICAgICBmaWxsPVwiI0ZGRjNFN1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgIGQ9XCJNNTguNDg3MSAxOC41NTg0QzYwLjU3ODIgMTYuODE3NSA2MS42NTQ0IDE1LjY2NzkgNjEuNjU0NCAxNC40NTI2QzYxLjY1NDQgMTMuMjcwMSA2MC42NzA0IDEyLjM1MDQgNTkuNTAxOSAxMi4zNTA0QzU4LjI0MTEgMTIuMzUwNCA1Ny4xMDM0IDEzLjUzMjggNTUuNDEyMSAxNS40MDUxTDUxLjkwNjYgMTEuNzkyQzU0LjcwNDkgMTAuMjQ4MiA1Ni4yNzMxIDcuODE3NTIgNTYuMjczMSA1LjQ4NTRDNTYuMjczMSAyLjQ2MzUgNTMuNDQ0MSAwIDQ4Ljk4NTMgMEM0NC41NTczIDAgNDEuNjk3NSAyLjMzMjEyIDQxLjY5NzUgNS4yNTU0OEM0MS42OTc1IDYuODY0OTYgNDIuNDk3IDguOTAxNDYgNDQuMDk2IDEwLjQxMjRDNDAuMjIxNSAxMi4xMjA0IDM4LjMxNDkgMTQuMzU0IDM4LjMxNDkgMTcuMzEwMkMzOC4zMTQ5IDIxLjI1MTggNDEuODIwNSAyNC4yNDA5IDQ2Ljc0MDUgMjQuMjQwOUM0OS45NjkzIDI0LjI0MDkgNTIuNjc1MyAyMy4zNTQgNTQuNzA0OSAyMS43MTE3QzU2LjMwMzkgMjMuNTgzOSA1Ny4zMTg2IDI0LjI0MDkgNTguNDI1NiAyNC4yNDA5QzU5Ljc3ODcgMjQuMjQwOSA2MC43MzE5IDIzLjEyNDEgNjAuNzMxOSAyMS45MDg4QzYwLjY3MDQgMjAuODI0OCA1OS44NDAyIDE5LjkzOCA1OC40ODcxIDE4LjU1ODRaTTQ3LjM4NjMgMjAuNjkzNEM0NS4yOTUzIDIwLjY5MzQgNDQuMDM0NSAxOC44NTQgNDQuMDM0NSAxNy4xNzg4QzQ0LjAzNDUgMTUuNzk5MyA0NS4xNzIzIDE0LjUxODIgNDcuMTcxIDEzLjY2NDJMNTEuNjYwNiAxOC40OTI3QzUwLjI0NjEgMTkuNjA5NSA0OC43NzAxIDIwLjY5MzQgNDcuMzg2MyAyMC42OTM0Wk00OC45MjM4IDguNzM3MjNDNDcuNjAxNSA3LjY1MzI5IDQ2Ljk1NTggNi4yNDA4OCA0Ni45NTU4IDUuMzg2ODZDNDYuOTU1OCA0LjQwMTQ2IDQ3Ljc4NiAzLjAyMTkgNDkuMjYyMSAzLjAyMTlDNTAuOTIyNiAzLjAyMTkgNTEuNzIyMSA0LjEwNTg0IDUxLjcyMjEgNS40ODU0QzUxLjY5MTMgNi42MzUwNCA1MC43OTk2IDguMDQ3NDUgNDguOTIzOCA4LjczNzIzWlwiXHJcbiAgICAgICAgICAgICAgIGZpbGw9XCIjRkZGM0U3XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgZD1cIk03Ny4yMTQyIDE4LjY4OThDNzYuMjkxNyAxOC42ODk4IDc1LjAzMDkgMjAuMDAzNyA3My40MDEyIDIwLjAwMzdDNzAuODQ4OSAyMC4wMDM3IDY5LjM0MjEgMTcuODAyOSA2OS4zNDIxIDE1LjI0MDlDNjkuMzQyMSAxMi42Nzg4IDcwLjk0MTEgMTAuMzc5NiA3My4xODU5IDEwLjM3OTZDNzQuNzg0OSAxMC4zNzk2IDc2LjA3NjQgMTEuNjkzNCA3Ny4xMjIgMTEuNjkzNEM3OC40NzUgMTEuNjkzNCA3OS40MjgyIDEwLjc3MzcgNzkuNDI4MiA5LjU5MTI1Qzc5LjQyODIgNy43MTg5OSA3Ni45NjgyIDYuNDA1MTIgNzMuMjE2NyA2LjQwNTEyQzY3LjM3NDEgNi40MDUxMiA2My42NTMzIDEwLjA4NCA2My42NTMzIDE1LjIwOEM2My42NTMzIDIwLjQ2MzUgNjcuNDM1NiAyMy45NzgxIDcyLjg3ODQgMjMuOTc4MUM3Ni43NTI5IDIzLjk3ODEgNzkuNDI4MiAyMi41NjU3IDc5LjQyODIgMjAuODI0OEM3OS4zNjY3IDE5LjY0MjMgNzguNTA1NyAxOC42ODk4IDc3LjIxNDIgMTguNjg5OFpcIlxyXG4gICAgICAgICAgICAgICBmaWxsPVwiI0ZGRjNFN1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgIGQ9XCJNOTAuNjIxIDYuMzcyMjhDODUuMTQ3NSA2LjM3MjI4IDgxLjE4MDcgMTAuMDE4MyA4MS4xODA3IDE1LjE3NTJDODEuMTgwNyAyMC4zMzIxIDg1LjE0NzUgMjMuOTQ1MyA5MC42MjEgMjMuOTQ1M0M5Ni4xMjUzIDIzLjk0NTMgMTAwLjAzMSAyMC4zMzIxIDEwMC4wMzEgMTUuMTc1MkM5OS45OTk4IDEwLjAxODMgOTYuMTI1MyA2LjM3MjI4IDkwLjYyMSA2LjM3MjI4Wk05MC42MjEgMjAuMDAzN0M4OC40OTkyIDIwLjAwMzcgODYuOTAwMiAxNy43NzAxIDg2LjkwMDIgMTUuMTc1MkM4Ni45MDAyIDEyLjU4MDMgODguNTYwNyAxMC4zNzk2IDkwLjYyMSAxMC4zNzk2QzkyLjY4MTMgMTAuMzc5NiA5NC4zMTEgMTIuNjQ2IDk0LjMxMSAxNS4xNDI0Qzk0LjI4MDMgMTcuNzA0NCA5Mi43NDI4IDIwLjAwMzcgOTAuNjIxIDIwLjAwMzdaXCJcclxuICAgICAgICAgICAgICAgZmlsbD1cIiNGRkYzRTdcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICA8L2c+XHJcbiAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICA8Y2xpcFBhdGggaWQ9XCJjbGlwMFwiPlxyXG4gICAgICAgICAgICAgICA8cmVjdCB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjM2XCIgZmlsbD1cIndoaXRlXCIgLz5cclxuICAgICAgICAgICAgPC9jbGlwUGF0aD5cclxuICAgICAgICAgPC9kZWZzPlxyXG4gICAgICA8L3N2Zz5cclxuICAgKTtcclxufTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcbmltcG9ydCBzIGZyb20gXCIuL1Rhc3Rlc1NWRy5tb2R1bGUuc2Nzc1wiO1xyXG5leHBvcnQgY29uc3QgUmVkV2luZSA9ICh7IGJvcmRlciB9KSA9PiB7XHJcbiAgIHJldHVybiAoXHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xzeChzLnRhc3RlLCBib3JkZXIgPT09IFwiYWNjZW50XCIgPyBzLmFjY2VudCA6IFwiXCIpfT5cclxuICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICB3aWR0aD1cIjhcIlxyXG4gICAgICAgICAgICBoZWlnaHQ9XCIxMlwiXHJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgOCAxMlwiXHJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgID5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgZD1cIk0xLjE5MzY4IDAuNzQyMDY1QzEuMTA4MTIgMC43NDIwNjUgMS4wMjYwNyAwLjc3NjA1MiAwLjk2NTU3NyAwLjgzNjU0OUMwLjkwNTA4IDAuODk3MDQ1IDAuODcxMDk0IDAuOTc5MDk2IDAuODcxMDk0IDEuMDY0NjVWNC42MTMwOUMwLjg3MTA4NCA1LjQxMjggMS4xNjgxMiA2LjE4NDAxIDEuNzA0NTggNi43NzcwOUMyLjI0MTAzIDcuMzcwMTcgMi45Nzg2NyA3Ljc0Mjg1IDMuNzc0MzcgNy44MjI4MlYxMC40MTk2SDIuNDg0MDJDMi4zOTg0NyAxMC40MTk2IDIuMzE2NDIgMTAuNDUzNiAyLjI1NTkyIDEwLjUxNDFDMi4xOTU0MiAxMC41NzQ2IDIuMTYxNDQgMTAuNjU2NyAyLjE2MTQ0IDEwLjc0MjJDMi4xNjE0NCAxMC44Mjc4IDIuMTk1NDIgMTAuOTA5OCAyLjI1NTkyIDEwLjk3MDNDMi4zMTY0MiAxMS4wMzA4IDIuMzk4NDcgMTEuMDY0OCAyLjQ4NDAyIDExLjA2NDhINS43MDk4OEM1Ljc5NTQzIDExLjA2NDggNS44Nzc0OSAxMS4wMzA4IDUuOTM3OTggMTAuOTcwM0M1Ljk5ODQ4IDEwLjkwOTggNi4wMzI0NyAxMC44Mjc4IDYuMDMyNDcgMTAuNzQyMkM2LjAzMjQ3IDEwLjY1NjcgNS45OTg0OCAxMC41NzQ2IDUuOTM3OTggMTAuNTE0MUM1Ljg3NzQ5IDEwLjQ1MzYgNS43OTU0MyAxMC40MTk2IDUuNzA5ODggMTAuNDE5Nkg0LjQxOTU0VjcuODM4OTVWNy44MjI4MkM1LjIxNTI0IDcuNzQyODUgNS45NTI4NyA3LjM3MDE3IDYuNDg5MzIgNi43NzcwOUM3LjAyNTc4IDYuMTg0MDEgNy4zMjI4MiA1LjQxMjggNy4zMjI4MSA0LjYxMzA5VjEuMDY0NjVDNy4zMjI4MSAwLjk3OTA5NiA3LjI4ODgyIDAuODk3MDQ1IDcuMjI4MzMgMC44MzY1NDlDNy4xNjc4MyAwLjc3NjA1MiA3LjA4NTc4IDAuNzQyMDY1IDcuMDAwMjIgMC43NDIwNjVIMS4xOTM2OFpNMS41MTYyNyAzLjAwMDE3VjEuMzg3MjRINi42Nzc2NFYzLjAwMDE3SDEuNTE2MjdaTTYuMzI0MDggNC42NjE0OEM2LjI0Njk4IDUuMTI0NyA2LjAyNzM4IDUuNTUyMzYgNS42OTU4NSA1Ljg4NDkzQzUuMzY0MzIgNi4yMTc1IDQuOTM3MzUgNi40Mzg0NCA0LjQ3NDM4IDYuNTE3QzQuNDMyNjEgNi41MjQwNyA0LjM4OTg1IDYuNTIyODUgNC4zNDg1NiA2LjUxMzRDNC4zMDcyNiA2LjUwMzk1IDQuMjY4MjMgNi40ODY0NiA0LjIzMzY5IDYuNDYxOTNDNC4xOTkxNSA2LjQzNzQgNC4xNjk3OCA2LjQwNjMgNC4xNDcyNiA2LjM3MDQyQzQuMTI0NzQgNi4zMzQ1MyA0LjEwOTUxIDYuMjk0NTcgNC4xMDI0NCA2LjI1MjhDNC4wOTUzNiA2LjIxMTAzIDQuMDk2NTggNi4xNjgyNyA0LjEwNjAzIDYuMTI2OThDNC4xMTU0OCA2LjA4NTY4IDQuMTMyOTcgNi4wNDY2NSA0LjE1NzUgNi4wMTIxMUM0LjE4MjA0IDUuOTc3NTcgNC4yMTMxMyA1Ljk0ODIgNC4yNDkwMSA1LjkyNTY4QzQuMjg0OSA1LjkwMzE2IDQuMzI0ODYgNS44ODc5MyA0LjM2NjYzIDUuODgwODZDNC42OTczMiA1LjgyNDc3IDUuMDAyMyA1LjY2NyA1LjIzOTEyIDUuNDI5NDhDNS40NzU5NCA1LjE5MTk2IDUuNjMyODMgNC44ODY1MiA1LjY4Nzk0IDQuNTU1NjdDNS43MDQxOSA0LjQ3MzM5IDUuNzUxODUgNC40MDA2NyA1LjgyMDgxIDQuMzUyOTNDNS44ODk3NyA0LjMwNTIgNS45NzQ2MSA0LjI4NjE5IDYuMDU3MzUgNC4yOTk5NUM2LjE0MDA4IDQuMzEzNzEgNi4yMTQyIDQuMzU5MTYgNi4yNjQgNC40MjY2NUM2LjMxMzc5IDQuNDk0MTQgNi4zMzUzNCA0LjU3ODM3IDYuMzI0MDggNC42NjE0OFpcIlxyXG4gICAgICAgICAgICAgICBmaWxsPVwiI0ZBRUVFMlwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgIDwvc3ZnPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgV2hpdGVXaW5lID0gKHsgYm9yZGVyIH0pID0+IHtcclxuICAgcmV0dXJuIChcclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbHN4KHMudGFzdGUsIGJvcmRlciA9PT0gXCJhY2NlbnRcIiA/IHMuYWNjZW50IDogXCJcIil9PlxyXG4gICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIHdpZHRoPVwiOFwiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjEyXCJcclxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCA4IDEyXCJcclxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICBkPVwiTTYuMzMyNCA0LjUzNDc3QzYuMzM4MjIgNC40ODIxNCA2LjMzMzYyIDQuNDI4ODcgNi4zMTg4NiA0LjM3ODAxQzYuMzA0MSA0LjMyNzE1IDYuMjc5NDcgNC4yNzk3IDYuMjQ2MzcgNC4yMzgzNkM2LjIxMzI3IDQuMTk3MDMgNi4xNzIzNSA0LjE2MjYxIDYuMTI1OTUgNC4xMzcwOUM2LjA3OTU1IDQuMTExNTYgNi4wMjg1OCA0LjA5NTQzIDUuOTc1OTQgNC4wODk2MUM1LjkyMzMxIDQuMDgzNzggNS44NzAwNCA0LjA4ODM4IDUuODE5MTggNC4xMDMxNEM1Ljc2ODMyIDQuMTE3OSA1LjcyMDg3IDQuMTQyNTQgNS42Nzk1MyA0LjE3NTY0QzUuNjM4MiA0LjIwODc0IDUuNjAzNzggNC4yNDk2NSA1LjU3ODI2IDQuMjk2MDVDNS41NTI3MyA0LjM0MjQ1IDUuNTM2NiA0LjM5MzQzIDUuNTMwNzcgNC40NDYwNkM1LjQ5Nzc5IDQuNzQyMTIgNS4zNzE5NyA1LjAyMDE1IDUuMTcxMzQgNS4yNDAzNEM0Ljk3MDcgNS40NjA1MyA0LjcwNTU0IDUuNjExNTkgNC40MTM4MiA1LjY3MTg5QzQuMzA5MDIgNS42OTM0OSA0LjIxNzA4IDUuNzU1ODQgNC4xNTgyNSA1Ljg0NTIzQzQuMDk5NDIgNS45MzQ2MSA0LjA3ODUgNi4wNDM3IDQuMTAwMTEgNi4xNDg1MUM0LjEyMTcxIDYuMjUzMzEgNC4xODQwNiA2LjM0NTI0IDQuMjczNDQgNi40MDQwOEM0LjM2MjgzIDYuNDYyOTEgNC40NzE5MiA2LjQ4MzgyIDQuNTc2NzMgNi40NjIyMkM1LjAzNTQgNi4zNjc0OSA1LjQ1MjMxIDYuMTI5OTggNS43Njc3IDUuNzgzNzNDNi4wODMwOSA1LjQzNzQ4IDYuMjgwNzcgNS4wMDAyOCA2LjMzMjQgNC41MzQ3N1pcIlxyXG4gICAgICAgICAgICAgICBmaWxsPVwiI0ZBRUVFMlwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgIGQ9XCJNMS4zMDUwOSAwLjI1ODA1N0MxLjE5ODE0IDAuMjU4MDU3IDEuMDk1NTggMC4zMDA1NCAxLjAxOTk2IDAuMzc2MTYxQzAuOTQ0MzM5IDAuNDUxNzgxIDAuOTAxODU2IDAuNTU0MzQ1IDAuOTAxODU2IDAuNjYxMjg5VjQuNjkzNjFDMC45MDE1ODYgNS40Nzk1MiAxLjE4ODIzIDYuMjM4NDkgMS43MDc5NSA2LjgyODAxQzIuMjI3NjggNy40MTc1MiAyLjk0NDc0IDcuNzk3MDQgMy43MjQ0OCA3Ljg5NTI3VjEwLjc0MjFIMi41MTQ3OEMyLjQwNzg0IDEwLjc0MjEgMi4zMDUyOCAxMC43ODQ2IDIuMjI5NjYgMTAuODYwMkMyLjE1NDA0IDEwLjkzNTggMi4xMTE1NSAxMS4wMzg0IDIuMTExNTUgMTEuMTQ1M0MyLjExMTU1IDExLjI1MjMgMi4xNTQwNCAxMS4zNTQ4IDIuMjI5NjYgMTEuNDMwNUMyLjMwNTI4IDExLjUwNjEgMi40MDc4NCAxMS41NDg2IDIuNTE0NzggMTEuNTQ4Nkg1Ljc0MDY0QzUuODQ3NTggMTEuNTQ4NiA1Ljk1MDE1IDExLjUwNjEgNi4wMjU3NyAxMS40MzA1QzYuMTAxMzkgMTEuMzU0OCA2LjE0Mzg3IDExLjI1MjMgNi4xNDM4NyAxMS4xNDUzQzYuMTQzODcgMTEuMDM4NCA2LjEwMTM5IDEwLjkzNTggNi4wMjU3NyAxMC44NjAyQzUuOTUwMTUgMTAuNzg0NiA1Ljg0NzU4IDEwLjc0MjEgNS43NDA2NCAxMC43NDIxSDQuNTMwOTRWNy45MTk0N1Y3Ljg5NTI3QzUuMzEwNjkgNy43OTcwNCA2LjAyNzc0IDcuNDE3NTIgNi41NDc0NyA2LjgyODAxQzcuMDY3MiA2LjIzODQ5IDcuMzUzODQgNS40Nzk1MiA3LjM1MzU3IDQuNjkzNjFWMC42NjEyODlDNy4zNTM1NyAwLjU1NDM0NSA3LjMxMTA5IDAuNDUxNzgxIDcuMjM1NDcgMC4zNzYxNjFDNy4xNTk4NCAwLjMwMDU0IDcuMDU3MjggMC4yNTgwNTcgNi45NTAzNCAwLjI1ODA1N0gxLjMwNTA5Wk0xLjcwODMyIDIuNjc3NDVWMS4wNjQ1Mkg2LjU0NzFWMi42Nzc0NUgxLjcwODMyWk0xLjcwODMyIDMuNDgzOTFINi41NDcxVjQuNjkzNjFDNi41NDcxIDUuMzM1MjcgNi4yOTIyMSA1Ljk1MDY2IDUuODM4NDggNi40MDQzOEM1LjM4NDc2IDYuODU4MSA0Ljc2OTM4IDcuMTEzIDQuMTI3NzEgNy4xMTNDMy40ODYwNSA3LjExMyAyLjg3MDY3IDYuODU4MSAyLjQxNjk0IDYuNDA0MzhDMS45NjMyMiA1Ljk1MDY2IDEuNzA4MzIgNS4zMzUyNyAxLjcwODMyIDQuNjkzNjFWMy40ODM5MVpcIlxyXG4gICAgICAgICAgICAgICBmaWxsPVwiI0ZBRUVFMlwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgIDwvc3ZnPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgVmVnZXRhYmxlcyA9ICh7IGJvcmRlciB9KSA9PiB7XHJcbiAgIHJldHVybiAoXHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xzeChzLnRhc3RlLCBib3JkZXIgPT09ICdhY2NlbnQnID8gcy5hY2NlbnQgOiAnJyl9PlxyXG4gICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIHdpZHRoPVwiMTJcIlxyXG4gICAgICAgICAgICBoZWlnaHQ9XCIxMVwiXHJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTIgMTFcIlxyXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgIGQ9XCJNOS45MzUzOCA0LjUwMDEzQzkuOTM1MDEgNC4wNjczIDkuODE4NTggMy42NDI0OSA5LjU5ODIzIDMuMjY5OTVDOS4zNzc4OCAyLjg5NzQgOS4wNjE2NyAyLjU5MDc2IDguNjgyNTQgMi4zODE5NUM4Ljk2ODI5IDIuMDgzODkgOS4xMjgxNiAxLjY4NzE3IDkuMTI4OTIgMS4yNzQyN0g4LjMyMjQ2QzguMzIyMjQgMS40ODgwOSA4LjIzNzIxIDEuNjkzMSA4LjA4NjAxIDEuODQ0MjlDNy45MzQ4MiAxLjk5NTQ5IDcuNzI5ODEgMi4wODA1MiA3LjUxNTk5IDIuMDgwNzRDNi44ODIyOCAyLjA4MTU4IDYuMjc0MTYgMi4zMzA4NiA1LjgyMjE5IDIuNzc1MDZDNS4zNzAyMiAzLjIxOTI3IDUuMTEwNDQgMy44MjI5OCA1LjA5ODYyIDQuNDU2NThDNC41ODE2MiAzLjkzMDAxIDQuMjkxNDEgMy4yMjE5MSA0LjI5MDEzIDIuNDgzOTdDNC4yODkwNyAyLjEyNzM1IDQuMTY5NzQgMS43ODExNyAzLjk1MDgzIDEuNDk5NjVDMy43MzE5MiAxLjIxODEzIDMuNDI1OCAxLjAxNzE4IDMuMDgwNDQgMC45MjgyOTlWMC4wNjQ1NzUySDIuMjczOTdWMC45MjgyOTlDMS45Mjg2MSAxLjAxNzE4IDEuNjIyNDkgMS4yMTgxMyAxLjQwMzU4IDEuNDk5NjVDMS4xODQ2NyAxLjc4MTE3IDEuMDY1MzQgMi4xMjczNSAxLjA2NDI4IDIuNDgzOTdWNC41MDAxM0gwLjI1NzgxMlY0LjkwMzM2QzAuMjU3ODEyIDYuNDAwNTcgMC44NTI1NzggNy44MzY0NyAxLjkxMTI3IDguODk1MTZDMi45Njk5NiA5Ljk1Mzg1IDQuNDA1ODUgMTAuNTQ4NiA1LjkwMzA2IDEwLjU0ODZDNy40MDAyOCAxMC41NDg2IDguODM2MTcgOS45NTM4NSA5Ljg5NDg2IDguODk1MTZDMTAuOTUzNSA3LjgzNjQ3IDExLjU0ODMgNi40MDA1NyAxMS41NDgzIDQuOTAzMzZWNC41MDAxM0g5LjkzNTM4Wk03LjUxNTk5IDIuODg3MkM3Ljk0MzYgMi44ODc3MyA4LjM1MzU1IDMuMDU3ODQgOC42NTU5MiAzLjM2MDIxQzguOTU4MjggMy42NjI1NyA5LjEyODM5IDQuMDcyNTIgOS4xMjg5MiA0LjUwMDEzSDUuOTAzMDZDNS45MDM2IDQuMDcyNTIgNi4wNzM3IDMuNjYyNTcgNi4zNzYwNyAzLjM2MDIxQzYuNjc4NDQgMy4wNTc4NCA3LjA4ODM4IDIuODg3NzMgNy41MTU5OSAyLjg4NzJaTTEuODcwNzQgMi40ODM5N0MxLjg3MDc0IDIuMjcwMDggMS45NTU3MSAyLjA2NDk1IDIuMTA2OTUgMS45MTM3MUMyLjI1ODE5IDEuNzYyNDcgMi40NjMzMiAxLjY3NzUgMi42NzcyMSAxLjY3NzVDMi44OTEwOSAxLjY3NzUgMy4wOTYyMiAxLjc2MjQ3IDMuMjQ3NDYgMS45MTM3MUMzLjM5ODcgMi4wNjQ5NSAzLjQ4MzY3IDIuMjcwMDggMy40ODM2NyAyLjQ4Mzk3QzMuNDg1MjggMy4yMDIzOCAzLjcwMDI5IDMuOTA0MTMgNC4xMDE0MiA0LjUwMDEzSDEuODcwNzRWMi40ODM5N1pNNS45MDMwNiA5Ljc0MjE1QzQuNjg5OTUgOS43NDA2NCAzLjUyMTUyIDkuMjg0MTYgMi42Mjg2NiA4LjQ2MjkxQzEuNzM1ODEgNy42NDE2NSAxLjE4MzQ3IDYuNTE1MzYgMS4wODA4MSA1LjMwNjU5SDEwLjcyNTdDMTAuNjIzIDYuNTE1NDMgMTAuMDcwNyA3LjY0MTc3IDkuMTc3NzIgOC40NjMwNEM4LjI4NDc4IDkuMjg0MzEgNy4xMTYyNSA5Ljc0MDc0IDUuOTAzMDYgOS43NDIxNVpcIlxyXG4gICAgICAgICAgICAgICBmaWxsPVwiI0ZBRUVFMlwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgIDwvc3ZnPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgRnJ1aXRzID0gKHsgYm9yZGVyIH0pID0+IHtcclxuICAgcmV0dXJuIChcclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbHN4KHMudGFzdGUsIGJvcmRlciA9PT0gJ2FjY2VudCcgPyBzLmFjY2VudCA6ICcnKX0+XHJcbiAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgd2lkdGg9XCIxMFwiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjE2XCJcclxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxMCAxNlwiXHJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgID5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgZD1cIk05LjgwMTMzIDcuOTAzNDVDOS44MDEzMyA2Ljk2OTMgOS4xNjI4OCA2LjIwMzE2IDguMzA5MzcgNS45Njc5NEM4LjQzMzE0IDUuNjYyMTQgOC40Nzk4NyA1LjMzMDYyIDguNDQ1NDYgNS4wMDI1MkM4LjQxMTA0IDQuNjc0NDIgOC4yOTY1NCA0LjM1OTgxIDguMTEyMDIgNC4wODYzNUM3LjkyNzUgMy44MTI4OCA3LjY3ODYxIDMuNTg4OTUgNy4zODcyNCAzLjQzNDIzQzcuMDk1ODggMy4yNzk1MiA2Ljc3MDk2IDMuMTk4NzcgNi40NDEwNiAzLjE5OTA4QzYuMTUyMDggMy4xOTkwOCA1Ljg4MzI2IDMuMjY2MjggNS42NDEzMiAzLjM3MzgxQzUuNzY5MDEgMi42NTQ3MiA2LjAzMTExIDEuNTc5NDMgNi43MDk4OCAxLjMxNzMzTDYuMTcyMjQgMC41MTA4NjRDNS4wMjk3NSAxLjAyODM1IDQuNjkzNzIgMi41ODc1MSA0LjU5OTYzIDMuMzkzOTdDNC4zMzc1MyAzLjI3MzAxIDQuMDU1MjcgMy4xOTkwOCAzLjc1Mjg1IDMuMTk5MDhDMy40MjI5NSAzLjE5ODc3IDMuMDk4MDMgMy4yNzk1MiAyLjgwNjY3IDMuNDM0MjNDMi41MTUzIDMuNTg4OTUgMi4yNjY0MSAzLjgxMjg4IDIuMDgxODkgNC4wODYzNUMxLjg5NzM3IDQuMzU5ODEgMS43ODI4NiA0LjY3NDQyIDEuNzQ4NDUgNS4wMDI1MkMxLjcxNDA0IDUuMzMwNjIgMS43NjA3NyA1LjY2MjE0IDEuODg0NTQgNS45Njc5NEMxLjAyNDMxIDYuMTk2NDQgMC4zOTI1NzggNi45NzYwMiAwLjM5MjU3OCA3LjkwMzQ1QzAuMzkyNTc4IDguODM3NjEgMS4wMzEwMyA5LjYxMDQ3IDEuODkxMjYgOS44Mzg5N0MxLjc5NzE3IDEwLjA2NzUgMS43MzY2OSAxMC4zMjI4IDEuNzM2NjkgMTAuNTkxN0MxLjczNjY5IDExLjUyNTggMi4zNjg0MiAxMi4yOTg3IDMuMjI4NjQgMTIuNTI3MkMzLjEwNDg4IDEyLjgzMyAzLjA1ODE1IDEzLjE2NDUgMy4wOTI1NiAxMy40OTI2QzMuMTI2OTcgMTMuODIwNyAzLjI0MTQ3IDE0LjEzNTMgMy40MjYgMTQuNDA4OEMzLjYxMDUyIDE0LjY4MjIgMy44NTk0MSAxNC45MDYyIDQuMTUwNzcgMTUuMDYwOUM0LjQ0MjE0IDE1LjIxNTYgNC43NjcwNiAxNS4yOTY0IDUuMDk2OTUgMTUuMjk2QzUuNDI2ODUgMTUuMjk2NCA1Ljc1MTc3IDE1LjIxNTYgNi4wNDMxNCAxNS4wNjA5QzYuMzM0NSAxNC45MDYyIDYuNTgzMzkgMTQuNjgyMiA2Ljc2NzkxIDE0LjQwODhDNi45NTI0MyAxNC4xMzUzIDcuMDY2OTQgMTMuODIwNyA3LjEwMTM1IDEzLjQ5MjZDNy4xMzU3NiAxMy4xNjQ1IDcuMDg5MDMgMTIuODMzIDYuOTY1MjYgMTIuNTI3MkM3LjM5MzAzIDEyLjQxNTEgNy43NzE1NCAxMi4xNjQzIDguMDQxNTIgMTEuODE0QzguMzExNDkgMTEuNDYzOCA4LjQ1NzY5IDExLjAzMzkgOC40NTcyMiAxMC41OTE3QzguNDU3MjIgMTAuMzIyOCA4LjQwMzQ2IDEwLjA3NDIgOC4zMDI2NSA5LjgzODk3QzguNzMxMjEgOS43MjcyOSA5LjExMDcxIDkuNDc2NzkgOS4zODE4NCA5LjEyNjYyQzkuNjUyOTggOC43NzY0NSA5LjgwMDQ5IDguMzQ2MzMgOS44MDEzMyA3LjkwMzQ1Wk03Ljk5MzUxIDYuNDc4N1Y2LjQ5MjE0SDcuOTg2NzhMNy45OTM1MSA2LjQ3ODdaTTYuNDQxMDYgNC4yMDcxNkM2Ljk5ODg3IDQuMjA3MTYgNy40NDkxNCA0LjY1NzQ0IDcuNDQ5MTQgNS4yMTUyNEM3LjQ0OTE0IDUuNzczMDQgNi45OTg4NyA2LjIyMzMyIDYuNDQxMDYgNi4yMjMzMkM1Ljg4MzI2IDYuMjIzMzIgNS40MzI5OCA1Ljc3MzA0IDUuNDMyOTggNS4yMTUyNEM1LjQzMjk4IDQuNjU3NDQgNS44ODMyNiA0LjIwNzE2IDYuNDQxMDYgNC4yMDcxNlpNNi4xMDUwMyA3LjkwMzQ1QzYuMTA1MDMgOC40NjEyNiA1LjY1NDc2IDguOTExNTQgNS4wOTY5NSA4LjkxMTU0QzQuNTM5MTUgOC45MTE1NCA0LjA4ODg3IDguNDYxMjYgNC4wODg4NyA3LjkwMzQ1QzQuMDg4ODcgNy4zNDU2NSA0LjUzOTE1IDYuODk1MzcgNS4wOTY5NSA2Ljg5NTM3QzUuNjU0NzYgNi44OTUzNyA2LjEwNTAzIDcuMzQ1NjUgNi4xMDUwMyA3LjkwMzQ1Wk0zLjc1Mjg1IDQuMjA3MTZDNC4zMTA2NSA0LjIwNzE2IDQuNzYwOTMgNC42NTc0NCA0Ljc2MDkzIDUuMjE1MjRDNC43NjA5MyA1Ljc3MzA0IDQuMzEwNjUgNi4yMjMzMiAzLjc1Mjg1IDYuMjIzMzJDMy4xOTUwNCA2LjIyMzMyIDIuNzQ0NzcgNS43NzMwNCAyLjc0NDc3IDUuMjE1MjRDMi43NDQ3NyA0LjY1NzQ0IDMuMTk1MDQgNC4yMDcxNiAzLjc1Mjg1IDQuMjA3MTZaTTEuNDAwNjYgNy45MDM0NUMxLjQwMDY2IDcuMzQ1NjUgMS44NTA5MyA2Ljg5NTM3IDIuNDA4NzQgNi44OTUzN0MyLjk2NjU0IDYuODk1MzcgMy40MTY4MiA3LjM0NTY1IDMuNDE2ODIgNy45MDM0NUMzLjQxNjgyIDguNDYxMjYgMi45NjY1NCA4LjkxMTU0IDIuNDA4NzQgOC45MTE1NEMxLjg1MDkzIDguOTExNTQgMS40MDA2NiA4LjQ2MTI2IDEuNDAwNjYgNy45MDM0NVpNMi43NDQ3NyAxMC41OTE3QzIuNzQ0NzcgMTAuMDMzOSAzLjE5NTA0IDkuNTgzNTkgMy43NTI4NSA5LjU4MzU5QzQuMzEwNjUgOS41ODM1OSA0Ljc2MDkzIDEwLjAzMzkgNC43NjA5MyAxMC41OTE3QzQuNzYwOTMgMTEuMTQ5NSA0LjMxMDY1IDExLjU5OTggMy43NTI4NSAxMS41OTk4QzMuMTk1MDQgMTEuNTk5OCAyLjc0NDc3IDExLjE0OTUgMi43NDQ3NyAxMC41OTE3Wk01LjA5Njk1IDE0LjI4OEM0LjUzOTE1IDE0LjI4OCA0LjA4ODg3IDEzLjgzNzcgNC4wODg4NyAxMy4yNzk5QzQuMDg4ODcgMTIuNzIyMSA0LjUzOTE1IDEyLjI3MTggNS4wOTY5NSAxMi4yNzE4QzUuNjU0NzYgMTIuMjcxOCA2LjEwNTAzIDEyLjcyMjEgNi4xMDUwMyAxMy4yNzk5QzYuMTA1MDMgMTMuODM3NyA1LjY1NDc2IDE0LjI4OCA1LjA5Njk1IDE0LjI4OFpNNi40NDEwNiAxMS41OTk4QzUuODgzMjYgMTEuNTk5OCA1LjQzMjk4IDExLjE0OTUgNS40MzI5OCAxMC41OTE3QzUuNDMyOTggMTAuMDMzOSA1Ljg4MzI2IDkuNTgzNTkgNi40NDEwNiA5LjU4MzU5QzYuOTk4ODcgOS41ODM1OSA3LjQ0OTE0IDEwLjAzMzkgNy40NDkxNCAxMC41OTE3QzcuNDQ5MTQgMTEuMTQ5NSA2Ljk5ODg3IDExLjU5OTggNi40NDEwNiAxMS41OTk4Wk03Ljc4NTE3IDguOTExNTRDNy4yMjczNiA4LjkxMTU0IDYuNzc3MDkgOC40NjEyNiA2Ljc3NzA5IDcuOTAzNDVDNi43NzcwOSA3LjM0NTY1IDcuMjI3MzYgNi44OTUzNyA3Ljc4NTE3IDYuODk1MzdDOC4zNDI5NyA2Ljg5NTM3IDguNzkzMjUgNy4zNDU2NSA4Ljc5MzI1IDcuOTAzNDVDOC43OTMyNSA4LjQ2MTI2IDguMzQyOTcgOC45MTE1NCA3Ljc4NTE3IDguOTExNTRaXCJcclxuICAgICAgICAgICAgICAgZmlsbD1cIiNGQUVFRTJcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICA8L3N2Zz5cclxuICAgICAgPC9zcGFuPlxyXG4gICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcblxyXG5pbXBvcnQgQWNjb3JkaW9uIGZyb20gXCJAY29tcG9uZW50cy9Db21tb24vQWNjb3JkaW9uL0FjY29yZGlvblwiO1xyXG5pbXBvcnQgeyBTbGlkZXIgfSBmcm9tIFwiQGNvbXBvbmVudHMvQ29tbW9uL1NsaWRlci9TbGlkZXJcIjtcclxuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gXCJAY29tcG9uZW50cy9Db21tb24vUHJvZHVjdC9Qcm9kdWN0XCI7XHJcbmltcG9ydCB7IEJhY2tCdXR0b24gfSBmcm9tIFwiQGNvbXBvbmVudHMvQ29tbW9uL0JhY2tCdXR0b24vQmFja0J1dHRvblwiO1xyXG5pbXBvcnQgeyBUaHVtYm5haWxzIH0gZnJvbSBcIkBjb21wb25lbnRzL1BhZ2VzL0NhcmQvVGh1bWJuYWlscy9UaHVtYm5haWxzXCI7XHJcbmltcG9ydCB7IFB1cmNoYXNlQ29udHJvbCB9IGZyb20gXCJAY29tcG9uZW50cy9QYWdlcy9DYXJkL1B1cmNoYXNlQ29udHJvbC9QdXJjaGFzZUNvbnRyb2xcIjtcclxuXHJcbmltcG9ydCB7IGFsbFN0YXR1cywgYWxsVGFzdGVzIH0gZnJvbSBcInNyYy9jb25zdGFudHNcIjtcclxuXHJcbmltcG9ydCBzIGZyb20gXCIuL0Rlc2NyaXB0aW9uU2VjdGlvbi5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgZyBmcm9tIFwic3JjL3N0eWxlcy9NYWluLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5jb25zdCBzbGlkZXJQYXJhbXMgPSB7XHJcbiAgIHNsaWRlcjoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiA0LFxyXG4gICAgICBzbGlkZXNQZXJHcm91cDogMSxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAwLFxyXG4gICAgICBzbGlkZUNsYXNzOiBcInByb2R1Y3Rfc2xpZGVcIixcclxuICAgfSxcclxuICAgbmF2OiB7XHJcbiAgICAgIGNvdW50ZXI6IGZhbHNlLFxyXG4gICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IERlc2NyaXB0aW9uU2VjdGlvbiA9ICh7IGlkLCBwcm9kdWN0LCBwcm9kdWN0cyB9KSA9PiB7XHJcbiAgIHJldHVybiAoXHJcbiAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICA8QmFja0J1dHRvbiAvPlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8VGh1bWJuYWlscyBnYWxsZXJ5PXtwcm9kdWN0LmdhbGxlcnl9IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmluZm99PlxyXG4gICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAge3Byb2R1Y3QubmFtZX1cclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIHtwcm9kdWN0LmFkZGl0aW9ufVxyXG4gICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChzLnN0YXR1c2VzKX0+XHJcbiAgICAgICAgICAgICAgICAgIHtwcm9kdWN0LmFsbFN0YXR1cy5tYXAoKHN0YXR1cykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Nsc3goZ1tzdGF0dXMubmFtZV0pfSBrZXk9e3N0YXR1cy5uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2FsbFN0YXR1c1tzdGF0dXMubmFtZV0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0dXMuY291bnQgJiYgYCAke3N0YXR1cy5jb3VudH0gINGI0YIgYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAge3N0YXR1cy5kYXRlICYmIGDQtNC+ICR7c3RhdHVzLmRhdGV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xzeChzLnByaWNlKX0+e3Byb2R1Y3QucHJpY2V9INGA0YPQsS48L3NwYW4+XHJcbiAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xzeChzLmRlc2NyaXB0aW9uKX0+e3Byb2R1Y3QuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICB7cHJvZHVjdC50YXN0ZXM/Lmxlbmd0aCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xzeChzLndpdGgpfT7QoSDRh9C10Lwg0YPQv9C+0YLRgNC10LHQu9GP0Y7Rgjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3gocy50YXN0ZXMpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3QudGFzdGVzLm1hcCgodGFzdGUpID0+IGFsbFRhc3Rlc1t0YXN0ZV0pfVxyXG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICA8UHVyY2hhc2VDb250cm9sIGlkPXtpZH0gLz5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3gocy5hYm91dCl9PlxyXG4gICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uIHRpdGxlPXtcItCh0L7RgdGC0LDQslwifT5cclxuICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERpZ25pc3NpbW9zIG1pbnVzIGRlbGVjdHVzIHRvdGFtIGRvbG9yZXMgaW52ZW50b3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYm9yZSBpdGFxdWUuIEVvcyBpZCBkb2xvcmUgYSBxdWFtIGFsaXF1aWQgbmVzY2l1bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdml0YWUgbm9uIGV4cGxpY2FibyBkaWduaXNzaW1vcyByZXByZWhlbmRlcml0IGxhYm9yaW9zYW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWFydW0gY29uc2VxdXVudHVyIGxhYm9yZSwgZnVnaXQgZW5pbSBkb2xvciB2b2x1cHRhdGlidXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVpZGVtIGZ1Z2EgYXQgaXBzYW0gYWI/IElsbHVtIGFkaXBpc2NpIHRlbXBvcmlidXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVuaWFtIGN1bSBzaW50XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24gdGl0bGU9e1wi0J7Qv9C40YHQsNC90LjQtVwifT5cclxuICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERpZ25pc3NpbW9zIG1pbnVzIGRlbGVjdHVzIHRvdGFtIGRvbG9yZXMgaW52ZW50b3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYm9yZSBpdGFxdWUuIEVvcyBpZCBkb2xvcmUgYSBxdWFtIGFsaXF1aWQgbmVzY2l1bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdml0YWUgbm9uIGV4cGxpY2FibyBkaWduaXNzaW1vcyByZXByZWhlbmRlcml0IGxhYm9yaW9zYW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWFydW0gY29uc2VxdXVudHVyIGxhYm9yZSwgZnVnaXQgZW5pbSBkb2xvciB2b2x1cHRhdGlidXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVpZGVtIGZ1Z2EgYXQgaXBzYW0gYWI/IElsbHVtIGFkaXBpc2NpIHRlbXBvcmlidXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVuaWFtIGN1bSBzaW50XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KHMucHJvZHVjdHMpfT5cclxuICAgICAgICAgICAgPFNsaWRlclxyXG4gICAgICAgICAgICAgICB0aXRsZT17XCLQodGL0YDQvdCw0Y8g0L/RgNC+0LTRg9C60YbQuNGPXCJ9XHJcbiAgICAgICAgICAgICAgIHNsaWRlcz17cHJvZHVjdHN9XHJcbiAgICAgICAgICAgICAgIHBhcmFtcz17c2xpZGVyUGFyYW1zfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgIDxQcm9kdWN0IGFkZGl0aW9uQ2xhc3M9e1wiY2FyZF9zbGlkZXJcIn0gLz5cclxuICAgICAgICAgICAgPC9TbGlkZXI+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICk7XHJcbn07XHJcbiIsImltcG9ydCB7XHJcbiAgIFJlZFdpbmUsXHJcbiAgIFdoaXRlV2luZSxcclxuICAgVmVnZXRhYmxlcyxcclxuICAgRnJ1aXRzLFxyXG59IGZyb20gXCJAY29tcG9uZW50cy9TVkcvVGFzdGVzU1ZHL1Rhc3Rlc1NWR1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFsbFN0YXR1cyA9IHtcclxuICAgYXZhbGlhYmxlOiB7XHJcbiAgICAgIHRpdGxlOiBcItCyINC90LDQu9C40YfQuNC4XCIsXHJcbiAgICAgIGNsYXNzOiBcImF2YWxpYWJsZVwiLFxyXG4gICB9LFxyXG4gICBwcmVwYXJpbmc6IHtcclxuICAgICAgdGl0bGU6IFwi0YHQvtC30YDQtdCy0LDQtdGCXCIsXHJcbiAgICAgIGNsYXNzOiBcInByZXBhcmluZ1wiLFxyXG4gICB9LFxyXG4gICBcIm5vdC1hdmFsaWFibGVcIjoge1xyXG4gICAgICB0aXRsZTogXCLQvdC10YIg0LIg0L3QsNC70LjRh9C40LhcIixcclxuICAgICAgY2xhc3M6IFwibm90LWF2YWxpYWJsZVwiLFxyXG4gICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFsbFRhc3RlcyA9IHtcclxuICAgXCJyZWQtd2luZVwiOiA8UmVkV2luZSBib3JkZXI9e1wiYWNjZW50XCJ9IGtleT17MH0gLz4sXHJcbiAgIFwid2hpdGUtd2luZVwiOiA8V2hpdGVXaW5lIGJvcmRlcj17XCJhY2NlbnRcIn0ga2V5PXsxfSAvPixcclxuICAgdmVnZXRhYmxlczogPFZlZ2V0YWJsZXMgYm9yZGVyPXtcImFjY2VudFwifSBrZXk9ezJ9IC8+LFxyXG4gICBmcnVpdHM6IDxGcnVpdHMgYm9yZGVyPXtcImFjY2VudFwifSBrZXk9ezN9IC8+LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb2R1Y3RzID0gW1xyXG4gICB7XHJcbiAgICAgIHN0YXR1czogXCJhdmFsaWFibGVcIixcclxuICAgICAgYWxsU3RhdHVzOiBbXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJhdmFsaWFibGVcIixcclxuICAgICAgICAgICAgY291bnQ6IDIwLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwicHJlcGFyaW5nXCIsXHJcbiAgICAgICAgICAgIGNvdW50OiAxNSxcclxuICAgICAgICAgICAgZGF0ZTogXCIxNS4wOC4yMDIxXCIsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIGltYWdlOiBcIi9zdGF0aWMvaW1nL2NvbnRlbnQvY2FtYW1iZXJHb2F0LnBuZ1wiLFxyXG4gICAgICBnYWxsZXJ5OiBbXHJcbiAgICAgICAgIFwiL3N0YXRpYy9pbWcvY29udGVudC9jYW1hbWJlckdvYXQucG5nXCIsXHJcbiAgICAgICAgIFwiL3N0YXRpYy9pbWcvY29udGVudC9zbGlkZS0xLmpwZ1wiLFxyXG4gICAgICAgICBcIi9zdGF0aWMvaW1nL2NvbnRlbnQvcmVjaXBlLTIuanBnXCIsXHJcbiAgICAgICAgIFwiL3N0YXRpYy9pbWcvY29udGVudC9yZWNpcGUtMy5qcGdcIixcclxuICAgICAgXSxcclxuICAgICAgbmFtZTogXCLQmtCw0LzQsNC80LHQtdGAINC60L7Qt9C40LlcIixcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgIFwi0KTRgNCw0L3RhtGD0LfRgdC60LjQuSDRgdGL0YAg0LjQtyDQvNC+0LvQvtC60LAg0LrQvtC30Ysg0L/RgNC+0LTQvtC70LPQvtCy0LDRgtC+0Lkg0YTQvtGA0LzRiywg0LjQvNC10Y7RidC40Lkg0YHQstC10LbQuNC5INGA0LXQt9C60LjQuSDQt9Cw0L/QsNGFINC4INC90LXQttC90YvQuSDRgdC70LjQstC+0YfQvdGL0Lkg0LLQutGD0YEg0LIg0YHQtdGA0LXQtNC40L3QtSDQuCDQv9C40LrQsNC90YLQvdGL0Lkg0LLQutGD0YEg0YMg0LrQvtGA0L7Rh9C60LgsINC/0L7QutGA0YvRgtC+0Lkg0LvQtdCz0LrQvtC5INCx0LXQu9C+0Lkg0L/Qu9C10YHQtdC90YzRji5cIixcclxuICAgICAgYWRkaXRpb246IFwi0YEg0LHQtdC70L7QuSDQv9C70LXRgdC10L3RjNGOXCIsXHJcbiAgICAgIHdlaWdodDogXCIyMDAg0LPRgFwiLFxyXG4gICAgICBwcmljZTogMzIwLFxyXG4gICAgICB0YXN0ZXM6IFtcInJlZC13aW5lXCIsIFwiZnJ1aXRzXCJdLFxyXG4gICAgICBsaW5rOiBcIi9jYXJkXCIsXHJcbiAgICAgIGlkOiAyMyxcclxuICAgfSxcclxuICAge1xyXG4gICAgICBzdGF0dXM6IFwicHJlcGFyaW5nXCIsXHJcbiAgICAgIGFsbFN0YXR1czogW1xyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiYXZhbGlhYmxlXCIsXHJcbiAgICAgICAgICAgIGNvdW50OiAyMCxcclxuICAgICAgICAgfSxcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcInByZXBhcmluZ1wiLFxyXG4gICAgICAgICAgICBjb3VudDogMTUsXHJcbiAgICAgICAgICAgIGRhdGU6IFwiMTUuMDguMjAyMVwiLFxyXG4gICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICBpbWFnZTogXCIvc3RhdGljL2ltZy9jb250ZW50L2NhbWFtYmVyQ293LnBuZ1wiLFxyXG4gICAgICBnYWxsZXJ5OiBbXHJcbiAgICAgICAgIFwiL3N0YXRpYy9pbWcvY29udGVudC9jYW1hbWJlckNvdy5wbmdcIixcclxuICAgICAgICAgXCIvc3RhdGljL2ltZy9jb250ZW50L3NsaWRlLTEuanBnXCIsXHJcbiAgICAgICAgIFwiL3N0YXRpYy9pbWcvY29udGVudC9yZWNpcGUtMi5qcGdcIixcclxuICAgICAgICAgXCIvc3RhdGljL2ltZy9jb250ZW50L3JlY2lwZS0zLmpwZ1wiLFxyXG4gICAgICBdLFxyXG4gICAgICBuYW1lOiBcItCa0LDQvNCw0LzQsdC10YAg0LrQvtGA0L7QstC40LlcIixcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgIFwi0KTRgNCw0L3RhtGD0LfRgdC60LjQuSDRgdGL0YAg0LjQtyDQvNC+0LvQvtC60LAg0LrQvtC30Ysg0L/RgNC+0LTQvtC70LPQvtCy0LDRgtC+0Lkg0YTQvtGA0LzRiywg0LjQvNC10Y7RidC40Lkg0YHQstC10LbQuNC5INGA0LXQt9C60LjQuSDQt9Cw0L/QsNGFINC4INC90LXQttC90YvQuSDRgdC70LjQstC+0YfQvdGL0Lkg0LLQutGD0YEg0LIg0YHQtdGA0LXQtNC40L3QtSDQuCDQv9C40LrQsNC90YLQvdGL0Lkg0LLQutGD0YEg0YMg0LrQvtGA0L7Rh9C60LgsINC/0L7QutGA0YvRgtC+0Lkg0LvQtdCz0LrQvtC5INCx0LXQu9C+0Lkg0L/Qu9C10YHQtdC90YzRji5cIixcclxuICAgICAgYWRkaXRpb246IFwi0YEg0LHQtdC70L7QuSDQv9C70LXRgdC10L3RjNGOXCIsXHJcbiAgICAgIHdlaWdodDogXCIyMDAg0LPRgFwiLFxyXG4gICAgICBwcmljZTogMzIwLFxyXG4gICAgICB0YXN0ZXM6IFtcIndoaXRlLXdpbmVcIiwgXCJ2ZWdldGFibGVzXCJdLFxyXG4gICAgICBsaW5rOiBcIi9jYXJkXCIsXHJcbiAgICAgIGlkOiAyMCxcclxuICAgfSxcclxuICAge1xyXG4gICAgICBzdGF0dXM6IFwiYXZhbGlhYmxlXCIsXHJcbiAgICAgIGFsbFN0YXR1czogW1xyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiYXZhbGlhYmxlXCIsXHJcbiAgICAgICAgICAgIGNvdW50OiAyMCxcclxuICAgICAgICAgfSxcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcInByZXBhcmluZ1wiLFxyXG4gICAgICAgICAgICBjb3VudDogMTUsXHJcbiAgICAgICAgICAgIGRhdGU6IFwiMTUuMDguMjAyMVwiLFxyXG4gICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICBpbWFnZTogXCIvc3RhdGljL2ltZy9jb250ZW50L2dvYXRCYWxhbmNlLnBuZ1wiLFxyXG4gICAgICBnYWxsZXJ5OiBbXHJcbiAgICAgICAgIFwiL3N0YXRpYy9pbWcvY29udGVudC9nb2F0QmFsYW5jZS5wbmdcIixcclxuICAgICAgICAgXCIvc3RhdGljL2ltZy9jb250ZW50L3NsaWRlLTEuanBnXCIsXHJcbiAgICAgICAgIFwiL3N0YXRpYy9pbWcvY29udGVudC9yZWNpcGUtMi5qcGdcIixcclxuICAgICAgICAgXCIvc3RhdGljL2ltZy9jb250ZW50L3JlY2lwZS0zLmpwZ1wiLFxyXG4gICAgICBdLFxyXG4gICAgICBuYW1lOiBcIkPRi9GAINCa0L7Qt9C40Lkg0JLQsNC70LDQvdGB0LVcIixcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgIFwi0KTRgNCw0L3RhtGD0LfRgdC60LjQuSDRgdGL0YAg0LjQtyDQvNC+0LvQvtC60LAg0LrQvtC30Ysg0L/RgNC+0LTQvtC70LPQvtCy0LDRgtC+0Lkg0YTQvtGA0LzRiywg0LjQvNC10Y7RidC40Lkg0YHQstC10LbQuNC5INGA0LXQt9C60LjQuSDQt9Cw0L/QsNGFINC4INC90LXQttC90YvQuSDRgdC70LjQstC+0YfQvdGL0Lkg0LLQutGD0YEg0LIg0YHQtdGA0LXQtNC40L3QtSDQuCDQv9C40LrQsNC90YLQvdGL0Lkg0LLQutGD0YEg0YMg0LrQvtGA0L7Rh9C60LgsINC/0L7QutGA0YvRgtC+0Lkg0LvQtdCz0LrQvtC5INCx0LXQu9C+0Lkg0L/Qu9C10YHQtdC90YzRji5cIixcclxuICAgICAgYWRkaXRpb246IFwi0YEg0LHQtdC70L7QuSDQv9C70LXRgdC10L3RjNGOXCIsXHJcbiAgICAgIHdlaWdodDogXCIyMDAg0LPRgFwiLFxyXG4gICAgICBwcmljZTogNjUwLFxyXG4gICAgICB0YXN0ZXM6IFtcIndoaXRlLXdpbmVcIiwgXCJ2ZWdldGFibGVzXCJdLFxyXG4gICAgICBsaW5rOiBcIi9jYXJkXCIsXHJcbiAgICAgIGlkOiAyLFxyXG4gICB9LFxyXG4gICB7XHJcbiAgICAgIHN0YXR1czogXCJhdmFsaWFibGVcIixcclxuICAgICAgYWxsU3RhdHVzOiBbXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJhdmFsaWFibGVcIixcclxuICAgICAgICAgICAgY291bnQ6IDIwLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwicHJlcGFyaW5nXCIsXHJcbiAgICAgICAgICAgIGNvdW50OiAxNSxcclxuICAgICAgICAgICAgZGF0ZTogXCIxNS4wOC4yMDIxXCIsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIGltYWdlOiBcIi9zdGF0aWMvaW1nL2NvbnRlbnQvZ29hdEJhbGFuY2UyLnBuZ1wiLFxyXG4gICAgICBnYWxsZXJ5OiBbXHJcbiAgICAgICAgIFwiL3N0YXRpYy9pbWcvY29udGVudC9nb2F0QmFsYW5jZTIucG5nXCIsXHJcbiAgICAgICAgIFwiL3N0YXRpYy9pbWcvY29udGVudC9zbGlkZS0xLmpwZ1wiLFxyXG4gICAgICAgICBcIi9zdGF0aWMvaW1nL2NvbnRlbnQvcmVjaXBlLTIuanBnXCIsXHJcbiAgICAgICAgIFwiL3N0YXRpYy9pbWcvY29udGVudC9yZWNpcGUtMy5qcGdcIixcclxuICAgICAgXSxcclxuICAgICAgbmFtZTogXCJD0YvRgCDQmtC+0LfQuNC5INCS0LDQu9Cw0L3RgdC1XCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICBcItCk0YDQsNC90YbRg9C30YHQutC40Lkg0YHRi9GAINC40Lcg0LzQvtC70L7QutCwINC60L7Qt9GLINC/0YDQvtC00L7Qu9Cz0L7QstCw0YLQvtC5INGE0L7RgNC80YssINC40LzQtdGO0YnQuNC5INGB0LLQtdC20LjQuSDRgNC10LfQutC40Lkg0LfQsNC/0LDRhSDQuCDQvdC10LbQvdGL0Lkg0YHQu9C40LLQvtGH0L3Ri9C5INCy0LrRg9GBINCyINGB0LXRgNC10LTQuNC90LUg0Lgg0L/QuNC60LDQvdGC0L3Ri9C5INCy0LrRg9GBINGDINC60L7RgNC+0YfQutC4LCDQv9C+0LrRgNGL0YLQvtC5INC70LXQs9C60L7QuSDQsdC10LvQvtC5INC/0LvQtdGB0LXQvdGM0Y4uXCIsXHJcbiAgICAgIGFkZGl0aW9uOiBcItGBINCx0LXQu9C+0Lkg0L/Qu9C10YHQtdC90YzRjlwiLFxyXG4gICAgICB3ZWlnaHQ6IFwiMjAwINCz0YBcIixcclxuICAgICAgcHJpY2U6IDUwMCxcclxuICAgICAgdGFzdGVzOiBbXCJ3aGl0ZS13aW5lXCIsIFwidmVnZXRhYmxlc1wiXSxcclxuICAgICAgbGluazogXCIvY2FyZFwiLFxyXG4gICAgICBpZDogMyxcclxuICAgfSxcclxuICAge1xyXG4gICAgICBzdGF0dXM6IFwicHJlcGFyaW5nXCIsXHJcbiAgICAgIGFsbFN0YXR1czogW1xyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiYXZhbGlhYmxlXCIsXHJcbiAgICAgICAgICAgIGNvdW50OiAyMCxcclxuICAgICAgICAgfSxcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcInByZXBhcmluZ1wiLFxyXG4gICAgICAgICAgICBjb3VudDogMTUsXHJcbiAgICAgICAgICAgIGRhdGU6IFwiMTUuMDguMjAyMVwiLFxyXG4gICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICBpbWFnZTogXCIvc3RhdGljL2ltZy9jb250ZW50L2J1c2hEZVNoZXZyLnBuZ1wiLFxyXG4gICAgICBnYWxsZXJ5OiBbXHJcbiAgICAgICAgIFwiL3N0YXRpYy9pbWcvY29udGVudC9idXNoRGVTaGV2ci5wbmdcIixcclxuICAgICAgICAgXCIvc3RhdGljL2ltZy9jb250ZW50L3NsaWRlLTEuanBnXCIsXHJcbiAgICAgICAgIFwiL3N0YXRpYy9pbWcvY29udGVudC9yZWNpcGUtMi5qcGdcIixcclxuICAgICAgICAgXCIvc3RhdGljL2ltZy9jb250ZW50L3JlY2lwZS0zLmpwZ1wiLFxyXG4gICAgICBdLFxyXG4gICAgICBuYW1lOiBcItCR0Y7RiCDQtNC1INGI0LXQstGAXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICBcItCk0YDQsNC90YbRg9C30YHQutC40Lkg0YHRi9GAINC40Lcg0LzQvtC70L7QutCwINC60L7Qt9GLINC/0YDQvtC00L7Qu9Cz0L7QstCw0YLQvtC5INGE0L7RgNC80YssINC40LzQtdGO0YnQuNC5INGB0LLQtdC20LjQuSDRgNC10LfQutC40Lkg0LfQsNC/0LDRhSDQuCDQvdC10LbQvdGL0Lkg0YHQu9C40LLQvtGH0L3Ri9C5INCy0LrRg9GBINCyINGB0LXRgNC10LTQuNC90LUg0Lgg0L/QuNC60LDQvdGC0L3Ri9C5INCy0LrRg9GBINGDINC60L7RgNC+0YfQutC4LCDQv9C+0LrRgNGL0YLQvtC5INC70LXQs9C60L7QuSDQsdC10LvQvtC5INC/0LvQtdGB0LXQvdGM0Y4uXCIsXHJcbiAgICAgIHdlaWdodDogXCIyMDAg0LPRgFwiLFxyXG4gICAgICBwcmljZTogNTAwLFxyXG4gICAgICB0YXN0ZXM6IFtcIndoaXRlLXdpbmVcIiwgXCJ2ZWdldGFibGVzXCJdLFxyXG4gICAgICBsaW5rOiBcIi9jYXJkXCIsXHJcbiAgICAgIGlkOiA0LFxyXG4gICB9LFxyXG4gICB7XHJcbiAgICAgIHN0YXR1czogXCJhdmFsaWFibGVcIixcclxuICAgICAgYWxsU3RhdHVzOiBbXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJhdmFsaWFibGVcIixcclxuICAgICAgICAgICAgY291bnQ6IDIwLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwicHJlcGFyaW5nXCIsXHJcbiAgICAgICAgICAgIGNvdW50OiAxNSxcclxuICAgICAgICAgICAgZGF0ZTogXCIxNS4wOC4yMDIxXCIsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIGltYWdlOiBcIi9zdGF0aWMvaW1nL2NvbnRlbnQvbW96emFyZWxsYS5wbmdcIixcclxuICAgICAgZ2FsbGVyeTogW1xyXG4gICAgICAgICBcIi9zdGF0aWMvaW1nL2NvbnRlbnQvbW96emFyZWxsYS5wbmdcIixcclxuICAgICAgICAgXCIvc3RhdGljL2ltZy9jb250ZW50L3NsaWRlLTEuanBnXCIsXHJcbiAgICAgICAgIFwiL3N0YXRpYy9pbWcvY29udGVudC9yZWNpcGUtMi5qcGdcIixcclxuICAgICAgICAgXCIvc3RhdGljL2ltZy9jb250ZW50L3JlY2lwZS0zLmpwZ1wiLFxyXG4gICAgICBdLFxyXG4gICAgICBuYW1lOiBcItCc0L7RhtCw0YDQtdC70LvQsFwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgXCLQpNGA0LDQvdGG0YPQt9GB0LrQuNC5INGB0YvRgCDQuNC3INC80L7Qu9C+0LrQsCDQutC+0LfRiyDQv9GA0L7QtNC+0LvQs9C+0LLQsNGC0L7QuSDRhNC+0YDQvNGLLCDQuNC80LXRjtGJ0LjQuSDRgdCy0LXQttC40Lkg0YDQtdC30LrQuNC5INC30LDQv9Cw0YUg0Lgg0L3QtdC20L3Ri9C5INGB0LvQuNCy0L7Rh9C90YvQuSDQstC60YPRgSDQsiDRgdC10YDQtdC00LjQvdC1INC4INC/0LjQutCw0L3RgtC90YvQuSDQstC60YPRgSDRgyDQutC+0YDQvtGH0LrQuCwg0L/QvtC60YDRi9GC0L7QuSDQu9C10LPQutC+0Lkg0LHQtdC70L7QuSDQv9C70LXRgdC10L3RjNGOLlwiLFxyXG4gICAgICB3ZWlnaHQ6IFwiMjAwINCz0YBcIixcclxuICAgICAgcHJpY2U6IDUwMCxcclxuICAgICAgbGluazogXCIvY2FyZFwiLFxyXG4gICAgICBpZDogMjksXHJcbiAgIH0sXHJcbiAgIHtcclxuICAgICAgc3RhdHVzOiBcIm5vdC1hdmFsaWFibGVcIixcclxuICAgICAgYWxsU3RhdHVzOiBbXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJhdmFsaWFibGVcIixcclxuICAgICAgICAgICAgY291bnQ6IDIwLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwicHJlcGFyaW5nXCIsXHJcbiAgICAgICAgICAgIGNvdW50OiAxNSxcclxuICAgICAgICAgICAgZGF0ZTogXCIxNS4wOC4yMDIxXCIsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIGltYWdlOiBcIi9zdGF0aWMvaW1nL2NvbnRlbnQvYnVyYXR0YS5wbmdcIixcclxuICAgICAgZ2FsbGVyeTogW1xyXG4gICAgICAgICBcIi9zdGF0aWMvaW1nL2NvbnRlbnQvYnVyYXR0YS5wbmdcIixcclxuICAgICAgICAgXCIvc3RhdGljL2ltZy9jb250ZW50L3NsaWRlLTEuanBnXCIsXHJcbiAgICAgICAgIFwiL3N0YXRpYy9pbWcvY29udGVudC9yZWNpcGUtMi5qcGdcIixcclxuICAgICAgICAgXCIvc3RhdGljL2ltZy9jb250ZW50L3JlY2lwZS0zLmpwZ1wiLFxyXG4gICAgICBdLFxyXG4gICAgICBuYW1lOiBcItCR0YPRgNCw0YLRgtCwXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICBcItCk0YDQsNC90YbRg9C30YHQutC40Lkg0YHRi9GAINC40Lcg0LzQvtC70L7QutCwINC60L7Qt9GLINC/0YDQvtC00L7Qu9Cz0L7QstCw0YLQvtC5INGE0L7RgNC80YssINC40LzQtdGO0YnQuNC5INGB0LLQtdC20LjQuSDRgNC10LfQutC40Lkg0LfQsNC/0LDRhSDQuCDQvdC10LbQvdGL0Lkg0YHQu9C40LLQvtGH0L3Ri9C5INCy0LrRg9GBINCyINGB0LXRgNC10LTQuNC90LUg0Lgg0L/QuNC60LDQvdGC0L3Ri9C5INCy0LrRg9GBINGDINC60L7RgNC+0YfQutC4LCDQv9C+0LrRgNGL0YLQvtC5INC70LXQs9C60L7QuSDQsdC10LvQvtC5INC/0LvQtdGB0LXQvdGM0Y4uXCIsXHJcbiAgICAgIHdlaWdodDogXCIyMDAg0LPRgFwiLFxyXG4gICAgICBwcmljZTogNTAwLFxyXG4gICAgICB0YXN0ZXM6IFtcIndoaXRlLXdpbmVcIiwgXCJ2ZWdldGFibGVzXCJdLFxyXG4gICAgICBsaW5rOiBcIi9jYXJkXCIsXHJcbiAgICAgIGlkOiAxOCxcclxuICAgfSxcclxuICAge1xyXG4gICAgICBzdGF0dXM6IFwiYXZhbGlhYmxlXCIsXHJcbiAgICAgIGFsbFN0YXR1czogW1xyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiYXZhbGlhYmxlXCIsXHJcbiAgICAgICAgICAgIGNvdW50OiAyMCxcclxuICAgICAgICAgfSxcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcInByZXBhcmluZ1wiLFxyXG4gICAgICAgICAgICBjb3VudDogMTUsXHJcbiAgICAgICAgICAgIGRhdGU6IFwiMTUuMDguMjAyMVwiLFxyXG4gICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICBpbWFnZTogXCIvc3RhdGljL2ltZy9jb250ZW50L3N0cmFjaGVsbGEucG5nXCIsXHJcbiAgICAgIGdhbGxlcnk6IFtcclxuICAgICAgICAgXCIvc3RhdGljL2ltZy9jb250ZW50L3N0cmFjaGVsbGEucG5nXCIsXHJcbiAgICAgICAgIFwiL3N0YXRpYy9pbWcvY29udGVudC9zbGlkZS0xLmpwZ1wiLFxyXG4gICAgICAgICBcIi9zdGF0aWMvaW1nL2NvbnRlbnQvcmVjaXBlLTIuanBnXCIsXHJcbiAgICAgICAgIFwiL3N0YXRpYy9pbWcvY29udGVudC9yZWNpcGUtMy5qcGdcIixcclxuICAgICAgXSxcclxuICAgICAgbmFtZTogXCLQodGC0YDQsNGH0LXQu9C70LBcIixcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgIFwi0KTRgNCw0L3RhtGD0LfRgdC60LjQuSDRgdGL0YAg0LjQtyDQvNC+0LvQvtC60LAg0LrQvtC30Ysg0L/RgNC+0LTQvtC70LPQvtCy0LDRgtC+0Lkg0YTQvtGA0LzRiywg0LjQvNC10Y7RidC40Lkg0YHQstC10LbQuNC5INGA0LXQt9C60LjQuSDQt9Cw0L/QsNGFINC4INC90LXQttC90YvQuSDRgdC70LjQstC+0YfQvdGL0Lkg0LLQutGD0YEg0LIg0YHQtdGA0LXQtNC40L3QtSDQuCDQv9C40LrQsNC90YLQvdGL0Lkg0LLQutGD0YEg0YMg0LrQvtGA0L7Rh9C60LgsINC/0L7QutGA0YvRgtC+0Lkg0LvQtdCz0LrQvtC5INCx0LXQu9C+0Lkg0L/Qu9C10YHQtdC90YzRji5cIixcclxuICAgICAgd2VpZ2h0OiBcIjIwMCDQs9GAXCIsXHJcbiAgICAgIHByaWNlOiA1MDAsXHJcbiAgICAgIHRhc3RlczogW1wid2hpdGUtd2luZVwiLCBcInZlZ2V0YWJsZXNcIl0sXHJcbiAgICAgIGxpbms6IFwiL2NhcmRcIixcclxuICAgICAgaWQ6IDcsXHJcbiAgIH0sXHJcbiAgIHtcclxuICAgICAgc3RhdHVzOiBcInByZXBhcmluZ1wiLFxyXG4gICAgICBhbGxTdGF0dXM6IFtcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcImF2YWxpYWJsZVwiLFxyXG4gICAgICAgICAgICBjb3VudDogMjAsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJwcmVwYXJpbmdcIixcclxuICAgICAgICAgICAgY291bnQ6IDE1LFxyXG4gICAgICAgICAgICBkYXRlOiBcIjE1LjA4LjIwMjFcIixcclxuICAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgaW1hZ2U6IFwiL3N0YXRpYy9pbWcvY29udGVudC9idXNoRGVTaGV2ci5wbmdcIixcclxuICAgICAgZ2FsbGVyeTogW1xyXG4gICAgICAgICBcIi9zdGF0aWMvaW1nL2NvbnRlbnQvYnVzaERlU2hldnIucG5nXCIsXHJcbiAgICAgICAgIFwiL3N0YXRpYy9pbWcvY29udGVudC9zbGlkZS0xLmpwZ1wiLFxyXG4gICAgICAgICBcIi9zdGF0aWMvaW1nL2NvbnRlbnQvcmVjaXBlLTIuanBnXCIsXHJcbiAgICAgICAgIFwiL3N0YXRpYy9pbWcvY29udGVudC9yZWNpcGUtMy5qcGdcIixcclxuICAgICAgXSxcclxuICAgICAgbmFtZTogXCLQkdGO0Ygg0LTQtSDRiNC10LLRgFwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgXCLQpNGA0LDQvdGG0YPQt9GB0LrQuNC5INGB0YvRgCDQuNC3INC80L7Qu9C+0LrQsCDQutC+0LfRiyDQv9GA0L7QtNC+0LvQs9C+0LLQsNGC0L7QuSDRhNC+0YDQvNGLLCDQuNC80LXRjtGJ0LjQuSDRgdCy0LXQttC40Lkg0YDQtdC30LrQuNC5INC30LDQv9Cw0YUg0Lgg0L3QtdC20L3Ri9C5INGB0LvQuNCy0L7Rh9C90YvQuSDQstC60YPRgSDQsiDRgdC10YDQtdC00LjQvdC1INC4INC/0LjQutCw0L3RgtC90YvQuSDQstC60YPRgSDRgyDQutC+0YDQvtGH0LrQuCwg0L/QvtC60YDRi9GC0L7QuSDQu9C10LPQutC+0Lkg0LHQtdC70L7QuSDQv9C70LXRgdC10L3RjNGOLlwiLFxyXG4gICAgICB3ZWlnaHQ6IFwiMjAwINCz0YBcIixcclxuICAgICAgcHJpY2U6IDUwMCxcclxuICAgICAgdGFzdGVzOiBbXCJ3aGl0ZS13aW5lXCIsIFwidmVnZXRhYmxlc1wiXSxcclxuICAgICAgbGluazogXCIvY2FyZFwiLFxyXG4gICAgICBpZDogNDAsXHJcbiAgIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgQkFTRV9VUkwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAxLyc7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gXCJAY29tcG9uZW50cy9Db21tb24vSGVhZGVyL0hlYWRlclwiO1xyXG5pbXBvcnQgeyBEZXNjcmlwdGlvblNlY3Rpb24gfSBmcm9tIFwiQGNvbXBvbmVudHMvU2VjdGlvbnMvQ2FyZC9EZXNjcmlwdGlvblNlY3Rpb24vRGVzY3JpcHRpb25TZWN0aW9uXCI7XHJcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gXCJAY29tcG9uZW50cy9Db21tb24vRm9vdGVyL0Zvb3RlclwiO1xyXG5cclxuaW1wb3J0IFByb2R1Y3RzQVBJIGZyb20gJ3NyYy9hcGkvUHJvZHVjdHNBUEknO1xyXG5cclxuaW1wb3J0IGcgZnJvbSBcInNyYy9zdHlsZXMvTWFpbi5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuY29uc3QgY2FyZCA9ICh7IGlkLCBwcm9kdWN0LCBwcm9kdWN0cyB9KSA9PiB7XHJcbiAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgIDxIZWFkPjwvSGVhZD5cclxuICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICA8bWFpbiBjbGFzc05hbWU9e2Nsc3goZy5tYWluLCBnLnB0KX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtnLndyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICA8RGVzY3JpcHRpb25TZWN0aW9uIHByb2R1Y3Q9e3Byb2R1Y3R9IHByb2R1Y3RzPXtwcm9kdWN0c30gaWQ9e2lkfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgIDwvPlxyXG4gICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2FyZDtcclxuXHJcbmNvbnN0IGdldFByb2R1Y3RzID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBQcm9kdWN0c0FQSS5nZXRQcm9kdWN0KGlkKTtcclxuICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBQcm9kdWN0c0FQSS5nZXRQcm9kdWN0cygpO1xyXG4gICByZXR1cm4ge3Byb2R1Y3QsIHByb2R1Y3RzfTtcclxufTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChhcHBDb250ZXh0KSA9PiB7XHJcbiAgIGNvbnN0IHtwcm9kdWN0LCBwcm9kdWN0c30gPSBhd2FpdCBnZXRQcm9kdWN0cyhhcHBDb250ZXh0LnF1ZXJ5LmlkKTtcclxuICAgcmV0dXJuIHsgcHJvcHM6IHsgaWQ6IGFwcENvbnRleHQucXVlcnkuaWQsIHByb2R1Y3QsIHByb2R1Y3RzIH0gfTtcclxufTtcclxuXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRhYlwiOiBcIkFjY29yZGlvbl90YWJfXzJuRlZBXCIsXG5cdFwidHJpZ2dlclwiOiBcIkFjY29yZGlvbl90cmlnZ2VyX18zSGFFWlwiLFxuXHRcInRyaWdnZXJfb3BlblwiOiBcIkFjY29yZGlvbl90cmlnZ2VyX29wZW5fXzNCdmtjXCIsXG5cdFwiY29udGVudFwiOiBcIkFjY29yZGlvbl9jb250ZW50X18tSHVwOFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiQmFja0J1dHRvbl9jb250YWluZXJfXzNEWHlKXCIsXG5cdFwiYnV0dG9uXCI6IFwiQmFja0J1dHRvbl9idXR0b25fXzF5WjNqXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWN0XCI6IFwiRm9vdGVyX2NvbnRhY3RfXzIwM2Z0XCIsXG5cdFwibGlua1wiOiBcIkZvb3Rlcl9saW5rX18zTVhwWVwiLFxuXHRcImZvb3RlclwiOiBcIkZvb3Rlcl9mb290ZXJfXzhkOVFuXCIsXG5cdFwiY29udGFpbmVyXCI6IFwiRm9vdGVyX2NvbnRhaW5lcl9fMUIxUmFcIixcblx0XCJibG9ja1wiOiBcIkZvb3Rlcl9ibG9ja19fMmU0dWtcIixcblx0XCJtZW51XCI6IFwiRm9vdGVyX21lbnVfX1JpUl9qXCIsXG5cdFwiaW5mb1wiOiBcIkZvb3Rlcl9pbmZvX18yeDZlTVwiLFxuXHRcImFkZHJlc3NcIjogXCJGb290ZXJfYWRkcmVzc19fM0FnQk1cIixcblx0XCJjb250YWN0c1wiOiBcIkZvb3Rlcl9jb250YWN0c19fM3BvVU9cIixcblx0XCJhc2FwXCI6IFwiRm9vdGVyX2FzYXBfXzN0VDRhXCIsXG5cdFwiY29ycFwiOiBcIkZvb3Rlcl9jb3JwX18yWExFd1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udHJvbFwiOiBcIkhlYWRlcl9jb250cm9sX18zazFJNFwiLFxuXHRcImJsb2NrXCI6IFwiSGVhZGVyX2Jsb2NrX18zSDdLRlwiLFxuXHRcImxvZ29cIjogXCJIZWFkZXJfbG9nb19fMmZFZnBcIixcblx0XCJuYXZcIjogXCJIZWFkZXJfbmF2X18zR2VkUVwiLFxuXHRcImNvbnRhaW5lclwiOiBcIkhlYWRlcl9jb250YWluZXJfXzItMGpoXCIsXG5cdFwiYnV0dG9uXCI6IFwiSGVhZGVyX2J1dHRvbl9fNnFGNkpcIixcblx0XCJsaW5rXCI6IFwiSGVhZGVyX2xpbmtfXzFnT25lXCIsXG5cdFwiaGVhZGVyXCI6IFwiSGVhZGVyX2hlYWRlcl9fMi1manFcIixcblx0XCJib3JkZXJfYWNjZW50XCI6IFwiSGVhZGVyX2JvcmRlcl9hY2NlbnRfXzJqLWRwXCIsXG5cdFwibGlua19hY2NlbnRcIjogXCJIZWFkZXJfbGlua19hY2NlbnRfXzNKeHJ2XCIsXG5cdFwiYnV0dG9uX2FjY2VudFwiOiBcIkhlYWRlcl9idXR0b25fYWNjZW50X18yV1NTTFwiLFxuXHRcImxvZ29fYWNjZW50XCI6IFwiSGVhZGVyX2xvZ29fYWNjZW50X18xSFFCZVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibW9yZVwiOiBcIlByb2R1Y3RfbW9yZV9fSllJSFFcIixcblx0XCJhZGRcIjogXCJQcm9kdWN0X2FkZF9fMWtTbkdcIixcblx0XCJjYXJkXCI6IFwiUHJvZHVjdF9jYXJkX18xaDduU1wiLFxuXHRcImluZm9cIjogXCJQcm9kdWN0X2luZm9fXzFTZzk3XCIsXG5cdFwiY2FyZF9zbGlkZXJcIjogXCJQcm9kdWN0X2NhcmRfc2xpZGVyX185ZDFuWlwiLFxuXHRcImltYWdlXCI6IFwiUHJvZHVjdF9pbWFnZV9fMUZ5d1NcIixcblx0XCJuYW1lXCI6IFwiUHJvZHVjdF9uYW1lX18zV2laS1wiLFxuXHRcImFkZGl0aW9uXCI6IFwiUHJvZHVjdF9hZGRpdGlvbl9fMnNwb1FcIixcblx0XCJ3ZWlnaHRcIjogXCJQcm9kdWN0X3dlaWdodF9fMkg5Y0xcIixcblx0XCJwcmljZVwiOiBcIlByb2R1Y3RfcHJpY2VfX2tGUDVkXCIsXG5cdFwid2VsbFwiOiBcIlByb2R1Y3Rfd2VsbF9fMnMxQzNcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInByb2R1Y3Rfc2xpZGVcIjogXCJTbGlkZXJfcHJvZHVjdF9zbGlkZV9fM1Z4RHNcIixcblx0XCJyZWNpcGVfc2xpZGVcIjogXCJTbGlkZXJfcmVjaXBlX3NsaWRlX18ycWlkZVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibmF2XCI6IFwiU2xpZGVyTmF2X25hdl9fMThfRS1cIixcblx0XCJjb250YWluZXJcIjogXCJTbGlkZXJOYXZfY29udGFpbmVyX18zRDh5c1wiLFxuXHRcImhlYWRlclwiOiBcIlNsaWRlck5hdl9oZWFkZXJfXzFIUkdRXCIsXG5cdFwiY291bnRlclwiOiBcIlNsaWRlck5hdl9jb3VudGVyX18zcHpOWVwiLFxuXHRcImNvdW50ZXJfX2FsbFwiOiBcIlNsaWRlck5hdl9jb3VudGVyX19hbGxfXzNzNUZPXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJkZWxpdmVyeVwiOiBcIlB1cmNoYXNlQ29udHJvbF9kZWxpdmVyeV9fM3FsQTVcIixcblx0XCJjb3VudGVyXCI6IFwiUHVyY2hhc2VDb250cm9sX2NvdW50ZXJfXzFDSV9jXCIsXG5cdFwiY29udGFpbmVyXCI6IFwiUHVyY2hhc2VDb250cm9sX2NvbnRhaW5lcl9fNjJBSkZcIixcblx0XCJmYXZvcml0ZVwiOiBcIlB1cmNoYXNlQ29udHJvbF9mYXZvcml0ZV9fMWdqS1JcIixcblx0XCJjb3VudFwiOiBcIlB1cmNoYXNlQ29udHJvbF9jb3VudF9fUm9jQVhcIixcblx0XCJjaGFuZ2VcIjogXCJQdXJjaGFzZUNvbnRyb2xfY2hhbmdlX18zVXNKT1wiLFxuXHRcIm1pbnVzXCI6IFwiUHVyY2hhc2VDb250cm9sX21pbnVzX18zTzJucVwiLFxuXHRcInBsdXNcIjogXCJQdXJjaGFzZUNvbnRyb2xfcGx1c19fM29NVkVcIixcblx0XCJhZGRcIjogXCJQdXJjaGFzZUNvbnRyb2xfYWRkX18xNmVfV1wiLFxuXHRcInRleHRcIjogXCJQdXJjaGFzZUNvbnRyb2xfdGV4dF9fM2ItMXNcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlRodW1ibmFpbHNfY29udGFpbmVyX18zXzEzUVwiLFxuXHRcInByZXZpZXdcIjogXCJUaHVtYm5haWxzX3ByZXZpZXdfXzJoMHNmXCIsXG5cdFwibWluaVwiOiBcIlRodW1ibmFpbHNfbWluaV9fb1V3aVFcIixcblx0XCJhY3RpdmVcIjogXCJUaHVtYm5haWxzX2FjdGl2ZV9fMzJtMHBcIixcblx0XCJtYWluXCI6IFwiVGh1bWJuYWlsc19tYWluX18xb2R2Z1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidGFzdGVcIjogXCJUYXN0ZXNTVkdfdGFzdGVfXzJkNVdpXCIsXG5cdFwiYWNjZW50XCI6IFwiVGFzdGVzU1ZHX2FjY2VudF9fUkRBWGdcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkRlc2NyaXB0aW9uU2VjdGlvbl9jb250YWluZXJfX2htbTA3XCIsXG5cdFwidGl0bGVcIjogXCJEZXNjcmlwdGlvblNlY3Rpb25fdGl0bGVfXzlKbmtWXCIsXG5cdFwic3RhdHVzZXNcIjogXCJEZXNjcmlwdGlvblNlY3Rpb25fc3RhdHVzZXNfXzNVSkphXCIsXG5cdFwiaW5mb1wiOiBcIkRlc2NyaXB0aW9uU2VjdGlvbl9pbmZvX19JVWFyb1wiLFxuXHRcInByaWNlXCI6IFwiRGVzY3JpcHRpb25TZWN0aW9uX3ByaWNlX18zamtXVlwiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiRGVzY3JpcHRpb25TZWN0aW9uX2Rlc2NyaXB0aW9uX18xUU5qUlwiLFxuXHRcIndpdGhcIjogXCJEZXNjcmlwdGlvblNlY3Rpb25fd2l0aF9fZm1oWWdcIixcblx0XCJ0YXN0ZXNcIjogXCJEZXNjcmlwdGlvblNlY3Rpb25fdGFzdGVzX19wMzRpb1wiLFxuXHRcImFib3V0XCI6IFwiRGVzY3JpcHRpb25TZWN0aW9uX2Fib3V0X18xbFJ5T1wiLFxuXHRcInByb2R1Y3RzXCI6IFwiRGVzY3JpcHRpb25TZWN0aW9uX3Byb2R1Y3RzX18yTDU1UlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic3RhdHVzXCI6IFwiTWFpbl9zdGF0dXNfX1RBN0FkXCIsXG5cdFwibm90LWF2YWxpYWJsZVwiOiBcIk1haW5fbm90LWF2YWxpYWJsZV9fM0w2Q0JcIixcblx0XCJwcmVwYXJpbmdcIjogXCJNYWluX3ByZXBhcmluZ19fMUhxU3hcIixcblx0XCJhdmFsaWFibGVcIjogXCJNYWluX2F2YWxpYWJsZV9fMURyOFFcIixcblx0XCJtb2RhbFwiOiBcIk1haW5fbW9kYWxfXzNtVGd1XCIsXG5cdFwibW9kYWxfX2Nsb3NlXCI6IFwiTWFpbl9tb2RhbF9fY2xvc2VfXzFkdWQ5XCIsXG5cdFwibWFpblwiOiBcIk1haW5fbWFpbl9fMS1Ta2pcIixcblx0XCJ3cmFwcGVyXCI6IFwiTWFpbl93cmFwcGVyX19PT3AyclwiLFxuXHRcIm1vZGFsX19ib3hcIjogXCJNYWluX21vZGFsX19ib3hfX2g3cEhyXCIsXG5cdFwiaXRhbGljXCI6IFwiTWFpbl9pdGFsaWNfXzFzLXRQXCIsXG5cdFwibnVtYmVyc1wiOiBcIk1haW5fbnVtYmVyc19fQTBubURcIixcblx0XCJmbGV4XCI6IFwiTWFpbl9mbGV4X18xelVzaFwiLFxuXHRcInB0XCI6IFwiTWFpbl9wdF9fMmlnWWJcIixcblx0XCJ0aXRsZVwiOiBcIk1haW5fdGl0bGVfXzFib0NGXCJcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xzeFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNvbGxhcHNpYmxlXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzd2lwZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3aXBlci9yZWFjdFwiKTs7IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==