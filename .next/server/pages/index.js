(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
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

/***/ "./src/api/_instagram.js":
/*!*******************************!*\
  !*** ./src/api/_instagram.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_instagram": function() { return /* binding */ _instagram; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

async function _instagram() {
  const instance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: "https://graph.instagram.com/"
  });

  let _token = localStorage.getItem("instagramToken") || "IGQVJVX1o0dG5oUWZAuNDVuT2FhbkdnbVk0c2Vyc0VCZATJoQkFoRm83cmFwb3ZA0a20wNm5yd0ZA4ekxBdlhJYXdRcWF5LTdDbDVjX1hMOUdnMVlXQWtNQks3aXZA6em1BRnBOc1pjbVpNUEVEaldONE5JegZDZD";

  const {
    data: {
      access_token
    }
  } = await instance.get(`/refresh_access_token?grant_type=ig_refresh_token&access_token=${_token}`);
  localStorage.setItem("instagramToken", access_token);
  const {
    data: {
      data
    }
  } = await instance.get(`/me/media?fields=media_url,timestamp,permalink,media_type,thumbnail_url,caption&edges=media&access_token=${access_token}`);
  return data;
}

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

/***/ "./src/components/Common/Instagram/Instagram.jsx":
/*!*******************************************************!*\
  !*** ./src/components/Common/Instagram/Instagram.jsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Instagram": function() { return /* binding */ Instagram; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Instagram_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Instagram.module.scss */ "./src/components/Common/Instagram/Instagram.module.scss");
/* harmony import */ var _Instagram_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Instagram_module_scss__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\\u042E\u0437\u0435\u0440\\Desktop\\\u0421\u0430\u0439\u0442\u044B\\ko-cheese-react\\src\\components\\Common\\Instagram\\Instagram.jsx";


const Instagram = ({
  url,
  image,
  user,
  date,
  text,
  videoCover
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
    href: url,
    target: "_blank",
    className: (_Instagram_module_scss__WEBPACK_IMPORTED_MODULE_2___default().post),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Instagram_module_scss__WEBPACK_IMPORTED_MODULE_2___default().header),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_Instagram_module_scss__WEBPACK_IMPORTED_MODULE_2___default().info),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: (_Instagram_module_scss__WEBPACK_IMPORTED_MODULE_2___default().user),
          children: user
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: (_Instagram_module_scss__WEBPACK_IMPORTED_MODULE_2___default().date),
          children: date
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: (_Instagram_module_scss__WEBPACK_IMPORTED_MODULE_2___default().icon),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
            d: "M20 0H4C2.93913 0 1.92172 0.421427 1.17157 1.17157C0.421427 1.92172 0 2.93913 0 4L0 20C0 21.0609 0.421427 22.0783 1.17157 22.8284C1.92172 23.5786 2.93913 24 4 24H20C21.0609 24 22.0783 23.5786 22.8284 22.8284C23.5786 22.0783 24 21.0609 24 20V4C24 2.93913 23.5786 1.92172 22.8284 1.17157C22.0783 0.421427 21.0609 0 20 0V0ZM22 20C22 20.5304 21.7893 21.0391 21.4142 21.4142C21.0391 21.7893 20.5304 22 20 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H20C20.5304 2 21.0391 2.21071 21.4142 2.58579C21.7893 2.96086 22 3.46957 22 4V20Z",
            fill: "#184240"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
            d: "M12 6C10.8133 6 9.65328 6.35189 8.66658 7.01118C7.67989 7.67047 6.91085 8.60754 6.45673 9.7039C6.0026 10.8003 5.88378 12.0067 6.11529 13.1705C6.3468 14.3344 6.91825 15.4035 7.75736 16.2426C8.59648 17.0818 9.66558 17.6532 10.8295 17.8847C11.9933 18.1162 13.1997 17.9974 14.2961 17.5433C15.3925 17.0892 16.3295 16.3201 16.9888 15.3334C17.6481 14.3467 18 13.1867 18 12C18 10.4087 17.3679 8.88258 16.2426 7.75736C15.1174 6.63214 13.5913 6 12 6ZM12 16C11.2089 16 10.4355 15.7654 9.77772 15.3259C9.11993 14.8864 8.60723 14.2616 8.30448 13.5307C8.00173 12.7998 7.92252 11.9956 8.07686 11.2196C8.2312 10.4437 8.61217 9.73098 9.17158 9.17157C9.73099 8.61216 10.4437 8.2312 11.2196 8.07686C11.9956 7.92252 12.7998 8.00173 13.5307 8.30448C14.2616 8.60723 14.8864 9.11992 15.3259 9.77772C15.7654 10.4355 16 11.2089 16 12C16 13.0609 15.5786 14.0783 14.8284 14.8284C14.0783 15.5786 13.0609 16 12 16Z",
            fill: "#184240"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
            d: "M18.5 7C19.3284 7 20 6.32843 20 5.5C20 4.67157 19.3284 4 18.5 4C17.6716 4 17 4.67157 17 5.5C17 6.32843 17.6716 7 18.5 7Z",
            fill: "#184240"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      src: videoCover ? videoCover : image,
      alt: user,
      className: (_Instagram_module_scss__WEBPACK_IMPORTED_MODULE_2___default().image)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_Instagram_module_scss__WEBPACK_IMPORTED_MODULE_2___default().text),
      children: text
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
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

/***/ "./src/components/Common/Recipe/Recipe.jsx":
/*!*************************************************!*\
  !*** ./src/components/Common/Recipe/Recipe.jsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Recipe": function() { return /* binding */ Recipe; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Recipe_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Recipe.module.scss */ "./src/components/Common/Recipe/Recipe.module.scss");
/* harmony import */ var _Recipe_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Recipe_module_scss__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\\u042E\u0437\u0435\u0440\\Desktop\\\u0421\u0430\u0439\u0442\u044B\\ko-cheese-react\\src\\components\\Common\\Recipe\\Recipe.jsx";




const Recipe = ({
  image,
  name,
  text,
  url
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_Recipe_module_scss__WEBPACK_IMPORTED_MODULE_4___default().card)),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      src: image,
      alt: "",
      className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_Recipe_module_scss__WEBPACK_IMPORTED_MODULE_4___default().image))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_Recipe_module_scss__WEBPACK_IMPORTED_MODULE_4___default().name)),
      children: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_Recipe_module_scss__WEBPACK_IMPORTED_MODULE_4___default().text)),
      children: text
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
      href: url,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_Recipe_module_scss__WEBPACK_IMPORTED_MODULE_4___default().link)),
        children: "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 10
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
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

/***/ "./src/components/SVG/PartnersSVG.jsx":
/*!********************************************!*\
  !*** ./src/components/SVG/PartnersSVG.jsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbLogo": function() { return /* binding */ AbLogo; },
/* harmony export */   "UsachevLogo": function() { return /* binding */ UsachevLogo; },
/* harmony export */   "VkusWillLogo": function() { return /* binding */ VkusWillLogo; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\\u042E\u0437\u0435\u0440\\Desktop\\\u0421\u0430\u0439\u0442\u044B\\ko-cheese-react\\src\\components\\SVG\\PartnersSVG.jsx";
const AbLogo = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
    width: "127",
    height: "38",
    viewBox: "0 0 127 38",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M23.0767 37.9997C17.2861 37.8967 11.6182 36.2882 6.71097 32.2862C3.9629 30.0342 1.85277 27.2547 0.760907 23.7416C-0.833956 18.5815 0.110694 13.8202 3.16547 9.53507C6.18344 5.30141 10.3055 2.71488 15.0779 1.29937C22.2425 -0.849628 29.2721 -0.373501 36.0196 3.04946C39.786 4.95396 42.9266 7.68204 44.9018 11.6069C47.9198 17.5777 47.3309 23.3299 43.4787 28.6573C40.2767 33.0969 35.8356 35.5804 30.7934 36.996C28.3888 37.678 25.9107 37.9611 23.0767 37.9997ZM35.4676 22.2232C33.7991 21.5154 32.1797 21.1937 30.4744 21.554C28.3643 21.9916 26.794 23.8317 26.7694 25.9035C26.7449 27.8337 28.1803 29.571 30.1923 30.0214C32.5968 30.5747 35.8847 29.1334 37.2465 26.9587C37.4059 26.7013 37.3691 26.5727 37.1851 26.3668C36.1546 25.2858 35.2222 25.2858 34.253 26.4182C33.5047 27.2933 32.5968 27.8595 31.4927 28.0782C29.5666 28.4643 28.1067 27.1775 28.3766 25.3373C28.5483 24.192 29.493 23.2526 30.7689 22.9824C32.5355 22.6092 34.0445 23.2655 35.3817 24.3593C36.5104 25.273 37.5532 26.3153 38.645 27.2804C39.4915 28.0268 40.4975 28.3485 41.6017 28.2584C41.7734 28.2455 42.0065 28.3227 42.0924 28.104C42.1537 27.9367 41.9942 27.7823 41.8838 27.6665C41.4299 27.2161 41.5771 26.8686 41.8961 26.3668C44.73 21.8886 45.0122 17.256 42.4604 12.5591C40.5098 8.96886 37.4918 6.61397 33.9341 5.0183C27.7877 2.26449 21.5064 2.07147 15.1269 4.10466C14.8693 4.18187 14.6362 4.27194 14.354 4.23334C13.0904 4.11753 11.8759 4.37489 10.6736 4.72233C10.1951 4.86388 10.2687 5.05691 10.5018 5.37862C11.1398 6.25366 11.8391 7.05149 12.6733 7.72064C14.2191 8.93026 15.8998 9.31631 17.7646 8.67289C18.1572 8.53134 18.2431 8.37692 17.9486 8.00374C17.0776 6.8842 15.9612 6.17645 14.6853 5.72606C14.5503 5.67459 14.4154 5.63598 14.2804 5.58451C14.1455 5.53303 13.986 5.53303 13.8633 5.28854C15.7158 5.62311 17.3352 6.22792 18.5007 7.9008C18.5743 7.20591 18.378 6.70405 18.1081 6.21505C17.8382 5.72606 17.3843 5.41722 16.9426 5.0183C17.2125 4.94109 17.4088 4.88962 17.6051 4.83815C20.3532 4.19473 23.1381 4.02745 25.9475 4.29768C29.6279 4.65799 33.0876 5.73893 36.2037 7.83646C39.7001 10.1913 42.2396 13.2926 42.7671 17.7965C43.1229 20.8077 42.2519 23.4971 40.5834 25.9421C39.9087 25.3502 39.283 24.7711 38.6328 24.2178C38.4365 24.0505 38.4242 23.8703 38.461 23.6516C38.5592 22.9824 38.4733 22.3261 38.3138 21.6827C37.7495 19.3664 36.3386 17.7322 34.5229 16.4196C34.3144 16.2652 34.0935 16.188 34.1794 15.789C34.5965 13.8845 33.9831 12.276 32.6827 10.9506C31.0388 9.2777 28.9777 8.59568 26.7694 8.29971C25.4077 8.11956 24.0336 8.14529 22.6719 8.29971C22.2548 8.35119 22.1198 8.2225 22.2057 7.78498C22.3038 7.32172 22.3529 6.85847 22.4265 6.39521C22.4633 6.17645 22.5001 5.97056 22.1689 5.95769C21.0279 5.93195 20.071 6.27939 19.4576 7.34746C19.2491 7.70777 19.0528 8.09382 18.8933 8.49274C18.7338 8.90452 18.4516 9.09754 18.0468 9.22623C16.1575 9.83104 14.3786 10.6803 12.7837 11.9157C12.477 12.1473 12.1335 12.3532 11.8881 12.9194C13.8388 12.2117 15.6177 11.4396 17.556 11.0535C17.5192 11.1822 17.4947 11.2594 17.4579 11.3366C15.7772 14.5794 14.0964 17.8094 12.4402 21.0522C12.2807 21.361 12.1212 21.3996 11.8145 21.3739C9.9007 21.2066 8.0114 21.2838 6.25705 22.2232C5.71725 22.5063 5.3124 22.9824 4.80941 23.3942C3.99971 21.3224 3.74207 19.2506 4.12239 17.1016C4.71126 13.7816 6.49015 11.2337 8.91924 9.12328C9.6676 8.467 10.5018 7.92653 11.3361 7.3732C10.5141 6.78126 9.72894 6.80699 8.8579 7.45041C8.02367 8.04235 7.2385 8.73723 6.53922 9.5222C2.8465 13.6915 1.5338 18.4142 3.57032 23.8832C3.82795 24.5652 4.14692 25.1829 4.08558 25.955C4.06105 26.2896 4.2328 26.6113 4.41682 26.9072C5.06704 27.9882 6.34293 28.49 7.70469 28.1941C9.72894 27.7565 11.1152 26.3539 12.3421 24.7325C12.6242 24.3593 12.9309 23.999 13.0904 23.4971C11.9372 23.2784 10.9926 23.4843 10.2933 24.5266C10.0356 24.9126 9.70441 25.2472 9.37317 25.5689C8.69842 26.2123 7.98686 26.7785 7.04221 26.8815C6.392 26.9587 5.80313 26.8043 5.44735 26.1737C5.09157 25.5303 5.28786 24.9255 5.68045 24.385C6.29385 23.5229 7.2017 23.1626 8.15862 22.9953C10.968 22.4934 13.6302 23.2012 16.2556 24.1663C16.5378 24.2692 16.5501 24.4237 16.501 24.7068C16.3047 25.7362 16.1329 26.7657 15.9734 27.808C15.9366 28.0139 15.8017 28.2841 16.1943 28.3099C17.7278 28.4128 19.1509 27.9753 19.4453 26.0837C19.4576 25.9807 19.4453 25.8263 19.5926 25.7491C19.6907 25.8006 19.8011 25.852 19.9115 25.9164C21.3101 26.6756 22.6964 27.4348 24.1072 28.1812C25.0642 28.6831 25.6162 28.3742 25.7512 27.3061C26.0211 25.2472 26.3278 23.2012 26.61 21.1422C26.6468 20.8463 26.7326 20.7047 27.0516 20.6661C29.1985 20.4088 31.2105 19.7782 32.8422 18.1825C33.0385 17.9895 33.1489 18.0796 33.2961 18.2211C34.4493 19.2506 35.2222 20.5246 35.4676 22.2232ZM39.8718 28.8117C39.0499 28.4514 38.3383 28.593 37.6758 29.0691C37.0992 29.4809 36.5594 29.9441 35.9583 30.3045C30.0328 33.9462 23.7024 34.6282 17.0898 33.0325C14.2682 32.3505 11.6796 31.1023 9.3609 29.2879C8.64935 28.7345 7.88872 28.4643 7.01768 28.9147C14.7344 37.1632 31.5418 37.5364 39.8718 28.8117Z",
      fill: "#FFF3E7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M112.634 14.4382C113.407 12.4179 114.131 10.5391 114.855 8.66032C115.431 7.15473 116.008 5.64914 116.597 4.14356C117.137 2.75378 117.578 2.45781 119.001 2.44494C119.468 2.44494 119.946 2.49642 120.412 2.43208C121.013 2.35487 121.296 2.5865 121.541 3.17844C123.283 7.37349 125.062 11.5428 126.853 15.725C127.074 16.2526 126.988 16.3684 126.461 16.3427C125.602 16.3041 124.743 16.2912 123.884 16.3427C123.344 16.3813 123.124 16.1497 122.964 15.6735C122.78 15.1331 122.535 14.6055 122.338 14.065C122.24 13.769 122.105 13.6275 121.774 13.6403C120.216 13.6661 118.67 13.6661 117.112 13.6403C116.756 13.6403 116.609 13.769 116.499 14.1036C116.364 14.5669 116.118 15.0172 116.008 15.4805C115.861 16.1625 115.517 16.3684 114.855 16.3427C113.26 16.2912 111.665 16.3041 110.07 16.3427C109.629 16.3555 109.42 16.1883 109.248 15.7765C108.88 14.85 108.475 13.9363 108.046 13.0355C107.543 11.9675 106.942 10.9637 105.727 10.642C105.592 10.6034 105.445 10.5906 105.31 10.5648C104.881 10.4876 104.697 10.6292 104.709 11.131C104.746 12.6495 104.709 14.1808 104.734 15.6993C104.746 16.1625 104.648 16.3555 104.169 16.3298C103.31 16.2912 102.452 16.3041 101.593 16.3298C101.249 16.3427 101.127 16.2269 101.127 15.8537C101.139 12.0961 101.114 8.35148 101.139 4.59395C101.151 3.22991 101.936 2.47068 103.237 2.44494C104.721 2.40634 104.721 2.40634 104.721 3.95053C104.721 5.04433 104.734 6.13814 104.709 7.23194C104.697 7.63086 104.844 7.72093 105.2 7.7338C106.095 7.75954 106.746 7.38636 107.138 6.54992C107.457 5.88077 107.764 5.19875 108.071 4.5296C108.856 2.83099 110.917 1.90448 112.585 2.49642C112.794 2.57363 112.88 2.67657 112.843 2.9082C112.745 3.56448 112.659 4.22077 112.585 4.87705C112.548 5.19875 112.475 5.41751 112.07 5.41751C111.432 5.41751 111.015 5.80356 110.77 6.40837C110.377 7.39923 109.984 8.39008 109.224 9.20079C111.003 10.4619 111.665 12.4693 112.634 14.4382ZM119.284 6.3955C118.744 7.88822 118.265 9.23939 117.775 10.5906C117.627 10.9895 117.897 10.8994 118.081 10.8994C118.903 10.8994 119.713 10.8865 120.535 10.9123C120.964 10.9251 121.075 10.8351 120.891 10.3718C120.339 9.11071 119.848 7.82388 119.284 6.3955Z",
      fill: "#FFF3E7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M69.1924 25.0545C70.2842 25.5307 71.0817 26.2513 71.4252 27.4223C72.1245 29.7901 70.6645 32.1707 68.2968 32.5696C67.7447 32.6597 67.2049 32.7112 66.6528 32.6983C64.7267 32.6854 62.8129 32.6854 60.8868 32.6983C60.5433 32.6983 60.3838 32.634 60.3838 32.2093C60.3961 28.4518 60.3838 24.7071 60.3961 20.9496C60.3961 19.7013 61.169 18.852 62.3958 18.8134C64.0274 18.7748 65.6714 18.6719 67.2908 18.9035C68.1864 19.0322 68.9838 19.4054 69.634 20.0617C70.9222 21.3614 70.9099 23.3302 69.6095 24.617C69.4868 24.7714 69.3518 24.9001 69.1924 25.0545ZM63.9784 28.4132C63.9784 28.7735 63.9784 29.1467 63.9784 29.507C63.9784 29.7386 64.0642 29.8544 64.2973 29.8544C65.1316 29.8415 65.9781 29.9187 66.8001 29.7257C67.4625 29.5713 67.806 29.1467 67.8306 28.4775C67.8551 27.8727 67.5116 27.3966 66.9227 27.1907C66.3829 26.9977 65.8309 27.062 65.2788 27.0491C63.9784 27.0363 63.9784 27.0363 63.9784 28.4132ZM63.9784 22.9441C63.9784 23.2401 63.9784 23.5361 63.9784 23.8449C63.9784 23.9993 63.9784 24.1795 64.1747 24.1795C64.8862 24.1538 65.61 24.3339 66.2848 23.9993C66.7632 23.7677 66.935 23.3302 66.8982 22.7897C66.8614 22.2364 66.5424 21.9404 66.0885 21.786C65.8186 21.6959 65.5242 21.6831 65.242 21.6702C63.9784 21.6445 63.9784 21.6445 63.9784 22.9441Z",
      fill: "#FFF3E7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M79.3018 10.1917C79.3018 8.41587 79.3018 6.62718 79.3018 4.85136C79.314 3.22996 80.0501 2.445 81.5959 2.445C83.7674 2.43213 85.9266 2.45787 88.098 2.43213C88.5397 2.43213 88.6869 2.57368 88.6256 3.0112C88.601 3.17849 88.6256 3.35864 88.6256 3.52593C88.601 4.76129 88.1103 5.28888 86.9448 5.28888C85.7794 5.28888 84.6139 5.30175 83.4484 5.27602C83.0313 5.26315 82.8841 5.37896 82.8841 5.84222C82.8841 7.42502 82.8718 7.42502 84.3808 7.42502C85.2395 7.42502 86.0983 7.43789 86.9326 7.70812C89.0059 8.40301 90.0977 10.0501 89.9628 12.3278C89.8524 14.2967 88.417 15.9181 86.3805 16.1883C84.1477 16.4971 81.8903 16.2655 79.6453 16.317C79.2527 16.3299 79.314 16.021 79.314 15.7765C79.3018 13.9235 79.3018 12.0576 79.3018 10.1917ZM82.8963 11.7359C82.8963 12.2249 82.9209 12.6109 82.8963 12.997C82.8718 13.3702 83.0313 13.486 83.3625 13.4602C83.8287 13.4216 84.3072 13.4474 84.7734 13.383C85.2886 13.3187 85.7794 13.1257 86.0493 12.6109C86.4418 11.8646 86.1597 10.9123 85.4236 10.5391C84.6507 10.1531 83.7919 10.1788 83.0313 10.3976C82.6755 10.5005 82.9822 11.337 82.8963 11.7359Z",
      fill: "#FFF3E7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M61.365 13.6532C60.6289 13.6532 59.8928 13.679 59.1567 13.6403C58.7519 13.6146 58.5801 13.769 58.4574 14.1551C58.2734 14.747 58.0281 15.3132 57.844 15.8923C57.7459 16.214 57.5987 16.3298 57.2797 16.3298C56.2982 16.3041 55.3168 16.3169 54.3353 16.3298C53.9673 16.3427 53.9305 16.214 54.0532 15.8794C55.6112 11.8645 57.157 7.83676 58.7028 3.80899C59.0709 2.84387 59.7579 2.38061 60.7639 2.43208C61.4141 2.45782 62.0766 2.45782 62.7268 2.43208C63.058 2.41922 63.2298 2.50929 63.377 2.85674C65.1927 7.18048 67.0329 11.4913 68.8608 15.8151C69.0081 16.1754 69.0571 16.3556 68.5787 16.3427C67.5972 16.3169 66.6158 16.3169 65.6343 16.3427C65.3153 16.3556 65.1559 16.2269 65.0454 15.918C64.8246 15.3004 64.5425 14.6955 64.3216 14.0779C64.1989 13.7304 64.0272 13.6275 63.696 13.6403C62.9108 13.6661 62.1379 13.6532 61.365 13.6532ZM61.2546 6.40838C60.7271 7.88823 60.2363 9.2394 59.7456 10.5906C59.6352 10.8865 59.7579 10.9123 59.9787 10.9123C60.8743 10.9123 61.7821 10.9123 62.6777 10.9123C62.9231 10.9123 63.0212 10.8351 62.9231 10.5777C62.3833 9.22653 61.8435 7.87536 61.2546 6.40838Z",
      fill: "#FFF3E7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M106.242 32.6981C106.991 30.7421 107.715 28.8634 108.438 26.9846C109.273 24.8227 110.095 22.6609 110.929 20.5119C111.456 19.1478 111.959 18.8004 113.346 18.8133C114.082 18.8261 114.965 18.5173 115.493 18.9291C115.996 19.3151 116.143 20.2159 116.437 20.8979C118.02 24.6297 119.59 28.3615 121.185 32.0804C121.394 32.5694 121.369 32.7367 120.805 32.711C119.885 32.6724 118.965 32.6853 118.044 32.711C117.689 32.7239 117.492 32.6209 117.37 32.2477C117.173 31.6429 116.891 31.0639 116.683 30.459C116.572 30.1373 116.413 29.9958 116.057 29.9958C114.523 30.0215 112.99 30.0215 111.456 29.9958C111.113 29.9958 110.941 30.0987 110.831 30.4462C110.634 31.0767 110.377 31.6815 110.181 32.3121C110.082 32.608 109.947 32.711 109.653 32.6981C108.561 32.6853 107.457 32.6981 106.242 32.6981ZM115.382 27.2677C114.806 25.8007 114.241 24.3724 113.616 22.7896C113.039 24.3852 112.536 25.8136 112.008 27.2677C113.149 27.2677 114.229 27.2677 115.382 27.2677Z",
      fill: "#FFF3E7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M84.9939 32.7113C83.6935 32.7113 82.5403 32.6984 81.3748 32.7242C81.0681 32.7242 80.9577 32.5826 80.8472 32.3124C80.4179 31.3215 79.9762 30.3307 79.5346 29.3527C79.2033 28.6321 78.7985 27.9629 78.1605 27.4997C77.9642 27.3581 77.7434 27.2294 77.5103 27.1393C76.4675 26.7533 76.2344 26.9206 76.2344 28.0659C76.2344 29.4556 76.2221 30.8583 76.2467 32.2481C76.2467 32.5955 76.1731 32.7371 75.805 32.7242C74.8849 32.6984 73.9648 32.7113 73.0447 32.7242C72.7625 32.7242 72.6521 32.647 72.6521 32.3253C72.6644 28.5034 72.6398 24.6944 72.6644 20.8725C72.6766 19.7787 73.3391 19.0967 74.4064 18.8908C76.1485 18.5691 76.2221 18.6205 76.2221 20.4221C76.2221 21.4902 76.2344 22.5711 76.2099 23.6392C76.2099 23.9995 76.2957 24.1153 76.6515 24.1282C77.6207 24.1796 78.3077 23.7807 78.7249 22.8542C79.0316 22.1722 79.326 21.4902 79.645 20.821C80.5528 18.9165 82.4789 18.5305 84.1597 18.9165C84.405 18.968 84.3682 19.1224 84.3437 19.3026C84.2823 19.753 84.2087 20.1905 84.1842 20.6409C84.1351 21.2843 84.0983 21.8762 83.2395 21.902C82.8347 21.9148 82.5403 22.2623 82.3808 22.6483C81.9637 23.6134 81.6201 24.6429 80.9086 25.4407C80.7736 25.5952 80.8227 25.6852 80.9699 25.801C82.1354 26.6632 82.7734 27.9372 83.3745 29.224C83.9143 30.3436 84.4173 31.476 84.9939 32.7113Z",
      fill: "#FFF3E7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M76.2956 8.86612C76.3938 9.08488 76.5778 9.14922 76.725 9.25217C79.0192 11.0409 78.7002 14.4638 76.0993 15.6863C74.4554 16.4584 72.7133 16.6257 70.9467 16.3297C70.2965 16.2139 69.8916 15.712 69.5604 15.1458C69.2782 14.6697 69.1187 14.1421 68.9225 13.6274C68.7507 13.1641 68.8611 13.0483 69.3028 13.1513C70.3088 13.3958 71.327 13.4086 72.3575 13.37C72.7869 13.3571 73.2041 13.2542 73.5966 13.074C74.0751 12.8424 74.3327 12.4692 74.2959 11.903C74.2591 11.3497 73.9156 11.0666 73.4494 10.9379C72.6275 10.7063 71.7932 10.6934 70.959 10.7063C70.5419 10.7192 70.3578 10.6162 70.4069 10.1401C70.4437 9.75403 70.4192 9.36798 70.4192 8.98194C70.4192 7.8624 70.4192 7.8624 71.462 7.84953C72.1613 7.84953 72.8483 7.84953 73.5108 7.55356C73.8665 7.38627 74.1487 7.15464 74.2223 6.74286C74.3205 6.12518 74.0015 5.76487 73.4985 5.55898C72.6274 5.19866 71.7319 5.28874 70.8363 5.41742C70.6155 5.45603 70.3946 5.5075 70.1738 5.57184C68.7016 5.94502 68.7016 5.94502 68.5912 4.36223C68.5912 4.27215 68.5789 4.19494 68.5789 4.10486C68.5053 2.94672 68.5053 2.94672 69.5727 2.70222C71.5233 2.2647 73.4862 2.04594 75.4369 2.67648C75.8663 2.81803 76.2834 2.99819 76.6637 3.24269C78.4671 4.38796 78.6757 6.70425 77.1053 8.1841C76.8722 8.45434 76.5901 8.63449 76.2956 8.86612Z",
      fill: "#FFF3E7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M85.08 18.8005C86.1718 18.8005 87.276 18.8134 88.3801 18.8005C88.7236 18.8005 88.7481 19.0836 88.8463 19.3024C89.6069 20.9753 90.3553 22.661 91.1772 24.4883C91.533 23.3945 91.852 22.468 92.1587 21.5286C92.2936 21.1297 92.4041 20.705 92.5513 20.319C92.9561 19.2509 93.5695 18.8263 94.6614 18.8134C95.1521 18.8134 95.6428 18.8391 96.1336 18.8005C96.5752 18.7748 96.6734 18.8777 96.4894 19.3281C95.8391 20.9238 95.2257 22.5323 94.6 24.128C93.7781 26.2255 92.9561 28.3102 92.1464 30.4077C91.533 32.0034 90.3921 32.827 88.7481 32.8398C88.0366 32.8527 87.325 32.8141 86.6135 32.6854C86.2454 32.6211 86.0859 32.4538 86.1596 32.042C86.2577 31.4758 86.3436 30.8967 86.3927 30.3305C86.4172 30.0345 86.5521 29.9831 86.7852 29.9831C87.2392 29.9959 87.6808 30.0088 88.1347 29.9831C89.2143 29.9187 89.6805 29.108 89.2266 28.1172C87.9016 25.2218 86.5889 22.3264 85.2762 19.4311C85.1658 19.2638 85.0309 19.0836 85.08 18.8005Z",
      fill: "#FFF3E7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M95.52 8.06843C95.9371 6.76874 96.3174 5.57199 96.71 4.37524C97.2007 2.84391 97.716 2.45787 99.2617 2.445C99.8015 2.445 100.354 2.445 100.979 2.445C100.354 4.04066 99.7647 5.55912 99.1636 7.07758C98.2558 9.39386 97.3602 11.6973 96.4523 14.0136C95.8021 15.6865 94.6735 16.4714 92.9559 16.4843C92.2444 16.4843 91.5328 16.4328 90.8212 16.2784C90.4777 16.214 90.3796 16.0468 90.4532 15.7122C90.4655 15.6478 90.4777 15.5835 90.49 15.5192C90.5759 14.9272 90.4777 14.1809 90.7844 13.7819C91.1157 13.3444 91.864 13.7047 92.4161 13.6275C92.8332 13.5632 93.2135 13.4474 93.4957 13.0999C93.7901 12.7525 93.876 12.4308 93.6552 11.9547C92.2812 8.99495 90.9317 6.02238 89.5822 3.04981C89.5085 2.88252 89.4349 2.70236 89.3123 2.43213C90.5145 2.43213 91.6432 2.43213 92.7719 2.43213C93.0786 2.43213 93.0909 2.71523 93.1767 2.90826C93.8638 4.43958 94.5508 5.95804 95.2378 7.48936C95.2991 7.65665 95.385 7.7982 95.52 8.06843Z",
      fill: "#FFF3E7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M106.598 28.9408C106.426 29.8416 106.23 30.6266 105.886 31.3601C105.506 32.1322 104.942 32.6598 104.107 32.7756C101.74 33.0973 99.519 32.7498 97.7279 30.9612C95.7649 28.9923 95.1147 26.5473 95.8876 23.8064C96.6728 21.0269 98.5253 19.4054 101.212 18.8264C103.003 18.4403 104.733 18.7492 106.426 19.4441C106.635 19.5341 106.782 19.5985 106.782 19.8816C106.77 20.8853 106.782 21.889 106.782 22.9957C106.082 22.6483 105.469 22.2622 104.794 22.0434C103.764 21.7217 102.721 21.5673 101.666 21.8762C99.9484 22.3909 98.9179 24.1152 99.0651 26.1613C99.2123 28.143 100.402 29.4813 102.218 29.7515C103.42 29.9317 104.573 29.7001 105.702 29.3011C105.96 29.1982 106.242 29.0824 106.598 28.9408Z",
      fill: "#FFF3E7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M27.1008 10.848C25.5672 10.848 24.8802 11.4914 24.6594 13.1C24.6226 13.3959 24.5612 13.6919 24.5367 13.9879C24.4876 14.7728 24.3159 15.4291 23.4816 15.7122C23.2117 15.8023 22.9787 16.0725 22.7578 16.2913C21.5555 17.5009 21.7028 19.058 23.1136 19.9459C23.5185 20.2032 23.6289 20.4477 23.5553 20.911C23.3712 22.0305 23.2117 23.1501 23.0768 24.2825C23.0277 24.6814 22.8928 24.7329 22.5615 24.5913C21.7764 24.231 20.9789 23.9093 20.1815 23.5876C19.9116 23.4847 19.8625 23.3174 19.9116 23.0471C20.5005 19.1609 21.0771 15.2618 21.6782 11.3756C21.8377 10.2947 21.8622 10.2947 22.9173 10.2046C24.8557 10.0502 26.7573 10.1531 28.5852 10.8995C29.9838 11.4786 31.1125 12.3793 31.5786 13.975C31.6032 14.0522 31.6277 14.1423 31.64 14.2195C31.7872 15.0431 31.7136 15.146 30.9407 14.9916C29.9592 14.7986 28.9655 14.6313 27.9595 14.6442C27.6038 14.6442 27.5547 14.4897 27.6038 14.1809C27.7142 13.4217 27.8 12.6496 27.9105 11.8903C28.0822 10.848 28.0945 10.848 27.1008 10.848Z",
      fill: "#FFF3E7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M14.1328 21.6572C15.5068 19.0063 16.8563 16.3941 18.2058 13.7947C18.2304 13.8075 18.2672 13.8204 18.2917 13.8333C17.9482 15.9308 17.6047 18.0283 17.2612 20.1387C17.1631 20.7693 17.0526 21.3998 16.9545 22.0304C16.93 22.2105 16.9054 22.3778 16.6601 22.3263C15.8258 22.0947 15.0039 21.876 14.1328 21.6572Z",
      fill: "#FFF3E7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M27.1865 16.0596C28.5115 16.0982 29.6401 16.2912 30.7197 16.6772C31.0264 16.7931 31.1736 16.9089 30.916 17.2435C29.9468 18.4917 28.6341 18.9678 27.1742 19.1351C26.9043 19.1608 26.9411 19.0193 26.9657 18.8262C27.0638 18.17 27.1497 17.5137 27.2478 16.8574C27.3092 16.4971 27.211 16.3427 26.843 16.3941C25.5426 16.5486 24.4875 17.0504 23.9722 18.4273C23.9232 18.556 23.9354 18.7748 23.7391 18.7362C23.6164 18.7104 23.4815 18.5818 23.4202 18.4659C23.1625 18.0027 23.3343 17.6038 23.6655 17.2563C24.2667 16.6258 25.0396 16.3555 25.8493 16.214C26.34 16.111 26.8552 16.0853 27.1865 16.0596Z",
      fill: "#FFF3E7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M13.7405 5.28873C13.5688 5.39168 13.4338 5.34021 13.2866 5.3016C13.4093 5.16005 13.5443 5.22439 13.7405 5.28873Z",
      fill: "#FFF3E7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("defs", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("clipPath", {
        id: "clip0",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("rect", {
          width: "126.976",
          height: "38",
          fill: "white"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 16
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 10
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 7
  }, undefined);
};
const UsachevLogo = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
    width: "113",
    height: "41",
    viewBox: "0 0 113 41",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M112.547 7.79414C112.702 8.87298 112.786 9.86776 111.619 10.4842C110.452 11.1007 108.849 10.9886 107.865 10.148C107.71 10.0079 107.583 9.82573 107.457 9.67161C105.685 11.2829 103.871 11.2969 102.31 9.69963C101.649 10.4702 100.792 10.9046 99.765 10.8906C98.7666 10.8906 97.8948 10.5123 97.1917 9.68562C96.5167 10.4983 95.6449 10.8906 94.6184 10.8766C93.62 10.8625 92.7482 10.4983 92.1014 9.69963C90.3155 11.2969 88.6422 11.2969 86.9829 9.71364C85.2252 11.2689 83.4675 11.2829 81.8644 9.69963C81.1895 10.4562 80.3317 10.8906 79.3052 10.8766C78.3068 10.8625 77.435 10.4983 76.76 9.6576C76.085 10.4842 75.2132 10.8766 74.1867 10.8766C73.1883 10.8625 72.3165 10.4983 71.6697 9.69963C70.1932 11.2408 68.098 11.2969 66.5231 9.74166C64.8638 11.2829 63.0639 11.2829 61.4186 9.68562C60.7718 10.4702 59.9 10.8906 58.8735 10.8766C57.861 10.8766 57.0033 10.5123 56.3564 9.69963C54.4721 11.2689 52.9816 11.2829 51.1958 9.72765C49.5084 11.2689 47.7366 11.2689 46.0773 9.67161C45.4164 10.4562 44.5586 10.8766 43.5321 10.8625C42.5337 10.8485 41.6619 10.4983 41.0151 9.68562C39.1308 11.2548 37.5418 11.2689 35.8404 9.68562C35.1794 10.4842 34.2936 10.8766 33.2671 10.8625C32.2546 10.8485 31.3968 10.4562 30.7641 9.6576C29.1329 11.2689 27.2346 11.2689 25.6456 9.6576C24.9988 10.4702 24.1269 10.8625 23.1004 10.8625C22.102 10.8625 21.2302 10.4983 20.5412 9.6576C19.8522 10.4702 18.9944 10.8766 17.9679 10.8625C16.9554 10.8485 16.0977 10.4702 15.4508 9.68562C13.7353 11.2689 11.9354 11.2689 10.3324 9.69963C8.64495 11.479 6.32477 11.0167 5.22795 9.68562C4.01864 10.9186 2.59841 11.2268 1.03755 10.4422C0.0391712 9.95183 -0.101446 9.47545 0.053233 7.76611C37.5418 7.79414 75.0163 7.79414 112.547 7.79414ZM56.4689 9.23727C57.5798 11.1428 60.6593 10.6944 61.0812 9.41941C59.5063 10.5123 58.086 10.4983 56.4689 9.23727ZM87.2079 9.34936C88.3187 10.9046 91.0045 10.9466 91.7217 9.41941C90.1608 10.5123 88.7547 10.4983 87.2079 9.34936ZM41.2401 9.34936C41.9291 10.8485 44.9805 10.9746 45.7679 9.41941C44.0805 10.5123 42.9134 10.4983 41.2401 9.34936ZM102.62 9.46144C103.759 11.0867 106.529 10.6804 107.105 9.37738C105.615 10.4842 104.138 10.4983 102.62 9.46144ZM15.254 9.29331C13.6369 10.5123 12.1323 10.4983 10.5714 9.33534C11.4854 10.9046 14.2696 10.9046 15.254 9.29331ZM30.4688 9.43342C28.9642 10.5263 27.4596 10.4842 25.8003 9.29331C27.1221 10.9186 29.3438 10.9186 30.4688 9.43342ZM76.4506 9.41941C74.9601 10.5123 73.4696 10.4562 71.9509 9.46144C73.2164 10.9326 75.2695 10.8906 76.4506 9.41941ZM92.3685 9.41941C93.4653 10.8485 96.0246 10.9186 96.6714 9.55952C95.1949 10.4983 93.7747 10.4422 92.3685 9.41941ZM46.4007 9.41941C47.4835 10.8485 49.9161 10.9186 50.7317 9.5315C49.2271 10.4842 47.8069 10.4422 46.4007 9.41941ZM35.4044 9.58754C33.8998 10.4842 32.4655 10.4422 31.0594 9.4054C32.1421 10.8485 34.2654 10.9326 35.4044 9.58754ZM76.9991 9.33534C77.8568 10.9326 80.7114 10.8205 81.4285 9.51749C79.8958 10.4842 78.4474 10.4562 76.9991 9.33534ZM4.66548 9.74166C4.00458 9.88177 3.27337 10.204 2.54216 10.176C1.82501 10.148 1.12192 9.78369 0.531332 9.60155C1.41722 10.8485 3.69522 10.9186 4.66548 9.74166ZM61.6999 9.4054C62.8389 10.8485 65.1169 10.9186 66.0731 9.51749C64.5544 10.4983 63.1061 10.4422 61.6999 9.4054ZM15.7883 9.41941C16.5898 10.9746 19.599 10.7645 20.049 9.55952C18.6147 10.4702 17.2085 10.4562 15.7883 9.41941ZM107.626 9.32133C108.624 10.7785 110.944 10.9466 111.971 9.62958C110.438 10.4702 109.032 10.4002 107.626 9.32133ZM36.4028 9.57353C36.6419 10.134 37.3871 10.5123 38.3152 10.5403C39.3839 10.5683 40.2557 10.148 40.5651 9.47545C39.1167 10.4422 37.9918 10.4702 36.4028 9.57353ZM21.0052 9.55952C21.9333 10.8766 24.7035 10.7925 25.2519 9.44743C23.9582 10.4422 22.5942 10.4422 21.0052 9.55952ZM56.0189 9.37738C54.5425 10.4842 53.1222 10.4282 51.5051 9.44743C52.7988 10.9046 55.0487 10.8345 56.0189 9.37738ZM97.5573 9.51749C98.6401 10.9886 101.34 10.7084 101.916 9.48947C100.271 10.4422 99.4275 10.4562 97.5573 9.51749ZM67.1418 9.72765C67.9152 10.9466 70.7135 10.7224 71.2478 9.48947C69.7573 10.3862 69.2932 10.4142 67.1418 9.72765ZM82.3706 9.60155C83.2425 10.9186 86.0407 10.7505 86.5751 9.43342C85.2533 10.4422 83.8752 10.4282 82.3706 9.60155ZM5.83261 9.72765C6.53569 10.8625 9.30585 10.8205 9.93863 9.48947C8.50434 10.3581 8.16685 10.3862 5.83261 9.72765Z",
      fill: "#FFF3E7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M0.0804813 33.4758C-0.0741978 31.6824 0.136728 31.2061 1.26167 30.7017C2.61159 30.0992 4.08808 30.4355 5.19895 31.6124C5.87392 30.8558 6.71762 30.4215 7.75819 30.4215C8.77063 30.4215 9.61434 30.8278 10.2752 31.5704C12.1455 30.0151 13.8329 30.0152 15.4078 31.5984C16.153 30.7717 17.0952 30.3374 18.2342 30.4215C19.1201 30.4915 19.8935 30.8418 20.5122 31.6124C21.2012 30.8558 22.0308 30.4215 23.0714 30.4215C24.0839 30.4215 24.9276 30.7998 25.6307 31.6264C26.3197 30.8278 27.1774 30.4215 28.218 30.4215C29.2305 30.4215 30.0742 30.8278 30.721 31.5984C32.3943 30.0152 34.1943 30.0151 35.8535 31.5704C37.4285 30.0011 39.4674 30.0572 40.972 31.5844C41.661 30.8418 42.5188 30.4215 43.5594 30.4215C44.5718 30.4355 45.4155 30.8418 46.0624 31.6124C47.6091 30.0152 49.5497 30.0011 51.1808 31.5704C52.7979 29.9451 54.865 30.1132 56.2993 31.5844C57.0024 30.8418 57.8461 30.4075 58.8867 30.4215C59.8991 30.4355 60.7428 30.8418 61.3896 31.6124C62.9786 30.0152 64.8629 30.0011 66.5222 31.5704C67.9565 30.0712 70.0798 29.9871 71.6406 31.5844C72.3297 30.8278 73.1874 30.4075 74.214 30.4215C75.2264 30.4355 76.0701 30.8138 76.7169 31.6124C78.3059 30.0011 80.2886 30.0011 81.8354 31.5704C83.7337 30.0011 85.2102 29.9871 86.9539 31.5704C87.6429 30.8418 88.4866 30.3934 89.5272 30.4075C90.5396 30.4215 91.3833 30.8138 92.0302 31.5844C93.7316 30.0011 95.7143 30.0152 97.1487 31.5844C99.061 30.0011 100.58 29.9871 102.267 31.5704C102.97 30.8698 103.8 30.3934 104.84 30.4075C105.853 30.4215 106.697 30.7998 107.231 31.4303C108.075 31.066 108.82 30.5896 109.621 30.4635C110.24 30.3654 110.971 30.5756 111.562 30.8418C112.617 31.3042 112.799 31.9206 112.574 33.4758C75.0717 33.4758 37.5972 33.4758 0.0804813 33.4758ZM25.3775 31.9487C24.2807 30.3514 21.3981 30.6036 20.934 31.8646C22.4105 30.8558 23.7183 30.8558 25.3775 31.9487ZM15.0703 31.8786C14.0578 30.5616 11.6814 30.4355 10.908 31.6824C12.3564 30.8978 13.7344 30.8838 15.0703 31.8786ZM45.8233 32.0047C45.0077 30.5195 42.2938 30.5055 41.4642 31.7385C43.011 30.8838 44.4171 30.8698 45.8233 32.0047ZM72.3156 31.5143C72.9203 31.4022 73.6374 31.122 74.3405 31.164C75.0436 31.2061 75.7326 31.5563 76.3092 31.7245C75.3108 30.5476 73.1734 30.4355 72.3156 31.5143ZM102.731 31.7385C104.208 30.8558 105.642 30.8558 107.203 32.0467C105.979 30.5195 103.926 30.4355 102.731 31.7385ZM51.5605 31.8226C53.3745 30.8838 54.0775 30.8698 55.8071 31.7385C55.1603 30.5476 52.348 30.4495 51.5605 31.8226ZM91.7349 31.9066C90.7084 30.5756 88.3179 30.4355 87.5867 31.6544C89.3163 30.8698 90.2865 30.9259 91.7349 31.9066ZM56.8899 31.6404C58.3523 30.8558 59.7444 30.8978 61.2068 32.0327C60.0538 30.5616 57.9726 30.4355 56.8899 31.6404ZM71.1485 31.7525C70.2064 30.4775 67.4503 30.5756 66.93 31.8646C68.2236 30.8978 69.5876 30.8978 71.1485 31.7525ZM30.5523 32.0327C29.4414 30.5616 27.1212 30.4215 26.2212 31.7105C27.6977 30.8698 29.0898 30.8978 30.5523 32.0327ZM77.1529 31.7805C78.4887 30.8838 79.8668 30.9259 81.2589 31.6544C80.0496 30.4915 78.2637 30.5476 77.1529 31.7805ZM19.9357 31.6544C19.0357 30.3934 16.2655 30.6877 15.8859 31.8226C17.1936 30.9118 18.5295 30.8838 19.9357 31.6544ZM96.5721 31.6264C95.7987 30.4495 93.0145 30.6036 92.5083 31.7805C94.0973 30.9259 94.491 30.9119 96.5721 31.6264ZM65.9316 31.6264C65.0738 30.4215 62.3177 30.6597 61.8677 31.7805C63.4567 30.9399 63.7661 30.9259 65.9316 31.6264ZM82.0182 32.0607C83.3822 30.9118 84.7603 30.9259 86.1945 31.5143C84.9149 30.4215 83.0166 30.6316 82.0182 32.0607ZM5.57862 31.8366C6.83011 30.9119 8.16598 30.9399 9.55809 31.5143C8.36284 30.4635 6.60513 30.6036 5.57862 31.8366ZM97.4299 31.9627C98.8079 30.9118 100.144 30.9118 101.536 31.5283C100.397 30.4495 98.4142 30.6176 97.4299 31.9627ZM111.885 31.6404C110.746 30.4775 108.778 30.5476 107.667 31.9066C109.143 30.9259 110.493 30.8838 111.885 31.6404ZM50.7449 31.7385C49.4653 30.4775 47.4826 30.5476 46.4983 31.7665C48.481 30.9119 48.8888 30.8978 50.7449 31.7385ZM40.297 31.6124C39.2424 30.4355 37.105 30.6176 36.1207 31.9767C37.4847 30.9399 38.8065 30.9118 40.297 31.6124ZM35.3473 31.7385C34.5036 30.4635 31.7194 30.5896 31.185 31.8366C32.5209 30.8978 33.8849 30.8978 35.3473 31.7385ZM0.502333 31.7805C1.96475 30.9259 3.28656 30.9259 4.62242 31.6544C3.48342 30.5195 1.61321 30.5336 0.502333 31.7805Z",
      fill: "#FFF3E7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M78.1094 15.5837C78.5875 15.5837 79.0093 15.5837 79.4874 15.5837C79.4874 16.6205 79.4874 17.6153 79.4874 18.6101C79.4874 18.7923 79.4593 18.9884 79.5015 19.1705C79.5437 19.3107 79.6702 19.4368 79.7546 19.5629C79.853 19.4368 80.0218 19.3107 80.0218 19.1846C80.0499 18.6521 80.0218 18.1057 80.0358 17.5733C80.0358 17.4192 80.078 17.2651 80.1343 16.9288C80.303 17.167 80.4014 17.2651 80.4577 17.3912C80.4858 17.4752 80.4718 17.5733 80.4577 17.6714C80.289 18.8763 80.3593 19.8571 81.9482 20.0392C82.3842 20.0953 82.7498 20.7258 83.1716 21.1041C83.1716 19.3107 83.1716 17.4892 83.1716 15.5977C83.5232 15.5837 83.8185 15.5837 84.1138 15.5557C84.4794 15.5277 84.6059 15.6818 84.6059 16.0461C84.5919 19.1005 84.5919 22.1549 84.5637 25.2093C84.5637 25.4054 84.4091 25.6016 84.3247 25.8118C84.5215 25.8118 84.7747 25.8118 85.0981 25.8118C85.0981 22.9255 85.0981 20.0392 85.0981 17.167C85.1684 17.139 85.2246 17.1249 85.295 17.0969C85.3793 17.223 85.5199 17.3631 85.5199 17.4892C85.534 20.1934 85.534 22.8975 85.5059 25.6156C85.5059 25.8258 85.2809 26.1901 85.1543 26.1901C84.7325 26.2181 84.2825 26.162 83.8888 26.0359C83.6497 25.9659 83.481 25.6857 83.1857 25.4335C83.1716 25.3494 83.1576 25.1252 83.1435 24.9431C81.6951 26.7365 79.9796 26.5403 78.1375 25.6576C78.1094 22.267 78.1094 18.9604 78.1094 15.5837ZM79.164 25.6576C79.164 25.6997 79.164 25.7417 79.1781 25.7978C79.9233 25.7978 80.6827 25.8678 81.3998 25.7697C81.7936 25.7137 82.2295 25.4054 82.4967 25.0972C83.2982 24.1445 83.1576 21.6085 82.2998 20.6978C82.2857 20.6837 82.2295 20.6978 82.2998 20.6978C82.342 21.5945 82.4545 22.4912 82.4263 23.3879C82.3982 24.6068 81.6248 25.8118 79.9937 25.6717C79.7124 25.6436 79.4452 25.6576 79.164 25.6576ZM79.8249 24.0464C79.8812 24.0043 79.9233 23.9623 79.9796 23.9203C80.0358 23.0516 80.078 22.1829 80.1343 21.2862C80.0499 21.2862 79.7827 21.2862 79.4874 21.2862C79.4874 22.0848 79.4734 22.8274 79.5015 23.57C79.5156 23.7381 79.7124 23.8923 79.8249 24.0464ZM80.3733 23.8222C80.9499 23.626 81.217 22.9956 80.992 22.1829C80.9358 21.9868 80.6827 21.8467 80.528 21.6785C80.4718 21.7206 80.4296 21.7626 80.3733 21.8186C80.3733 22.4771 80.3733 23.1497 80.3733 23.8222Z",
      fill: "#FFF3E7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M55.962 21.5805C56.6932 20.1934 56.1308 18.5961 56.412 17.111C56.4823 17.111 56.5526 17.111 56.637 17.125C56.637 17.6994 56.637 18.2739 56.637 18.8623C56.6932 18.8763 56.7495 18.8763 56.8057 18.8904C57.0448 18.1338 57.2979 17.3772 57.5369 16.6066C57.8885 15.4577 57.8885 15.4436 59.1962 15.6118C59.2103 15.7799 59.2525 15.948 59.2525 16.1302C59.2525 19.1005 59.2525 22.0568 59.2384 25.0272C59.2384 25.2934 59.0697 25.5456 58.9712 25.7978C59.0697 25.7978 59.3368 25.7978 59.7306 25.7978C59.7306 22.8835 59.7306 19.9972 59.7306 17.125C59.8149 17.125 59.8993 17.111 59.9837 17.111C60.0118 17.3351 60.068 17.5453 60.068 17.7695C60.068 20.3195 60.0821 22.8555 60.054 25.4055C60.054 25.6717 59.9274 26.1481 59.7868 26.1761C59.379 26.2602 58.8306 26.3022 58.5072 26.092C58.015 25.7838 57.6635 25.2934 57.79 24.5788C57.8885 24.0044 57.8041 23.3879 57.6776 22.7714C57.3963 23.6961 57.1432 24.6209 56.8198 25.5316C56.7214 25.7978 56.4682 26.2041 56.2854 26.2041C55.8636 26.2041 55.4417 26.3582 54.9636 25.9239C54.373 25.3915 54.4855 24.8731 54.4715 24.3126C54.4574 21.6225 54.4855 18.9464 54.4434 16.2563C54.4293 15.5978 54.7246 15.5697 55.2308 15.5557C55.7652 15.5417 55.9761 15.6818 55.9761 16.2563C55.948 18.0217 55.962 19.8151 55.962 21.5805ZM57.7197 19.717C57.1713 21.4824 56.637 23.2618 56.0605 25.0272C55.962 25.3214 55.7089 25.5736 55.5542 25.7838C55.723 25.7838 56.0464 25.7838 56.3979 25.7838C56.8338 23.7242 58.001 21.9027 57.7197 19.717Z",
      fill: "#FFF3E7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M61.6429 15.6262C61.7695 15.5842 61.8116 15.5562 61.8538 15.5562C63.0491 15.4581 63.0491 15.4581 63.0491 16.663C63.0491 18.2883 63.0491 19.9136 63.0491 21.5949C63.8506 20.1378 63.3162 18.5685 63.5553 17.0974C63.6256 17.0974 63.71 17.0974 63.7803 17.0974C63.7803 17.6438 63.7803 18.1902 63.7803 18.7367C63.8365 18.7367 63.8928 18.7507 63.9631 18.7507C64.2443 17.854 64.5818 16.9713 64.8068 16.0606C65.0036 15.2619 65.5942 15.5562 66.0442 15.5422C66.5785 15.5282 66.3957 16.0045 66.3957 16.2847C66.4098 19.185 66.4098 22.0713 66.3817 24.9716C66.3817 25.2518 66.2129 25.518 66.1286 25.7842C66.227 25.7842 66.4942 25.7842 66.8598 25.7842C66.8598 22.8699 66.8598 19.9977 66.8598 17.1254C66.9301 17.1114 67.0004 17.0834 67.0566 17.0694C67.1129 17.1955 67.2394 17.3216 67.2394 17.4477C67.2535 20.1518 67.2535 22.8559 67.2254 25.574C67.2254 25.7842 67.0144 26.1485 66.8879 26.1625C66.466 26.2045 65.9739 26.2185 65.6223 26.0364C64.9755 25.7141 64.8489 25.0836 64.9333 24.3831C65.0036 23.8787 64.9474 23.3603 64.8349 22.7999C64.7505 23.0661 64.6661 23.3323 64.5818 23.5985C64.3849 24.271 64.2021 24.9435 63.9631 25.588C63.8787 25.8262 63.6115 26.1765 63.4287 26.1765C63.0209 26.1765 62.6131 26.2886 62.1491 25.9243C61.5163 25.4059 61.6288 24.8455 61.6288 24.257C61.6148 21.5949 61.6288 18.9328 61.6288 16.2707C61.6148 16.0606 61.6429 15.8644 61.6429 15.6262ZM64.9052 19.5913C64.3005 21.5108 63.7662 23.2902 63.1897 25.0416C63.0912 25.3218 62.8803 25.56 62.7256 25.8122C63.26 25.9663 63.6256 25.7702 63.7662 25.0556C63.8646 24.4952 64.1177 23.9488 64.3005 23.4023C64.6802 22.1974 65.1442 21.0205 64.9052 19.5913Z",
      fill: "#FFF3E7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M89.2462 17.097C89.2462 17.8957 89.2462 18.7083 89.2462 19.5349C89.5977 19.549 89.8227 19.563 90.1742 19.591C90.1742 18.4701 90.2305 17.3773 90.1602 16.2984C90.1039 15.5558 90.4695 15.5278 91.032 15.5278C91.5101 15.5278 91.6929 15.6539 91.6789 16.1583C91.6367 19.1006 91.6367 22.0429 91.6085 24.9712C91.6085 25.2374 91.482 25.5036 91.4117 25.7698C91.5382 25.7698 91.8195 25.7698 92.1429 25.7698C92.1429 22.8696 92.1429 20.0113 92.1429 17.1531C92.1991 17.1251 92.2695 17.097 92.3257 17.055C92.4101 17.1811 92.5788 17.3072 92.5788 17.4333C92.5788 20.0954 92.5788 22.7575 92.5507 25.4055C92.5507 25.6718 92.396 26.1201 92.2695 26.1481C91.8476 26.2182 91.3836 26.1761 90.9758 26.05C90.7227 25.98 90.5539 25.6858 90.2024 25.3635C90.2024 24.3127 90.2024 23.0657 90.2024 21.7627C89.893 21.7627 89.654 21.7627 89.3165 21.7627C89.3165 22.9396 89.3446 24.1165 89.3024 25.3075C89.2883 25.6017 89.0915 26.1481 88.979 26.1481C88.5149 26.1621 88.0931 26.2322 87.5728 25.9099C86.6447 25.3355 86.9681 24.5929 86.9681 23.9064C86.9259 21.3424 86.9822 18.7784 86.9259 16.2144C86.9119 15.4437 87.3478 15.5698 87.8118 15.5278C88.3884 15.4718 88.4868 15.766 88.4728 16.2424C88.4446 17.1951 88.4306 18.1619 88.4306 19.1146C88.4306 19.2687 88.5853 19.4229 88.6696 19.577C88.754 19.4229 88.8946 19.2687 88.9087 19.1006C88.9368 18.5822 88.9087 18.0778 88.9227 17.5594C88.9227 17.4053 88.993 17.2512 89.0212 17.097C89.0915 17.097 89.1618 17.097 89.2462 17.097ZM88.9087 21.4825C89.3727 21.4545 89.7383 21.4264 90.118 21.4124C90.118 21.3704 90.1039 21.3284 90.1039 21.2863C89.5415 21.2863 88.993 21.2863 88.4165 21.2863C88.4165 22.5613 88.4306 23.7663 88.4024 24.9712C88.4024 25.2514 88.2337 25.5316 88.1353 25.8119C88.304 25.7979 88.5712 25.7838 88.9087 25.7698C88.9087 24.3407 88.9087 22.9396 88.9087 21.4825Z",
      fill: "#FFF3E7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M39.355 20.5436C39.5519 20.4596 39.805 20.4315 39.9315 20.2914C40.494 19.6189 40.5924 18.8203 40.4659 17.9936C40.4237 17.7274 40.3393 17.4612 40.269 17.195C41.183 17.3211 41.0565 19.3807 40.1003 20.7118C41.2955 21.9027 41.2674 23.3318 40.8455 24.789C40.5502 25.7978 39.7065 26.148 38.7363 26.2041C38.2019 26.2461 37.6535 26.2181 37.1192 26.2181C36.5005 26.2041 35.9661 25.6997 35.9661 25.0832C35.9521 22.0708 35.952 19.0725 35.938 16.0601C35.938 15.6398 36.1067 15.5417 36.4864 15.5557C37.0067 15.5697 37.5129 15.5557 38.0332 15.5697C39.2847 15.5977 39.9596 16.2282 40.0862 17.4892C40.1987 18.5541 40.1565 19.5909 39.2144 20.3755C39.2706 20.4175 39.3128 20.4736 39.355 20.5436ZM36.8661 25.7697C38.0332 25.6717 39.4253 26.3302 40.269 25.0552C41.0002 23.9623 40.8315 22.7293 40.2971 21.5524C40.3956 22.6593 40.5502 23.7802 39.9034 24.789C39.1722 25.9239 37.9488 25.5876 36.8661 25.7697ZM38.3566 21.7206C38.3004 21.7906 38.2441 21.8467 38.1879 21.9167C38.1879 22.5892 38.1879 23.2618 38.1879 23.9623C38.8347 23.6681 39.1441 22.9956 38.905 22.267C38.8347 22.0568 38.5394 21.9027 38.3566 21.7206ZM38.1738 17.6013C38.1738 18.3299 38.1738 18.9324 38.1738 19.6189C38.8066 19.1005 38.7363 18.498 38.6519 17.9096C38.6378 17.7975 38.3847 17.7274 38.1738 17.6013ZM37.4848 19.6749C37.5551 19.6749 37.6254 19.689 37.6816 19.689C38.0051 18.9043 37.3723 17.9376 38.1738 17.195C37.8926 17.195 37.6816 17.195 37.4707 17.195C37.4848 18.0357 37.4848 18.8623 37.4848 19.6749ZM37.5129 21.3423C37.5129 22.253 37.5129 23.1497 37.5129 24.0324C38.0191 23.1917 37.3582 22.1409 38.1035 21.3423C37.9207 21.3423 37.7098 21.3423 37.5129 21.3423Z",
      fill: "#FFF3E7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M96.3336 25.9799C97.4163 26.176 98.035 25.9659 98.4147 25.0972C98.7522 24.3266 99.0334 23.4719 99.1037 22.6452C99.2584 20.8098 99.3147 18.9604 98.5975 17.195C98.6537 17.1529 98.71 17.1109 98.7662 17.0689C98.8928 17.237 99.0756 17.3911 99.1318 17.5733C99.6381 19.2266 99.6803 20.9219 99.4834 22.6172C99.385 23.4579 99.174 24.3126 98.8366 25.0832C98.1897 26.5403 96.896 26.7645 95.5461 25.9378C94.4352 25.2513 93.9852 24.2565 93.7884 23.0656C93.4931 21.2021 93.465 19.3527 93.9431 17.5172C94.0696 17.0268 94.2805 16.5364 94.5618 16.1301C95.3211 14.9952 96.882 14.9392 97.6132 16.1021C98.0491 16.8027 98.3866 17.6853 98.4428 18.498C98.5413 20.1093 98.5131 21.7485 98.3444 23.3598C98.246 24.4947 97.7397 25.5595 96.3336 25.9799ZM96.3898 24.0604C97.3038 22.9815 97.4304 18.6661 96.5445 17.4051C95.7992 19.7169 95.9961 21.8887 96.3898 24.0604ZM95.8695 24.2845C95.5742 21.8186 95.2649 19.4227 96.432 17.1109C95.8555 16.8727 95.5461 17.0408 95.3774 17.8114C94.9696 19.6469 94.9555 21.5104 95.3774 23.3598C95.4617 23.6961 95.7008 23.9763 95.8695 24.2845Z",
      fill: "#FFF3E7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M104.293 20.8242C104.461 20.4879 104.7 20.1517 104.799 19.7874C104.939 19.1989 104.996 18.5965 105.08 18.008C105.192 17.2654 105.474 17.0553 106.486 17.1393C105.277 17.5316 105.446 18.4283 105.333 19.241C105.263 19.7454 105.01 20.2357 104.813 20.8242C105.572 21.5388 105.403 22.6877 105.657 23.7105C105.713 23.9767 105.966 24.1868 106.121 24.425C106.219 24.5792 106.402 24.7893 106.374 24.9294C106.261 25.4338 106.064 25.9242 105.896 26.4146C105.446 26.2465 104.996 26.0503 104.532 25.8962C103.603 25.5739 103.519 24.7613 103.407 23.9767C103.308 23.2761 103.21 22.5756 102.985 21.889C102.985 23.08 102.971 24.2569 102.999 25.4478C103.013 25.9943 102.886 26.3305 102.268 26.2184C101.986 26.1764 101.607 26.2044 101.424 26.0363C101.002 25.658 100.538 25.3918 100.566 24.5932C100.665 21.819 100.622 19.0448 100.58 16.2706C100.566 15.6401 100.805 15.5421 101.354 15.5421C101.916 15.5421 102.169 15.6542 102.127 16.2847C102.071 17.2094 102.085 18.1481 102.099 19.0868C102.099 19.255 102.282 19.4371 102.38 19.6053C102.479 19.4371 102.661 19.269 102.675 19.1009C102.718 18.4564 102.689 17.8118 102.689 17.1673C102.76 17.1673 102.83 17.1533 102.9 17.1533C102.9 17.7418 102.9 18.3303 102.9 18.9187C102.971 18.9187 103.041 18.9327 103.097 18.9327C103.196 18.1901 103.28 17.4476 103.407 16.705C103.575 15.7803 104.138 15.3179 105.01 15.3739C105.08 15.6542 105.164 15.9344 105.207 16.2286C105.263 16.5649 105.361 16.9011 104.855 17.0693C104.672 17.1253 104.574 17.5176 104.503 17.7698C104.278 18.6525 104.503 19.6753 103.603 20.4319C103.857 20.558 104.068 20.6981 104.293 20.8242C104.264 22.1132 104.757 23.9346 105.249 24.0888C105.08 22.9399 105.221 21.7349 104.293 20.8242ZM102.675 25.7981C102.675 24.2569 102.675 22.7998 102.675 21.2866C102.521 21.2726 102.31 21.2726 102.113 21.2586C101.93 22.8278 102.338 24.327 101.902 25.7981C102.085 25.7981 102.338 25.7981 102.675 25.7981ZM105.094 25.9242C105.305 25.9803 105.502 26.0363 105.685 26.0923C106.05 24.8314 106.05 24.8314 105.403 24.6212C105.305 25.0275 105.207 25.4338 105.094 25.9242Z",
      fill: "#FFF3E7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M52.0809 20.8798C52.8262 21.6084 52.6856 22.7293 52.8965 23.724C52.9387 23.9342 53.009 24.1724 53.1355 24.3545C53.2621 24.5647 53.6136 24.7328 53.5996 24.915C53.5714 25.3913 53.4168 25.8677 53.248 26.3161C53.2199 26.4141 52.8684 26.4562 52.6996 26.4141C51.8419 26.232 51.0544 25.3493 50.9278 24.4526C50.8294 23.738 50.745 23.0235 50.6325 22.3089C50.6044 22.1128 50.5201 21.9166 50.4497 21.7345C50.3794 21.7485 50.2951 21.7625 50.2248 21.7765C50.2248 22.2949 50.2248 22.8133 50.2248 23.3317C50.2248 24.0043 50.2529 24.6908 50.2107 25.3633C50.1966 25.6435 50.0279 26.176 49.9435 26.176C49.4795 26.176 49.0154 26.3861 48.5233 25.9238C48.0452 25.4754 48.0874 25.0411 48.0874 24.5507C48.0874 21.9446 48.0874 19.3246 48.0874 16.7185C48.0874 15.4155 48.0874 15.4015 49.5076 15.6537C49.5076 16.9427 49.5076 18.2598 49.5076 19.5768C49.606 19.5908 49.6904 19.6048 49.7888 19.6048C50.1544 18.8482 49.7467 17.9375 49.9998 17.1529C50.056 17.1529 50.1123 17.1529 50.1826 17.1529C50.1826 17.8815 50.1826 18.596 50.1826 19.3246C50.281 19.3386 50.3654 19.3386 50.4638 19.3526C50.5763 18.596 50.6888 17.8254 50.7872 17.0688C50.8857 16.3683 51.0825 15.7518 51.7715 15.4155C52.2075 15.2054 52.5028 15.2894 52.5731 15.7938C52.6434 16.2982 52.9809 16.8727 52.1653 17.1669C51.9965 17.237 51.9544 17.7413 51.9122 18.0496C51.7856 18.8902 51.8419 19.787 51.0825 20.4174C51.6309 20.8658 51.87 20.4174 51.9684 20.0812C52.1512 19.4367 52.2356 18.7641 52.334 18.1056C52.4465 17.349 52.6856 17.1249 53.5433 17.1949C52.6153 17.6573 52.6856 18.4559 52.5871 19.2125C52.5309 19.7169 52.2918 20.2213 52.0809 20.8798ZM49.5217 21.2301C49.5217 22.5331 49.5357 23.7941 49.5076 25.0411C49.5076 25.3073 49.3107 25.5595 49.2264 25.7696C49.3529 25.7696 49.6201 25.7696 49.9154 25.7696C49.9998 24.2565 49.8592 22.7853 50.0138 21.2721C49.9857 21.2721 49.7888 21.2441 49.5217 21.2301ZM52.2637 24.1023C52.334 24.0883 52.4043 24.0883 52.4746 24.0743C52.4746 22.5191 52.2637 21.6924 51.7856 21.2581C51.9544 22.2249 52.109 23.1636 52.2637 24.1023ZM52.8965 24.6067C52.7559 25.1532 52.6434 25.5595 52.5309 25.9798C52.5731 26.0218 52.6293 26.0779 52.6715 26.1199C52.7981 26.0218 53.009 25.9378 53.0371 25.8117C53.1215 25.4334 53.5152 25.0271 52.8965 24.6067Z",
      fill: "#FFF3E7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M18.9092 23.5841C18.7967 24.2847 18.7123 24.9572 18.5717 25.6157C18.5295 25.8259 18.3327 26.1761 18.2061 26.1902C17.7421 26.1902 17.2077 26.1902 16.8281 25.98C16.35 25.7138 16.4484 25.1814 16.5609 24.677C17.1656 21.8608 17.7421 19.0305 18.3045 16.2003C18.403 15.7239 18.5717 15.4998 19.0779 15.5558C19.5139 15.5978 19.9357 15.4297 20.0623 16.1583C20.6388 19.2687 21.3138 22.3511 21.9465 25.4476C21.9606 25.4896 21.9184 25.5316 21.9043 25.6157C21.6934 25.6437 21.4825 25.6858 21.2575 25.7138C21.2575 25.7418 21.2575 25.7558 21.2575 25.7838C21.5528 25.7838 21.8481 25.7838 22.2137 25.7838C21.6231 22.9116 21.0325 20.0533 20.456 17.2091C20.5122 17.1671 20.5825 17.139 20.6388 17.097C20.7232 17.2511 20.8497 17.3912 20.8919 17.5594C21.2575 19.2827 21.6231 21.0061 21.9747 22.7294C22.1715 23.6822 22.3543 24.6349 22.5652 25.5877C22.6637 26.0641 22.4949 26.2182 22.0309 26.2322C20.8497 26.2602 20.4701 25.98 20.2873 24.8031C20.2591 24.663 20.231 24.5369 20.2029 24.3967C19.992 23.416 19.992 23.416 18.9092 23.5841ZM18.1499 25.7838C18.2202 25.4055 18.2624 25.0833 18.3186 24.761C18.403 24.2987 18.3749 23.7382 18.628 23.43C18.853 23.1638 19.4295 23.1918 20.0201 23.0377C19.3451 23.0377 18.853 23.0377 18.2764 23.0377C18.1639 23.6822 18.0796 24.3547 17.9108 24.9992C17.8405 25.3075 17.6015 25.5597 17.4327 25.8399C17.3765 25.8259 17.3062 25.8119 17.2499 25.7838C17.5452 25.7838 17.8264 25.7838 18.1499 25.7838ZM18.4592 21.6646C19.0779 21.2303 19.3732 18.9885 19.0498 18.0638C18.867 19.2127 18.6702 20.3616 18.4592 21.6646Z",
      fill: "#FFF3E7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M24.8572 15.5419C24.8572 17.0971 24.8572 18.5262 24.8572 19.9693C24.9275 19.9693 24.9978 19.9693 25.0682 19.9553C25.0682 19.0166 25.0682 18.0778 25.0682 17.1391C25.1525 17.1251 25.2369 17.1251 25.3213 17.1111C25.6587 18.1199 25.251 19.2267 25.5463 20.2776C26.1509 20.2776 26.5306 20.1655 26.5024 19.4369C26.4603 18.3441 26.5165 17.2372 26.4743 16.1443C26.4462 15.3877 26.9524 15.5699 27.3602 15.5278C27.8524 15.4718 28.0071 15.6679 28.0071 16.1583C27.9789 19.1006 27.993 22.043 27.9508 24.9853C27.9508 25.2515 27.7258 25.5317 27.6133 25.7699C27.6836 25.7699 27.9508 25.7699 28.3023 25.7699C28.3023 22.8696 28.3023 19.9974 28.3023 17.1111C28.3586 17.0971 28.4148 17.0691 28.4711 17.055C28.5414 17.1671 28.668 17.2652 28.668 17.3773C28.682 20.1094 28.682 22.8416 28.6539 25.5737C28.6539 25.7699 28.4851 26.1202 28.3586 26.1342C27.9367 26.1762 27.3883 26.2463 27.093 26.0361C26.7415 25.7839 26.39 25.3916 26.4603 24.7751C26.5587 24.0185 26.4884 23.2479 26.4884 22.3932C25.4759 22.5614 24.6744 22.3372 24.0276 21.5386C23.5776 20.9781 23.3386 20.3897 23.3386 19.6891C23.3245 18.4702 23.3386 17.2652 23.3104 16.0462C23.2964 15.6399 23.4511 15.4998 23.8448 15.5278C24.112 15.5559 24.3932 15.5419 24.8572 15.5419Z",
      fill: "#FFF3E7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M34.2647 15.7241C34.0538 16.2145 33.9835 16.9431 33.6038 17.1673C33.1679 17.4195 32.4789 17.2233 31.8602 17.2233C31.8602 18.0219 31.8602 18.7785 31.8602 19.5351C31.9305 19.5351 31.9867 19.5351 32.057 19.5351C32.057 18.8486 32.057 18.1621 32.057 17.4615C32.957 17.3774 33.7444 17.3074 34.5319 17.2373C34.6022 17.6577 34.5319 17.7277 33.8288 17.7137C33.407 17.6997 32.9992 17.7137 32.5211 17.7137C32.5211 18.3022 32.5211 18.8766 32.5211 19.367C33.1257 19.5632 33.7444 19.6752 34.2366 19.9835C34.4194 20.0956 34.3491 20.684 34.321 21.0483C34.2366 22.4775 33.0414 21.3005 32.507 21.889C32.507 22.4915 32.507 23.192 32.507 23.8505C33.1257 23.9906 33.7023 24.0607 34.2507 24.2569C34.4616 24.3269 34.6444 24.6211 34.7288 24.8593C34.8131 25.0835 34.7428 25.3637 34.7428 25.6299C34.7569 26.0363 34.5881 26.2324 34.1663 26.2184C33.2242 26.2044 32.2961 26.2184 31.3539 26.2044C30.8055 26.1904 30.2993 25.5879 30.2993 24.9574C30.2993 22.2673 30.2993 19.5912 30.2993 16.9011C30.2993 15.542 30.2853 15.542 31.6774 15.542C32.4226 15.542 33.1679 15.542 33.9272 15.556C33.9975 15.556 34.0538 15.612 34.2647 15.7241ZM33.5757 21.1744C32.957 21.2024 32.3664 21.2305 31.8883 21.2445C31.8883 22.2393 31.8883 23.0939 31.8883 23.9626C31.9586 23.9626 32.0289 23.9626 32.0852 23.9486C32.0852 23.122 32.0852 22.3093 32.0852 21.4687C32.7461 21.4266 33.3226 21.3986 33.9554 21.3706C33.9272 20.9362 33.9132 20.572 33.8851 20.2077C33.8147 20.2077 33.7585 20.2077 33.6882 20.2077C33.6601 20.5019 33.6319 20.7961 33.5757 21.1744ZM34.2928 24.6071C34.1522 24.6772 34.1241 24.6912 34.11 24.7052C34.0819 24.7612 34.0397 24.8313 34.0538 24.9014C34.1804 25.6019 33.7866 25.7 33.2101 25.672C32.5492 25.6299 31.8742 25.658 31.2133 25.658C31.2133 25.7 31.2133 25.742 31.2133 25.7841C32.2398 25.7841 33.2663 25.7841 34.3069 25.7841C34.2928 25.3777 34.2928 25.0275 34.2928 24.6071Z",
      fill: "#FFF3E7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M6.80252 17.5034C6.85877 17.3773 6.90095 17.2512 6.9572 17.1111C7.04157 17.2092 7.16813 17.2933 7.18219 17.3913C7.35093 18.1199 7.49155 18.8485 7.7306 19.563C7.92746 18.4001 8.11026 17.2372 8.33525 16.0743C8.37744 15.8501 8.48993 15.4578 8.61649 15.4438C8.96803 15.3878 9.3477 15.4718 9.7133 15.5419C9.78361 15.5559 9.85392 15.8221 9.82579 15.9622C9.29145 18.6944 8.74304 21.4405 8.18057 24.1727C7.99777 25.0694 7.63216 25.798 6.42285 25.9801C7.60404 26.1342 8.08214 25.882 8.30713 24.9013C8.77116 22.8416 9.16489 20.754 9.58675 18.6804C9.68518 18.232 9.76955 17.7696 9.86798 17.3213C9.8961 17.1812 9.92423 17.0271 9.96641 16.8869C10.0648 16.971 10.1633 17.0551 10.2617 17.1391C9.96641 18.6523 9.68518 20.1655 9.38988 21.6787C9.17896 22.7436 8.98209 23.8224 8.72898 24.8732C8.54618 25.6298 8.16651 26.3024 7.29468 26.4004C6.50723 26.4845 5.73383 26.2323 5.42447 25.4897C5.22761 25.0133 5.38229 24.3828 5.38229 23.7383C6.73221 24.4669 6.98532 24.3268 7.19625 22.8837C6.53535 22.9397 6.40879 22.5054 6.28224 21.9729C5.77601 19.8713 5.22761 17.7836 4.6792 15.654C4.87606 15.5839 5.0448 15.4998 5.21355 15.4578C6.12756 15.2476 6.24005 15.3177 6.45098 16.2004C6.54941 16.6207 6.70409 17.0411 6.83065 17.4614C6.99939 18.5963 7.18219 19.7312 7.35093 20.8521C7.4353 20.838 7.51967 20.824 7.6181 20.796C7.33687 19.7312 7.06969 18.6103 6.80252 17.5034Z",
      fill: "#FFF3E7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M73.1319 21.7628C73.1319 23.0098 73.1319 24.2988 73.1178 25.5738C73.1178 25.6298 72.935 25.6859 72.7663 25.7839C73.1037 25.7839 73.3709 25.7839 73.7084 25.7839C73.7084 24.4809 73.7084 23.2059 73.7084 21.9449C76.2677 21.5246 76.7036 20.712 76.3239 17.1672C76.8442 17.3213 76.9848 18.0499 76.802 19.6891C76.6473 21.2304 75.7474 22.071 74.0881 22.2111C74.0881 23.1919 74.1162 24.1867 74.074 25.1815C74.0599 25.5317 73.8912 26.1482 73.7225 26.1762C73.2584 26.2323 72.8084 26.3304 72.26 25.896C71.6835 25.4196 71.7538 24.9713 71.7538 24.4529C71.7397 21.7207 71.7538 18.9886 71.7397 16.2565C71.7397 15.7521 71.8522 15.5279 72.4007 15.5699C72.8928 15.6119 73.385 15.5699 73.8771 15.5839C75.0021 15.6119 75.5646 16.0183 75.8458 17.0971C76.113 18.1339 76.0989 19.1707 75.7052 20.1795C75.2974 21.1743 74.9599 21.3705 73.1319 21.7628ZM73.1881 17.1952C73.1881 18.0639 73.1741 18.8625 73.2022 19.6471C73.2022 19.7592 73.3569 19.8713 73.4553 19.9834C73.5397 19.8713 73.6943 19.7732 73.6943 19.6471C73.7225 19.0587 73.6943 18.4842 73.7225 17.8957C73.7365 17.6716 73.8631 17.4474 73.9475 17.1952C73.7365 17.1952 73.4975 17.1952 73.1881 17.1952ZM74.0178 19.7592C74.6787 19.2408 74.5802 18.5823 74.5099 17.9238C74.4959 17.8397 74.3271 17.7556 74.2428 17.6856C74.1724 17.7977 74.0318 17.9238 74.0318 18.0359C74.0037 18.6103 74.0178 19.1848 74.0178 19.7592Z",
      fill: "#FFF3E7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M15.9419 17.2092C15.7591 17.5454 15.5903 17.8817 15.3794 18.288C15.1544 18.0779 15.0138 17.9377 14.8591 17.7976C14.2967 17.2792 13.7764 17.3773 13.5233 18.1059C13.3686 18.5402 13.2702 19.0166 13.2702 19.4649C13.2702 20.6699 13.2983 21.8888 13.3967 23.0938C13.5092 24.4248 13.7483 24.5229 14.831 23.7383C15.4216 23.9345 15.7731 24.2847 15.956 24.9152C16.0825 25.3916 15.97 25.6718 15.6325 25.952C14.7748 26.6666 13.4389 26.6806 12.7077 25.8399C12.1593 25.2095 11.639 24.4388 11.4281 23.6542C10.8937 21.6226 10.9359 19.535 11.4843 17.5034C11.6531 16.8869 12.0327 16.2704 12.4686 15.7801C13.0592 15.1215 14.0436 15.1215 14.7748 15.6399C15.281 16.0042 15.5763 16.4106 15.1966 17.041C15.0982 17.1952 15.1404 17.4193 15.0982 17.7696C15.4075 17.4334 15.5763 17.2512 15.7591 17.0551C15.8153 17.0971 15.8716 17.1531 15.9419 17.2092ZM14.1982 17.041C13.2983 16.8729 12.9045 17.2792 12.8342 17.8817C12.6936 19.0306 12.6374 20.1935 12.6233 21.3564C12.6093 22.0149 12.7358 22.6595 12.8061 23.318C12.9608 21.8468 12.9327 20.3897 12.9608 18.9185C12.9749 18.1339 13.2561 17.4754 14.1982 17.041ZM13.5936 26.0221C14.381 26.1762 15.0419 26.0781 15.506 25.5177C15.6466 25.3496 15.5341 24.9573 15.5341 24.677C15.3091 25.7419 14.4092 25.7699 13.5936 26.0221Z",
      fill: "#FFF3E7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M44.7691 24.4109C45.2613 24.0887 45.5566 23.9065 45.7113 23.7944C46.0769 23.8785 46.33 23.9065 46.569 24.0046C47.0331 24.2008 47.1737 25.5598 46.78 25.8961C45.9925 26.5826 44.7691 26.6247 43.9395 25.9802C43.0958 25.3356 42.5192 24.523 42.3224 23.4582C41.9427 21.3705 41.9287 19.2829 42.5192 17.2373C42.8989 15.9343 43.6864 15.2197 44.6848 15.3038C45.1207 15.3318 45.5706 15.542 45.9503 15.7802C46.344 16.0324 46.5268 16.4107 46.2315 16.9151C46.1191 17.0972 46.1894 17.3774 46.1753 17.7837C46.4987 17.4054 46.6675 17.2233 46.8221 17.0411C46.8784 17.0832 46.9487 17.1252 47.0049 17.1532C46.8503 17.5035 46.6956 17.8538 46.4987 18.2741C46.2878 18.106 46.1753 17.9799 46.0487 17.9098C45.7534 17.7557 45.3597 17.4475 45.1769 17.5455C44.8816 17.6857 44.5301 18.092 44.516 18.4142C44.4176 19.8293 44.4035 21.2444 44.4316 22.6596C44.4316 23.192 44.6285 23.7244 44.7691 24.4109ZM45.1347 17.0832C44.3332 16.901 43.8411 17.1813 43.7848 17.9939C43.6864 19.5351 43.7004 21.0903 43.7286 22.6455C43.7426 23.0939 43.9535 23.5422 44.1223 24.1307C44.052 22.6596 43.9254 21.3425 43.9676 20.0395C43.9957 18.9607 43.8692 17.7557 45.1347 17.0832ZM46.5128 24.4249C46.4565 24.4389 46.3862 24.467 46.33 24.481C46.5128 25.6859 45.4582 25.6719 44.741 26.0362C45.655 26.1203 46.4706 25.9381 46.6112 25.5038C46.7096 25.1955 46.555 24.7892 46.5128 24.4249Z",
      fill: "#FFF3E7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M91.7915 4.78147C91.2853 4.78147 90.8212 4.78147 90.3572 4.78147C83.8466 4.78147 77.3501 4.78147 70.8395 4.78147C70.6567 4.78147 70.4598 4.80949 70.277 4.75345C70.1927 4.72542 70.0942 4.5713 70.0802 4.45922C70.0661 4.38916 70.1927 4.26306 70.277 4.23504C70.4317 4.19301 70.6005 4.22103 70.7692 4.22103C77.5751 4.22103 84.381 4.22103 91.2009 4.22103C91.5103 4.22103 91.9883 4.06691 91.7915 4.78147Z",
      fill: "#FFF3E7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M31.8041 4.22095C35.1508 4.22095 38.4975 4.22095 41.8442 4.23496C42.0551 4.23496 42.266 4.38907 42.4629 4.47314C42.252 4.57121 42.041 4.76736 41.8301 4.76736C35.1367 4.78137 28.4293 4.78137 21.7359 4.76736C21.525 4.76736 21.3141 4.61324 21.1172 4.52918C21.3281 4.43111 21.539 4.23496 21.75 4.23496C25.1107 4.22095 28.4574 4.22095 31.8041 4.22095Z",
      fill: "#FFF3E7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M86.3215 2.93183C80.8937 2.93183 75.5221 2.93183 70.1505 2.93183C70.1083 2.87579 70.0661 2.81974 70.0239 2.7637C70.1645 2.6376 70.277 2.49749 70.4458 2.41342C70.5583 2.35738 70.727 2.39941 70.8676 2.39941C75.8314 2.39941 80.7812 2.39941 85.7449 2.39941C86.0402 2.39941 86.5043 2.27331 86.3215 2.93183Z",
      fill: "#FFF3E7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M34.4894 2.95998C32.0989 2.95998 29.7084 2.95998 27.332 2.95998C27.2195 2.95998 27.0789 2.98801 26.9804 2.94597C26.8117 2.87592 26.657 2.74981 26.4883 2.65174C26.643 2.56767 26.8117 2.41355 26.9664 2.41355C28.5554 2.39954 30.1443 2.39954 31.7474 2.39954C35.0941 2.39954 38.4408 2.39954 41.7875 2.39954C41.8297 2.39954 41.8859 2.38553 41.9281 2.39954C42.1109 2.49762 42.3078 2.6097 42.4906 2.70778C42.3078 2.79185 42.125 2.94597 41.9421 2.94597C39.4532 2.97399 36.9643 2.95998 34.4894 2.95998Z",
      fill: "#FFF3E7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M47.5113 37.9595C47.5113 38.7721 47.4972 39.5847 47.5113 40.4114C47.5254 40.8457 47.3566 41.0279 47.0191 40.9298C47.0191 39.5147 47.0051 38.1136 47.0332 36.7265C47.0332 36.6144 47.2723 36.3902 47.3707 36.4042C47.5394 36.4323 47.7503 36.5724 47.8207 36.7265C48.0738 37.371 48.2706 38.0295 48.5519 38.8702C48.819 38.0715 49.0018 37.4411 49.2549 36.8526C49.3393 36.6564 49.6206 36.5303 49.8174 36.3762C49.9018 36.5584 50.0565 36.7405 50.0705 36.9367C50.169 38.2397 50.2252 39.5427 50.3096 40.9018C50.1127 40.9158 49.9159 40.9158 49.6909 40.9298C49.6487 39.935 49.5924 38.9823 49.5502 38.0295C49.5081 38.0155 49.4659 38.0155 49.4237 38.0015C49.2409 38.5199 49.0581 39.0523 48.8472 39.5707C48.7909 39.7108 48.6222 39.8089 48.4956 39.935C48.3972 39.8089 48.2706 39.7108 48.2144 39.5707C48.0175 39.0383 47.8347 38.4919 47.6519 37.9454C47.6097 37.9314 47.5675 37.9454 47.5113 37.9595Z",
      fill: "#FFF3E7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M53.3742 4.47323C53.4304 4.24905 53.4866 4.0529 53.557 3.82872C54.1897 3.94081 54.7522 3.9268 54.9913 3.19823C53.5148 3.33834 52.7554 2.30152 53.3038 0.928444C53.5429 0.325971 53.9929 0.0317383 54.6538 0.0317383C55.3006 0.0317383 55.7225 0.368003 55.8912 0.956465C56.1724 1.8952 56.1303 2.84795 55.6522 3.73064C55.2022 4.5713 54.3866 4.83751 53.3742 4.47323ZM55.3709 1.62899C55.0194 1.29273 54.7803 1.06855 54.5413 0.844377C54.3725 1.1246 54.0632 1.41883 54.0632 1.69905C54.0632 1.95125 54.3866 2.21746 54.5694 2.46965C54.8085 2.23147 55.0334 1.99328 55.3709 1.62899Z",
      fill: "#FFF3E7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M28.0495 36.9087C29.2026 37.1889 29.8775 37.8474 30.1166 38.9123C29.7931 39.907 29.1322 40.7477 28.0214 40.7757C27.262 40.8038 26.0949 39.5007 26.1933 38.9123C26.2637 38.4499 26.5871 37.9595 26.9246 37.6092C27.248 37.259 27.7401 37.0908 28.0495 36.9087ZM27.5011 40.3134C27.6276 39.837 27.7261 39.5147 27.8104 39.1925C27.473 39.2766 27.1355 39.3606 26.6996 39.4727C26.9667 39.7529 27.2058 40.0051 27.5011 40.3134ZM28.8088 40.2994C29.0901 39.9911 29.3291 39.7389 29.5822 39.4727C29.1463 39.3606 28.8088 39.2766 28.4854 39.2065C28.5698 39.5287 28.6682 39.837 28.8088 40.2994ZM26.573 38.2117C27.1495 38.3518 27.473 38.4219 27.8104 38.4919C27.712 38.1557 27.6276 37.8334 27.487 37.3711C27.1495 37.6793 26.9105 37.9035 26.573 38.2117ZM29.7088 38.1977C29.3854 37.9035 29.1322 37.6793 28.8229 37.3851C28.6823 37.8614 28.5979 38.1837 28.4995 38.5059C28.8369 38.4219 29.1604 38.3378 29.7088 38.1977Z",
      fill: "#FFF3E7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M85.056 36.9226C86.0685 37.1888 86.7856 37.7773 86.9966 38.9542C86.5044 39.991 86.5044 39.991 84.9014 40.9578C84.2686 40.3413 83.5936 39.6828 83.0171 39.1223C83.3686 37.8754 84.0155 37.1748 85.056 36.9226ZM83.4671 38.2396C84.9014 38.4078 85.4357 39.1784 85.7451 40.2853C86.0122 39.991 86.2372 39.7528 86.5044 39.4726C85.3232 39.2344 84.6904 38.5759 84.4373 37.3569C84.0998 37.6652 83.8327 37.9034 83.4671 38.2396ZM84.2967 40.3693C84.367 40.3133 84.4373 40.2572 84.4936 40.1872C84.5498 39.8929 84.592 39.5987 84.6623 39.2484C84.3248 39.3185 84.0295 39.3745 83.6358 39.4586C83.8889 39.8089 84.0858 40.0891 84.2967 40.3693ZM85.4216 38.5199C85.7732 38.4078 86.0685 38.3237 86.5185 38.1836C86.2513 37.9034 86.0544 37.6792 85.7591 37.371C85.6045 37.8754 85.5201 38.1836 85.4216 38.5199Z",
      fill: "#FFF3E7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M66.9579 37.7493C66.522 38.674 66.0861 39.5987 65.622 40.4955C65.5236 40.6916 65.2283 40.7897 65.0174 40.9298C64.933 40.7196 64.7643 40.5235 64.7643 40.3133C64.7361 39.1784 64.7221 38.0295 64.7502 36.8946C64.7502 36.7125 64.9892 36.5444 65.1017 36.3762C65.2002 36.5444 65.397 36.7125 65.397 36.8806C65.4252 37.7073 65.4111 38.5339 65.5377 39.4026C65.9454 38.5619 66.3392 37.7073 66.7892 36.8806C66.9017 36.6705 67.211 36.5444 67.4219 36.3762C67.5204 36.6144 67.6891 36.8666 67.7032 37.1048C67.7313 38.1976 67.7313 39.2905 67.7032 40.3834C67.7032 40.5655 67.4922 40.7336 67.3798 40.9158C67.2813 40.7476 67.1126 40.5795 67.0985 40.3974C67.0704 39.5147 67.0845 38.632 67.0845 37.7493C67.0423 37.7633 67.0001 37.7493 66.9579 37.7493Z",
      fill: "#FFF3E7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M32.8584 36.39C33.674 36.5301 34.5599 36.0678 35.1786 36.8944C35.502 37.3147 35.3755 37.8752 34.9114 38.5757C35.5301 38.982 35.6286 39.5705 35.3895 40.215C35.1364 40.9156 34.5317 40.9716 33.8849 40.9436C33.5615 40.9296 33.2381 40.9436 32.8584 40.9436C32.8584 39.4164 32.8584 37.9733 32.8584 36.39ZM33.5334 38.954C33.5334 39.4584 33.5334 39.9068 33.5334 40.3551C34.5177 40.4112 34.7849 40.243 34.7708 39.6266C34.7567 39.0101 34.4896 38.87 33.5334 38.954ZM33.5193 36.9925C33.5193 37.4829 33.5193 37.9172 33.5193 38.3936C34.0818 38.3516 34.6161 38.3516 34.6302 37.623C34.6442 36.8104 34.0396 37.0205 33.5193 36.9925Z",
      fill: "#FFF3E7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M56.1309 40.9437C56.1309 39.4165 56.1309 37.9594 56.1309 36.4182C56.9324 36.5023 57.7901 36.0959 58.4229 36.8806C58.7604 37.3009 58.6198 37.8753 58.1417 38.5198C58.7744 39.1783 58.9432 39.7248 58.5916 40.2992C57.987 41.294 57.0167 40.8176 56.1309 40.9437ZM56.7496 38.772C56.7496 39.4446 56.7496 39.8789 56.7496 40.4954C57.1995 40.3412 57.6214 40.2852 57.8886 40.061C58.0292 39.9349 58.0292 39.3745 57.8886 39.2484C57.6214 39.0102 57.1995 38.9402 56.7496 38.772ZM56.7496 38.5058C57.1574 38.3237 57.5511 38.2536 57.7479 38.0154C57.8886 37.8473 57.8886 37.3429 57.7339 37.1888C57.537 36.9926 57.1292 37.0066 56.7496 36.9086C56.7496 37.469 56.7496 37.9033 56.7496 38.5058Z",
      fill: "#FFF3E7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M57.5085 2.60982C57.4945 2.38565 57.4804 2.16147 57.4664 1.89526C57.6773 1.86724 57.8601 1.89526 57.9867 1.82521C58.1835 1.72713 58.3944 1.60103 58.4929 1.4329C58.5491 1.32081 58.4647 0.998561 58.3663 0.942517C58.1835 0.858451 57.846 0.81642 57.7195 0.928507C57.3257 1.27878 57.1008 1.08263 56.8758 0.760374C57.3398 -0.0102297 58.2538 -0.234405 58.9569 0.26999C59.5334 0.690319 59.5475 1.46092 58.985 2.17548C59.6459 2.87603 59.7444 3.54856 59.2381 4.13702C58.7038 4.78153 57.6914 4.85158 56.707 4.26312C56.7773 4.06697 56.8476 3.8568 56.918 3.66065C57.5226 3.67466 58.2819 4.31916 58.5632 3.38043C58.8022 2.60982 58.0429 2.69389 57.5085 2.60982Z",
      fill: "#FFF3E7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M82.7492 0.844122C82.5102 0.914178 82.2711 1.02627 82.0461 1.02627C78.2495 1.04028 74.4668 1.02627 70.6702 1.01226C70.4733 1.01226 70.2765 0.830111 70.0796 0.746044C70.2765 0.647966 70.4733 0.47983 70.6842 0.47983C74.4809 0.465819 78.2635 0.46582 82.0602 0.46582C82.2852 0.46582 82.5102 0.563897 82.7352 0.619942C82.7352 0.675987 82.7351 0.760055 82.7492 0.844122Z",
      fill: "#FFF3E7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M54.711 38.7163C54.6125 39.1927 54.5704 39.655 54.4297 40.0894C54.2329 40.7059 53.7829 41.0001 53.1079 41.0001C52.4189 41.0001 51.9127 40.6498 51.8283 40.0473C51.7018 39.1646 51.6877 38.2539 51.8143 37.3852C51.8986 36.7267 52.4189 36.3064 53.1642 36.3204C53.8673 36.3344 54.2891 36.7407 54.4719 37.3712C54.5844 37.8056 54.6266 38.2679 54.711 38.7163ZM52.2642 38.6602C52.3345 39.1086 52.3486 39.585 52.4892 40.0053C52.5595 40.2155 52.8829 40.4677 53.0798 40.4537C53.3189 40.4397 53.7266 40.1734 53.7407 40.0053C53.811 39.1226 53.797 38.2259 53.7266 37.3432C53.7126 37.1751 53.3048 36.9089 53.0657 36.9089C52.8689 36.8949 52.5455 37.1611 52.4752 37.3572C52.3486 37.7635 52.3345 38.2119 52.2642 38.6602Z",
      fill: "#FFF3E7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M62.093 4.5992C62.0648 4.29096 62.0367 4.02475 62.0086 3.67447C61.4602 3.67447 60.9258 3.67447 60.2368 3.67447C60.3774 3.18408 60.4337 2.77776 60.6165 2.42749C60.954 1.76897 61.4039 1.16649 61.7414 0.493964C62.0086 -0.0524662 62.2898 -0.0384547 62.782 0.325832C62.2898 1.16649 61.7836 2.00716 61.2352 2.93188C61.5446 2.9459 61.7695 2.95991 62.0508 2.97392C62.1211 2.59562 62.1773 2.23133 62.2476 1.82501C62.4867 1.811 62.7257 1.79699 62.9507 1.79699C63.1617 2.27337 62.7398 2.93189 63.4991 3.10002C63.5273 3.11403 63.5132 3.57639 63.4851 3.57639C62.8523 3.67447 63.0914 4.20689 62.9789 4.5992C62.6976 4.5992 62.4304 4.5992 62.093 4.5992Z",
      fill: "#FFF3E7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M30.3412 1.02624C30.1303 0.437766 30.4677 0.451777 30.8193 0.451777C34.5035 0.451777 38.1736 0.451777 41.8577 0.451777C41.9562 0.451777 42.0546 0.423755 42.139 0.465789C42.2655 0.535845 42.3639 0.633923 42.4764 0.732002C42.3639 0.844093 42.2515 1.02624 42.1249 1.04025C41.7734 1.08228 41.4218 1.04025 41.0703 1.04025C37.7236 1.04025 34.3769 1.04025 31.0161 1.04025C30.7912 1.02624 30.5521 1.02624 30.3412 1.02624Z",
      fill: "#FFF3E7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M62.4581 40.8457C62.4581 40.2152 62.4581 39.5987 62.4581 38.9122C61.9378 38.9122 61.4597 38.9122 60.8972 38.9122C60.8972 39.3885 60.8691 39.8929 60.9113 40.3833C60.9394 40.8737 60.7425 41.0138 60.2223 40.8597C60.2223 39.4866 60.2082 38.0855 60.2363 36.6984C60.2363 36.5863 60.4473 36.4742 60.5457 36.3481C60.6722 36.4742 60.8832 36.6003 60.8832 36.7405C60.9253 37.2168 60.8972 37.7072 60.8972 38.2256C61.4175 38.2256 61.8956 38.2256 62.43 38.2256C62.43 37.7352 62.4018 37.2729 62.444 36.8245C62.4581 36.6564 62.6549 36.5023 62.7674 36.3481C62.8659 36.5023 63.0627 36.6424 63.0627 36.7965C63.0768 38.0295 63.0768 39.2624 63.0346 40.4954C63.0346 40.6635 62.7956 40.8317 62.669 40.9998C62.6128 40.9438 62.5425 40.9017 62.4581 40.8457Z",
      fill: "#FFF3E7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M70.0518 38.2117C70.6002 38.3938 70.8392 38.2117 70.9376 37.7073C71.022 37.329 71.1485 36.9367 71.3595 36.6144C71.6829 36.138 72.0344 36.2081 72.2735 36.7545C71.0642 37.5111 71.1345 39.7529 72.4985 40.6216C72.2875 40.7617 72.0907 40.9999 71.9641 40.9578C71.697 40.8878 71.4017 40.7056 71.261 40.4955C71.0782 40.1872 71.0501 39.7949 70.9517 39.4306C70.783 38.8702 70.7548 38.8562 70.0658 38.8702C70.0658 39.5147 70.0658 40.1592 70.0658 40.8037C69.5737 41.0139 69.3909 40.9158 69.4049 40.3974C69.419 39.2064 69.3768 38.0155 69.4049 36.8386C69.4049 36.6705 69.6158 36.5163 69.7283 36.3482C69.8408 36.5023 70.0377 36.6564 70.0518 36.8246C70.0939 37.301 70.0518 37.7633 70.0518 38.2117Z",
      fill: "#FFF3E7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M42.3359 40.8315C42.7578 39.4444 43.1796 38.0573 43.6296 36.6702C43.6718 36.5441 43.8968 36.376 44.0093 36.404C44.178 36.446 44.389 36.6001 44.4452 36.7542C44.8811 38.1133 45.2889 39.4864 45.6967 40.8595C45.1905 41.0416 44.9233 40.9295 44.8389 40.3971C44.7686 39.9488 44.6421 39.5845 44.0093 39.6125C43.489 39.6405 43.2359 39.7806 43.1937 40.285C43.1375 40.7614 42.9687 41.0977 42.3359 40.8315ZM44.4733 39.0521C44.3186 38.5056 44.164 38.0293 43.9812 37.3707C43.8124 38.0433 43.6859 38.5337 43.5452 39.0521C43.8546 39.0521 44.1077 39.0521 44.4733 39.0521Z",
      fill: "#FFF3E7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M76.563 40.832C75.9443 41.0982 75.7755 40.79 75.7052 40.3837C75.6209 39.9073 75.5084 39.6131 74.8897 39.6131C74.2991 39.6131 74.1022 39.8793 74.046 40.3697C73.9897 40.9021 73.7366 41.0562 73.2163 40.8741C73.6241 39.487 74.0319 38.1139 74.4678 36.7408C74.51 36.5867 74.749 36.4326 74.9178 36.4046C75.0162 36.3906 75.2412 36.5727 75.2834 36.7128C75.7052 38.0719 76.1271 39.4449 76.563 40.832ZM75.3115 39.0526C75.1709 38.5202 75.0584 38.0579 74.9318 37.5815C74.8897 37.5815 74.8475 37.5815 74.8053 37.5675C74.6647 38.0579 74.5381 38.5342 74.3834 39.0526C74.735 39.0526 74.9881 39.0526 75.3115 39.0526Z",
      fill: "#FFF3E7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M78.7001 39.1645C78.4048 39.7249 78.1798 40.2153 77.8845 40.6636C77.8002 40.7897 77.5611 40.8318 77.3924 40.9018C77.3643 40.7337 77.3221 40.5656 77.3361 40.3974C77.3502 40.2854 77.4205 40.1733 77.4908 40.0892C78.3486 39.0804 78.3486 38.0856 77.4908 37.0768C77.3783 36.9367 77.308 36.7546 77.2236 36.6005C77.7861 36.2642 77.7861 36.2642 78.1095 36.8667C78.2923 37.217 78.4751 37.5672 78.6861 37.9595C78.9954 37.3851 79.2766 36.8667 79.586 36.2922C79.7829 36.3763 79.9657 36.4604 80.1907 36.5584C80.0641 36.7826 79.9938 36.9788 79.8672 37.1329C78.9954 38.0856 79.0376 39.0244 79.8672 39.9911C80.036 40.1873 80.1344 40.4675 80.261 40.7057C79.6563 41.2241 79.5298 40.6917 79.347 40.3554C79.1501 40.0191 78.9532 39.6408 78.7001 39.1645Z",
      fill: "#FFF3E7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M38.5395 40.7617C38.5817 40.6356 38.5958 40.5656 38.638 40.5095C39.6364 39.2205 39.9457 37.9175 38.4692 36.6565C38.7645 36.5024 38.9333 36.4043 39.1442 36.2922C39.4395 36.8387 39.7207 37.3711 40.0442 37.9736C40.3113 37.4972 40.5223 37.0488 40.7894 36.6425C40.8879 36.5024 41.141 36.4464 41.3097 36.3483C41.3238 36.5444 41.4222 36.8387 41.3238 36.9367C40.241 38.0856 40.4801 39.1925 41.38 40.2994C41.4644 40.4115 41.5206 40.5376 41.605 40.6917C41.2816 41.0139 41.0425 41.07 40.8176 40.6076C40.5926 40.1453 40.3395 39.7109 40.0442 39.1645C39.8051 39.6128 39.6364 39.9631 39.4395 40.3134C39.2708 40.6497 39.1723 41.1961 38.5395 40.7617Z",
      fill: "#FFF3E7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M52.2356 4.52893C51.5465 4.52893 50.8434 4.52893 50.1544 4.52893C49.8732 3.85641 50.3372 3.82838 50.7731 3.78635C50.7731 2.9597 50.7731 2.17509 50.7731 1.32042C50.52 1.44652 50.295 1.5446 49.9857 1.69872C49.9294 1.46053 49.7888 1.23636 49.8451 1.08224C49.9857 0.68993 51.195 0.143503 51.7293 0.199546C51.7293 1.34844 51.7293 2.51135 51.7293 3.49212C52.0387 3.87042 52.2356 4.1086 52.4465 4.3608C52.3762 4.40283 52.3059 4.47289 52.2356 4.52893Z",
      fill: "#FFF3E7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M47.4123 1.9511C46.892 2.02116 46.2873 2.02116 46.2592 2.13324C46.1467 2.62363 46.1326 3.17006 46.2451 3.66044C46.2733 3.78654 46.8779 3.78654 47.2295 3.8566C47.2576 3.80055 47.2857 3.74451 47.2998 3.67445C47.3841 3.87061 47.4685 4.08077 47.5529 4.26291C46.5967 5.01951 45.4014 4.6272 45.1343 3.49231C44.7968 2.0772 45.6827 0.900276 46.9342 1.12445C47.6091 1.27857 47.7075 1.54478 47.4123 1.9511Z",
      fill: "#FFF3E7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M63.3864 13.0759C63.4427 13.23 63.4708 13.3842 63.5552 13.4823C63.6958 13.6364 63.8505 13.8465 64.0333 13.8746C64.1458 13.8886 64.4129 13.6504 64.427 13.5103C64.5254 12.9498 64.9332 12.9498 65.2566 13.118C65.4394 13.216 65.566 13.6644 65.4957 13.9026C65.327 14.5751 64.877 15.0515 64.1458 15.1355C63.4989 15.2056 62.9083 14.8133 62.613 14.1548C62.2334 13.3281 62.4162 13.0619 63.3864 13.0759Z",
      fill: "#FFF3E7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M66.5363 2.07706C66.5363 2.9037 66.5363 3.68832 66.5363 4.51497C66.1988 4.51497 65.9176 4.51497 65.6223 4.51497C65.5941 4.36085 65.5801 4.27678 65.5801 4.1787C65.5801 3.25398 65.5801 2.31524 65.5801 1.33447C66.3394 1.33447 67.0706 1.33447 67.8159 1.33447C67.7877 2.007 67.7877 2.007 66.5363 2.07706Z",
      fill: "#FFF3E7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 10
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 81,
    columnNumber: 7
  }, undefined);
};
const VkusWillLogo = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
    width: "113",
    height: "25",
    viewBox: "0 0 113 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M0 9.57295V19.1459L3.92719 19.1238C8.03397 19.1008 8.22768 19.0911 9.25632 18.8595C12.2087 18.1946 13.688 16.3078 13.5813 13.3431C13.5673 12.9534 13.5283 12.5093 13.4947 12.3563C13.1021 10.5698 12.1803 9.48014 10.5125 8.83105C10.3963 8.7858 10.4093 8.77143 10.7442 8.57477C11.8712 7.91318 12.6087 6.87279 12.8528 5.60017C12.9671 5.00432 12.9311 3.9616 12.7758 3.37344C12.295 1.55193 10.9583 0.518929 8.57492 0.127025C8.13358 0.0544536 7.4871 0.0394232 4.0302 0.0212551L0 0V9.57295ZM55.5214 9.57695V19.1459L59.4486 19.1237C62.8201 19.1047 63.4554 19.0894 63.9387 19.0152C66.8655 18.5659 68.4279 17.3263 68.9792 15.0161C69.0721 14.6272 69.0884 14.4042 69.0868 13.5455C69.0851 12.6124 69.0742 12.4942 68.9478 12.0309C68.6173 10.8192 67.8616 9.77791 66.9191 9.2352C66.794 9.16313 66.5165 9.02938 66.3025 8.93798L65.9134 8.77179L66.0867 8.68424C66.9691 8.23854 67.7757 7.35589 68.1325 6.44577C68.5578 5.36044 68.5606 4.01697 68.1398 2.88407C67.6247 1.49737 66.4365 0.597269 64.6389 0.231984C63.7087 0.0429151 62.8611 0.00895752 59.0623 0.00850205L55.5214 0.00804658V9.57695ZM7.93956 2.77992C8.93251 3.04723 9.48613 3.58017 9.67587 4.45133C9.75889 4.83255 9.74885 5.70098 9.65743 6.04587C9.41701 6.9529 8.77939 7.53702 7.74297 7.79972C7.11545 7.95873 6.4872 8.0022 4.80276 8.00316L3.24476 8.00402V5.35558C3.24476 3.8989 3.26212 2.68989 3.28339 2.66888C3.30461 2.64783 4.27227 2.64034 5.43368 2.65223C7.37832 2.67207 7.57651 2.68219 7.93956 2.77992ZM63.4692 2.78199C64.7187 3.11792 65.2633 3.84718 65.2716 5.19531C65.2753 5.80487 65.1995 6.14556 64.9588 6.60144C64.6235 7.23641 63.9827 7.65574 63.0344 7.86065C62.6121 7.9519 62.3182 7.96809 60.6847 7.99005L58.8177 8.01515V5.32269V2.63017L60.9422 2.65198C62.9129 2.67222 63.0959 2.68164 63.4692 2.78199ZM47.8473 6.00356C45.4705 6.39116 43.6653 7.77735 42.7731 9.89993C42.3882 10.8155 42.2297 11.6753 42.2315 12.837C42.2346 14.8336 42.8263 16.3924 44.0298 17.5749C44.6992 18.2326 45.4326 18.6761 46.3962 19.0056C47.3517 19.3324 47.9213 19.4151 49.2122 19.4143C50.068 19.4139 50.465 19.392 50.8345 19.3252C51.8165 19.1475 52.6689 18.8495 53.2583 18.4778L53.4964 18.3277L53.1381 17.0753C52.941 16.3864 52.7704 15.813 52.759 15.8008C52.7476 15.7887 52.6518 15.8298 52.5461 15.8922C51.9523 16.2427 51.0749 16.5508 50.2938 16.6831C49.3476 16.8435 48.3314 16.6966 47.4369 16.2701C47.0216 16.0721 46.8799 15.9691 46.4817 15.576C46.1023 15.2015 45.9738 15.0332 45.8007 14.6842C45.51 14.098 45.4245 13.7535 45.3905 13.0323C45.2869 10.8288 46.3411 9.20463 48.1821 8.73135C48.7191 8.59334 49.926 8.60529 50.5442 8.75478C51.1013 8.8895 51.7311 9.20321 52.1589 9.55909L52.4789 9.82528L52.5368 9.6105C52.5686 9.49239 52.7432 8.8566 52.9249 8.19775C53.1066 7.53884 53.2552 6.9899 53.2552 6.97785C53.2552 6.92947 52.3025 6.52517 51.8038 6.36191C50.8821 6.06024 50.3564 5.97552 49.2637 5.95265C48.5738 5.93823 48.156 5.95321 47.8473 6.00356ZM15.6057 12.6852V19.1377H17.0994H18.593V16.2024V13.2672L18.8376 13.2677C19.4096 13.2689 19.7346 13.5483 20.9913 15.1195C22.1257 16.5379 23.8205 18.7685 23.9907 19.0673C24.0249 19.1274 24.3494 19.1367 26.0238 19.1256L28.0162 19.1124L27.2094 18.0749C24.7149 14.8671 23.5137 13.3995 22.7471 12.6231L22.236 12.1055L22.7989 11.5097C23.7963 10.454 26.6777 7.20265 27.3072 6.42254L27.4603 6.23276H25.6581H23.8558L23.5843 6.57436C23.0249 7.27806 21.0808 9.61769 20.6309 10.1286C19.7345 11.1467 19.2082 11.58 18.8035 11.6333L18.593 11.6611V8.94694V6.23276H17.0994H15.6057V12.6852ZM27.8637 6.25376C27.8637 6.36829 28.9589 9.21895 29.4596 10.4079C30.3642 12.5557 31.8186 15.5235 32.8326 17.2905C33.1041 17.7637 33.3775 18.2496 33.4402 18.3704L33.5541 18.5899L33.1987 19.256C32.6423 20.2985 31.066 23.1728 30.5298 24.1225L30.044 24.9828L31.696 24.9962C32.6047 25.0035 33.3735 25 33.4045 24.9883C33.5134 24.9472 36.1699 19.6123 37.3258 17.1134C38.4603 14.6607 41.3248 8.115 41.9714 6.49779L42.0779 6.23139L40.373 6.24475L38.6682 6.25806L38.2681 7.39673C37.4824 9.63272 36.5536 12.043 35.8205 13.748C35.6051 14.249 35.3679 14.8018 35.2934 14.9765C35.1836 15.2339 35.1455 15.2819 35.0923 15.2295C34.9783 15.1173 33.7701 12.7242 33.335 11.749C32.6642 10.245 31.2115 6.50705 31.2115 6.28468C31.2115 6.25027 30.6479 6.23276 29.5376 6.23276C28.617 6.23276 27.8637 6.24222 27.8637 6.25376ZM71.1272 12.6852V19.1377H71.5071H71.8871L72.9635 18.1382C74.5572 16.6583 76.2906 15.0924 78.2862 13.3295L80.0631 11.76L80.0763 15.4488L80.0895 19.1377H81.5828H83.0761V12.6852V6.23276H82.6575H82.2389L81.7978 6.59966C80.3429 7.80969 77.0457 10.6897 75.0157 12.5234L74.1402 13.3144L74.1269 9.77356L74.1137 6.23276H72.6204H71.1272V12.6852ZM87.484 6.65027C87.4671 6.87988 87.4182 7.88762 87.3753 8.88965C87.2246 12.4118 86.9977 14.4269 86.6494 15.339C86.3199 16.2017 85.8611 16.5334 84.9138 16.5938C84.4856 16.621 84.461 16.6288 84.4843 16.7289C84.498 16.7872 84.5625 17.3993 84.6275 18.0891C84.6926 18.7789 84.7618 19.3686 84.7814 19.3997C84.8395 19.492 86.0642 19.3658 86.6058 19.2118C87.4912 18.9599 88.1993 18.492 88.6592 17.855C89.337 16.9161 89.7451 15.6204 89.9767 13.6721C90.0169 13.3338 90.3897 9.02184 90.3897 8.89507C90.3897 8.87816 91.4327 8.86435 92.7074 8.86435H95.0251V14.001V19.1377H96.5444H98.0638V12.6852V6.23276H92.7893H87.5147L87.484 6.65027ZM102.422 6.75149C102.404 7.03676 102.366 7.82816 102.338 8.5101C102.156 12.843 101.901 14.8499 101.423 15.7128C101.106 16.2863 100.664 16.5385 99.8815 16.5927L99.4544 16.6223L99.4554 16.8046C99.457 17.0925 99.6997 19.3956 99.7318 19.4271C99.7795 19.4739 101.051 19.3478 101.412 19.2605C101.967 19.126 102.731 18.7337 103.119 18.3836C103.867 17.71 104.409 16.5748 104.705 15.064C104.861 14.2695 104.951 13.4861 105.118 11.4706C105.204 10.4408 105.288 9.43307 105.306 9.23125L105.338 8.86435H107.675H110.013V14.001V19.1377H111.506H113V12.6852V6.23276H107.727H102.454L102.422 6.75149ZM7.79937 10.6555C8.83264 10.8561 9.44075 11.1995 9.87833 11.8293C9.93808 11.9153 10.0504 12.1658 10.1279 12.386C10.2538 12.7436 10.2692 12.8596 10.2712 13.4696C10.2729 13.9907 10.2511 14.2249 10.1795 14.4565C9.85104 15.5191 9.13137 16.1231 7.87699 16.3887C7.49714 16.4692 7.17941 16.4808 5.35643 16.4808H3.27051L3.25722 13.5024L3.24393 10.524L5.31739 10.5501C6.90469 10.57 7.48664 10.5948 7.79937 10.6555ZM62.7599 10.5899C63.8295 10.6956 64.54 10.9495 65.0232 11.3985C65.3573 11.709 65.5142 11.9578 65.6761 12.4341C65.7786 12.7358 65.7958 12.8882 65.7958 13.4949C65.7958 14.1017 65.7786 14.254 65.6761 14.5557C65.4343 15.2669 65.0099 15.7571 64.3684 16.0659C63.5894 16.441 63.0414 16.5061 60.6603 16.5061H58.8177V13.5202V10.5344H60.5084C61.4383 10.5344 62.4514 10.5593 62.7599 10.5899Z",
      fill: "#FFF3E7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 10
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 266,
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

/***/ "./src/components/Sections/Index/InstagramPromoSection/InstagramPromoSection.jsx":
/*!***************************************************************************************!*\
  !*** ./src/components/Sections/Index/InstagramPromoSection/InstagramPromoSection.jsx ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstagramPromoSection": function() { return /* binding */ InstagramPromoSection; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _InstagramPromoSection_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InstagramPromoSection.module.scss */ "./src/components/Sections/Index/InstagramPromoSection/InstagramPromoSection.module.scss");
/* harmony import */ var _InstagramPromoSection_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_InstagramPromoSection_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/styles/Main.module.scss */ "./src/styles/Main.module.scss");
/* harmony import */ var src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Common_Instagram_Instagram__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Common/Instagram/Instagram */ "./src/components/Common/Instagram/Instagram.jsx");

var _jsxFileName = "C:\\Users\\\u042E\u0437\u0435\u0440\\Desktop\\\u0421\u0430\u0439\u0442\u044B\\ko-cheese-react\\src\\components\\Sections\\Index\\InstagramPromoSection\\InstagramPromoSection.jsx";




const InstagramPromoSection = ({
  url
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: (_InstagramPromoSection_module_scss__WEBPACK_IMPORTED_MODULE_3___default().promo),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_4___default().wrapper),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: (_InstagramPromoSection_module_scss__WEBPACK_IMPORTED_MODULE_3___default().title),
        children: "Instagram"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: url,
        target: "_blank",
        className: (_InstagramPromoSection_module_scss__WEBPACK_IMPORTED_MODULE_3___default().subscribe),
        children: "\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u043D\u0430\u0441"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
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

/***/ "./src/components/Sections/Index/InstagramSection/InstagramSection.jsx":
/*!*****************************************************************************!*\
  !*** ./src/components/Sections/Index/InstagramSection/InstagramSection.jsx ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstagramSection": function() { return /* binding */ InstagramSection; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _InstagramSection_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./InstagramSection.module.scss */ "./src/components/Sections/Index/InstagramSection/InstagramSection.module.scss");
/* harmony import */ var _InstagramSection_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_InstagramSection_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/styles/Main.module.scss */ "./src/styles/Main.module.scss");
/* harmony import */ var src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_api_instagram__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/api/_instagram */ "./src/api/_instagram.js");
/* harmony import */ var _components_Common_Instagram_Instagram__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Common/Instagram/Instagram */ "./src/components/Common/Instagram/Instagram.jsx");

var _jsxFileName = "C:\\Users\\\u042E\u0437\u0435\u0440\\Desktop\\\u0421\u0430\u0439\u0442\u044B\\ko-cheese-react\\src\\components\\Sections\\Index\\InstagramSection\\InstagramSection.jsx";





const InstagramSection = () => {
  const [photos, setPhotos] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);

  const getInstagramData = async () => {
    return await (0,src_api_instagram__WEBPACK_IMPORTED_MODULE_2__._instagram)();
  };

  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
    getInstagramData().then(res => setPhotos(res));
  }, []);
  const instagramUser = 'ko-cheese';
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_4___default().wrapper),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_InstagramSection_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),
        children: photos.map(({
          permalink,
          media_url,
          caption,
          timestamp,
          thumbnail_url
        }, i) => i < 4 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_Instagram_Instagram__WEBPACK_IMPORTED_MODULE_3__.Instagram, {
          url: permalink,
          image: media_url,
          videoCover: thumbnail_url,
          text: caption,
          user: instagramUser,
          date: timestamp.slice(0, 10)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 25
        }, undefined) : false)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 10
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 7
  }, undefined);
};

/***/ }),

/***/ "./src/components/Sections/Index/PromoSection/Partner/Partner.jsx":
/*!************************************************************************!*\
  !*** ./src/components/Sections/Index/PromoSection/Partner/Partner.jsx ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Partner": function() { return /* binding */ Partner; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Partner_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Partner.module.scss */ "./src/components/Sections/Index/PromoSection/Partner/Partner.module.scss");
/* harmony import */ var _Partner_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Partner_module_scss__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\\u042E\u0437\u0435\u0440\\Desktop\\\u0421\u0430\u0439\u0442\u044B\\ko-cheese-react\\src\\components\\Sections\\Index\\PromoSection\\Partner\\Partner.jsx";


const Partner = ({
  logo,
  link
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
    href: link,
    className: (_Partner_module_scss__WEBPACK_IMPORTED_MODULE_2___default().partner),
    children: logo
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 7
  }, undefined);
};

/***/ }),

/***/ "./src/components/Sections/Index/PromoSection/PromoSection.jsx":
/*!*********************************************************************!*\
  !*** ./src/components/Sections/Index/PromoSection/PromoSection.jsx ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PromoSection": function() { return /* binding */ PromoSection; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PromoSection_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PromoSection.module.scss */ "./src/components/Sections/Index/PromoSection/PromoSection.module.scss");
/* harmony import */ var _PromoSection_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_PromoSection_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/styles/Main.module.scss */ "./src/styles/Main.module.scss");
/* harmony import */ var src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Partner_Partner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Partner/Partner */ "./src/components/Sections/Index/PromoSection/Partner/Partner.jsx");
/* harmony import */ var _components_SVG_PartnersSVG__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/SVG/PartnersSVG */ "./src/components/SVG/PartnersSVG.jsx");


var _jsxFileName = "C:\\Users\\\u042E\u0437\u0435\u0440\\Desktop\\\u0421\u0430\u0439\u0442\u044B\\ko-cheese-react\\src\\components\\Sections\\Index\\PromoSection\\PromoSection.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const partners = [{
  link: "/",
  logo: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_SVG_PartnersSVG__WEBPACK_IMPORTED_MODULE_4__.AbLogo, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 13
  }, undefined)
}, {
  link: "/",
  logo: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_SVG_PartnersSVG__WEBPACK_IMPORTED_MODULE_4__.UsachevLogo, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 13
  }, undefined)
}, {
  link: "/",
  logo: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_SVG_PartnersSVG__WEBPACK_IMPORTED_MODULE_4__.VkusWillLogo, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 13
  }, undefined)
}];
const PromoSection = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("section", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_PromoSection_module_scss__WEBPACK_IMPORTED_MODULE_5___default().promo)),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_6___default().wrapper)),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_PromoSection_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title)),
        children: ["\u041C\u0430\u0433\u0430\u0437\u0438\u043D \u043D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u044B\u0445", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
          className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_6___default().italic)),
          children: "\u043C\u043E\u043B\u043E\u0447\u043D\u044B\u0445 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 16
        }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 75
        }, undefined), "\u0440\u0443\u0447\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_PromoSection_module_scss__WEBPACK_IMPORTED_MODULE_5___default().link)),
        children: "\u0421 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u043E\u0439 \u043F\u043E \u041C\u043E\u0441\u043A\u0432\u0435 \u0438 \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_PromoSection_module_scss__WEBPACK_IMPORTED_MODULE_5___default().footer)),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
          className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_PromoSection_module_scss__WEBPACK_IMPORTED_MODULE_5___default().remark)),
          children: "\u0442\u0435\u043F\u0435\u0440\u044C \u0432 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430\u0445"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 16
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_PromoSection_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container)),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_PromoSection_module_scss__WEBPACK_IMPORTED_MODULE_5___default().block))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 19
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_PromoSection_module_scss__WEBPACK_IMPORTED_MODULE_5___default().partners)),
            children: partners.map((logo, i) => /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Partner_Partner__WEBPACK_IMPORTED_MODULE_3__.Partner, _objectSpread(_objectSpread({}, logo), {}, {
              key: i,
              __self: undefined,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 25
              }
            })))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 19
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_PromoSection_module_scss__WEBPACK_IMPORTED_MODULE_5___default().block)),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              href: "/",
              target: "_blank",
              className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_PromoSection_module_scss__WEBPACK_IMPORTED_MODULE_5___default().inst)),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
                width: "39",
                height: "39",
                viewBox: "0 0 39 39",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                  d: "M19.4985 0C14.1982 0 13.5376 0.0255938 11.4633 0.113344C9.38048 0.215719 7.9716 0.538688 6.72848 1.02131C5.42741 1.51249 4.24913 2.28152 3.27576 3.27478C2.27973 4.24588 1.51027 5.42482 1.02229 6.7275C0.539664 7.97062 0.216695 9.3795 0.11432 11.4623C0.0204766 13.5379 0.000976562 14.1972 0.000976562 19.4976C0.000976562 24.7979 0.0265703 25.4585 0.11432 27.5328C0.216695 29.6095 0.539664 31.0245 1.02229 32.2676C1.51347 33.5687 2.2825 34.747 3.27576 35.7203C4.24685 36.7164 5.42579 37.4858 6.72848 37.9738C7.9716 38.4503 9.38657 38.7794 11.4633 38.8818C13.5389 38.9756 14.1982 38.9951 19.4985 38.9951C24.7989 38.9951 25.4594 38.9695 27.5338 38.8818C29.6105 38.7794 31.0255 38.4491 32.2686 37.9738C33.5697 37.4826 34.7479 36.7136 35.7213 35.7203C36.7186 34.7503 37.4883 33.5711 37.9748 32.2676C38.4513 31.0245 38.7804 29.6095 38.8828 27.5328C38.9766 25.4572 38.9961 24.7979 38.9961 19.4976C38.9961 14.1972 38.9705 13.5367 38.8828 11.4623C38.7804 9.38559 38.4501 7.96331 37.9748 6.7275C37.4836 5.42644 36.7146 4.24815 35.7213 3.27478C34.7513 2.27747 33.572 1.50781 32.2686 1.02131C31.0255 0.538688 29.6105 0.215719 27.5338 0.113344C25.4582 0.0195 24.7989 0 19.4985 0ZM19.4985 3.51C24.7038 3.51 25.3254 3.53559 27.3826 3.62334C29.2802 3.71231 30.3137 4.02919 30.9999 4.29731C31.8482 4.61044 32.6159 5.10882 33.2473 5.75616C33.8935 6.38482 34.39 7.15083 34.7 7.99744C34.9681 8.68359 35.285 9.71709 35.374 11.6147C35.4617 13.6719 35.4873 14.2947 35.4873 19.4988C35.4873 24.7028 35.4617 25.3256 35.3667 27.3829C35.2643 29.2805 34.9474 30.314 34.6805 31.0001C34.3112 31.9154 33.8993 32.5553 33.2192 33.2475C32.5858 33.8908 31.8185 34.3868 30.9718 34.7002C30.2942 34.9684 29.2461 35.2852 27.3412 35.3742C25.273 35.462 24.6636 35.4876 19.4449 35.4876C14.2262 35.4876 13.6181 35.462 11.5474 35.3669C9.64982 35.2645 8.60291 34.9477 7.91676 34.6807C6.99051 34.3115 6.35554 33.8995 5.67548 33.2195C4.98932 32.5333 4.55301 31.8801 4.21663 30.9721C3.94363 30.2945 3.63163 29.2463 3.53048 27.3414C3.46101 25.2976 3.4281 24.6638 3.4281 19.4695C3.4281 14.2777 3.46101 13.6427 3.53048 11.5733C3.63163 9.66834 3.94363 8.62266 4.21663 7.94259C4.55301 7.01513 4.99054 6.38137 5.67548 5.69522C6.35432 5.01638 6.99051 4.57762 7.91676 4.23394C8.60291 3.96703 9.62423 3.65016 11.5291 3.55509C13.5974 3.48075 14.2067 3.45394 19.4181 3.45394L19.4985 3.51ZM19.4985 9.49041C18.1839 9.48993 16.8821 9.7485 15.6675 10.2514C14.4528 10.7542 13.3492 11.4915 12.4196 12.4211C11.49 13.3506 10.7528 14.4543 10.2499 15.6689C9.74704 16.8836 9.48847 18.1854 9.48895 19.5C9.48847 20.8146 9.74704 22.1164 10.2499 23.3311C10.7528 24.5457 11.49 25.6494 12.4196 26.5789C13.3492 27.5085 14.4528 28.2458 15.6675 28.7486C16.8821 29.2515 18.1839 29.5101 19.4985 29.5096C20.8132 29.5101 22.115 29.2515 23.3296 28.7486C24.5443 28.2458 25.6479 27.5085 26.5775 26.5789C27.507 25.6494 28.2443 24.5457 28.7472 23.3311C29.25 22.1164 29.5086 20.8146 29.5081 19.5C29.5086 18.1854 29.25 16.8836 28.7472 15.6689C28.2443 14.4543 27.507 13.3506 26.5775 12.4211C25.6479 11.4915 24.5443 10.7542 23.3296 10.2514C22.115 9.7485 20.8132 9.48993 19.4985 9.49041ZM19.4985 25.9996C15.9057 25.9996 12.9989 23.0929 12.9989 19.5C12.9989 15.9071 15.9057 13.0004 19.4985 13.0004C23.0914 13.0004 25.9981 15.9071 25.9981 19.5C25.9981 23.0929 23.0914 25.9996 19.4985 25.9996ZM32.2515 9.09066C32.2509 9.71181 32.0037 10.3073 31.5642 10.7463C31.1248 11.1853 30.529 11.4319 29.9079 11.4319C29.6007 11.4319 29.2966 11.3714 29.0129 11.2538C28.7291 11.1363 28.4713 10.964 28.2541 10.7469C28.0369 10.5297 27.8647 10.2719 27.7471 9.98811C27.6296 9.70435 27.5691 9.40023 27.5691 9.09309C27.5691 8.78596 27.6296 8.48184 27.7471 8.19808C27.8647 7.91433 28.0369 7.6565 28.2541 7.43933C28.4713 7.22215 28.7291 7.04988 29.0129 6.93234C29.2966 6.81481 29.6007 6.75431 29.9079 6.75431C31.1961 6.75431 32.2515 7.80244 32.2515 9.09066Z",
                  fill: "#FFF3E7"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 53,
                  columnNumber: 28
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 25
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 22
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 19
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 16
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
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

/***/ }),

/***/ "./src/components/Sections/Index/RecipesSection/RecipesSection.jsx":
/*!*************************************************************************!*\
  !*** ./src/components/Sections/Index/RecipesSection/RecipesSection.jsx ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipesSection": function() { return /* binding */ RecipesSection; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/styles/Main.module.scss */ "./src/styles/Main.module.scss");
/* harmony import */ var src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Common_Slider_Slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Common/Slider/Slider */ "./src/components/Common/Slider/Slider.jsx");
/* harmony import */ var _components_Common_Recipe_Recipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Common/Recipe/Recipe */ "./src/components/Common/Recipe/Recipe.jsx");

var _jsxFileName = "C:\\Users\\\u042E\u0437\u0435\u0440\\Desktop\\\u0421\u0430\u0439\u0442\u044B\\ko-cheese-react\\src\\components\\Sections\\Index\\RecipesSection\\RecipesSection.jsx";




const recipes = [{
  image: "/img/content/recipe-1.jpg",
  url: "/",
  name: "Сырный соус",
  text: "Мы признаем, что мы встречаемся и работаем на землях коренных народов по всей стране и что суверенитет над этой землей никогда не уступался. "
}, {
  image: "/img/content/recipe-2.jpg",
  url: "/",
  name: "Французский сырный соус",
  text: "Изумительный рецепт, который надо иметь в своей копилке. Подходит для любых быстрых закусок."
}, {
  image: "/img/content/recipe-3.jpg",
  url: "/",
  name: "Салат и заправка из сыра с голубой плесенью",
  text: "Этот салат – классическое американское блюдо, которое было придумано еще в 1920-х, и практически повсеместно встречалось в меню ресторанов до 1950-х."
}, {
  image: "/img/content/recipe-1.jpg",
  url: "/",
  name: "Сырный соус",
  text: "Мы признаем, что мы встречаемся и работаем на землях коренных народов по всей стране и что суверенитет над этой землей никогда не уступался. "
}, {
  image: "/img/content/recipe-2.jpg",
  url: "/",
  name: "Французский сырный соус",
  text: "Изумительный рецепт, который надо иметь в своей копилке. Подходит для любых быстрых закусок."
}, {
  image: "/img/content/recipe-3.jpg",
  url: "/",
  name: "Салат и заправка из сыра с голубой плесенью",
  text: "Этот салат – классическое американское блюдо, которое было придумано еще в 1920-х, и практически повсеместно встречалось в меню ресторанов до 1950-х."
}, {
  image: "/img/content/recipe-1.jpg",
  url: "/",
  name: "Сырный соус",
  text: "Мы признаем, что мы встречаемся и работаем на землях коренных народов по всей стране и что суверенитет над этой землей никогда не уступался. "
}, {
  image: "/img/content/recipe-2.jpg",
  url: "/",
  name: "Французский сырный соус",
  text: "Изумительный рецепт, который надо иметь в своей копилке. Подходит для любых быстрых закусок."
}, {
  image: "/img/content/recipe-3.jpg",
  url: "/",
  name: "Салат и заправка из сыра с голубой плесенью",
  text: "Этот салат – классическое американское блюдо, которое было придумано еще в 1920-х, и практически повсеместно встречалось в меню ресторанов до 1950-х."
}];
const sliderParams = {
  slider: {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 20,
    slideClass: "recipe_slide"
  },
  nav: {
    counter: true
  }
};
const RecipesSection = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (src_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_4___default().wrapper),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_Slider_Slider__WEBPACK_IMPORTED_MODULE_2__.Slider, {
        slides: recipes,
        params: sliderParams,
        title: "Рецепты",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_Recipe_Recipe__WEBPACK_IMPORTED_MODULE_3__.Recipe, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 16
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 10
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 78,
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

/***/ "./src/pages/index.jsx":
/*!*****************************!*\
  !*** ./src/pages/index.jsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/Main.module.scss */ "./src/styles/Main.module.scss");
/* harmony import */ var _styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_Common_Header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Common/Header/Header */ "./src/components/Common/Header/Header.jsx");
/* harmony import */ var _components_Sections_Index_PromoSection_PromoSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Sections/Index/PromoSection/PromoSection */ "./src/components/Sections/Index/PromoSection/PromoSection.jsx");
/* harmony import */ var _components_Sections_Common_NewTastesSection_NewTastesSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Sections/Common/NewTastesSection/NewTastesSection */ "./src/components/Sections/Common/NewTastesSection/NewTastesSection.jsx");
/* harmony import */ var _components_Sections_Common_ProductsSection_ProductsSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Sections/Common/ProductsSection/ProductsSection */ "./src/components/Sections/Common/ProductsSection/ProductsSection.jsx");
/* harmony import */ var _components_Sections_Common_DiscountSection_DiscountSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/Sections/Common/DiscountSection/DiscountSection */ "./src/components/Sections/Common/DiscountSection/DiscountSection.jsx");
/* harmony import */ var _components_Sections_Index_RecipesSection_RecipesSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/Sections/Index/RecipesSection/RecipesSection */ "./src/components/Sections/Index/RecipesSection/RecipesSection.jsx");
/* harmony import */ var _components_Sections_Index_InstagramPromoSection_InstagramPromoSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/Sections/Index/InstagramPromoSection/InstagramPromoSection */ "./src/components/Sections/Index/InstagramPromoSection/InstagramPromoSection.jsx");
/* harmony import */ var _components_Sections_Index_InstagramSection_InstagramSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/Sections/Index/InstagramSection/InstagramSection */ "./src/components/Sections/Index/InstagramSection/InstagramSection.jsx");
/* harmony import */ var _components_Common_Footer_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @components/Common/Footer/Footer */ "./src/components/Common/Footer/Footer.jsx");


var _jsxFileName = "C:\\Users\\\u042E\u0437\u0435\u0440\\Desktop\\\u0421\u0430\u0439\u0442\u044B\\ko-cheese-react\\src\\pages\\index.jsx";













const index = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_Header_Header__WEBPACK_IMPORTED_MODULE_3__.Header, {
      promo: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: (_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_12___default().main),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sections_Index_PromoSection_PromoSection__WEBPACK_IMPORTED_MODULE_4__.PromoSection, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sections_Common_NewTastesSection_NewTastesSection__WEBPACK_IMPORTED_MODULE_5__.NewTastesSection, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sections_Common_ProductsSection_ProductsSection__WEBPACK_IMPORTED_MODULE_6__.ProductsSection, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sections_Common_DiscountSection_DiscountSection__WEBPACK_IMPORTED_MODULE_7__.DiscountSection, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sections_Index_RecipesSection_RecipesSection__WEBPACK_IMPORTED_MODULE_8__.RecipesSection, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sections_Index_InstagramPromoSection_InstagramPromoSection__WEBPACK_IMPORTED_MODULE_9__.InstagramPromoSection, {
        url: 'http://instagram.com/instagram'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sections_Index_InstagramSection_InstagramSection__WEBPACK_IMPORTED_MODULE_10__.InstagramSection, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 10
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_Footer_Footer__WEBPACK_IMPORTED_MODULE_11__.Footer, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 10
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (index);

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

/***/ "./src/components/Common/Instagram/Instagram.module.scss":
/*!***************************************************************!*\
  !*** ./src/components/Common/Instagram/Instagram.module.scss ***!
  \***************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"header": "Instagram_header__3-85i",
	"post": "Instagram_post__2nKst",
	"user": "Instagram_user__1UdWt",
	"date": "Instagram_date__lxlnZ",
	"image": "Instagram_image__c3fIm",
	"text": "Instagram_text__3oCf2"
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

/***/ "./src/components/Common/Recipe/Recipe.module.scss":
/*!*********************************************************!*\
  !*** ./src/components/Common/Recipe/Recipe.module.scss ***!
  \*********************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"link": "Recipe_link__2twrD",
	"card": "Recipe_card__1vI5f",
	"image": "Recipe_image__1baJR",
	"name": "Recipe_name__727MY",
	"text": "Recipe_text__rkE1c"
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

/***/ "./src/components/Sections/Index/InstagramPromoSection/InstagramPromoSection.module.scss":
/*!***********************************************************************************************!*\
  !*** ./src/components/Sections/Index/InstagramPromoSection/InstagramPromoSection.module.scss ***!
  \***********************************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"subscribe": "InstagramPromoSection_subscribe__2Y_u2",
	"title": "InstagramPromoSection_title__1FglO"
};


/***/ }),

/***/ "./src/components/Sections/Index/InstagramSection/InstagramSection.module.scss":
/*!*************************************************************************************!*\
  !*** ./src/components/Sections/Index/InstagramSection/InstagramSection.module.scss ***!
  \*************************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "InstagramSection_container__1GodL"
};


/***/ }),

/***/ "./src/components/Sections/Index/PromoSection/Partner/Partner.module.scss":
/*!********************************************************************************!*\
  !*** ./src/components/Sections/Index/PromoSection/Partner/Partner.module.scss ***!
  \********************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"partner": "Partner_partner__3wune"
};


/***/ }),

/***/ "./src/components/Sections/Index/PromoSection/PromoSection.module.scss":
/*!*****************************************************************************!*\
  !*** ./src/components/Sections/Index/PromoSection/PromoSection.module.scss ***!
  \*****************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "PromoSection_container__1vVAX",
	"partners": "PromoSection_partners__2Fd4-",
	"link": "PromoSection_link__2ER7f",
	"promo": "PromoSection_promo__1wilm",
	"title": "PromoSection_title__3xucD",
	"footer": "PromoSection_footer__1Nz5t",
	"remark": "PromoSection_remark__2krjA"
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
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMiLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzIiwid2VicGFjazovL2tvLWNoZWVzZS1yZWFjdC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvdXNlLWludGVyc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qcyIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9taXR0LmpzIiwid2VicGFjazovL2tvLWNoZWVzZS1yZWFjdC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwuanMiLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanMiLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qcyIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanMiLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanMiLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzIiwid2VicGFjazovL2tvLWNoZWVzZS1yZWFjdC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzIiwid2VicGFjazovL2tvLWNoZWVzZS1yZWFjdC8uL3NyYy9hcGkvX2luc3RhZ3JhbS5qcyIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvLi9zcmMvY29tcG9uZW50cy9Db21tb24vRm9vdGVyL0Zvb3Rlci5qc3giLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvQ29tbW9uL0hlYWRlci9IZWFkZXIuanN4Iiwid2VicGFjazovL2tvLWNoZWVzZS1yZWFjdC8uL3NyYy9jb21wb25lbnRzL0NvbW1vbi9JbnN0YWdyYW0vSW5zdGFncmFtLmpzeCIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvLi9zcmMvY29tcG9uZW50cy9Db21tb24vUHJvZHVjdC9Qcm9kdWN0LmpzeCIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvLi9zcmMvY29tcG9uZW50cy9Db21tb24vUmVjaXBlL1JlY2lwZS5qc3giLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvQ29tbW9uL1NsaWRlci9TbGlkZXIuanN4Iiwid2VicGFjazovL2tvLWNoZWVzZS1yZWFjdC8uL3NyYy9jb21wb25lbnRzL0NvbW1vbi9TbGlkZXIvU2xpZGVyTmF2L1NsaWRlck5hdi5qc3giLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvU1ZHL0hlYWRlckxvZ29TVkcuanN4Iiwid2VicGFjazovL2tvLWNoZWVzZS1yZWFjdC8uL3NyYy9jb21wb25lbnRzL1NWRy9QYXJ0bmVyc1NWRy5qc3giLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvU1ZHL1Rhc3Rlc1NWRy9UYXN0ZXNTVkcuanN4Iiwid2VicGFjazovL2tvLWNoZWVzZS1yZWFjdC8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb25zL0NvbW1vbi9EaXNjb3VudFNlY3Rpb24vRGlzY291bnRTZWN0aW9uLmpzeCIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvLi9zcmMvY29tcG9uZW50cy9TZWN0aW9ucy9Db21tb24vTmV3VGFzdGVzU2VjdGlvbi9OZXdUYXN0ZS9OZXdUYXN0ZS5qc3giLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbnMvQ29tbW9uL05ld1Rhc3Rlc1NlY3Rpb24vTmV3VGFzdGVzU2VjdGlvbi5qc3giLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbnMvQ29tbW9uL1Byb2R1Y3RzU2VjdGlvbi9Qcm9kdWN0c1NlY3Rpb24uanN4Iiwid2VicGFjazovL2tvLWNoZWVzZS1yZWFjdC8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb25zL0luZGV4L0luc3RhZ3JhbVByb21vU2VjdGlvbi9JbnN0YWdyYW1Qcm9tb1NlY3Rpb24uanN4Iiwid2VicGFjazovL2tvLWNoZWVzZS1yZWFjdC8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb25zL0luZGV4L0luc3RhZ3JhbVNlY3Rpb24vSW5zdGFncmFtU2VjdGlvbi5qc3giLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbnMvSW5kZXgvUHJvbW9TZWN0aW9uL1BhcnRuZXIvUGFydG5lci5qc3giLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbnMvSW5kZXgvUHJvbW9TZWN0aW9uL1Byb21vU2VjdGlvbi5qc3giLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbnMvSW5kZXgvUmVjaXBlc1NlY3Rpb24vUmVjaXBlc1NlY3Rpb24uanN4Iiwid2VicGFjazovL2tvLWNoZWVzZS1yZWFjdC8uL3NyYy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0Ly4vc3JjL3BhZ2VzL2luZGV4LmpzeCIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvLi9zcmMvY29tcG9uZW50cy9Db21tb24vRm9vdGVyL0Zvb3Rlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvLi9zcmMvY29tcG9uZW50cy9Db21tb24vSGVhZGVyL0hlYWRlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvLi9zcmMvY29tcG9uZW50cy9Db21tb24vSW5zdGFncmFtL0luc3RhZ3JhbS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvLi9zcmMvY29tcG9uZW50cy9Db21tb24vUHJvZHVjdC9Qcm9kdWN0Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL2tvLWNoZWVzZS1yZWFjdC8uL3NyYy9jb21wb25lbnRzL0NvbW1vbi9SZWNpcGUvUmVjaXBlLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2tvLWNoZWVzZS1yZWFjdC8uL3NyYy9jb21wb25lbnRzL0NvbW1vbi9TbGlkZXIvU2xpZGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2tvLWNoZWVzZS1yZWFjdC8uL3NyYy9jb21wb25lbnRzL0NvbW1vbi9TbGlkZXIvU2xpZGVyTmF2L1NsaWRlck5hdi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvLi9zcmMvY29tcG9uZW50cy9TVkcvVGFzdGVzU1ZHL1Rhc3Rlc1NWRy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvLi9zcmMvY29tcG9uZW50cy9TZWN0aW9ucy9Db21tb24vRGlzY291bnRTZWN0aW9uL0Rpc2NvdW50U2VjdGlvbi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvLi9zcmMvY29tcG9uZW50cy9TZWN0aW9ucy9Db21tb24vTmV3VGFzdGVzU2VjdGlvbi9OZXdUYXN0ZS9OZXdUYXN0ZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvLi9zcmMvY29tcG9uZW50cy9TZWN0aW9ucy9Db21tb24vTmV3VGFzdGVzU2VjdGlvbi9OZXdUYXN0ZXNTZWN0aW9uLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2tvLWNoZWVzZS1yZWFjdC8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb25zL0NvbW1vbi9Qcm9kdWN0c1NlY3Rpb24vUHJvZHVjdHNTZWN0aW9uLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2tvLWNoZWVzZS1yZWFjdC8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb25zL0luZGV4L0luc3RhZ3JhbVByb21vU2VjdGlvbi9JbnN0YWdyYW1Qcm9tb1NlY3Rpb24ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbnMvSW5kZXgvSW5zdGFncmFtU2VjdGlvbi9JbnN0YWdyYW1TZWN0aW9uLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2tvLWNoZWVzZS1yZWFjdC8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb25zL0luZGV4L1Byb21vU2VjdGlvbi9QYXJ0bmVyL1BhcnRuZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbnMvSW5kZXgvUHJvbW9TZWN0aW9uL1Byb21vU2VjdGlvbi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvLi9zcmMvc3R5bGVzL01haW4ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovL2tvLWNoZWVzZS1yZWFjdC8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0L2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvZXh0ZXJuYWwgXCJjbHN4XCIiLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL2tvLWNoZWVzZS1yZWFjdC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9rby1jaGVlc2UtcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2tvLWNoZWVzZS1yZWFjdC9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0L2V4dGVybmFsIFwic3dpcGVyXCIiLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0L2V4dGVybmFsIFwic3dpcGVyL3JlYWN0XCIiLCJ3ZWJwYWNrOi8va28tY2hlZXNlLXJlYWN0L2lnbm9yZWR8QzpcXFVzZXJzXFzQrtC30LXRgFxcRGVza3RvcFxc0KHQsNC50YLRi1xca28tY2hlZXNlLXJlYWN0XFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJyZXF1aXJlIiwiZXhwb3J0cyIsIl9yZWFjdCIsIl9yb3V0ZXIiLCJfcm91dGVyMiIsIl91c2VJbnRlcnNlY3Rpb24iLCJwcmVmZXRjaGVkIiwicHJlZmV0Y2giLCJyb3V0ZXIiLCJocmVmIiwiYXMiLCJvcHRpb25zIiwiaXNMb2NhbFVSTCIsImNhdGNoIiwiZXJyIiwiY3VyTG9jYWxlIiwibG9jYWxlIiwiaXNNb2RpZmllZEV2ZW50IiwiZXZlbnQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsImUiLCJyZXBsYWNlIiwic2hhbGxvdyIsInNjcm9sbCIsIm5vZGVOYW1lIiwicHJldmVudERlZmF1bHQiLCJpbmRleE9mIiwiTGluayIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiYXJncyIsIkVycm9yIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwicGFzc0hyZWYiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsImRlZmF1bHQiLCJ1c2VSZWYiLCJjdXJyZW50IiwiY29uc29sZSIsIndhcm4iLCJwIiwidXNlUm91dGVyIiwidXNlTWVtbyIsInJlc29sdmVkSHJlZiIsInJlc29sdmVkQXMiLCJyZXNvbHZlSHJlZiIsImNoaWxkcmVuIiwiY3JlYXRlRWxlbWVudCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY2hpbGRSZWYiLCJyZWYiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJpc1Zpc2libGUiLCJ1c2VJbnRlcnNlY3Rpb24iLCJyb290TWFyZ2luIiwic2V0UmVmIiwidXNlQ2FsbGJhY2siLCJlbCIsInVzZUVmZmVjdCIsInNob3VsZFByZWZldGNoIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsIm9uQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJ0eXBlIiwibG9jYWxlRG9tYWluIiwiaXNMb2NhbGVEb21haW4iLCJnZXREb21haW5Mb2NhbGUiLCJsb2NhbGVzIiwiZG9tYWluTG9jYWxlcyIsImFkZEJhc2VQYXRoIiwiYWRkTG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNsb25lRWxlbWVudCIsIl9kZWZhdWx0IiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJwYXRoIiwiZW5kc1dpdGgiLCJzbGljZSIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZWxmIiwiY2IiLCJzdGFydCIsIkRhdGUiLCJub3ciLCJzZXRUaW1lb3V0IiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJNYXRoIiwibWF4IiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwiaWQiLCJjbGVhclRpbWVvdXQiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwibWFya0Fzc2V0RXJyb3IiLCJpc0Fzc2V0RXJyb3IiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwiX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiTVNfTUFYX0lETEVfREVMQVkiLCJ3aXRoRnV0dXJlIiwibWFwIiwiZ2VuZXJhdG9yIiwiZW50cnkiLCJnZXQiLCJmdXR1cmUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlc29sdmVyIiwicHJvbSIsInNldCIsInRoZW4iLCJ2YWx1ZSIsImhhc1ByZWZldGNoIiwibGluayIsImRvY3VtZW50Iiwid2luZG93IiwiTVNJbnB1dE1ldGhvZENvbnRleHQiLCJkb2N1bWVudE1vZGUiLCJyZWxMaXN0Iiwic3VwcG9ydHMiLCJfdW51c2VkIiwiY2FuUHJlZmV0Y2giLCJwcmVmZXRjaFZpYURvbSIsInJlcyIsInJlaiIsInF1ZXJ5U2VsZWN0b3IiLCJyZWwiLCJjcm9zc09yaWdpbiIsIm9ubG9hZCIsIm9uZXJyb3IiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiZGVmaW5lUHJvcGVydHkiLCJhcHBlbmRTY3JpcHQiLCJzcmMiLCJzY3JpcHQiLCJyZWplY3QiLCJib2R5IiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsIm1zIiwiY2FuY2VsbGVkIiwiciIsIl9fQlVJTERfTUFOSUZFU1QiLCJvbkJ1aWxkTWFuaWZlc3QiLCJfX0JVSUxEX01BTklGRVNUX0NCIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImFzc2V0UHJlZml4Iiwicm91dGUiLCJzY3JpcHRzIiwiZW5jb2RlVVJJIiwiY3NzIiwibWFuaWZlc3QiLCJhbGxGaWxlcyIsImZpbHRlciIsInYiLCJjcmVhdGVSb3V0ZUxvYWRlciIsImVudHJ5cG9pbnRzIiwiTWFwIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwibWF5YmVFeGVjdXRlU2NyaXB0IiwiZmV0Y2hTdHlsZVNoZWV0IiwiZmV0Y2giLCJvayIsInRleHQiLCJjb250ZW50Iiwid2hlbkVudHJ5cG9pbnQiLCJvbkVudHJ5cG9pbnQiLCJleGVjdXRlIiwiZm4iLCJjb21wb25lbnQiLCJlcnJvciIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwiYWxsIiwiaGFzIiwiZW50cnlwb2ludCIsInN0eWxlcyIsImFzc2lnbiIsImNuIiwibmF2aWdhdG9yIiwiY29ubmVjdGlvbiIsInNhdmVEYXRhIiwidGVzdCIsImVmZmVjdGl2ZVR5cGUiLCJvdXRwdXQiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJOZXh0Um91dGVyIiwiX3JvdXRlckNvbnRleHQiLCJfd2l0aFJvdXRlciIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsIkFycmF5IiwiaXNBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJkaXNhYmxlZCIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInVzZVN0YXRlIiwidW5kZWZpbmVkIiwidGFnTmFtZSIsIm9ic2VydmUiLCJpZGxlQ2FsbGJhY2siLCJlbGVtZW50IiwiY2FsbGJhY2siLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJkZWxldGUiLCJzaXplIiwiZGlzY29ubmVjdCIsIm9ic2VydmVycyIsImVudHJpZXMiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwid2l0aFJvdXRlciIsIkNvbXBvc2VkQ29tcG9uZW50IiwiV2l0aFJvdXRlcldyYXBwZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwibmFtZSIsImRpc3BsYXlOYW1lIiwibm9ybWFsaXplTG9jYWxlUGF0aCIsInBhdGhuYW1lIiwiZGV0ZWN0ZWRMb2NhbGUiLCJwYXRobmFtZVBhcnRzIiwic3BsaXQiLCJzb21lIiwidG9Mb3dlckNhc2UiLCJzcGxpY2UiLCJqb2luIiwibWl0dCIsImNyZWF0ZSIsImhhbmRsZXIiLCJwdXNoIiwib2ZmIiwiZW1pdCIsImV2dHMiLCJkZWxMb2NhbGUiLCJoYXNCYXNlUGF0aCIsImRlbEJhc2VQYXRoIiwiaW50ZXJwb2xhdGVBcyIsIl9ub3JtYWxpemVUcmFpbGluZ1NsYXNoIiwiX3JvdXRlTG9hZGVyIiwiX2Rlbm9ybWFsaXplUGFnZVBhdGgiLCJfbm9ybWFsaXplTG9jYWxlUGF0aCIsIl9taXR0IiwiX3V0aWxzIiwiX2lzRHluYW1pYyIsIl9wYXJzZVJlbGF0aXZlVXJsIiwiX3F1ZXJ5c3RyaW5nIiwiX3Jlc29sdmVSZXdyaXRlcyIsIl9yb3V0ZU1hdGNoZXIiLCJfcm91dGVSZWdleCIsIm9iaiIsIl9fZXNNb2R1bGUiLCJkZXRlY3REb21haW5Mb2NhbGUiLCJiYXNlUGF0aCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJhZGRQYXRoUHJlZml4IiwicHJlZml4Iiwic3RhcnRzV2l0aCIsInBhdGhOb1F1ZXJ5SGFzaCIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJsZW5ndGgiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJVUkwiLCJvcmlnaW4iLCJhc1BhdGhuYW1lIiwicXVlcnkiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImdldFJvdXRlUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZ3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJnZXRSb3V0ZU1hdGNoZXIiLCJwYXJhbXMiLCJldmVyeSIsInBhcmFtIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJyZXBsYWNlZCIsInNlZ21lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXN1bHQiLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJmaWx0ZXJlZFF1ZXJ5IiwiaW5jbHVkZXMiLCJyZXNvbHZlQXMiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsImFzUGF0aCIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpc0R5bmFtaWNSb3V0ZSIsInNlYXJjaFBhcmFtcyIsInNlYXJjaFBhcmFtc1RvVXJsUXVlcnkiLCJoYXNoIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlVXJsQXMiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJwcmVwYXJlZFVybCIsInByZXBhcmVkQXMiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwicGFnZXMiLCJjbGVhblBhdGhuYW1lIiwiZGVub3JtYWxpemVQYWdlUGF0aCIsInBhZ2UiLCJyZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiZmV0Y2hSZXRyeSIsImF0dGVtcHRzIiwiY3JlZGVudGlhbHMiLCJzdGF0dXMiLCJqc29uIiwiZGF0YSIsIm5vdEZvdW5kIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJSb3V0ZXIiLCJjb25zdHJ1Y3RvciIsIl9wYXRobmFtZSIsIl9xdWVyeSIsIl9hcyIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwiQ29tcG9uZW50Iiwic3Vic2NyaXB0aW9uIiwiaXNGYWxsYmFjayIsImlzUHJldmlldyIsImNvbXBvbmVudHMiLCJzZGMiLCJzZHIiLCJzdWIiLCJjbGMiLCJfYnBzIiwiX3dyYXBBcHAiLCJpc1NzciIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJpc1JlYWR5IiwiX2lkeCIsIm9uUG9wU3RhdGUiLCJzdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiX19OIiwiZm9yY2VkU2Nyb2xsIiwiaWR4IiwicGFyc2VSZWxhdGl2ZVVybCIsImNoYW5nZSIsImluaXRpYWwiLCJfX05fU1NHIiwiX19OX1NTUCIsImF1dG9FeHBvcnREeW5hbWljIiwiX19ORVhUX0RBVEFfXyIsImF1dG9FeHBvcnQiLCJnc3NwIiwiZ2lwIiwibG9jYXRpb24iLCJzZWFyY2giLCJyZWxvYWQiLCJiYWNrIiwiaGlzdG9yeSIsIm1ldGhvZCIsInNob3VsZFJlc29sdmVIcmVmIiwiX2giLCJfc2hvdWxkUmVzb2x2ZUhyZWYiLCJsb2NhbGVDaGFuZ2UiLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsInJvdXRlUHJvcHMiLCJhYm9ydENvbXBvbmVudExvYWQiLCJjbGVhbmVkQXMiLCJvbmx5QUhhc2hDaGFuZ2UiLCJzY3JvbGxUb0hhc2giLCJub3RpZnkiLCJwYXJzZWQiLCJyZXdyaXRlcyIsImdldFBhZ2VMaXN0IiwiX19yZXdyaXRlcyIsInVybElzTmV3IiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsIl9zZWxmJF9fTkVYVF9EQVRBX18kcCIsIl9zZWxmJF9fTkVYVF9EQVRBX18kcDIiLCJfb3B0aW9ucyRzY3JvbGwiLCJyb3V0ZUluZm8iLCJnZXRSb3V0ZUluZm8iLCJwYWdlUHJvcHMiLCJfX05fUkVESVJFQ1QiLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJuZXdVcmwiLCJuZXdBcyIsIl9fTl9QUkVWSUVXIiwibm90Rm91bmRSb3V0ZSIsImZldGNoQ29tcG9uZW50IiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwic3RhdHVzQ29kZSIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJzaG91bGRTY3JvbGwiLCJyZXNldFNjcm9sbCIsIngiLCJ5IiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwiZ2lwRXJyIiwicm91dGVJbmZvRXJyIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJtb2QiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJnZXREYXRhSHJlZiIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJfZ2V0U2VydmVyRGF0YSIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJzY3JvbGxUbyIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJfaXNTc2ciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiY2FjaGVLZXkiLCJyZXNvdXJjZUtleSIsImN0eCIsIkFwcFRyZWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiZm9ybWF0VXJsIiwicXVlcnlzdHJpbmciLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJXZWFrTWFwIiwiY2FjaGUiLCJuZXdPYmoiLCJoYXNQcm9wZXJ0eURlc2NyaXB0b3IiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJkZXNjIiwic2xhc2hlZFByb3RvY29scyIsInVybE9iaiIsImF1dGgiLCJob3N0bmFtZSIsInByb3RvY29sIiwiaG9zdCIsInBvcnQiLCJTdHJpbmciLCJ1cmxRdWVyeVRvU2VhcmNoUGFyYW1zIiwic3Vic3RyIiwic2xhc2hlcyIsIlRFU1RfUk9VVEUiLCJnbG9iYWxCYXNlIiwicmVzb2x2ZWRCYXNlIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsImlzTmFOIiwidXJsUXVlcnkiLCJVUkxTZWFyY2hQYXJhbXMiLCJpdGVtIiwiYXBwZW5kIiwic2VhcmNoUGFyYW1zTGlzdCIsImZyb20iLCJleGVjIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiY29kZSIsInNsdWdOYW1lIiwiZyIsIm0iLCJwb3MiLCJlc2NhcGVSZWdleCIsInN0ciIsInBhcnNlUGFyYW1ldGVyIiwibm9ybWFsaXplZFJvdXRlIiwic2VnbWVudHMiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsImZyb21DaGFyQ29kZSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIlJlZ0V4cCIsIm5hbWVkUmVnZXgiLCJleGVjT25jZSIsImdldERpc3BsYXlOYW1lIiwiaXNSZXNTZW50IiwiX2Zvcm1hdFVybCIsInVzZWQiLCJmaW5pc2hlZCIsImhlYWRlcnNTZW50IiwiX0FwcCRwcm90b3R5cGUiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJtZWFzdXJlIiwiX2luc3RhZ3JhbSIsImF4aW9zIiwiYmFzZVVSTCIsIl90b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJhY2Nlc3NfdG9rZW4iLCJzZXRJdGVtIiwiRm9vdGVyIiwiY2xzeCIsInMiLCJoZWFkZXJMaW5rcyIsInRpdGxlIiwibG9nbyIsIkhlYWRlciIsInByb21vIiwiSW5zdGFncmFtIiwiaW1hZ2UiLCJ1c2VyIiwiZGF0ZSIsInZpZGVvQ292ZXIiLCJQcm9kdWN0IiwiYWRkaXRpb24iLCJ3ZWlnaHQiLCJwcmljZSIsInRhc3RlcyIsImFkZGl0aW9uQ2xhc3MiLCJhbGxTdGF0dXMiLCJjbGFzcyIsInRhc3RlIiwiYWxsVGFzdGVzIiwiUmVjaXBlIiwiU2xpZGVyIiwic2xpZGVzIiwiU3dpcGVyQ29yZSIsIk5hdmlnYXRpb24iLCJwcmV2UmVmIiwiUmVhY3QiLCJuZXh0UmVmIiwiY3VycmVudENvdW50Iiwic2V0Q3VycmVudENvdW50IiwiYWxsQ291bnQiLCJjZWlsIiwic2xpZGVyIiwic2xpZGVzUGVyVmlldyIsInNsaWRlckNsYXNzIiwic2xpZGVDbGFzcyIsInJlc3RQYXJhbXMiLCJuYXYiLCJzd2lwZXIiLCJuYXZpZ2F0aW9uIiwicHJldkVsIiwibmV4dEVsIiwidXBkYXRlIiwic25hcEluZGV4Iiwic2xpZGUiLCJTbGlkZXJOYXYiLCJwcmV2IiwiY291bnRlciIsIkxvZ28iLCJBYkxvZ28iLCJVc2FjaGV2TG9nbyIsIlZrdXNXaWxsTG9nbyIsIlJlZFdpbmUiLCJib3JkZXIiLCJXaGl0ZVdpbmUiLCJWZWdldGFibGVzIiwiRnJ1aXRzIiwiRGlzY291bnRTZWN0aW9uIiwiTmV3VGFzdGUiLCJzdHlsZSIsInZlZ2V0YWJsZXMiLCJmcnVpdHMiLCJjb3VudHJ5RmxhZ3MiLCJGcmVuY2giLCJSdXNzaWFuIiwibmV3UHJvZHVjdHMiLCJzbGlkZXJQYXJhbXMiLCJzbGlkZXNQZXJHcm91cCIsInNwYWNlQmV0d2VlbiIsIk5ld1Rhc3Rlc1NlY3Rpb24iLCJQcm9kdWN0c1NlY3Rpb24iLCJwcm9kdWN0cyIsImFjdGl2ZUNhdGVnb3J5Iiwic2V0QWN0aXZlQ2F0ZWdvcnkiLCJhY3RpdmVTdWJjYXRlZ29yeSIsInNldEFjdGl2ZVN1YmNhdGVnb3J5Iiwic2V0QWN0aXZlSXRlbSIsInNldFN0YXRlIiwiY2F0ZWdvcmllcyIsInN1YkNhdGVnb3JpZXMiLCJjYXRlZ29yeSIsInN1YmNhdGVnb3J5IiwicHJvZHVjdCIsIkluc3RhZ3JhbVByb21vU2VjdGlvbiIsIkluc3RhZ3JhbVNlY3Rpb24iLCJwaG90b3MiLCJzZXRQaG90b3MiLCJnZXRJbnN0YWdyYW1EYXRhIiwiaW5zdGFncmFtVXNlciIsInBlcm1hbGluayIsIm1lZGlhX3VybCIsImNhcHRpb24iLCJ0aW1lc3RhbXAiLCJ0aHVtYm5haWxfdXJsIiwiUGFydG5lciIsInBhcnRuZXJzIiwiUHJvbW9TZWN0aW9uIiwicmVjaXBlcyIsIlJlY2lwZXNTZWN0aW9uIiwiYXZhbGlhYmxlIiwicHJlcGFyaW5nIiwiY291bnQiLCJnYWxsZXJ5IiwiZGVzY3JpcHRpb24iLCJCQVNFX1VSTCIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7O0FDTkEsY0FBYyxtQkFBTyxDQUFDLHNGQUErQjs7QUFFckQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUM7Ozs7Ozs7Ozs7QUN0REE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlCOzs7Ozs7Ozs7OztBQ2hCYTs7QUFBQSxJQUFJQSx1QkFBdUIsR0FBQ0MsbUJBQU8sQ0FBQyxzSEFBRCxDQUFuQzs7QUFBcUZDLGtCQUFBLEdBQW1CLElBQW5CO0FBQXdCQSxlQUFBLEdBQWdCLEtBQUssQ0FBckI7O0FBQXVCLElBQUlDLE1BQU0sR0FBQ0gsdUJBQXVCLENBQUNDLG1CQUFPLENBQUMsb0JBQUQsQ0FBUixDQUFsQzs7QUFBcUQsSUFBSUcsT0FBTyxHQUFDSCxtQkFBTyxDQUFDLG1HQUFELENBQW5COztBQUF3RCxJQUFJSSxRQUFRLEdBQUNKLG1CQUFPLENBQUMsMkRB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QWpCRDs7QUFtQkEsK0RBQWVzSixLQUFmLEU7Ozs7Ozs7Ozs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNoQmEsa0JBQWtCLE1BQU0sd0JBQXdCLGtCQUFrQiwyQkFBMkIscUJBQXFCLGdDQUFnQyxnQ0FBZ0MsbUNBQW1DLDRCQUE0QiwrQkFBK0Isb0JBQW9CLHlCQUF5QixVQUFVO0FBQ3BWLGlEOzs7Ozs7Ozs7O0FDREEseUdBQThDOzs7Ozs7Ozs7Ozs7QUNBOUMsbUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXI9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpO3ZhciBfcm91dGVyMj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7dmFyIF91c2VJbnRlcnNlY3Rpb249cmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtjb25zdCBwcmVmZXRjaGVkPXt9O2Z1bmN0aW9uIHByZWZldGNoKHJvdXRlcixocmVmLGFzLG9wdGlvbnMpe2lmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJ3x8IXJvdXRlcilyZXR1cm47aWYoISgwLF9yb3V0ZXIuaXNMb2NhbFVSTCkoaHJlZikpcmV0dXJuOy8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbi8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbi8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG5yb3V0ZXIucHJlZmV0Y2goaHJlZixhcyxvcHRpb25zKS5jYXRjaChlcnI9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Ly8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xudGhyb3cgZXJyO319KTtjb25zdCBjdXJMb2NhbGU9b3B0aW9ucyYmdHlwZW9mIG9wdGlvbnMubG9jYWxlIT09J3VuZGVmaW5lZCc/b3B0aW9ucy5sb2NhbGU6cm91dGVyJiZyb3V0ZXIubG9jYWxlOy8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG5wcmVmZXRjaGVkW2hyZWYrJyUnK2FzKyhjdXJMb2NhbGU/JyUnK2N1ckxvY2FsZTonJyldPXRydWU7fWZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCl7Y29uc3R7dGFyZ2V0fT1ldmVudC5jdXJyZW50VGFyZ2V0O3JldHVybiB0YXJnZXQmJnRhcmdldCE9PSdfc2VsZid8fGV2ZW50Lm1ldGFLZXl8fGV2ZW50LmN0cmxLZXl8fGV2ZW50LnNoaWZ0S2V5fHxldmVudC5hbHRLZXl8fC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG5ldmVudC5uYXRpdmVFdmVudCYmZXZlbnQubmF0aXZlRXZlbnQud2hpY2g9PT0yO31mdW5jdGlvbiBsaW5rQ2xpY2tlZChlLHJvdXRlcixocmVmLGFzLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlKXtjb25zdHtub2RlTmFtZX09ZS5jdXJyZW50VGFyZ2V0O2lmKG5vZGVOYW1lPT09J0EnJiYoaXNNb2RpZmllZEV2ZW50KGUpfHwhKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSkpey8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxucmV0dXJuO31lLnByZXZlbnREZWZhdWx0KCk7Ly8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG5pZihzY3JvbGw9PW51bGwmJmFzLmluZGV4T2YoJyMnKT49MCl7c2Nyb2xsPWZhbHNlO30vLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbnJvdXRlcltyZXBsYWNlPydyZXBsYWNlJzoncHVzaCddKGhyZWYsYXMse3NoYWxsb3csbG9jYWxlLHNjcm9sbH0pO31mdW5jdGlvbiBMaW5rKHByb3BzKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7ZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3Mpe3JldHVybiBuZXcgRXJyb3IoYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmArKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz9cIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCI6JycpKTt9Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbmNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZD17aHJlZjp0cnVlfTtjb25zdCByZXF1aXJlZFByb3BzPU9iamVjdC5rZXlzKHJlcXVpcmVkUHJvcHNHdWFyZCk7cmVxdWlyZWRQcm9wcy5mb3JFYWNoKGtleT0+e2lmKGtleT09PSdocmVmJyl7aWYocHJvcHNba2V5XT09bnVsbHx8dHlwZW9mIHByb3BzW2tleV0hPT0nc3RyaW5nJyYmdHlwZW9mIHByb3BzW2tleV0hPT0nb2JqZWN0Jyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2BzdHJpbmdgIG9yIGBvYmplY3RgJyxhY3R1YWw6cHJvcHNba2V5XT09PW51bGw/J251bGwnOnR5cGVvZiBwcm9wc1trZXldfSk7fX1lbHNley8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5jb25zdCBfPWtleTt9fSk7Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbmNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZD17YXM6dHJ1ZSxyZXBsYWNlOnRydWUsc2Nyb2xsOnRydWUsc2hhbGxvdzp0cnVlLHBhc3NIcmVmOnRydWUscHJlZmV0Y2g6dHJ1ZSxsb2NhbGU6dHJ1ZX07Y29uc3Qgb3B0aW9uYWxQcm9wcz1PYmplY3Qua2V5cyhvcHRpb25hbFByb3BzR3VhcmQpO29wdGlvbmFsUHJvcHMuZm9yRWFjaChrZXk9Pntjb25zdCB2YWxUeXBlPXR5cGVvZiBwcm9wc1trZXldO2lmKGtleT09PSdhcycpe2lmKHByb3BzW2tleV0mJnZhbFR5cGUhPT0nc3RyaW5nJyYmdmFsVHlwZSE9PSdvYmplY3QnKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYHN0cmluZ2Agb3IgYG9iamVjdGAnLGFjdHVhbDp2YWxUeXBlfSk7fX1lbHNlIGlmKGtleT09PSdsb2NhbGUnKXtpZihwcm9wc1trZXldJiZ2YWxUeXBlIT09J3N0cmluZycpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgc3RyaW5nYCcsYWN0dWFsOnZhbFR5cGV9KTt9fWVsc2UgaWYoa2V5PT09J3JlcGxhY2UnfHxrZXk9PT0nc2Nyb2xsJ3x8a2V5PT09J3NoYWxsb3cnfHxrZXk9PT0ncGFzc0hyZWYnfHxrZXk9PT0ncHJlZmV0Y2gnKXtpZihwcm9wc1trZXldIT1udWxsJiZ2YWxUeXBlIT09J2Jvb2xlYW4nKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYGJvb2xlYW5gJyxhY3R1YWw6dmFsVHlwZX0pO319ZWxzZXsvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuY29uc3QgXz1rZXk7fX0pOy8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbmNvbnN0IGhhc1dhcm5lZD1fcmVhY3QuZGVmYXVsdC51c2VSZWYoZmFsc2UpO2lmKHByb3BzLnByZWZldGNoJiYhaGFzV2FybmVkLmN1cnJlbnQpe2hhc1dhcm5lZC5jdXJyZW50PXRydWU7Y29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCcpO319Y29uc3QgcD1wcm9wcy5wcmVmZXRjaCE9PWZhbHNlO2NvbnN0IHJvdXRlcj0oMCxfcm91dGVyMi51c2VSb3V0ZXIpKCk7Y29uc3R7aHJlZixhc309X3JlYWN0LmRlZmF1bHQudXNlTWVtbygoKT0+e2NvbnN0W3Jlc29sdmVkSHJlZixyZXNvbHZlZEFzXT0oMCxfcm91dGVyLnJlc29sdmVIcmVmKShyb3V0ZXIscHJvcHMuaHJlZix0cnVlKTtyZXR1cm57aHJlZjpyZXNvbHZlZEhyZWYsYXM6cHJvcHMuYXM/KDAsX3JvdXRlci5yZXNvbHZlSHJlZikocm91dGVyLHByb3BzLmFzKTpyZXNvbHZlZEFzfHxyZXNvbHZlZEhyZWZ9O30sW3JvdXRlcixwcm9wcy5ocmVmLHByb3BzLmFzXSk7bGV0e2NoaWxkcmVuLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlfT1wcm9wczsvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbmlmKHR5cGVvZiBjaGlsZHJlbj09PSdzdHJpbmcnKXtjaGlsZHJlbj0vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIixudWxsLGNoaWxkcmVuKTt9Ly8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG5sZXQgY2hpbGQ7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXt0cnl7Y2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO31jYXRjaChlcnIpe3Rocm93IG5ldyBFcnJvcihgTXVsdGlwbGUgY2hpbGRyZW4gd2VyZSBwYXNzZWQgdG8gPExpbms+IHdpdGggXFxgaHJlZlxcYCBvZiBcXGAke3Byb3BzLmhyZWZ9XFxgIGJ1dCBvbmx5IG9uZSBjaGlsZCBpcyBzdXBwb3J0ZWQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbGluay1tdWx0aXBsZS1jaGlsZHJlbmArKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz9cIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCI6JycpKTt9fWVsc2V7Y2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO31jb25zdCBjaGlsZFJlZj1jaGlsZCYmdHlwZW9mIGNoaWxkPT09J29iamVjdCcmJmNoaWxkLnJlZjtjb25zdFtzZXRJbnRlcnNlY3Rpb25SZWYsaXNWaXNpYmxlXT0oMCxfdXNlSW50ZXJzZWN0aW9uLnVzZUludGVyc2VjdGlvbikoe3Jvb3RNYXJnaW46JzIwMHB4J30pO2NvbnN0IHNldFJlZj1fcmVhY3QuZGVmYXVsdC51c2VDYWxsYmFjayhlbD0+e3NldEludGVyc2VjdGlvblJlZihlbCk7aWYoY2hpbGRSZWYpe2lmKHR5cGVvZiBjaGlsZFJlZj09PSdmdW5jdGlvbicpY2hpbGRSZWYoZWwpO2Vsc2UgaWYodHlwZW9mIGNoaWxkUmVmPT09J29iamVjdCcpe2NoaWxkUmVmLmN1cnJlbnQ9ZWw7fX19LFtjaGlsZFJlZixzZXRJbnRlcnNlY3Rpb25SZWZdKTsoMCxfcmVhY3QudXNlRWZmZWN0KSgoKT0+e2NvbnN0IHNob3VsZFByZWZldGNoPWlzVmlzaWJsZSYmcCYmKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKTtjb25zdCBjdXJMb2NhbGU9dHlwZW9mIGxvY2FsZSE9PSd1bmRlZmluZWQnP2xvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Y29uc3QgaXNQcmVmZXRjaGVkPXByZWZldGNoZWRbaHJlZisnJScrYXMrKGN1ckxvY2FsZT8nJScrY3VyTG9jYWxlOicnKV07aWYoc2hvdWxkUHJlZmV0Y2gmJiFpc1ByZWZldGNoZWQpe3ByZWZldGNoKHJvdXRlcixocmVmLGFzLHtsb2NhbGU6Y3VyTG9jYWxlfSk7fX0sW2FzLGhyZWYsaXNWaXNpYmxlLGxvY2FsZSxwLHJvdXRlcl0pO2NvbnN0IGNoaWxkUHJvcHM9e3JlZjpzZXRSZWYsb25DbGljazplPT57aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25DbGljayhlKTt9aWYoIWUuZGVmYXVsdFByZXZlbnRlZCl7bGlua0NsaWNrZWQoZSxyb3V0ZXIsaHJlZixhcyxyZXBsYWNlLHNoYWxsb3csc2Nyb2xsLGxvY2FsZSk7fX19O2NoaWxkUHJvcHMub25Nb3VzZUVudGVyPWU9PntpZighKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSlyZXR1cm47aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXI9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSk7fXByZWZldGNoKHJvdXRlcixocmVmLGFzLHtwcmlvcml0eTp0cnVlfSk7fTsvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbi8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuaWYocHJvcHMucGFzc0hyZWZ8fGNoaWxkLnR5cGU9PT0nYScmJiEoJ2hyZWYnaW4gY2hpbGQucHJvcHMpKXtjb25zdCBjdXJMb2NhbGU9dHlwZW9mIGxvY2FsZSE9PSd1bmRlZmluZWQnP2xvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Ly8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbi8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG5jb25zdCBsb2NhbGVEb21haW49cm91dGVyJiZyb3V0ZXIuaXNMb2NhbGVEb21haW4mJigwLF9yb3V0ZXIuZ2V0RG9tYWluTG9jYWxlKShhcyxjdXJMb2NhbGUscm91dGVyJiZyb3V0ZXIubG9jYWxlcyxyb3V0ZXImJnJvdXRlci5kb21haW5Mb2NhbGVzKTtjaGlsZFByb3BzLmhyZWY9bG9jYWxlRG9tYWlufHwoMCxfcm91dGVyLmFkZEJhc2VQYXRoKSgoMCxfcm91dGVyLmFkZExvY2FsZSkoYXMsY3VyTG9jYWxlLHJvdXRlciYmcm91dGVyLmRlZmF1bHRMb2NhbGUpKTt9cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCxjaGlsZFByb3BzKTt9dmFyIF9kZWZhdWx0PUxpbms7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoPXJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO2V4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9dm9pZCAwOy8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCl7cmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSYmcGF0aCE9PScvJz9wYXRoLnNsaWNlKDAsLTEpOnBhdGg7fS8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL2NvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoPXByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSD9wYXRoPT57aWYoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpe3JldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKTt9ZWxzZSBpZihwYXRoLmVuZHNXaXRoKCcvJykpe3JldHVybiBwYXRoO31lbHNle3JldHVybiBwYXRoKycvJzt9fTpyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtleHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoPW5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrPWV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjaz12b2lkIDA7Y29uc3QgcmVxdWVzdElkbGVDYWxsYmFjaz10eXBlb2Ygc2VsZiE9PSd1bmRlZmluZWQnJiZzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2t8fGZ1bmN0aW9uKGNiKXtsZXQgc3RhcnQ9RGF0ZS5ub3coKTtyZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpe2NiKHtkaWRUaW1lb3V0OmZhbHNlLHRpbWVSZW1haW5pbmc6ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5tYXgoMCw1MC0oRGF0ZS5ub3coKS1zdGFydCkpO319KTt9LDEpO307ZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVlc3RJZGxlQ2FsbGJhY2s7Y29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrPXR5cGVvZiBzZWxmIT09J3VuZGVmaW5lZCcmJnNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrfHxmdW5jdGlvbihpZCl7cmV0dXJuIGNsZWFyVGltZW91dChpZCk7fTtleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjaz1jYW5jZWxJZGxlQ2FsbGJhY2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubWFya0Fzc2V0RXJyb3I9bWFya0Fzc2V0RXJyb3I7ZXhwb3J0cy5pc0Fzc2V0RXJyb3I9aXNBc3NldEVycm9yO2V4cG9ydHMuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdD1nZXRDbGllbnRCdWlsZE1hbmlmZXN0O2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9nZXRBc3NldFBhdGhGcm9tUm91dGU9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlXCIpKTt2YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpOy8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWT0zODAwO2Z1bmN0aW9uIHdpdGhGdXR1cmUoa2V5LG1hcCxnZW5lcmF0b3Ipe2xldCBlbnRyeT1tYXAuZ2V0KGtleSk7aWYoZW50cnkpe2lmKCdmdXR1cmUnaW4gZW50cnkpe3JldHVybiBlbnRyeS5mdXR1cmU7fXJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpO31sZXQgcmVzb2x2ZXI7Y29uc3QgcHJvbT1uZXcgUHJvbWlzZShyZXNvbHZlPT57cmVzb2x2ZXI9cmVzb2x2ZTt9KTttYXAuc2V0KGtleSxlbnRyeT17cmVzb2x2ZTpyZXNvbHZlcixmdXR1cmU6cHJvbX0pO3JldHVybiBnZW5lcmF0b3I/Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuZ2VuZXJhdG9yKCkudGhlbih2YWx1ZT0+KHJlc29sdmVyKHZhbHVlKSx2YWx1ZSkpOnByb207fWZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbmspe3RyeXtsaW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtyZXR1cm4oLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4vLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQmJiEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlfHxsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJykpO31jYXRjaChfdW51c2VkKXtyZXR1cm4gZmFsc2U7fX1jb25zdCBjYW5QcmVmZXRjaD1oYXNQcmVmZXRjaCgpO2Z1bmN0aW9uIHByZWZldGNoVmlhRG9tKGhyZWYsYXMsbGluayl7cmV0dXJuIG5ldyBQcm9taXNlKChyZXMscmVqKT0+e2lmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpe3JldHVybiByZXMoKTt9bGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7Ly8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbmlmKGFzKWxpbmsuYXM9YXM7bGluay5yZWw9YHByZWZldGNoYDtsaW5rLmNyb3NzT3JpZ2luPXByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47bGluay5vbmxvYWQ9cmVzO2xpbmsub25lcnJvcj1yZWo7Ly8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbmxpbmsuaHJlZj1ocmVmO2RvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7fSk7fWNvbnN0IEFTU0VUX0xPQURfRVJST1I9U3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJyk7Ly8gVE9ETzogdW5leHBvcnRcbmZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycil7cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsQVNTRVRfTE9BRF9FUlJPUix7fSk7fWZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnIpe3JldHVybiBlcnImJkFTU0VUX0xPQURfRVJST1IgaW4gZXJyO31mdW5jdGlvbiBhcHBlbmRTY3JpcHQoc3JjLHNjcmlwdCl7cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntzY3JpcHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7Ly8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbi8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbi8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0Llxuc2NyaXB0Lm9ubG9hZD1yZXNvbHZlO3NjcmlwdC5vbmVycm9yPSgpPT5yZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSk7Ly8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4vLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbnNjcmlwdC5jcm9zc09yaWdpbj1wcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOOy8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4vLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbnNjcmlwdC5zcmM9c3JjO2RvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTt9KTt9Ly8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocCxtcyxlcnIpe3JldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57bGV0IGNhbmNlbGxlZD1mYWxzZTtwLnRoZW4ocj0+ey8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbmNhbmNlbGxlZD10cnVlO3Jlc29sdmUocik7fSkuY2F0Y2gocmVqZWN0KTsoMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+c2V0VGltZW91dCgoKT0+e2lmKCFjYW5jZWxsZWQpe3JlamVjdChlcnIpO319LG1zKSk7fSk7fS8vIFRPRE86IHN0b3AgZXhwb3J0aW5nIG9yIGNhY2hlIHRoZSBmYWlsdXJlXG4vLyBJdCdkIGJlIGJlc3QgdG8gc3RvcCBleHBvcnRpbmcgdGhpcy4gSXQncyBhbiBpbXBsZW1lbnRhdGlvbiBkZXRhaWwuIFdlJ3JlXG4vLyBvbmx5IGV4cG9ydGluZyBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWx0eSB3aXRoIHRoZSBgcGFnZS1sb2FkZXJgLlxuLy8gT25seSBjYWNoZSB0aGlzIHJlc3BvbnNlIGFzIGEgbGFzdCByZXNvcnQgaWYgd2UgY2Fubm90IGVsaW1pbmF0ZSBhbGwgb3RoZXJcbi8vIGNvZGUgYnJhbmNoZXMgdGhhdCB1c2UgdGhlIEJ1aWxkIE1hbmlmZXN0IENhbGxiYWNrIGFuZCBwdXNoIHRoZW0gdGhyb3VnaFxuLy8gdGhlIFJvdXRlIExvYWRlciBpbnRlcmZhY2UuXG5mdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCl7aWYoc2VsZi5fX0JVSUxEX01BTklGRVNUKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7fWNvbnN0IG9uQnVpbGRNYW5pZmVzdD1uZXcgUHJvbWlzZShyZXNvbHZlPT57Ly8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuY29uc3QgY2I9c2VsZi5fX0JVSUxEX01BTklGRVNUX0NCO3NlbGYuX19CVUlMRF9NQU5JRkVTVF9DQj0oKT0+e3Jlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtjYiYmY2IoKTt9O30pO3JldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KG9uQnVpbGRNYW5pZmVzdCxNU19NQVhfSURMRV9ERUxBWSxtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKSk7fWZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgscm91dGUpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSh7c2NyaXB0czpbYXNzZXRQcmVmaXgrJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJytlbmNvZGVVUkkoKDAsX2dldEFzc2V0UGF0aEZyb21Sb3V0ZS5kZWZhdWx0KShyb3V0ZSwnLmpzJykpXSwvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG5jc3M6W119KTt9cmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKG1hbmlmZXN0PT57aWYoIShyb3V0ZSBpbiBtYW5pZmVzdCkpe3Rocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSk7fWNvbnN0IGFsbEZpbGVzPW1hbmlmZXN0W3JvdXRlXS5tYXAoZW50cnk9PmFzc2V0UHJlZml4KycvX25leHQvJytlbmNvZGVVUkkoZW50cnkpKTtyZXR1cm57c2NyaXB0czphbGxGaWxlcy5maWx0ZXIodj0+di5lbmRzV2l0aCgnLmpzJykpLGNzczphbGxGaWxlcy5maWx0ZXIodj0+di5lbmRzV2l0aCgnLmNzcycpKX07fSk7fWZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4KXtjb25zdCBlbnRyeXBvaW50cz1uZXcgTWFwKCk7Y29uc3QgbG9hZGVkU2NyaXB0cz1uZXcgTWFwKCk7Y29uc3Qgc3R5bGVTaGVldHM9bmV3IE1hcCgpO2NvbnN0IHJvdXRlcz1uZXcgTWFwKCk7ZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYyl7bGV0IHByb209bG9hZGVkU2NyaXB0cy5nZXQoc3JjKTtpZihwcm9tKXtyZXR1cm4gcHJvbTt9Ly8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuaWYoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO31sb2FkZWRTY3JpcHRzLnNldChzcmMscHJvbT1hcHBlbmRTY3JpcHQoc3JjKSk7cmV0dXJuIHByb207fWZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmKXtsZXQgcHJvbT1zdHlsZVNoZWV0cy5nZXQoaHJlZik7aWYocHJvbSl7cmV0dXJuIHByb207fXN0eWxlU2hlZXRzLnNldChocmVmLHByb209ZmV0Y2goaHJlZikudGhlbihyZXM9PntpZighcmVzLm9rKXt0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKTt9cmV0dXJuIHJlcy50ZXh0KCkudGhlbih0ZXh0PT4oe2hyZWY6aHJlZixjb250ZW50OnRleHR9KSk7fSkuY2F0Y2goZXJyPT57dGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKTt9KSk7cmV0dXJuIHByb207fXJldHVybnt3aGVuRW50cnlwb2ludChyb3V0ZSl7cmV0dXJuIHdpdGhGdXR1cmUocm91dGUsZW50cnlwb2ludHMpO30sb25FbnRyeXBvaW50KHJvdXRlLGV4ZWN1dGUpe1Byb21pc2UucmVzb2x2ZShleGVjdXRlKS50aGVuKGZuPT5mbigpKS50aGVuKGV4cG9ydHM9Pih7Y29tcG9uZW50OmV4cG9ydHMmJmV4cG9ydHMuZGVmYXVsdHx8ZXhwb3J0cyxleHBvcnRzOmV4cG9ydHN9KSxlcnI9Pih7ZXJyb3I6ZXJyfSkpLnRoZW4oaW5wdXQ9Pntjb25zdCBvbGQ9ZW50cnlwb2ludHMuZ2V0KHJvdXRlKTtlbnRyeXBvaW50cy5zZXQocm91dGUsaW5wdXQpO2lmKG9sZCYmJ3Jlc29sdmUnaW4gb2xkKW9sZC5yZXNvbHZlKGlucHV0KTt9KTt9LGxvYWRSb3V0ZShyb3V0ZSxwcmVmZXRjaCl7cmV0dXJuIHdpdGhGdXR1cmUocm91dGUscm91dGVzLCgpPT57cmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQoZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSkudGhlbigoe3NjcmlwdHMsY3NzfSk9PntyZXR1cm4gUHJvbWlzZS5hbGwoW2VudHJ5cG9pbnRzLmhhcyhyb3V0ZSk/W106UHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKV0pO30pLnRoZW4ocmVzPT57cmV0dXJuIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLnRoZW4oZW50cnlwb2ludD0+KHtlbnRyeXBvaW50LHN0eWxlczpyZXNbMV19KSk7fSksTVNfTUFYX0lETEVfREVMQVksbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YCkpKS50aGVuKCh7ZW50cnlwb2ludCxzdHlsZXN9KT0+e2NvbnN0IHJlcz1PYmplY3QuYXNzaWduKHtzdHlsZXM6c3R5bGVzfSxlbnRyeXBvaW50KTtyZXR1cm4nZXJyb3InaW4gZW50cnlwb2ludD9lbnRyeXBvaW50OnJlczt9KS5jYXRjaChlcnI9PntpZihwcmVmZXRjaCl7Ly8gd2UgZG9uJ3Qgd2FudCB0byBjYWNoZSBlcnJvcnMgZHVyaW5nIHByZWZldGNoXG50aHJvdyBlcnI7fXJldHVybntlcnJvcjplcnJ9O30pO30pO30scHJlZmV0Y2gocm91dGUpey8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbi8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbmxldCBjbjtpZihjbj1uYXZpZ2F0b3IuY29ubmVjdGlvbil7Ly8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG5pZihjbi5zYXZlRGF0YXx8LzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKXJldHVybiBQcm9taXNlLnJlc29sdmUoKTt9cmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgscm91dGUpLnRoZW4ob3V0cHV0PT5Qcm9taXNlLmFsbChjYW5QcmVmZXRjaD9vdXRwdXQuc2NyaXB0cy5tYXAoc2NyaXB0PT5wcmVmZXRjaFZpYURvbShzY3JpcHQsJ3NjcmlwdCcpKTpbXSkpLnRoZW4oKCk9PnsoMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+dGhpcy5sb2FkUm91dGUocm91dGUsdHJ1ZSkuY2F0Y2goKCk9Pnt9KSk7fSkuY2F0Y2goLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbigpPT57fSk7fX07fXZhciBfZGVmYXVsdD1jcmVhdGVSb3V0ZUxvYWRlcjtleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1sb2FkZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMudXNlUm91dGVyPXVzZVJvdXRlcjtleHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZT1tYWtlUHVibGljUm91dGVySW5zdGFuY2U7ZXhwb3J0cy5jcmVhdGVSb3V0ZXI9ZXhwb3J0cy53aXRoUm91dGVyPWV4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXIyPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKSk7ZXhwb3J0cy5Sb3V0ZXI9X3JvdXRlcjIuZGVmYXVsdDtleHBvcnRzLk5leHRSb3V0ZXI9X3JvdXRlcjIuTmV4dFJvdXRlcjt2YXIgX3JvdXRlckNvbnRleHQ9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dFwiKTt2YXIgX3dpdGhSb3V0ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93aXRoLXJvdXRlclwiKSk7ZXhwb3J0cy53aXRoUm91dGVyPV93aXRoUm91dGVyLmRlZmF1bHQ7LyogZ2xvYmFsIHdpbmRvdyAqL2NvbnN0IHNpbmdsZXRvblJvdXRlcj17cm91dGVyOm51bGwsLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbnJlYWR5Q2FsbGJhY2tzOltdLHJlYWR5KGNiKXtpZih0aGlzLnJvdXRlcilyZXR1cm4gY2IoKTtpZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpe3RoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7fX19Oy8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzPVsncGF0aG5hbWUnLCdyb3V0ZScsJ3F1ZXJ5JywnYXNQYXRoJywnY29tcG9uZW50cycsJ2lzRmFsbGJhY2snLCdiYXNlUGF0aCcsJ2xvY2FsZScsJ2xvY2FsZXMnLCdkZWZhdWx0TG9jYWxlJywnaXNSZWFkeScsJ2lzUHJldmlldycsJ2lzTG9jYWxlRG9tYWluJ107Y29uc3Qgcm91dGVyRXZlbnRzPVsncm91dGVDaGFuZ2VTdGFydCcsJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywncm91dGVDaGFuZ2VFcnJvcicsJ2hhc2hDaGFuZ2VTdGFydCcsJ2hhc2hDaGFuZ2VDb21wbGV0ZSddO2NvbnN0IGNvcmVNZXRob2RGaWVsZHM9WydwdXNoJywncmVwbGFjZScsJ3JlbG9hZCcsJ2JhY2snLCdwcmVmZXRjaCcsJ2JlZm9yZVBvcFN0YXRlJ107Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwnZXZlbnRzJyx7Z2V0KCl7cmV0dXJuIF9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO319KTt1cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSB3ZSBuZWVkIHRvIHJldHVyblxuLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4vLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbi8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLGZpZWxkLHtnZXQoKXtjb25zdCByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF07fX0pO30pO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG47c2luZ2xldG9uUm91dGVyW2ZpZWxkXT0oLi4uYXJncyk9Pntjb25zdCByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncyk7fTt9KTtyb3V0ZXJFdmVudHMuZm9yRWFjaChldmVudD0+e3NpbmdsZXRvblJvdXRlci5yZWFkeSgoKT0+e19yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzLm9uKGV2ZW50LCguLi5hcmdzKT0+e2NvbnN0IGV2ZW50RmllbGQ9YG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZygxKX1gO2NvbnN0IF9zaW5nbGV0b25Sb3V0ZXI9c2luZ2xldG9uUm91dGVyO2lmKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pe3RyeXtfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpO31jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YCk7Y29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKTt9fX0pO30pO30pO2Z1bmN0aW9uIGdldFJvdXRlcigpe2lmKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKXtjb25zdCBtZXNzYWdlPSdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJysnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgb24gdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbic7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31yZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Ly8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG52YXIgX2RlZmF1bHQ9c2luZ2xldG9uUm91dGVyOy8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7ZnVuY3Rpb24gdXNlUm91dGVyKCl7cmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7fS8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiBiZSB1c2VkIGluc2lkZSB0aGUgc2VydmVyLlxuY29uc3QgY3JlYXRlUm91dGVyPSguLi5hcmdzKT0+e3NpbmdsZXRvblJvdXRlci5yb3V0ZXI9bmV3IF9yb3V0ZXIyLmRlZmF1bHQoLi4uYXJncyk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goY2I9PmNiKCkpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcz1bXTtyZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Oy8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydHMuY3JlYXRlUm91dGVyPWNyZWF0ZVJvdXRlcjtmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKXtjb25zdCBfcm91dGVyPXJvdXRlcjtjb25zdCBpbnN0YW5jZT17fTtmb3IoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe2lmKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XT09PSdvYmplY3QnKXtpbnN0YW5jZVtwcm9wZXJ0eV09T2JqZWN0LmFzc2lnbihBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKT9bXTp7fSxfcm91dGVyW3Byb3BlcnR5XSk7Ly8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbmNvbnRpbnVlO31pbnN0YW5jZVtwcm9wZXJ0eV09X3JvdXRlcltwcm9wZXJ0eV07fS8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbmluc3RhbmNlLmV2ZW50cz1fcm91dGVyMi5kZWZhdWx0LmV2ZW50cztjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PntpbnN0YW5jZVtmaWVsZF09KC4uLmFyZ3MpPT57cmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO307fSk7cmV0dXJuIGluc3RhbmNlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZUludGVyc2VjdGlvbj11c2VJbnRlcnNlY3Rpb247dmFyIF9yZWFjdD1yZXF1aXJlKFwicmVhY3RcIik7dmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtjb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcj10eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIhPT0ndW5kZWZpbmVkJztmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oe3Jvb3RNYXJnaW4sZGlzYWJsZWR9KXtjb25zdCBpc0Rpc2FibGVkPWRpc2FibGVkfHwhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7Y29uc3QgdW5vYnNlcnZlPSgwLF9yZWFjdC51c2VSZWYpKCk7Y29uc3RbdmlzaWJsZSxzZXRWaXNpYmxlXT0oMCxfcmVhY3QudXNlU3RhdGUpKGZhbHNlKTtjb25zdCBzZXRSZWY9KDAsX3JlYWN0LnVzZUNhbGxiYWNrKShlbD0+e2lmKHVub2JzZXJ2ZS5jdXJyZW50KXt1bm9ic2VydmUuY3VycmVudCgpO3Vub2JzZXJ2ZS5jdXJyZW50PXVuZGVmaW5lZDt9aWYoaXNEaXNhYmxlZHx8dmlzaWJsZSlyZXR1cm47aWYoZWwmJmVsLnRhZ05hbWUpe3Vub2JzZXJ2ZS5jdXJyZW50PW9ic2VydmUoZWwsaXNWaXNpYmxlPT5pc1Zpc2libGUmJnNldFZpc2libGUoaXNWaXNpYmxlKSx7cm9vdE1hcmdpbn0pO319LFtpc0Rpc2FibGVkLHJvb3RNYXJnaW4sdmlzaWJsZV0pOygwLF9yZWFjdC51c2VFZmZlY3QpKCgpPT57aWYoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKXtpZighdmlzaWJsZSl7Y29uc3QgaWRsZUNhbGxiYWNrPSgwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT5zZXRWaXNpYmxlKHRydWUpKTtyZXR1cm4oKT0+KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2suY2FuY2VsSWRsZUNhbGxiYWNrKShpZGxlQ2FsbGJhY2spO319fSxbdmlzaWJsZV0pO3JldHVybltzZXRSZWYsdmlzaWJsZV07fWZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCxjYWxsYmFjayxvcHRpb25zKXtjb25zdHtpZCxvYnNlcnZlcixlbGVtZW50c309Y3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyk7ZWxlbWVudHMuc2V0KGVsZW1lbnQsY2FsbGJhY2spO29ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7cmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpe2VsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7Ly8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuaWYoZWxlbWVudHMuc2l6ZT09PTApe29ic2VydmVyLmRpc2Nvbm5lY3QoKTtvYnNlcnZlcnMuZGVsZXRlKGlkKTt9fTt9Y29uc3Qgb2JzZXJ2ZXJzPW5ldyBNYXAoKTtmdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zKXtjb25zdCBpZD1vcHRpb25zLnJvb3RNYXJnaW58fCcnO2xldCBpbnN0YW5jZT1vYnNlcnZlcnMuZ2V0KGlkKTtpZihpbnN0YW5jZSl7cmV0dXJuIGluc3RhbmNlO31jb25zdCBlbGVtZW50cz1uZXcgTWFwKCk7Y29uc3Qgb2JzZXJ2ZXI9bmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXM9PntlbnRyaWVzLmZvckVhY2goZW50cnk9Pntjb25zdCBjYWxsYmFjaz1lbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtjb25zdCBpc1Zpc2libGU9ZW50cnkuaXNJbnRlcnNlY3Rpbmd8fGVudHJ5LmludGVyc2VjdGlvblJhdGlvPjA7aWYoY2FsbGJhY2smJmlzVmlzaWJsZSl7Y2FsbGJhY2soaXNWaXNpYmxlKTt9fSk7fSxvcHRpb25zKTtvYnNlcnZlcnMuc2V0KGlkLGluc3RhbmNlPXtpZCxvYnNlcnZlcixlbGVtZW50c30pO3JldHVybiBpbnN0YW5jZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJzZWN0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9d2l0aFJvdXRlcjt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7ZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCl7ZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpe3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LE9iamVjdC5hc3NpZ24oe3JvdXRlcjooMCxfcm91dGVyLnVzZVJvdXRlcikoKX0scHJvcHMpKTt9V2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcy8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbjtXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0IG5hbWU9Q29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvc2VkQ29tcG9uZW50Lm5hbWV8fCdVbmtub3duJztXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZT1gd2l0aFJvdXRlcigke25hbWV9KWA7fXJldHVybiBXaXRoUm91dGVyV3JhcHBlcjt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD13aXRoLXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZUxvY2FsZVBhdGg9bm9ybWFsaXplTG9jYWxlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKHBhdGhuYW1lLGxvY2FsZXMpe2xldCBkZXRlY3RlZExvY2FsZTsvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbmNvbnN0IHBhdGhuYW1lUGFydHM9cGF0aG5hbWUuc3BsaXQoJy8nKTsobG9jYWxlc3x8W10pLnNvbWUobG9jYWxlPT57aWYocGF0aG5hbWVQYXJ0c1sxXS50b0xvd2VyQ2FzZSgpPT09bG9jYWxlLnRvTG93ZXJDYXNlKCkpe2RldGVjdGVkTG9jYWxlPWxvY2FsZTtwYXRobmFtZVBhcnRzLnNwbGljZSgxLDEpO3BhdGhuYW1lPXBhdGhuYW1lUGFydHMuam9pbignLycpfHwnLyc7cmV0dXJuIHRydWU7fXJldHVybiBmYWxzZTt9KTtyZXR1cm57cGF0aG5hbWUsZGV0ZWN0ZWRMb2NhbGV9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9bWl0dDsvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi8gLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcbmZ1bmN0aW9uIG1pdHQoKXtjb25zdCBhbGw9T2JqZWN0LmNyZWF0ZShudWxsKTtyZXR1cm57b24odHlwZSxoYW5kbGVyKXs7KGFsbFt0eXBlXXx8KGFsbFt0eXBlXT1bXSkpLnB1c2goaGFuZGxlcik7fSxvZmYodHlwZSxoYW5kbGVyKXtpZihhbGxbdHlwZV0pe2FsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcik+Pj4wLDEpO319LGVtaXQodHlwZSwuLi5ldnRzKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG47KGFsbFt0eXBlXXx8W10pLnNsaWNlKCkubWFwKGhhbmRsZXI9PntoYW5kbGVyKC4uLmV2dHMpO30pO319O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1pdHQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXREb21haW5Mb2NhbGU9Z2V0RG9tYWluTG9jYWxlO2V4cG9ydHMuYWRkTG9jYWxlPWFkZExvY2FsZTtleHBvcnRzLmRlbExvY2FsZT1kZWxMb2NhbGU7ZXhwb3J0cy5oYXNCYXNlUGF0aD1oYXNCYXNlUGF0aDtleHBvcnRzLmFkZEJhc2VQYXRoPWFkZEJhc2VQYXRoO2V4cG9ydHMuZGVsQmFzZVBhdGg9ZGVsQmFzZVBhdGg7ZXhwb3J0cy5pc0xvY2FsVVJMPWlzTG9jYWxVUkw7ZXhwb3J0cy5pbnRlcnBvbGF0ZUFzPWludGVycG9sYXRlQXM7ZXhwb3J0cy5yZXNvbHZlSHJlZj1yZXNvbHZlSHJlZjtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaD1yZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaFwiKTt2YXIgX3JvdXRlTG9hZGVyPXJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyXCIpO3ZhciBfZGVub3JtYWxpemVQYWdlUGF0aD1yZXF1aXJlKFwiLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aFwiKTt2YXIgX25vcm1hbGl6ZUxvY2FsZVBhdGg9cmVxdWlyZShcIi4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoXCIpO3ZhciBfbWl0dD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi91dGlsc1wiKTt2YXIgX2lzRHluYW1pYz1yZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO3ZhciBfcGFyc2VSZWxhdGl2ZVVybD1yZXF1aXJlKFwiLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmxcIik7dmFyIF9xdWVyeXN0cmluZz1yZXF1aXJlKFwiLi91dGlscy9xdWVyeXN0cmluZ1wiKTt2YXIgX3Jlc29sdmVSZXdyaXRlcz1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXNcIikpO3ZhciBfcm91dGVNYXRjaGVyPXJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLW1hdGNoZXJcIik7dmFyIF9yb3V0ZVJlZ2V4PXJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmo6e2RlZmF1bHQ6b2JqfTt9Ly8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxubGV0IGRldGVjdERvbWFpbkxvY2FsZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtkZXRlY3REb21haW5Mb2NhbGU9cmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZTt9Y29uc3QgYmFzZVBhdGg9cHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSHx8Jyc7ZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpe3JldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJykse2NhbmNlbGxlZDp0cnVlfSk7fWZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aCxwcmVmaXgpe3JldHVybiBwcmVmaXgmJnBhdGguc3RhcnRzV2l0aCgnLycpP3BhdGg9PT0nLyc/KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gpKHByZWZpeCk6YCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpPT09Jy8nP3BhdGguc3Vic3RyaW5nKDEpOnBhdGh9YDpwYXRoO31mdW5jdGlvbiBnZXREb21haW5Mb2NhbGUocGF0aCxsb2NhbGUsbG9jYWxlcyxkb21haW5Mb2NhbGVzKXtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtsb2NhbGU9bG9jYWxlfHwoMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXRoLGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlO2NvbnN0IGRldGVjdGVkRG9tYWluPWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLHVuZGVmaW5lZCxsb2NhbGUpO2lmKGRldGVjdGVkRG9tYWluKXtyZXR1cm5gaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cD8nJzoncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtiYXNlUGF0aHx8Jyd9JHtsb2NhbGU9PT1kZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlPycnOmAvJHtsb2NhbGV9YH0ke3BhdGh9YDt9cmV0dXJuIGZhbHNlO31yZXR1cm4gZmFsc2U7fWZ1bmN0aW9uIGFkZExvY2FsZShwYXRoLGxvY2FsZSxkZWZhdWx0TG9jYWxlKXtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtjb25zdCBwYXRobmFtZT1wYXRoTm9RdWVyeUhhc2gocGF0aCk7Y29uc3QgcGF0aExvd2VyPXBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7Y29uc3QgbG9jYWxlTG93ZXI9bG9jYWxlJiZsb2NhbGUudG9Mb3dlckNhc2UoKTtyZXR1cm4gbG9jYWxlJiZsb2NhbGUhPT1kZWZhdWx0TG9jYWxlJiYhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nK2xvY2FsZUxvd2VyKycvJykmJnBhdGhMb3dlciE9PScvJytsb2NhbGVMb3dlcj9hZGRQYXRoUHJlZml4KHBhdGgsJy8nK2xvY2FsZSk6cGF0aDt9cmV0dXJuIHBhdGg7fWZ1bmN0aW9uIGRlbExvY2FsZShwYXRoLGxvY2FsZSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Y29uc3QgcGF0aG5hbWU9cGF0aE5vUXVlcnlIYXNoKHBhdGgpO2NvbnN0IHBhdGhMb3dlcj1wYXRobmFtZS50b0xvd2VyQ2FzZSgpO2NvbnN0IGxvY2FsZUxvd2VyPWxvY2FsZSYmbG9jYWxlLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGxvY2FsZSYmKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJytsb2NhbGVMb3dlcisnLycpfHxwYXRoTG93ZXI9PT0nLycrbG9jYWxlTG93ZXIpPyhwYXRobmFtZS5sZW5ndGg9PT1sb2NhbGUubGVuZ3RoKzE/Jy8nOicnKStwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoKzEpOnBhdGg7fXJldHVybiBwYXRoO31mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aCl7Y29uc3QgcXVlcnlJbmRleD1wYXRoLmluZGV4T2YoJz8nKTtjb25zdCBoYXNoSW5kZXg9cGF0aC5pbmRleE9mKCcjJyk7aWYocXVlcnlJbmRleD4tMXx8aGFzaEluZGV4Pi0xKXtwYXRoPXBhdGguc3Vic3RyaW5nKDAscXVlcnlJbmRleD4tMT9xdWVyeUluZGV4Omhhc2hJbmRleCk7fXJldHVybiBwYXRoO31mdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoKXtwYXRoPXBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtyZXR1cm4gcGF0aD09PWJhc2VQYXRofHxwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGgrJy8nKTt9ZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCl7Ly8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbnJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsYmFzZVBhdGgpO31mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKXtwYXRoPXBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKTtpZighcGF0aC5zdGFydHNXaXRoKCcvJykpcGF0aD1gLyR7cGF0aH1gO3JldHVybiBwYXRoO30vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9mdW5jdGlvbiBpc0xvY2FsVVJMKHVybCl7Ly8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuaWYodXJsLnN0YXJ0c1dpdGgoJy8nKXx8dXJsLnN0YXJ0c1dpdGgoJyMnKXx8dXJsLnN0YXJ0c1dpdGgoJz8nKSlyZXR1cm4gdHJ1ZTt0cnl7Ly8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG5jb25zdCBsb2NhdGlvbk9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7Y29uc3QgcmVzb2x2ZWQ9bmV3IFVSTCh1cmwsbG9jYXRpb25PcmlnaW4pO3JldHVybiByZXNvbHZlZC5vcmlnaW49PT1sb2NhdGlvbk9yaWdpbiYmaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpO31jYXRjaChfKXtyZXR1cm4gZmFsc2U7fX1mdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKHJvdXRlLGFzUGF0aG5hbWUscXVlcnkpe2xldCBpbnRlcnBvbGF0ZWRSb3V0ZT0nJztjb25zdCBkeW5hbWljUmVnZXg9KDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocm91dGUpO2NvbnN0IGR5bmFtaWNHcm91cHM9ZHluYW1pY1JlZ2V4Lmdyb3Vwcztjb25zdCBkeW5hbWljTWF0Y2hlcz0vLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4oYXNQYXRobmFtZSE9PXJvdXRlPygwLF9yb3V0ZU1hdGNoZXIuZ2V0Um91dGVNYXRjaGVyKShkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpOicnKXx8Ly8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4vLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG5xdWVyeTtpbnRlcnBvbGF0ZWRSb3V0ZT1yb3V0ZTtjb25zdCBwYXJhbXM9T2JqZWN0LmtleXMoZHluYW1pY0dyb3Vwcyk7aWYoIXBhcmFtcy5ldmVyeShwYXJhbT0+e2xldCB2YWx1ZT1keW5hbWljTWF0Y2hlc1twYXJhbV18fCcnO2NvbnN0e3JlcGVhdCxvcHRpb25hbH09ZHluYW1pY0dyb3Vwc1twYXJhbV07Ly8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4vLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG5sZXQgcmVwbGFjZWQ9YFske3JlcGVhdD8nLi4uJzonJ30ke3BhcmFtfV1gO2lmKG9wdGlvbmFsKXtyZXBsYWNlZD1gJHshdmFsdWU/Jy8nOicnfVske3JlcGxhY2VkfV1gO31pZihyZXBlYXQmJiFBcnJheS5pc0FycmF5KHZhbHVlKSl2YWx1ZT1bdmFsdWVdO3JldHVybihvcHRpb25hbHx8cGFyYW0gaW4gZHluYW1pY01hdGNoZXMpJiYoLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG5pbnRlcnBvbGF0ZWRSb3V0ZT1pbnRlcnBvbGF0ZWRSb3V0ZS5yZXBsYWNlKHJlcGxhY2VkLHJlcGVhdD92YWx1ZS5tYXAoLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbi8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuc2VnbWVudD0+ZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpKS5qb2luKCcvJyk6ZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSl8fCcvJyk7fSkpe2ludGVycG9sYXRlZFJvdXRlPScnOy8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG4vLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbn1yZXR1cm57cGFyYW1zLHJlc3VsdDppbnRlcnBvbGF0ZWRSb3V0ZX07fWZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxwYXJhbXMpe2NvbnN0IGZpbHRlcmVkUXVlcnk9e307T2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goa2V5PT57aWYoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKXtmaWx0ZXJlZFF1ZXJ5W2tleV09cXVlcnlba2V5XTt9fSk7cmV0dXJuIGZpbHRlcmVkUXVlcnk7fS8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9mdW5jdGlvbiByZXNvbHZlSHJlZihyb3V0ZXIsaHJlZixyZXNvbHZlQXMpey8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG5sZXQgYmFzZTtjb25zdCB1cmxBc1N0cmluZz10eXBlb2YgaHJlZj09PSdzdHJpbmcnP2hyZWY6KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShocmVmKTt0cnl7YmFzZT1uZXcgVVJMKHVybEFzU3RyaW5nLnN0YXJ0c1dpdGgoJyMnKT9yb3V0ZXIuYXNQYXRoOnJvdXRlci5wYXRobmFtZSwnaHR0cDovL24nKTt9Y2F0Y2goXyl7Ly8gZmFsbGJhY2sgdG8gLyBmb3IgaW52YWxpZCBhc1BhdGggdmFsdWVzIGUuZy4gLy9cbmJhc2U9bmV3IFVSTCgnLycsJ2h0dHA6Ly9uJyk7fS8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG5pZighaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpe3JldHVybiByZXNvbHZlQXM/W3VybEFzU3RyaW5nXTp1cmxBc1N0cmluZzt9dHJ5e2NvbnN0IGZpbmFsVXJsPW5ldyBVUkwodXJsQXNTdHJpbmcsYmFzZSk7ZmluYWxVcmwucGF0aG5hbWU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gpKGZpbmFsVXJsLnBhdGhuYW1lKTtsZXQgaW50ZXJwb2xhdGVkQXM9Jyc7aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkoZmluYWxVcmwucGF0aG5hbWUpJiZmaW5hbFVybC5zZWFyY2hQYXJhbXMmJnJlc29sdmVBcyl7Y29uc3QgcXVlcnk9KDAsX3F1ZXJ5c3RyaW5nLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkpKGZpbmFsVXJsLnNlYXJjaFBhcmFtcyk7Y29uc3R7cmVzdWx0LHBhcmFtc309aW50ZXJwb2xhdGVBcyhmaW5hbFVybC5wYXRobmFtZSxmaW5hbFVybC5wYXRobmFtZSxxdWVyeSk7aWYocmVzdWx0KXtpbnRlcnBvbGF0ZWRBcz0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTpyZXN1bHQsaGFzaDpmaW5hbFVybC5oYXNoLHF1ZXJ5Om9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxwYXJhbXMpfSk7fX0vLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuY29uc3QgcmVzb2x2ZWRIcmVmPWZpbmFsVXJsLm9yaWdpbj09PWJhc2Uub3JpZ2luP2ZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aCk6ZmluYWxVcmwuaHJlZjtyZXR1cm4gcmVzb2x2ZUFzP1tyZXNvbHZlZEhyZWYsaW50ZXJwb2xhdGVkQXN8fHJlc29sdmVkSHJlZl06cmVzb2x2ZWRIcmVmO31jYXRjaChfKXtyZXR1cm4gcmVzb2x2ZUFzP1t1cmxBc1N0cmluZ106dXJsQXNTdHJpbmc7fX1mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmwpe2NvbnN0IG9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7cmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbik/dXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTp1cmw7fWZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXIsdXJsLGFzKXsvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbi8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG5sZXRbcmVzb2x2ZWRIcmVmLHJlc29sdmVkQXNdPXJlc29sdmVIcmVmKHJvdXRlcix1cmwsdHJ1ZSk7Y29uc3Qgb3JpZ2luPSgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKTtjb25zdCBocmVmSGFkT3JpZ2luPXJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbik7Y29uc3QgYXNIYWRPcmlnaW49cmVzb2x2ZWRBcyYmcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbik7cmVzb2x2ZWRIcmVmPXN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZik7cmVzb2x2ZWRBcz1yZXNvbHZlZEFzP3N0cmlwT3JpZ2luKHJlc29sdmVkQXMpOnJlc29sdmVkQXM7Y29uc3QgcHJlcGFyZWRVcmw9aHJlZkhhZE9yaWdpbj9yZXNvbHZlZEhyZWY6YWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKTtjb25zdCBwcmVwYXJlZEFzPWFzP3N0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlcixhcykpOnJlc29sdmVkQXN8fHJlc29sdmVkSHJlZjtyZXR1cm57dXJsOnByZXBhcmVkVXJsLGFzOmFzSGFkT3JpZ2luP3ByZXBhcmVkQXM6YWRkQmFzZVBhdGgocHJlcGFyZWRBcyl9O31mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLHBhZ2VzKXtjb25zdCBjbGVhblBhdGhuYW1lPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKSgoMCxfZGVub3JtYWxpemVQYWdlUGF0aC5kZW5vcm1hbGl6ZVBhZ2VQYXRoKShwYXRobmFtZSkpO2lmKGNsZWFuUGF0aG5hbWU9PT0nLzQwNCd8fGNsZWFuUGF0aG5hbWU9PT0nL19lcnJvcicpe3JldHVybiBwYXRobmFtZTt9Ly8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuaWYoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUpKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG5wYWdlcy5zb21lKHBhZ2U9PntpZigoMCxfaXNEeW5hbWljLmlzRHluYW1pY1JvdXRlKShwYWdlKSYmKDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lKSl7cGF0aG5hbWU9cGFnZTtyZXR1cm4gdHJ1ZTt9fSk7fXJldHVybigwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7fWNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uPXByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04mJnR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyYmJ3Njcm9sbFJlc3RvcmF0aW9uJ2luIHdpbmRvdy5oaXN0b3J5JiYhIWZ1bmN0aW9uKCl7dHJ5e2xldCB2PSdfX25leHQnOy8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbnJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsdiksc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSx0cnVlO31jYXRjaChuKXt9fSgpO2NvbnN0IFNTR19EQVRBX05PVF9GT1VORD1TeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpO2Z1bmN0aW9uIGZldGNoUmV0cnkodXJsLGF0dGVtcHRzKXtyZXR1cm4gZmV0Y2godXJsLHsvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbi8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuLy9cbi8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbi8vID4gb3B0aW9uLlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuLy9cbi8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4vLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4vLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbmNyZWRlbnRpYWxzOidzYW1lLW9yaWdpbid9KS50aGVuKHJlcz0+e2lmKCFyZXMub2spe2lmKGF0dGVtcHRzPjEmJnJlcy5zdGF0dXM+PTUwMCl7cmV0dXJuIGZldGNoUmV0cnkodXJsLGF0dGVtcHRzLTEpO31pZihyZXMuc3RhdHVzPT09NDA0KXtyZXR1cm4gcmVzLmpzb24oKS50aGVuKGRhdGE9PntpZihkYXRhLm5vdEZvdW5kKXtyZXR1cm57bm90Rm91bmQ6U1NHX0RBVEFfTk9UX0ZPVU5EfTt9dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTt9KTt9dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTt9cmV0dXJuIHJlcy5qc29uKCk7fSk7fWZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsaXNTZXJ2ZXJSZW5kZXIpe3JldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLGlzU2VydmVyUmVuZGVyPzM6MSkuY2F0Y2goZXJyPT57Ly8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4vLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuLy8gbG9vcC5cbmlmKCFpc1NlcnZlclJlbmRlcil7KDAsX3JvdXRlTG9hZGVyLm1hcmtBc3NldEVycm9yKShlcnIpO310aHJvdyBlcnI7fSk7fWNsYXNzIFJvdXRlcnsvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi8gLy8gU3RhdGljIERhdGEgQ2FjaGVcbi8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG5jb25zdHJ1Y3RvcihfcGF0aG5hbWUsX3F1ZXJ5LF9hcyx7aW5pdGlhbFByb3BzLHBhZ2VMb2FkZXIsQXBwLHdyYXBBcHAsQ29tcG9uZW50LGVycixzdWJzY3JpcHRpb24saXNGYWxsYmFjayxsb2NhbGUsbG9jYWxlcyxkZWZhdWx0TG9jYWxlLGRvbWFpbkxvY2FsZXMsaXNQcmV2aWV3fSl7dGhpcy5yb3V0ZT12b2lkIDA7dGhpcy5wYXRobmFtZT12b2lkIDA7dGhpcy5xdWVyeT12b2lkIDA7dGhpcy5hc1BhdGg9dm9pZCAwO3RoaXMuYmFzZVBhdGg9dm9pZCAwO3RoaXMuY29tcG9uZW50cz12b2lkIDA7dGhpcy5zZGM9e307dGhpcy5zZHI9e307dGhpcy5zdWI9dm9pZCAwO3RoaXMuY2xjPXZvaWQgMDt0aGlzLnBhZ2VMb2FkZXI9dm9pZCAwO3RoaXMuX2Jwcz12b2lkIDA7dGhpcy5ldmVudHM9dm9pZCAwO3RoaXMuX3dyYXBBcHA9dm9pZCAwO3RoaXMuaXNTc3I9dm9pZCAwO3RoaXMuaXNGYWxsYmFjaz12b2lkIDA7dGhpcy5faW5GbGlnaHRSb3V0ZT12b2lkIDA7dGhpcy5fc2hhbGxvdz12b2lkIDA7dGhpcy5sb2NhbGU9dm9pZCAwO3RoaXMubG9jYWxlcz12b2lkIDA7dGhpcy5kZWZhdWx0TG9jYWxlPXZvaWQgMDt0aGlzLmRvbWFpbkxvY2FsZXM9dm9pZCAwO3RoaXMuaXNSZWFkeT12b2lkIDA7dGhpcy5pc1ByZXZpZXc9dm9pZCAwO3RoaXMuaXNMb2NhbGVEb21haW49dm9pZCAwO3RoaXMuX2lkeD0wO3RoaXMub25Qb3BTdGF0ZT1lPT57Y29uc3Qgc3RhdGU9ZS5zdGF0ZTtpZighc3RhdGUpey8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4vLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4vL1xuLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbi8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbi8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG5jb25zdHtwYXRobmFtZSxxdWVyeX09dGhpczt0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOmFkZEJhc2VQYXRoKHBhdGhuYW1lKSxxdWVyeX0pLCgwLF91dGlscy5nZXRVUkwpKCkpO3JldHVybjt9aWYoIXN0YXRlLl9fTil7cmV0dXJuO31sZXQgZm9yY2VkU2Nyb2xsO2NvbnN0e3VybCxhcyxvcHRpb25zLGlkeH09c3RhdGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTil7aWYobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pe2lmKHRoaXMuX2lkeCE9PWlkeCl7Ly8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG50cnl7c2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK3RoaXMuX2lkeCxKU09OLnN0cmluZ2lmeSh7eDpzZWxmLnBhZ2VYT2Zmc2V0LHk6c2VsZi5wYWdlWU9mZnNldH0pKTt9Y2F0Y2goX3VudXNlZCl7fS8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbnRyeXtjb25zdCB2PXNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJytpZHgpO2ZvcmNlZFNjcm9sbD1KU09OLnBhcnNlKHYpO31jYXRjaChfdW51c2VkMil7Zm9yY2VkU2Nyb2xsPXt4OjAseTowfTt9fX19dGhpcy5faWR4PWlkeDtjb25zdHtwYXRobmFtZX09KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTsvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbi8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuaWYodGhpcy5pc1NzciYmYXM9PT10aGlzLmFzUGF0aCYmcGF0aG5hbWU9PT10aGlzLnBhdGhuYW1lKXtyZXR1cm47fS8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbi8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG5pZih0aGlzLl9icHMmJiF0aGlzLl9icHMoc3RhdGUpKXtyZXR1cm47fXRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLHVybCxhcyxPYmplY3QuYXNzaWduKHt9LG9wdGlvbnMse3NoYWxsb3c6b3B0aW9ucy5zaGFsbG93JiZ0aGlzLl9zaGFsbG93LGxvY2FsZTpvcHRpb25zLmxvY2FsZXx8dGhpcy5kZWZhdWx0TG9jYWxlfSksZm9yY2VkU2Nyb2xsKTt9Oy8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxudGhpcy5yb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkoX3BhdGhuYW1lKTsvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbnRoaXMuY29tcG9uZW50cz17fTsvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4vLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuaWYoX3BhdGhuYW1lIT09Jy9fZXJyb3InKXt0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV09e0NvbXBvbmVudCxpbml0aWFsOnRydWUscHJvcHM6aW5pdGlhbFByb3BzLGVycixfX05fU1NHOmluaXRpYWxQcm9wcyYmaW5pdGlhbFByb3BzLl9fTl9TU0csX19OX1NTUDppbml0aWFsUHJvcHMmJmluaXRpYWxQcm9wcy5fX05fU1NQfTt9dGhpcy5jb21wb25lbnRzWycvX2FwcCddPXtDb21wb25lbnQ6QXBwLHN0eWxlU2hlZXRzOlsvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXX07Ly8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbi8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG50aGlzLmV2ZW50cz1Sb3V0ZXIuZXZlbnRzO3RoaXMucGFnZUxvYWRlcj1wYWdlTG9hZGVyO3RoaXMucGF0aG5hbWU9X3BhdGhuYW1lO3RoaXMucXVlcnk9X3F1ZXJ5Oy8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4vLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuY29uc3QgYXV0b0V4cG9ydER5bmFtaWM9KDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkoX3BhdGhuYW1lKSYmc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnQ7dGhpcy5hc1BhdGg9YXV0b0V4cG9ydER5bmFtaWM/X3BhdGhuYW1lOl9hczt0aGlzLmJhc2VQYXRoPWJhc2VQYXRoO3RoaXMuc3ViPXN1YnNjcmlwdGlvbjt0aGlzLmNsYz1udWxsO3RoaXMuX3dyYXBBcHA9d3JhcEFwcDsvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4vLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxudGhpcy5pc1Nzcj10cnVlO3RoaXMuaXNGYWxsYmFjaz1pc0ZhbGxiYWNrO3RoaXMuaXNSZWFkeT0hIShzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcHx8c2VsZi5fX05FWFRfREFUQV9fLmdpcHx8IWF1dG9FeHBvcnREeW5hbWljJiYhc2VsZi5sb2NhdGlvbi5zZWFyY2gmJiFwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKTt0aGlzLmlzUHJldmlldz0hIWlzUHJldmlldzt0aGlzLmlzTG9jYWxlRG9tYWluPWZhbHNlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe3RoaXMubG9jYWxlPWxvY2FsZTt0aGlzLmxvY2FsZXM9bG9jYWxlczt0aGlzLmRlZmF1bHRMb2NhbGU9ZGVmYXVsdExvY2FsZTt0aGlzLmRvbWFpbkxvY2FsZXM9ZG9tYWluTG9jYWxlczt0aGlzLmlzTG9jYWxlRG9tYWluPSEhZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSk7fWlmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7Ly8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbi8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG5pZihfYXMuc3Vic3RyKDAsMikhPT0nLy8nKXsvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG5jb25zdCBvcHRpb25zPXtsb2NhbGV9O29wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmPV9hcyE9PV9wYXRobmFtZTt0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOmFkZEJhc2VQYXRoKF9wYXRobmFtZSkscXVlcnk6X3F1ZXJ5fSksKDAsX3V0aWxzLmdldFVSTCkoKSxvcHRpb25zKTt9d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJyx0aGlzLm9uUG9wU3RhdGUpOy8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4vLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pe2lmKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKXt3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbj0nbWFudWFsJzt9fX19cmVsb2FkKCl7d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO30vKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL2JhY2soKXt3aW5kb3cuaGlzdG9yeS5iYWNrKCk7fS8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9wdXNoKHVybCxhcyxvcHRpb25zPXt9KXtpZihwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKXsvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2Vcbi8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG5pZihtYW51YWxTY3JvbGxSZXN0b3JhdGlvbil7dHJ5ey8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK3RoaXMuX2lkeCxKU09OLnN0cmluZ2lmeSh7eDpzZWxmLnBhZ2VYT2Zmc2V0LHk6c2VsZi5wYWdlWU9mZnNldH0pKTt9Y2F0Y2goX3VudXNlZDMpe319fTsoe3VybCxhc309cHJlcGFyZVVybEFzKHRoaXMsdXJsLGFzKSk7cmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLHVybCxhcyxvcHRpb25zKTt9LyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL3JlcGxhY2UodXJsLGFzLG9wdGlvbnM9e30pezsoe3VybCxhc309cHJlcGFyZVVybEFzKHRoaXMsdXJsLGFzKSk7cmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLHVybCxhcyxvcHRpb25zKTt9YXN5bmMgY2hhbmdlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyxmb3JjZWRTY3JvbGwpe2lmKCFpc0xvY2FsVVJMKHVybCkpe3dpbmRvdy5sb2NhdGlvbi5ocmVmPXVybDtyZXR1cm4gZmFsc2U7fWNvbnN0IHNob3VsZFJlc29sdmVIcmVmPXVybD09PWFzfHxvcHRpb25zLl9ofHxvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZjsvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbi8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuaWYob3B0aW9ucy5faCl7dGhpcy5pc1JlYWR5PXRydWU7fWxldCBsb2NhbGVDaGFuZ2U9b3B0aW9ucy5sb2NhbGUhPT10aGlzLmxvY2FsZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXt0aGlzLmxvY2FsZT1vcHRpb25zLmxvY2FsZT09PWZhbHNlP3RoaXMuZGVmYXVsdExvY2FsZTpvcHRpb25zLmxvY2FsZXx8dGhpcy5sb2NhbGU7aWYodHlwZW9mIG9wdGlvbnMubG9jYWxlPT09J3VuZGVmaW5lZCcpe29wdGlvbnMubG9jYWxlPXRoaXMubG9jYWxlO31jb25zdCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShoYXNCYXNlUGF0aChhcyk/ZGVsQmFzZVBhdGgoYXMpOmFzKTtjb25zdCBsb2NhbGVQYXRoUmVzdWx0PSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhcnNlZEFzLnBhdGhuYW1lLHRoaXMubG9jYWxlcyk7aWYobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSl7dGhpcy5sb2NhbGU9bG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZTtwYXJzZWRBcy5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSk7YXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7dXJsPWFkZEJhc2VQYXRoKCgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKGhhc0Jhc2VQYXRoKHVybCk/ZGVsQmFzZVBhdGgodXJsKTp1cmwsdGhpcy5sb2NhbGVzKS5wYXRobmFtZSk7fWxldCBkaWROYXZpZ2F0ZT1mYWxzZTsvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbi8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuaWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7dmFyIF90aGlzJGxvY2FsZXM7Ly8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuaWYoISgoX3RoaXMkbG9jYWxlcz10aGlzLmxvY2FsZXMpIT1udWxsJiZfdGhpcyRsb2NhbGVzLmluY2x1ZGVzKHRoaXMubG9jYWxlKSkpe3BhcnNlZEFzLnBhdGhuYW1lPWFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZSk7d2luZG93LmxvY2F0aW9uLmhyZWY9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7Ly8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3Jcbi8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG5kaWROYXZpZ2F0ZT10cnVlO319Y29uc3QgZGV0ZWN0ZWREb21haW49ZGV0ZWN0RG9tYWluTG9jYWxlKHRoaXMuZG9tYWluTG9jYWxlcyx1bmRlZmluZWQsdGhpcy5sb2NhbGUpOy8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG5pZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXsvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuLy8gY29ycmVjdCBkb21haW5cbmlmKCFkaWROYXZpZ2F0ZSYmZGV0ZWN0ZWREb21haW4mJnRoaXMuaXNMb2NhbGVEb21haW4mJnNlbGYubG9jYXRpb24uaG9zdG5hbWUhPT1kZXRlY3RlZERvbWFpbi5kb21haW4pe2NvbnN0IGFzTm9CYXNlUGF0aD1kZWxCYXNlUGF0aChhcyk7d2luZG93LmxvY2F0aW9uLmhyZWY9YGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHA/Jyc6J3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YWRkQmFzZVBhdGgoYCR7dGhpcy5sb2NhbGU9PT1kZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlPycnOmAvJHt0aGlzLmxvY2FsZX1gfSR7YXNOb0Jhc2VQYXRoPT09Jy8nPycnOmFzTm9CYXNlUGF0aH1gfHwnLycpfWA7Ly8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3Jcbi8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG5kaWROYXZpZ2F0ZT10cnVlO319aWYoZGlkTmF2aWdhdGUpe3JldHVybiBuZXcgUHJvbWlzZSgoKT0+e30pO319aWYoIW9wdGlvbnMuX2gpe3RoaXMuaXNTc3I9ZmFsc2U7fS8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbmlmKF91dGlscy5TVCl7cGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTt9Y29uc3R7c2hhbGxvdz1mYWxzZX09b3B0aW9ucztjb25zdCByb3V0ZVByb3BzPXtzaGFsbG93fTtpZih0aGlzLl9pbkZsaWdodFJvdXRlKXt0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLHJvdXRlUHJvcHMpO31hcz1hZGRCYXNlUGF0aChhZGRMb2NhbGUoaGFzQmFzZVBhdGgoYXMpP2RlbEJhc2VQYXRoKGFzKTphcyxvcHRpb25zLmxvY2FsZSx0aGlzLmRlZmF1bHRMb2NhbGUpKTtjb25zdCBjbGVhbmVkQXM9ZGVsTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKT9kZWxCYXNlUGF0aChhcyk6YXMsdGhpcy5sb2NhbGUpO3RoaXMuX2luRmxpZ2h0Um91dGU9YXM7Ly8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2Vcbi8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbi8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbi8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbi8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuaWYoIW9wdGlvbnMuX2gmJnRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpe3RoaXMuYXNQYXRoPWNsZWFuZWRBcztSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsYXMscm91dGVQcm9wcyk7Ly8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbnRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zKTt0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpO3RoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSxudWxsKTtSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsYXMscm91dGVQcm9wcyk7cmV0dXJuIHRydWU7fWxldCBwYXJzZWQ9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTtsZXR7cGF0aG5hbWUscXVlcnl9PXBhcnNlZDsvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4vLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbi8vIHdoZW4gcmV3cml0dGVuIHRvXG5sZXQgcGFnZXMscmV3cml0ZXM7dHJ5e3BhZ2VzPWF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpOyh7X19yZXdyaXRlczpyZXdyaXRlc309YXdhaXQoMCxfcm91dGVMb2FkZXIuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCkoKSk7fWNhdGNoKGVycil7Ly8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4vLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG53aW5kb3cubG9jYXRpb24uaHJlZj1hcztyZXR1cm4gZmFsc2U7fS8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4vLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbi8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbi8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4vLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG5pZighdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpJiYhbG9jYWxlQ2hhbmdlKXttZXRob2Q9J3JlcGxhY2VTdGF0ZSc7fS8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4vLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG5sZXQgcmVzb2x2ZWRBcz1hczsvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4vLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4vLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxucGF0aG5hbWU9cGF0aG5hbWU/KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSk6cGF0aG5hbWU7aWYoc2hvdWxkUmVzb2x2ZUhyZWYmJnBhdGhuYW1lIT09Jy9fZXJyb3InKXs7b3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY9dHJ1ZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTJiZhcy5zdGFydHNXaXRoKCcvJykpe2NvbnN0IHJld3JpdGVzUmVzdWx0PSgwLF9yZXNvbHZlUmV3cml0ZXMuZGVmYXVsdCkoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcyx0aGlzLmxvY2FsZSkpLHBhZ2VzLHJld3JpdGVzLHF1ZXJ5LHA9PnJlc29sdmVEeW5hbWljUm91dGUocCxwYWdlcyksdGhpcy5sb2NhbGVzKTtyZXNvbHZlZEFzPXJld3JpdGVzUmVzdWx0LmFzUGF0aDtpZihyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSYmcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKXsvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4vLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxucGF0aG5hbWU9cmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO3BhcnNlZC5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXRobmFtZSk7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWVsc2V7cGFyc2VkLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUscGFnZXMpO2lmKHBhcnNlZC5wYXRobmFtZSE9PXBhdGhuYW1lKXtwYXRobmFtZT1wYXJzZWQucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPWFkZEJhc2VQYXRoKHBhdGhuYW1lKTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319fWNvbnN0IHJvdXRlPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7aWYoIWlzTG9jYWxVUkwoYXMpKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCtgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgKTt9d2luZG93LmxvY2F0aW9uLmhyZWY9YXM7cmV0dXJuIGZhbHNlO31yZXNvbHZlZEFzPWRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSx0aGlzLmxvY2FsZSk7aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkocm91dGUpKXtjb25zdCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShyZXNvbHZlZEFzKTtjb25zdCBhc1BhdGhuYW1lPXBhcnNlZEFzLnBhdGhuYW1lO2NvbnN0IHJvdXRlUmVnZXg9KDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocm91dGUpO2NvbnN0IHJvdXRlTWF0Y2g9KDAsX3JvdXRlTWF0Y2hlci5nZXRSb3V0ZU1hdGNoZXIpKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO2NvbnN0IHNob3VsZEludGVycG9sYXRlPXJvdXRlPT09YXNQYXRobmFtZTtjb25zdCBpbnRlcnBvbGF0ZWRBcz1zaG91bGRJbnRlcnBvbGF0ZT9pbnRlcnBvbGF0ZUFzKHJvdXRlLGFzUGF0aG5hbWUscXVlcnkpOnt9O2lmKCFyb3V0ZU1hdGNofHxzaG91bGRJbnRlcnBvbGF0ZSYmIWludGVycG9sYXRlZEFzLnJlc3VsdCl7Y29uc3QgbWlzc2luZ1BhcmFtcz1PYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKHBhcmFtPT4hcXVlcnlbcGFyYW1dKTtpZihtaXNzaW5nUGFyYW1zLmxlbmd0aD4wKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc29sZS53YXJuKGAke3Nob3VsZEludGVycG9sYXRlP2BJbnRlcnBvbGF0aW5nIGhyZWZgOmBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGArYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYCk7fXRocm93IG5ldyBFcnJvcigoc2hvdWxkSW50ZXJwb2xhdGU/YFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYDpgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKStgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke3Nob3VsZEludGVycG9sYXRlPydocmVmLWludGVycG9sYXRpb24tZmFpbGVkJzonaW5jb21wYXRpYmxlLWhyZWYtYXMnfWApO319ZWxzZSBpZihzaG91bGRJbnRlcnBvbGF0ZSl7YXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShPYmplY3QuYXNzaWduKHt9LHBhcnNlZEFzLHtwYXRobmFtZTppbnRlcnBvbGF0ZWRBcy5yZXN1bHQscXVlcnk6b21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LGludGVycG9sYXRlZEFzLnBhcmFtcyl9KSk7fWVsc2V7Ly8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbk9iamVjdC5hc3NpZ24ocXVlcnkscm91dGVNYXRjaCk7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLGFzLHJvdXRlUHJvcHMpO3RyeXt2YXIgX3NlbGYkX19ORVhUX0RBVEFfXyRwLF9zZWxmJF9fTkVYVF9EQVRBX18kcDIsX29wdGlvbnMkc2Nyb2xsO2xldCByb3V0ZUluZm89YXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUscGF0aG5hbWUscXVlcnksYXMscmVzb2x2ZWRBcyxyb3V0ZVByb3BzKTtsZXR7ZXJyb3IscHJvcHMsX19OX1NTRyxfX05fU1NQfT1yb3V0ZUluZm87Ly8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG5pZigoX19OX1NTR3x8X19OX1NTUCkmJnByb3BzKXtpZihwcm9wcy5wYWdlUHJvcHMmJnByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Qpe2NvbnN0IGRlc3RpbmF0aW9uPXByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Q7Ly8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbi8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbi8vIGl0J3Mgbm90XG5pZihkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpe2NvbnN0IHBhcnNlZEhyZWY9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoZGVzdGluYXRpb24pO3BhcnNlZEhyZWYucGF0aG5hbWU9cmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWRIcmVmLnBhdGhuYW1lLHBhZ2VzKTtpZihwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSl7Y29uc3R7dXJsOm5ld1VybCxhczpuZXdBc309cHJlcGFyZVVybEFzKHRoaXMsZGVzdGluYXRpb24sZGVzdGluYXRpb24pO3JldHVybiB0aGlzLmNoYW5nZShtZXRob2QsbmV3VXJsLG5ld0FzLG9wdGlvbnMpO319d2luZG93LmxvY2F0aW9uLmhyZWY9ZGVzdGluYXRpb247cmV0dXJuIG5ldyBQcm9taXNlKCgpPT57fSk7fXRoaXMuaXNQcmV2aWV3PSEhcHJvcHMuX19OX1BSRVZJRVc7Ly8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuaWYocHJvcHMubm90Rm91bmQ9PT1TU0dfREFUQV9OT1RfRk9VTkQpe2xldCBub3RGb3VuZFJvdXRlO3RyeXthd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0Jyk7bm90Rm91bmRSb3V0ZT0nLzQwNCc7fWNhdGNoKF8pe25vdEZvdW5kUm91dGU9Jy9fZXJyb3InO31yb3V0ZUluZm89YXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8obm90Rm91bmRSb3V0ZSxub3RGb3VuZFJvdXRlLHF1ZXJ5LGFzLHJlc29sdmVkQXMse3NoYWxsb3c6ZmFsc2V9KTt9fVJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsYXMscm91dGVQcm9wcyk7dGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsdXJsLGFzLG9wdGlvbnMpO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdCBhcHBDb21wPXRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7d2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZD1hcHBDb21wLmdldEluaXRpYWxQcm9wcz09PWFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyYmIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO31pZihvcHRpb25zLl9oJiZwYXRobmFtZT09PScvX2Vycm9yJyYmKChfc2VsZiRfX05FWFRfREFUQV9fJHA9c2VsZi5fX05FWFRfREFUQV9fLnByb3BzKT09bnVsbD92b2lkIDA6KF9zZWxmJF9fTkVYVF9EQVRBX18kcDI9X3NlbGYkX19ORVhUX0RBVEFfXyRwLnBhZ2VQcm9wcyk9PW51bGw/dm9pZCAwOl9zZWxmJF9fTkVYVF9EQVRBX18kcDIuc3RhdHVzQ29kZSk9PT01MDAmJnByb3BzIT1udWxsJiZwcm9wcy5wYWdlUHJvcHMpey8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxucHJvcHMucGFnZVByb3BzLnN0YXR1c0NvZGU9NTAwO30vLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG5jb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlPW9wdGlvbnMuc2hhbGxvdyYmdGhpcy5yb3V0ZT09PXJvdXRlO2NvbnN0IHNob3VsZFNjcm9sbD0oX29wdGlvbnMkc2Nyb2xsPW9wdGlvbnMuc2Nyb2xsKSE9bnVsbD9fb3B0aW9ucyRzY3JvbGw6IWlzVmFsaWRTaGFsbG93Um91dGU7Y29uc3QgcmVzZXRTY3JvbGw9c2hvdWxkU2Nyb2xsP3t4OjAseTowfTpudWxsO2F3YWl0IHRoaXMuc2V0KHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGNsZWFuZWRBcyxyb3V0ZUluZm8sZm9yY2VkU2Nyb2xsIT1udWxsP2ZvcmNlZFNjcm9sbDpyZXNldFNjcm9sbCkuY2F0Y2goZT0+e2lmKGUuY2FuY2VsbGVkKWVycm9yPWVycm9yfHxlO2Vsc2UgdGhyb3cgZTt9KTtpZihlcnJvcil7Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJyxlcnJvcixjbGVhbmVkQXMscm91dGVQcm9wcyk7dGhyb3cgZXJyb3I7fWlmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2lmKHRoaXMubG9jYWxlKXtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZz10aGlzLmxvY2FsZTt9fVJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsYXMscm91dGVQcm9wcyk7cmV0dXJuIHRydWU7fWNhdGNoKGVycil7aWYoZXJyLmNhbmNlbGxlZCl7cmV0dXJuIGZhbHNlO310aHJvdyBlcnI7fX1jaGFuZ2VTdGF0ZShtZXRob2QsdXJsLGFzLG9wdGlvbnM9e30pe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZih0eXBlb2Ygd2luZG93Lmhpc3Rvcnk9PT0ndW5kZWZpbmVkJyl7Y29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKTtyZXR1cm47fWlmKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdPT09J3VuZGVmaW5lZCcpe2NvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYCk7cmV0dXJuO319aWYobWV0aG9kIT09J3B1c2hTdGF0ZSd8fCgwLF91dGlscy5nZXRVUkwpKCkhPT1hcyl7dGhpcy5fc2hhbGxvdz1vcHRpb25zLnNoYWxsb3c7d2luZG93Lmhpc3RvcnlbbWV0aG9kXSh7dXJsLGFzLG9wdGlvbnMsX19OOnRydWUsaWR4OnRoaXMuX2lkeD1tZXRob2QhPT0ncHVzaFN0YXRlJz90aGlzLl9pZHg6dGhpcy5faWR4KzF9LC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4nJyxhcyk7fX1hc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIscGF0aG5hbWUscXVlcnksYXMscm91dGVQcm9wcyxsb2FkRXJyb3JGYWlsKXtpZihlcnIuY2FuY2VsbGVkKXsvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xudGhyb3cgZXJyO31pZigoMCxfcm91dGVMb2FkZXIuaXNBc3NldEVycm9yKShlcnIpfHxsb2FkRXJyb3JGYWlsKXtSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLGVycixhcyxyb3V0ZVByb3BzKTsvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbi8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2Vcbi8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxud2luZG93LmxvY2F0aW9uLmhyZWY9YXM7Ly8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4vLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxudGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpO310cnl7bGV0IENvbXBvbmVudDtsZXQgc3R5bGVTaGVldHM7bGV0IHByb3BzO2lmKHR5cGVvZiBDb21wb25lbnQ9PT0ndW5kZWZpbmVkJ3x8dHlwZW9mIHN0eWxlU2hlZXRzPT09J3VuZGVmaW5lZCcpezsoe3BhZ2U6Q29tcG9uZW50LHN0eWxlU2hlZXRzfT1hd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJykpO31jb25zdCByb3V0ZUluZm89e3Byb3BzLENvbXBvbmVudCxzdHlsZVNoZWV0cyxlcnIsZXJyb3I6ZXJyfTtpZighcm91dGVJbmZvLnByb3BzKXt0cnl7cm91dGVJbmZvLnByb3BzPWF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCx7ZXJyLHBhdGhuYW1lLHF1ZXJ5fSk7fWNhdGNoKGdpcEVycil7Y29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJyxnaXBFcnIpO3JvdXRlSW5mby5wcm9wcz17fTt9fXJldHVybiByb3V0ZUluZm87fWNhdGNoKHJvdXRlSW5mb0Vycil7cmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMsdHJ1ZSk7fX1hc3luYyBnZXRSb3V0ZUluZm8ocm91dGUscGF0aG5hbWUscXVlcnksYXMscmVzb2x2ZWRBcyxyb3V0ZVByb3BzKXt0cnl7Y29uc3QgZXhpc3RpbmdSb3V0ZUluZm89dGhpcy5jb21wb25lbnRzW3JvdXRlXTtpZihyb3V0ZVByb3BzLnNoYWxsb3cmJmV4aXN0aW5nUm91dGVJbmZvJiZ0aGlzLnJvdXRlPT09cm91dGUpe3JldHVybiBleGlzdGluZ1JvdXRlSW5mbzt9Y29uc3QgY2FjaGVkUm91dGVJbmZvPWV4aXN0aW5nUm91dGVJbmZvJiYnaW5pdGlhbCdpbiBleGlzdGluZ1JvdXRlSW5mbz91bmRlZmluZWQ6ZXhpc3RpbmdSb3V0ZUluZm87Y29uc3Qgcm91dGVJbmZvPWNhY2hlZFJvdXRlSW5mbz9jYWNoZWRSb3V0ZUluZm86YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihyZXM9Pih7Q29tcG9uZW50OnJlcy5wYWdlLHN0eWxlU2hlZXRzOnJlcy5zdHlsZVNoZWV0cyxfX05fU1NHOnJlcy5tb2QuX19OX1NTRyxfX05fU1NQOnJlcy5tb2QuX19OX1NTUH0pKTtjb25zdHtDb21wb25lbnQsX19OX1NTRyxfX05fU1NQfT1yb3V0ZUluZm87aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0e2lzVmFsaWRFbGVtZW50VHlwZX09cmVxdWlyZSgncmVhY3QtaXMnKTtpZighaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpe3Rocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgKTt9fWxldCBkYXRhSHJlZjtpZihfX05fU1NHfHxfX05fU1NQKXtkYXRhSHJlZj10aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoKDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh7cGF0aG5hbWUscXVlcnl9KSxyZXNvbHZlZEFzLF9fTl9TU0csdGhpcy5sb2NhbGUpO31jb25zdCBwcm9wcz1hd2FpdCB0aGlzLl9nZXREYXRhKCgpPT5fX05fU1NHP3RoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpOl9fTl9TU1A/dGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZik6dGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG57cGF0aG5hbWUscXVlcnksYXNQYXRoOmFzLGxvY2FsZTp0aGlzLmxvY2FsZSxsb2NhbGVzOnRoaXMubG9jYWxlcyxkZWZhdWx0TG9jYWxlOnRoaXMuZGVmYXVsdExvY2FsZX0pKTtyb3V0ZUluZm8ucHJvcHM9cHJvcHM7dGhpcy5jb21wb25lbnRzW3JvdXRlXT1yb3V0ZUluZm87cmV0dXJuIHJvdXRlSW5mbzt9Y2F0Y2goZXJyKXtyZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIscGF0aG5hbWUscXVlcnksYXMscm91dGVQcm9wcyk7fX1zZXQocm91dGUscGF0aG5hbWUscXVlcnksYXMsZGF0YSxyZXNldFNjcm9sbCl7dGhpcy5pc0ZhbGxiYWNrPWZhbHNlO3RoaXMucm91dGU9cm91dGU7dGhpcy5wYXRobmFtZT1wYXRobmFtZTt0aGlzLnF1ZXJ5PXF1ZXJ5O3RoaXMuYXNQYXRoPWFzO3JldHVybiB0aGlzLm5vdGlmeShkYXRhLHJlc2V0U2Nyb2xsKTt9LyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL2JlZm9yZVBvcFN0YXRlKGNiKXt0aGlzLl9icHM9Y2I7fW9ubHlBSGFzaENoYW5nZShhcyl7aWYoIXRoaXMuYXNQYXRoKXJldHVybiBmYWxzZTtjb25zdFtvbGRVcmxOb0hhc2gsb2xkSGFzaF09dGhpcy5hc1BhdGguc3BsaXQoJyMnKTtjb25zdFtuZXdVcmxOb0hhc2gsbmV3SGFzaF09YXMuc3BsaXQoJyMnKTsvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG5pZihuZXdIYXNoJiZvbGRVcmxOb0hhc2g9PT1uZXdVcmxOb0hhc2gmJm9sZEhhc2g9PT1uZXdIYXNoKXtyZXR1cm4gdHJ1ZTt9Ly8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuaWYob2xkVXJsTm9IYXNoIT09bmV3VXJsTm9IYXNoKXtyZXR1cm4gZmFsc2U7fS8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbi8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG5yZXR1cm4gb2xkSGFzaCE9PW5ld0hhc2g7fXNjcm9sbFRvSGFzaChhcyl7Y29uc3RbLGhhc2hdPWFzLnNwbGl0KCcjJyk7Ly8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlIG9yIGAjdG9wYFxuLy8gVG8gbWlycm9yIGJyb3dzZXJzXG5pZihoYXNoPT09Jyd8fGhhc2g9PT0ndG9wJyl7d2luZG93LnNjcm9sbFRvKDAsMCk7cmV0dXJuO30vLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuY29uc3QgaWRFbD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtpZihpZEVsKXtpZEVsLnNjcm9sbEludG9WaWV3KCk7cmV0dXJuO30vLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbi8vIFRvIG1pcnJvciBicm93c2Vyc1xuY29uc3QgbmFtZUVsPWRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdO2lmKG5hbWVFbCl7bmFtZUVsLnNjcm9sbEludG9WaWV3KCk7fX11cmxJc05ldyhhc1BhdGgpe3JldHVybiB0aGlzLmFzUGF0aCE9PWFzUGF0aDt9LyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9hc3luYyBwcmVmZXRjaCh1cmwsYXNQYXRoPXVybCxvcHRpb25zPXt9KXtsZXQgcGFyc2VkPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHVybCk7bGV0e3BhdGhuYW1lfT1wYXJzZWQ7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7aWYob3B0aW9ucy5sb2NhbGU9PT1mYWxzZSl7cGF0aG5hbWU9KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGF0aG5hbWUsdGhpcy5sb2NhbGVzKS5wYXRobmFtZTtwYXJzZWQucGF0aG5hbWU9cGF0aG5hbWU7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTtsZXQgcGFyc2VkQXM9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoYXNQYXRoKTtjb25zdCBsb2NhbGVQYXRoUmVzdWx0PSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhcnNlZEFzLnBhdGhuYW1lLHRoaXMubG9jYWxlcyk7cGFyc2VkQXMucGF0aG5hbWU9bG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZTtvcHRpb25zLmxvY2FsZT1sb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlfHx0aGlzLmRlZmF1bHRMb2NhbGU7YXNQYXRoPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkQXMpO319Y29uc3QgcGFnZXM9YXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7bGV0IHJlc29sdmVkQXM9YXNQYXRoO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMmJmFzUGF0aC5zdGFydHNXaXRoKCcvJykpe2xldCByZXdyaXRlczsoe19fcmV3cml0ZXM6cmV3cml0ZXN9PWF3YWl0KDAsX3JvdXRlTG9hZGVyLmdldENsaWVudEJ1aWxkTWFuaWZlc3QpKCkpO2NvbnN0IHJld3JpdGVzUmVzdWx0PSgwLF9yZXNvbHZlUmV3cml0ZXMuZGVmYXVsdCkoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCx0aGlzLmxvY2FsZSkpLHBhZ2VzLHJld3JpdGVzLHBhcnNlZC5xdWVyeSxwPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAscGFnZXMpLHRoaXMubG9jYWxlcyk7cmVzb2x2ZWRBcz1kZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSx0aGlzLmxvY2FsZSk7aWYocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UmJnJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZil7Ly8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbnBhdGhuYW1lPXJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtwYXJzZWQucGF0aG5hbWU9cGF0aG5hbWU7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWVsc2V7cGFyc2VkLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLHBhZ2VzKTtpZihwYXJzZWQucGF0aG5hbWUhPT1wYXRobmFtZSl7cGF0aG5hbWU9cGFyc2VkLnBhdGhuYW1lO3BhcnNlZC5wYXRobmFtZT1wYXRobmFtZTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319Y29uc3Qgcm91dGU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKHBhdGhuYW1lKTsvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7cmV0dXJuO31hd2FpdCBQcm9taXNlLmFsbChbdGhpcy5wYWdlTG9hZGVyLl9pc1NzZyhyb3V0ZSkudGhlbihpc1NzZz0+e3JldHVybiBpc1NzZz90aGlzLl9nZXRTdGF0aWNEYXRhKHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZih1cmwscmVzb2x2ZWRBcyx0cnVlLHR5cGVvZiBvcHRpb25zLmxvY2FsZSE9PSd1bmRlZmluZWQnP29wdGlvbnMubG9jYWxlOnRoaXMubG9jYWxlKSk6ZmFsc2U7fSksdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHk/J2xvYWRQYWdlJzoncHJlZmV0Y2gnXShyb3V0ZSldKTt9YXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGUpe2xldCBjYW5jZWxsZWQ9ZmFsc2U7Y29uc3QgY2FuY2VsPXRoaXMuY2xjPSgpPT57Y2FuY2VsbGVkPXRydWU7fTtjb25zdCBjb21wb25lbnRSZXN1bHQ9YXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtpZihjYW5jZWxsZWQpe2NvbnN0IGVycm9yPW5ldyBFcnJvcihgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYCk7ZXJyb3IuY2FuY2VsbGVkPXRydWU7dGhyb3cgZXJyb3I7fWlmKGNhbmNlbD09PXRoaXMuY2xjKXt0aGlzLmNsYz1udWxsO31yZXR1cm4gY29tcG9uZW50UmVzdWx0O31fZ2V0RGF0YShmbil7bGV0IGNhbmNlbGxlZD1mYWxzZTtjb25zdCBjYW5jZWw9KCk9PntjYW5jZWxsZWQ9dHJ1ZTt9O3RoaXMuY2xjPWNhbmNlbDtyZXR1cm4gZm4oKS50aGVuKGRhdGE9PntpZihjYW5jZWw9PT10aGlzLmNsYyl7dGhpcy5jbGM9bnVsbDt9aWYoY2FuY2VsbGVkKXtjb25zdCBlcnI9bmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJyk7ZXJyLmNhbmNlbGxlZD10cnVlO3Rocm93IGVycjt9cmV0dXJuIGRhdGE7fSk7fV9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKXtjb25zdHtocmVmOmNhY2hlS2V5fT1uZXcgVVJMKGRhdGFIcmVmLHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdwcm9kdWN0aW9uJyYmIXRoaXMuaXNQcmV2aWV3JiZ0aGlzLnNkY1tjYWNoZUtleV0pe3JldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKTt9cmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsdGhpcy5pc1NzcikudGhlbihkYXRhPT57dGhpcy5zZGNbY2FjaGVLZXldPWRhdGE7cmV0dXJuIGRhdGE7fSk7fV9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKXtjb25zdHtocmVmOnJlc291cmNlS2V5fT1uZXcgVVJMKGRhdGFIcmVmLHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtpZih0aGlzLnNkcltyZXNvdXJjZUtleV0pe3JldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV07fXJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV09ZmV0Y2hOZXh0RGF0YShkYXRhSHJlZix0aGlzLmlzU3NyKS50aGVuKGRhdGE9PntkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO3JldHVybiBkYXRhO30pLmNhdGNoKGVycj0+e2RlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07dGhyb3cgZXJyO30pO31nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LGN0eCl7Y29uc3R7Q29tcG9uZW50OkFwcH09dGhpcy5jb21wb25lbnRzWycvX2FwcCddO2NvbnN0IEFwcFRyZWU9dGhpcy5fd3JhcEFwcChBcHApO2N0eC5BcHBUcmVlPUFwcFRyZWU7cmV0dXJuKDAsX3V0aWxzLmxvYWRHZXRJbml0aWFsUHJvcHMpKEFwcCx7QXBwVHJlZSxDb21wb25lbnQscm91dGVyOnRoaXMsY3R4fSk7fWFib3J0Q29tcG9uZW50TG9hZChhcyxyb3V0ZVByb3BzKXtpZih0aGlzLmNsYyl7Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJyxidWlsZENhbmNlbGxhdGlvbkVycm9yKCksYXMscm91dGVQcm9wcyk7dGhpcy5jbGMoKTt0aGlzLmNsYz1udWxsO319bm90aWZ5KGRhdGEscmVzZXRTY3JvbGwpe3JldHVybiB0aGlzLnN1YihkYXRhLHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQscmVzZXRTY3JvbGwpO319ZXhwb3J0cy5kZWZhdWx0PVJvdXRlcjtSb3V0ZXIuZXZlbnRzPSgwLF9taXR0LmRlZmF1bHQpKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5mb3JtYXRVcmw9Zm9ybWF0VXJsO3ZhciBxdWVyeXN0cmluZz1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9xdWVyeXN0cmluZ1wiKSk7ZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCl7aWYodHlwZW9mIFdlYWtNYXAhPT1cImZ1bmN0aW9uXCIpcmV0dXJuIG51bGw7dmFyIGNhY2hlPW5ldyBXZWFrTWFwKCk7X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlPWZ1bmN0aW9uKCl7cmV0dXJuIGNhY2hlO307cmV0dXJuIGNhY2hlO31mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmope2lmKG9iaiYmb2JqLl9fZXNNb2R1bGUpe3JldHVybiBvYmo7fWlmKG9iaj09PW51bGx8fHR5cGVvZiBvYmohPT1cIm9iamVjdFwiJiZ0eXBlb2Ygb2JqIT09XCJmdW5jdGlvblwiKXtyZXR1cm57ZGVmYXVsdDpvYmp9O312YXIgY2FjaGU9X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7aWYoY2FjaGUmJmNhY2hlLmhhcyhvYmopKXtyZXR1cm4gY2FjaGUuZ2V0KG9iaik7fXZhciBuZXdPYmo9e307dmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvcj1PYmplY3QuZGVmaW5lUHJvcGVydHkmJk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7Zm9yKHZhciBrZXkgaW4gb2JqKXtpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLGtleSkpe3ZhciBkZXNjPWhhc1Byb3BlcnR5RGVzY3JpcHRvcj9PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaixrZXkpOm51bGw7aWYoZGVzYyYmKGRlc2MuZ2V0fHxkZXNjLnNldCkpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosa2V5LGRlc2MpO31lbHNle25ld09ialtrZXldPW9ialtrZXldO319fW5ld09iai5kZWZhdWx0PW9iajtpZihjYWNoZSl7Y2FjaGUuc2V0KG9iaixuZXdPYmopO31yZXR1cm4gbmV3T2JqO30vLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuY29uc3Qgc2xhc2hlZFByb3RvY29scz0vaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS87ZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iail7bGV0e2F1dGgsaG9zdG5hbWV9PXVybE9iajtsZXQgcHJvdG9jb2w9dXJsT2JqLnByb3RvY29sfHwnJztsZXQgcGF0aG5hbWU9dXJsT2JqLnBhdGhuYW1lfHwnJztsZXQgaGFzaD11cmxPYmouaGFzaHx8Jyc7bGV0IHF1ZXJ5PXVybE9iai5xdWVyeXx8Jyc7bGV0IGhvc3Q9ZmFsc2U7YXV0aD1hdXRoP2VuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwnOicpKydAJzonJztpZih1cmxPYmouaG9zdCl7aG9zdD1hdXRoK3VybE9iai5ob3N0O31lbHNlIGlmKGhvc3RuYW1lKXtob3N0PWF1dGgrKH5ob3N0bmFtZS5pbmRleE9mKCc6Jyk/YFske2hvc3RuYW1lfV1gOmhvc3RuYW1lKTtpZih1cmxPYmoucG9ydCl7aG9zdCs9JzonK3VybE9iai5wb3J0O319aWYocXVlcnkmJnR5cGVvZiBxdWVyeT09PSdvYmplY3QnKXtxdWVyeT1TdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSkpO31sZXQgc2VhcmNoPXVybE9iai5zZWFyY2h8fHF1ZXJ5JiZgPyR7cXVlcnl9YHx8Jyc7aWYocHJvdG9jb2wmJnByb3RvY29sLnN1YnN0cigtMSkhPT0nOicpcHJvdG9jb2wrPSc6JztpZih1cmxPYmouc2xhc2hlc3x8KCFwcm90b2NvbHx8c2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkmJmhvc3QhPT1mYWxzZSl7aG9zdD0nLy8nKyhob3N0fHwnJyk7aWYocGF0aG5hbWUmJnBhdGhuYW1lWzBdIT09Jy8nKXBhdGhuYW1lPScvJytwYXRobmFtZTt9ZWxzZSBpZighaG9zdCl7aG9zdD0nJzt9aWYoaGFzaCYmaGFzaFswXSE9PScjJyloYXNoPScjJytoYXNoO2lmKHNlYXJjaCYmc2VhcmNoWzBdIT09Jz8nKXNlYXJjaD0nPycrc2VhcmNoO3BhdGhuYW1lPXBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZyxlbmNvZGVVUklDb21wb25lbnQpO3NlYXJjaD1zZWFyY2gucmVwbGFjZSgnIycsJyUyMycpO3JldHVybmAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvcm1hdC11cmwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5pc0R5bmFtaWNSb3V0ZT1pc0R5bmFtaWNSb3V0ZTsvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFPS9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvO2Z1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlKXtyZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pcy1keW5hbWljLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMucGFyc2VSZWxhdGl2ZVVybD1wYXJzZVJlbGF0aXZlVXJsO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uLy4uL3V0aWxzXCIpO3ZhciBfcXVlcnlzdHJpbmc9cmVxdWlyZShcIi4vcXVlcnlzdHJpbmdcIik7LyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmwsYmFzZSl7Y29uc3QgZ2xvYmFsQmFzZT1uZXcgVVJMKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJz8naHR0cDovL24nOigwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKSk7Y29uc3QgcmVzb2x2ZWRCYXNlPWJhc2U/bmV3IFVSTChiYXNlLGdsb2JhbEJhc2UpOmdsb2JhbEJhc2U7Y29uc3R7cGF0aG5hbWUsc2VhcmNoUGFyYW1zLHNlYXJjaCxoYXNoLGhyZWYsb3JpZ2lufT1uZXcgVVJMKHVybCxyZXNvbHZlZEJhc2UpO2lmKG9yaWdpbiE9PWdsb2JhbEJhc2Uub3JpZ2luKXt0aHJvdyBuZXcgRXJyb3IoYGludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwsIHJvdXRlciByZWNlaXZlZCAke3VybH1gKTt9cmV0dXJue3BhdGhuYW1lLHF1ZXJ5OigwLF9xdWVyeXN0cmluZy5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KShzZWFyY2hQYXJhbXMpLHNlYXJjaCxoYXNoLGhyZWY6aHJlZi5zbGljZShnbG9iYWxCYXNlLm9yaWdpbi5sZW5ndGgpfTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXJzZS1yZWxhdGl2ZS11cmwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5PXNlYXJjaFBhcmFtc1RvVXJsUXVlcnk7ZXhwb3J0cy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zPXVybFF1ZXJ5VG9TZWFyY2hQYXJhbXM7ZXhwb3J0cy5hc3NpZ249YXNzaWduO2Z1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKXtjb25zdCBxdWVyeT17fTtzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsa2V5KT0+e2lmKHR5cGVvZiBxdWVyeVtrZXldPT09J3VuZGVmaW5lZCcpe3F1ZXJ5W2tleV09dmFsdWU7fWVsc2UgaWYoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSl7O3F1ZXJ5W2tleV0ucHVzaCh2YWx1ZSk7fWVsc2V7cXVlcnlba2V5XT1bcXVlcnlba2V5XSx2YWx1ZV07fX0pO3JldHVybiBxdWVyeTt9ZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbSl7aWYodHlwZW9mIHBhcmFtPT09J3N0cmluZyd8fHR5cGVvZiBwYXJhbT09PSdudW1iZXInJiYhaXNOYU4ocGFyYW0pfHx0eXBlb2YgcGFyYW09PT0nYm9vbGVhbicpe3JldHVybiBTdHJpbmcocGFyYW0pO31lbHNle3JldHVybicnO319ZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyh1cmxRdWVyeSl7Y29uc3QgcmVzdWx0PW5ldyBVUkxTZWFyY2hQYXJhbXMoKTtPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSx2YWx1ZV0pPT57aWYoQXJyYXkuaXNBcnJheSh2YWx1ZSkpe3ZhbHVlLmZvckVhY2goaXRlbT0+cmVzdWx0LmFwcGVuZChrZXksc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpO31lbHNle3Jlc3VsdC5zZXQoa2V5LHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKTt9fSk7cmV0dXJuIHJlc3VsdDt9ZnVuY3Rpb24gYXNzaWduKHRhcmdldCwuLi5zZWFyY2hQYXJhbXNMaXN0KXtzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goc2VhcmNoUGFyYW1zPT57QXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKGtleT0+dGFyZ2V0LmRlbGV0ZShrZXkpKTtzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsa2V5KT0+dGFyZ2V0LmFwcGVuZChrZXksdmFsdWUpKTt9KTtyZXR1cm4gdGFyZ2V0O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXF1ZXJ5c3RyaW5nLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZ2V0Um91dGVNYXRjaGVyPWdldFJvdXRlTWF0Y2hlcjtmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCl7Y29uc3R7cmUsZ3JvdXBzfT1yb3V0ZVJlZ2V4O3JldHVybiBwYXRobmFtZT0+e2NvbnN0IHJvdXRlTWF0Y2g9cmUuZXhlYyhwYXRobmFtZSk7aWYoIXJvdXRlTWF0Y2gpe3JldHVybiBmYWxzZTt9Y29uc3QgZGVjb2RlPXBhcmFtPT57dHJ5e3JldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pO31jYXRjaChfKXtjb25zdCBlcnI9bmV3IEVycm9yKCdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJyk7ZXJyLmNvZGU9J0RFQ09ERV9GQUlMRUQnO3Rocm93IGVycjt9fTtjb25zdCBwYXJhbXM9e307T2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKHNsdWdOYW1lPT57Y29uc3QgZz1ncm91cHNbc2x1Z05hbWVdO2NvbnN0IG09cm91dGVNYXRjaFtnLnBvc107aWYobSE9PXVuZGVmaW5lZCl7cGFyYW1zW3NsdWdOYW1lXT1+bS5pbmRleE9mKCcvJyk/bS5zcGxpdCgnLycpLm1hcChlbnRyeT0+ZGVjb2RlKGVudHJ5KSk6Zy5yZXBlYXQ/W2RlY29kZShtKV06ZGVjb2RlKG0pO319KTtyZXR1cm4gcGFyYW1zO307fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtbWF0Y2hlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmdldFJvdXRlUmVnZXg9Z2V0Um91dGVSZWdleDsvLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyKXtyZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywnXFxcXCQmJyk7fWZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtKXtjb25zdCBvcHRpb25hbD1wYXJhbS5zdGFydHNXaXRoKCdbJykmJnBhcmFtLmVuZHNXaXRoKCddJyk7aWYob3B0aW9uYWwpe3BhcmFtPXBhcmFtLnNsaWNlKDEsLTEpO31jb25zdCByZXBlYXQ9cGFyYW0uc3RhcnRzV2l0aCgnLi4uJyk7aWYocmVwZWF0KXtwYXJhbT1wYXJhbS5zbGljZSgzKTt9cmV0dXJue2tleTpwYXJhbSxyZXBlYXQsb3B0aW9uYWx9O31mdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZSl7Y29uc3Qgc2VnbWVudHM9KG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywnJyl8fCcvJykuc2xpY2UoMSkuc3BsaXQoJy8nKTtjb25zdCBncm91cHM9e307bGV0IGdyb3VwSW5kZXg9MTtjb25zdCBwYXJhbWV0ZXJpemVkUm91dGU9c2VnbWVudHMubWFwKHNlZ21lbnQ9PntpZihzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSYmc2VnbWVudC5lbmRzV2l0aCgnXScpKXtjb25zdHtrZXksb3B0aW9uYWwscmVwZWF0fT1wYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsLTEpKTtncm91cHNba2V5XT17cG9zOmdyb3VwSW5kZXgrKyxyZXBlYXQsb3B0aW9uYWx9O3JldHVybiByZXBlYXQ/b3B0aW9uYWw/Jyg/Oi8oLis/KSk/JzonLyguKz8pJzonLyhbXi9dKz8pJzt9ZWxzZXtyZXR1cm5gLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YDt9fSkuam9pbignJyk7Ly8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4vLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuaWYodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnKXtsZXQgcm91dGVLZXlDaGFyQ29kZT05NztsZXQgcm91dGVLZXlDaGFyTGVuZ3RoPTE7Ly8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuY29uc3QgZ2V0U2FmZVJvdXRlS2V5PSgpPT57bGV0IHJvdXRlS2V5PScnO2ZvcihsZXQgaT0wO2k8cm91dGVLZXlDaGFyTGVuZ3RoO2krKyl7cm91dGVLZXkrPVN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSk7cm91dGVLZXlDaGFyQ29kZSsrO2lmKHJvdXRlS2V5Q2hhckNvZGU+MTIyKXtyb3V0ZUtleUNoYXJMZW5ndGgrKztyb3V0ZUtleUNoYXJDb2RlPTk3O319cmV0dXJuIHJvdXRlS2V5O307Y29uc3Qgcm91dGVLZXlzPXt9O2xldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZT1zZWdtZW50cy5tYXAoc2VnbWVudD0+e2lmKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpJiZzZWdtZW50LmVuZHNXaXRoKCddJykpe2NvbnN0e2tleSxvcHRpb25hbCxyZXBlYXR9PXBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwtMSkpOy8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbi8vIHRoZSBuYW1lZCByZWdleFxubGV0IGNsZWFuZWRLZXk9a2V5LnJlcGxhY2UoL1xcVy9nLCcnKTtsZXQgaW52YWxpZEtleT1mYWxzZTsvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbi8vIHNhZmUga2V5XG5pZihjbGVhbmVkS2V5Lmxlbmd0aD09PTB8fGNsZWFuZWRLZXkubGVuZ3RoPjMwKXtpbnZhbGlkS2V5PXRydWU7fWlmKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLDEpKSkpe2ludmFsaWRLZXk9dHJ1ZTt9aWYoaW52YWxpZEtleSl7Y2xlYW5lZEtleT1nZXRTYWZlUm91dGVLZXkoKTt9cm91dGVLZXlzW2NsZWFuZWRLZXldPWtleTtyZXR1cm4gcmVwZWF0P29wdGlvbmFsP2AoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gOmAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYDpgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWA7fWVsc2V7cmV0dXJuYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWA7fX0pLmpvaW4oJycpO3JldHVybntyZTpuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLGdyb3Vwcyxyb3V0ZUtleXMsbmFtZWRSZWdleDpgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGB9O31yZXR1cm57cmU6bmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxncm91cHN9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLXJlZ2V4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZXhlY09uY2U9ZXhlY09uY2U7ZXhwb3J0cy5nZXRMb2NhdGlvbk9yaWdpbj1nZXRMb2NhdGlvbk9yaWdpbjtleHBvcnRzLmdldFVSTD1nZXRVUkw7ZXhwb3J0cy5nZXREaXNwbGF5TmFtZT1nZXREaXNwbGF5TmFtZTtleHBvcnRzLmlzUmVzU2VudD1pc1Jlc1NlbnQ7ZXhwb3J0cy5sb2FkR2V0SW5pdGlhbFByb3BzPWxvYWRHZXRJbml0aWFsUHJvcHM7ZXhwb3J0cy5mb3JtYXRXaXRoVmFsaWRhdGlvbj1mb3JtYXRXaXRoVmFsaWRhdGlvbjtleHBvcnRzLlNUPWV4cG9ydHMuU1A9ZXhwb3J0cy51cmxPYmplY3RLZXlzPXZvaWQgMDt2YXIgX2Zvcm1hdFVybD1yZXF1aXJlKFwiLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybFwiKTsvKipcbiAqIFV0aWxzXG4gKi9mdW5jdGlvbiBleGVjT25jZShmbil7bGV0IHVzZWQ9ZmFsc2U7bGV0IHJlc3VsdDtyZXR1cm4oLi4uYXJncyk9PntpZighdXNlZCl7dXNlZD10cnVlO3Jlc3VsdD1mbiguLi5hcmdzKTt9cmV0dXJuIHJlc3VsdDt9O31mdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpe2NvbnN0e3Byb3RvY29sLGhvc3RuYW1lLHBvcnR9PXdpbmRvdy5sb2NhdGlvbjtyZXR1cm5gJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0Pyc6Jytwb3J0OicnfWA7fWZ1bmN0aW9uIGdldFVSTCgpe2NvbnN0e2hyZWZ9PXdpbmRvdy5sb2NhdGlvbjtjb25zdCBvcmlnaW49Z2V0TG9jYXRpb25PcmlnaW4oKTtyZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCk7fWZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKENvbXBvbmVudCl7cmV0dXJuIHR5cGVvZiBDb21wb25lbnQ9PT0nc3RyaW5nJz9Db21wb25lbnQ6Q29tcG9uZW50LmRpc3BsYXlOYW1lfHxDb21wb25lbnQubmFtZXx8J1Vua25vd24nO31mdW5jdGlvbiBpc1Jlc1NlbnQocmVzKXtyZXR1cm4gcmVzLmZpbmlzaGVkfHxyZXMuaGVhZGVyc1NlbnQ7fWFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHMoQXBwLGN0eCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3ZhciBfQXBwJHByb3RvdHlwZTtpZigoX0FwcCRwcm90b3R5cGU9QXBwLnByb3RvdHlwZSkhPW51bGwmJl9BcHAkcHJvdG90eXBlLmdldEluaXRpYWxQcm9wcyl7Y29uc3QgbWVzc2FnZT1gXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYDt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fX0vLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG5jb25zdCByZXM9Y3R4LnJlc3x8Y3R4LmN0eCYmY3R4LmN0eC5yZXM7aWYoIUFwcC5nZXRJbml0aWFsUHJvcHMpe2lmKGN0eC5jdHgmJmN0eC5Db21wb25lbnQpey8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbnJldHVybntwYWdlUHJvcHM6YXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LGN0eC5jdHgpfTt9cmV0dXJue307fWNvbnN0IHByb3BzPWF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KTtpZihyZXMmJmlzUmVzU2VudChyZXMpKXtyZXR1cm4gcHJvcHM7fWlmKCFwcm9wcyl7Y29uc3QgbWVzc2FnZT1gXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYDt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fWlmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZihPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoPT09MCYmIWN0eC5jdHgpe2NvbnNvbGUud2FybihgJHtnZXREaXNwbGF5TmFtZShBcHApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2ApO319cmV0dXJuIHByb3BzO31jb25zdCB1cmxPYmplY3RLZXlzPVsnYXV0aCcsJ2hhc2gnLCdob3N0JywnaG9zdG5hbWUnLCdocmVmJywncGF0aCcsJ3BhdGhuYW1lJywncG9ydCcsJ3Byb3RvY29sJywncXVlcnknLCdzZWFyY2gnLCdzbGFzaGVzJ107ZXhwb3J0cy51cmxPYmplY3RLZXlzPXVybE9iamVjdEtleXM7ZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe2lmKHVybCE9PW51bGwmJnR5cGVvZiB1cmw9PT0nb2JqZWN0Jyl7T2JqZWN0LmtleXModXJsKS5mb3JFYWNoKGtleT0+e2lmKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpPT09LTEpe2NvbnNvbGUud2FybihgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gKTt9fSk7fX1yZXR1cm4oMCxfZm9ybWF0VXJsLmZvcm1hdFVybCkodXJsKTt9Y29uc3QgU1A9dHlwZW9mIHBlcmZvcm1hbmNlIT09J3VuZGVmaW5lZCc7ZXhwb3J0cy5TUD1TUDtjb25zdCBTVD1TUCYmdHlwZW9mIHBlcmZvcm1hbmNlLm1hcms9PT0nZnVuY3Rpb24nJiZ0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZT09PSdmdW5jdGlvbic7ZXhwb3J0cy5TVD1TVDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWxzLmpzLm1hcCIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBfaW5zdGFncmFtKCkge1xyXG4gICBjb25zdCBpbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICAgIGJhc2VVUkw6IFwiaHR0cHM6Ly9ncmFwaC5pbnN0YWdyYW0uY29tL1wiLFxyXG4gICB9KTtcclxuXHJcbiAgIGxldCBfdG9rZW4gPVxyXG4gICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImluc3RhZ3JhbVRva2VuXCIpIHx8XHJcbiAgICAgIFwiSUdRVkpWWDFvMGRHNW9VV1pBdU5EVnVUMkZoYmtkbmJWazBjMlZ5YzBWQ1pBVEpvUWtGb1JtODNjbUZ3YjNaQTBhMjB3Tm01eWQwWkE0ZWt4QmRsaEpZWGRSY1dGNUxUZERiRFZqWDFoTU9VZG5NVmxYUVd0TlFrczNhWFpBNmVtMUJSbkJPYzFwamJWcE5VRVZFYWxkT05FNUplZ1pEWkRcIjtcclxuICAgY29uc3Qge1xyXG4gICAgICBkYXRhOiB7IGFjY2Vzc190b2tlbiB9LFxyXG4gICB9ID0gYXdhaXQgaW5zdGFuY2UuZ2V0KFxyXG4gICAgICBgL3JlZnJlc2hfYWNjZXNzX3Rva2VuP2dyYW50X3R5cGU9aWdfcmVmcmVzaF90b2tlbiZhY2Nlc3NfdG9rZW49JHtfdG9rZW59YFxyXG4gICApO1xyXG4gICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImluc3RhZ3JhbVRva2VuXCIsIGFjY2Vzc190b2tlbik7XHJcbiAgIGNvbnN0IHtkYXRhOiB7ZGF0YX19ID0gIGF3YWl0IGluc3RhbmNlLmdldChcclxuICAgICAgYC9tZS9tZWRpYT9maWVsZHM9bWVkaWFfdXJsLHRpbWVzdGFtcCxwZXJtYWxpbmssbWVkaWFfdHlwZSx0aHVtYm5haWxfdXJsLGNhcHRpb24mZWRnZXM9bWVkaWEmYWNjZXNzX3Rva2VuPSR7YWNjZXNzX3Rva2VufWBcclxuICAgKTtcclxuICAgcmV0dXJuIGRhdGE7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgcyBmcm9tIFwiLi9Gb290ZXIubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IGcgZnJvbSBcInNyYy9zdHlsZXMvTWFpbi5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyBMb2dvIH0gZnJvbSBcIkBjb21wb25lbnRzL1NWRy9IZWFkZXJMb2dvU1ZHXCI7XHJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcblxyXG5leHBvcnQgY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gICByZXR1cm4gKFxyXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17Y2xzeChzLmZvb3Rlcil9PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChnLndyYXBwZXIpfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3gocy5jb250YWluZXIpfT5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3gocy5ibG9jayl9PlxyXG4gICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17Y2xzeChzLm1lbnUpfT5cclxuICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17Y2xzeChzLmxpbmspfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj7QnNCw0LPQsNC30LjQvTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17Y2xzeChzLmxpbmspfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj7QlNC+0YHRgtCw0LLQutCwPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtjbHN4KHMubGluayl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPtCeINC90LDRgTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17Y2xzeChzLmxpbmspfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj7Qn9GA0L7QtNGD0LrRhtC40Y88L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2Nsc3gocy5saW5rKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+0KDQtdGG0LXQv9GC0Ys8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOlwiIGNsYXNzTmFtZT17Y2xzeChzLmNvbnRhY3QpfT5cclxuICAgICAgICAgICAgICAgICAgICAg0J3QsNC/0LjRgdCw0YLRjCDQvdCw0LxcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3gocy5ibG9jayl9PlxyXG4gICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17Y2xzeChzLm1lbnUpfT5cclxuICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17Y2xzeChzLmxpbmspfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj7QotC+0YfQutC4INC/0YDQvtC00LDQtjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17Y2xzeChzLmxpbmspfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj7QmtC+0L3RgtCw0LrRgtGLPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtjbHN4KHMubGluaywgcy5zb2NpYWwpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5JbnN0YWdyYW08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e2Nsc3gocy5saW5rLCBzLnNvY2lhbCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPkZhY2Vib29rPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3gocy5pbmZvKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KHMuYWRkcmVzcyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDQodC80L7Qu9C10L3RgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0JrQsNGA0LTRi9C80L7QstGB0LrQuNC5INGA0LDQudC+0L0sINGB0LXQu9C+INCa0LDQvNC10L3QutCwINCe0J7QnlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcItCa0YDQsNGB0L3QsNGPINCz0L7RgNC60LBcIiwg0J7Qk9Cg0J0gMTEzNjczMzAwODc2Mywg0JjQndCdIDY3MjIwNDEwMzlcclxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KHMuY29udGFjdHMpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInRlbDpcIiBjbGFzc05hbWU9e2Nsc3gocy5jb250YWN0KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDggKDgwMCkgMjUwLTU4LTI0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzpcIiBjbGFzc05hbWU9e2Nsc3gocy5jb250YWN0KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbGVzQGtvaWNvLnJ1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2FzYXAtYWcucnVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3gocy5hc2FwKX1cclxuICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNTEgMjFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIG9wYWNpdHk9XCIwLjU2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMC41Njk0OTYgMTguNDk2MlYxOS45NDM2SDBWMTYuMjQ2M0gxLjU5MjgxQzIuMDY1NDEgMTYuMjQ2MyAyLjQzNTE5IDE2LjM0OTYgMi43MDIxNCAxNi41NTYxQzIuOTcxMDcgMTYuNzYyNyAzLjEwNTUzIDE3LjAzNjEgMy4xMDU1MyAxNy4zNzYzQzMuMTA1NTMgMTcuNzM1MiAyLjk3NDA0IDE4LjAxMiAyLjcxMTA0IDE4LjIwNjdDMi40NTAwMiAxOC4zOTk3IDIuMDc1MyAxOC40OTYyIDEuNTg2ODggMTguNDk2MkgwLjU2OTQ5NlpNMC41Njk0OTYgMTguMDk3NUgxLjU5MjgxQzEuODk3MzMgMTguMDk3NSAyLjEzMDY3IDE4LjAzNjYgMi4yOTI4MiAxNy45MTQ3QzIuNDU0OTYgMTcuNzkxMSAyLjUzNjA0IDE3LjYxMzMgMi41MzYwNCAxNy4zODE0QzIuNTM2MDQgMTcuMTYxMyAyLjQ1NDk2IDE2Ljk4NTMgMi4yOTI4MiAxNi44NTMyQzIuMTMwNjcgMTYuNzIxMiAxLjkwODIxIDE2LjY1MjYgMS42MjU0NCAxNi42NDc1SDAuNTY5NDk2VjE4LjA5NzVaXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNGQUVFRTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTUuNjkyIDE5Ljk0MzZDNS42NjAzNiAxOS44ODk1IDUuNjM0NjUgMTkuNzkzIDUuNjE0ODggMTkuNjU0MUM1LjM1OTc5IDE5Ljg4MSA1LjA1NTI3IDE5Ljk5NDQgNC43MDEzMSAxOS45OTQ0QzQuMzg0OTIgMTkuOTk0NCA0LjEyNDg5IDE5LjkxODIgMy45MjEyMiAxOS43NjU5QzMuNzE5NTIgMTkuNjExOCAzLjYxODY3IDE5LjQxNzEgMy42MTg2NyAxOS4xODE4QzMuNjE4NjcgMTguODk1NyAzLjc0NTIzIDE4LjY3MzkgMy45OTgzNCAxOC41MTY1QzQuMjUzNDMgMTguMzU3NCA0LjYxMTM0IDE4LjI3NzggNS4wNzIwOCAxOC4yNzc4SDUuNjA1OThWMTguMDYyQzUuNjA1OTggMTcuODk3NyA1LjU0ODYzIDE3Ljc2NzQgNS40MzM5NCAxNy42NzA5QzUuMzE5MjUgMTcuNTcyNyA1LjE1MDE4IDE3LjUyMzYgNC45MjY3NCAxNy41MjM2QzQuNzMwOTcgMTcuNTIzNiA0LjU2Njg1IDE3LjU2NTkgNC40MzQzNiAxNy42NTA2QzQuMzAxODcgMTcuNzM1MiA0LjIzNTYzIDE3LjgzNzcgNC4yMzU2MyAxNy45NTc4SDMuNjgzOTNDMy42ODM5MyAxNy44MjA3IDMuNzQwMjkgMTcuNjg4NyAzLjg1MyAxNy41NjE3QzMuOTY3NjkgMTcuNDMzIDQuMTIxOTMgMTcuMzMxNSA0LjMxNTcxIDE3LjI1N0M0LjUxMTQ4IDE3LjE4MjUgNC43MjYwMyAxNy4xNDUzIDQuOTU5MzYgMTcuMTQ1M0M1LjMyOTE0IDE3LjE0NTMgNS42MTg4MyAxNy4yMjQ4IDUuODI4NDQgMTcuMzg0QzYuMDM4MDUgMTcuNTQxNCA2LjE0NjggMTcuNzU4OSA2LjE1NDcxIDE4LjAzNjZWMTkuMzAxMkM2LjE1NDcxIDE5LjU1MzQgNi4xOTIyOCAxOS43NTQgNi4yNjc0MyAxOS45MDNWMTkuOTQzNkg1LjY5MlpNNC43ODE0IDE5LjU4NTZDNC45NTM0MyAxOS41ODU2IDUuMTE2NTcgMTkuNTQ3NSA1LjI3MDgxIDE5LjQ3MTNDNS40MjUwNSAxOS4zOTUxIDUuNTM2NzcgMTkuMjk2MSA1LjYwNTk4IDE5LjE3NDJWMTguNjEwNUg1LjE3NTg5QzQuNTAzNTcgMTguNjEwNSA0LjE2NzQxIDE4Ljc3ODkgNC4xNjc0MSAxOS4xMTU4QzQuMTY3NDEgMTkuMjYzMSA0LjIyNDc1IDE5LjM3ODIgNC4zMzk0NCAxOS40NjExQzQuNDU0MTMgMTkuNTQ0MSA0LjYwMTQ1IDE5LjU4NTYgNC43ODE0IDE5LjU4NTZaXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNGQUVFRTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTguNzc5NzQgMTcuOTQ3N0M4Ljc3OTc0IDE3LjgxOSA4LjcyMjM5IDE3LjcxNzUgOC42MDc3IDE3LjY0M0M4LjQ5MzAxIDE3LjU2NjggOC4zMzU4IDE3LjUyODcgOC4xMzYwOSAxNy41Mjg3QzcuOTQyMyAxNy41Mjg3IDcuNzgwMTUgMTcuNTcxOSA3LjY0OTY0IDE3LjY1ODJDNy41MjExMSAxNy43NDQ1IDcuNDU2ODQgMTcuODQ2MSA3LjQ1Njg0IDE3Ljk2MjlINi45MTEwOEM2LjkxMTA4IDE3LjcyNDIgNy4wMjc3NCAxNy41Mjg3IDcuMjYxMDggMTcuMzc2M0M3LjQ5NDQxIDE3LjIyNCA3Ljc4NjA4IDE3LjE0NzggOC4xMzYwOSAxNy4xNDc4QzguNTExOCAxNy4xNDc4IDguODA0NDUgMTcuMjE3MiA5LjAxNDA2IDE3LjM1NkM5LjIyMzY3IDE3LjQ5MzEgOS4zMjg0NyAxNy42ODk1IDkuMzI4NDcgMTcuOTQ1MUM5LjMyODQ3IDE4LjA2ODcgOS4yODQ5NyAxOC4xODIyIDkuMTk3OTYgMTguMjg1NEM5LjExMDk1IDE4LjM4ODcgOC45ODczNiAxOC40NzA4IDguODI3MTkgMTguNTMxN0M5LjIwMDkyIDE4LjY0MDEgOS4zODc3OSAxOC44NTM0IDkuMzg3NzkgMTkuMTcxN0M5LjM4Nzc5IDE5LjQyMzkgOS4yNzQwOSAxOS42MjM3IDkuMDQ2NjkgMTkuNzcwOUM4LjgxOTI4IDE5LjkxODIgOC41MTU3NSAxOS45OTE5IDguMTM2MDkgMTkuOTkxOUM3Ljc2NjMxIDE5Ljk5MTkgNy40NjA4IDE5LjkxNDggNy4yMTk1NSAxOS43NjA4QzYuOTgwMjkgMTkuNjA1IDYuODYwNjUgMTkuMzk1MSA2Ljg2MDY1IDE5LjEzMUg3LjQwNjQyQzcuNDA2NDIgMTkuMjY0OCA3LjQ3NTYzIDE5LjM3OTkgNy42MTQwNSAxOS40NzY0QzcuNzU0NDQgMTkuNTcxMiA3LjkyODQ2IDE5LjYxODYgOC4xMzYwOSAxOS42MTg2QzguMzQ1NjkgMTkuNjE4NiA4LjUxNDc2IDE5LjU3NzEgOC42NDMyOSAxOS40OTQyQzguNzcxODMgMTkuNDExMiA4LjgzNjA5IDE5LjMwMzcgOC44MzYwOSAxOS4xNzE3QzguODM2MDkgMTkuMDE3NiA4Ljc4MTcxIDE4LjkwNzYgOC42NzI5NSAxOC44NDE1QzguNTY2MTcgMTguNzczOCA4LjM5OTA4IDE4Ljc0IDguMTcxNjggMTguNzRINy42MjI5NVYxOC4zNDM4SDguMjE5MTRDOC41OTI4NyAxOC4zMzU0IDguNzc5NzQgMTguMjAzMyA4Ljc3OTc0IDE3Ljk0NzdaXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNGQUVFRTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTEyLjgxMDcgMTguNjAwM0MxMi44MTA3IDE5LjAxODUgMTIuNjk5IDE5LjM1NTMgMTIuNDc1NSAxOS42MTFDMTIuMjUyMSAxOS44NjY2IDExLjk0OTUgMTkuOTk0NCAxMS41Njc5IDE5Ljk5NDRDMTEuMTc4MyAxOS45OTQ0IDEwLjg3MTggMTkuODg4NiAxMC42NDg0IDE5LjY3N1YyMUgxMC4wOTk3VjE3LjE5NkgxMC42MDA5TDEwLjYyNzYgMTcuNTAwOEMxMC44NTExIDE3LjI2MzggMTEuMTYxNSAxNy4xNDUzIDExLjU1OSAxNy4xNDUzQzExLjk0NDYgMTcuMTQ1MyAxMi4yNDkxIDE3LjI2OTcgMTIuNDcyNiAxNy41MTg1QzEyLjY5OCAxNy43Njc0IDEyLjgxMDcgMTguMTEzNiAxMi44MTA3IDE4LjU1NzFWMTguNjAwM1pNMTIuMjYyIDE4LjU0N0MxMi4yNjIgMTguMjM3MiAxMi4xODQ4IDE3Ljk5MjYgMTIuMDMwNiAxNy44MTMxQzExLjg3NjQgMTcuNjMzNyAxMS42NjQ4IDE3LjU0MzkgMTEuMzk1OSAxNy41NDM5QzExLjA2MzcgMTcuNTQzOSAxMC44MTQ1IDE3LjY3MDEgMTAuNjQ4NCAxNy45MjIzVjE5LjIzNTFDMTAuODEyNSAxOS40ODU3IDExLjA2MzcgMTkuNjExIDExLjQwMTggMTkuNjExQzExLjY2NDggMTkuNjExIDExLjg3MzQgMTkuNTIyMSAxMi4wMjc2IDE5LjM0NDNDMTIuMTgzOSAxOS4xNjQ5IDEyLjI2MiAxOC44OTkxIDEyLjI2MiAxOC41NDdaXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNGQUVFRTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTE1LjQ5MjEgMTkuOTQzNkMxNS40NjA0IDE5Ljg4OTUgMTUuNDM0NyAxOS43OTMgMTUuNDE1IDE5LjY1NDFDMTUuMTU5OSAxOS44ODEgMTQuODU1NCAxOS45OTQ0IDE0LjUwMTQgMTkuOTk0NEMxNC4xODUgMTkuOTk0NCAxMy45MjUgMTkuOTE4MiAxMy43MjEzIDE5Ljc2NTlDMTMuNTE5NiAxOS42MTE4IDEzLjQxODggMTkuNDE3MSAxMy40MTg4IDE5LjE4MThDMTMuNDE4OCAxOC44OTU3IDEzLjU0NTMgMTguNjczOSAxMy43OTg0IDE4LjUxNjVDMTQuMDUzNSAxOC4zNTc0IDE0LjQxMTQgMTguMjc3OCAxNC44NzIyIDE4LjI3NzhIMTUuNDA2MVYxOC4wNjJDMTUuNDA2MSAxNy44OTc3IDE1LjM0ODcgMTcuNzY3NCAxNS4yMzQgMTcuNjcwOUMxNS4xMTkzIDE3LjU3MjcgMTQuOTUwMyAxNy41MjM2IDE0LjcyNjggMTcuNTIzNkMxNC41MzExIDE3LjUyMzYgMTQuMzY2OSAxNy41NjU5IDE0LjIzNDQgMTcuNjUwNkMxNC4xMDIgMTcuNzM1MiAxNC4wMzU3IDE3LjgzNzcgMTQuMDM1NyAxNy45NTc4SDEzLjQ4NEMxMy40ODQgMTcuODIwNyAxMy41NDA0IDE3LjY4ODcgMTMuNjUzMSAxNy41NjE3QzEzLjc2NzggMTcuNDMzIDEzLjkyMiAxNy4zMzE1IDE0LjExNTggMTcuMjU3QzE0LjMxMTYgMTcuMTgyNSAxNC41MjYxIDE3LjE0NTMgMTQuNzU5NCAxNy4xNDUzQzE1LjEyOTIgMTcuMTQ1MyAxNS40MTg5IDE3LjIyNDggMTUuNjI4NSAxNy4zODRDMTUuODM4MSAxNy41NDE0IDE1Ljk0NjkgMTcuNzU4OSAxNS45NTQ4IDE4LjAzNjZWMTkuMzAxMkMxNS45NTQ4IDE5LjU1MzQgMTUuOTkyNCAxOS43NTQgMTYuMDY3NSAxOS45MDNWMTkuOTQzNkgxNS40OTIxWk0xNC41ODE1IDE5LjU4NTZDMTQuNzUzNSAxOS41ODU2IDE0LjkxNjcgMTkuNTQ3NSAxNS4wNzA5IDE5LjQ3MTNDMTUuMjI1MSAxOS4zOTUxIDE1LjMzNjkgMTkuMjk2MSAxNS40MDYxIDE5LjE3NDJWMTguNjEwNUgxNC45NzZDMTQuMzAzNyAxOC42MTA1IDEzLjk2NzUgMTguNzc4OSAxMy45Njc1IDE5LjExNThDMTMuOTY3NSAxOS4yNjMxIDE0LjAyNDggMTkuMzc4MiAxNC4xMzk1IDE5LjQ2MTFDMTQuMjU0MiAxOS41NDQxIDE0LjQwMTUgMTkuNTg1NiAxNC41ODE1IDE5LjU4NTZaXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNGQUVFRTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTE4LjIyMzkgMTcuMzUzNUMxOC42MjczIDE3LjM1MzUgMTguOTQ5NiAxNy40Njk0IDE5LjE5MDggMTcuNzAxNEMxOS40MzQxIDE3LjkzMTYgMTkuNTU1NyAxOC4yMzU1IDE5LjU1NTcgMTguNjEzVjE4LjY1NjJDMTkuNTU1NyAxOC45MTUyIDE5LjQ5NzMgMTkuMTQ3MSAxOS4zODA3IDE5LjM1MkMxOS4yNjQgMTkuNTU1MSAxOS4wOTU5IDE5LjcxMzQgMTguODc2NCAxOS44MjY4QzE4LjY1ODkgMTkuOTM4NSAxOC40MDc4IDE5Ljk5NDQgMTguMTIzIDE5Ljk5NDRDMTcuNjkyIDE5Ljk5NDQgMTcuMzQ0OSAxOS44NzE3IDE3LjA4MTkgMTkuNjI2MkMxNi44MTg5IDE5LjM3OSAxNi42ODc0IDE5LjA0ODEgMTYuNjg3NCAxOC42MzMzVjE4LjQwNDhDMTYuNjg3NCAxNy44Mjc1IDE2LjgxMiAxNy4zNjg3IDE3LjA2MTIgMTcuMDI4NEMxNy4zMTIzIDE2LjY4ODIgMTcuNjgyMSAxNi40ODA4IDE4LjE3MDUgMTYuNDA2M0MxOC40NDczIDE2LjM2NCAxOC42MzQyIDE2LjMxMjMgMTguNzMxMSAxNi4yNTE0QzE4LjgyOCAxNi4xOTA1IDE4Ljg3NjQgMTYuMTA2NyAxOC44NzY0IDE2SDE5LjMyNzNDMTkuMzI3MyAxNi4yMTE2IDE5LjI3MDkgMTYuMzc2NyAxOS4xNTgyIDE2LjQ5NTJDMTkuMDQ3NSAxNi42MTM3IDE4Ljg2OTUgMTYuNjk3NSAxOC42MjQzIDE2Ljc0NjZMMTguMjE1IDE2LjgyNTNDMTcuODg4NyAxNi44OTEzIDE3LjY0MzUgMTcuMDAzIDE3LjQ3OTQgMTcuMTYwNUMxNy4zMTcyIDE3LjMxNjIgMTcuMjExNCAxNy41MjQ1IDE3LjE2MiAxNy43ODUyQzE3LjQ1MjcgMTcuNDk3NCAxNy44MDY2IDE3LjM1MzUgMTguMjIzOSAxNy4zNTM1Wk0xOC4xMTcxIDE3LjczOTVDMTcuODQ4MiAxNy43Mzk1IDE3LjYzNDYgMTcuODE3MyAxNy40NzY0IDE3Ljk3MzFDMTcuMzE4MiAxOC4xMjcxIDE3LjIzOTEgMTguMzQxMyAxNy4yMzkxIDE4LjYxNTVWMTguNjU2MkMxNy4yMzkxIDE4Ljk1MDcgMTcuMzE4MiAxOS4xODQ0IDE3LjQ3NjQgMTkuMzU3QzE3LjYzNjYgMTkuNTI4IDE3Ljg1MjEgMTkuNjEzNSAxOC4xMjMgMTkuNjEzNUMxOC4zOTU5IDE5LjYxMzUgMTguNjExNSAxOS41MjcyIDE4Ljc2OTYgMTkuMzU0NUMxOC45Mjc4IDE5LjE4MTggMTkuMDA2OSAxOC45Mjk2IDE5LjAwNjkgMTguNTk3OEMxOS4wMDY5IDE4LjMzODggMTguOTI2OSAxOC4xMzE0IDE4Ljc2NjcgMTcuOTc1NkMxOC42MDg1IDE3LjgxODIgMTguMzkyIDE3LjczOTUgMTguMTE3MSAxNy43Mzk1WlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjRkFFRUUyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0yMC4wMjczIDE4LjU0NDRDMjAuMDI3MyAxOC4yNzUzIDIwLjA4ODYgMTguMDMzMiAyMC4yMTEyIDE3LjgxODJDMjAuMzM1OCAxNy42MDMyIDIwLjUwNzggMTcuNDM3MyAyMC43MjczIDE3LjMyMDVDMjAuOTQ4OCAxNy4yMDM3IDIxLjIwMDkgMTcuMTQ1MyAyMS40ODM3IDE3LjE0NTNDMjEuOTIwNyAxNy4xNDUzIDIyLjI3MzYgMTcuMjc0OCAyMi41NDI2IDE3LjUzMzhDMjIuODEzNSAxNy43OTI4IDIyLjk0ODkgMTguMTM3MyAyMi45NDg5IDE4LjU2NzNWMTguNjAwM0MyMi45NDg5IDE4Ljg2NzggMjIuODg4NiAxOS4xMDgyIDIyLjc2OCAxOS4zMjE1QzIyLjY0OTMgMTkuNTMzMSAyMi40NzgzIDE5LjY5ODIgMjIuMjU0OCAxOS44MTY3QzIyLjAzMzQgMTkuOTM1MiAyMS43NzgzIDE5Ljk5NDQgMjEuNDg5NiAxOS45OTQ0QzIxLjA1NDYgMTkuOTk0NCAyMC43MDE2IDE5Ljg2NDkgMjAuNDMwNyAxOS42MDU5QzIwLjE2MTggMTkuMzQ2OSAyMC4wMjczIDE5LjAwNDEgMjAuMDI3MyAxOC41Nzc1VjE4LjU0NDRaTTIwLjU3OSAxOC42MDAzQzIwLjU3OSAxOC45MDUgMjAuNjYxMSAxOS4xNDk3IDIwLjgyNTIgMTkuMzM0MkMyMC45OTEzIDE5LjUxODcgMjEuMjEyNyAxOS42MTEgMjEuNDg5NiAxOS42MTFDMjEuNzY4NCAxOS42MTEgMjEuOTg5OSAxOS41MTc5IDIyLjE1NCAxOS4zMzE2QzIyLjMxODEgMTkuMTQzNyAyMi40MDAyIDE4Ljg4MTMgMjIuNDAwMiAxOC41NDQ0QzIyLjQwMDIgMTguMjQzMSAyMi4zMTYxIDE3Ljk5OTMgMjIuMTQ4MSAxNy44MTMxQzIxLjk4MiAxNy42MjUyIDIxLjc2MDUgMTcuNTMxMiAyMS40ODM3IDE3LjUzMTJDMjEuMjEyNyAxNy41MzEyIDIwLjk5NDIgMTcuNjIzNSAyMC44MjgxIDE3LjgwOEMyMC42NjIgMTcuOTkyNiAyMC41NzkgMTguMjU2NiAyMC41NzkgMTguNjAwM1pcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI0ZBRUVFMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMjUuOTU2NiAxNy41NzY5SDI0Ljg3OTlWMTkuOTQzNkgyNC4zMzExVjE3LjU3NjlIMjMuMjc1MlYxNy4xOTZIMjUuOTU2NlYxNy41NzY5WlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjRkFFRUUyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0yNy40OTAxIDE4Ljc3M0gyNy4wODk2VjE5Ljk0MzZIMjYuNTM3OVYxNy4xOTZIMjcuMDg5NlYxOC4zNTkxSDI3LjQ0ODVMMjguNTI4MiAxNy4xOTZIMjkuMTkyNkwyNy45MjMxIDE4LjUxNjVMMjkuMjk5NCAxOS45NDM2SDI4LjYwMjRMMjcuNDkwMSAxOC43NzNaXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNGQUVFRTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTMxLjc1MjQgMTkuOTQzNkMzMS43MjA3IDE5Ljg4OTUgMzEuNjk1IDE5Ljc5MyAzMS42NzUzIDE5LjY1NDFDMzEuNDIwMiAxOS44ODEgMzEuMTE1NyAxOS45OTQ0IDMwLjc2MTcgMTkuOTk0NEMzMC40NDUzIDE5Ljk5NDQgMzAuMTg1MyAxOS45MTgyIDI5Ljk4MTYgMTkuNzY1OUMyOS43Nzk5IDE5LjYxMTggMjkuNjc5MSAxOS40MTcxIDI5LjY3OTEgMTkuMTgxOEMyOS42NzkxIDE4Ljg5NTcgMjkuODA1NiAxOC42NzM5IDMwLjA1ODcgMTguNTE2NUMzMC4zMTM4IDE4LjM1NzQgMzAuNjcxNyAxOC4yNzc4IDMxLjEzMjUgMTguMjc3OEgzMS42NjY0VjE4LjA2MkMzMS42NjY0IDE3Ljg5NzcgMzEuNjA5IDE3Ljc2NzQgMzEuNDk0MyAxNy42NzA5QzMxLjM3OTYgMTcuNTcyNyAzMS4yMTA2IDE3LjUyMzYgMzAuOTg3MSAxNy41MjM2QzMwLjc5MTQgMTcuNTIzNiAzMC42MjcyIDE3LjU2NTkgMzAuNDk0NyAxNy42NTA2QzMwLjM2MjMgMTcuNzM1MiAzMC4yOTYgMTcuODM3NyAzMC4yOTYgMTcuOTU3OEgyOS43NDQzQzI5Ljc0NDMgMTcuODIwNyAyOS44MDA3IDE3LjY4ODcgMjkuOTEzNCAxNy41NjE3QzMwLjAyODEgMTcuNDMzIDMwLjE4MjMgMTcuMzMxNSAzMC4zNzYxIDE3LjI1N0MzMC41NzE5IDE3LjE4MjUgMzAuNzg2NCAxNy4xNDUzIDMxLjAxOTggMTcuMTQ1M0MzMS4zODk1IDE3LjE0NTMgMzEuNjc5MiAxNy4yMjQ4IDMxLjg4ODggMTcuMzg0QzMyLjA5ODQgMTcuNTQxNCAzMi4yMDcyIDE3Ljc1ODkgMzIuMjE1MSAxOC4wMzY2VjE5LjMwMTJDMzIuMjE1MSAxOS41NTM0IDMyLjI1MjcgMTkuNzU0IDMyLjMyNzggMTkuOTAzVjE5Ljk0MzZIMzEuNzUyNFpNMzAuODQxOCAxOS41ODU2QzMxLjAxMzggMTkuNTg1NiAzMS4xNzcgMTkuNTQ3NSAzMS4zMzEyIDE5LjQ3MTNDMzEuNDg1NCAxOS4zOTUxIDMxLjU5NzIgMTkuMjk2MSAzMS42NjY0IDE5LjE3NDJWMTguNjEwNUgzMS4yMzYzQzMwLjU2NCAxOC42MTA1IDMwLjIyNzggMTguNzc4OSAzMC4yMjc4IDE5LjExNThDMzAuMjI3OCAxOS4yNjMxIDMwLjI4NTEgMTkuMzc4MiAzMC4zOTk4IDE5LjQ2MTFDMzAuNTE0NSAxOS41NDQxIDMwLjY2MTggMTkuNTg1NiAzMC44NDE4IDE5LjU4NTZaXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNGQUVFRTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTM1Ljg2OTQgMTkuNjExQzM2LjA2NTEgMTkuNjExIDM2LjIzNjIgMTkuNTYwMiAzNi4zODI1IDE5LjQ1ODZDMzYuNTI4OCAxOS4zNTcgMzYuNjA5OSAxOS4yMzAxIDM2LjYyNTcgMTkuMDc3N0gzNy4xNDQ4QzM3LjEzNDkgMTkuMjM1MSAzNy4wNzE2IDE5LjM4NSAzNi45NTUgMTkuNTI3MkMzNi44MzgzIDE5LjY2OTQgMzYuNjgyMSAxOS43ODI4IDM2LjQ4NjMgMTkuODY3NEMzNi4yOTI1IDE5Ljk1MjEgMzYuMDg2OSAxOS45OTQ0IDM1Ljg2OTQgMTkuOTk0NEMzNS40MzI0IDE5Ljk5NDQgMzUuMDg0MyAxOS44NyAzNC44MjUzIDE5LjYyMTFDMzQuNTY4MiAxOS4zNzA2IDM0LjQzOTcgMTkuMDI4NiAzNC40Mzk3IDE4LjU5NTJWMTguNTE2NUMzNC40Mzk3IDE4LjI0OSAzNC40OTcgMTguMDExMiAzNC42MTE3IDE3LjgwMjlDMzQuNzI2NCAxNy41OTQ3IDM0Ljg5MDUgMTcuNDMzIDM1LjEwNDEgMTcuMzE3OUMzNS4zMTk2IDE3LjIwMjggMzUuNTczNyAxNy4xNDUzIDM1Ljg2NjQgMTcuMTQ1M0MzNi4yMjYzIDE3LjE0NTMgMzYuNTI0OSAxNy4yMzc1IDM2Ljc2MjIgMTcuNDIyQzM3LjAwMTQgMTcuNjA2NiAzNy4xMjkgMTcuODQ2MSAzNy4xNDQ4IDE4LjE0MDdIMzYuNjI1N0MzNi42MDk5IDE3Ljk2MjkgMzYuNTMwOCAxNy44MTczIDM2LjM4ODQgMTcuNzAzOUMzNi4yNDggMTcuNTg4OCAzNi4wNzQgMTcuNTMxMiAzNS44NjY0IDE3LjUzMTJDMzUuNTg3NiAxNy41MzEyIDM1LjM3MTEgMTcuNjE3NiAzNS4yMTY4IDE3Ljc5MDJDMzUuMDY0NiAxNy45NjEyIDM0Ljk4ODQgMTguMjA5MiAzNC45ODg0IDE4LjUzNDNWMTguNjIzMkMzNC45ODg0IDE4LjkzOTcgMzUuMDY0NiAxOS4xODM1IDM1LjIxNjggMTkuMzU0NUMzNS4zNjkxIDE5LjUyNTUgMzUuNTg2NiAxOS42MTEgMzUuODY5NCAxOS42MTFaXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNGQUVFRTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTM5Ljc0MzEgMTkuOTQzNkMzOS43MTE1IDE5Ljg4OTUgMzkuNjg1OCAxOS43OTMgMzkuNjY2IDE5LjY1NDFDMzkuNDEwOSAxOS44ODEgMzkuMTA2NCAxOS45OTQ0IDM4Ljc1MjQgMTkuOTk0NEMzOC40MzYxIDE5Ljk5NDQgMzguMTc2IDE5LjkxODIgMzcuOTcyNCAxOS43NjU5QzM3Ljc3MDcgMTkuNjExOCAzNy42Njk4IDE5LjQxNzEgMzcuNjY5OCAxOS4xODE4QzM3LjY2OTggMTguODk1NyAzNy43OTY0IDE4LjY3MzkgMzguMDQ5NSAxOC41MTY1QzM4LjMwNDYgMTguMzU3NCAzOC42NjI1IDE4LjI3NzggMzkuMTIzMiAxOC4yNzc4SDM5LjY1NzFWMTguMDYyQzM5LjY1NzEgMTcuODk3NyAzOS41OTk4IDE3Ljc2NzQgMzkuNDg1MSAxNy42NzA5QzM5LjM3MDQgMTcuNTcyNyAzOS4yMDEzIDE3LjUyMzYgMzguOTc3OSAxNy41MjM2QzM4Ljc4MjEgMTcuNTIzNiAzOC42MTggMTcuNTY1OSAzOC40ODU1IDE3LjY1MDZDMzguMzUzIDE3LjczNTIgMzguMjg2OCAxNy44Mzc3IDM4LjI4NjggMTcuOTU3OEgzNy43MzUxQzM3LjczNTEgMTcuODIwNyAzNy43OTE0IDE3LjY4ODcgMzcuOTA0MSAxNy41NjE3QzM4LjAxODggMTcuNDMzIDM4LjE3MzEgMTcuMzMxNSAzOC4zNjY4IDE3LjI1N0MzOC41NjI2IDE3LjE4MjUgMzguNzc3MiAxNy4xNDUzIDM5LjAxMDUgMTcuMTQ1M0MzOS4zODAzIDE3LjE0NTMgMzkuNjcgMTcuMjI0OCAzOS44Nzk2IDE3LjM4NEM0MC4wODkyIDE3LjU0MTQgNDAuMTk3OSAxNy43NTg5IDQwLjIwNTggMTguMDM2NlYxOS4zMDEyQzQwLjIwNTggMTkuNTUzNCA0MC4yNDM0IDE5Ljc1NCA0MC4zMTg2IDE5LjkwM1YxOS45NDM2SDM5Ljc0MzFaTTM4LjgzMjUgMTkuNTg1NkMzOS4wMDQ2IDE5LjU4NTYgMzkuMTY3NyAxOS41NDc1IDM5LjMyMTkgMTkuNDcxM0MzOS40NzYyIDE5LjM5NTEgMzkuNTg3OSAxOS4yOTYxIDM5LjY1NzEgMTkuMTc0MlYxOC42MTA1SDM5LjIyN0MzOC41NTQ3IDE4LjYxMDUgMzguMjE4NSAxOC43Nzg5IDM4LjIxODUgMTkuMTE1OEMzOC4yMTg1IDE5LjI2MzEgMzguMjc1OSAxOS4zNzgyIDM4LjM5MDYgMTkuNDYxMUMzOC41MDUzIDE5LjU0NDEgMzguNjUyNiAxOS41ODU2IDM4LjgzMjUgMTkuNTg1NlpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI0ZBRUVFMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNNDMuMTQyMyAxNy4xOTZINDMuNjkxVjE5Ljk0MzZINDMuMTQyM1YxNy45NDAxTDQxLjY2MjIgMTkuOTQzNkg0MS4xMTM1VjE3LjE5Nkg0MS42NjIyVjE5LjIwMjFMNDMuMTQyMyAxNy4xOTZaTTQzLjI5MDYgMTYuMTk1NUM0My4yOTA2IDE2LjQwMDQgNDMuMjA4NiAxNi41NjU0IDQzLjA0NDQgMTYuNjkwN0M0Mi44ODIzIDE2LjgxNDMgNDIuNjY4NyAxNi44NzYxIDQyLjQwMzcgMTYuODc2MUM0Mi4xMzg4IDE2Ljg3NjEgNDEuOTI0MiAxNi44MTM0IDQxLjc2MDEgMTYuNjg4MkM0MS41OTYgMTYuNTYyOSA0MS41MTM5IDE2LjM5ODcgNDEuNTEzOSAxNi4xOTU1SDQxLjk2MThDNDEuOTYxOCAxNi4zMTQgNDEuOTk5NCAxNi40MDcxIDQyLjA3NDUgMTYuNDc0OUM0Mi4xNDk3IDE2LjU0MDkgNDIuMjU5NCAxNi41NzM5IDQyLjQwMzcgMTYuNTczOUM0Mi41NDIyIDE2LjU3MzkgNDIuNjQ5OSAxNi41NDA5IDQyLjcyNzEgMTYuNDc0OUM0Mi44MDYyIDE2LjQwODggNDIuODQ1NyAxNi4zMTU3IDQyLjg0NTcgMTYuMTk1NUg0My4yOTA2WlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjRkFFRUUyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk00Ni45NTY4IDE3LjU3NjlINDUuODgwMVYxOS45NDM2SDQ1LjMzMTNWMTcuNTc2OUg0NC4yNzU0VjE3LjE5Nkg0Ni45NTY4VjE3LjU3NjlaXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNGQUVFRTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTQ5LjQyNDYgMTkuOTQzNkM0OS4zOTI5IDE5Ljg4OTUgNDkuMzY3MiAxOS43OTMgNDkuMzQ3NSAxOS42NTQxQzQ5LjA5MjQgMTkuODgxIDQ4Ljc4NzggMTkuOTk0NCA0OC40MzM5IDE5Ljk5NDRDNDguMTE3NSAxOS45OTQ0IDQ3Ljg1NzUgMTkuOTE4MiA0Ny42NTM4IDE5Ljc2NTlDNDcuNDUyMSAxOS42MTE4IDQ3LjM1MTIgMTkuNDE3MSA0Ny4zNTEyIDE5LjE4MThDNDcuMzUxMiAxOC44OTU3IDQ3LjQ3NzggMTguNjczOSA0Ny43MzA5IDE4LjUxNjVDNDcuOTg2IDE4LjM1NzQgNDguMzQzOSAxOC4yNzc4IDQ4LjgwNDYgMTguMjc3OEg0OS4zMzg2VjE4LjA2MkM0OS4zMzg2IDE3Ljg5NzcgNDkuMjgxMiAxNy43Njc0IDQ5LjE2NjUgMTcuNjcwOUM0OS4wNTE4IDE3LjU3MjcgNDguODgyOCAxNy41MjM2IDQ4LjY1OTMgMTcuNTIzNkM0OC40NjM1IDE3LjUyMzYgNDguMjk5NCAxNy41NjU5IDQ4LjE2NjkgMTcuNjUwNkM0OC4wMzQ0IDE3LjczNTIgNDcuOTY4MiAxNy44Mzc3IDQ3Ljk2ODIgMTcuOTU3OEg0Ny40MTY1QzQ3LjQxNjUgMTcuODIwNyA0Ny40NzI5IDE3LjY4ODcgNDcuNTg1NiAxNy41NjE3QzQ3LjcwMDMgMTcuNDMzIDQ3Ljg1NDUgMTcuMzMxNSA0OC4wNDgzIDE3LjI1N0M0OC4yNDQxIDE3LjE4MjUgNDguNDU4NiAxNy4xNDUzIDQ4LjY5MTkgMTcuMTQ1M0M0OS4wNjE3IDE3LjE0NTMgNDkuMzUxNCAxNy4yMjQ4IDQ5LjU2MSAxNy4zODRDNDkuNzcwNiAxNy41NDE0IDQ5Ljg3OTQgMTcuNzU4OSA0OS44ODczIDE4LjAzNjZWMTkuMzAxMkM0OS44ODczIDE5LjU1MzQgNDkuOTI0OSAxOS43NTQgNTAgMTkuOTAzVjE5Ljk0MzZINDkuNDI0NlpNNDguNTE0IDE5LjU4NTZDNDguNjg2IDE5LjU4NTYgNDguODQ5MSAxOS41NDc1IDQ5LjAwMzQgMTkuNDcxM0M0OS4xNTc2IDE5LjM5NTEgNDkuMjY5MyAxOS4yOTYxIDQ5LjMzODYgMTkuMTc0MlYxOC42MTA1SDQ4LjkwODVDNDguMjM2MSAxOC42MTA1IDQ3LjkgMTguNzc4OSA0Ny45IDE5LjExNThDNDcuOSAxOS4yNjMxIDQ3Ljk1NzMgMTkuMzc4MiA0OC4wNzIgMTkuNDYxMUM0OC4xODY3IDE5LjU0NDEgNDguMzM0IDE5LjU4NTYgNDguNTE0IDE5LjU4NTZaXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNGQUVFRTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk9XCIwLjU2XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk01MC43NDYzIDEuODU2OTRDNTAuNjE5NCAxLjQ3MDYyIDUwLjM2NTcgMS4xNzAxNCA1MC4wNjk3IDAuOTEyNTkzQzQ5LjczMTMgMC42NTUwNDMgNDkuMzUwOCAwLjQ0MDQxNiA0OC45NzAyIDAuMzExNjQxQzQ4LjQ2MjcgMC4xODI4NjYgNDcuOTU1MiAwLjEzOTk0IDQ3LjQ0NzggMC4xMzk5NEgzOC45OTAxVjguNTEwMzRMMzMuNTM0OCAwLjEzOTk0SDMxLjcxNjRMMjYuMjYxMiA4LjUxMDM0QzI2LjI2MTIgOC4zODE1NyAyNi4zMDM1IDguMjUyNzkgMjYuMzAzNSA4LjA4MTA5VjYuODM2MjZDMjYuMzAzNSA2LjQ0OTkzIDI2LjI2MTIgNi4wNjM2MSAyNi4xMzQzIDUuNzIwMjFDMjYuMDA3NSA1LjMzMzg4IDI1Ljc1MzcgNS4wMzM0MSAyNS40NTc3IDQuNzc1ODZDMjUuMTE5NCA0LjUxODMgMjQuNzM4OCA0LjMwMzY4IDI0LjM1ODIgNC4xNzQ5QzIzLjg1MDcgNC4wNDYxMyAyMy4zNDMzIDQuMDAzMiAyMi44MzU4IDQuMDAzMkgxNy4xNjkyQzE2LjM2NTcgNC4wMDMyIDE2LjM2NTcgMy42NTk4IDE2LjM2NTcgMy40ODgxVjIuODg3MTVDMTYuMzY1NyAyLjcxNTQ1IDE2LjM2NTcgMi4zNzIwNSAxNy4xNjkyIDIuMzcyMDVIMjUuODgwNlYwLjAxMTE2NjNIMTcuMTY5MkMxNi42NjE3IC0wLjAzMTc1ODggMTYuMTExOSAwLjA1NDA4ODggMTUuNjQ2OCAwLjE4Mjg2NEMxNS4yMjM5IDAuMjY4NzE0IDE0Ljg0MzMgMC40ODMzNDEgMTQuNTQ3MyAwLjc4MzgxN0MxNC4yNTEyIDEuMDQxMzcgMTMuOTk3NSAxLjM0MTg1IDEzLjg3MDYgMS43MjgxN0MxMy43NDM4IDIuMDcxNTcgMTMuNzAxNSAyLjQ1NzkgMTMuNzAxNSAyLjg0NDIyVjMuNDQ1MThDMTMuNzAxNSAzLjgzMTUgMTMuNzQzOCA0LjIxNzgzIDEzLjg3MDYgNC41NjEyM0MxMy45OTc1IDQuOTQ3NTYgMTQuMjUxMiA1LjI0ODAzIDE0LjU0NzMgNS41MDU1OEMxNC44ODU2IDUuNzYzMTMgMTUuMjY2MiA1Ljk3Nzc2IDE1LjY0NjggNi4xMDY1M0MxNi4xNTQyIDYuMjM1MzEgMTYuNjYxNyA2LjI3ODIzIDE3LjE2OTIgNi4yNzgyM0gyMi45MjA0QzIzLjcyMzkgNi4yNzgyMyAyMy43MjM5IDYuNjIxNjMgMjMuNzIzOSA2Ljc5MzMzVjguMDM4MTdDMjMuNzIzOSA4LjIwOTg3IDIzLjcyMzkgOC41NTMyNyAyMi45MjA0IDguNTUzMjdIMTQuNDYyN0w4Ljk2NTE4IDAuMDk3MDE1M0g3LjE0Njc3TDAgMTFIMy4wODcwN0w3LjkwNzk3IDMuMzU5MzJMMTIuNzI4OSAxMUgyNy43ODM2TDMyLjY4OTEgMy4zNTkzMkwzNy41MSAxMUg0MS43ODExVjcuMzA4NDRINDcuNTMyM0M0OC4wMzk4IDcuMzUxMzYgNDguNTg5NiA3LjI2NTUxIDQ5LjA1NDcgNy4xMzY3NEM0OS40Nzc2IDcuMDUwODkgNDkuODU4MiA2LjgzNjI2IDUwLjE1NDIgNi41MzU3OEM1MC40NTAzIDYuMjc4MjMgNTAuNzA0IDUuOTc3NzYgNTAuODMwOSA1LjU5MTQzQzUwLjk1NzcgNS4yNDgwMyA1MSA0Ljg2MTcgNTEgNC40NzUzOFYzLjAxNTkzQzUxIDIuNjI5NiA1MC44NzMxIDIuMjQzMjcgNTAuNzQ2MyAxLjg1Njk0Wk00OC4yNTEyIDIuOTMwMDdWNC40MzI0NUM0OC4yNTEyIDQuNjA0MTUgNDguMjUxMiA0Ljk0NzU2IDQ3LjQ0NzggNC45NDc1Nkg0MS42OTY1VjIuNTAwODJINDcuNDQ3OEM0OC4yNTEyIDIuNTAwODIgNDguMjUxMiAyLjc1ODM3IDQ4LjI1MTIgMi45MzAwN1pcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI0ZBRUVFMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KHMuY29ycCl9PlxyXG4gICAgICAgICAgICAgICB7PExvZ28gLz59XHJcbiAgICAgICAgICAgICAgIDxzcGFuPsKpIFB0eSBMdGQgYW5kIFdpbGQgR2FtZSBSZXNvdXJjZXM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgIDxzcGFuPkF1c3RyYWxpYSBQdHkgTHRkPC9zcGFuPlxyXG4gICAgICAgICAgICAgICA8c3Bhbj5UZXJtcyAmIENvbmRpdGlvbnM8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb290ZXI+XHJcbiAgICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgcyBmcm9tIFwiLi9IZWFkZXIubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IGcgZnJvbSBcInNyYy9zdHlsZXMvTWFpbi5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyBMb2dvIH0gZnJvbSBcIi4uLy4uL1NWRy9IZWFkZXJMb2dvU1ZHXCI7XHJcblxyXG5jb25zdCBoZWFkZXJMaW5rcyA9IFtcclxuICAgeyB0aXRsZTogXCLQotC+0YfQutC4INC/0YDQvtC00LDQtlwiLCBsaW5rOiBcIi9cIiB9LFxyXG4gICB7IHRpdGxlOiBcItCU0L7RgdGC0LDQstC60LBcIiwgbGluazogXCIvXCIgfSxcclxuICAgeyB0aXRsZTogXCLQktC+0L/RgNC+0YHRi1wiLCBsaW5rOiBcIi9cIiB9LFxyXG4gICB7IGxvZ286IHRydWUgfSxcclxuICAgeyB0aXRsZTogXCLQpNC10YDQvNCwXCIsIGxpbms6IFwiL1wiIH0sXHJcbiAgIHsgdGl0bGU6IFwi0J/RgNC+0LTRg9C60YbQuNGPXCIsIGxpbms6IFwiL3Byb2R1Y3RzXCIgfSxcclxuICAgeyB0aXRsZTogXCLQktC+0LnRgtC4XCIsIGxpbms6IFwiL1wiIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyID0gKHtwcm9tb30pID0+IHtcclxuICAgcmV0dXJuIChcclxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9e2Nsc3gocy5oZWFkZXIpfT5cclxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goZy53cmFwcGVyKX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KHMuY29udGFpbmVyLCBwcm9tbyA/IHMuYm9yZGVyX2FjY2VudCA6ICcnKX0+XHJcbiAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPXtjbHN4KHMubmF2KX0+XHJcbiAgICAgICAgICAgICAgICAgIHtoZWFkZXJMaW5rcy5tYXAoKGVsLCBpKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICBlbC5sb2dvID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y2xzeChzLmxvZ28sIHByb21vID8gcy5sb2dvX2FjY2VudCA6ICcnKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2dvIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtlbC5saW5rfSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Nsc3gocy5saW5rLCBwcm9tbyA/IHMubGlua19hY2NlbnQgOiAnJyl9PntlbC50aXRsZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3gocy5jb250cm9sKX0+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17Y2xzeChzLmJ1dHRvbiwgcHJvbW8gPyBzLmJ1dHRvbl9hY2NlbnQgOiAnJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjAgMThcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTAuMDQ5MyAzLjYzNDI0TDEwLjQ2ODYgNC4yODE5NkwxMC44ODg1IDMuNjM0NkMxMi4zODAzIDEuMzM0NTMgMTQuNDU3OCAwLjg4MzYzMSAxNi4xMzc3IDEuNTI4OTVDMTcuODQ5MyAyLjE4NjQ1IDE5LjI1IDQuMDE5NzYgMTkuMjUgNi41MTA1MUMxOS4yNSA3LjM3MDMyIDE4Ljc5MjUgOC40MjQxMSAxOC4wMDA2IDkuNTgxNDFDMTcuMjE5IDEwLjcyMzggMTYuMTU5MyAxMS44OTkxIDE1LjA2IDEyLjk4ODJDMTMuOTYyOSAxNC4wNzUyIDEyLjgzODUgMTUuMDY0NSAxMS45MzQ3IDE1LjgzNjJDMTEuNjEwMSAxNi4xMTM0IDExLjMxNTUgMTYuMzYxMSAxMS4wNjAxIDE2LjU3NTlDMTAuOTU5NCAxNi42NjA2IDEwLjg2NDkgMTYuNzQwMSAxMC43NzY5IDE2LjgxNDRDMTAuNjY0IDE2LjkwOTYgMTAuNTU5MiAxNi45OTg0IDEwLjQ2NTggMTcuMDc4OUMxMC4zNjcxIDE2Ljk5NjQgMTAuMjU2MSAxNi45MDU1IDEwLjEzNjkgMTYuODA4NkMxMC4wMDk3IDE2LjcwNTEgOS44NzA0MiAxNi41OTI2IDkuNzE5NjUgMTYuNDcwOEM5LjQ4MzU4IDE2LjI4MDEgOS4yMTkzIDE2LjA2NjYgOC45Mjg4NSAxNS44MjkzQzcuOTgzNzQgMTUuMDU3IDYuODA0NDUgMTQuMDY3MyA1LjY1MjM0IDEyLjk3OThDNC40OTc5IDExLjg5MDEgMy4zODM4NCAxMC43MTQ0IDIuNTYxODMgOS41NzE3N0MxLjcyODAxIDguNDEyNzQgMS4yNSA3LjM2MjU2IDEuMjUgNi41MTA1MUMxLjI1IDQuMDE4NiAyLjc0Mjg2IDIuMTc3NjggNC41NzM5MSAxLjUxNzE2QzYuMzgxNjMgMC44NjUwNjIgOC41Njc3NiAxLjM0NTgxIDEwLjA0OTMgMy42MzQyNFpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCIjRkFFRUUyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e2Nsc3gocy5idXR0b24pfT5cclxuICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjE1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE1IDIxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cmVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB4PVwiMC41XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgeT1cIjYuNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cIiNGRkYzRTdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTEyIDEwVjUuNUMxMiAzLjAxNDcyIDkuOTg1MjggMSA3LjUgMVYxQzUuMDE0NzIgMSAzIDMuMDE0NzIgMyA1LjVWMTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCIjRkZGM0U3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgKTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHMgZnJvbSAnLi9JbnN0YWdyYW0ubW9kdWxlLnNjc3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEluc3RhZ3JhbSA9ICh7dXJsLCBpbWFnZSwgdXNlciwgZGF0ZSwgdGV4dCwgdmlkZW9Db3ZlciB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxhIGhyZWY9e3VybH0gdGFyZ2V0PSdfYmxhbmsnIGNsYXNzTmFtZT17cy5wb3N0fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5oZWFkZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5pbmZvfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cy51c2VyfT57dXNlcn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3MuZGF0ZX0+e2RhdGV9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzLmljb259PlxyXG4gICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTIwIDBINEMyLjkzOTEzIDAgMS45MjE3MiAwLjQyMTQyNyAxLjE3MTU3IDEuMTcxNTdDMC40MjE0MjcgMS45MjE3MiAwIDIuOTM5MTMgMCA0TDAgMjBDMCAyMS4wNjA5IDAuNDIxNDI3IDIyLjA3ODMgMS4xNzE1NyAyMi44Mjg0QzEuOTIxNzIgMjMuNTc4NiAyLjkzOTEzIDI0IDQgMjRIMjBDMjEuMDYwOSAyNCAyMi4wNzgzIDIzLjU3ODYgMjIuODI4NCAyMi44Mjg0QzIzLjU3ODYgMjIuMDc4MyAyNCAyMS4wNjA5IDI0IDIwVjRDMjQgMi45MzkxMyAyMy41Nzg2IDEuOTIxNzIgMjIuODI4NCAxLjE3MTU3QzIyLjA3ODMgMC40MjE0MjcgMjEuMDYwOSAwIDIwIDBWMFpNMjIgMjBDMjIgMjAuNTMwNCAyMS43ODkzIDIxLjAzOTEgMjEuNDE0MiAyMS40MTQyQzIxLjAzOTEgMjEuNzg5MyAyMC41MzA0IDIyIDIwIDIySDRDMy40Njk1NyAyMiAyLjk2MDg2IDIxLjc4OTMgMi41ODU3OSAyMS40MTQyQzIuMjEwNzEgMjEuMDM5MSAyIDIwLjUzMDQgMiAyMFY0QzIgMy40Njk1NyAyLjIxMDcxIDIuOTYwODYgMi41ODU3OSAyLjU4NTc5QzIuOTYwODYgMi4yMTA3MSAzLjQ2OTU3IDIgNCAySDIwQzIwLjUzMDQgMiAyMS4wMzkxIDIuMjEwNzEgMjEuNDE0MiAyLjU4NTc5QzIxLjc4OTMgMi45NjA4NiAyMiAzLjQ2OTU3IDIyIDRWMjBaXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiMxODQyNDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTIgNkMxMC44MTMzIDYgOS42NTMyOCA2LjM1MTg5IDguNjY2NTggNy4wMTExOEM3LjY3OTg5IDcuNjcwNDcgNi45MTA4NSA4LjYwNzU0IDYuNDU2NzMgOS43MDM5QzYuMDAyNiAxMC44MDAzIDUuODgzNzggMTIuMDA2NyA2LjExNTI5IDEzLjE3MDVDNi4zNDY4IDE0LjMzNDQgNi45MTgyNSAxNS40MDM1IDcuNzU3MzYgMTYuMjQyNkM4LjU5NjQ4IDE3LjA4MTggOS42NjU1OCAxNy42NTMyIDEwLjgyOTUgMTcuODg0N0MxMS45OTMzIDE4LjExNjIgMTMuMTk5NyAxNy45OTc0IDE0LjI5NjEgMTcuNTQzM0MxNS4zOTI1IDE3LjA4OTIgMTYuMzI5NSAxNi4zMjAxIDE2Ljk4ODggMTUuMzMzNEMxNy42NDgxIDE0LjM0NjcgMTggMTMuMTg2NyAxOCAxMkMxOCAxMC40MDg3IDE3LjM2NzkgOC44ODI1OCAxNi4yNDI2IDcuNzU3MzZDMTUuMTE3NCA2LjYzMjE0IDEzLjU5MTMgNiAxMiA2Wk0xMiAxNkMxMS4yMDg5IDE2IDEwLjQzNTUgMTUuNzY1NCA5Ljc3NzcyIDE1LjMyNTlDOS4xMTk5MyAxNC44ODY0IDguNjA3MjMgMTQuMjYxNiA4LjMwNDQ4IDEzLjUzMDdDOC4wMDE3MyAxMi43OTk4IDcuOTIyNTIgMTEuOTk1NiA4LjA3Njg2IDExLjIxOTZDOC4yMzEyIDEwLjQ0MzcgOC42MTIxNyA5LjczMDk4IDkuMTcxNTggOS4xNzE1N0M5LjczMDk5IDguNjEyMTYgMTAuNDQzNyA4LjIzMTIgMTEuMjE5NiA4LjA3Njg2QzExLjk5NTYgNy45MjI1MiAxMi43OTk4IDguMDAxNzMgMTMuNTMwNyA4LjMwNDQ4QzE0LjI2MTYgOC42MDcyMyAxNC44ODY0IDkuMTE5OTIgMTUuMzI1OSA5Ljc3NzcyQzE1Ljc2NTQgMTAuNDM1NSAxNiAxMS4yMDg5IDE2IDEyQzE2IDEzLjA2MDkgMTUuNTc4NiAxNC4wNzgzIDE0LjgyODQgMTQuODI4NEMxNC4wNzgzIDE1LjU3ODYgMTMuMDYwOSAxNiAxMiAxNlpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiIzE4NDI0MFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xOC41IDdDMTkuMzI4NCA3IDIwIDYuMzI4NDMgMjAgNS41QzIwIDQuNjcxNTcgMTkuMzI4NCA0IDE4LjUgNEMxNy42NzE2IDQgMTcgNC42NzE1NyAxNyA1LjVDMTcgNi4zMjg0MyAxNy42NzE2IDcgMTguNSA3WlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjMTg0MjQwXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGltZyBzcmM9e3ZpZGVvQ292ZXIgPyB2aWRlb0NvdmVyIDogaW1hZ2V9IGFsdD17dXNlcn0gY2xhc3NOYW1lPXtzLmltYWdlfS8+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzLnRleHR9Pnt0ZXh0fTwvcD5cclxuICAgIDwvYT5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgYWxsU3RhdHVzLCBhbGxUYXN0ZXMgfSBmcm9tIFwic3JjL2NvbnN0YW50c1wiO1xyXG5cclxuXHJcbmltcG9ydCBzIGZyb20gXCIuL1Byb2R1Y3QubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IGcgZnJvbSBcInNyYy9zdHlsZXMvTWFpbi5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2R1Y3QgPSAoe1xyXG4gICBzdGF0dXMsXHJcbiAgIGltYWdlLFxyXG4gICBuYW1lLFxyXG4gICBhZGRpdGlvbixcclxuICAgd2VpZ2h0LFxyXG4gICBwcmljZSxcclxuICAgbGluayxcclxuICAgdGFzdGVzLFxyXG4gICBhZGRpdGlvbkNsYXNzLFxyXG4gICBpZFxyXG59KSA9PiB7XHJcbiAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KHMuY2FyZCwgYWRkaXRpb25DbGFzcyAmJiBzW2FkZGl0aW9uQ2xhc3NdKX0+XHJcbiAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17Y2xzeChzLmFkZCl9PlxyXG4gICAgICAgICAgICArXHJcbiAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Nsc3goZ1thbGxTdGF0dXNbc3RhdHVzXS5jbGFzc10pfT5cclxuICAgICAgICAgICAge2FsbFN0YXR1c1tzdGF0dXNdLnRpdGxlfVxyXG4gICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgIDxpbWcgc3JjPXtpbWFnZX0gYWx0PXtuYW1lfSBjbGFzc05hbWU9e2Nsc3gocy5pbWFnZSl9IC8+XHJcbiAgICAgICAgIDxoMyBjbGFzc05hbWU9e2Nsc3gocy5uYW1lKX0+e25hbWV9PC9oMz5cclxuICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbHN4KHMuYWRkaXRpb24pfT57YWRkaXRpb259PC9zcGFuPlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChzLmluZm8pfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3gocy53ZWxsKX0+XHJcbiAgICAgICAgICAgICAgIHt0YXN0ZXM/Lmxlbmd0aCAmJiB0YXN0ZXMubWFwKCh0YXN0ZSkgPT4gYWxsVGFzdGVzW3Rhc3RlXSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Nsc3gocy53ZWlnaHQpfT57d2VpZ2h0fTwvc3Bhbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDxoMyBjbGFzc05hbWU9e2Nsc3gocy5wcmljZSl9PntwcmljZX0g0YDRg9CxLjwvaDM+XHJcbiAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZHVjdHMvJHtpZH1gfT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjbHN4KHMubW9yZSl9PtCf0L7QtNGA0L7QsdC90LXQtTwvYT5cclxuICAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgKTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBzIGZyb20gXCIuL1JlY2lwZS5tb2R1bGUuc2Nzc1wiO1xyXG5leHBvcnQgY29uc3QgUmVjaXBlID0gKHsgaW1hZ2UsIG5hbWUsIHRleHQsIHVybCB9KSA9PiB7XHJcbiAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KHMuY2FyZCl9PlxyXG4gICAgICAgICA8aW1nIHNyYz17aW1hZ2V9IGFsdD1cIlwiIGNsYXNzTmFtZT17Y2xzeChzLmltYWdlKX0gLz5cclxuICAgICAgICAgPGgzIGNsYXNzTmFtZT17Y2xzeChzLm5hbWUpfT57bmFtZX08L2gzPlxyXG4gICAgICAgICA8cCBjbGFzc05hbWU9e2Nsc3gocy50ZXh0KX0+e3RleHR9PC9wPlxyXG4gICAgICAgICA8TGluayBocmVmPXt1cmx9ID4gXHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y2xzeChzLmxpbmspfT5cclxuICAgICAgICAgICAgICAg0J/QvtGB0LzQvtGC0YDQtdGC0YxcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tIFwic3dpcGVyL3JlYWN0XCI7XHJcbmltcG9ydCBTd2lwZXJDb3JlLCB7IE5hdmlnYXRpb24gfSBmcm9tIFwic3dpcGVyXCI7XHJcbmltcG9ydCB7IFNsaWRlck5hdiB9IGZyb20gXCJAY29tcG9uZW50cy9Db21tb24vU2xpZGVyL1NsaWRlck5hdi9TbGlkZXJOYXZcIjtcclxuXHJcbmltcG9ydCBzIGZyb20gXCIuL1NsaWRlci5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNsaWRlciA9ICh7IGNoaWxkcmVuLCBzbGlkZXMsIHBhcmFtcywgdGl0bGUgfSkgPT4ge1xyXG4gICBTd2lwZXJDb3JlLnVzZShbTmF2aWdhdGlvbl0pO1xyXG4gICBjb25zdCBwcmV2UmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG4gICBjb25zdCBuZXh0UmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG4gICBjb25zdCBbY3VycmVudENvdW50LCBzZXRDdXJyZW50Q291bnRdID0gUmVhY3QudXNlU3RhdGUoMSk7XHJcbiAgIGNvbnN0IGFsbENvdW50ID0gTWF0aC5jZWlsKHNsaWRlcy5sZW5ndGggLyBwYXJhbXMuc2xpZGVyLnNsaWRlc1BlclZpZXcpO1xyXG4gICBjb25zdCB7c2xpZGVyQ2xhc3MsIHNsaWRlQ2xhc3MsIC4uLnJlc3RQYXJhbXN9ID0gcGFyYW1zLnNsaWRlcjtcclxuICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICAgPFNsaWRlck5hdlxyXG4gICAgICAgICAgICB0aXRsZT17dGl0bGV9XHJcbiAgICAgICAgICAgIHByZXY9e3ByZXZSZWZ9XHJcbiAgICAgICAgICAgIG5leHQ9e25leHRSZWZ9XHJcbiAgICAgICAgICAgIGFsbENvdW50PXthbGxDb3VudH1cclxuICAgICAgICAgICAgY3VycmVudENvdW50PXtjdXJyZW50Q291bnR9XHJcbiAgICAgICAgICAgIHBhcmFtcz17cGFyYW1zLm5hdn1cclxuICAgICAgICAgLz5cclxuICAgICAgICAgPFN3aXBlclxyXG4gICAgICAgICAgICBvbkluaXQ9eyhzd2lwZXIpID0+IHtcclxuICAgICAgICAgICAgICAgc3dpcGVyLnBhcmFtcy5uYXZpZ2F0aW9uLnByZXZFbCA9IHByZXZSZWYuY3VycmVudDtcclxuICAgICAgICAgICAgICAgc3dpcGVyLnBhcmFtcy5uYXZpZ2F0aW9uLm5leHRFbCA9IG5leHRSZWYuY3VycmVudDtcclxuICAgICAgICAgICAgICAgc3dpcGVyLm5hdmlnYXRpb24udXBkYXRlKCk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG5hdmlnYXRpb25cclxuICAgICAgICAgICAgb25TbGlkZUNoYW5nZT17KGUpID0+IHNldEN1cnJlbnRDb3VudCgrK2Uuc25hcEluZGV4KX1cclxuICAgICAgICAgICAgc3BlZWQ9ezUwMH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzW3NsaWRlckNsYXNzXX1cclxuICAgICAgICAgICAgey4uLnJlc3RQYXJhbXN9XHJcbiAgICAgICAgID5cclxuICAgICAgICAgICAge3NsaWRlcy5tYXAoKHNsaWRlLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBrZXk9e2l9IGNsYXNzTmFtZT17c1tzbGlkZUNsYXNzXX0+XHJcbiAgICAgICAgICAgICAgICAgIHtSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHsgLi4uc2xpZGUgfSl9XHJcbiAgICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICA8L1N3aXBlcj5cclxuICAgICAgPC8+XHJcbiAgICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcclxuaW1wb3J0IHMgZnJvbSBcIi4vU2xpZGVyTmF2Lm1vZHVsZS5zY3NzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU2xpZGVyTmF2ID0gKHtcclxuICAgdGl0bGUsXHJcbiAgIHByZXYsXHJcbiAgIG5leHQsXHJcbiAgIGFsbENvdW50LFxyXG4gICBjdXJyZW50Q291bnQsXHJcbiAgIHBhcmFtcyxcclxufSkgPT4ge1xyXG4gICBjb25zdCB7IGNvdW50ZXIgfSA9IHBhcmFtcztcclxuICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3gocy5oZWFkZXIpfT5cclxuICAgICAgICAgPGgyIGNsYXNzTmFtZT17Y2xzeChzLnRpdGxlKX0+e3RpdGxlfTwvaDI+XHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KHMuY29udGFpbmVyKX0+XHJcbiAgICAgICAgICAgIHtjb3VudGVyICYmIChcclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3gocy5jb3VudGVyKX0+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xzeChzLmNvdW50ZXJfX2N1cnJlbnQpfT5cclxuICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRDb3VudCA8IDEwID8gXCIwXCIgKyBjdXJyZW50Q291bnQgOiBjdXJyZW50Q291bnR9XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgL1xyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Nsc3gocy5jb3VudGVyX19hbGwpfT5cclxuICAgICAgICAgICAgICAgICAgICAge2FsbENvdW50IDwgMTAgPyBcIjBcIiArIGFsbENvdW50IDogYWxsQ291bnR9XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChzLm5hdil9PlxyXG4gICAgICAgICAgICAgICA8YnV0dG9uIHJlZj17cHJldn0gY2xhc3NOYW1lPXtjbHN4KHMucHJldil9PlxyXG4gICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiOVwiXHJcbiAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE2XCJcclxuICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA5IDE2XCJcclxuICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTYuNjU3MTUgMC45Mjg4OEwwLjI5MzE5MSA3LjI5Mjg0Qy0wLjA5NzMzMzMgNy42ODMzNyAtMC4wOTczMzMyIDguMzE2NTMgMC4yOTMxOTEgOC43MDcwNUw2LjY1NzE1IDE1LjA3MUM3LjA0NzY4IDE1LjQ2MTUgNy42ODA4NCAxNS40NjE1IDguMDcxMzcgMTUuMDcxQzguNDYxODkgMTQuNjgwNSA4LjQ2MTg5IDE0LjA0NzMgOC4wNzEzNyAxMy42NTY4TDIuNDE0NTEgNy45OTk5NUw4LjA3MTM2IDIuMzQzMDlDOC40NjE4OSAxLjk1MjU3IDguNDYxODkgMS4zMTk0IDguMDcxMzYgMC45Mjg4OEM3LjY4MDg0IDAuNTM4MzU1IDcuMDQ3NjggMC41MzgzNTUgNi42NTcxNSAwLjkyODg4WlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjMTg0MTQwXCJcclxuICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICA8YnV0dG9uIHJlZj17bmV4dH0gY2xhc3NOYW1lPXtjbHN4KHMubmV4dCl9PlxyXG4gICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiOVwiXHJcbiAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE2XCJcclxuICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA5IDE2XCJcclxuICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTguNzA3MTEgOC43MDcxMUM5LjA5NzYzIDguMzE2NTggOS4wOTc2MyA3LjY4MzQyIDguNzA3MTEgNy4yOTI4OUwyLjM0MzE1IDAuOTI4OTMyQzEuOTUyNjIgMC41Mzg0MDcgMS4zMTk0NiAwLjUzODQwNyAwLjkyODkzMyAwLjkyODkzMkMwLjUzODQwOCAxLjMxOTQ2IDAuNTM4NDA4IDEuOTUyNjIgMC45Mjg5MzMgMi4zNDMxNUw2LjU4NTc5IDhMMC45Mjg5MzIgMTMuNjU2OUMwLjUzODQwNyAxNC4wNDc0IDAuNTM4NDA3IDE0LjY4MDUgMC45Mjg5MzIgMTUuMDcxMUMxLjMxOTQ2IDE1LjQ2MTYgMS45NTI2MiAxNS40NjE2IDIuMzQzMTUgMTUuMDcxMUw4LjcwNzExIDguNzA3MTFaTTcgOUw4IDlMOCA3TDcgN0w3IDlaXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiMxODQxNDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMb2dvID0gKCkgPT4ge1xyXG4gICByZXR1cm4gKFxyXG4gICAgICA8c3ZnXHJcbiAgICAgICAgIHdpZHRoPVwiMTAwXCJcclxuICAgICAgICAgaGVpZ2h0PVwiMzZcIlxyXG4gICAgICAgICB2aWV3Qm94PVwiMCAwIDEwMCAzNlwiXHJcbiAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgID5cclxuICAgICAgICAgPGcgY2xpcFBhdGg9XCJ1cmwoI2NsaXAwKVwiPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICBkPVwiTTUuNzE5MzcgMzUuMDQ3NEM1LjkwMzg3IDM1LjIxMTcgNS45OTYxMiAzNS4zNzU5IDUuOTk2MTIgMzUuNTczQzUuOTk2MTIgMzUuODAyOSA1Ljc4MDg3IDM1Ljk2NzEgNS41MDQxMSAzNS45NjcxQzUuMzE5NjEgMzUuOTY3MSA1LjEwNDM2IDM1Ljg2ODYgNC45MTk4NiAzNS43MDQ0TDEuOTM3MDggMzIuOTQ1MlYzNS40NDE2QzEuOTM3MDggMzUuNzM3MiAxLjY5MTA4IDM1Ljk2NzEgMS4zNTI4MiAzNS45NjcxQzEuMDQ1MzIgMzUuOTY3MSAwLjc5OTMxNiAzNS43NzAxIDAuNzk5MzE2IDM1LjQ0MTZWMzAuMTIwNEMwLjc5OTMxNiAyOS44MjQ4IDEuMDQ1MzIgMjkuNjI3NyAxLjM1MjgyIDI5LjYyNzdDMS43MjE4MyAyOS42Mjc3IDEuOTM3MDggMjkuODI0OCAxLjkzNzA4IDMwLjE1MzNWMzIuMTU2OUw0LjU1MDg1IDI5LjkyMzNDNC43OTY4NiAyOS43MjYzIDQuOTUwNjEgMjkuNjI3NyA1LjEzNTExIDI5LjYyNzdDNS40NDI2MSAyOS42Mjc3IDUuNjI3MTEgMjkuODI0OCA1LjYyNzExIDMwLjEyMDRDNS42MjcxMSAzMC4yNTE4IDUuNTM0ODYgMzAuMzgzMiA1LjQxMTg2IDMwLjUxNDZMMi44NTk1OSAzMi41MTgyTDUuNzE5MzcgMzUuMDQ3NFpcIlxyXG4gICAgICAgICAgICAgICBmaWxsPVwiI0ZGRjNFN1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgIGQ9XCJNOS41OTQwNyAyOS42Mjc3QzcuNzQ5MDYgMjkuNjI3NyA2LjUxOTA0IDMxLjAwNzMgNi41MTkwNCAzMi44MTM5QzYuNTE5MDQgMzQuNDg5IDcuNjg3NTUgMzYgOS41OTQwNyAzNkMxMS41MDA2IDM2IDEyLjY2OTEgMzQuNDg5IDEyLjY2OTEgMzIuODEzOUMxMi42NjkxIDMxLjEzODcgMTEuNTYyMSAyOS42Mjc3IDkuNTk0MDcgMjkuNjI3N1pNOS41NjMzMiAzNS4xMTMxQzguMjEwMzEgMzUuMTEzMSA3LjY1NjggMzMuODk3OCA3LjY1NjggMzIuODEzOUM3LjY1NjggMzEuNjk3MSA4LjI0MTA2IDMwLjUxNDYgOS41OTQwNyAzMC41MTQ2QzEwLjkxNjMgMzAuNTE0NiAxMS41MDA2IDMxLjY2NDIgMTEuNTAwNiAzMi44MTM5QzExLjUzMTMgMzMuOTMwNiAxMS4wMDg2IDM1LjExMzEgOS41NjMzMiAzNS4xMTMxWlwiXHJcbiAgICAgICAgICAgICAgIGZpbGw9XCIjRkZGM0U3XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgZD1cIk0xNy41ODkzIDMyLjU4MzlDMTguNDE5NiAzMi4zNTQgMTguODUwMSAzMS44NjEzIDE4Ljg1MDEgMzEuMjA0NEMxOC44NTAxIDMwLjE4NjEgMTcuODA0NiAyOS42Mjc3IDE2LjUxMzEgMjkuNjI3N0MxNS4yNTIzIDI5LjYyNzcgMTMuODY4NSAzMC4wNTQ3IDEzLjg2ODUgMzAuNjEzMUMxMy44Njg1IDMwLjk0MTYgMTQuMTE0NiAzMS4xMDU4IDE0LjQ1MjggMzEuMTA1OEMxNC45NDQ4IDMxLjEwNTggMTUuMDY3OCAzMC41NDc0IDE2LjQyMDggMzAuNTQ3NEMxNy4xNTg4IDMwLjU0NzQgMTcuNzEyMyAzMC42Nzg4IDE3LjcxMjMgMzEuMzM1N0MxNy43MTIzIDMyLjA1ODQgMTYuOTQzNiAzMi4yMjI2IDE2LjI2NzEgMzIuMjIyNkgxNS42MjEzQzE1LjI1MjMgMzIuMjIyNiAxNS4xNjAxIDMyLjQ1MjUgMTUuMTYwMSAzMi42ODI1QzE1LjE2MDEgMzIuODc5NSAxNS4zNzUzIDMzLjA0MzggMTUuNjIxMyAzMy4wNDM4SDE2LjI5NzhDMTcuMTI4MSAzMy4wNDM4IDE3LjkyNzYgMzMuMjA4IDE3LjkyNzYgMzMuOTYzNUMxNy45Mjc2IDM0LjkxNiAxNi45MTI4IDM1LjE0NiAxNi4yMDU2IDM1LjE0NkMxNS4wMDYzIDM1LjE0NiAxNC42OTg4IDM0LjM1NzYgMTQuMTE0NiAzNC4zNTc2QzEzLjgwNyAzNC4zNTc2IDEzLjU5MTggMzQuNjUzMyAxMy41OTE4IDM0Ljg1MDNDMTMuNTkxOCAzNS40MDg3IDE1LjE5MDggMzYuMDMyOCAxNi4yOTc4IDM2LjAzMjhDMTguMTEyMSAzNi4wMzI4IDE5LjA5NjEgMzUuMDgwMyAxOS4wOTYxIDM0LjA5NDlDMTkuMDY1MyAzMy4xNDIzIDE4LjI5NjYgMzIuNzE1MyAxNy41ODkzIDMyLjU4MzlaXCJcclxuICAgICAgICAgICAgICAgZmlsbD1cIiNGRkYzRTdcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICBkPVwiTTIyLjg0NzIgMzEuOTI3SDIxLjUyNVYzMC4xODYxQzIxLjUyNSAyOS44MjQ4IDIxLjI0ODIgMjkuNjI3NyAyMC45NDA3IDI5LjYyNzdDMjAuNjMzMiAyOS42Mjc3IDIwLjM4NzIgMjkuODI0OCAyMC4zODcyIDMwLjE4NjFWMzUuMzQzQzIwLjM4NzIgMzUuNzA0NCAyMC41NDEgMzUuOTM0MyAyMS4wNjM3IDM1LjkzNDNIMjIuOTA4N0MyNC40NzcgMzUuOTM0MyAyNS43OTkzIDM1LjM3NTkgMjUuNzk5MyAzMy44OTc4QzI1Ljc2ODUgMzIuMjU1NSAyNC4wNzcyIDMxLjkyNyAyMi44NDcyIDMxLjkyN1pNMjIuNjMyIDM1LjA0NzRIMjEuNTI1VjMyLjgxMzlIMjIuNjkzNUMyMy43Njk3IDMyLjgxMzkgMjQuNTM4NSAzMy4wMTA5IDI0LjUzODUgMzMuODk3OEMyNC41Mzg1IDM0Ljg1MDMgMjMuNTU0NSAzNS4wNDc0IDIyLjYzMiAzNS4wNDc0WlwiXHJcbiAgICAgICAgICAgICAgIGZpbGw9XCIjRkZGM0U3XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgZD1cIk0yNi45MzczIDI5LjYyNzdDMjYuNTk5IDI5LjYyNzcgMjYuMzgzOCAyOS44NTc2IDI2LjM4MzggMzAuMTg2MVYzNS40NzQ0QzI2LjM4MzggMzUuNzcwMSAyNi42Mjk4IDM2IDI2LjkzNzMgMzZDMjcuMjc1NSAzNiAyNy41MjE1IDM1Ljc3MDEgMjcuNTIxNSAzNS40NzQ0VjMwLjE1MzNDMjcuNTIxNSAyOS44NTc2IDI3LjI3NTUgMjkuNjI3NyAyNi45MzczIDI5LjYyNzdaXCJcclxuICAgICAgICAgICAgICAgZmlsbD1cIiNGRkYzRTdcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICBkPVwiTTM3LjE3NzQgMjkuNjI3N0MzNi44MzkxIDI5LjYyNzcgMzYuNjU0NiAyOS43OTE5IDM2LjI4NTYgMzAuMjg0N0wzMy4zMzM2IDM0LjEyNzdWMzAuMTg2MUMzMy4zMzM2IDI5LjgyNDggMzMuMDU2OCAyOS42Mjc3IDMyLjc0OTMgMjkuNjI3N0MzMi40NDE4IDI5LjYyNzcgMzIuMTk1OCAyOS44MjQ4IDMyLjE5NTggMzAuMTg2MVYzNS4zNzU5QzMyLjE5NTggMzUuOTM0MyAzMi40NDE4IDM2LjAzMjggMzIuNzQ5MyAzNi4wMzI4QzMzLjA4NzYgMzYuMDMyOCAzMy4zMzM2IDM1LjgwMjkgMzMuODI1NiAzNS4xNDZMMzYuNTYyMyAzMS41MzI4VjM1LjUwNzNDMzYuNTYyMyAzNS44MDI5IDM2LjcxNjEgMzYgMzcuMTE1OSAzNkMzNy41MTU2IDM2IDM3LjcwMDEgMzUuODM1NyAzNy43MDAxIDM1LjQ3NDRWMzAuMTg2MUMzNy43MDAxIDI5Ljg1NzYgMzcuNTQ2NCAyOS42Mjc3IDM3LjE3NzQgMjkuNjI3N1pcIlxyXG4gICAgICAgICAgICAgICBmaWxsPVwiI0ZGRjNFN1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgIGQ9XCJNNDQuNDk1OCAzMi41MTgyTDQ2Ljk4NjYgMzAuNTE0NkM0Ny4xNDAzIDMwLjM4MzIgNDcuMjAxOCAzMC4yODQ3IDQ3LjIwMTggMzAuMTIwNEM0Ny4yMDE4IDI5LjgyNDggNDcuMDE3MyAyOS42Mjc3IDQ2LjcwOTggMjkuNjI3N0M0Ni41MjUzIDI5LjYyNzcgNDYuMzcxNiAyOS42OTM0IDQ2LjEyNTYgMjkuOTIzM0w0My41MTE4IDMyLjE1NjlWMzAuMTUzM0M0My41MTE4IDI5LjgyNDggNDMuMjk2NSAyOS42Mjc3IDQyLjkyNzUgMjkuNjI3N0M0Mi42MiAyOS42Mjc3IDQyLjM3NCAyOS44MjQ4IDQyLjM3NCAzMC4xMjA0VjM1LjQ3NDRDNDIuMzc0IDM1LjgwMjkgNDIuNjUwOCAzNiA0Mi45Mjc1IDM2QzQzLjI2NTggMzYgNDMuNTExOCAzNS43NzAxIDQzLjUxMTggMzUuNDc0NFYzMi45NzgxTDQ2LjQ5NDYgMzUuNzM3MkM0Ni42NzkxIDM1LjkwMTQgNDYuODk0MyAzNiA0Ny4wNzg4IDM2QzQ3LjM1NTYgMzYgNDcuNTcwOCAzNS44MzU4IDQ3LjU3MDggMzUuNjA1OEM0Ny41NzA4IDM1LjQwODcgNDcuNDc4NiAzNS4yNDQ1IDQ3LjI5NDEgMzUuMDgwM0w0NC40OTU4IDMyLjUxODJaXCJcclxuICAgICAgICAgICAgICAgZmlsbD1cIiNGRkYzRTdcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICBkPVwiTTUxLjIyOTggMjkuNjI3N0M0OS4zODQ4IDI5LjYyNzcgNDguMTU0OCAzMS4wMDczIDQ4LjE1NDggMzIuODEzOUM0OC4xNTQ4IDM0LjQ4OSA0OS4zMjMzIDM2IDUxLjIyOTggMzZDNTMuMTM2MyAzNiA1NC4zMDQ5IDM0LjQ4OSA1NC4zMDQ5IDMyLjgxMzlDNTQuMjc0MSAzMS4xMzg3IDUzLjE2NzEgMjkuNjI3NyA1MS4yMjk4IDI5LjYyNzdaTTUxLjE5OTEgMzUuMTEzMUM0OS44NDYxIDM1LjExMzEgNDkuMjkyNSAzMy44OTc4IDQ5LjI5MjUgMzIuODEzOUM0OS4yOTI1IDMxLjY5NzEgNDkuODc2OCAzMC41MTQ2IDUxLjIyOTggMzAuNTE0NkM1Mi41NTIxIDMwLjUxNDYgNTMuMTM2MyAzMS42NjQyIDUzLjEzNjMgMzIuODEzOUM1My4xMzYzIDMzLjkzMDYgNTIuNjEzNiAzNS4xMTMxIDUxLjE5OTEgMzUuMTEzMVpcIlxyXG4gICAgICAgICAgICAgICBmaWxsPVwiI0ZGRjNFN1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgIGQ9XCJNNjMuMDA3NCAzMC4xODYxQzYyLjk0NTkgMjkuNzkyIDYyLjY5OTkgMjkuNjI3NyA2Mi4yNjk0IDI5LjYyNzdDNjEuODA4MSAyOS42Mjc3IDYxLjY1NDQgMjkuODI0OCA2MS4zNzc2IDMwLjQ0ODlMNTkuNDA5NiAzNC40ODlMNTcuNDQxNiAzMC40NDg5QzU3LjEzNDEgMjkuODI0OCA1Ny4wMTExIDI5LjYyNzcgNTYuNTQ5OCAyOS42Mjc3QzU2LjE1IDI5LjYyNzcgNTUuODczMyAyOS43OTIgNTUuODQyNSAzMC4xODYxTDU1LjI4OSAzNS4wNDc0QzU1LjI1ODMgMzUuMjc3NCA1NS4yMjc1IDM1LjQ3NDQgNTUuMjI3NSAzNS41MDczQzU1LjIyNzUgMzUuODAyOSA1NS40MTIgMzYuMDMyOCA1NS43ODEgMzYuMDMyOEM1Ni4xODA4IDM2LjAzMjggNTYuMzY1MyAzNS43NzAxIDU2LjQyNjggMzUuMzc1OUw1Ni44MjY2IDMxLjU2NTdMNTguNTQ4NiAzNC45ODE3QzU4LjkxNzYgMzUuNzA0NCA1OS4xMDIxIDM2LjAzMjggNTkuNDcxMSAzNi4wMzI4QzU5Ljg0MDEgMzYuMDMyOCA2MC4wMjQ2IDM1LjcwNDQgNjAuMzkzNiAzNC45ODE3TDYyLjExNTYgMzEuNTY1N0w2Mi41NDYxIDM1LjUwNzNDNjIuNTc2OSAzNS43MzcyIDYyLjczMDYgMzYuMDMyOCA2My4xNjExIDM2LjAzMjhDNjMuNDk5NCAzNi4wMzI4IDYzLjcxNDYgMzUuODM1NyA2My43MTQ2IDM1LjUwNzNDNjMuNzE0NiAzNS40NzQ0IDYzLjY4MzkgMzUuMjc3NCA2My42ODM5IDM1LjE0Nkw2My4wMDc0IDMwLjE4NjFaXCJcclxuICAgICAgICAgICAgICAgZmlsbD1cIiNGRkYzRTdcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICBkPVwiTTY5LjcxMTEgMjkuNjkzNEg2NS40MDZDNjUuMDY3OCAyOS42OTM0IDY0Ljg1MjUgMjkuOTIzMyA2NC44NTI1IDMwLjIxOVYzNS40NzQ0QzY0Ljg1MjUgMzUuODM1OCA2NS4wOTg1IDM2IDY1LjQwNiAzNkM2NS43NzUgMzYgNjYuMDIxMSAzNS44MDI5IDY2LjAyMTEgMzUuNTA3M1YzMC41ODAzSDY5LjE1NzZWMzUuNTA3M0M2OS4xNTc2IDM1LjgwMjkgNjkuNDAzNiAzNiA2OS43NDE4IDM2QzcwLjAxODYgMzYgNzAuMjk1MyAzNS44MzU4IDcwLjI5NTMgMzUuNDc0NFYzMC4yMTlDNzAuMjk1MyAyOS45MjMzIDcwLjA0OTMgMjkuNjkzNCA2OS43MTExIDI5LjY5MzRaXCJcclxuICAgICAgICAgICAgICAgZmlsbD1cIiNGRkYzRTdcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICBkPVwiTTc3LjA2MDQgMjkuNjI3N0M3Ni43NTI5IDI5LjYyNzcgNzYuNTA2OSAyOS44NTc3IDc2LjUwNjkgMzAuMTIwNFYzMC40NDg5SDc2LjQ3NjJDNzUuODkxOSAyOS44NTc3IDc1LjM2OTIgMjkuNTk0OSA3NC41MDgyIDI5LjU5NDlDNzIuNjAxNiAyOS41OTQ5IDcxLjUyNTQgMzEuMTM4NyA3MS41MjU0IDMyLjgxMzlDNzEuNTI1NCAzNC41ODc2IDcyLjc1NTQgMzUuOTY3MSA3NC42NjE5IDM1Ljk2NzFDNzUuMzY5MiAzNS45NjcxIDc1Ljk4NDIgMzUuNjM4NyA3Ni40NzYyIDM1LjA0NzRINzYuNTA2OVYzNS41MDczQzc2LjUwNjkgMzUuODM1NyA3Ni43NTI5IDM2IDc3LjA2MDQgMzZDNzcuMzk4NyAzNiA3Ny42MTM5IDM1LjgwMjkgNzcuNjEzOSAzNS40NzQ0VjMwLjE1MzNDNzcuNTgzMiAyOS44NTc3IDc3LjM2NzkgMjkuNjI3NyA3Ny4wNjA0IDI5LjYyNzdaTTc0LjUwODIgMzUuMTEzMUM3My4xNTUyIDM1LjExMzEgNzIuNjYzMiAzMy44MzIxIDcyLjY2MzIgMzIuODEzOUM3Mi42NjMyIDMxLjYzMTQgNzMuMzA4OSAzMC41MTQ2IDc0LjU2OTcgMzAuNTE0NkM3NS44OTE5IDMwLjUxNDYgNzYuNTA2OSAzMS42OTcxIDc2LjUwNjkgMzIuODEzOUM3Ni41MDY5IDMzLjk5NjMgNzUuOTg0MiAzNS4xMTMxIDc0LjUwODIgMzUuMTEzMVpcIlxyXG4gICAgICAgICAgICAgICBmaWxsPVwiI0ZGRjNFN1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgIGQ9XCJNODMuOTc5MiAyOS42Mjc3QzgzLjY3MTcgMjkuNjI3NyA4My40MjU3IDI5LjgyNDggODMuNDI1NyAzMC4xODYxVjMyLjE1NjlIODAuMjg5MVYzMC4xODYxQzgwLjI4OTEgMjkuODI0OCA4MC4wMTI0IDI5LjYyNzcgNzkuNzA0OSAyOS42Mjc3Qzc5LjM2NjYgMjkuNjI3NyA3OS4xNTE0IDI5LjgyNDggNzkuMTUxNCAzMC4xODYxVjM1LjQ3NDRDNzkuMTUxNCAzNS44MzU3IDc5LjMzNTkgMzYgNzkuNzA0OSAzNkM4MC4wNzM5IDM2IDgwLjMxOTkgMzUuODAyOSA4MC4zMTk5IDM1LjQ0MTZWMzMuMDEwOUg4My40NTY0VjM1LjQwODdDODMuNDU2NCAzNS43MDQ0IDgzLjYxMDIgMzUuOTY3MSA4NC4wNDA3IDM1Ljk2NzFDODQuMzQ4MiAzNS45NjcxIDg0LjU5NDIgMzUuODAyOSA4NC41OTQyIDM1LjQ0MTZWMzAuMTg2MUM4NC41NjM0IDI5LjgyNDggODQuMjg2NyAyOS42Mjc3IDgzLjk3OTIgMjkuNjI3N1pcIlxyXG4gICAgICAgICAgICAgICBmaWxsPVwiI0ZGRjNFN1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgIGQ9XCJNOTEuMDgyNiAyOS42Mjc3QzkwLjc0NDQgMjkuNjI3NyA5MC41NTk5IDI5Ljc5MTkgOTAuMTkwOSAzMC4yODQ3TDg3LjIzODggMzQuMTI3N1YzMC4xODYxQzg3LjIzODggMjkuODI0OCA4Ni45NjIxIDI5LjYyNzcgODYuNjU0NiAyOS42Mjc3Qzg2LjM0NzEgMjkuNjI3NyA4Ni4xMDExIDI5LjgyNDggODYuMTAxMSAzMC4xODYxVjM1LjM3NTlDODYuMTAxMSAzNS45MzQzIDg2LjM0NzEgMzYuMDMyOCA4Ni42NTQ2IDM2LjAzMjhDODYuOTkyOCAzNi4wMzI4IDg3LjIzODggMzUuODAyOSA4Ny43MzA4IDM1LjE0Nkw5MC40Njc2IDMxLjUzMjhWMzUuNTA3M0M5MC40Njc2IDM1LjgwMjkgOTAuNjIxNCAzNiA5MS4wMjExIDM2QzkxLjQyMDkgMzYgOTEuNjA1NCAzNS44MzU3IDkxLjYwNTQgMzUuNDc0NFYzMC4xODYxQzkxLjU3NDYgMjkuODU3NiA5MS40MjA5IDI5LjYyNzcgOTEuMDgyNiAyOS42Mjc3WlwiXHJcbiAgICAgICAgICAgICAgIGZpbGw9XCIjRkZGM0U3XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgZD1cIk05Ny40NDc1IDI5LjYyNzdIOTUuMzU2NUM5NC4yNDk1IDI5LjYyNzcgOTIuOTg4NyAzMC4xNTMzIDkyLjk4ODcgMzEuNUM5Mi45ODg3IDMyLjQ1MjUgOTMuNzg4MiAzMy4wMTA5IDk0LjgwMyAzMy4xMDk1TDkzLjA1MDIgMzUuMDgwM0M5Mi44OTY1IDM1LjI0NDUgOTIuODM1IDM1LjQ0MTYgOTIuODM1IDM1LjU3M0M5Mi44MzUgMzUuODY4NiA5My4wODEgMzYuMDMyOCA5My4zODg1IDM2LjAzMjhDOTMuNjAzNyAzNi4wMzI4IDkzLjc4ODIgMzUuOTM0MyA5My45NDIgMzUuNzcwMUw5Ni4wMzMgMzMuMjQwOUg5Ny4xMDkzVjM1LjQ3NDRDOTcuMTA5MyAzNS44MzU3IDk3LjM4NiAzNiA5Ny42OTM1IDM2Qzk4LjAzMTggMzYgOTguMjQ3IDM1LjgwMjkgOTguMjQ3IDM1LjQ3NDRWMzAuMjg0N0M5OC4yMTYzIDI5Ljc1OTEgOTguMDMxOCAyOS42Mjc3IDk3LjQ0NzUgMjkuNjI3N1pNOTcuMDQ3OCAzMi40NTI1SDk1LjU3MTdDOTQuODk1MiAzMi40NTI1IDk0LjIxODcgMzIuMjIyNiA5NC4yMTg3IDMxLjVDOTQuMjE4NyAzMC44MTAyIDk0LjgzMzcgMzAuNTE0NiA5NS42MzMyIDMwLjUxNDZIOTcuMDQ3OFYzMi40NTI1WlwiXHJcbiAgICAgICAgICAgICAgIGZpbGw9XCIjRkZGM0U3XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgZD1cIk01LjUzNTA2IDIwLjE2NzlWMTYuMjU5MUM1LjYyNzMxIDE2LjM5MDUgNS42NTgwNiAxNi41MjE5IDUuNzUwMzEgMTYuNjUzM0M1Ljc1MDMxIDE2LjY1MzMgOS40NDAzNSAyMS4xMjA0IDEwLjg4NTYgMjIuNjk3MUMxMi4yMDc5IDI0LjE0MjMgMTMuMjIyNiAyNC40MzggMTQuNDIxOSAyNC40MzhDMTYuMjM2MiAyNC40MzggMTcuNTg5MiAyMi4wMDczIDE1LjUyODkgMjAuMDY5M0wxMC4xMTY5IDE0LjgxMzlDOS45OTM4NSAxNC43MTUzIDEwLjAyNDYgMTQuNTE4MiAxMC4xNDc2IDE0LjQxOTdMMTQuMTE0NCAxMS41MjkyQzE0Ljk3NTQgMTAuODM5NCAxNS41Mjg5IDkuOTE5NzEgMTUuNTI4OSA5LjEzMTM5QzE1LjUyODkgOC4wODAyOSAxNC41MTQxIDcuMjU5MTIgMTMuMTkxOSA3LjI1OTEyQzEyLjIwNzkgNy4yNTkxMiAxMS4zNDY5IDcuNjIwNDQgMTAuMzMyMSA4LjU3Mjk5TDUuOTk2MzEgMTIuNTgwM0M1LjgxMTgxIDEyLjc0NDUgNS42ODg4MSAxMi45NzQ1IDUuNTM1MDYgMTMuMjA0NFYxMi4zMTc1VjMuNjEzMTRDNS41MzUwNiAxLjE4MjQ4IDQuNjQzMyAwIDIuNzY3NTMgMEMwLjg5MTc1OSAwIDAgMS4xODI0OCAwIDMuNjEzMTRWMjAuMTY3OUMwIDIyLjU5ODUgMC44OTE3NTkgMjMuNzgxIDIuNzk4MjggMjMuNzgxQzQuNzA0OCAyMy43ODEgNS41MzUwNiAyMi41NjU3IDUuNTM1MDYgMjAuMTY3OVpcIlxyXG4gICAgICAgICAgICAgICBmaWxsPVwiI0ZGRjNFN1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgIGQ9XCJNMjYuOTY4MiA2LjM3MjI4QzIxLjQ5NDYgNi4zNzIyOCAxNy41Mjc4IDEwLjAxODMgMTcuNTI3OCAxNS4xNzUyQzE3LjUyNzggMjAuMzMyMSAyMS40OTQ2IDIzLjk3ODEgMjYuOTY4MiAyMy45NzgxQzMyLjQ3MjUgMjMuOTc4MSAzNi4zNzc4IDIwLjM2NSAzNi4zNzc4IDE1LjIwODFDMzYuMzc3OCAxMC4wMTgzIDMyLjQ3MjUgNi4zNzIyOCAyNi45NjgyIDYuMzcyMjhaTTI2Ljk2ODIgMjAuMDAzN0MyNC44NDY0IDIwLjAwMzcgMjMuMjQ3NCAxNy43NzAxIDIzLjI0NzQgMTUuMTc1MkMyMy4yNDc0IDEyLjU4MDMgMjQuOTA3OSAxMC4zNzk2IDI2Ljk2ODIgMTAuMzc5NkMyOS4wMjg0IDEwLjM3OTYgMzAuNjU4MiAxMi42NDYgMzAuNjU4MiAxNS4xNDI0QzMwLjYyNzUgMTcuNzA0NCAyOS4wODk5IDIwLjAwMzcgMjYuOTY4MiAyMC4wMDM3WlwiXHJcbiAgICAgICAgICAgICAgIGZpbGw9XCIjRkZGM0U3XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgZD1cIk01OC40ODcxIDE4LjU1ODRDNjAuNTc4MiAxNi44MTc1IDYxLjY1NDQgMTUuNjY3OSA2MS42NTQ0IDE0LjQ1MjZDNjEuNjU0NCAxMy4yNzAxIDYwLjY3MDQgMTIuMzUwNCA1OS41MDE5IDEyLjM1MDRDNTguMjQxMSAxMi4zNTA0IDU3LjEwMzQgMTMuNTMyOCA1NS40MTIxIDE1LjQwNTFMNTEuOTA2NiAxMS43OTJDNTQuNzA0OSAxMC4yNDgyIDU2LjI3MzEgNy44MTc1MiA1Ni4yNzMxIDUuNDg1NEM1Ni4yNzMxIDIuNDYzNSA1My40NDQxIDAgNDguOTg1MyAwQzQ0LjU1NzMgMCA0MS42OTc1IDIuMzMyMTIgNDEuNjk3NSA1LjI1NTQ4QzQxLjY5NzUgNi44NjQ5NiA0Mi40OTcgOC45MDE0NiA0NC4wOTYgMTAuNDEyNEM0MC4yMjE1IDEyLjEyMDQgMzguMzE0OSAxNC4zNTQgMzguMzE0OSAxNy4zMTAyQzM4LjMxNDkgMjEuMjUxOCA0MS44MjA1IDI0LjI0MDkgNDYuNzQwNSAyNC4yNDA5QzQ5Ljk2OTMgMjQuMjQwOSA1Mi42NzUzIDIzLjM1NCA1NC43MDQ5IDIxLjcxMTdDNTYuMzAzOSAyMy41ODM5IDU3LjMxODYgMjQuMjQwOSA1OC40MjU2IDI0LjI0MDlDNTkuNzc4NyAyNC4yNDA5IDYwLjczMTkgMjMuMTI0MSA2MC43MzE5IDIxLjkwODhDNjAuNjcwNCAyMC44MjQ4IDU5Ljg0MDIgMTkuOTM4IDU4LjQ4NzEgMTguNTU4NFpNNDcuMzg2MyAyMC42OTM0QzQ1LjI5NTMgMjAuNjkzNCA0NC4wMzQ1IDE4Ljg1NCA0NC4wMzQ1IDE3LjE3ODhDNDQuMDM0NSAxNS43OTkzIDQ1LjE3MjMgMTQuNTE4MiA0Ny4xNzEgMTMuNjY0Mkw1MS42NjA2IDE4LjQ5MjdDNTAuMjQ2MSAxOS42MDk1IDQ4Ljc3MDEgMjAuNjkzNCA0Ny4zODYzIDIwLjY5MzRaTTQ4LjkyMzggOC43MzcyM0M0Ny42MDE1IDcuNjUzMjkgNDYuOTU1OCA2LjI0MDg4IDQ2Ljk1NTggNS4zODY4NkM0Ni45NTU4IDQuNDAxNDYgNDcuNzg2IDMuMDIxOSA0OS4yNjIxIDMuMDIxOUM1MC45MjI2IDMuMDIxOSA1MS43MjIxIDQuMTA1ODQgNTEuNzIyMSA1LjQ4NTRDNTEuNjkxMyA2LjYzNTA0IDUwLjc5OTYgOC4wNDc0NSA0OC45MjM4IDguNzM3MjNaXCJcclxuICAgICAgICAgICAgICAgZmlsbD1cIiNGRkYzRTdcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICBkPVwiTTc3LjIxNDIgMTguNjg5OEM3Ni4yOTE3IDE4LjY4OTggNzUuMDMwOSAyMC4wMDM3IDczLjQwMTIgMjAuMDAzN0M3MC44NDg5IDIwLjAwMzcgNjkuMzQyMSAxNy44MDI5IDY5LjM0MjEgMTUuMjQwOUM2OS4zNDIxIDEyLjY3ODggNzAuOTQxMSAxMC4zNzk2IDczLjE4NTkgMTAuMzc5NkM3NC43ODQ5IDEwLjM3OTYgNzYuMDc2NCAxMS42OTM0IDc3LjEyMiAxMS42OTM0Qzc4LjQ3NSAxMS42OTM0IDc5LjQyODIgMTAuNzczNyA3OS40MjgyIDkuNTkxMjVDNzkuNDI4MiA3LjcxODk5IDc2Ljk2ODIgNi40MDUxMiA3My4yMTY3IDYuNDA1MTJDNjcuMzc0MSA2LjQwNTEyIDYzLjY1MzMgMTAuMDg0IDYzLjY1MzMgMTUuMjA4QzYzLjY1MzMgMjAuNDYzNSA2Ny40MzU2IDIzLjk3ODEgNzIuODc4NCAyMy45NzgxQzc2Ljc1MjkgMjMuOTc4MSA3OS40MjgyIDIyLjU2NTcgNzkuNDI4MiAyMC44MjQ4Qzc5LjM2NjcgMTkuNjQyMyA3OC41MDU3IDE4LjY4OTggNzcuMjE0MiAxOC42ODk4WlwiXHJcbiAgICAgICAgICAgICAgIGZpbGw9XCIjRkZGM0U3XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgZD1cIk05MC42MjEgNi4zNzIyOEM4NS4xNDc1IDYuMzcyMjggODEuMTgwNyAxMC4wMTgzIDgxLjE4MDcgMTUuMTc1MkM4MS4xODA3IDIwLjMzMjEgODUuMTQ3NSAyMy45NDUzIDkwLjYyMSAyMy45NDUzQzk2LjEyNTMgMjMuOTQ1MyAxMDAuMDMxIDIwLjMzMjEgMTAwLjAzMSAxNS4xNzUyQzk5Ljk5OTggMTAuMDE4MyA5Ni4xMjUzIDYuMzcyMjggOTAuNjIxIDYuMzcyMjhaTTkwLjYyMSAyMC4wMDM3Qzg4LjQ5OTIgMjAuMDAzNyA4Ni45MDAyIDE3Ljc3MDEgODYuOTAwMiAxNS4xNzUyQzg2LjkwMDIgMTIuNTgwMyA4OC41NjA3IDEwLjM3OTYgOTAuNjIxIDEwLjM3OTZDOTIuNjgxMyAxMC4zNzk2IDk0LjMxMSAxMi42NDYgOTQuMzExIDE1LjE0MjRDOTQuMjgwMyAxNy43MDQ0IDkyLjc0MjggMjAuMDAzNyA5MC42MjEgMjAuMDAzN1pcIlxyXG4gICAgICAgICAgICAgICBmaWxsPVwiI0ZGRjNFN1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgIDwvZz5cclxuICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgIDxjbGlwUGF0aCBpZD1cImNsaXAwXCI+XHJcbiAgICAgICAgICAgICAgIDxyZWN0IHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMzZcIiBmaWxsPVwid2hpdGVcIiAvPlxyXG4gICAgICAgICAgICA8L2NsaXBQYXRoPlxyXG4gICAgICAgICA8L2RlZnM+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICApO1xyXG59OyIsImV4cG9ydCBjb25zdCBBYkxvZ28gPSAoKSA9PiB7XHJcbiAgIHJldHVybiAoXHJcbiAgICAgIDxzdmdcclxuICAgICAgICAgd2lkdGg9XCIxMjdcIlxyXG4gICAgICAgICBoZWlnaHQ9XCIzOFwiXHJcbiAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTI3IDM4XCJcclxuICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgPlxyXG4gICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICBkPVwiTTIzLjA3NjcgMzcuOTk5N0MxNy4yODYxIDM3Ljg5NjcgMTEuNjE4MiAzNi4yODgyIDYuNzEwOTcgMzIuMjg2MkMzLjk2MjkgMzAuMDM0MiAxLjg1Mjc3IDI3LjI1NDcgMC43NjA5MDcgMjMuNzQxNkMtMC44MzM5NTYgMTguNTgxNSAwLjExMDY5NCAxMy44MjAyIDMuMTY1NDcgOS41MzUwN0M2LjE4MzQ0IDUuMzAxNDEgMTAuMzA1NSAyLjcxNDg4IDE1LjA3NzkgMS4yOTkzN0MyMi4yNDI1IC0wLjg0OTYyOCAyOS4yNzIxIC0wLjM3MzUwMSAzNi4wMTk2IDMuMDQ5NDZDMzkuNzg2IDQuOTUzOTYgNDIuOTI2NiA3LjY4MjA0IDQ0LjkwMTggMTEuNjA2OUM0Ny45MTk4IDE3LjU3NzcgNDcuMzMwOSAyMy4zMjk5IDQzLjQ3ODcgMjguNjU3M0M0MC4yNzY3IDMzLjA5NjkgMzUuODM1NiAzNS41ODA0IDMwLjc5MzQgMzYuOTk2QzI4LjM4ODggMzcuNjc4IDI1LjkxMDcgMzcuOTYxMSAyMy4wNzY3IDM3Ljk5OTdaTTM1LjQ2NzYgMjIuMjIzMkMzMy43OTkxIDIxLjUxNTQgMzIuMTc5NyAyMS4xOTM3IDMwLjQ3NDQgMjEuNTU0QzI4LjM2NDMgMjEuOTkxNiAyNi43OTQgMjMuODMxNyAyNi43Njk0IDI1LjkwMzVDMjYuNzQ0OSAyNy44MzM3IDI4LjE4MDMgMjkuNTcxIDMwLjE5MjMgMzAuMDIxNEMzMi41OTY4IDMwLjU3NDcgMzUuODg0NyAyOS4xMzM0IDM3LjI0NjUgMjYuOTU4N0MzNy40MDU5IDI2LjcwMTMgMzcuMzY5MSAyNi41NzI3IDM3LjE4NTEgMjYuMzY2OEMzNi4xNTQ2IDI1LjI4NTggMzUuMjIyMiAyNS4yODU4IDM0LjI1MyAyNi40MTgyQzMzLjUwNDcgMjcuMjkzMyAzMi41OTY4IDI3Ljg1OTUgMzEuNDkyNyAyOC4wNzgyQzI5LjU2NjYgMjguNDY0MyAyOC4xMDY3IDI3LjE3NzUgMjguMzc2NiAyNS4zMzczQzI4LjU0ODMgMjQuMTkyIDI5LjQ5MyAyMy4yNTI2IDMwLjc2ODkgMjIuOTgyNEMzMi41MzU1IDIyLjYwOTIgMzQuMDQ0NSAyMy4yNjU1IDM1LjM4MTcgMjQuMzU5M0MzNi41MTA0IDI1LjI3MyAzNy41NTMyIDI2LjMxNTMgMzguNjQ1IDI3LjI4MDRDMzkuNDkxNSAyOC4wMjY4IDQwLjQ5NzUgMjguMzQ4NSA0MS42MDE3IDI4LjI1ODRDNDEuNzczNCAyOC4yNDU1IDQyLjAwNjUgMjguMzIyNyA0Mi4wOTI0IDI4LjEwNEM0Mi4xNTM3IDI3LjkzNjcgNDEuOTk0MiAyNy43ODIzIDQxLjg4MzggMjcuNjY2NUM0MS40Mjk5IDI3LjIxNjEgNDEuNTc3MSAyNi44Njg2IDQxLjg5NjEgMjYuMzY2OEM0NC43MyAyMS44ODg2IDQ1LjAxMjIgMTcuMjU2IDQyLjQ2MDQgMTIuNTU5MUM0MC41MDk4IDguOTY4ODYgMzcuNDkxOCA2LjYxMzk3IDMzLjkzNDEgNS4wMTgzQzI3Ljc4NzcgMi4yNjQ0OSAyMS41MDY0IDIuMDcxNDcgMTUuMTI2OSA0LjEwNDY2QzE0Ljg2OTMgNC4xODE4NyAxNC42MzYyIDQuMjcxOTQgMTQuMzU0IDQuMjMzMzRDMTMuMDkwNCA0LjExNzUzIDExLjg3NTkgNC4zNzQ4OSAxMC42NzM2IDQuNzIyMzNDMTAuMTk1MSA0Ljg2Mzg4IDEwLjI2ODcgNS4wNTY5MSAxMC41MDE4IDUuMzc4NjJDMTEuMTM5OCA2LjI1MzY2IDExLjgzOTEgNy4wNTE0OSAxMi42NzMzIDcuNzIwNjRDMTQuMjE5MSA4LjkzMDI2IDE1Ljg5OTggOS4zMTYzMSAxNy43NjQ2IDguNjcyODlDMTguMTU3MiA4LjUzMTM0IDE4LjI0MzEgOC4zNzY5MiAxNy45NDg2IDguMDAzNzRDMTcuMDc3NiA2Ljg4NDIgMTUuOTYxMiA2LjE3NjQ1IDE0LjY4NTMgNS43MjYwNkMxNC41NTAzIDUuNjc0NTkgMTQuNDE1NCA1LjYzNTk4IDE0LjI4MDQgNS41ODQ1MUMxNC4xNDU1IDUuNTMzMDMgMTMuOTg2IDUuNTMzMDMgMTMuODYzMyA1LjI4ODU0QzE1LjcxNTggNS42MjMxMSAxNy4zMzUyIDYuMjI3OTIgMTguNTAwNyA3LjkwMDhDMTguNTc0MyA3LjIwNTkxIDE4LjM3OCA2LjcwNDA1IDE4LjEwODEgNi4yMTUwNUMxNy44MzgyIDUuNzI2MDYgMTcuMzg0MyA1LjQxNzIyIDE2Ljk0MjYgNS4wMTgzQzE3LjIxMjUgNC45NDEwOSAxNy40MDg4IDQuODg5NjIgMTcuNjA1MSA0LjgzODE1QzIwLjM1MzIgNC4xOTQ3MyAyMy4xMzgxIDQuMDI3NDUgMjUuOTQ3NSA0LjI5NzY4QzI5LjYyNzkgNC42NTc5OSAzMy4wODc2IDUuNzM4OTMgMzYuMjAzNyA3LjgzNjQ2QzM5LjcwMDEgMTAuMTkxMyA0Mi4yMzk2IDEzLjI5MjYgNDIuNzY3MSAxNy43OTY1QzQzLjEyMjkgMjAuODA3NyA0Mi4yNTE5IDIzLjQ5NzEgNDAuNTgzNCAyNS45NDIxQzM5LjkwODcgMjUuMzUwMiAzOS4yODMgMjQuNzcxMSAzOC42MzI4IDI0LjIxNzhDMzguNDM2NSAyNC4wNTA1IDM4LjQyNDIgMjMuODcwMyAzOC40NjEgMjMuNjUxNkMzOC41NTkyIDIyLjk4MjQgMzguNDczMyAyMi4zMjYxIDM4LjMxMzggMjEuNjgyN0MzNy43NDk1IDE5LjM2NjQgMzYuMzM4NiAxNy43MzIyIDM0LjUyMjkgMTYuNDE5NkMzNC4zMTQ0IDE2LjI2NTIgMzQuMDkzNSAxNi4xODggMzQuMTc5NCAxNS43ODlDMzQuNTk2NSAxMy44ODQ1IDMzLjk4MzEgMTIuMjc2IDMyLjY4MjcgMTAuOTUwNkMzMS4wMzg4IDkuMjc3NyAyOC45Nzc3IDguNTk1NjggMjYuNzY5NCA4LjI5OTcxQzI1LjQwNzcgOC4xMTk1NiAyNC4wMzM2IDguMTQ1MjkgMjIuNjcxOSA4LjI5OTcxQzIyLjI1NDggOC4zNTExOSAyMi4xMTk4IDguMjIyNSAyMi4yMDU3IDcuNzg0OThDMjIuMzAzOCA3LjMyMTcyIDIyLjM1MjkgNi44NTg0NyAyMi40MjY1IDYuMzk1MjFDMjIuNDYzMyA2LjE3NjQ1IDIyLjUwMDEgNS45NzA1NiAyMi4xNjg5IDUuOTU3NjlDMjEuMDI3OSA1LjkzMTk1IDIwLjA3MSA2LjI3OTM5IDE5LjQ1NzYgNy4zNDc0NkMxOS4yNDkxIDcuNzA3NzcgMTkuMDUyOCA4LjA5MzgyIDE4Ljg5MzMgOC40OTI3NEMxOC43MzM4IDguOTA0NTIgMTguNDUxNiA5LjA5NzU0IDE4LjA0NjggOS4yMjYyM0MxNi4xNTc1IDkuODMxMDQgMTQuMzc4NiAxMC42ODAzIDEyLjc4MzcgMTEuOTE1N0MxMi40NzcgMTIuMTQ3MyAxMi4xMzM1IDEyLjM1MzIgMTEuODg4MSAxMi45MTk0QzEzLjgzODggMTIuMjExNyAxNS42MTc3IDExLjQzOTYgMTcuNTU2IDExLjA1MzVDMTcuNTE5MiAxMS4xODIyIDE3LjQ5NDcgMTEuMjU5NCAxNy40NTc5IDExLjMzNjZDMTUuNzc3MiAxNC41Nzk0IDE0LjA5NjQgMTcuODA5NCAxMi40NDAyIDIxLjA1MjJDMTIuMjgwNyAyMS4zNjEgMTIuMTIxMiAyMS4zOTk2IDExLjgxNDUgMjEuMzczOUM5LjkwMDcgMjEuMjA2NiA4LjAxMTQgMjEuMjgzOCA2LjI1NzA1IDIyLjIyMzJDNS43MTcyNSAyMi41MDYzIDUuMzEyNCAyMi45ODI0IDQuODA5NDEgMjMuMzk0MkMzLjk5OTcxIDIxLjMyMjQgMy43NDIwNyAxOS4yNTA2IDQuMTIyMzkgMTcuMTAxNkM0LjcxMTI2IDEzLjc4MTYgNi40OTAxNSAxMS4yMzM3IDguOTE5MjQgOS4xMjMyOEM5LjY2NzYgOC40NjcgMTAuNTAxOCA3LjkyNjUzIDExLjMzNjEgNy4zNzMyQzEwLjUxNDEgNi43ODEyNiA5LjcyODk0IDYuODA2OTkgOC44NTc5IDcuNDUwNDFDOC4wMjM2NyA4LjA0MjM1IDcuMjM4NSA4LjczNzIzIDYuNTM5MjIgOS41MjIyQzIuODQ2NSAxMy42OTE1IDEuNTMzOCAxOC40MTQyIDMuNTcwMzIgMjMuODgzMkMzLjgyNzk1IDI0LjU2NTIgNC4xNDY5MiAyNS4xODI5IDQuMDg1NTggMjUuOTU1QzQuMDYxMDUgMjYuMjg5NiA0LjIzMjggMjYuNjExMyA0LjQxNjgyIDI2LjkwNzJDNS4wNjcwNCAyNy45ODgyIDYuMzQyOTMgMjguNDkgNy43MDQ2OSAyOC4xOTQxQzkuNzI4OTQgMjcuNzU2NSAxMS4xMTUyIDI2LjM1MzkgMTIuMzQyMSAyNC43MzI1QzEyLjYyNDIgMjQuMzU5MyAxMi45MzA5IDIzLjk5OSAxMy4wOTA0IDIzLjQ5NzFDMTEuOTM3MiAyMy4yNzg0IDEwLjk5MjYgMjMuNDg0MyAxMC4yOTMzIDI0LjUyNjZDMTAuMDM1NiAyNC45MTI2IDkuNzA0NDEgMjUuMjQ3MiA5LjM3MzE3IDI1LjU2ODlDOC42OTg0MiAyNi4yMTIzIDcuOTg2ODYgMjYuNzc4NSA3LjA0MjIxIDI2Ljg4MTVDNi4zOTIgMjYuOTU4NyA1LjgwMzEzIDI2LjgwNDMgNS40NDczNSAyNi4xNzM3QzUuMDkxNTcgMjUuNTMwMyA1LjI4Nzg2IDI0LjkyNTUgNS42ODA0NSAyNC4zODVDNi4yOTM4NSAyMy41MjI5IDcuMjAxNyAyMy4xNjI2IDguMTU4NjIgMjIuOTk1M0MxMC45NjggMjIuNDkzNCAxMy42MzAyIDIzLjIwMTIgMTYuMjU1NiAyNC4xNjYzQzE2LjUzNzggMjQuMjY5MiAxNi41NTAxIDI0LjQyMzcgMTYuNTAxIDI0LjcwNjhDMTYuMzA0NyAyNS43MzYyIDE2LjEzMjkgMjYuNzY1NyAxNS45NzM0IDI3LjgwOEMxNS45MzY2IDI4LjAxMzkgMTUuODAxNyAyOC4yODQxIDE2LjE5NDMgMjguMzA5OUMxNy43Mjc4IDI4LjQxMjggMTkuMTUwOSAyNy45NzUzIDE5LjQ0NTMgMjYuMDgzN0MxOS40NTc2IDI1Ljk4MDcgMTkuNDQ1MyAyNS44MjYzIDE5LjU5MjYgMjUuNzQ5MUMxOS42OTA3IDI1LjgwMDYgMTkuODAxMSAyNS44NTIgMTkuOTExNSAyNS45MTY0QzIxLjMxMDEgMjYuNjc1NiAyMi42OTY0IDI3LjQzNDggMjQuMTA3MiAyOC4xODEyQzI1LjA2NDIgMjguNjgzMSAyNS42MTYyIDI4LjM3NDIgMjUuNzUxMiAyNy4zMDYxQzI2LjAyMTEgMjUuMjQ3MiAyNi4zMjc4IDIzLjIwMTIgMjYuNjEgMjEuMTQyMkMyNi42NDY4IDIwLjg0NjMgMjYuNzMyNiAyMC43MDQ3IDI3LjA1MTYgMjAuNjY2MUMyOS4xOTg1IDIwLjQwODggMzEuMjEwNSAxOS43NzgyIDMyLjg0MjIgMTguMTgyNUMzMy4wMzg1IDE3Ljk4OTUgMzMuMTQ4OSAxOC4wNzk2IDMzLjI5NjEgMTguMjIxMUMzNC40NDkzIDE5LjI1MDYgMzUuMjIyMiAyMC41MjQ2IDM1LjQ2NzYgMjIuMjIzMlpNMzkuODcxOCAyOC44MTE3QzM5LjA0OTkgMjguNDUxNCAzOC4zMzgzIDI4LjU5MyAzNy42NzU4IDI5LjA2OTFDMzcuMDk5MiAyOS40ODA5IDM2LjU1OTQgMjkuOTQ0MSAzNS45NTgzIDMwLjMwNDVDMzAuMDMyOCAzMy45NDYyIDIzLjcwMjQgMzQuNjI4MiAxNy4wODk4IDMzLjAzMjVDMTQuMjY4MiAzMi4zNTA1IDExLjY3OTYgMzEuMTAyMyA5LjM2MDkgMjkuMjg3OUM4LjY0OTM1IDI4LjczNDUgNy44ODg3MiAyOC40NjQzIDcuMDE3NjggMjguOTE0N0MxNC43MzQ0IDM3LjE2MzIgMzEuNTQxOCAzNy41MzY0IDM5Ljg3MTggMjguODExN1pcIlxyXG4gICAgICAgICAgICBmaWxsPVwiI0ZGRjNFN1wiXHJcbiAgICAgICAgIC8+XHJcbiAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgIGQ9XCJNMTEyLjYzNCAxNC40MzgyQzExMy40MDcgMTIuNDE3OSAxMTQuMTMxIDEwLjUzOTEgMTE0Ljg1NSA4LjY2MDMyQzExNS40MzEgNy4xNTQ3MyAxMTYuMDA4IDUuNjQ5MTQgMTE2LjU5NyA0LjE0MzU2QzExNy4xMzcgMi43NTM3OCAxMTcuNTc4IDIuNDU3ODEgMTE5LjAwMSAyLjQ0NDk0QzExOS40NjggMi40NDQ5NCAxMTkuOTQ2IDIuNDk2NDIgMTIwLjQxMiAyLjQzMjA4QzEyMS4wMTMgMi4zNTQ4NyAxMjEuMjk2IDIuNTg2NSAxMjEuNTQxIDMuMTc4NDRDMTIzLjI4MyA3LjM3MzQ5IDEyNS4wNjIgMTEuNTQyOCAxMjYuODUzIDE1LjcyNUMxMjcuMDc0IDE2LjI1MjYgMTI2Ljk4OCAxNi4zNjg0IDEyNi40NjEgMTYuMzQyN0MxMjUuNjAyIDE2LjMwNDEgMTI0Ljc0MyAxNi4yOTEyIDEyMy44ODQgMTYuMzQyN0MxMjMuMzQ0IDE2LjM4MTMgMTIzLjEyNCAxNi4xNDk3IDEyMi45NjQgMTUuNjczNUMxMjIuNzggMTUuMTMzMSAxMjIuNTM1IDE0LjYwNTUgMTIyLjMzOCAxNC4wNjVDMTIyLjI0IDEzLjc2OSAxMjIuMTA1IDEzLjYyNzUgMTIxLjc3NCAxMy42NDAzQzEyMC4yMTYgMTMuNjY2MSAxMTguNjcgMTMuNjY2MSAxMTcuMTEyIDEzLjY0MDNDMTE2Ljc1NiAxMy42NDAzIDExNi42MDkgMTMuNzY5IDExNi40OTkgMTQuMTAzNkMxMTYuMzY0IDE0LjU2NjkgMTE2LjExOCAxNS4wMTcyIDExNi4wMDggMTUuNDgwNUMxMTUuODYxIDE2LjE2MjUgMTE1LjUxNyAxNi4zNjg0IDExNC44NTUgMTYuMzQyN0MxMTMuMjYgMTYuMjkxMiAxMTEuNjY1IDE2LjMwNDEgMTEwLjA3IDE2LjM0MjdDMTA5LjYyOSAxNi4zNTU1IDEwOS40MiAxNi4xODgzIDEwOS4yNDggMTUuNzc2NUMxMDguODggMTQuODUgMTA4LjQ3NSAxMy45MzYzIDEwOC4wNDYgMTMuMDM1NUMxMDcuNTQzIDExLjk2NzUgMTA2Ljk0MiAxMC45NjM3IDEwNS43MjcgMTAuNjQyQzEwNS41OTIgMTAuNjAzNCAxMDUuNDQ1IDEwLjU5MDYgMTA1LjMxIDEwLjU2NDhDMTA0Ljg4MSAxMC40ODc2IDEwNC42OTcgMTAuNjI5MiAxMDQuNzA5IDExLjEzMUMxMDQuNzQ2IDEyLjY0OTUgMTA0LjcwOSAxNC4xODA4IDEwNC43MzQgMTUuNjk5M0MxMDQuNzQ2IDE2LjE2MjUgMTA0LjY0OCAxNi4zNTU1IDEwNC4xNjkgMTYuMzI5OEMxMDMuMzEgMTYuMjkxMiAxMDIuNDUyIDE2LjMwNDEgMTAxLjU5MyAxNi4zMjk4QzEwMS4yNDkgMTYuMzQyNyAxMDEuMTI3IDE2LjIyNjkgMTAxLjEyNyAxNS44NTM3QzEwMS4xMzkgMTIuMDk2MSAxMDEuMTE0IDguMzUxNDggMTAxLjEzOSA0LjU5Mzk1QzEwMS4xNTEgMy4yMjk5MSAxMDEuOTM2IDIuNDcwNjggMTAzLjIzNyAyLjQ0NDk0QzEwNC43MjEgMi40MDYzNCAxMDQuNzIxIDIuNDA2MzQgMTA0LjcyMSAzLjk1MDUzQzEwNC43MjEgNS4wNDQzMyAxMDQuNzM0IDYuMTM4MTQgMTA0LjcwOSA3LjIzMTk0QzEwNC42OTcgNy42MzA4NiAxMDQuODQ0IDcuNzIwOTMgMTA1LjIgNy43MzM4QzEwNi4wOTUgNy43NTk1NCAxMDYuNzQ2IDcuMzg2MzYgMTA3LjEzOCA2LjU0OTkyQzEwNy40NTcgNS44ODA3NyAxMDcuNzY0IDUuMTk4NzUgMTA4LjA3MSA0LjUyOTZDMTA4Ljg1NiAyLjgzMDk5IDExMC45MTcgMS45MDQ0OCAxMTIuNTg1IDIuNDk2NDJDMTEyLjc5NCAyLjU3MzYzIDExMi44OCAyLjY3NjU3IDExMi44NDMgMi45MDgyQzExMi43NDUgMy41NjQ0OCAxMTIuNjU5IDQuMjIwNzcgMTEyLjU4NSA0Ljg3NzA1QzExMi41NDggNS4xOTg3NSAxMTIuNDc1IDUuNDE3NTEgMTEyLjA3IDUuNDE3NTFDMTExLjQzMiA1LjQxNzUxIDExMS4wMTUgNS44MDM1NiAxMTAuNzcgNi40MDgzN0MxMTAuMzc3IDcuMzk5MjMgMTA5Ljk4NCA4LjM5MDA4IDEwOS4yMjQgOS4yMDA3OUMxMTEuMDAzIDEwLjQ2MTkgMTExLjY2NSAxMi40NjkzIDExMi42MzQgMTQuNDM4MlpNMTE5LjI4NCA2LjM5NTVDMTE4Ljc0NCA3Ljg4ODIyIDExOC4yNjUgOS4yMzkzOSAxMTcuNzc1IDEwLjU5MDZDMTE3LjYyNyAxMC45ODk1IDExNy44OTcgMTAuODk5NCAxMTguMDgxIDEwLjg5OTRDMTE4LjkwMyAxMC44OTk0IDExOS43MTMgMTAuODg2NSAxMjAuNTM1IDEwLjkxMjNDMTIwLjk2NCAxMC45MjUxIDEyMS4wNzUgMTAuODM1MSAxMjAuODkxIDEwLjM3MThDMTIwLjMzOSA5LjExMDcxIDExOS44NDggNy44MjM4OCAxMTkuMjg0IDYuMzk1NVpcIlxyXG4gICAgICAgICAgICBmaWxsPVwiI0ZGRjNFN1wiXHJcbiAgICAgICAgIC8+XHJcbiAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgIGQ9XCJNNjkuMTkyNCAyNS4wNTQ1QzcwLjI4NDIgMjUuNTMwNyA3MS4wODE3IDI2LjI1MTMgNzEuNDI1MiAyNy40MjIzQzcyLjEyNDUgMjkuNzkwMSA3MC42NjQ1IDMyLjE3MDcgNjguMjk2OCAzMi41Njk2QzY3Ljc0NDcgMzIuNjU5NyA2Ny4yMDQ5IDMyLjcxMTIgNjYuNjUyOCAzMi42OTgzQzY0LjcyNjcgMzIuNjg1NCA2Mi44MTI5IDMyLjY4NTQgNjAuODg2OCAzMi42OTgzQzYwLjU0MzMgMzIuNjk4MyA2MC4zODM4IDMyLjYzNCA2MC4zODM4IDMyLjIwOTNDNjAuMzk2MSAyOC40NTE4IDYwLjM4MzggMjQuNzA3MSA2MC4zOTYxIDIwLjk0OTZDNjAuMzk2MSAxOS43MDEzIDYxLjE2OSAxOC44NTIgNjIuMzk1OCAxOC44MTM0QzY0LjAyNzQgMTguNzc0OCA2NS42NzE0IDE4LjY3MTkgNjcuMjkwOCAxOC45MDM1QzY4LjE4NjQgMTkuMDMyMiA2OC45ODM4IDE5LjQwNTQgNjkuNjM0IDIwLjA2MTdDNzAuOTIyMiAyMS4zNjE0IDcwLjkwOTkgMjMuMzMwMiA2OS42MDk1IDI0LjYxN0M2OS40ODY4IDI0Ljc3MTQgNjkuMzUxOCAyNC45MDAxIDY5LjE5MjQgMjUuMDU0NVpNNjMuOTc4NCAyOC40MTMyQzYzLjk3ODQgMjguNzczNSA2My45Nzg0IDI5LjE0NjcgNjMuOTc4NCAyOS41MDdDNjMuOTc4NCAyOS43Mzg2IDY0LjA2NDIgMjkuODU0NCA2NC4yOTczIDI5Ljg1NDRDNjUuMTMxNiAyOS44NDE1IDY1Ljk3ODEgMjkuOTE4NyA2Ni44MDAxIDI5LjcyNTdDNjcuNDYyNSAyOS41NzEzIDY3LjgwNiAyOS4xNDY3IDY3LjgzMDYgMjguNDc3NUM2Ny44NTUxIDI3Ljg3MjcgNjcuNTExNiAyNy4zOTY2IDY2LjkyMjcgMjcuMTkwN0M2Ni4zODI5IDI2Ljk5NzcgNjUuODMwOSAyNy4wNjIgNjUuMjc4OCAyNy4wNDkxQzYzLjk3ODQgMjcuMDM2MyA2My45Nzg0IDI3LjAzNjMgNjMuOTc4NCAyOC40MTMyWk02My45Nzg0IDIyLjk0NDFDNjMuOTc4NCAyMy4yNDAxIDYzLjk3ODQgMjMuNTM2MSA2My45Nzg0IDIzLjg0NDlDNjMuOTc4NCAyMy45OTkzIDYzLjk3ODQgMjQuMTc5NSA2NC4xNzQ3IDI0LjE3OTVDNjQuODg2MiAyNC4xNTM4IDY1LjYxIDI0LjMzMzkgNjYuMjg0OCAyMy45OTkzQzY2Ljc2MzIgMjMuNzY3NyA2Ni45MzUgMjMuMzMwMiA2Ni44OTgyIDIyLjc4OTdDNjYuODYxNCAyMi4yMzY0IDY2LjU0MjQgMjEuOTQwNCA2Ni4wODg1IDIxLjc4NkM2NS44MTg2IDIxLjY5NTkgNjUuNTI0MiAyMS42ODMxIDY1LjI0MiAyMS42NzAyQzYzLjk3ODQgMjEuNjQ0NSA2My45Nzg0IDIxLjY0NDUgNjMuOTc4NCAyMi45NDQxWlwiXHJcbiAgICAgICAgICAgIGZpbGw9XCIjRkZGM0U3XCJcclxuICAgICAgICAgLz5cclxuICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgZD1cIk03OS4zMDE4IDEwLjE5MTdDNzkuMzAxOCA4LjQxNTg3IDc5LjMwMTggNi42MjcxOCA3OS4zMDE4IDQuODUxMzZDNzkuMzE0IDMuMjI5OTYgODAuMDUwMSAyLjQ0NSA4MS41OTU5IDIuNDQ1QzgzLjc2NzQgMi40MzIxMyA4NS45MjY2IDIuNDU3ODcgODguMDk4IDIuNDMyMTNDODguNTM5NyAyLjQzMjEzIDg4LjY4NjkgMi41NzM2OCA4OC42MjU2IDMuMDExMkM4OC42MDEgMy4xNzg0OSA4OC42MjU2IDMuMzU4NjQgODguNjI1NiAzLjUyNTkzQzg4LjYwMSA0Ljc2MTI5IDg4LjExMDMgNS4yODg4OCA4Ni45NDQ4IDUuMjg4ODhDODUuNzc5NCA1LjI4ODg4IDg0LjYxMzkgNS4zMDE3NSA4My40NDg0IDUuMjc2MDJDODMuMDMxMyA1LjI2MzE1IDgyLjg4NDEgNS4zNzg5NiA4Mi44ODQxIDUuODQyMjJDODIuODg0MSA3LjQyNTAyIDgyLjg3MTggNy40MjUwMiA4NC4zODA4IDcuNDI1MDJDODUuMjM5NSA3LjQyNTAyIDg2LjA5ODMgNy40Mzc4OSA4Ni45MzI2IDcuNzA4MTJDODkuMDA1OSA4LjQwMzAxIDkwLjA5NzcgMTAuMDUwMSA4OS45NjI4IDEyLjMyNzhDODkuODUyNCAxNC4yOTY3IDg4LjQxNyAxNS45MTgxIDg2LjM4MDUgMTYuMTg4M0M4NC4xNDc3IDE2LjQ5NzEgODEuODkwMyAxNi4yNjU1IDc5LjY0NTMgMTYuMzE3Qzc5LjI1MjcgMTYuMzI5OSA3OS4zMTQgMTYuMDIxIDc5LjMxNCAxNS43NzY1Qzc5LjMwMTggMTMuOTIzNSA3OS4zMDE4IDEyLjA1NzYgNzkuMzAxOCAxMC4xOTE3Wk04Mi44OTYzIDExLjczNTlDODIuODk2MyAxMi4yMjQ5IDgyLjkyMDkgMTIuNjEwOSA4Mi44OTYzIDEyLjk5N0M4Mi44NzE4IDEzLjM3MDIgODMuMDMxMyAxMy40ODYgODMuMzYyNSAxMy40NjAyQzgzLjgyODcgMTMuNDIxNiA4NC4zMDcyIDEzLjQ0NzQgODQuNzczNCAxMy4zODNDODUuMjg4NiAxMy4zMTg3IDg1Ljc3OTQgMTMuMTI1NyA4Ni4wNDkzIDEyLjYxMDlDODYuNDQxOCAxMS44NjQ2IDg2LjE1OTcgMTAuOTEyMyA4NS40MjM2IDEwLjUzOTFDODQuNjUwNyAxMC4xNTMxIDgzLjc5MTkgMTAuMTc4OCA4My4wMzEzIDEwLjM5NzZDODIuNjc1NSAxMC41MDA1IDgyLjk4MjIgMTEuMzM3IDgyLjg5NjMgMTEuNzM1OVpcIlxyXG4gICAgICAgICAgICBmaWxsPVwiI0ZGRjNFN1wiXHJcbiAgICAgICAgIC8+XHJcbiAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgIGQ9XCJNNjEuMzY1IDEzLjY1MzJDNjAuNjI4OSAxMy42NTMyIDU5Ljg5MjggMTMuNjc5IDU5LjE1NjcgMTMuNjQwM0M1OC43NTE5IDEzLjYxNDYgNTguNTgwMSAxMy43NjkgNTguNDU3NCAxNC4xNTUxQzU4LjI3MzQgMTQuNzQ3IDU4LjAyODEgMTUuMzEzMiA1Ny44NDQgMTUuODkyM0M1Ny43NDU5IDE2LjIxNCA1Ny41OTg3IDE2LjMyOTggNTcuMjc5NyAxNi4zMjk4QzU2LjI5ODIgMTYuMzA0MSA1NS4zMTY4IDE2LjMxNjkgNTQuMzM1MyAxNi4zMjk4QzUzLjk2NzMgMTYuMzQyNyA1My45MzA1IDE2LjIxNCA1NC4wNTMyIDE1Ljg3OTRDNTUuNjExMiAxMS44NjQ1IDU3LjE1NyA3LjgzNjc2IDU4LjcwMjggMy44MDg5OUM1OS4wNzA5IDIuODQzODcgNTkuNzU3OSAyLjM4MDYxIDYwLjc2MzkgMi40MzIwOEM2MS40MTQxIDIuNDU3ODIgNjIuMDc2NiAyLjQ1NzgyIDYyLjcyNjggMi40MzIwOEM2My4wNTggMi40MTkyMiA2My4yMjk4IDIuNTA5MjkgNjMuMzc3IDIuODU2NzRDNjUuMTkyNyA3LjE4MDQ4IDY3LjAzMjkgMTEuNDkxMyA2OC44NjA4IDE1LjgxNTFDNjkuMDA4MSAxNi4xNzU0IDY5LjA1NzEgMTYuMzU1NiA2OC41Nzg3IDE2LjM0MjdDNjcuNTk3MiAxNi4zMTY5IDY2LjYxNTggMTYuMzE2OSA2NS42MzQzIDE2LjM0MjdDNjUuMzE1MyAxNi4zNTU2IDY1LjE1NTkgMTYuMjI2OSA2NS4wNDU0IDE1LjkxOEM2NC44MjQ2IDE1LjMwMDQgNjQuNTQyNSAxNC42OTU1IDY0LjMyMTYgMTQuMDc3OUM2NC4xOTg5IDEzLjczMDQgNjQuMDI3MiAxMy42Mjc1IDYzLjY5NiAxMy42NDAzQzYyLjkxMDggMTMuNjY2MSA2Mi4xMzc5IDEzLjY1MzIgNjEuMzY1IDEzLjY1MzJaTTYxLjI1NDYgNi40MDgzOEM2MC43MjcxIDcuODg4MjMgNjAuMjM2MyA5LjIzOTQgNTkuNzQ1NiAxMC41OTA2QzU5LjYzNTIgMTAuODg2NSA1OS43NTc5IDEwLjkxMjMgNTkuOTc4NyAxMC45MTIzQzYwLjg3NDMgMTAuOTEyMyA2MS43ODIxIDEwLjkxMjMgNjIuNjc3NyAxMC45MTIzQzYyLjkyMzEgMTAuOTEyMyA2My4wMjEyIDEwLjgzNTEgNjIuOTIzMSAxMC41Nzc3QzYyLjM4MzMgOS4yMjY1MyA2MS44NDM1IDcuODc1MzYgNjEuMjU0NiA2LjQwODM4WlwiXHJcbiAgICAgICAgICAgIGZpbGw9XCIjRkZGM0U3XCJcclxuICAgICAgICAgLz5cclxuICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgZD1cIk0xMDYuMjQyIDMyLjY5ODFDMTA2Ljk5MSAzMC43NDIxIDEwNy43MTUgMjguODYzNCAxMDguNDM4IDI2Ljk4NDZDMTA5LjI3MyAyNC44MjI3IDExMC4wOTUgMjIuNjYwOSAxMTAuOTI5IDIwLjUxMTlDMTExLjQ1NiAxOS4xNDc4IDExMS45NTkgMTguODAwNCAxMTMuMzQ2IDE4LjgxMzNDMTE0LjA4MiAxOC44MjYxIDExNC45NjUgMTguNTE3MyAxMTUuNDkzIDE4LjkyOTFDMTE1Ljk5NiAxOS4zMTUxIDExNi4xNDMgMjAuMjE1OSAxMTYuNDM3IDIwLjg5NzlDMTE4LjAyIDI0LjYyOTcgMTE5LjU5IDI4LjM2MTUgMTIxLjE4NSAzMi4wODA0QzEyMS4zOTQgMzIuNTY5NCAxMjEuMzY5IDMyLjczNjcgMTIwLjgwNSAzMi43MTFDMTE5Ljg4NSAzMi42NzI0IDExOC45NjUgMzIuNjg1MyAxMTguMDQ0IDMyLjcxMUMxMTcuNjg5IDMyLjcyMzkgMTE3LjQ5MiAzMi42MjA5IDExNy4zNyAzMi4yNDc3QzExNy4xNzMgMzEuNjQyOSAxMTYuODkxIDMxLjA2MzkgMTE2LjY4MyAzMC40NTlDMTE2LjU3MiAzMC4xMzczIDExNi40MTMgMjkuOTk1OCAxMTYuMDU3IDI5Ljk5NThDMTE0LjUyMyAzMC4wMjE1IDExMi45OSAzMC4wMjE1IDExMS40NTYgMjkuOTk1OEMxMTEuMTEzIDI5Ljk5NTggMTEwLjk0MSAzMC4wOTg3IDExMC44MzEgMzAuNDQ2MkMxMTAuNjM0IDMxLjA3NjcgMTEwLjM3NyAzMS42ODE1IDExMC4xODEgMzIuMzEyMUMxMTAuMDgyIDMyLjYwOCAxMDkuOTQ3IDMyLjcxMSAxMDkuNjUzIDMyLjY5ODFDMTA4LjU2MSAzMi42ODUzIDEwNy40NTcgMzIuNjk4MSAxMDYuMjQyIDMyLjY5ODFaTTExNS4zODIgMjcuMjY3N0MxMTQuODA2IDI1LjgwMDcgMTE0LjI0MSAyNC4zNzI0IDExMy42MTYgMjIuNzg5NkMxMTMuMDM5IDI0LjM4NTIgMTEyLjUzNiAyNS44MTM2IDExMi4wMDggMjcuMjY3N0MxMTMuMTQ5IDI3LjI2NzcgMTE0LjIyOSAyNy4yNjc3IDExNS4zODIgMjcuMjY3N1pcIlxyXG4gICAgICAgICAgICBmaWxsPVwiI0ZGRjNFN1wiXHJcbiAgICAgICAgIC8+XHJcbiAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgIGQ9XCJNODQuOTkzOSAzMi43MTEzQzgzLjY5MzUgMzIuNzExMyA4Mi41NDAzIDMyLjY5ODQgODEuMzc0OCAzMi43MjQyQzgxLjA2ODEgMzIuNzI0MiA4MC45NTc3IDMyLjU4MjYgODAuODQ3MiAzMi4zMTI0QzgwLjQxNzkgMzEuMzIxNSA3OS45NzYyIDMwLjMzMDcgNzkuNTM0NiAyOS4zNTI3Qzc5LjIwMzMgMjguNjMyMSA3OC43OTg1IDI3Ljk2MjkgNzguMTYwNSAyNy40OTk3Qzc3Ljk2NDIgMjcuMzU4MSA3Ny43NDM0IDI3LjIyOTQgNzcuNTEwMyAyNy4xMzkzQzc2LjQ2NzUgMjYuNzUzMyA3Ni4yMzQ0IDI2LjkyMDYgNzYuMjM0NCAyOC4wNjU5Qzc2LjIzNDQgMjkuNDU1NiA3Ni4yMjIxIDMwLjg1ODMgNzYuMjQ2NyAzMi4yNDgxQzc2LjI0NjcgMzIuNTk1NSA3Ni4xNzMxIDMyLjczNzEgNzUuODA1IDMyLjcyNDJDNzQuODg0OSAzMi42OTg0IDczLjk2NDggMzIuNzExMyA3My4wNDQ3IDMyLjcyNDJDNzIuNzYyNSAzMi43MjQyIDcyLjY1MjEgMzIuNjQ3IDcyLjY1MjEgMzIuMzI1M0M3Mi42NjQ0IDI4LjUwMzQgNzIuNjM5OCAyNC42OTQ0IDcyLjY2NDQgMjAuODcyNUM3Mi42NzY2IDE5Ljc3ODcgNzMuMzM5MSAxOS4wOTY3IDc0LjQwNjQgMTguODkwOEM3Ni4xNDg1IDE4LjU2OTEgNzYuMjIyMSAxOC42MjA1IDc2LjIyMjEgMjAuNDIyMUM3Ni4yMjIxIDIxLjQ5MDIgNzYuMjM0NCAyMi41NzExIDc2LjIwOTkgMjMuNjM5MkM3Ni4yMDk5IDIzLjk5OTUgNzYuMjk1NyAyNC4xMTUzIDc2LjY1MTUgMjQuMTI4MkM3Ny42MjA3IDI0LjE3OTYgNzguMzA3NyAyMy43ODA3IDc4LjcyNDkgMjIuODU0MkM3OS4wMzE2IDIyLjE3MjIgNzkuMzI2IDIxLjQ5MDIgNzkuNjQ1IDIwLjgyMUM4MC41NTI4IDE4LjkxNjUgODIuNDc4OSAxOC41MzA1IDg0LjE1OTcgMTguOTE2NUM4NC40MDUgMTguOTY4IDg0LjM2ODIgMTkuMTIyNCA4NC4zNDM3IDE5LjMwMjZDODQuMjgyMyAxOS43NTMgODQuMjA4NyAyMC4xOTA1IDg0LjE4NDIgMjAuNjQwOUM4NC4xMzUxIDIxLjI4NDMgODQuMDk4MyAyMS44NzYyIDgzLjIzOTUgMjEuOTAyQzgyLjgzNDcgMjEuOTE0OCA4Mi41NDAzIDIyLjI2MjMgODIuMzgwOCAyMi42NDgzQzgxLjk2MzcgMjMuNjEzNCA4MS42MjAxIDI0LjY0MjkgODAuOTA4NiAyNS40NDA3QzgwLjc3MzYgMjUuNTk1MiA4MC44MjI3IDI1LjY4NTIgODAuOTY5OSAyNS44MDFDODIuMTM1NCAyNi42NjMyIDgyLjc3MzQgMjcuOTM3MiA4My4zNzQ1IDI5LjIyNEM4My45MTQzIDMwLjM0MzYgODQuNDE3MyAzMS40NzYgODQuOTkzOSAzMi43MTEzWlwiXHJcbiAgICAgICAgICAgIGZpbGw9XCIjRkZGM0U3XCJcclxuICAgICAgICAgLz5cclxuICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgZD1cIk03Ni4yOTU2IDguODY2MTJDNzYuMzkzOCA5LjA4NDg4IDc2LjU3NzggOS4xNDkyMiA3Ni43MjUgOS4yNTIxN0M3OS4wMTkyIDExLjA0MDkgNzguNzAwMiAxNC40NjM4IDc2LjA5OTMgMTUuNjg2M0M3NC40NTU0IDE2LjQ1ODQgNzIuNzEzMyAxNi42MjU3IDcwLjk0NjcgMTYuMzI5N0M3MC4yOTY1IDE2LjIxMzkgNjkuODkxNiAxNS43MTIgNjkuNTYwNCAxNS4xNDU4QzY5LjI3ODIgMTQuNjY5NyA2OS4xMTg3IDE0LjE0MjEgNjguOTIyNSAxMy42Mjc0QzY4Ljc1MDcgMTMuMTY0MSA2OC44NjExIDEzLjA0ODMgNjkuMzAyOCAxMy4xNTEzQzcwLjMwODggMTMuMzk1OCA3MS4zMjcgMTMuNDA4NiA3Mi4zNTc1IDEzLjM3QzcyLjc4NjkgMTMuMzU3MSA3My4yMDQxIDEzLjI1NDIgNzMuNTk2NiAxMy4wNzRDNzQuMDc1MSAxMi44NDI0IDc0LjMzMjcgMTIuNDY5MiA3NC4yOTU5IDExLjkwM0M3NC4yNTkxIDExLjM0OTcgNzMuOTE1NiAxMS4wNjY2IDczLjQ0OTQgMTAuOTM3OUM3Mi42Mjc1IDEwLjcwNjMgNzEuNzkzMiAxMC42OTM0IDcwLjk1OSAxMC43MDYzQzcwLjU0MTkgMTAuNzE5MiA3MC4zNTc4IDEwLjYxNjIgNzAuNDA2OSAxMC4xNDAxQzcwLjQ0MzcgOS43NTQwMyA3MC40MTkyIDkuMzY3OTggNzAuNDE5MiA4Ljk4MTk0QzcwLjQxOTIgNy44NjI0IDcwLjQxOTIgNy44NjI0IDcxLjQ2MiA3Ljg0OTUzQzcyLjE2MTMgNy44NDk1MyA3Mi44NDgzIDcuODQ5NTMgNzMuNTEwOCA3LjU1MzU2QzczLjg2NjUgNy4zODYyNyA3NC4xNDg3IDcuMTU0NjQgNzQuMjIyMyA2Ljc0Mjg2Qzc0LjMyMDUgNi4xMjUxOCA3NC4wMDE1IDUuNzY0ODcgNzMuNDk4NSA1LjU1ODk4QzcyLjYyNzQgNS4xOTg2NiA3MS43MzE5IDUuMjg4NzQgNzAuODM2MyA1LjQxNzQyQzcwLjYxNTUgNS40NTYwMyA3MC4zOTQ2IDUuNTA3NSA3MC4xNzM4IDUuNTcxODRDNjguNzAxNiA1Ljk0NTAyIDY4LjcwMTYgNS45NDUwMiA2OC41OTEyIDQuMzYyMjNDNjguNTkxMiA0LjI3MjE1IDY4LjU3ODkgNC4xOTQ5NCA2OC41Nzg5IDQuMTA0ODZDNjguNTA1MyAyLjk0NjcyIDY4LjUwNTMgMi45NDY3MiA2OS41NzI3IDIuNzAyMjJDNzEuNTIzMyAyLjI2NDcgNzMuNDg2MiAyLjA0NTk0IDc1LjQzNjkgMi42NzY0OEM3NS44NjYzIDIuODE4MDMgNzYuMjgzNCAyLjk5ODE5IDc2LjY2MzcgMy4yNDI2OUM3OC40NjcxIDQuMzg3OTYgNzguNjc1NyA2LjcwNDI1IDc3LjEwNTMgOC4xODQxQzc2Ljg3MjIgOC40NTQzNCA3Ni41OTAxIDguNjM0NDkgNzYuMjk1NiA4Ljg2NjEyWlwiXHJcbiAgICAgICAgICAgIGZpbGw9XCIjRkZGM0U3XCJcclxuICAgICAgICAgLz5cclxuICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgZD1cIk04NS4wOCAxOC44MDA1Qzg2LjE3MTggMTguODAwNSA4Ny4yNzYgMTguODEzNCA4OC4zODAxIDE4LjgwMDVDODguNzIzNiAxOC44MDA1IDg4Ljc0ODEgMTkuMDgzNiA4OC44NDYzIDE5LjMwMjRDODkuNjA2OSAyMC45NzUzIDkwLjM1NTMgMjIuNjYxIDkxLjE3NzIgMjQuNDg4M0M5MS41MzMgMjMuMzk0NSA5MS44NTIgMjIuNDY4IDkyLjE1ODcgMjEuNTI4NkM5Mi4yOTM2IDIxLjEyOTcgOTIuNDA0MSAyMC43MDUgOTIuNTUxMyAyMC4zMTlDOTIuOTU2MSAxOS4yNTA5IDkzLjU2OTUgMTguODI2MyA5NC42NjE0IDE4LjgxMzRDOTUuMTUyMSAxOC44MTM0IDk1LjY0MjggMTguODM5MSA5Ni4xMzM2IDE4LjgwMDVDOTYuNTc1MiAxOC43NzQ4IDk2LjY3MzQgMTguODc3NyA5Ni40ODk0IDE5LjMyODFDOTUuODM5MSAyMC45MjM4IDk1LjIyNTcgMjIuNTMyMyA5NC42IDI0LjEyOEM5My43NzgxIDI2LjIyNTUgOTIuOTU2MSAyOC4zMTAyIDkyLjE0NjQgMzAuNDA3N0M5MS41MzMgMzIuMDAzNCA5MC4zOTIxIDMyLjgyNyA4OC43NDgxIDMyLjgzOThDODguMDM2NiAzMi44NTI3IDg3LjMyNSAzMi44MTQxIDg2LjYxMzUgMzIuNjg1NEM4Ni4yNDU0IDMyLjYyMTEgODYuMDg1OSAzMi40NTM4IDg2LjE1OTYgMzIuMDQyQzg2LjI1NzcgMzEuNDc1OCA4Ni4zNDM2IDMwLjg5NjcgODYuMzkyNyAzMC4zMzA1Qzg2LjQxNzIgMzAuMDM0NSA4Ni41NTIxIDI5Ljk4MzEgODYuNzg1MiAyOS45ODMxQzg3LjIzOTIgMjkuOTk1OSA4Ny42ODA4IDMwLjAwODggODguMTM0NyAyOS45ODMxQzg5LjIxNDMgMjkuOTE4NyA4OS42ODA1IDI5LjEwOCA4OS4yMjY2IDI4LjExNzJDODcuOTAxNiAyNS4yMjE4IDg2LjU4ODkgMjIuMzI2NCA4NS4yNzYyIDE5LjQzMTFDODUuMTY1OCAxOS4yNjM4IDg1LjAzMDkgMTkuMDgzNiA4NS4wOCAxOC44MDA1WlwiXHJcbiAgICAgICAgICAgIGZpbGw9XCIjRkZGM0U3XCJcclxuICAgICAgICAgLz5cclxuICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgZD1cIk05NS41MiA4LjA2ODQzQzk1LjkzNzEgNi43Njg3NCA5Ni4zMTc0IDUuNTcxOTkgOTYuNzEgNC4zNzUyNEM5Ny4yMDA3IDIuODQzOTEgOTcuNzE2IDIuNDU3ODcgOTkuMjYxNyAyLjQ0NUM5OS44MDE1IDIuNDQ1IDEwMC4zNTQgMi40NDUgMTAwLjk3OSAyLjQ0NUMxMDAuMzU0IDQuMDQwNjYgOTkuNzY0NyA1LjU1OTEyIDk5LjE2MzYgNy4wNzc1OEM5OC4yNTU4IDkuMzkzODYgOTcuMzYwMiAxMS42OTczIDk2LjQ1MjMgMTQuMDEzNkM5NS44MDIxIDE1LjY4NjUgOTQuNjczNSAxNi40NzE0IDkyLjk1NTkgMTYuNDg0M0M5Mi4yNDQ0IDE2LjQ4NDMgOTEuNTMyOCAxNi40MzI4IDkwLjgyMTIgMTYuMjc4NEM5MC40Nzc3IDE2LjIxNCA5MC4zNzk2IDE2LjA0NjggOTAuNDUzMiAxNS43MTIyQzkwLjQ2NTUgMTUuNjQ3OCA5MC40Nzc3IDE1LjU4MzUgOTAuNDkgMTUuNTE5MkM5MC41NzU5IDE0LjkyNzIgOTAuNDc3NyAxNC4xODA5IDkwLjc4NDQgMTMuNzgxOUM5MS4xMTU3IDEzLjM0NDQgOTEuODY0IDEzLjcwNDcgOTIuNDE2MSAxMy42Mjc1QzkyLjgzMzIgMTMuNTYzMiA5My4yMTM1IDEzLjQ0NzQgOTMuNDk1NyAxMy4wOTk5QzkzLjc5MDEgMTIuNzUyNSA5My44NzYgMTIuNDMwOCA5My42NTUyIDExLjk1NDdDOTIuMjgxMiA4Ljk5NDk1IDkwLjkzMTcgNi4wMjIzOCA4OS41ODIyIDMuMDQ5ODFDODkuNTA4NSAyLjg4MjUyIDg5LjQzNDkgMi43MDIzNiA4OS4zMTIzIDIuNDMyMTNDOTAuNTE0NSAyLjQzMjEzIDkxLjY0MzIgMi40MzIxMyA5Mi43NzE5IDIuNDMyMTNDOTMuMDc4NiAyLjQzMjEzIDkzLjA5MDkgMi43MTUyMyA5My4xNzY3IDIuOTA4MjZDOTMuODYzOCA0LjQzOTU4IDk0LjU1MDggNS45NTgwNCA5NS4yMzc4IDcuNDg5MzZDOTUuMjk5MSA3LjY1NjY1IDk1LjM4NSA3Ljc5ODIgOTUuNTIgOC4wNjg0M1pcIlxyXG4gICAgICAgICAgICBmaWxsPVwiI0ZGRjNFN1wiXHJcbiAgICAgICAgIC8+XHJcbiAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgIGQ9XCJNMTA2LjU5OCAyOC45NDA4QzEwNi40MjYgMjkuODQxNiAxMDYuMjMgMzAuNjI2NiAxMDUuODg2IDMxLjM2MDFDMTA1LjUwNiAzMi4xMzIyIDEwNC45NDIgMzIuNjU5OCAxMDQuMTA3IDMyLjc3NTZDMTAxLjc0IDMzLjA5NzMgOTkuNTE5IDMyLjc0OTggOTcuNzI3OSAzMC45NjEyQzk1Ljc2NDkgMjguOTkyMyA5NS4xMTQ3IDI2LjU0NzMgOTUuODg3NiAyMy44MDY0Qzk2LjY3MjggMjEuMDI2OSA5OC41MjUzIDE5LjQwNTQgMTAxLjIxMiAxOC44MjY0QzEwMy4wMDMgMTguNDQwMyAxMDQuNzMzIDE4Ljc0OTIgMTA2LjQyNiAxOS40NDQxQzEwNi42MzUgMTkuNTM0MSAxMDYuNzgyIDE5LjU5ODUgMTA2Ljc4MiAxOS44ODE2QzEwNi43NyAyMC44ODUzIDEwNi43ODIgMjEuODg5IDEwNi43ODIgMjIuOTk1N0MxMDYuMDgyIDIyLjY0ODMgMTA1LjQ2OSAyMi4yNjIyIDEwNC43OTQgMjIuMDQzNEMxMDMuNzY0IDIxLjcyMTcgMTAyLjcyMSAyMS41NjczIDEwMS42NjYgMjEuODc2MkM5OS45NDg0IDIyLjM5MDkgOTguOTE3OSAyNC4xMTUyIDk5LjA2NTEgMjYuMTYxM0M5OS4yMTIzIDI4LjE0MyAxMDAuNDAyIDI5LjQ4MTMgMTAyLjIxOCAyOS43NTE1QzEwMy40MiAyOS45MzE3IDEwNC41NzMgMjkuNzAwMSAxMDUuNzAyIDI5LjMwMTFDMTA1Ljk2IDI5LjE5ODIgMTA2LjI0MiAyOS4wODI0IDEwNi41OTggMjguOTQwOFpcIlxyXG4gICAgICAgICAgICBmaWxsPVwiI0ZGRjNFN1wiXHJcbiAgICAgICAgIC8+XHJcbiAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgIGQ9XCJNMjcuMTAwOCAxMC44NDhDMjUuNTY3MiAxMC44NDggMjQuODgwMiAxMS40OTE0IDI0LjY1OTQgMTMuMUMyNC42MjI2IDEzLjM5NTkgMjQuNTYxMiAxMy42OTE5IDI0LjUzNjcgMTMuOTg3OUMyNC40ODc2IDE0Ljc3MjggMjQuMzE1OSAxNS40MjkxIDIzLjQ4MTYgMTUuNzEyMkMyMy4yMTE3IDE1LjgwMjMgMjIuOTc4NyAxNi4wNzI1IDIyLjc1NzggMTYuMjkxM0MyMS41NTU1IDE3LjUwMDkgMjEuNzAyOCAxOS4wNTggMjMuMTEzNiAxOS45NDU5QzIzLjUxODUgMjAuMjAzMiAyMy42Mjg5IDIwLjQ0NzcgMjMuNTU1MyAyMC45MTFDMjMuMzcxMiAyMi4wMzA1IDIzLjIxMTcgMjMuMTUwMSAyMy4wNzY4IDI0LjI4MjVDMjMuMDI3NyAyNC42ODE0IDIyLjg5MjggMjQuNzMyOSAyMi41NjE1IDI0LjU5MTNDMjEuNzc2NCAyNC4yMzEgMjAuOTc4OSAyMy45MDkzIDIwLjE4MTUgMjMuNTg3NkMxOS45MTE2IDIzLjQ4NDcgMTkuODYyNSAyMy4zMTc0IDE5LjkxMTYgMjMuMDQ3MUMyMC41MDA1IDE5LjE2MDkgMjEuMDc3MSAxNS4yNjE4IDIxLjY3ODIgMTEuMzc1NkMyMS44Mzc3IDEwLjI5NDcgMjEuODYyMiAxMC4yOTQ3IDIyLjkxNzMgMTAuMjA0NkMyNC44NTU3IDEwLjA1MDIgMjYuNzU3MyAxMC4xNTMxIDI4LjU4NTIgMTAuODk5NUMyOS45ODM4IDExLjQ3ODYgMzEuMTEyNSAxMi4zNzkzIDMxLjU3ODYgMTMuOTc1QzMxLjYwMzIgMTQuMDUyMiAzMS42Mjc3IDE0LjE0MjMgMzEuNjQgMTQuMjE5NUMzMS43ODcyIDE1LjA0MzEgMzEuNzEzNiAxNS4xNDYgMzAuOTQwNyAxNC45OTE2QzI5Ljk1OTIgMTQuNzk4NiAyOC45NjU1IDE0LjYzMTMgMjcuOTU5NSAxNC42NDQyQzI3LjYwMzggMTQuNjQ0MiAyNy41NTQ3IDE0LjQ4OTcgMjcuNjAzOCAxNC4xODA5QzI3LjcxNDIgMTMuNDIxNyAyNy44IDEyLjY0OTYgMjcuOTEwNSAxMS44OTAzQzI4LjA4MjIgMTAuODQ4IDI4LjA5NDUgMTAuODQ4IDI3LjEwMDggMTAuODQ4WlwiXHJcbiAgICAgICAgICAgIGZpbGw9XCIjRkZGM0U3XCJcclxuICAgICAgICAgLz5cclxuICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgZD1cIk0xNC4xMzI4IDIxLjY1NzJDMTUuNTA2OCAxOS4wMDYzIDE2Ljg1NjMgMTYuMzk0MSAxOC4yMDU4IDEzLjc5NDdDMTguMjMwNCAxMy44MDc1IDE4LjI2NzIgMTMuODIwNCAxOC4yOTE3IDEzLjgzMzNDMTcuOTQ4MiAxNS45MzA4IDE3LjYwNDcgMTguMDI4MyAxNy4yNjEyIDIwLjEzODdDMTcuMTYzMSAyMC43NjkzIDE3LjA1MjYgMjEuMzk5OCAxNi45NTQ1IDIyLjAzMDRDMTYuOTMgMjIuMjEwNSAxNi45MDU0IDIyLjM3NzggMTYuNjYwMSAyMi4zMjYzQzE1LjgyNTggMjIuMDk0NyAxNS4wMDM5IDIxLjg3NiAxNC4xMzI4IDIxLjY1NzJaXCJcclxuICAgICAgICAgICAgZmlsbD1cIiNGRkYzRTdcIlxyXG4gICAgICAgICAvPlxyXG4gICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICBkPVwiTTI3LjE4NjUgMTYuMDU5NkMyOC41MTE1IDE2LjA5ODIgMjkuNjQwMSAxNi4yOTEyIDMwLjcxOTcgMTYuNjc3MkMzMS4wMjY0IDE2Ljc5MzEgMzEuMTczNiAxNi45MDg5IDMwLjkxNiAxNy4yNDM1QzI5Ljk0NjggMTguNDkxNyAyOC42MzQxIDE4Ljk2NzggMjcuMTc0MiAxOS4xMzUxQzI2LjkwNDMgMTkuMTYwOCAyNi45NDExIDE5LjAxOTMgMjYuOTY1NyAxOC44MjYyQzI3LjA2MzggMTguMTcgMjcuMTQ5NyAxNy41MTM3IDI3LjI0NzggMTYuODU3NEMyNy4zMDkyIDE2LjQ5NzEgMjcuMjExIDE2LjM0MjcgMjYuODQzIDE2LjM5NDFDMjUuNTQyNiAxNi41NDg2IDI0LjQ4NzUgMTcuMDUwNCAyMy45NzIyIDE4LjQyNzNDMjMuOTIzMiAxOC41NTYgMjMuOTM1NCAxOC43NzQ4IDIzLjczOTEgMTguNzM2MkMyMy42MTY0IDE4LjcxMDQgMjMuNDgxNSAxOC41ODE4IDIzLjQyMDIgMTguNDY1OUMyMy4xNjI1IDE4LjAwMjcgMjMuMzM0MyAxNy42MDM4IDIzLjY2NTUgMTcuMjU2M0MyNC4yNjY3IDE2LjYyNTggMjUuMDM5NiAxNi4zNTU1IDI1Ljg0OTMgMTYuMjE0QzI2LjM0IDE2LjExMSAyNi44NTUyIDE2LjA4NTMgMjcuMTg2NSAxNi4wNTk2WlwiXHJcbiAgICAgICAgICAgIGZpbGw9XCIjRkZGM0U3XCJcclxuICAgICAgICAgLz5cclxuICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgZD1cIk0xMy43NDA1IDUuMjg4NzNDMTMuNTY4OCA1LjM5MTY4IDEzLjQzMzggNS4zNDAyMSAxMy4yODY2IDUuMzAxNkMxMy40MDkzIDUuMTYwMDUgMTMuNTQ0MyA1LjIyNDM5IDEzLjc0MDUgNS4yODg3M1pcIlxyXG4gICAgICAgICAgICBmaWxsPVwiI0ZGRjNFN1wiXHJcbiAgICAgICAgIC8+XHJcbiAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICA8Y2xpcFBhdGggaWQ9XCJjbGlwMFwiPlxyXG4gICAgICAgICAgICAgICA8cmVjdCB3aWR0aD1cIjEyNi45NzZcIiBoZWlnaHQ9XCIzOFwiIGZpbGw9XCJ3aGl0ZVwiIC8+XHJcbiAgICAgICAgICAgIDwvY2xpcFBhdGg+XHJcbiAgICAgICAgIDwvZGVmcz5cclxuICAgICAgPC9zdmc+XHJcbiAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgVXNhY2hldkxvZ28gPSAoKSA9PiB7XHJcbiAgIHJldHVybiAoXHJcbiAgICAgIDxzdmdcclxuICAgICAgICAgd2lkdGg9XCIxMTNcIlxyXG4gICAgICAgICBoZWlnaHQ9XCI0MVwiXHJcbiAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTEzIDQxXCJcclxuICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgPlxyXG4gICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICBkPVwiTTExMi41NDcgNy43OTQxNEMxMTIuNzAyIDguODcyOTggMTEyLjc4NiA5Ljg2Nzc2IDExMS42MTkgMTAuNDg0MkMxMTAuNDUyIDExLjEwMDcgMTA4Ljg0OSAxMC45ODg2IDEwNy44NjUgMTAuMTQ4QzEwNy43MSAxMC4wMDc5IDEwNy41ODMgOS44MjU3MyAxMDcuNDU3IDkuNjcxNjFDMTA1LjY4NSAxMS4yODI5IDEwMy44NzEgMTEuMjk2OSAxMDIuMzEgOS42OTk2M0MxMDEuNjQ5IDEwLjQ3MDIgMTAwLjc5MiAxMC45MDQ2IDk5Ljc2NSAxMC44OTA2Qzk4Ljc2NjYgMTAuODkwNiA5Ny44OTQ4IDEwLjUxMjMgOTcuMTkxNyA5LjY4NTYyQzk2LjUxNjcgMTAuNDk4MyA5NS42NDQ5IDEwLjg5MDYgOTQuNjE4NCAxMC44NzY2QzkzLjYyIDEwLjg2MjUgOTIuNzQ4MiAxMC40OTgzIDkyLjEwMTQgOS42OTk2M0M5MC4zMTU1IDExLjI5NjkgODguNjQyMiAxMS4yOTY5IDg2Ljk4MjkgOS43MTM2NEM4NS4yMjUyIDExLjI2ODkgODMuNDY3NSAxMS4yODI5IDgxLjg2NDQgOS42OTk2M0M4MS4xODk1IDEwLjQ1NjIgODAuMzMxNyAxMC44OTA2IDc5LjMwNTIgMTAuODc2NkM3OC4zMDY4IDEwLjg2MjUgNzcuNDM1IDEwLjQ5ODMgNzYuNzYgOS42NTc2Qzc2LjA4NSAxMC40ODQyIDc1LjIxMzIgMTAuODc2NiA3NC4xODY3IDEwLjg3NjZDNzMuMTg4MyAxMC44NjI1IDcyLjMxNjUgMTAuNDk4MyA3MS42Njk3IDkuNjk5NjNDNzAuMTkzMiAxMS4yNDA4IDY4LjA5OCAxMS4yOTY5IDY2LjUyMzEgOS43NDE2NkM2NC44NjM4IDExLjI4MjkgNjMuMDYzOSAxMS4yODI5IDYxLjQxODYgOS42ODU2MkM2MC43NzE4IDEwLjQ3MDIgNTkuOSAxMC44OTA2IDU4Ljg3MzUgMTAuODc2NkM1Ny44NjEgMTAuODc2NiA1Ny4wMDMzIDEwLjUxMjMgNTYuMzU2NCA5LjY5OTYzQzU0LjQ3MjEgMTEuMjY4OSA1Mi45ODE2IDExLjI4MjkgNTEuMTk1OCA5LjcyNzY1QzQ5LjUwODQgMTEuMjY4OSA0Ny43MzY2IDExLjI2ODkgNDYuMDc3MyA5LjY3MTYxQzQ1LjQxNjQgMTAuNDU2MiA0NC41NTg2IDEwLjg3NjYgNDMuNTMyMSAxMC44NjI1QzQyLjUzMzcgMTAuODQ4NSA0MS42NjE5IDEwLjQ5ODMgNDEuMDE1MSA5LjY4NTYyQzM5LjEzMDggMTEuMjU0OCAzNy41NDE4IDExLjI2ODkgMzUuODQwNCA5LjY4NTYyQzM1LjE3OTQgMTAuNDg0MiAzNC4yOTM2IDEwLjg3NjYgMzMuMjY3MSAxMC44NjI1QzMyLjI1NDYgMTAuODQ4NSAzMS4zOTY4IDEwLjQ1NjIgMzAuNzY0MSA5LjY1NzZDMjkuMTMyOSAxMS4yNjg5IDI3LjIzNDYgMTEuMjY4OSAyNS42NDU2IDkuNjU3NkMyNC45OTg4IDEwLjQ3MDIgMjQuMTI2OSAxMC44NjI1IDIzLjEwMDQgMTAuODYyNUMyMi4xMDIgMTAuODYyNSAyMS4yMzAyIDEwLjQ5ODMgMjAuNTQxMiA5LjY1NzZDMTkuODUyMiAxMC40NzAyIDE4Ljk5NDQgMTAuODc2NiAxNy45Njc5IDEwLjg2MjVDMTYuOTU1NCAxMC44NDg1IDE2LjA5NzcgMTAuNDcwMiAxNS40NTA4IDkuNjg1NjJDMTMuNzM1MyAxMS4yNjg5IDExLjkzNTQgMTEuMjY4OSAxMC4zMzI0IDkuNjk5NjNDOC42NDQ5NSAxMS40NzkgNi4zMjQ3NyAxMS4wMTY3IDUuMjI3OTUgOS42ODU2MkM0LjAxODY0IDEwLjkxODYgMi41OTg0MSAxMS4yMjY4IDEuMDM3NTUgMTAuNDQyMkMwLjAzOTE3MTIgOS45NTE4MyAtMC4xMDE0NDYgOS40NzU0NSAwLjA1MzIzMyA3Ljc2NjExQzM3LjU0MTggNy43OTQxNCA3NS4wMTYzIDcuNzk0MTQgMTEyLjU0NyA3Ljc5NDE0Wk01Ni40Njg5IDkuMjM3MjdDNTcuNTc5OCAxMS4xNDI4IDYwLjY1OTMgMTAuNjk0NCA2MS4wODEyIDkuNDE5NDFDNTkuNTA2MyAxMC41MTIzIDU4LjA4NiAxMC40OTgzIDU2LjQ2ODkgOS4yMzcyN1pNODcuMjA3OSA5LjM0OTM2Qzg4LjMxODcgMTAuOTA0NiA5MS4wMDQ1IDEwLjk0NjYgOTEuNzIxNyA5LjQxOTQxQzkwLjE2MDggMTAuNTEyMyA4OC43NTQ3IDEwLjQ5ODMgODcuMjA3OSA5LjM0OTM2Wk00MS4yNDAxIDkuMzQ5MzZDNDEuOTI5MSAxMC44NDg1IDQ0Ljk4MDUgMTAuOTc0NiA0NS43Njc5IDkuNDE5NDFDNDQuMDgwNSAxMC41MTIzIDQyLjkxMzQgMTAuNDk4MyA0MS4yNDAxIDkuMzQ5MzZaTTEwMi42MiA5LjQ2MTQ0QzEwMy43NTkgMTEuMDg2NyAxMDYuNTI5IDEwLjY4MDQgMTA3LjEwNSA5LjM3NzM4QzEwNS42MTUgMTAuNDg0MiAxMDQuMTM4IDEwLjQ5ODMgMTAyLjYyIDkuNDYxNDRaTTE1LjI1NCA5LjI5MzMxQzEzLjYzNjkgMTAuNTEyMyAxMi4xMzIzIDEwLjQ5ODMgMTAuNTcxNCA5LjMzNTM0QzExLjQ4NTQgMTAuOTA0NiAxNC4yNjk2IDEwLjkwNDYgMTUuMjU0IDkuMjkzMzFaTTMwLjQ2ODggOS40MzM0MkMyOC45NjQyIDEwLjUyNjMgMjcuNDU5NiAxMC40ODQyIDI1LjgwMDMgOS4yOTMzMUMyNy4xMjIxIDEwLjkxODYgMjkuMzQzOCAxMC45MTg2IDMwLjQ2ODggOS40MzM0MlpNNzYuNDUwNiA5LjQxOTQxQzc0Ljk2MDEgMTAuNTEyMyA3My40Njk2IDEwLjQ1NjIgNzEuOTUwOSA5LjQ2MTQ0QzczLjIxNjQgMTAuOTMyNiA3NS4yNjk1IDEwLjg5MDYgNzYuNDUwNiA5LjQxOTQxWk05Mi4zNjg1IDkuNDE5NDFDOTMuNDY1MyAxMC44NDg1IDk2LjAyNDYgMTAuOTE4NiA5Ni42NzE0IDkuNTU5NTJDOTUuMTk0OSAxMC40OTgzIDkzLjc3NDcgMTAuNDQyMiA5Mi4zNjg1IDkuNDE5NDFaTTQ2LjQwMDcgOS40MTk0MUM0Ny40ODM1IDEwLjg0ODUgNDkuOTE2MSAxMC45MTg2IDUwLjczMTcgOS41MzE1QzQ5LjIyNzEgMTAuNDg0MiA0Ny44MDY5IDEwLjQ0MjIgNDYuNDAwNyA5LjQxOTQxWk0zNS40MDQ0IDkuNTg3NTRDMzMuODk5OCAxMC40ODQyIDMyLjQ2NTUgMTAuNDQyMiAzMS4wNTk0IDkuNDA1NEMzMi4xNDIxIDEwLjg0ODUgMzQuMjY1NCAxMC45MzI2IDM1LjQwNDQgOS41ODc1NFpNNzYuOTk5MSA5LjMzNTM0Qzc3Ljg1NjggMTAuOTMyNiA4MC43MTE0IDEwLjgyMDUgODEuNDI4NSA5LjUxNzQ5Qzc5Ljg5NTggMTAuNDg0MiA3OC40NDc0IDEwLjQ1NjIgNzYuOTk5MSA5LjMzNTM0Wk00LjY2NTQ4IDkuNzQxNjZDNC4wMDQ1OCA5Ljg4MTc3IDMuMjczMzcgMTAuMjA0IDIuNTQyMTYgMTAuMTc2QzEuODI1MDEgMTAuMTQ4IDEuMTIxOTIgOS43ODM2OSAwLjUzMTMzMiA5LjYwMTU1QzEuNDE3MjIgMTAuODQ4NSAzLjY5NTIyIDEwLjkxODYgNC42NjU0OCA5Ljc0MTY2Wk02MS42OTk5IDkuNDA1NEM2Mi44Mzg5IDEwLjg0ODUgNjUuMTE2OSAxMC45MTg2IDY2LjA3MzEgOS41MTc0OUM2NC41NTQ0IDEwLjQ5ODMgNjMuMTA2MSAxMC40NDIyIDYxLjY5OTkgOS40MDU0Wk0xNS43ODgzIDkuNDE5NDFDMTYuNTg5OCAxMC45NzQ2IDE5LjU5OSAxMC43NjQ1IDIwLjA0OSA5LjU1OTUyQzE4LjYxNDcgMTAuNDcwMiAxNy4yMDg1IDEwLjQ1NjIgMTUuNzg4MyA5LjQxOTQxWk0xMDcuNjI2IDkuMzIxMzNDMTA4LjYyNCAxMC43Nzg1IDExMC45NDQgMTAuOTQ2NiAxMTEuOTcxIDkuNjI5NThDMTEwLjQzOCAxMC40NzAyIDEwOS4wMzIgMTAuNDAwMiAxMDcuNjI2IDkuMzIxMzNaTTM2LjQwMjggOS41NzM1M0MzNi42NDE5IDEwLjEzNCAzNy4zODcxIDEwLjUxMjMgMzguMzE1MiAxMC41NDAzQzM5LjM4MzkgMTAuNTY4MyA0MC4yNTU3IDEwLjE0OCA0MC41NjUxIDkuNDc1NDVDMzkuMTE2NyAxMC40NDIyIDM3Ljk5MTggMTAuNDcwMiAzNi40MDI4IDkuNTczNTNaTTIxLjAwNTIgOS41NTk1MkMyMS45MzMzIDEwLjg3NjYgMjQuNzAzNSAxMC43OTI1IDI1LjI1MTkgOS40NDc0M0MyMy45NTgyIDEwLjQ0MjIgMjIuNTk0MiAxMC40NDIyIDIxLjAwNTIgOS41NTk1MlpNNTYuMDE4OSA5LjM3NzM4QzU0LjU0MjUgMTAuNDg0MiA1My4xMjIyIDEwLjQyODIgNTEuNTA1MSA5LjQ0NzQzQzUyLjc5ODggMTAuOTA0NiA1NS4wNDg3IDEwLjgzNDUgNTYuMDE4OSA5LjM3NzM4Wk05Ny41NTczIDkuNTE3NDlDOTguNjQwMSAxMC45ODg2IDEwMS4zNCAxMC43MDg0IDEwMS45MTYgOS40ODk0N0MxMDAuMjcxIDEwLjQ0MjIgOTkuNDI3NSAxMC40NTYyIDk3LjU1NzMgOS41MTc0OVpNNjcuMTQxOCA5LjcyNzY1QzY3LjkxNTIgMTAuOTQ2NiA3MC43MTM1IDEwLjcyMjQgNzEuMjQ3OCA5LjQ4OTQ3QzY5Ljc1NzMgMTAuMzg2MiA2OS4yOTMyIDEwLjQxNDIgNjcuMTQxOCA5LjcyNzY1Wk04Mi4zNzA2IDkuNjAxNTVDODMuMjQyNSAxMC45MTg2IDg2LjA0MDcgMTAuNzUwNSA4Ni41NzUxIDkuNDMzNDJDODUuMjUzMyAxMC40NDIyIDgzLjg3NTIgMTAuNDI4MiA4Mi4zNzA2IDkuNjAxNTVaTTUuODMyNjEgOS43Mjc2NUM2LjUzNTY5IDEwLjg2MjUgOS4zMDU4NSAxMC44MjA1IDkuOTM4NjMgOS40ODk0N0M4LjUwNDM0IDEwLjM1ODEgOC4xNjY4NSAxMC4zODYyIDUuODMyNjEgOS43Mjc2NVpcIlxyXG4gICAgICAgICAgICBmaWxsPVwiI0ZGRjNFN1wiXHJcbiAgICAgICAgIC8+XHJcbiAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgIGQ9XCJNMC4wODA0ODEzIDMzLjQ3NThDLTAuMDc0MTk3OCAzMS42ODI0IDAuMTM2NzI4IDMxLjIwNjEgMS4yNjE2NyAzMC43MDE3QzIuNjExNTkgMzAuMDk5MiA0LjA4ODA4IDMwLjQzNTUgNS4xOTg5NSAzMS42MTI0QzUuODczOTIgMzAuODU1OCA2LjcxNzYyIDMwLjQyMTUgNy43NTgxOSAzMC40MjE1QzguNzcwNjMgMzAuNDIxNSA5LjYxNDM0IDMwLjgyNzggMTAuMjc1MiAzMS41NzA0QzEyLjE0NTUgMzAuMDE1MSAxMy44MzI5IDMwLjAxNTIgMTUuNDA3OCAzMS41OTg0QzE2LjE1MyAzMC43NzE3IDE3LjA5NTIgMzAuMzM3NCAxOC4yMzQyIDMwLjQyMTVDMTkuMTIwMSAzMC40OTE1IDE5Ljg5MzUgMzAuODQxOCAyMC41MTIyIDMxLjYxMjRDMjEuMjAxMiAzMC44NTU4IDIyLjAzMDggMzAuNDIxNSAyMy4wNzE0IDMwLjQyMTVDMjQuMDgzOSAzMC40MjE1IDI0LjkyNzYgMzAuNzk5OCAyNS42MzA3IDMxLjYyNjRDMjYuMzE5NyAzMC44Mjc4IDI3LjE3NzQgMzAuNDIxNSAyOC4yMTggMzAuNDIxNUMyOS4yMzA1IDMwLjQyMTUgMzAuMDc0MiAzMC44Mjc4IDMwLjcyMSAzMS41OTg0QzMyLjM5NDMgMzAuMDE1MiAzNC4xOTQzIDMwLjAxNTEgMzUuODUzNSAzMS41NzA0QzM3LjQyODUgMzAuMDAxMSAzOS40Njc0IDMwLjA1NzIgNDAuOTcyIDMxLjU4NDRDNDEuNjYxIDMwLjg0MTggNDIuNTE4OCAzMC40MjE1IDQzLjU1OTQgMzAuNDIxNUM0NC41NzE4IDMwLjQzNTUgNDUuNDE1NSAzMC44NDE4IDQ2LjA2MjQgMzEuNjEyNEM0Ny42MDkxIDMwLjAxNTIgNDkuNTQ5NyAzMC4wMDExIDUxLjE4MDggMzEuNTcwNEM1Mi43OTc5IDI5Ljk0NTEgNTQuODY1IDMwLjExMzIgNTYuMjk5MyAzMS41ODQ0QzU3LjAwMjQgMzAuODQxOCA1Ny44NDYxIDMwLjQwNzUgNTguODg2NyAzMC40MjE1QzU5Ljg5OTEgMzAuNDM1NSA2MC43NDI4IDMwLjg0MTggNjEuMzg5NiAzMS42MTI0QzYyLjk3ODYgMzAuMDE1MiA2NC44NjI5IDMwLjAwMTEgNjYuNTIyMiAzMS41NzA0QzY3Ljk1NjUgMzAuMDcxMiA3MC4wNzk4IDI5Ljk4NzEgNzEuNjQwNiAzMS41ODQ0QzcyLjMyOTcgMzAuODI3OCA3My4xODc0IDMwLjQwNzUgNzQuMjE0IDMwLjQyMTVDNzUuMjI2NCAzMC40MzU1IDc2LjA3MDEgMzAuODEzOCA3Ni43MTY5IDMxLjYxMjRDNzguMzA1OSAzMC4wMDExIDgwLjI4ODYgMzAuMDAxMSA4MS44MzU0IDMxLjU3MDRDODMuNzMzNyAzMC4wMDExIDg1LjIxMDIgMjkuOTg3MSA4Ni45NTM5IDMxLjU3MDRDODcuNjQyOSAzMC44NDE4IDg4LjQ4NjYgMzAuMzkzNCA4OS41MjcyIDMwLjQwNzVDOTAuNTM5NiAzMC40MjE1IDkxLjM4MzMgMzAuODEzOCA5Mi4wMzAyIDMxLjU4NDRDOTMuNzMxNiAzMC4wMDExIDk1LjcxNDMgMzAuMDE1MiA5Ny4xNDg3IDMxLjU4NDRDOTkuMDYxIDMwLjAwMTEgMTAwLjU4IDI5Ljk4NzEgMTAyLjI2NyAzMS41NzA0QzEwMi45NyAzMC44Njk4IDEwMy44IDMwLjM5MzQgMTA0Ljg0IDMwLjQwNzVDMTA1Ljg1MyAzMC40MjE1IDEwNi42OTcgMzAuNzk5OCAxMDcuMjMxIDMxLjQzMDNDMTA4LjA3NSAzMS4wNjYgMTA4LjgyIDMwLjU4OTYgMTA5LjYyMSAzMC40NjM1QzExMC4yNCAzMC4zNjU0IDExMC45NzEgMzAuNTc1NiAxMTEuNTYyIDMwLjg0MThDMTEyLjYxNyAzMS4zMDQyIDExMi43OTkgMzEuOTIwNiAxMTIuNTc0IDMzLjQ3NThDNzUuMDcxNyAzMy40NzU4IDM3LjU5NzIgMzMuNDc1OCAwLjA4MDQ4MTMgMzMuNDc1OFpNMjUuMzc3NSAzMS45NDg3QzI0LjI4MDcgMzAuMzUxNCAyMS4zOTgxIDMwLjYwMzYgMjAuOTM0IDMxLjg2NDZDMjIuNDEwNSAzMC44NTU4IDIzLjcxODMgMzAuODU1OCAyNS4zNzc1IDMxLjk0ODdaTTE1LjA3MDMgMzEuODc4NkMxNC4wNTc4IDMwLjU2MTYgMTEuNjgxNCAzMC40MzU1IDEwLjkwOCAzMS42ODI0QzEyLjM1NjQgMzAuODk3OCAxMy43MzQ0IDMwLjg4MzggMTUuMDcwMyAzMS44Nzg2Wk00NS44MjMzIDMyLjAwNDdDNDUuMDA3NyAzMC41MTk1IDQyLjI5MzggMzAuNTA1NSA0MS40NjQyIDMxLjczODVDNDMuMDExIDMwLjg4MzggNDQuNDE3MSAzMC44Njk4IDQ1LjgyMzMgMzIuMDA0N1pNNzIuMzE1NiAzMS41MTQzQzcyLjkyMDMgMzEuNDAyMiA3My42Mzc0IDMxLjEyMiA3NC4zNDA1IDMxLjE2NEM3NS4wNDM2IDMxLjIwNjEgNzUuNzMyNiAzMS41NTYzIDc2LjMwOTIgMzEuNzI0NUM3NS4zMTA4IDMwLjU0NzYgNzMuMTczNCAzMC40MzU1IDcyLjMxNTYgMzEuNTE0M1pNMTAyLjczMSAzMS43Mzg1QzEwNC4yMDggMzAuODU1OCAxMDUuNjQyIDMwLjg1NTggMTA3LjIwMyAzMi4wNDY3QzEwNS45NzkgMzAuNTE5NSAxMDMuOTI2IDMwLjQzNTUgMTAyLjczMSAzMS43Mzg1Wk01MS41NjA1IDMxLjgyMjZDNTMuMzc0NSAzMC44ODM4IDU0LjA3NzUgMzAuODY5OCA1NS44MDcxIDMxLjczODVDNTUuMTYwMyAzMC41NDc2IDUyLjM0OCAzMC40NDk1IDUxLjU2MDUgMzEuODIyNlpNOTEuNzM0OSAzMS45MDY2QzkwLjcwODQgMzAuNTc1NiA4OC4zMTc5IDMwLjQzNTUgODcuNTg2NyAzMS42NTQ0Qzg5LjMxNjMgMzAuODY5OCA5MC4yODY1IDMwLjkyNTkgOTEuNzM0OSAzMS45MDY2Wk01Ni44ODk5IDMxLjY0MDRDNTguMzUyMyAzMC44NTU4IDU5Ljc0NDQgMzAuODk3OCA2MS4yMDY4IDMyLjAzMjdDNjAuMDUzOCAzMC41NjE2IDU3Ljk3MjYgMzAuNDM1NSA1Ni44ODk5IDMxLjY0MDRaTTcxLjE0ODUgMzEuNzUyNUM3MC4yMDY0IDMwLjQ3NzUgNjcuNDUwMyAzMC41NzU2IDY2LjkzIDMxLjg2NDZDNjguMjIzNiAzMC44OTc4IDY5LjU4NzYgMzAuODk3OCA3MS4xNDg1IDMxLjc1MjVaTTMwLjU1MjMgMzIuMDMyN0MyOS40NDE0IDMwLjU2MTYgMjcuMTIxMiAzMC40MjE1IDI2LjIyMTIgMzEuNzEwNUMyNy42OTc3IDMwLjg2OTggMjkuMDg5OCAzMC44OTc4IDMwLjU1MjMgMzIuMDMyN1pNNzcuMTUyOSAzMS43ODA1Qzc4LjQ4ODcgMzAuODgzOCA3OS44NjY4IDMwLjkyNTkgODEuMjU4OSAzMS42NTQ0QzgwLjA0OTYgMzAuNDkxNSA3OC4yNjM3IDMwLjU0NzYgNzcuMTUyOSAzMS43ODA1Wk0xOS45MzU3IDMxLjY1NDRDMTkuMDM1NyAzMC4zOTM0IDE2LjI2NTUgMzAuNjg3NyAxNS44ODU5IDMxLjgyMjZDMTcuMTkzNiAzMC45MTE4IDE4LjUyOTUgMzAuODgzOCAxOS45MzU3IDMxLjY1NDRaTTk2LjU3MjEgMzEuNjI2NEM5NS43OTg3IDMwLjQ0OTUgOTMuMDE0NSAzMC42MDM2IDkyLjUwODMgMzEuNzgwNUM5NC4wOTczIDMwLjkyNTkgOTQuNDkxIDMwLjkxMTkgOTYuNTcyMSAzMS42MjY0Wk02NS45MzE2IDMxLjYyNjRDNjUuMDczOCAzMC40MjE1IDYyLjMxNzcgMzAuNjU5NyA2MS44Njc3IDMxLjc4MDVDNjMuNDU2NyAzMC45Mzk5IDYzLjc2NjEgMzAuOTI1OSA2NS45MzE2IDMxLjYyNjRaTTgyLjAxODIgMzIuMDYwN0M4My4zODIyIDMwLjkxMTggODQuNzYwMyAzMC45MjU5IDg2LjE5NDUgMzEuNTE0M0M4NC45MTQ5IDMwLjQyMTUgODMuMDE2NiAzMC42MzE2IDgyLjAxODIgMzIuMDYwN1pNNS41Nzg2MiAzMS44MzY2QzYuODMwMTEgMzAuOTExOSA4LjE2NTk4IDMwLjkzOTkgOS41NTgwOSAzMS41MTQzQzguMzYyODQgMzAuNDYzNSA2LjYwNTEzIDMwLjYwMzYgNS41Nzg2MiAzMS44MzY2Wk05Ny40Mjk5IDMxLjk2MjdDOTguODA3OSAzMC45MTE4IDEwMC4xNDQgMzAuOTExOCAxMDEuNTM2IDMxLjUyODNDMTAwLjM5NyAzMC40NDk1IDk4LjQxNDIgMzAuNjE3NiA5Ny40Mjk5IDMxLjk2MjdaTTExMS44ODUgMzEuNjQwNEMxMTAuNzQ2IDMwLjQ3NzUgMTA4Ljc3OCAzMC41NDc2IDEwNy42NjcgMzEuOTA2NkMxMDkuMTQzIDMwLjkyNTkgMTEwLjQ5MyAzMC44ODM4IDExMS44ODUgMzEuNjQwNFpNNTAuNzQ0OSAzMS43Mzg1QzQ5LjQ2NTMgMzAuNDc3NSA0Ny40ODI2IDMwLjU0NzYgNDYuNDk4MyAzMS43NjY1QzQ4LjQ4MSAzMC45MTE5IDQ4Ljg4ODggMzAuODk3OCA1MC43NDQ5IDMxLjczODVaTTQwLjI5NyAzMS42MTI0QzM5LjI0MjQgMzAuNDM1NSAzNy4xMDUgMzAuNjE3NiAzNi4xMjA3IDMxLjk3NjdDMzcuNDg0NyAzMC45Mzk5IDM4LjgwNjUgMzAuOTExOCA0MC4yOTcgMzEuNjEyNFpNMzUuMzQ3MyAzMS43Mzg1QzM0LjUwMzYgMzAuNDYzNSAzMS43MTk0IDMwLjU4OTYgMzEuMTg1IDMxLjgzNjZDMzIuNTIwOSAzMC44OTc4IDMzLjg4NDkgMzAuODk3OCAzNS4zNDczIDMxLjczODVaTTAuNTAyMzMzIDMxLjc4MDVDMS45NjQ3NSAzMC45MjU5IDMuMjg2NTYgMzAuOTI1OSA0LjYyMjQyIDMxLjY1NDRDMy40ODM0MiAzMC41MTk1IDEuNjEzMjEgMzAuNTMzNiAwLjUwMjMzMyAzMS43ODA1WlwiXHJcbiAgICAgICAgICAgIGZpbGw9XCIjRkZGM0U3XCJcclxuICAgICAgICAgLz5cclxuICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgZD1cIk03OC4xMDk0IDE1LjU4MzdDNzguNTg3NSAxNS41ODM3IDc5LjAwOTMgMTUuNTgzNyA3OS40ODc0IDE1LjU4MzdDNzkuNDg3NCAxNi42MjA1IDc5LjQ4NzQgMTcuNjE1MyA3OS40ODc0IDE4LjYxMDFDNzkuNDg3NCAxOC43OTIzIDc5LjQ1OTMgMTguOTg4NCA3OS41MDE1IDE5LjE3MDVDNzkuNTQzNyAxOS4zMTA3IDc5LjY3MDIgMTkuNDM2OCA3OS43NTQ2IDE5LjU2MjlDNzkuODUzIDE5LjQzNjggODAuMDIxOCAxOS4zMTA3IDgwLjAyMTggMTkuMTg0NkM4MC4wNDk5IDE4LjY1MjEgODAuMDIxOCAxOC4xMDU3IDgwLjAzNTggMTcuNTczM0M4MC4wMzU4IDE3LjQxOTIgODAuMDc4IDE3LjI2NTEgODAuMTM0MyAxNi45Mjg4QzgwLjMwMyAxNy4xNjcgODAuNDAxNCAxNy4yNjUxIDgwLjQ1NzcgMTcuMzkxMkM4MC40ODU4IDE3LjQ3NTIgODAuNDcxOCAxNy41NzMzIDgwLjQ1NzcgMTcuNjcxNEM4MC4yODkgMTguODc2MyA4MC4zNTkzIDE5Ljg1NzEgODEuOTQ4MiAyMC4wMzkyQzgyLjM4NDIgMjAuMDk1MyA4Mi43NDk4IDIwLjcyNTggODMuMTcxNiAyMS4xMDQxQzgzLjE3MTYgMTkuMzEwNyA4My4xNzE2IDE3LjQ4OTIgODMuMTcxNiAxNS41OTc3QzgzLjUyMzIgMTUuNTgzNyA4My44MTg1IDE1LjU4MzcgODQuMTEzOCAxNS41NTU3Qzg0LjQ3OTQgMTUuNTI3NyA4NC42MDU5IDE1LjY4MTggODQuNjA1OSAxNi4wNDYxQzg0LjU5MTkgMTkuMTAwNSA4NC41OTE5IDIyLjE1NDkgODQuNTYzNyAyNS4yMDkzQzg0LjU2MzcgMjUuNDA1NCA4NC40MDkxIDI1LjYwMTYgODQuMzI0NyAyNS44MTE4Qzg0LjUyMTUgMjUuODExOCA4NC43NzQ3IDI1LjgxMTggODUuMDk4MSAyNS44MTE4Qzg1LjA5ODEgMjIuOTI1NSA4NS4wOTgxIDIwLjAzOTIgODUuMDk4MSAxNy4xNjdDODUuMTY4NCAxNy4xMzkgODUuMjI0NiAxNy4xMjQ5IDg1LjI5NSAxNy4wOTY5Qzg1LjM3OTMgMTcuMjIzIDg1LjUxOTkgMTcuMzYzMSA4NS41MTk5IDE3LjQ4OTJDODUuNTM0IDIwLjE5MzQgODUuNTM0IDIyLjg5NzUgODUuNTA1OSAyNS42MTU2Qzg1LjUwNTkgMjUuODI1OCA4NS4yODA5IDI2LjE5MDEgODUuMTU0MyAyNi4xOTAxQzg0LjczMjUgMjYuMjE4MSA4NC4yODI1IDI2LjE2MiA4My44ODg4IDI2LjAzNTlDODMuNjQ5NyAyNS45NjU5IDgzLjQ4MSAyNS42ODU3IDgzLjE4NTcgMjUuNDMzNUM4My4xNzE2IDI1LjM0OTQgODMuMTU3NiAyNS4xMjUyIDgzLjE0MzUgMjQuOTQzMUM4MS42OTUxIDI2LjczNjUgNzkuOTc5NiAyNi41NDAzIDc4LjEzNzUgMjUuNjU3NkM3OC4xMDk0IDIyLjI2NyA3OC4xMDk0IDE4Ljk2MDQgNzguMTA5NCAxNS41ODM3Wk03OS4xNjQgMjUuNjU3NkM3OS4xNjQgMjUuNjk5NyA3OS4xNjQgMjUuNzQxNyA3OS4xNzgxIDI1Ljc5NzhDNzkuOTIzMyAyNS43OTc4IDgwLjY4MjcgMjUuODY3OCA4MS4zOTk4IDI1Ljc2OTdDODEuNzkzNiAyNS43MTM3IDgyLjIyOTUgMjUuNDA1NCA4Mi40OTY3IDI1LjA5NzJDODMuMjk4MiAyNC4xNDQ1IDgzLjE1NzYgMjEuNjA4NSA4Mi4yOTk4IDIwLjY5NzhDODIuMjg1NyAyMC42ODM3IDgyLjIyOTUgMjAuNjk3OCA4Mi4yOTk4IDIwLjY5NzhDODIuMzQyIDIxLjU5NDUgODIuNDU0NSAyMi40OTEyIDgyLjQyNjMgMjMuMzg3OUM4Mi4zOTgyIDI0LjYwNjggODEuNjI0OCAyNS44MTE4IDc5Ljk5MzcgMjUuNjcxN0M3OS43MTI0IDI1LjY0MzYgNzkuNDQ1MiAyNS42NTc2IDc5LjE2NCAyNS42NTc2Wk03OS44MjQ5IDI0LjA0NjRDNzkuODgxMiAyNC4wMDQzIDc5LjkyMzMgMjMuOTYyMyA3OS45Nzk2IDIzLjkyMDNDODAuMDM1OCAyMy4wNTE2IDgwLjA3OCAyMi4xODI5IDgwLjEzNDMgMjEuMjg2MkM4MC4wNDk5IDIxLjI4NjIgNzkuNzgyNyAyMS4yODYyIDc5LjQ4NzQgMjEuMjg2MkM3OS40ODc0IDIyLjA4NDggNzkuNDczNCAyMi44Mjc0IDc5LjUwMTUgMjMuNTdDNzkuNTE1NiAyMy43MzgxIDc5LjcxMjQgMjMuODkyMyA3OS44MjQ5IDI0LjA0NjRaTTgwLjM3MzMgMjMuODIyMkM4MC45NDk5IDIzLjYyNiA4MS4yMTcgMjIuOTk1NiA4MC45OTIgMjIuMTgyOUM4MC45MzU4IDIxLjk4NjggODAuNjgyNyAyMS44NDY3IDgwLjUyOCAyMS42Nzg1QzgwLjQ3MTggMjEuNzIwNiA4MC40Mjk2IDIxLjc2MjYgODAuMzczMyAyMS44MTg2QzgwLjM3MzMgMjIuNDc3MSA4MC4zNzMzIDIzLjE0OTcgODAuMzczMyAyMy44MjIyWlwiXHJcbiAgICAgICAgICAgIGZpbGw9XCIjRkZGM0U3XCJcclxuICAgICAgICAgLz5cclxuICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgZD1cIk01NS45NjIgMjEuNTgwNUM1Ni42OTMyIDIwLjE5MzQgNTYuMTMwOCAxOC41OTYxIDU2LjQxMiAxNy4xMTFDNTYuNDgyMyAxNy4xMTEgNTYuNTUyNiAxNy4xMTEgNTYuNjM3IDE3LjEyNUM1Ni42MzcgMTcuNjk5NCA1Ni42MzcgMTguMjczOSA1Ni42MzcgMTguODYyM0M1Ni42OTMyIDE4Ljg3NjMgNTYuNzQ5NSAxOC44NzYzIDU2LjgwNTcgMTguODkwNEM1Ny4wNDQ4IDE4LjEzMzggNTcuMjk3OSAxNy4zNzcyIDU3LjUzNjkgMTYuNjA2NkM1Ny44ODg1IDE1LjQ1NzcgNTcuODg4NSAxNS40NDM2IDU5LjE5NjIgMTUuNjExOEM1OS4yMTAzIDE1Ljc3OTkgNTkuMjUyNSAxNS45NDggNTkuMjUyNSAxNi4xMzAyQzU5LjI1MjUgMTkuMTAwNSA1OS4yNTI1IDIyLjA1NjggNTkuMjM4NCAyNS4wMjcyQzU5LjIzODQgMjUuMjkzNCA1OS4wNjk3IDI1LjU0NTYgNTguOTcxMiAyNS43OTc4QzU5LjA2OTcgMjUuNzk3OCA1OS4zMzY4IDI1Ljc5NzggNTkuNzMwNiAyNS43OTc4QzU5LjczMDYgMjIuODgzNSA1OS43MzA2IDE5Ljk5NzIgNTkuNzMwNiAxNy4xMjVDNTkuODE0OSAxNy4xMjUgNTkuODk5MyAxNy4xMTEgNTkuOTgzNyAxNy4xMTFDNjAuMDExOCAxNy4zMzUxIDYwLjA2OCAxNy41NDUzIDYwLjA2OCAxNy43Njk1QzYwLjA2OCAyMC4zMTk1IDYwLjA4MjEgMjIuODU1NSA2MC4wNTQgMjUuNDA1NUM2MC4wNTQgMjUuNjcxNyA1OS45Mjc0IDI2LjE0ODEgNTkuNzg2OCAyNi4xNzYxQzU5LjM3OSAyNi4yNjAyIDU4LjgzMDYgMjYuMzAyMiA1OC41MDcyIDI2LjA5MkM1OC4wMTUgMjUuNzgzOCA1Ny42NjM1IDI1LjI5MzQgNTcuNzkgMjQuNTc4OEM1Ny44ODg1IDI0LjAwNDQgNTcuODA0MSAyMy4zODc5IDU3LjY3NzYgMjIuNzcxNEM1Ny4zOTYzIDIzLjY5NjEgNTcuMTQzMiAyNC42MjA5IDU2LjgxOTggMjUuNTMxNkM1Ni43MjE0IDI1Ljc5NzggNTYuNDY4MiAyNi4yMDQxIDU2LjI4NTQgMjYuMjA0MUM1NS44NjM2IDI2LjIwNDEgNTUuNDQxNyAyNi4zNTgyIDU0Ljk2MzYgMjUuOTIzOUM1NC4zNzMgMjUuMzkxNSA1NC40ODU1IDI0Ljg3MzEgNTQuNDcxNSAyNC4zMTI2QzU0LjQ1NzQgMjEuNjIyNSA1NC40ODU1IDE4Ljk0NjQgNTQuNDQzNCAxNi4yNTYzQzU0LjQyOTMgMTUuNTk3OCA1NC43MjQ2IDE1LjU2OTcgNTUuMjMwOCAxNS41NTU3QzU1Ljc2NTIgMTUuNTQxNyA1NS45NzYxIDE1LjY4MTggNTUuOTc2MSAxNi4yNTYzQzU1Ljk0OCAxOC4wMjE3IDU1Ljk2MiAxOS44MTUxIDU1Ljk2MiAyMS41ODA1Wk01Ny43MTk3IDE5LjcxN0M1Ny4xNzEzIDIxLjQ4MjQgNTYuNjM3IDIzLjI2MTggNTYuMDYwNSAyNS4wMjcyQzU1Ljk2MiAyNS4zMjE0IDU1LjcwODkgMjUuNTczNiA1NS41NTQyIDI1Ljc4MzhDNTUuNzIzIDI1Ljc4MzggNTYuMDQ2NCAyNS43ODM4IDU2LjM5NzkgMjUuNzgzOEM1Ni44MzM4IDIzLjcyNDIgNTguMDAxIDIxLjkwMjcgNTcuNzE5NyAxOS43MTdaXCJcclxuICAgICAgICAgICAgZmlsbD1cIiNGRkYzRTdcIlxyXG4gICAgICAgICAvPlxyXG4gICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICBkPVwiTTYxLjY0MjkgMTUuNjI2MkM2MS43Njk1IDE1LjU4NDIgNjEuODExNiAxNS41NTYyIDYxLjg1MzggMTUuNTU2MkM2My4wNDkxIDE1LjQ1ODEgNjMuMDQ5MSAxNS40NTgxIDYzLjA0OTEgMTYuNjYzQzYzLjA0OTEgMTguMjg4MyA2My4wNDkxIDE5LjkxMzYgNjMuMDQ5MSAyMS41OTQ5QzYzLjg1MDYgMjAuMTM3OCA2My4zMTYyIDE4LjU2ODUgNjMuNTU1MyAxNy4wOTc0QzYzLjYyNTYgMTcuMDk3NCA2My43MSAxNy4wOTc0IDYzLjc4MDMgMTcuMDk3NEM2My43ODAzIDE3LjY0MzggNjMuNzgwMyAxOC4xOTAyIDYzLjc4MDMgMTguNzM2N0M2My44MzY1IDE4LjczNjcgNjMuODkyOCAxOC43NTA3IDYzLjk2MzEgMTguNzUwN0M2NC4yNDQzIDE3Ljg1NCA2NC41ODE4IDE2Ljk3MTMgNjQuODA2OCAxNi4wNjA2QzY1LjAwMzYgMTUuMjYxOSA2NS41OTQyIDE1LjU1NjIgNjYuMDQ0MiAxNS41NDIyQzY2LjU3ODUgMTUuNTI4MiA2Ni4zOTU3IDE2LjAwNDUgNjYuMzk1NyAxNi4yODQ3QzY2LjQwOTggMTkuMTg1IDY2LjQwOTggMjIuMDcxMyA2Ni4zODE3IDI0Ljk3MTZDNjYuMzgxNyAyNS4yNTE4IDY2LjIxMjkgMjUuNTE4IDY2LjEyODYgMjUuNzg0MkM2Ni4yMjcgMjUuNzg0MiA2Ni40OTQyIDI1Ljc4NDIgNjYuODU5OCAyNS43ODQyQzY2Ljg1OTggMjIuODY5OSA2Ni44NTk4IDE5Ljk5NzcgNjYuODU5OCAxNy4xMjU0QzY2LjkzMDEgMTcuMTExNCA2Ny4wMDA0IDE3LjA4MzQgNjcuMDU2NiAxNy4wNjk0QzY3LjExMjkgMTcuMTk1NSA2Ny4yMzk0IDE3LjMyMTYgNjcuMjM5NCAxNy40NDc3QzY3LjI1MzUgMjAuMTUxOCA2Ny4yNTM1IDIyLjg1NTkgNjcuMjI1NCAyNS41NzRDNjcuMjI1NCAyNS43ODQyIDY3LjAxNDQgMjYuMTQ4NSA2Ni44ODc5IDI2LjE2MjVDNjYuNDY2IDI2LjIwNDUgNjUuOTczOSAyNi4yMTg1IDY1LjYyMjMgMjYuMDM2NEM2NC45NzU1IDI1LjcxNDEgNjQuODQ4OSAyNS4wODM2IDY0LjkzMzMgMjQuMzgzMUM2NS4wMDM2IDIzLjg3ODcgNjQuOTQ3NCAyMy4zNjAzIDY0LjgzNDkgMjIuNzk5OUM2NC43NTA1IDIzLjA2NjEgNjQuNjY2MSAyMy4zMzIzIDY0LjU4MTggMjMuNTk4NUM2NC4zODQ5IDI0LjI3MSA2NC4yMDIxIDI0Ljk0MzUgNjMuOTYzMSAyNS41ODhDNjMuODc4NyAyNS44MjYyIDYzLjYxMTUgMjYuMTc2NSA2My40Mjg3IDI2LjE3NjVDNjMuMDIwOSAyNi4xNzY1IDYyLjYxMzEgMjYuMjg4NiA2Mi4xNDkxIDI1LjkyNDNDNjEuNTE2MyAyNS40MDU5IDYxLjYyODggMjQuODQ1NSA2MS42Mjg4IDI0LjI1N0M2MS42MTQ4IDIxLjU5NDkgNjEuNjI4OCAxOC45MzI4IDYxLjYyODggMTYuMjcwN0M2MS42MTQ4IDE2LjA2MDYgNjEuNjQyOSAxNS44NjQ0IDYxLjY0MjkgMTUuNjI2MlpNNjQuOTA1MiAxOS41OTEzQzY0LjMwMDUgMjEuNTEwOCA2My43NjYyIDIzLjI5MDIgNjMuMTg5NyAyNS4wNDE2QzYzLjA5MTIgMjUuMzIxOCA2Mi44ODAzIDI1LjU2IDYyLjcyNTYgMjUuODEyMkM2My4yNiAyNS45NjYzIDYzLjYyNTYgMjUuNzcwMiA2My43NjYyIDI1LjA1NTZDNjMuODY0NiAyNC40OTUyIDY0LjExNzcgMjMuOTQ4OCA2NC4zMDA1IDIzLjQwMjNDNjQuNjgwMiAyMi4xOTc0IDY1LjE0NDIgMjEuMDIwNSA2NC45MDUyIDE5LjU5MTNaXCJcclxuICAgICAgICAgICAgZmlsbD1cIiNGRkYzRTdcIlxyXG4gICAgICAgICAvPlxyXG4gICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICBkPVwiTTg5LjI0NjIgMTcuMDk3Qzg5LjI0NjIgMTcuODk1NyA4OS4yNDYyIDE4LjcwODMgODkuMjQ2MiAxOS41MzQ5Qzg5LjU5NzcgMTkuNTQ5IDg5LjgyMjcgMTkuNTYzIDkwLjE3NDIgMTkuNTkxQzkwLjE3NDIgMTguNDcwMSA5MC4yMzA1IDE3LjM3NzMgOTAuMTYwMiAxNi4yOTg0QzkwLjEwMzkgMTUuNTU1OCA5MC40Njk1IDE1LjUyNzggOTEuMDMyIDE1LjUyNzhDOTEuNTEwMSAxNS41Mjc4IDkxLjY5MjkgMTUuNjUzOSA5MS42Nzg5IDE2LjE1ODNDOTEuNjM2NyAxOS4xMDA2IDkxLjYzNjcgMjIuMDQyOSA5MS42MDg1IDI0Ljk3MTJDOTEuNjA4NSAyNS4yMzc0IDkxLjQ4MiAyNS41MDM2IDkxLjQxMTcgMjUuNzY5OEM5MS41MzgyIDI1Ljc2OTggOTEuODE5NSAyNS43Njk4IDkyLjE0MjkgMjUuNzY5OEM5Mi4xNDI5IDIyLjg2OTYgOTIuMTQyOSAyMC4wMTEzIDkyLjE0MjkgMTcuMTUzMUM5Mi4xOTkxIDE3LjEyNTEgOTIuMjY5NSAxNy4wOTcgOTIuMzI1NyAxNy4wNTVDOTIuNDEwMSAxNy4xODExIDkyLjU3ODggMTcuMzA3MiA5Mi41Nzg4IDE3LjQzMzNDOTIuNTc4OCAyMC4wOTU0IDkyLjU3ODggMjIuNzU3NSA5Mi41NTA3IDI1LjQwNTVDOTIuNTUwNyAyNS42NzE4IDkyLjM5NiAyNi4xMjAxIDkyLjI2OTUgMjYuMTQ4MUM5MS44NDc2IDI2LjIxODIgOTEuMzgzNiAyNi4xNzYxIDkwLjk3NTggMjYuMDVDOTAuNzIyNyAyNS45OCA5MC41NTM5IDI1LjY4NTggOTAuMjAyNCAyNS4zNjM1QzkwLjIwMjQgMjQuMzEyNyA5MC4yMDI0IDIzLjA2NTcgOTAuMjAyNCAyMS43NjI3Qzg5Ljg5MyAyMS43NjI3IDg5LjY1NCAyMS43NjI3IDg5LjMxNjUgMjEuNzYyN0M4OS4zMTY1IDIyLjkzOTYgODkuMzQ0NiAyNC4xMTY1IDg5LjMwMjQgMjUuMzA3NUM4OS4yODgzIDI1LjYwMTcgODkuMDkxNSAyNi4xNDgxIDg4Ljk3OSAyNi4xNDgxQzg4LjUxNDkgMjYuMTYyMSA4OC4wOTMxIDI2LjIzMjIgODcuNTcyOCAyNS45MDk5Qzg2LjY0NDcgMjUuMzM1NSA4Ni45NjgxIDI0LjU5MjkgODYuOTY4MSAyMy45MDY0Qzg2LjkyNTkgMjEuMzQyNCA4Ni45ODIyIDE4Ljc3ODQgODYuOTI1OSAxNi4yMTQ0Qzg2LjkxMTkgMTUuNDQzNyA4Ny4zNDc4IDE1LjU2OTggODcuODExOCAxNS41Mjc4Qzg4LjM4ODQgMTUuNDcxOCA4OC40ODY4IDE1Ljc2NiA4OC40NzI4IDE2LjI0MjRDODguNDQ0NiAxNy4xOTUxIDg4LjQzMDYgMTguMTYxOSA4OC40MzA2IDE5LjExNDZDODguNDMwNiAxOS4yNjg3IDg4LjU4NTMgMTkuNDIyOSA4OC42Njk2IDE5LjU3N0M4OC43NTQgMTkuNDIyOSA4OC44OTQ2IDE5LjI2ODcgODguOTA4NyAxOS4xMDA2Qzg4LjkzNjggMTguNTgyMiA4OC45MDg3IDE4LjA3NzggODguOTIyNyAxNy41NTk0Qzg4LjkyMjcgMTcuNDA1MyA4OC45OTMgMTcuMjUxMiA4OS4wMjEyIDE3LjA5N0M4OS4wOTE1IDE3LjA5NyA4OS4xNjE4IDE3LjA5NyA4OS4yNDYyIDE3LjA5N1pNODguOTA4NyAyMS40ODI1Qzg5LjM3MjcgMjEuNDU0NSA4OS43MzgzIDIxLjQyNjQgOTAuMTE4IDIxLjQxMjRDOTAuMTE4IDIxLjM3MDQgOTAuMTAzOSAyMS4zMjg0IDkwLjEwMzkgMjEuMjg2M0M4OS41NDE1IDIxLjI4NjMgODguOTkzIDIxLjI4NjMgODguNDE2NSAyMS4yODYzQzg4LjQxNjUgMjIuNTYxMyA4OC40MzA2IDIzLjc2NjMgODguNDAyNCAyNC45NzEyQzg4LjQwMjQgMjUuMjUxNCA4OC4yMzM3IDI1LjUzMTYgODguMTM1MyAyNS44MTE5Qzg4LjMwNCAyNS43OTc5IDg4LjU3MTIgMjUuNzgzOCA4OC45MDg3IDI1Ljc2OThDODguOTA4NyAyNC4zNDA3IDg4LjkwODcgMjIuOTM5NiA4OC45MDg3IDIxLjQ4MjVaXCJcclxuICAgICAgICAgICAgZmlsbD1cIiNGRkYzRTdcIlxyXG4gICAgICAgICAvPlxyXG4gICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICBkPVwiTTM5LjM1NSAyMC41NDM2QzM5LjU1MTkgMjAuNDU5NiAzOS44MDUgMjAuNDMxNSAzOS45MzE1IDIwLjI5MTRDNDAuNDk0IDE5LjYxODkgNDAuNTkyNCAxOC44MjAzIDQwLjQ2NTkgMTcuOTkzNkM0MC40MjM3IDE3LjcyNzQgNDAuMzM5MyAxNy40NjEyIDQwLjI2OSAxNy4xOTVDNDEuMTgzIDE3LjMyMTEgNDEuMDU2NSAxOS4zODA3IDQwLjEwMDMgMjAuNzExOEM0MS4yOTU1IDIxLjkwMjcgNDEuMjY3NCAyMy4zMzE4IDQwLjg0NTUgMjQuNzg5QzQwLjU1MDIgMjUuNzk3OCAzOS43MDY1IDI2LjE0OCAzOC43MzYzIDI2LjIwNDFDMzguMjAxOSAyNi4yNDYxIDM3LjY1MzUgMjYuMjE4MSAzNy4xMTkyIDI2LjIxODFDMzYuNTAwNSAyNi4yMDQxIDM1Ljk2NjEgMjUuNjk5NyAzNS45NjYxIDI1LjA4MzJDMzUuOTUyMSAyMi4wNzA4IDM1Ljk1MiAxOS4wNzI1IDM1LjkzOCAxNi4wNjAxQzM1LjkzOCAxNS42Mzk4IDM2LjEwNjcgMTUuNTQxNyAzNi40ODY0IDE1LjU1NTdDMzcuMDA2NyAxNS41Njk3IDM3LjUxMjkgMTUuNTU1NyAzOC4wMzMyIDE1LjU2OTdDMzkuMjg0NyAxNS41OTc3IDM5Ljk1OTYgMTYuMjI4MiA0MC4wODYyIDE3LjQ4OTJDNDAuMTk4NyAxOC41NTQxIDQwLjE1NjUgMTkuNTkwOSAzOS4yMTQ0IDIwLjM3NTVDMzkuMjcwNiAyMC40MTc1IDM5LjMxMjggMjAuNDczNiAzOS4zNTUgMjAuNTQzNlpNMzYuODY2MSAyNS43Njk3QzM4LjAzMzIgMjUuNjcxNyAzOS40MjUzIDI2LjMzMDIgNDAuMjY5IDI1LjA1NTJDNDEuMDAwMiAyMy45NjIzIDQwLjgzMTUgMjIuNzI5MyA0MC4yOTcxIDIxLjU1MjRDNDAuMzk1NiAyMi42NTkzIDQwLjU1MDIgMjMuNzgwMiAzOS45MDM0IDI0Ljc4OUMzOS4xNzIyIDI1LjkyMzkgMzcuOTQ4OCAyNS41ODc2IDM2Ljg2NjEgMjUuNzY5N1pNMzguMzU2NiAyMS43MjA2QzM4LjMwMDQgMjEuNzkwNiAzOC4yNDQxIDIxLjg0NjcgMzguMTg3OSAyMS45MTY3QzM4LjE4NzkgMjIuNTg5MiAzOC4xODc5IDIzLjI2MTggMzguMTg3OSAyMy45NjIzQzM4LjgzNDcgMjMuNjY4MSAzOS4xNDQxIDIyLjk5NTYgMzguOTA1IDIyLjI2N0MzOC44MzQ3IDIyLjA1NjggMzguNTM5NCAyMS45MDI3IDM4LjM1NjYgMjEuNzIwNlpNMzguMTczOCAxNy42MDEzQzM4LjE3MzggMTguMzI5OSAzOC4xNzM4IDE4LjkzMjQgMzguMTczOCAxOS42MTg5QzM4LjgwNjYgMTkuMTAwNSAzOC43MzYzIDE4LjQ5OCAzOC42NTE5IDE3LjkwOTZDMzguNjM3OCAxNy43OTc1IDM4LjM4NDcgMTcuNzI3NCAzOC4xNzM4IDE3LjYwMTNaTTM3LjQ4NDggMTkuNjc0OUMzNy41NTUxIDE5LjY3NDkgMzcuNjI1NCAxOS42ODkgMzcuNjgxNiAxOS42ODlDMzguMDA1MSAxOC45MDQzIDM3LjM3MjMgMTcuOTM3NiAzOC4xNzM4IDE3LjE5NUMzNy44OTI2IDE3LjE5NSAzNy42ODE2IDE3LjE5NSAzNy40NzA3IDE3LjE5NUMzNy40ODQ4IDE4LjAzNTcgMzcuNDg0OCAxOC44NjIzIDM3LjQ4NDggMTkuNjc0OVpNMzcuNTEyOSAyMS4zNDIzQzM3LjUxMjkgMjIuMjUzIDM3LjUxMjkgMjMuMTQ5NyAzNy41MTI5IDI0LjAzMjRDMzguMDE5MSAyMy4xOTE3IDM3LjM1ODIgMjIuMTQwOSAzOC4xMDM1IDIxLjM0MjNDMzcuOTIwNyAyMS4zNDIzIDM3LjcwOTggMjEuMzQyMyAzNy41MTI5IDIxLjM0MjNaXCJcclxuICAgICAgICAgICAgZmlsbD1cIiNGRkYzRTdcIlxyXG4gICAgICAgICAvPlxyXG4gICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICBkPVwiTTk2LjMzMzYgMjUuOTc5OUM5Ny40MTYzIDI2LjE3NiA5OC4wMzUgMjUuOTY1OSA5OC40MTQ3IDI1LjA5NzJDOTguNzUyMiAyNC4zMjY2IDk5LjAzMzQgMjMuNDcxOSA5OS4xMDM3IDIyLjY0NTJDOTkuMjU4NCAyMC44MDk4IDk5LjMxNDcgMTguOTYwNCA5OC41OTc1IDE3LjE5NUM5OC42NTM3IDE3LjE1MjkgOTguNzEgMTcuMTEwOSA5OC43NjYyIDE3LjA2ODlDOTguODkyOCAxNy4yMzcgOTkuMDc1NiAxNy4zOTExIDk5LjEzMTggMTcuNTczM0M5OS42MzgxIDE5LjIyNjYgOTkuNjgwMyAyMC45MjE5IDk5LjQ4MzQgMjIuNjE3MkM5OS4zODUgMjMuNDU3OSA5OS4xNzQgMjQuMzEyNiA5OC44MzY2IDI1LjA4MzJDOTguMTg5NyAyNi41NDAzIDk2Ljg5NiAyNi43NjQ1IDk1LjU0NjEgMjUuOTM3OEM5NC40MzUyIDI1LjI1MTMgOTMuOTg1MiAyNC4yNTY1IDkzLjc4ODQgMjMuMDY1NkM5My40OTMxIDIxLjIwMjEgOTMuNDY1IDE5LjM1MjcgOTMuOTQzMSAxNy41MTcyQzk0LjA2OTYgMTcuMDI2OCA5NC4yODA1IDE2LjUzNjQgOTQuNTYxOCAxNi4xMzAxQzk1LjMyMTEgMTQuOTk1MiA5Ni44ODIgMTQuOTM5MiA5Ny42MTMyIDE2LjEwMjFDOTguMDQ5MSAxNi44MDI3IDk4LjM4NjYgMTcuNjg1MyA5OC40NDI4IDE4LjQ5OEM5OC41NDEzIDIwLjEwOTMgOTguNTEzMSAyMS43NDg1IDk4LjM0NDQgMjMuMzU5OEM5OC4yNDYgMjQuNDk0NyA5Ny43Mzk3IDI1LjU1OTUgOTYuMzMzNiAyNS45Nzk5Wk05Ni4zODk4IDI0LjA2MDRDOTcuMzAzOCAyMi45ODE1IDk3LjQzMDQgMTguNjY2MSA5Ni41NDQ1IDE3LjQwNTFDOTUuNzk5MiAxOS43MTY5IDk1Ljk5NjEgMjEuODg4NyA5Ni4zODk4IDI0LjA2MDRaTTk1Ljg2OTUgMjQuMjg0NUM5NS41NzQyIDIxLjgxODYgOTUuMjY0OSAxOS40MjI3IDk2LjQzMiAxNy4xMTA5Qzk1Ljg1NTUgMTYuODcyNyA5NS41NDYxIDE3LjA0MDggOTUuMzc3NCAxNy44MTE0Qzk0Ljk2OTYgMTkuNjQ2OSA5NC45NTU1IDIxLjUxMDQgOTUuMzc3NCAyMy4zNTk4Qzk1LjQ2MTcgMjMuNjk2MSA5NS43MDA4IDIzLjk3NjMgOTUuODY5NSAyNC4yODQ1WlwiXHJcbiAgICAgICAgICAgIGZpbGw9XCIjRkZGM0U3XCJcclxuICAgICAgICAgLz5cclxuICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgZD1cIk0xMDQuMjkzIDIwLjgyNDJDMTA0LjQ2MSAyMC40ODc5IDEwNC43IDIwLjE1MTcgMTA0Ljc5OSAxOS43ODc0QzEwNC45MzkgMTkuMTk4OSAxMDQuOTk2IDE4LjU5NjUgMTA1LjA4IDE4LjAwOEMxMDUuMTkyIDE3LjI2NTQgMTA1LjQ3NCAxNy4wNTUzIDEwNi40ODYgMTcuMTM5M0MxMDUuMjc3IDE3LjUzMTYgMTA1LjQ0NiAxOC40MjgzIDEwNS4zMzMgMTkuMjQxQzEwNS4yNjMgMTkuNzQ1NCAxMDUuMDEgMjAuMjM1NyAxMDQuODEzIDIwLjgyNDJDMTA1LjU3MiAyMS41Mzg4IDEwNS40MDMgMjIuNjg3NyAxMDUuNjU3IDIzLjcxMDVDMTA1LjcxMyAyMy45NzY3IDEwNS45NjYgMjQuMTg2OCAxMDYuMTIxIDI0LjQyNUMxMDYuMjE5IDI0LjU3OTIgMTA2LjQwMiAyNC43ODkzIDEwNi4zNzQgMjQuOTI5NEMxMDYuMjYxIDI1LjQzMzggMTA2LjA2NCAyNS45MjQyIDEwNS44OTYgMjYuNDE0NkMxMDUuNDQ2IDI2LjI0NjUgMTA0Ljk5NiAyNi4wNTAzIDEwNC41MzIgMjUuODk2MkMxMDMuNjAzIDI1LjU3MzkgMTAzLjUxOSAyNC43NjEzIDEwMy40MDcgMjMuOTc2N0MxMDMuMzA4IDIzLjI3NjEgMTAzLjIxIDIyLjU3NTYgMTAyLjk4NSAyMS44ODlDMTAyLjk4NSAyMy4wOCAxMDIuOTcxIDI0LjI1NjkgMTAyLjk5OSAyNS40NDc4QzEwMy4wMTMgMjUuOTk0MyAxMDIuODg2IDI2LjMzMDUgMTAyLjI2OCAyNi4yMTg0QzEwMS45ODYgMjYuMTc2NCAxMDEuNjA3IDI2LjIwNDQgMTAxLjQyNCAyNi4wMzYzQzEwMS4wMDIgMjUuNjU4IDEwMC41MzggMjUuMzkxOCAxMDAuNTY2IDI0LjU5MzJDMTAwLjY2NSAyMS44MTkgMTAwLjYyMiAxOS4wNDQ4IDEwMC41OCAxNi4yNzA2QzEwMC41NjYgMTUuNjQwMSAxMDAuODA1IDE1LjU0MjEgMTAxLjM1NCAxNS41NDIxQzEwMS45MTYgMTUuNTQyMSAxMDIuMTY5IDE1LjY1NDIgMTAyLjEyNyAxNi4yODQ3QzEwMi4wNzEgMTcuMjA5NCAxMDIuMDg1IDE4LjE0ODEgMTAyLjA5OSAxOS4wODY4QzEwMi4wOTkgMTkuMjU1IDEwMi4yODIgMTkuNDM3MSAxMDIuMzggMTkuNjA1M0MxMDIuNDc5IDE5LjQzNzEgMTAyLjY2MSAxOS4yNjkgMTAyLjY3NSAxOS4xMDA5QzEwMi43MTggMTguNDU2NCAxMDIuNjg5IDE3LjgxMTggMTAyLjY4OSAxNy4xNjczQzEwMi43NiAxNy4xNjczIDEwMi44MyAxNy4xNTMzIDEwMi45IDE3LjE1MzNDMTAyLjkgMTcuNzQxOCAxMDIuOSAxOC4zMzAzIDEwMi45IDE4LjkxODdDMTAyLjk3MSAxOC45MTg3IDEwMy4wNDEgMTguOTMyNyAxMDMuMDk3IDE4LjkzMjdDMTAzLjE5NiAxOC4xOTAxIDEwMy4yOCAxNy40NDc2IDEwMy40MDcgMTYuNzA1QzEwMy41NzUgMTUuNzgwMyAxMDQuMTM4IDE1LjMxNzkgMTA1LjAxIDE1LjM3MzlDMTA1LjA4IDE1LjY1NDIgMTA1LjE2NCAxNS45MzQ0IDEwNS4yMDcgMTYuMjI4NkMxMDUuMjYzIDE2LjU2NDkgMTA1LjM2MSAxNi45MDExIDEwNC44NTUgMTcuMDY5M0MxMDQuNjcyIDE3LjEyNTMgMTA0LjU3NCAxNy41MTc2IDEwNC41MDMgMTcuNzY5OEMxMDQuMjc4IDE4LjY1MjUgMTA0LjUwMyAxOS42NzUzIDEwMy42MDMgMjAuNDMxOUMxMDMuODU3IDIwLjU1OCAxMDQuMDY4IDIwLjY5ODEgMTA0LjI5MyAyMC44MjQyQzEwNC4yNjQgMjIuMTEzMiAxMDQuNzU3IDIzLjkzNDYgMTA1LjI0OSAyNC4wODg4QzEwNS4wOCAyMi45Mzk5IDEwNS4yMjEgMjEuNzM0OSAxMDQuMjkzIDIwLjgyNDJaTTEwMi42NzUgMjUuNzk4MUMxMDIuNjc1IDI0LjI1NjkgMTAyLjY3NSAyMi43OTk4IDEwMi42NzUgMjEuMjg2NkMxMDIuNTIxIDIxLjI3MjYgMTAyLjMxIDIxLjI3MjYgMTAyLjExMyAyMS4yNTg2QzEwMS45MyAyMi44Mjc4IDEwMi4zMzggMjQuMzI3IDEwMS45MDIgMjUuNzk4MUMxMDIuMDg1IDI1Ljc5ODEgMTAyLjMzOCAyNS43OTgxIDEwMi42NzUgMjUuNzk4MVpNMTA1LjA5NCAyNS45MjQyQzEwNS4zMDUgMjUuOTgwMyAxMDUuNTAyIDI2LjAzNjMgMTA1LjY4NSAyNi4wOTIzQzEwNi4wNSAyNC44MzE0IDEwNi4wNSAyNC44MzE0IDEwNS40MDMgMjQuNjIxMkMxMDUuMzA1IDI1LjAyNzUgMTA1LjIwNyAyNS40MzM4IDEwNS4wOTQgMjUuOTI0MlpcIlxyXG4gICAgICAgICAgICBmaWxsPVwiI0ZGRjNFN1wiXHJcbiAgICAgICAgIC8+XHJcbiAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgIGQ9XCJNNTIuMDgwOSAyMC44Nzk4QzUyLjgyNjIgMjEuNjA4NCA1Mi42ODU2IDIyLjcyOTMgNTIuODk2NSAyMy43MjRDNTIuOTM4NyAyMy45MzQyIDUzLjAwOSAyNC4xNzI0IDUzLjEzNTUgMjQuMzU0NUM1My4yNjIxIDI0LjU2NDcgNTMuNjEzNiAyNC43MzI4IDUzLjU5OTYgMjQuOTE1QzUzLjU3MTQgMjUuMzkxMyA1My40MTY4IDI1Ljg2NzcgNTMuMjQ4IDI2LjMxNjFDNTMuMjE5OSAyNi40MTQxIDUyLjg2ODQgMjYuNDU2MiA1Mi42OTk2IDI2LjQxNDFDNTEuODQxOSAyNi4yMzIgNTEuMDU0NCAyNS4zNDkzIDUwLjkyNzggMjQuNDUyNkM1MC44Mjk0IDIzLjczOCA1MC43NDUgMjMuMDIzNSA1MC42MzI1IDIyLjMwODlDNTAuNjA0NCAyMi4xMTI4IDUwLjUyMDEgMjEuOTE2NiA1MC40NDk3IDIxLjczNDVDNTAuMzc5NCAyMS43NDg1IDUwLjI5NTEgMjEuNzYyNSA1MC4yMjQ4IDIxLjc3NjVDNTAuMjI0OCAyMi4yOTQ5IDUwLjIyNDggMjIuODEzMyA1MC4yMjQ4IDIzLjMzMTdDNTAuMjI0OCAyNC4wMDQzIDUwLjI1MjkgMjQuNjkwOCA1MC4yMTA3IDI1LjM2MzNDNTAuMTk2NiAyNS42NDM1IDUwLjAyNzkgMjYuMTc2IDQ5Ljk0MzUgMjYuMTc2QzQ5LjQ3OTUgMjYuMTc2IDQ5LjAxNTQgMjYuMzg2MSA0OC41MjMzIDI1LjkyMzhDNDguMDQ1MiAyNS40NzU0IDQ4LjA4NzQgMjUuMDQxMSA0OC4wODc0IDI0LjU1MDdDNDguMDg3NCAyMS45NDQ2IDQ4LjA4NzQgMTkuMzI0NiA0OC4wODc0IDE2LjcxODVDNDguMDg3NCAxNS40MTU1IDQ4LjA4NzQgMTUuNDAxNSA0OS41MDc2IDE1LjY1MzdDNDkuNTA3NiAxNi45NDI3IDQ5LjUwNzYgMTguMjU5OCA0OS41MDc2IDE5LjU3NjhDNDkuNjA2IDE5LjU5MDggNDkuNjkwNCAxOS42MDQ4IDQ5Ljc4ODggMTkuNjA0OEM1MC4xNTQ0IDE4Ljg0ODIgNDkuNzQ2NyAxNy45Mzc1IDQ5Ljk5OTggMTcuMTUyOUM1MC4wNTYgMTcuMTUyOSA1MC4xMTIzIDE3LjE1MjkgNTAuMTgyNiAxNy4xNTI5QzUwLjE4MjYgMTcuODgxNSA1MC4xODI2IDE4LjU5NiA1MC4xODI2IDE5LjMyNDZDNTAuMjgxIDE5LjMzODYgNTAuMzY1NCAxOS4zMzg2IDUwLjQ2MzggMTkuMzUyNkM1MC41NzYzIDE4LjU5NiA1MC42ODg4IDE3LjgyNTQgNTAuNzg3MiAxNy4wNjg4QzUwLjg4NTcgMTYuMzY4MyA1MS4wODI1IDE1Ljc1MTggNTEuNzcxNSAxNS40MTU1QzUyLjIwNzUgMTUuMjA1NCA1Mi41MDI4IDE1LjI4OTQgNTIuNTczMSAxNS43OTM4QzUyLjY0MzQgMTYuMjk4MiA1Mi45ODA5IDE2Ljg3MjcgNTIuMTY1MyAxNy4xNjY5QzUxLjk5NjUgMTcuMjM3IDUxLjk1NDQgMTcuNzQxMyA1MS45MTIyIDE4LjA0OTZDNTEuNzg1NiAxOC44OTAyIDUxLjg0MTkgMTkuNzg3IDUxLjA4MjUgMjAuNDE3NEM1MS42MzA5IDIwLjg2NTggNTEuODcgMjAuNDE3NCA1MS45Njg0IDIwLjA4MTJDNTIuMTUxMiAxOS40MzY3IDUyLjIzNTYgMTguNzY0MSA1Mi4zMzQgMTguMTA1NkM1Mi40NDY1IDE3LjM0OSA1Mi42ODU2IDE3LjEyNDkgNTMuNTQzMyAxNy4xOTQ5QzUyLjYxNTMgMTcuNjU3MyA1Mi42ODU2IDE4LjQ1NTkgNTIuNTg3MSAxOS4yMTI1QzUyLjUzMDkgMTkuNzE2OSA1Mi4yOTE4IDIwLjIyMTMgNTIuMDgwOSAyMC44Nzk4Wk00OS41MjE3IDIxLjIzMDFDNDkuNTIxNyAyMi41MzMxIDQ5LjUzNTcgMjMuNzk0MSA0OS41MDc2IDI1LjA0MTFDNDkuNTA3NiAyNS4zMDczIDQ5LjMxMDcgMjUuNTU5NSA0OS4yMjY0IDI1Ljc2OTZDNDkuMzUyOSAyNS43Njk2IDQ5LjYyMDEgMjUuNzY5NiA0OS45MTU0IDI1Ljc2OTZDNDkuOTk5OCAyNC4yNTY1IDQ5Ljg1OTIgMjIuNzg1MyA1MC4wMTM4IDIxLjI3MjFDNDkuOTg1NyAyMS4yNzIxIDQ5Ljc4ODggMjEuMjQ0MSA0OS41MjE3IDIxLjIzMDFaTTUyLjI2MzcgMjQuMTAyM0M1Mi4zMzQgMjQuMDg4MyA1Mi40MDQzIDI0LjA4ODMgNTIuNDc0NiAyNC4wNzQzQzUyLjQ3NDYgMjIuNTE5MSA1Mi4yNjM3IDIxLjY5MjQgNTEuNzg1NiAyMS4yNTgxQzUxLjk1NDQgMjIuMjI0OSA1Mi4xMDkgMjMuMTYzNiA1Mi4yNjM3IDI0LjEwMjNaTTUyLjg5NjUgMjQuNjA2N0M1Mi43NTU5IDI1LjE1MzIgNTIuNjQzNCAyNS41NTk1IDUyLjUzMDkgMjUuOTc5OEM1Mi41NzMxIDI2LjAyMTggNTIuNjI5MyAyNi4wNzc5IDUyLjY3MTUgMjYuMTE5OUM1Mi43OTgxIDI2LjAyMTggNTMuMDA5IDI1LjkzNzggNTMuMDM3MSAyNS44MTE3QzUzLjEyMTUgMjUuNDMzNCA1My41MTUyIDI1LjAyNzEgNTIuODk2NSAyNC42MDY3WlwiXHJcbiAgICAgICAgICAgIGZpbGw9XCIjRkZGM0U3XCJcclxuICAgICAgICAgLz5cclxuICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgZD1cIk0xOC45MDkyIDIzLjU4NDFDMTguNzk2NyAyNC4yODQ3IDE4LjcxMjMgMjQuOTU3MiAxOC41NzE3IDI1LjYxNTdDMTguNTI5NSAyNS44MjU5IDE4LjMzMjcgMjYuMTc2MSAxOC4yMDYxIDI2LjE5MDJDMTcuNzQyMSAyNi4xOTAyIDE3LjIwNzcgMjYuMTkwMiAxNi44MjgxIDI1Ljk4QzE2LjM1IDI1LjcxMzggMTYuNDQ4NCAyNS4xODE0IDE2LjU2MDkgMjQuNjc3QzE3LjE2NTYgMjEuODYwOCAxNy43NDIxIDE5LjAzMDUgMTguMzA0NSAxNi4yMDAzQzE4LjQwMyAxNS43MjM5IDE4LjU3MTcgMTUuNDk5OCAxOS4wNzc5IDE1LjU1NThDMTkuNTEzOSAxNS41OTc4IDE5LjkzNTcgMTUuNDI5NyAyMC4wNjIzIDE2LjE1ODNDMjAuNjM4OCAxOS4yNjg3IDIxLjMxMzggMjIuMzUxMSAyMS45NDY1IDI1LjQ0NzZDMjEuOTYwNiAyNS40ODk2IDIxLjkxODQgMjUuNTMxNiAyMS45MDQzIDI1LjYxNTdDMjEuNjkzNCAyNS42NDM3IDIxLjQ4MjUgMjUuNjg1OCAyMS4yNTc1IDI1LjcxMzhDMjEuMjU3NSAyNS43NDE4IDIxLjI1NzUgMjUuNzU1OCAyMS4yNTc1IDI1Ljc4MzhDMjEuNTUyOCAyNS43ODM4IDIxLjg0ODEgMjUuNzgzOCAyMi4yMTM3IDI1Ljc4MzhDMjEuNjIzMSAyMi45MTE2IDIxLjAzMjUgMjAuMDUzMyAyMC40NTYgMTcuMjA5MUMyMC41MTIyIDE3LjE2NzEgMjAuNTgyNSAxNy4xMzkgMjAuNjM4OCAxNy4wOTdDMjAuNzIzMiAxNy4yNTExIDIwLjg0OTcgMTcuMzkxMiAyMC44OTE5IDE3LjU1OTRDMjEuMjU3NSAxOS4yODI3IDIxLjYyMzEgMjEuMDA2MSAyMS45NzQ3IDIyLjcyOTRDMjIuMTcxNSAyMy42ODIyIDIyLjM1NDMgMjQuNjM0OSAyMi41NjUyIDI1LjU4NzdDMjIuNjYzNyAyNi4wNjQxIDIyLjQ5NDkgMjYuMjE4MiAyMi4wMzA5IDI2LjIzMjJDMjAuODQ5NyAyNi4yNjAyIDIwLjQ3MDEgMjUuOTggMjAuMjg3MyAyNC44MDMxQzIwLjI1OTEgMjQuNjYzIDIwLjIzMSAyNC41MzY5IDIwLjIwMjkgMjQuMzk2N0MxOS45OTIgMjMuNDE2IDE5Ljk5MiAyMy40MTYgMTguOTA5MiAyMy41ODQxWk0xOC4xNDk5IDI1Ljc4MzhDMTguMjIwMiAyNS40MDU1IDE4LjI2MjQgMjUuMDgzMyAxOC4zMTg2IDI0Ljc2MUMxOC40MDMgMjQuMjk4NyAxOC4zNzQ5IDIzLjczODIgMTguNjI4IDIzLjQzQzE4Ljg1MyAyMy4xNjM4IDE5LjQyOTUgMjMuMTkxOCAyMC4wMjAxIDIzLjAzNzdDMTkuMzQ1MSAyMy4wMzc3IDE4Ljg1MyAyMy4wMzc3IDE4LjI3NjQgMjMuMDM3N0MxOC4xNjM5IDIzLjY4MjIgMTguMDc5NiAyNC4zNTQ3IDE3LjkxMDggMjQuOTk5MkMxNy44NDA1IDI1LjMwNzUgMTcuNjAxNSAyNS41NTk3IDE3LjQzMjcgMjUuODM5OUMxNy4zNzY1IDI1LjgyNTkgMTcuMzA2MiAyNS44MTE5IDE3LjI0OTkgMjUuNzgzOEMxNy41NDUyIDI1Ljc4MzggMTcuODI2NCAyNS43ODM4IDE4LjE0OTkgMjUuNzgzOFpNMTguNDU5MiAyMS42NjQ2QzE5LjA3NzkgMjEuMjMwMyAxOS4zNzMyIDE4Ljk4ODUgMTkuMDQ5OCAxOC4wNjM4QzE4Ljg2NyAxOS4yMTI3IDE4LjY3MDIgMjAuMzYxNiAxOC40NTkyIDIxLjY2NDZaXCJcclxuICAgICAgICAgICAgZmlsbD1cIiNGRkYzRTdcIlxyXG4gICAgICAgICAvPlxyXG4gICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICBkPVwiTTI0Ljg1NzIgMTUuNTQxOUMyNC44NTcyIDE3LjA5NzEgMjQuODU3MiAxOC41MjYyIDI0Ljg1NzIgMTkuOTY5M0MyNC45Mjc1IDE5Ljk2OTMgMjQuOTk3OCAxOS45NjkzIDI1LjA2ODIgMTkuOTU1M0MyNS4wNjgyIDE5LjAxNjYgMjUuMDY4MiAxOC4wNzc4IDI1LjA2ODIgMTcuMTM5MUMyNS4xNTI1IDE3LjEyNTEgMjUuMjM2OSAxNy4xMjUxIDI1LjMyMTMgMTcuMTExMUMyNS42NTg3IDE4LjExOTkgMjUuMjUxIDE5LjIyNjcgMjUuNTQ2MyAyMC4yNzc2QzI2LjE1MDkgMjAuMjc3NiAyNi41MzA2IDIwLjE2NTUgMjYuNTAyNCAxOS40MzY5QzI2LjQ2MDMgMTguMzQ0MSAyNi41MTY1IDE3LjIzNzIgMjYuNDc0MyAxNi4xNDQzQzI2LjQ0NjIgMTUuMzg3NyAyNi45NTI0IDE1LjU2OTkgMjcuMzYwMiAxNS41Mjc4QzI3Ljg1MjQgMTUuNDcxOCAyOC4wMDcxIDE1LjY2NzkgMjguMDA3MSAxNi4xNTgzQzI3Ljk3ODkgMTkuMTAwNiAyNy45OTMgMjIuMDQzIDI3Ljk1MDggMjQuOTg1M0MyNy45NTA4IDI1LjI1MTUgMjcuNzI1OCAyNS41MzE3IDI3LjYxMzMgMjUuNzY5OUMyNy42ODM2IDI1Ljc2OTkgMjcuOTUwOCAyNS43Njk5IDI4LjMwMjMgMjUuNzY5OUMyOC4zMDIzIDIyLjg2OTYgMjguMzAyMyAxOS45OTc0IDI4LjMwMjMgMTcuMTExMUMyOC4zNTg2IDE3LjA5NzEgMjguNDE0OCAxNy4wNjkxIDI4LjQ3MTEgMTcuMDU1QzI4LjU0MTQgMTcuMTY3MSAyOC42NjggMTcuMjY1MiAyOC42NjggMTcuMzc3M0MyOC42ODIgMjAuMTA5NCAyOC42ODIgMjIuODQxNiAyOC42NTM5IDI1LjU3MzdDMjguNjUzOSAyNS43Njk5IDI4LjQ4NTEgMjYuMTIwMiAyOC4zNTg2IDI2LjEzNDJDMjcuOTM2NyAyNi4xNzYyIDI3LjM4ODMgMjYuMjQ2MyAyNy4wOTMgMjYuMDM2MUMyNi43NDE1IDI1Ljc4MzkgMjYuMzkgMjUuMzkxNiAyNi40NjAzIDI0Ljc3NTFDMjYuNTU4NyAyNC4wMTg1IDI2LjQ4ODQgMjMuMjQ3OSAyNi40ODg0IDIyLjM5MzJDMjUuNDc1OSAyMi41NjE0IDI0LjY3NDQgMjIuMzM3MiAyNC4wMjc2IDIxLjUzODZDMjMuNTc3NiAyMC45NzgxIDIzLjMzODYgMjAuMzg5NyAyMy4zMzg2IDE5LjY4OTFDMjMuMzI0NSAxOC40NzAyIDIzLjMzODYgMTcuMjY1MiAyMy4zMTA0IDE2LjA0NjJDMjMuMjk2NCAxNS42Mzk5IDIzLjQ1MTEgMTUuNDk5OCAyMy44NDQ4IDE1LjUyNzhDMjQuMTEyIDE1LjU1NTkgMjQuMzkzMiAxNS41NDE5IDI0Ljg1NzIgMTUuNTQxOVpcIlxyXG4gICAgICAgICAgICBmaWxsPVwiI0ZGRjNFN1wiXHJcbiAgICAgICAgIC8+XHJcbiAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgIGQ9XCJNMzQuMjY0NyAxNS43MjQxQzM0LjA1MzggMTYuMjE0NSAzMy45ODM1IDE2Ljk0MzEgMzMuNjAzOCAxNy4xNjczQzMzLjE2NzkgMTcuNDE5NSAzMi40Nzg5IDE3LjIyMzMgMzEuODYwMiAxNy4yMjMzQzMxLjg2MDIgMTguMDIxOSAzMS44NjAyIDE4Ljc3ODUgMzEuODYwMiAxOS41MzUxQzMxLjkzMDUgMTkuNTM1MSAzMS45ODY3IDE5LjUzNTEgMzIuMDU3IDE5LjUzNTFDMzIuMDU3IDE4Ljg0ODYgMzIuMDU3IDE4LjE2MjEgMzIuMDU3IDE3LjQ2MTVDMzIuOTU3IDE3LjM3NzQgMzMuNzQ0NCAxNy4zMDc0IDM0LjUzMTkgMTcuMjM3M0MzNC42MDIyIDE3LjY1NzcgMzQuNTMxOSAxNy43Mjc3IDMzLjgyODggMTcuNzEzN0MzMy40MDcgMTcuNjk5NyAzMi45OTkyIDE3LjcxMzcgMzIuNTIxMSAxNy43MTM3QzMyLjUyMTEgMTguMzAyMiAzMi41MjExIDE4Ljg3NjYgMzIuNTIxMSAxOS4zNjdDMzMuMTI1NyAxOS41NjMyIDMzLjc0NDQgMTkuNjc1MiAzNC4yMzY2IDE5Ljk4MzVDMzQuNDE5NCAyMC4wOTU2IDM0LjM0OTEgMjAuNjg0IDM0LjMyMSAyMS4wNDgzQzM0LjIzNjYgMjIuNDc3NSAzMy4wNDE0IDIxLjMwMDUgMzIuNTA3IDIxLjg4OUMzMi41MDcgMjIuNDkxNSAzMi41MDcgMjMuMTkyIDMyLjUwNyAyMy44NTA1QzMzLjEyNTcgMjMuOTkwNiAzMy43MDIzIDI0LjA2MDcgMzQuMjUwNyAyNC4yNTY5QzM0LjQ2MTYgMjQuMzI2OSAzNC42NDQ0IDI0LjYyMTEgMzQuNzI4OCAyNC44NTkzQzM0LjgxMzEgMjUuMDgzNSAzNC43NDI4IDI1LjM2MzcgMzQuNzQyOCAyNS42Mjk5QzM0Ljc1NjkgMjYuMDM2MyAzNC41ODgxIDI2LjIzMjQgMzQuMTY2MyAyNi4yMTg0QzMzLjIyNDIgMjYuMjA0NCAzMi4yOTYxIDI2LjIxODQgMzEuMzUzOSAyNi4yMDQ0QzMwLjgwNTUgMjYuMTkwNCAzMC4yOTkzIDI1LjU4NzkgMzAuMjk5MyAyNC45NTc0QzMwLjI5OTMgMjIuMjY3MyAzMC4yOTkzIDE5LjU5MTIgMzAuMjk5MyAxNi45MDExQzMwLjI5OTMgMTUuNTQyIDMwLjI4NTMgMTUuNTQyIDMxLjY3NzQgMTUuNTQyQzMyLjQyMjYgMTUuNTQyIDMzLjE2NzkgMTUuNTQyIDMzLjkyNzIgMTUuNTU2QzMzLjk5NzUgMTUuNTU2IDM0LjA1MzggMTUuNjEyIDM0LjI2NDcgMTUuNzI0MVpNMzMuNTc1NyAyMS4xNzQ0QzMyLjk1NyAyMS4yMDI0IDMyLjM2NjQgMjEuMjMwNSAzMS44ODgzIDIxLjI0NDVDMzEuODg4MyAyMi4yMzkzIDMxLjg4ODMgMjMuMDkzOSAzMS44ODgzIDIzLjk2MjZDMzEuOTU4NiAyMy45NjI2IDMyLjAyODkgMjMuOTYyNiAzMi4wODUyIDIzLjk0ODZDMzIuMDg1MiAyMy4xMjIgMzIuMDg1MiAyMi4zMDkzIDMyLjA4NTIgMjEuNDY4N0MzMi43NDYxIDIxLjQyNjYgMzMuMzIyNiAyMS4zOTg2IDMzLjk1NTQgMjEuMzcwNkMzMy45MjcyIDIwLjkzNjIgMzMuOTEzMiAyMC41NzIgMzMuODg1MSAyMC4yMDc3QzMzLjgxNDcgMjAuMjA3NyAzMy43NTg1IDIwLjIwNzcgMzMuNjg4MiAyMC4yMDc3QzMzLjY2MDEgMjAuNTAxOSAzMy42MzE5IDIwLjc5NjEgMzMuNTc1NyAyMS4xNzQ0Wk0zNC4yOTI4IDI0LjYwNzFDMzQuMTUyMiAyNC42NzcyIDM0LjEyNDEgMjQuNjkxMiAzNC4xMSAyNC43MDUyQzM0LjA4MTkgMjQuNzYxMiAzNC4wMzk3IDI0LjgzMTMgMzQuMDUzOCAyNC45MDE0QzM0LjE4MDQgMjUuNjAxOSAzMy43ODY2IDI1LjcgMzMuMjEwMSAyNS42NzJDMzIuNTQ5MiAyNS42Mjk5IDMxLjg3NDIgMjUuNjU4IDMxLjIxMzMgMjUuNjU4QzMxLjIxMzMgMjUuNyAzMS4yMTMzIDI1Ljc0MiAzMS4yMTMzIDI1Ljc4NDFDMzIuMjM5OCAyNS43ODQxIDMzLjI2NjMgMjUuNzg0MSAzNC4zMDY5IDI1Ljc4NDFDMzQuMjkyOCAyNS4zNzc3IDM0LjI5MjggMjUuMDI3NSAzNC4yOTI4IDI0LjYwNzFaXCJcclxuICAgICAgICAgICAgZmlsbD1cIiNGRkYzRTdcIlxyXG4gICAgICAgICAvPlxyXG4gICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICBkPVwiTTYuODAyNTIgMTcuNTAzNEM2Ljg1ODc3IDE3LjM3NzMgNi45MDA5NSAxNy4yNTEyIDYuOTU3MiAxNy4xMTExQzcuMDQxNTcgMTcuMjA5MiA3LjE2ODEzIDE3LjI5MzMgNy4xODIxOSAxNy4zOTEzQzcuMzUwOTMgMTguMTE5OSA3LjQ5MTU1IDE4Ljg0ODUgNy43MzA2IDE5LjU2M0M3LjkyNzQ2IDE4LjQwMDEgOC4xMTAyNiAxNy4yMzcyIDguMzM1MjUgMTYuMDc0M0M4LjM3NzQ0IDE1Ljg1MDEgOC40ODk5MyAxNS40NTc4IDguNjE2NDkgMTUuNDQzOEM4Ljk2ODAzIDE1LjM4NzggOS4zNDc3IDE1LjQ3MTggOS43MTMzIDE1LjU0MTlDOS43ODM2MSAxNS41NTU5IDkuODUzOTIgMTUuODIyMSA5LjgyNTc5IDE1Ljk2MjJDOS4yOTE0NSAxOC42OTQ0IDguNzQzMDQgMjEuNDQwNSA4LjE4MDU3IDI0LjE3MjdDNy45OTc3NyAyNS4wNjk0IDcuNjMyMTYgMjUuNzk4IDYuNDIyODUgMjUuOTgwMUM3LjYwNDA0IDI2LjEzNDIgOC4wODIxNCAyNS44ODIgOC4zMDcxMyAyNC45MDEzQzguNzcxMTYgMjIuODQxNiA5LjE2NDg5IDIwLjc1NCA5LjU4Njc1IDE4LjY4MDRDOS42ODUxOCAxOC4yMzIgOS43Njk1NSAxNy43Njk2IDkuODY3OTggMTcuMzIxM0M5Ljg5NjEgMTcuMTgxMiA5LjkyNDIzIDE3LjAyNzEgOS45NjY0MSAxNi44ODY5QzEwLjA2NDggMTYuOTcxIDEwLjE2MzMgMTcuMDU1MSAxMC4yNjE3IDE3LjEzOTFDOS45NjY0MSAxOC42NTIzIDkuNjg1MTggMjAuMTY1NSA5LjM4OTg4IDIxLjY3ODdDOS4xNzg5NiAyMi43NDM2IDguOTgyMDkgMjMuODIyNCA4LjcyODk4IDI0Ljg3MzJDOC41NDYxOCAyNS42Mjk4IDguMTY2NTEgMjYuMzAyNCA3LjI5NDY4IDI2LjQwMDRDNi41MDcyMyAyNi40ODQ1IDUuNzMzODMgMjYuMjMyMyA1LjQyNDQ3IDI1LjQ4OTdDNS4yMjc2MSAyNS4wMTMzIDUuMzgyMjkgMjQuMzgyOCA1LjM4MjI5IDIzLjczODNDNi43MzIyMSAyNC40NjY5IDYuOTg1MzIgMjQuMzI2OCA3LjE5NjI1IDIyLjg4MzdDNi41MzUzNSAyMi45Mzk3IDYuNDA4NzkgMjIuNTA1NCA2LjI4MjI0IDIxLjk3MjlDNS43NzYwMSAxOS44NzEzIDUuMjI3NjEgMTcuNzgzNiA0LjY3OTIgMTUuNjU0QzQuODc2MDYgMTUuNTgzOSA1LjA0NDggMTUuNDk5OCA1LjIxMzU1IDE1LjQ1NzhDNi4xMjc1NiAxNS4yNDc2IDYuMjQwMDUgMTUuMzE3NyA2LjQ1MDk4IDE2LjIwMDRDNi41NDk0MSAxNi42MjA3IDYuNzA0MDkgMTcuMDQxMSA2LjgzMDY1IDE3LjQ2MTRDNi45OTkzOSAxOC41OTYzIDcuMTgyMTkgMTkuNzMxMiA3LjM1MDkzIDIwLjg1MjFDNy40MzUzIDIwLjgzOCA3LjUxOTY3IDIwLjgyNCA3LjYxODEgMjAuNzk2QzcuMzM2ODcgMTkuNzMxMiA3LjA2OTY5IDE4LjYxMDMgNi44MDI1MiAxNy41MDM0WlwiXHJcbiAgICAgICAgICAgIGZpbGw9XCIjRkZGM0U3XCJcclxuICAgICAgICAgLz5cclxuICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgZD1cIk03My4xMzE5IDIxLjc2MjhDNzMuMTMxOSAyMy4wMDk4IDczLjEzMTkgMjQuMjk4OCA3My4xMTc4IDI1LjU3MzhDNzMuMTE3OCAyNS42Mjk4IDcyLjkzNSAyNS42ODU5IDcyLjc2NjMgMjUuNzgzOUM3My4xMDM3IDI1Ljc4MzkgNzMuMzcwOSAyNS43ODM5IDczLjcwODQgMjUuNzgzOUM3My43MDg0IDI0LjQ4MDkgNzMuNzA4NCAyMy4yMDU5IDczLjcwODQgMjEuOTQ0OUM3Ni4yNjc3IDIxLjUyNDYgNzYuNzAzNiAyMC43MTIgNzYuMzIzOSAxNy4xNjcyQzc2Ljg0NDIgMTcuMzIxMyA3Ni45ODQ4IDE4LjA0OTkgNzYuODAyIDE5LjY4OTFDNzYuNjQ3MyAyMS4yMzA0IDc1Ljc0NzQgMjIuMDcxIDc0LjA4ODEgMjIuMjExMUM3NC4wODgxIDIzLjE5MTkgNzQuMTE2MiAyNC4xODY3IDc0LjA3NCAyNS4xODE1Qzc0LjA1OTkgMjUuNTMxNyA3My44OTEyIDI2LjE0ODIgNzMuNzIyNSAyNi4xNzYyQzczLjI1ODQgMjYuMjMyMyA3Mi44MDg0IDI2LjMzMDQgNzIuMjYgMjUuODk2QzcxLjY4MzUgMjUuNDE5NiA3MS43NTM4IDI0Ljk3MTMgNzEuNzUzOCAyNC40NTI5QzcxLjczOTcgMjEuNzIwNyA3MS43NTM4IDE4Ljk4ODYgNzEuNzM5NyAxNi4yNTY1QzcxLjczOTcgMTUuNzUyMSA3MS44NTIyIDE1LjUyNzkgNzIuNDAwNyAxNS41Njk5QzcyLjg5MjggMTUuNjExOSA3My4zODUgMTUuNTY5OSA3My44NzcxIDE1LjU4MzlDNzUuMDAyMSAxNS42MTE5IDc1LjU2NDYgMTYuMDE4MyA3NS44NDU4IDE3LjA5NzFDNzYuMTEzIDE4LjEzMzkgNzYuMDk4OSAxOS4xNzA3IDc1LjcwNTIgMjAuMTc5NUM3NS4yOTc0IDIxLjE3NDMgNzQuOTU5OSAyMS4zNzA1IDczLjEzMTkgMjEuNzYyOFpNNzMuMTg4MSAxNy4xOTUyQzczLjE4ODEgMTguMDYzOSA3My4xNzQxIDE4Ljg2MjUgNzMuMjAyMiAxOS42NDcxQzczLjIwMjIgMTkuNzU5MiA3My4zNTY5IDE5Ljg3MTMgNzMuNDU1MyAxOS45ODM0QzczLjUzOTcgMTkuODcxMyA3My42OTQzIDE5Ljc3MzIgNzMuNjk0MyAxOS42NDcxQzczLjcyMjUgMTkuMDU4NyA3My42OTQzIDE4LjQ4NDIgNzMuNzIyNSAxNy44OTU3QzczLjczNjUgMTcuNjcxNiA3My44NjMxIDE3LjQ0NzQgNzMuOTQ3NSAxNy4xOTUyQzczLjczNjUgMTcuMTk1MiA3My40OTc1IDE3LjE5NTIgNzMuMTg4MSAxNy4xOTUyWk03NC4wMTc4IDE5Ljc1OTJDNzQuNjc4NyAxOS4yNDA4IDc0LjU4MDIgMTguNTgyMyA3NC41MDk5IDE3LjkyMzhDNzQuNDk1OSAxNy44Mzk3IDc0LjMyNzEgMTcuNzU1NiA3NC4yNDI4IDE3LjY4NTZDNzQuMTcyNCAxNy43OTc3IDc0LjAzMTggMTcuOTIzOCA3NC4wMzE4IDE4LjAzNTlDNzQuMDAzNyAxOC42MTAzIDc0LjAxNzggMTkuMTg0OCA3NC4wMTc4IDE5Ljc1OTJaXCJcclxuICAgICAgICAgICAgZmlsbD1cIiNGRkYzRTdcIlxyXG4gICAgICAgICAvPlxyXG4gICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICBkPVwiTTE1Ljk0MTkgMTcuMjA5MkMxNS43NTkxIDE3LjU0NTQgMTUuNTkwMyAxNy44ODE3IDE1LjM3OTQgMTguMjg4QzE1LjE1NDQgMTguMDc3OSAxNS4wMTM4IDE3LjkzNzcgMTQuODU5MSAxNy43OTc2QzE0LjI5NjcgMTcuMjc5MiAxMy43NzY0IDE3LjM3NzMgMTMuNTIzMyAxOC4xMDU5QzEzLjM2ODYgMTguNTQwMiAxMy4yNzAyIDE5LjAxNjYgMTMuMjcwMiAxOS40NjQ5QzEzLjI3MDIgMjAuNjY5OSAxMy4yOTgzIDIxLjg4ODggMTMuMzk2NyAyMy4wOTM4QzEzLjUwOTIgMjQuNDI0OCAxMy43NDgzIDI0LjUyMjkgMTQuODMxIDIzLjczODNDMTUuNDIxNiAyMy45MzQ1IDE1Ljc3MzEgMjQuMjg0NyAxNS45NTYgMjQuOTE1MkMxNi4wODI1IDI1LjM5MTYgMTUuOTcgMjUuNjcxOCAxNS42MzI1IDI1Ljk1MkMxNC43NzQ4IDI2LjY2NjYgMTMuNDM4OSAyNi42ODA2IDEyLjcwNzcgMjUuODM5OUMxMi4xNTkzIDI1LjIwOTUgMTEuNjM5IDI0LjQzODggMTEuNDI4MSAyMy42NTQyQzEwLjg5MzcgMjEuNjIyNiAxMC45MzU5IDE5LjUzNSAxMS40ODQzIDE3LjUwMzRDMTEuNjUzMSAxNi44ODY5IDEyLjAzMjcgMTYuMjcwNCAxMi40Njg2IDE1Ljc4MDFDMTMuMDU5MiAxNS4xMjE1IDE0LjA0MzYgMTUuMTIxNSAxNC43NzQ4IDE1LjYzOTlDMTUuMjgxIDE2LjAwNDIgMTUuNTc2MyAxNi40MTA2IDE1LjE5NjYgMTcuMDQxQzE1LjA5ODIgMTcuMTk1MiAxNS4xNDA0IDE3LjQxOTMgMTUuMDk4MiAxNy43Njk2QzE1LjQwNzUgMTcuNDMzNCAxNS41NzYzIDE3LjI1MTIgMTUuNzU5MSAxNy4wNTUxQzE1LjgxNTMgMTcuMDk3MSAxNS44NzE2IDE3LjE1MzEgMTUuOTQxOSAxNy4yMDkyWk0xNC4xOTgyIDE3LjA0MUMxMy4yOTgzIDE2Ljg3MjkgMTIuOTA0NSAxNy4yNzkyIDEyLjgzNDIgMTcuODgxN0MxMi42OTM2IDE5LjAzMDYgMTIuNjM3NCAyMC4xOTM1IDEyLjYyMzMgMjEuMzU2NEMxMi42MDkzIDIyLjAxNDkgMTIuNzM1OCAyMi42NTk1IDEyLjgwNjEgMjMuMzE4QzEyLjk2MDggMjEuODQ2OCAxMi45MzI3IDIwLjM4OTcgMTIuOTYwOCAxOC45MTg1QzEyLjk3NDkgMTguMTMzOSAxMy4yNTYxIDE3LjQ3NTQgMTQuMTk4MiAxNy4wNDFaTTEzLjU5MzYgMjYuMDIyMUMxNC4zODEgMjYuMTc2MiAxNS4wNDE5IDI2LjA3ODEgMTUuNTA2IDI1LjUxNzdDMTUuNjQ2NiAyNS4zNDk2IDE1LjUzNDEgMjQuOTU3MyAxNS41MzQxIDI0LjY3N0MxNS4zMDkxIDI1Ljc0MTkgMTQuNDA5MiAyNS43Njk5IDEzLjU5MzYgMjYuMDIyMVpcIlxyXG4gICAgICAgICAgICBmaWxsPVwiI0ZGRjNFN1wiXHJcbiAgICAgICAgIC8+XHJcbiAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgIGQ9XCJNNDQuNzY5MSAyNC40MTA5QzQ1LjI2MTMgMjQuMDg4NyA0NS41NTY2IDIzLjkwNjUgNDUuNzExMyAyMy43OTQ0QzQ2LjA3NjkgMjMuODc4NSA0Ni4zMyAyMy45MDY1IDQ2LjU2OSAyNC4wMDQ2QzQ3LjAzMzEgMjQuMjAwOCA0Ny4xNzM3IDI1LjU1OTggNDYuNzggMjUuODk2MUM0NS45OTI1IDI2LjU4MjYgNDQuNzY5MSAyNi42MjQ3IDQzLjkzOTUgMjUuOTgwMkM0My4wOTU4IDI1LjMzNTYgNDIuNTE5MiAyNC41MjMgNDIuMzIyNCAyMy40NTgyQzQxLjk0MjcgMjEuMzcwNSA0MS45Mjg3IDE5LjI4MjkgNDIuNTE5MiAxNy4yMzczQzQyLjg5ODkgMTUuOTM0MyA0My42ODY0IDE1LjIxOTcgNDQuNjg0OCAxNS4zMDM4QzQ1LjEyMDcgMTUuMzMxOCA0NS41NzA2IDE1LjU0MiA0NS45NTAzIDE1Ljc4MDJDNDYuMzQ0IDE2LjAzMjQgNDYuNTI2OCAxNi40MTA3IDQ2LjIzMTUgMTYuOTE1MUM0Ni4xMTkxIDE3LjA5NzIgNDYuMTg5NCAxNy4zNzc0IDQ2LjE3NTMgMTcuNzgzN0M0Ni40OTg3IDE3LjQwNTQgNDYuNjY3NSAxNy4yMjMzIDQ2LjgyMjEgMTcuMDQxMUM0Ni44Nzg0IDE3LjA4MzIgNDYuOTQ4NyAxNy4xMjUyIDQ3LjAwNDkgMTcuMTUzMkM0Ni44NTAzIDE3LjUwMzUgNDYuNjk1NiAxNy44NTM4IDQ2LjQ5ODcgMTguMjc0MUM0Ni4yODc4IDE4LjEwNiA0Ni4xNzUzIDE3Ljk3OTkgNDYuMDQ4NyAxNy45MDk4QzQ1Ljc1MzQgMTcuNzU1NyA0NS4zNTk3IDE3LjQ0NzUgNDUuMTc2OSAxNy41NDU1QzQ0Ljg4MTYgMTcuNjg1NyA0NC41MzAxIDE4LjA5MiA0NC41MTYgMTguNDE0MkM0NC40MTc2IDE5LjgyOTMgNDQuNDAzNSAyMS4yNDQ0IDQ0LjQzMTYgMjIuNjU5NkM0NC40MzE2IDIzLjE5MiA0NC42Mjg1IDIzLjcyNDQgNDQuNzY5MSAyNC40MTA5Wk00NS4xMzQ3IDE3LjA4MzJDNDQuMzMzMiAxNi45MDEgNDMuODQxMSAxNy4xODEzIDQzLjc4NDggMTcuOTkzOUM0My42ODY0IDE5LjUzNTEgNDMuNzAwNCAyMS4wOTAzIDQzLjcyODYgMjIuNjQ1NUM0My43NDI2IDIzLjA5MzkgNDMuOTUzNSAyMy41NDIyIDQ0LjEyMjMgMjQuMTMwN0M0NC4wNTIgMjIuNjU5NiA0My45MjU0IDIxLjM0MjUgNDMuOTY3NiAyMC4wMzk1QzQzLjk5NTcgMTguOTYwNyA0My44NjkyIDE3Ljc1NTcgNDUuMTM0NyAxNy4wODMyWk00Ni41MTI4IDI0LjQyNDlDNDYuNDU2NSAyNC40Mzg5IDQ2LjM4NjIgMjQuNDY3IDQ2LjMzIDI0LjQ4MUM0Ni41MTI4IDI1LjY4NTkgNDUuNDU4MiAyNS42NzE5IDQ0Ljc0MSAyNi4wMzYyQzQ1LjY1NSAyNi4xMjAzIDQ2LjQ3MDYgMjUuOTM4MSA0Ni42MTEyIDI1LjUwMzhDNDYuNzA5NiAyNS4xOTU1IDQ2LjU1NSAyNC43ODkyIDQ2LjUxMjggMjQuNDI0OVpcIlxyXG4gICAgICAgICAgICBmaWxsPVwiI0ZGRjNFN1wiXHJcbiAgICAgICAgIC8+XHJcbiAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgIGQ9XCJNOTEuNzkxNSA0Ljc4MTQ3QzkxLjI4NTMgNC43ODE0NyA5MC44MjEyIDQuNzgxNDcgOTAuMzU3MiA0Ljc4MTQ3QzgzLjg0NjYgNC43ODE0NyA3Ny4zNTAxIDQuNzgxNDcgNzAuODM5NSA0Ljc4MTQ3QzcwLjY1NjcgNC43ODE0NyA3MC40NTk4IDQuODA5NDkgNzAuMjc3IDQuNzUzNDVDNzAuMTkyNyA0LjcyNTQyIDcwLjA5NDIgNC41NzEzIDcwLjA4MDIgNC40NTkyMkM3MC4wNjYxIDQuMzg5MTYgNzAuMTkyNyA0LjI2MzA2IDcwLjI3NyA0LjIzNTA0QzcwLjQzMTcgNC4xOTMwMSA3MC42MDA1IDQuMjIxMDMgNzAuNzY5MiA0LjIyMTAzQzc3LjU3NTEgNC4yMjEwMyA4NC4zODEgNC4yMjEwMyA5MS4yMDA5IDQuMjIxMDNDOTEuNTEwMyA0LjIyMTAzIDkxLjk4ODMgNC4wNjY5MSA5MS43OTE1IDQuNzgxNDdaXCJcclxuICAgICAgICAgICAgZmlsbD1cIiNGRkYzRTdcIlxyXG4gICAgICAgICAvPlxyXG4gICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICBkPVwiTTMxLjgwNDEgNC4yMjA5NUMzNS4xNTA4IDQuMjIwOTUgMzguNDk3NSA0LjIyMDk1IDQxLjg0NDIgNC4yMzQ5NkM0Mi4wNTUxIDQuMjM0OTYgNDIuMjY2IDQuMzg5MDcgNDIuNDYyOSA0LjQ3MzE0QzQyLjI1MiA0LjU3MTIxIDQyLjA0MSA0Ljc2NzM2IDQxLjgzMDEgNC43NjczNkMzNS4xMzY3IDQuNzgxMzcgMjguNDI5MyA0Ljc4MTM3IDIxLjczNTkgNC43NjczNkMyMS41MjUgNC43NjczNiAyMS4zMTQxIDQuNjEzMjQgMjEuMTE3MiA0LjUyOTE4QzIxLjMyODEgNC40MzExMSAyMS41MzkgNC4yMzQ5NiAyMS43NSA0LjIzNDk2QzI1LjExMDcgNC4yMjA5NSAyOC40NTc0IDQuMjIwOTUgMzEuODA0MSA0LjIyMDk1WlwiXHJcbiAgICAgICAgICAgIGZpbGw9XCIjRkZGM0U3XCJcclxuICAgICAgICAgLz5cclxuICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgZD1cIk04Ni4zMjE1IDIuOTMxODNDODAuODkzNyAyLjkzMTgzIDc1LjUyMjEgMi45MzE4MyA3MC4xNTA1IDIuOTMxODNDNzAuMTA4MyAyLjg3NTc5IDcwLjA2NjEgMi44MTk3NCA3MC4wMjM5IDIuNzYzN0M3MC4xNjQ1IDIuNjM3NiA3MC4yNzcgMi40OTc0OSA3MC40NDU4IDIuNDEzNDJDNzAuNTU4MyAyLjM1NzM4IDcwLjcyNyAyLjM5OTQxIDcwLjg2NzYgMi4zOTk0MUM3NS44MzE0IDIuMzk5NDEgODAuNzgxMiAyLjM5OTQxIDg1Ljc0NDkgMi4zOTk0MUM4Ni4wNDAyIDIuMzk5NDEgODYuNTA0MyAyLjI3MzMxIDg2LjMyMTUgMi45MzE4M1pcIlxyXG4gICAgICAgICAgICBmaWxsPVwiI0ZGRjNFN1wiXHJcbiAgICAgICAgIC8+XHJcbiAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgIGQ9XCJNMzQuNDg5NCAyLjk1OTk4QzMyLjA5ODkgMi45NTk5OCAyOS43MDg0IDIuOTU5OTggMjcuMzMyIDIuOTU5OThDMjcuMjE5NSAyLjk1OTk4IDI3LjA3ODkgMi45ODgwMSAyNi45ODA0IDIuOTQ1OTdDMjYuODExNyAyLjg3NTkyIDI2LjY1NyAyLjc0OTgxIDI2LjQ4ODMgMi42NTE3NEMyNi42NDMgMi41Njc2NyAyNi44MTE3IDIuNDEzNTUgMjYuOTY2NCAyLjQxMzU1QzI4LjU1NTQgMi4zOTk1NCAzMC4xNDQzIDIuMzk5NTQgMzEuNzQ3NCAyLjM5OTU0QzM1LjA5NDEgMi4zOTk1NCAzOC40NDA4IDIuMzk5NTQgNDEuNzg3NSAyLjM5OTU0QzQxLjgyOTcgMi4zOTk1NCA0MS44ODU5IDIuMzg1NTMgNDEuOTI4MSAyLjM5OTU0QzQyLjExMDkgMi40OTc2MiA0Mi4zMDc4IDIuNjA5NyA0Mi40OTA2IDIuNzA3NzhDNDIuMzA3OCAyLjc5MTg1IDQyLjEyNSAyLjk0NTk3IDQxLjk0MjEgMi45NDU5N0MzOS40NTMyIDIuOTczOTkgMzYuOTY0MyAyLjk1OTk4IDM0LjQ4OTQgMi45NTk5OFpcIlxyXG4gICAgICAgICAgICBmaWxsPVwiI0ZGRjNFN1wiXHJcbiAgICAgICAgIC8+XHJcbiAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgIGQ9XCJNNDcuNTExMyAzNy45NTk1QzQ3LjUxMTMgMzguNzcyMSA0Ny40OTcyIDM5LjU4NDcgNDcuNTExMyA0MC40MTE0QzQ3LjUyNTQgNDAuODQ1NyA0Ny4zNTY2IDQxLjAyNzkgNDcuMDE5MSA0MC45Mjk4QzQ3LjAxOTEgMzkuNTE0NyA0Ny4wMDUxIDM4LjExMzYgNDcuMDMzMiAzNi43MjY1QzQ3LjAzMzIgMzYuNjE0NCA0Ny4yNzIzIDM2LjM5MDIgNDcuMzcwNyAzNi40MDQyQzQ3LjUzOTQgMzYuNDMyMyA0Ny43NTAzIDM2LjU3MjQgNDcuODIwNyAzNi43MjY1QzQ4LjA3MzggMzcuMzcxIDQ4LjI3MDYgMzguMDI5NSA0OC41NTE5IDM4Ljg3MDJDNDguODE5IDM4LjA3MTUgNDkuMDAxOCAzNy40NDExIDQ5LjI1NDkgMzYuODUyNkM0OS4zMzkzIDM2LjY1NjQgNDkuNjIwNiAzNi41MzAzIDQ5LjgxNzQgMzYuMzc2MkM0OS45MDE4IDM2LjU1ODQgNTAuMDU2NSAzNi43NDA1IDUwLjA3MDUgMzYuOTM2N0M1MC4xNjkgMzguMjM5NyA1MC4yMjUyIDM5LjU0MjcgNTAuMzA5NiA0MC45MDE4QzUwLjExMjcgNDAuOTE1OCA0OS45MTU5IDQwLjkxNTggNDkuNjkwOSA0MC45Mjk4QzQ5LjY0ODcgMzkuOTM1IDQ5LjU5MjQgMzguOTgyMyA0OS41NTAyIDM4LjAyOTVDNDkuNTA4MSAzOC4wMTU1IDQ5LjQ2NTkgMzguMDE1NSA0OS40MjM3IDM4LjAwMTVDNDkuMjQwOSAzOC41MTk5IDQ5LjA1ODEgMzkuMDUyMyA0OC44NDcyIDM5LjU3MDdDNDguNzkwOSAzOS43MTA4IDQ4LjYyMjIgMzkuODA4OSA0OC40OTU2IDM5LjkzNUM0OC4zOTcyIDM5LjgwODkgNDguMjcwNiAzOS43MTA4IDQ4LjIxNDQgMzkuNTcwN0M0OC4wMTc1IDM5LjAzODMgNDcuODM0NyAzOC40OTE5IDQ3LjY1MTkgMzcuOTQ1NEM0Ny42MDk3IDM3LjkzMTQgNDcuNTY3NSAzNy45NDU0IDQ3LjUxMTMgMzcuOTU5NVpcIlxyXG4gICAgICAgICAgICBmaWxsPVwiI0ZGRjNFN1wiXHJcbiAgICAgICAgIC8+XHJcbiAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgIGQ9XCJNNTMuMzc0MiA0LjQ3MzIzQzUzLjQzMDQgNC4yNDkwNSA1My40ODY2IDQuMDUyOSA1My41NTcgMy44Mjg3MkM1NC4xODk3IDMuOTQwODEgNTQuNzUyMiAzLjkyNjggNTQuOTkxMyAzLjE5ODIzQzUzLjUxNDggMy4zMzgzNCA1Mi43NTU0IDIuMzAxNTIgNTMuMzAzOCAwLjkyODQ0NEM1My41NDI5IDAuMzI1OTcxIDUzLjk5MjkgMC4wMzE3MzgzIDU0LjY1MzggMC4wMzE3MzgzQzU1LjMwMDYgMC4wMzE3MzgzIDU1LjcyMjUgMC4zNjgwMDMgNTUuODkxMiAwLjk1NjQ2NUM1Ni4xNzI0IDEuODk1MiA1Ni4xMzAzIDIuODQ3OTUgNTUuNjUyMiAzLjczMDY0QzU1LjIwMjIgNC41NzEzIDU0LjM4NjYgNC44Mzc1MSA1My4zNzQyIDQuNDczMjNaTTU1LjM3MDkgMS42Mjg5OUM1NS4wMTk0IDEuMjkyNzMgNTQuNzgwMyAxLjA2ODU1IDU0LjU0MTMgMC44NDQzNzdDNTQuMzcyNSAxLjEyNDYgNTQuMDYzMiAxLjQxODgzIDU0LjA2MzIgMS42OTkwNUM1NC4wNjMyIDEuOTUxMjUgNTQuMzg2NiAyLjIxNzQ2IDU0LjU2OTQgMi40Njk2NUM1NC44MDg1IDIuMjMxNDcgNTUuMDMzNCAxLjk5MzI4IDU1LjM3MDkgMS42Mjg5OVpcIlxyXG4gICAgICAgICAgICBmaWxsPVwiI0ZGRjNFN1wiXHJcbiAgICAgICAgIC8+XHJcbiAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgIGQ9XCJNMjguMDQ5NSAzNi45MDg3QzI5LjIwMjYgMzcuMTg4OSAyOS44Nzc1IDM3Ljg0NzQgMzAuMTE2NiAzOC45MTIzQzI5Ljc5MzEgMzkuOTA3IDI5LjEzMjIgNDAuNzQ3NyAyOC4wMjE0IDQwLjc3NTdDMjcuMjYyIDQwLjgwMzggMjYuMDk0OSAzOS41MDA3IDI2LjE5MzMgMzguOTEyM0MyNi4yNjM3IDM4LjQ0OTkgMjYuNTg3MSAzNy45NTk1IDI2LjkyNDYgMzcuNjA5MkMyNy4yNDggMzcuMjU5IDI3Ljc0MDEgMzcuMDkwOCAyOC4wNDk1IDM2LjkwODdaTTI3LjUwMTEgNDAuMzEzNEMyNy42Mjc2IDM5LjgzNyAyNy43MjYxIDM5LjUxNDcgMjcuODEwNCAzOS4xOTI1QzI3LjQ3MyAzOS4yNzY2IDI3LjEzNTUgMzkuMzYwNiAyNi42OTk2IDM5LjQ3MjdDMjYuOTY2NyAzOS43NTI5IDI3LjIwNTggNDAuMDA1MSAyNy41MDExIDQwLjMxMzRaTTI4LjgwODggNDAuMjk5NEMyOS4wOTAxIDM5Ljk5MTEgMjkuMzI5MSAzOS43Mzg5IDI5LjU4MjIgMzkuNDcyN0MyOS4xNDYzIDM5LjM2MDYgMjguODA4OCAzOS4yNzY2IDI4LjQ4NTQgMzkuMjA2NUMyOC41Njk4IDM5LjUyODcgMjguNjY4MiAzOS44MzcgMjguODA4OCA0MC4yOTk0Wk0yNi41NzMgMzguMjExN0MyNy4xNDk1IDM4LjM1MTggMjcuNDczIDM4LjQyMTkgMjcuODEwNCAzOC40OTE5QzI3LjcxMiAzOC4xNTU3IDI3LjYyNzYgMzcuODMzNCAyNy40ODcgMzcuMzcxMUMyNy4xNDk1IDM3LjY3OTMgMjYuOTEwNSAzNy45MDM1IDI2LjU3MyAzOC4yMTE3Wk0yOS43MDg4IDM4LjE5NzdDMjkuMzg1NCAzNy45MDM1IDI5LjEzMjIgMzcuNjc5MyAyOC44MjI5IDM3LjM4NTFDMjguNjgyMyAzNy44NjE0IDI4LjU5NzkgMzguMTgzNyAyOC40OTk1IDM4LjUwNTlDMjguODM2OSAzOC40MjE5IDI5LjE2MDQgMzguMzM3OCAyOS43MDg4IDM4LjE5NzdaXCJcclxuICAgICAgICAgICAgZmlsbD1cIiNGRkYzRTdcIlxyXG4gICAgICAgICAvPlxyXG4gICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICBkPVwiTTg1LjA1NiAzNi45MjI2Qzg2LjA2ODUgMzcuMTg4OCA4Ni43ODU2IDM3Ljc3NzMgODYuOTk2NiAzOC45NTQyQzg2LjUwNDQgMzkuOTkxIDg2LjUwNDQgMzkuOTkxIDg0LjkwMTQgNDAuOTU3OEM4NC4yNjg2IDQwLjM0MTMgODMuNTkzNiAzOS42ODI4IDgzLjAxNzEgMzkuMTIyM0M4My4zNjg2IDM3Ljg3NTQgODQuMDE1NSAzNy4xNzQ4IDg1LjA1NiAzNi45MjI2Wk04My40NjcxIDM4LjIzOTZDODQuOTAxNCAzOC40MDc4IDg1LjQzNTcgMzkuMTc4NCA4NS43NDUxIDQwLjI4NTNDODYuMDEyMiAzOS45OTEgODYuMjM3MiAzOS43NTI4IDg2LjUwNDQgMzkuNDcyNkM4NS4zMjMyIDM5LjIzNDQgODQuNjkwNCAzOC41NzU5IDg0LjQzNzMgMzcuMzU2OUM4NC4wOTk4IDM3LjY2NTIgODMuODMyNyAzNy45MDM0IDgzLjQ2NzEgMzguMjM5NlpNODQuMjk2NyA0MC4zNjkzQzg0LjM2NyA0MC4zMTMzIDg0LjQzNzMgNDAuMjU3MiA4NC40OTM2IDQwLjE4NzJDODQuNTQ5OCAzOS44OTI5IDg0LjU5MiAzOS41OTg3IDg0LjY2MjMgMzkuMjQ4NEM4NC4zMjQ4IDM5LjMxODUgODQuMDI5NSAzOS4zNzQ1IDgzLjYzNTggMzkuNDU4NkM4My44ODg5IDM5LjgwODkgODQuMDg1OCA0MC4wODkxIDg0LjI5NjcgNDAuMzY5M1pNODUuNDIxNiAzOC41MTk5Qzg1Ljc3MzIgMzguNDA3OCA4Ni4wNjg1IDM4LjMyMzcgODYuNTE4NSAzOC4xODM2Qzg2LjI1MTMgMzcuOTAzNCA4Ni4wNTQ0IDM3LjY3OTIgODUuNzU5MSAzNy4zNzFDODUuNjA0NSAzNy44NzU0IDg1LjUyMDEgMzguMTgzNiA4NS40MjE2IDM4LjUxOTlaXCJcclxuICAgICAgICAgICAgZmlsbD1cIiNGRkYzRTdcIlxyXG4gICAgICAgICAvPlxyXG4gICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICBkPVwiTTY2Ljk1NzkgMzcuNzQ5M0M2Ni41MjIgMzguNjc0IDY2LjA4NjEgMzkuNTk4NyA2NS42MjIgNDAuNDk1NUM2NS41MjM2IDQwLjY5MTYgNjUuMjI4MyA0MC43ODk3IDY1LjAxNzQgNDAuOTI5OEM2NC45MzMgNDAuNzE5NiA2NC43NjQzIDQwLjUyMzUgNjQuNzY0MyA0MC4zMTMzQzY0LjczNjEgMzkuMTc4NCA2NC43MjIxIDM4LjAyOTUgNjQuNzUwMiAzNi44OTQ2QzY0Ljc1MDIgMzYuNzEyNSA2NC45ODkyIDM2LjU0NDQgNjUuMTAxNyAzNi4zNzYyQzY1LjIwMDIgMzYuNTQ0NCA2NS4zOTcgMzYuNzEyNSA2NS4zOTcgMzYuODgwNkM2NS40MjUyIDM3LjcwNzMgNjUuNDExMSAzOC41MzM5IDY1LjUzNzcgMzkuNDAyNkM2NS45NDU0IDM4LjU2MTkgNjYuMzM5MiAzNy43MDczIDY2Ljc4OTIgMzYuODgwNkM2Ni45MDE3IDM2LjY3MDUgNjcuMjExIDM2LjU0NDQgNjcuNDIxOSAzNi4zNzYyQzY3LjUyMDQgMzYuNjE0NCA2Ny42ODkxIDM2Ljg2NjYgNjcuNzAzMiAzNy4xMDQ4QzY3LjczMTMgMzguMTk3NiA2Ny43MzEzIDM5LjI5MDUgNjcuNzAzMiA0MC4zODM0QzY3LjcwMzIgNDAuNTY1NSA2Ny40OTIyIDQwLjczMzYgNjcuMzc5OCA0MC45MTU4QzY3LjI4MTMgNDAuNzQ3NiA2Ny4xMTI2IDQwLjU3OTUgNjcuMDk4NSA0MC4zOTc0QzY3LjA3MDQgMzkuNTE0NyA2Ny4wODQ1IDM4LjYzMiA2Ny4wODQ1IDM3Ljc0OTNDNjcuMDQyMyAzNy43NjMzIDY3LjAwMDEgMzcuNzQ5MyA2Ni45NTc5IDM3Ljc0OTNaXCJcclxuICAgICAgICAgICAgZmlsbD1cIiNGRkYzRTdcIlxyXG4gICAgICAgICAvPlxyXG4gICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICBkPVwiTTMyLjg1ODQgMzYuMzlDMzMuNjc0IDM2LjUzMDEgMzQuNTU5OSAzNi4wNjc4IDM1LjE3ODYgMzYuODk0NEMzNS41MDIgMzcuMzE0NyAzNS4zNzU1IDM3Ljg3NTIgMzQuOTExNCAzOC41NzU3QzM1LjUzMDEgMzguOTgyIDM1LjYyODYgMzkuNTcwNSAzNS4zODk1IDQwLjIxNUMzNS4xMzY0IDQwLjkxNTYgMzQuNTMxNyA0MC45NzE2IDMzLjg4NDkgNDAuOTQzNkMzMy41NjE1IDQwLjkyOTYgMzMuMjM4MSA0MC45NDM2IDMyLjg1ODQgNDAuOTQzNkMzMi44NTg0IDM5LjQxNjQgMzIuODU4NCAzNy45NzMzIDMyLjg1ODQgMzYuMzlaTTMzLjUzMzQgMzguOTU0QzMzLjUzMzQgMzkuNDU4NCAzMy41MzM0IDM5LjkwNjggMzMuNTMzNCA0MC4zNTUxQzM0LjUxNzcgNDAuNDExMiAzNC43ODQ5IDQwLjI0MyAzNC43NzA4IDM5LjYyNjZDMzQuNzU2NyAzOS4wMTAxIDM0LjQ4OTYgMzguODcgMzMuNTMzNCAzOC45NTRaTTMzLjUxOTMgMzYuOTkyNUMzMy41MTkzIDM3LjQ4MjkgMzMuNTE5MyAzNy45MTcyIDMzLjUxOTMgMzguMzkzNkMzNC4wODE4IDM4LjM1MTYgMzQuNjE2MSAzOC4zNTE2IDM0LjYzMDIgMzcuNjIzQzM0LjY0NDIgMzYuODEwNCAzNC4wMzk2IDM3LjAyMDUgMzMuNTE5MyAzNi45OTI1WlwiXHJcbiAgICAgICAgICAgIGZpbGw9XCIjRkZGM0U3XCJcclxuICAgICAgICAgLz5cclxuICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgZD1cIk01Ni4xMzA5IDQwLjk0MzdDNTYuMTMwOSAzOS40MTY1IDU2LjEzMDkgMzcuOTU5NCA1Ni4xMzA5IDM2LjQxODJDNTYuOTMyNCAzNi41MDIzIDU3Ljc5MDEgMzYuMDk1OSA1OC40MjI5IDM2Ljg4MDZDNTguNzYwNCAzNy4zMDA5IDU4LjYxOTggMzcuODc1MyA1OC4xNDE3IDM4LjUxOThDNTguNzc0NCAzOS4xNzgzIDU4Ljk0MzIgMzkuNzI0OCA1OC41OTE2IDQwLjI5OTJDNTcuOTg3IDQxLjI5NCA1Ny4wMTY3IDQwLjgxNzYgNTYuMTMwOSA0MC45NDM3Wk01Ni43NDk2IDM4Ljc3MkM1Ni43NDk2IDM5LjQ0NDYgNTYuNzQ5NiAzOS44Nzg5IDU2Ljc0OTYgNDAuNDk1NEM1Ny4xOTk1IDQwLjM0MTIgNTcuNjIxNCA0MC4yODUyIDU3Ljg4ODYgNDAuMDYxQzU4LjAyOTIgMzkuOTM0OSA1OC4wMjkyIDM5LjM3NDUgNTcuODg4NiAzOS4yNDg0QzU3LjYyMTQgMzkuMDEwMiA1Ny4xOTk1IDM4Ljk0MDIgNTYuNzQ5NiAzOC43NzJaTTU2Ljc0OTYgMzguNTA1OEM1Ny4xNTc0IDM4LjMyMzcgNTcuNTUxMSAzOC4yNTM2IDU3Ljc0NzkgMzguMDE1NEM1Ny44ODg2IDM3Ljg0NzMgNTcuODg4NiAzNy4zNDI5IDU3LjczMzkgMzcuMTg4OEM1Ny41MzcgMzYuOTkyNiA1Ny4xMjkyIDM3LjAwNjYgNTYuNzQ5NiAzNi45MDg2QzU2Ljc0OTYgMzcuNDY5IDU2Ljc0OTYgMzcuOTAzMyA1Ni43NDk2IDM4LjUwNThaXCJcclxuICAgICAgICAgICAgZmlsbD1cIiNGRkYzRTdcIlxyXG4gICAgICAgICAvPlxyXG4gICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICBkPVwiTTU3LjUwODUgMi42MDk4MkM1Ny40OTQ1IDIuMzg1NjUgNTcuNDgwNCAyLjE2MTQ3IDU3LjQ2NjQgMS44OTUyNkM1Ny42NzczIDEuODY3MjQgNTcuODYwMSAxLjg5NTI2IDU3Ljk4NjcgMS44MjUyMUM1OC4xODM1IDEuNzI3MTMgNTguMzk0NCAxLjYwMTAzIDU4LjQ5MjkgMS40MzI5QzU4LjU0OTEgMS4zMjA4MSA1OC40NjQ3IDAuOTk4NTYxIDU4LjM2NjMgMC45NDI1MTdDNTguMTgzNSAwLjg1ODQ1MSA1Ny44NDYgMC44MTY0MiA1Ny43MTk1IDAuOTI4NTA3QzU3LjMyNTcgMS4yNzg3OCA1Ny4xMDA4IDEuMDgyNjMgNTYuODc1OCAwLjc2MDM3NEM1Ny4zMzk4IC0wLjAxMDIyOTcgNTguMjUzOCAtMC4yMzQ0MDUgNTguOTU2OSAwLjI2OTk5QzU5LjUzMzQgMC42OTAzMTkgNTkuNTQ3NSAxLjQ2MDkyIDU4Ljk4NSAyLjE3NTQ4QzU5LjY0NTkgMi44NzYwMyA1OS43NDQ0IDMuNTQ4NTYgNTkuMjM4MSA0LjEzNzAyQzU4LjcwMzggNC43ODE1MyA1Ny42OTE0IDQuODUxNTggNTYuNzA3IDQuMjYzMTJDNTYuNzc3MyA0LjA2Njk3IDU2Ljg0NzYgMy44NTY4IDU2LjkxOCAzLjY2MDY1QzU3LjUyMjYgMy42NzQ2NiA1OC4yODE5IDQuMzE5MTYgNTguNTYzMiAzLjM4MDQzQzU4LjgwMjIgMi42MDk4MiA1OC4wNDI5IDIuNjkzODkgNTcuNTA4NSAyLjYwOTgyWlwiXHJcbiAgICAgICAgICAgIGZpbGw9XCIjRkZGM0U3XCJcclxuICAgICAgICAgLz5cclxuICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgZD1cIk04Mi43NDkyIDAuODQ0MTIyQzgyLjUxMDIgMC45MTQxNzggODIuMjcxMSAxLjAyNjI3IDgyLjA0NjEgMS4wMjYyN0M3OC4yNDk1IDEuMDQwMjggNzQuNDY2OCAxLjAyNjI3IDcwLjY3MDIgMS4wMTIyNkM3MC40NzMzIDEuMDEyMjYgNzAuMjc2NSAwLjgzMDExMSA3MC4wNzk2IDAuNzQ2MDQ0QzcwLjI3NjUgMC42NDc5NjYgNzAuNDczMyAwLjQ3OTgzIDcwLjY4NDIgMC40Nzk4M0M3NC40ODA5IDAuNDY1ODE5IDc4LjI2MzUgMC40NjU4MiA4Mi4wNjAyIDAuNDY1ODJDODIuMjg1MiAwLjQ2NTgyIDgyLjUxMDIgMC41NjM4OTcgODIuNzM1MiAwLjYxOTk0MkM4Mi43MzUyIDAuNjc1OTg3IDgyLjczNTEgMC43NjAwNTUgODIuNzQ5MiAwLjg0NDEyMlpcIlxyXG4gICAgICAgICAgICBmaWxsPVwiI0ZGRjNFN1wiXHJcbiAgICAgICAgIC8+XHJcbiAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgIGQ9XCJNNTQuNzExIDM4LjcxNjNDNTQuNjEyNSAzOS4xOTI3IDU0LjU3MDQgMzkuNjU1IDU0LjQyOTcgNDAuMDg5NEM1NC4yMzI5IDQwLjcwNTkgNTMuNzgyOSA0MS4wMDAxIDUzLjEwNzkgNDEuMDAwMUM1Mi40MTg5IDQxLjAwMDEgNTEuOTEyNyA0MC42NDk4IDUxLjgyODMgNDAuMDQ3M0M1MS43MDE4IDM5LjE2NDYgNTEuNjg3NyAzOC4yNTM5IDUxLjgxNDMgMzcuMzg1MkM1MS44OTg2IDM2LjcyNjcgNTIuNDE4OSAzNi4zMDY0IDUzLjE2NDIgMzYuMzIwNEM1My44NjczIDM2LjMzNDQgNTQuMjg5MSAzNi43NDA3IDU0LjQ3MTkgMzcuMzcxMkM1NC41ODQ0IDM3LjgwNTYgNTQuNjI2NiAzOC4yNjc5IDU0LjcxMSAzOC43MTYzWk01Mi4yNjQyIDM4LjY2MDJDNTIuMzM0NSAzOS4xMDg2IDUyLjM0ODYgMzkuNTg1IDUyLjQ4OTIgNDAuMDA1M0M1Mi41NTk1IDQwLjIxNTUgNTIuODgyOSA0MC40Njc3IDUzLjA3OTggNDAuNDUzN0M1My4zMTg5IDQwLjQzOTcgNTMuNzI2NiA0MC4xNzM0IDUzLjc0MDcgNDAuMDA1M0M1My44MTEgMzkuMTIyNiA1My43OTcgMzguMjI1OSA1My43MjY2IDM3LjM0MzJDNTMuNzEyNiAzNy4xNzUxIDUzLjMwNDggMzYuOTA4OSA1My4wNjU3IDM2LjkwODlDNTIuODY4OSAzNi44OTQ5IDUyLjU0NTUgMzcuMTYxMSA1Mi40NzUyIDM3LjM1NzJDNTIuMzQ4NiAzNy43NjM1IDUyLjMzNDUgMzguMjExOSA1Mi4yNjQyIDM4LjY2MDJaXCJcclxuICAgICAgICAgICAgZmlsbD1cIiNGRkYzRTdcIlxyXG4gICAgICAgICAvPlxyXG4gICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICBkPVwiTTYyLjA5MyA0LjU5OTJDNjIuMDY0OCA0LjI5MDk2IDYyLjAzNjcgNC4wMjQ3NSA2Mi4wMDg2IDMuNjc0NDdDNjEuNDYwMiAzLjY3NDQ3IDYwLjkyNTggMy42NzQ0NyA2MC4yMzY4IDMuNjc0NDdDNjAuMzc3NCAzLjE4NDA4IDYwLjQzMzcgMi43Nzc3NiA2MC42MTY1IDIuNDI3NDlDNjAuOTU0IDEuNzY4OTcgNjEuNDAzOSAxLjE2NjQ5IDYxLjc0MTQgMC40OTM5NjRDNjIuMDA4NiAtMC4wNTI0NjYyIDYyLjI4OTggLTAuMDM4NDU0NyA2Mi43ODIgMC4zMjU4MzJDNjIuMjg5OCAxLjE2NjQ5IDYxLjc4MzYgMi4wMDcxNiA2MS4yMzUyIDIuOTMxODhDNjEuNTQ0NiAyLjk0NTkgNjEuNzY5NSAyLjk1OTkxIDYyLjA1MDggMi45NzM5MkM2Mi4xMjExIDIuNTk1NjIgNjIuMTc3MyAyLjIzMTMzIDYyLjI0NzYgMS44MjUwMUM2Mi40ODY3IDEuODExIDYyLjcyNTcgMS43OTY5OSA2Mi45NTA3IDEuNzk2OTlDNjMuMTYxNyAyLjI3MzM3IDYyLjczOTggMi45MzE4OSA2My40OTkxIDMuMTAwMDJDNjMuNTI3MyAzLjExNDAzIDYzLjUxMzIgMy41NzYzOSA2My40ODUxIDMuNTc2MzlDNjIuODUyMyAzLjY3NDQ3IDYzLjA5MTQgNC4yMDY4OSA2Mi45Nzg5IDQuNTk5MkM2Mi42OTc2IDQuNTk5MiA2Mi40MzA0IDQuNTk5MiA2Mi4wOTMgNC41OTkyWlwiXHJcbiAgICAgICAgICAgIGZpbGw9XCIjRkZGM0U3XCJcclxuICAgICAgICAgLz5cclxuICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgZD1cIk0zMC4zNDEyIDEuMDI2MjRDMzAuMTMwMyAwLjQzNzc2NiAzMC40Njc3IDAuNDUxNzc3IDMwLjgxOTMgMC40NTE3NzdDMzQuNTAzNSAwLjQ1MTc3NyAzOC4xNzM2IDAuNDUxNzc3IDQxLjg1NzcgMC40NTE3NzdDNDEuOTU2MiAwLjQ1MTc3NyA0Mi4wNTQ2IDAuNDIzNzU1IDQyLjEzOSAwLjQ2NTc4OUM0Mi4yNjU1IDAuNTM1ODQ1IDQyLjM2MzkgMC42MzM5MjMgNDIuNDc2NCAwLjczMjAwMkM0Mi4zNjM5IDAuODQ0MDkzIDQyLjI1MTUgMS4wMjYyNCA0Mi4xMjQ5IDEuMDQwMjVDNDEuNzczNCAxLjA4MjI4IDQxLjQyMTggMS4wNDAyNSA0MS4wNzAzIDEuMDQwMjVDMzcuNzIzNiAxLjA0MDI1IDM0LjM3NjkgMS4wNDAyNSAzMS4wMTYxIDEuMDQwMjVDMzAuNzkxMiAxLjAyNjI0IDMwLjU1MjEgMS4wMjYyNCAzMC4zNDEyIDEuMDI2MjRaXCJcclxuICAgICAgICAgICAgZmlsbD1cIiNGRkYzRTdcIlxyXG4gICAgICAgICAvPlxyXG4gICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICBkPVwiTTYyLjQ1ODEgNDAuODQ1N0M2Mi40NTgxIDQwLjIxNTIgNjIuNDU4MSAzOS41OTg3IDYyLjQ1ODEgMzguOTEyMkM2MS45Mzc4IDM4LjkxMjIgNjEuNDU5NyAzOC45MTIyIDYwLjg5NzIgMzguOTEyMkM2MC44OTcyIDM5LjM4ODUgNjAuODY5MSAzOS44OTI5IDYwLjkxMTMgNDAuMzgzM0M2MC45Mzk0IDQwLjg3MzcgNjAuNzQyNSA0MS4wMTM4IDYwLjIyMjMgNDAuODU5N0M2MC4yMjIzIDM5LjQ4NjYgNjAuMjA4MiAzOC4wODU1IDYwLjIzNjMgMzYuNjk4NEM2MC4yMzYzIDM2LjU4NjMgNjAuNDQ3MyAzNi40NzQyIDYwLjU0NTcgMzYuMzQ4MUM2MC42NzIyIDM2LjQ3NDIgNjAuODgzMiAzNi42MDAzIDYwLjg4MzIgMzYuNzQwNUM2MC45MjUzIDM3LjIxNjggNjAuODk3MiAzNy43MDcyIDYwLjg5NzIgMzguMjI1NkM2MS40MTc1IDM4LjIyNTYgNjEuODk1NiAzOC4yMjU2IDYyLjQzIDM4LjIyNTZDNjIuNDMgMzcuNzM1MiA2Mi40MDE4IDM3LjI3MjkgNjIuNDQ0IDM2LjgyNDVDNjIuNDU4MSAzNi42NTY0IDYyLjY1NDkgMzYuNTAyMyA2Mi43Njc0IDM2LjM0ODFDNjIuODY1OSAzNi41MDIzIDYzLjA2MjcgMzYuNjQyNCA2My4wNjI3IDM2Ljc5NjVDNjMuMDc2OCAzOC4wMjk1IDYzLjA3NjggMzkuMjYyNCA2My4wMzQ2IDQwLjQ5NTRDNjMuMDM0NiA0MC42NjM1IDYyLjc5NTYgNDAuODMxNyA2Mi42NjkgNDAuOTk5OEM2Mi42MTI4IDQwLjk0MzggNjIuNTQyNSA0MC45MDE3IDYyLjQ1ODEgNDAuODQ1N1pcIlxyXG4gICAgICAgICAgICBmaWxsPVwiI0ZGRjNFN1wiXHJcbiAgICAgICAgIC8+XHJcbiAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgIGQ9XCJNNzAuMDUxOCAzOC4yMTE3QzcwLjYwMDIgMzguMzkzOCA3MC44MzkyIDM4LjIxMTcgNzAuOTM3NiAzNy43MDczQzcxLjAyMiAzNy4zMjkgNzEuMTQ4NSAzNi45MzY3IDcxLjM1OTUgMzYuNjE0NEM3MS42ODI5IDM2LjEzOCA3Mi4wMzQ0IDM2LjIwODEgNzIuMjczNSAzNi43NTQ1QzcxLjA2NDIgMzcuNTExMSA3MS4xMzQ1IDM5Ljc1MjkgNzIuNDk4NSA0MC42MjE2QzcyLjI4NzUgNDAuNzYxNyA3Mi4wOTA3IDQwLjk5OTkgNzEuOTY0MSA0MC45NTc4QzcxLjY5NyA0MC44ODc4IDcxLjQwMTcgNDAuNzA1NiA3MS4yNjEgNDAuNDk1NUM3MS4wNzgyIDQwLjE4NzIgNzEuMDUwMSAzOS43OTQ5IDcwLjk1MTcgMzkuNDMwNkM3MC43ODMgMzguODcwMiA3MC43NTQ4IDM4Ljg1NjIgNzAuMDY1OCAzOC44NzAyQzcwLjA2NTggMzkuNTE0NyA3MC4wNjU4IDQwLjE1OTIgNzAuMDY1OCA0MC44MDM3QzY5LjU3MzcgNDEuMDEzOSA2OS4zOTA5IDQwLjkxNTggNjkuNDA0OSA0MC4zOTc0QzY5LjQxOSAzOS4yMDY0IDY5LjM3NjggMzguMDE1NSA2OS40MDQ5IDM2LjgzODZDNjkuNDA0OSAzNi42NzA1IDY5LjYxNTggMzYuNTE2MyA2OS43MjgzIDM2LjM0ODJDNjkuODQwOCAzNi41MDIzIDcwLjAzNzcgMzYuNjU2NCA3MC4wNTE4IDM2LjgyNDZDNzAuMDkzOSAzNy4zMDEgNzAuMDUxOCAzNy43NjMzIDcwLjA1MTggMzguMjExN1pcIlxyXG4gICAgICAgICAgICBmaWxsPVwiI0ZGRjNFN1wiXHJcbiAgICAgICAgIC8+XHJcbiAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgIGQ9XCJNNDIuMzM1OSA0MC44MzE1QzQyLjc1NzggMzkuNDQ0NCA0My4xNzk2IDM4LjA1NzMgNDMuNjI5NiAzNi42NzAyQzQzLjY3MTggMzYuNTQ0MSA0My44OTY4IDM2LjM3NiA0NC4wMDkzIDM2LjQwNEM0NC4xNzggMzYuNDQ2IDQ0LjM4OSAzNi42MDAxIDQ0LjQ0NTIgMzYuNzU0MkM0NC44ODExIDM4LjExMzMgNDUuMjg4OSAzOS40ODY0IDQ1LjY5NjcgNDAuODU5NUM0NS4xOTA1IDQxLjA0MTYgNDQuOTIzMyA0MC45Mjk1IDQ0LjgzODkgNDAuMzk3MUM0NC43Njg2IDM5Ljk0ODggNDQuNjQyMSAzOS41ODQ1IDQ0LjAwOTMgMzkuNjEyNUM0My40ODkgMzkuNjQwNSA0My4yMzU5IDM5Ljc4MDYgNDMuMTkzNyA0MC4yODVDNDMuMTM3NSA0MC43NjE0IDQyLjk2ODcgNDEuMDk3NyA0Mi4zMzU5IDQwLjgzMTVaTTQ0LjQ3MzMgMzkuMDUyMUM0NC4zMTg2IDM4LjUwNTYgNDQuMTY0IDM4LjAyOTMgNDMuOTgxMiAzNy4zNzA3QzQzLjgxMjQgMzguMDQzMyA0My42ODU5IDM4LjUzMzcgNDMuNTQ1MiAzOS4wNTIxQzQzLjg1NDYgMzkuMDUyMSA0NC4xMDc3IDM5LjA1MjEgNDQuNDczMyAzOS4wNTIxWlwiXHJcbiAgICAgICAgICAgIGZpbGw9XCIjRkZGM0U3XCJcclxuICAgICAgICAgLz5cclxuICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgZD1cIk03Ni41NjMgNDAuODMyQzc1Ljk0NDMgNDEuMDk4MiA3NS43NzU1IDQwLjc5IDc1LjcwNTIgNDAuMzgzN0M3NS42MjA5IDM5LjkwNzMgNzUuNTA4NCAzOS42MTMxIDc0Ljg4OTcgMzkuNjEzMUM3NC4yOTkxIDM5LjYxMzEgNzQuMTAyMiAzOS44NzkzIDc0LjA0NiA0MC4zNjk3QzczLjk4OTcgNDAuOTAyMSA3My43MzY2IDQxLjA1NjIgNzMuMjE2MyA0MC44NzQxQzczLjYyNDEgMzkuNDg3IDc0LjAzMTkgMzguMTEzOSA3NC40Njc4IDM2Ljc0MDhDNzQuNTEgMzYuNTg2NyA3NC43NDkgMzYuNDMyNiA3NC45MTc4IDM2LjQwNDZDNzUuMDE2MiAzNi4zOTA2IDc1LjI0MTIgMzYuNTcyNyA3NS4yODM0IDM2LjcxMjhDNzUuNzA1MiAzOC4wNzE5IDc2LjEyNzEgMzkuNDQ0OSA3Ni41NjMgNDAuODMyWk03NS4zMTE1IDM5LjA1MjZDNzUuMTcwOSAzOC41MjAyIDc1LjA1ODQgMzguMDU3OSA3NC45MzE4IDM3LjU4MTVDNzQuODg5NyAzNy41ODE1IDc0Ljg0NzUgMzcuNTgxNSA3NC44MDUzIDM3LjU2NzVDNzQuNjY0NyAzOC4wNTc5IDc0LjUzODEgMzguNTM0MiA3NC4zODM0IDM5LjA1MjZDNzQuNzM1IDM5LjA1MjYgNzQuOTg4MSAzOS4wNTI2IDc1LjMxMTUgMzkuMDUyNlpcIlxyXG4gICAgICAgICAgICBmaWxsPVwiI0ZGRjNFN1wiXHJcbiAgICAgICAgIC8+XHJcbiAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgIGQ9XCJNNzguNzAwMSAzOS4xNjQ1Qzc4LjQwNDggMzkuNzI0OSA3OC4xNzk4IDQwLjIxNTMgNzcuODg0NSA0MC42NjM2Qzc3LjgwMDIgNDAuNzg5NyA3Ny41NjExIDQwLjgzMTggNzcuMzkyNCA0MC45MDE4Qzc3LjM2NDMgNDAuNzMzNyA3Ny4zMjIxIDQwLjU2NTYgNzcuMzM2MSA0MC4zOTc0Qzc3LjM1MDIgNDAuMjg1NCA3Ny40MjA1IDQwLjE3MzMgNzcuNDkwOCA0MC4wODkyQzc4LjM0ODYgMzkuMDgwNCA3OC4zNDg2IDM4LjA4NTYgNzcuNDkwOCAzNy4wNzY4Qzc3LjM3ODMgMzYuOTM2NyA3Ny4zMDggMzYuNzU0NiA3Ny4yMjM2IDM2LjYwMDVDNzcuNzg2MSAzNi4yNjQyIDc3Ljc4NjEgMzYuMjY0MiA3OC4xMDk1IDM2Ljg2NjdDNzguMjkyMyAzNy4yMTcgNzguNDc1MSAzNy41NjcyIDc4LjY4NjEgMzcuOTU5NUM3OC45OTU0IDM3LjM4NTEgNzkuMjc2NiAzNi44NjY3IDc5LjU4NiAzNi4yOTIyQzc5Ljc4MjkgMzYuMzc2MyA3OS45NjU3IDM2LjQ2MDQgODAuMTkwNyAzNi41NTg0QzgwLjA2NDEgMzYuNzgyNiA3OS45OTM4IDM2Ljk3ODggNzkuODY3MiAzNy4xMzI5Qzc4Ljk5NTQgMzguMDg1NiA3OS4wMzc2IDM5LjAyNDQgNzkuODY3MiAzOS45OTExQzgwLjAzNiA0MC4xODczIDgwLjEzNDQgNDAuNDY3NSA4MC4yNjEgNDAuNzA1N0M3OS42NTYzIDQxLjIyNDEgNzkuNTI5OCA0MC42OTE3IDc5LjM0NyA0MC4zNTU0Qzc5LjE1MDEgNDAuMDE5MSA3OC45NTMyIDM5LjY0MDggNzguNzAwMSAzOS4xNjQ1WlwiXHJcbiAgICAgICAgICAgIGZpbGw9XCIjRkZGM0U3XCJcclxuICAgICAgICAgLz5cclxuICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgZD1cIk0zOC41Mzk1IDQwLjc2MTdDMzguNTgxNyA0MC42MzU2IDM4LjU5NTggNDAuNTY1NiAzOC42MzggNDAuNTA5NUMzOS42MzY0IDM5LjIyMDUgMzkuOTQ1NyAzNy45MTc1IDM4LjQ2OTIgMzYuNjU2NUMzOC43NjQ1IDM2LjUwMjQgMzguOTMzMyAzNi40MDQzIDM5LjE0NDIgMzYuMjkyMkMzOS40Mzk1IDM2LjgzODcgMzkuNzIwNyAzNy4zNzExIDQwLjA0NDIgMzcuOTczNkM0MC4zMTEzIDM3LjQ5NzIgNDAuNTIyMyAzNy4wNDg4IDQwLjc4OTQgMzYuNjQyNUM0MC44ODc5IDM2LjUwMjQgNDEuMTQxIDM2LjQ0NjQgNDEuMzA5NyAzNi4zNDgzQzQxLjMyMzggMzYuNTQ0NCA0MS40MjIyIDM2LjgzODcgNDEuMzIzOCAzNi45MzY3QzQwLjI0MSAzOC4wODU2IDQwLjQ4MDEgMzkuMTkyNSA0MS4zOCA0MC4yOTk0QzQxLjQ2NDQgNDAuNDExNSA0MS41MjA2IDQwLjUzNzYgNDEuNjA1IDQwLjY5MTdDNDEuMjgxNiA0MS4wMTM5IDQxLjA0MjUgNDEuMDcgNDAuODE3NiA0MC42MDc2QzQwLjU5MjYgNDAuMTQ1MyA0MC4zMzk1IDM5LjcxMDkgNDAuMDQ0MiAzOS4xNjQ1QzM5LjgwNTEgMzkuNjEyOCAzOS42MzY0IDM5Ljk2MzEgMzkuNDM5NSA0MC4zMTM0QzM5LjI3MDggNDAuNjQ5NyAzOS4xNzIzIDQxLjE5NjEgMzguNTM5NSA0MC43NjE3WlwiXHJcbiAgICAgICAgICAgIGZpbGw9XCIjRkZGM0U3XCJcclxuICAgICAgICAgLz5cclxuICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgZD1cIk01Mi4yMzU2IDQuNTI4OTNDNTEuNTQ2NSA0LjUyODkzIDUwLjg0MzQgNC41Mjg5MyA1MC4xNTQ0IDQuNTI4OTNDNDkuODczMiAzLjg1NjQxIDUwLjMzNzIgMy44MjgzOCA1MC43NzMxIDMuNzg2MzVDNTAuNzczMSAyLjk1OTcgNTAuNzczMSAyLjE3NTA5IDUwLjc3MzEgMS4zMjA0MkM1MC41MiAxLjQ0NjUyIDUwLjI5NSAxLjU0NDYgNDkuOTg1NyAxLjY5ODcyQzQ5LjkyOTQgMS40NjA1MyA0OS43ODg4IDEuMjM2MzYgNDkuODQ1MSAxLjA4MjI0QzQ5Ljk4NTcgMC42ODk5MyA1MS4xOTUgMC4xNDM1MDMgNTEuNzI5MyAwLjE5OTU0NkM1MS43MjkzIDEuMzQ4NDQgNTEuNzI5MyAyLjUxMTM1IDUxLjcyOTMgMy40OTIxMkM1Mi4wMzg3IDMuODcwNDIgNTIuMjM1NiA0LjEwODYgNTIuNDQ2NSA0LjM2MDhDNTIuMzc2MiA0LjQwMjgzIDUyLjMwNTkgNC40NzI4OSA1Mi4yMzU2IDQuNTI4OTNaXCJcclxuICAgICAgICAgICAgZmlsbD1cIiNGRkYzRTdcIlxyXG4gICAgICAgICAvPlxyXG4gICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICBkPVwiTTQ3LjQxMjMgMS45NTExQzQ2Ljg5MiAyLjAyMTE2IDQ2LjI4NzMgMi4wMjExNiA0Ni4yNTkyIDIuMTMzMjRDNDYuMTQ2NyAyLjYyMzYzIDQ2LjEzMjYgMy4xNzAwNiA0Ni4yNDUxIDMuNjYwNDRDNDYuMjczMyAzLjc4NjU0IDQ2Ljg3NzkgMy43ODY1NCA0Ny4yMjk1IDMuODU2NkM0Ny4yNTc2IDMuODAwNTUgNDcuMjg1NyAzLjc0NDUxIDQ3LjI5OTggMy42NzQ0NUM0Ny4zODQxIDMuODcwNjEgNDcuNDY4NSA0LjA4MDc3IDQ3LjU1MjkgNC4yNjI5MUM0Ni41OTY3IDUuMDE5NTEgNDUuNDAxNCA0LjYyNzIgNDUuMTM0MyAzLjQ5MjMxQzQ0Ljc5NjggMi4wNzcyIDQ1LjY4MjcgMC45MDAyNzYgNDYuOTM0MiAxLjEyNDQ1QzQ3LjYwOTEgMS4yNzg1NyA0Ny43MDc1IDEuNTQ0NzggNDcuNDEyMyAxLjk1MTFaXCJcclxuICAgICAgICAgICAgZmlsbD1cIiNGRkYzRTdcIlxyXG4gICAgICAgICAvPlxyXG4gICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICBkPVwiTTYzLjM4NjQgMTMuMDc1OUM2My40NDI3IDEzLjIzIDYzLjQ3MDggMTMuMzg0MiA2My41NTUyIDEzLjQ4MjNDNjMuNjk1OCAxMy42MzY0IDYzLjg1MDUgMTMuODQ2NSA2NC4wMzMzIDEzLjg3NDZDNjQuMTQ1OCAxMy44ODg2IDY0LjQxMjkgMTMuNjUwNCA2NC40MjcgMTMuNTEwM0M2NC41MjU0IDEyLjk0OTggNjQuOTMzMiAxMi45NDk4IDY1LjI1NjYgMTMuMTE4QzY1LjQzOTQgMTMuMjE2IDY1LjU2NiAxMy42NjQ0IDY1LjQ5NTcgMTMuOTAyNkM2NS4zMjcgMTQuNTc1MSA2NC44NzcgMTUuMDUxNSA2NC4xNDU4IDE1LjEzNTVDNjMuNDk4OSAxNS4yMDU2IDYyLjkwODMgMTQuODEzMyA2Mi42MTMgMTQuMTU0OEM2Mi4yMzM0IDEzLjMyODEgNjIuNDE2MiAxMy4wNjE5IDYzLjM4NjQgMTMuMDc1OVpcIlxyXG4gICAgICAgICAgICBmaWxsPVwiI0ZGRjNFN1wiXHJcbiAgICAgICAgIC8+XHJcbiAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgIGQ9XCJNNjYuNTM2MyAyLjA3NzA2QzY2LjUzNjMgMi45MDM3IDY2LjUzNjMgMy42ODgzMiA2Ni41MzYzIDQuNTE0OTdDNjYuMTk4OCA0LjUxNDk3IDY1LjkxNzYgNC41MTQ5NyA2NS42MjIzIDQuNTE0OTdDNjUuNTk0MSA0LjM2MDg1IDY1LjU4MDEgNC4yNzY3OCA2NS41ODAxIDQuMTc4N0M2NS41ODAxIDMuMjUzOTggNjUuNTgwMSAyLjMxNTI0IDY1LjU4MDEgMS4zMzQ0N0M2Ni4zMzk0IDEuMzM0NDcgNjcuMDcwNiAxLjMzNDQ3IDY3LjgxNTkgMS4zMzQ0N0M2Ny43ODc3IDIuMDA3IDY3Ljc4NzcgMi4wMDcgNjYuNTM2MyAyLjA3NzA2WlwiXHJcbiAgICAgICAgICAgIGZpbGw9XCIjRkZGM0U3XCJcclxuICAgICAgICAgLz5cclxuICAgICAgPC9zdmc+XHJcbiAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgVmt1c1dpbGxMb2dvID0gKCkgPT4ge1xyXG4gICByZXR1cm4gKFxyXG4gICAgICA8c3ZnXHJcbiAgICAgICAgIHdpZHRoPVwiMTEzXCJcclxuICAgICAgICAgaGVpZ2h0PVwiMjVcIlxyXG4gICAgICAgICB2aWV3Qm94PVwiMCAwIDExMyAyNVwiXHJcbiAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgID5cclxuICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgZD1cIk0wIDkuNTcyOTVWMTkuMTQ1OUwzLjkyNzE5IDE5LjEyMzhDOC4wMzM5NyAxOS4xMDA4IDguMjI3NjggMTkuMDkxMSA5LjI1NjMyIDE4Ljg1OTVDMTIuMjA4NyAxOC4xOTQ2IDEzLjY4OCAxNi4zMDc4IDEzLjU4MTMgMTMuMzQzMUMxMy41NjczIDEyLjk1MzQgMTMuNTI4MyAxMi41MDkzIDEzLjQ5NDcgMTIuMzU2M0MxMy4xMDIxIDEwLjU2OTggMTIuMTgwMyA5LjQ4MDE0IDEwLjUxMjUgOC44MzEwNUMxMC4zOTYzIDguNzg1OCAxMC40MDkzIDguNzcxNDMgMTAuNzQ0MiA4LjU3NDc3QzExLjg3MTIgNy45MTMxOCAxMi42MDg3IDYuODcyNzkgMTIuODUyOCA1LjYwMDE3QzEyLjk2NzEgNS4wMDQzMiAxMi45MzExIDMuOTYxNiAxMi43NzU4IDMuMzczNDRDMTIuMjk1IDEuNTUxOTMgMTAuOTU4MyAwLjUxODkyOSA4LjU3NDkyIDAuMTI3MDI1QzguMTMzNTggMC4wNTQ0NTM2IDcuNDg3MSAwLjAzOTQyMzIgNC4wMzAyIDAuMDIxMjU1MUwwIDBWOS41NzI5NVpNNTUuNTIxNCA5LjU3Njk1VjE5LjE0NTlMNTkuNDQ4NiAxOS4xMjM3QzYyLjgyMDEgMTkuMTA0NyA2My40NTU0IDE5LjA4OTQgNjMuOTM4NyAxOS4wMTUyQzY2Ljg2NTUgMTguNTY1OSA2OC40Mjc5IDE3LjMyNjMgNjguOTc5MiAxNS4wMTYxQzY5LjA3MjEgMTQuNjI3MiA2OS4wODg0IDE0LjQwNDIgNjkuMDg2OCAxMy41NDU1QzY5LjA4NTEgMTIuNjEyNCA2OS4wNzQyIDEyLjQ5NDIgNjguOTQ3OCAxMi4wMzA5QzY4LjYxNzMgMTAuODE5MiA2Ny44NjE2IDkuNzc3OTEgNjYuOTE5MSA5LjIzNTJDNjYuNzk0IDkuMTYzMTMgNjYuNTE2NSA5LjAyOTM4IDY2LjMwMjUgOC45Mzc5OEw2NS45MTM0IDguNzcxNzlMNjYuMDg2NyA4LjY4NDI0QzY2Ljk2OTEgOC4yMzg1NCA2Ny43NzU3IDcuMzU1ODkgNjguMTMyNSA2LjQ0NTc3QzY4LjU1NzggNS4zNjA0NCA2OC41NjA2IDQuMDE2OTcgNjguMTM5OCAyLjg4NDA3QzY3LjYyNDcgMS40OTczNyA2Ni40MzY1IDAuNTk3MjY5IDY0LjYzODkgMC4yMzE5ODRDNjMuNzA4NyAwLjA0MjkxNTEgNjIuODYxMSAwLjAwODk1NzUyIDU5LjA2MjMgMC4wMDg1MDIwNUw1NS41MjE0IDAuMDA4MDQ2NThWOS41NzY5NVpNNy45Mzk1NiAyLjc3OTkyQzguOTMyNTEgMy4wNDcyMyA5LjQ4NjEzIDMuNTgwMTcgOS42NzU4NyA0LjQ1MTMzQzkuNzU4ODkgNC44MzI1NSA5Ljc0ODg1IDUuNzAwOTggOS42NTc0MyA2LjA0NTg3QzkuNDE3MDEgNi45NTI5IDguNzc5MzkgNy41MzcwMiA3Ljc0Mjk3IDcuNzk5NzJDNy4xMTU0NSA3Ljk1ODczIDYuNDg3MiA4LjAwMjIgNC44MDI3NiA4LjAwMzE2TDMuMjQ0NzYgOC4wMDQwMlY1LjM1NTU4QzMuMjQ0NzYgMy44OTg5IDMuMjYyMTIgMi42ODk4OSAzLjI4MzM5IDIuNjY4ODhDMy4zMDQ2MSAyLjY0NzgzIDQuMjcyMjcgMi42NDAzNCA1LjQzMzY4IDIuNjUyMjNDNy4zNzgzMiAyLjY3MjA3IDcuNTc2NTEgMi42ODIxOSA3LjkzOTU2IDIuNzc5OTJaTTYzLjQ2OTIgMi43ODE5OUM2NC43MTg3IDMuMTE3OTIgNjUuMjYzMyAzLjg0NzE4IDY1LjI3MTYgNS4xOTUzMUM2NS4yNzUzIDUuODA0ODcgNjUuMTk5NSA2LjE0NTU2IDY0Ljk1ODggNi42MDE0NEM2NC42MjM1IDcuMjM2NDEgNjMuOTgyNyA3LjY1NTc0IDYzLjAzNDQgNy44NjA2NUM2Mi42MTIxIDcuOTUxOSA2Mi4zMTgyIDcuOTY4MDkgNjAuNjg0NyA3Ljk5MDA1TDU4LjgxNzcgOC4wMTUxNVY1LjMyMjY5VjIuNjMwMTdMNjAuOTQyMiAyLjY1MTk4QzYyLjkxMjkgMi42NzIyMiA2My4wOTU5IDIuNjgxNjQgNjMuNDY5MiAyLjc4MTk5Wk00Ny44NDczIDYuMDAzNTZDNDUuNDcwNSA2LjM5MTE2IDQzLjY2NTMgNy43NzczNSA0Mi43NzMxIDkuODk5OTNDNDIuMzg4MiAxMC44MTU1IDQyLjIyOTcgMTEuNjc1MyA0Mi4yMzE1IDEyLjgzN0M0Mi4yMzQ2IDE0LjgzMzYgNDIuODI2MyAxNi4zOTI0IDQ0LjAyOTggMTcuNTc0OUM0NC42OTkyIDE4LjIzMjYgNDUuNDMyNiAxOC42NzYxIDQ2LjM5NjIgMTkuMDA1NkM0Ny4zNTE3IDE5LjMzMjQgNDcuOTIxMyAxOS40MTUxIDQ5LjIxMjIgMTkuNDE0M0M1MC4wNjggMTkuNDEzOSA1MC40NjUgMTkuMzkyIDUwLjgzNDUgMTkuMzI1MkM1MS44MTY1IDE5LjE0NzUgNTIuNjY4OSAxOC44NDk1IDUzLjI1ODMgMTguNDc3OEw1My40OTY0IDE4LjMyNzdMNTMuMTM4MSAxNy4wNzUzQzUyLjk0MSAxNi4zODY0IDUyLjc3MDQgMTUuODEzIDUyLjc1OSAxNS44MDA4QzUyLjc0NzYgMTUuNzg4NyA1Mi42NTE4IDE1LjgyOTggNTIuNTQ2MSAxNS44OTIyQzUxLjk1MjMgMTYuMjQyNyA1MS4wNzQ5IDE2LjU1MDggNTAuMjkzOCAxNi42ODMxQzQ5LjM0NzYgMTYuODQzNSA0OC4zMzE0IDE2LjY5NjYgNDcuNDM2OSAxNi4yNzAxQzQ3LjAyMTYgMTYuMDcyMSA0Ni44Nzk5IDE1Ljk2OTEgNDYuNDgxNyAxNS41NzZDNDYuMTAyMyAxNS4yMDE1IDQ1Ljk3MzggMTUuMDMzMiA0NS44MDA3IDE0LjY4NDJDNDUuNTEgMTQuMDk4IDQ1LjQyNDUgMTMuNzUzNSA0NS4zOTA1IDEzLjAzMjNDNDUuMjg2OSAxMC44Mjg4IDQ2LjM0MTEgOS4yMDQ2MyA0OC4xODIxIDguNzMxMzVDNDguNzE5MSA4LjU5MzM0IDQ5LjkyNiA4LjYwNTI5IDUwLjU0NDIgOC43NTQ3OEM1MS4xMDEzIDguODg5NSA1MS43MzExIDkuMjAzMjEgNTIuMTU4OSA5LjU1OTA5TDUyLjQ3ODkgOS44MjUyOEw1Mi41MzY4IDkuNjEwNUM1Mi41Njg2IDkuNDkyMzkgNTIuNzQzMiA4Ljg1NjYgNTIuOTI0OSA4LjE5Nzc1QzUzLjEwNjYgNy41Mzg4NCA1My4yNTUyIDYuOTg5OSA1My4yNTUyIDYuOTc3ODVDNTMuMjU1MiA2LjkyOTQ3IDUyLjMwMjUgNi41MjUxNyA1MS44MDM4IDYuMzYxOTFDNTAuODgyMSA2LjA2MDI0IDUwLjM1NjQgNS45NzU1MiA0OS4yNjM3IDUuOTUyNjVDNDguNTczOCA1LjkzODIzIDQ4LjE1NiA1Ljk1MzIxIDQ3Ljg0NzMgNi4wMDM1NlpNMTUuNjA1NyAxMi42ODUyVjE5LjEzNzdIMTcuMDk5NEgxOC41OTNWMTYuMjAyNFYxMy4yNjcyTDE4LjgzNzYgMTMuMjY3N0MxOS40MDk2IDEzLjI2ODkgMTkuNzM0NiAxMy41NDgzIDIwLjk5MTMgMTUuMTE5NUMyMi4xMjU3IDE2LjUzNzkgMjMuODIwNSAxOC43Njg1IDIzLjk5MDcgMTkuMDY3M0MyNC4wMjQ5IDE5LjEyNzQgMjQuMzQ5NCAxOS4xMzY3IDI2LjAyMzggMTkuMTI1NkwyOC4wMTYyIDE5LjExMjRMMjcuMjA5NCAxOC4wNzQ5QzI0LjcxNDkgMTQuODY3MSAyMy41MTM3IDEzLjM5OTUgMjIuNzQ3MSAxMi42MjMxTDIyLjIzNiAxMi4xMDU1TDIyLjc5ODkgMTEuNTA5N0MyMy43OTYzIDEwLjQ1NCAyNi42Nzc3IDcuMjAyNjUgMjcuMzA3MiA2LjQyMjU0TDI3LjQ2MDMgNi4yMzI3NkgyNS42NTgxSDIzLjg1NThMMjMuNTg0MyA2LjU3NDM2QzIzLjAyNDkgNy4yNzgwNiAyMS4wODA4IDkuNjE3NjkgMjAuNjMwOSAxMC4xMjg2QzE5LjczNDUgMTEuMTQ2NyAxOS4yMDgyIDExLjU4IDE4LjgwMzUgMTEuNjMzM0wxOC41OTMgMTEuNjYxMVY4Ljk0Njk0VjYuMjMyNzZIMTcuMDk5NEgxNS42MDU3VjEyLjY4NTJaTTI3Ljg2MzcgNi4yNTM3NkMyNy44NjM3IDYuMzY4MjkgMjguOTU4OSA5LjIxODk1IDI5LjQ1OTYgMTAuNDA3OUMzMC4zNjQyIDEyLjU1NTcgMzEuODE4NiAxNS41MjM1IDMyLjgzMjYgMTcuMjkwNUMzMy4xMDQxIDE3Ljc2MzcgMzMuMzc3NSAxOC4yNDk2IDMzLjQ0MDIgMTguMzcwNEwzMy41NTQxIDE4LjU4OTlMMzMuMTk4NyAxOS4yNTZDMzIuNjQyMyAyMC4yOTg1IDMxLjA2NiAyMy4xNzI4IDMwLjUyOTggMjQuMTIyNUwzMC4wNDQgMjQuOTgyOEwzMS42OTYgMjQuOTk2MkMzMi42MDQ3IDI1LjAwMzUgMzMuMzczNSAyNSAzMy40MDQ1IDI0Ljk4ODNDMzMuNTEzNCAyNC45NDcyIDM2LjE2OTkgMTkuNjEyMyAzNy4zMjU4IDE3LjExMzRDMzguNDYwMyAxNC42NjA3IDQxLjMyNDggOC4xMTUgNDEuOTcxNCA2LjQ5Nzc5TDQyLjA3NzkgNi4yMzEzOUw0MC4zNzMgNi4yNDQ3NUwzOC42NjgyIDYuMjU4MDZMMzguMjY4MSA3LjM5NjczQzM3LjQ4MjQgOS42MzI3MiAzNi41NTM2IDEyLjA0MyAzNS44MjA1IDEzLjc0OEMzNS42MDUxIDE0LjI0OSAzNS4zNjc5IDE0LjgwMTggMzUuMjkzNCAxNC45NzY1QzM1LjE4MzYgMTUuMjMzOSAzNS4xNDU1IDE1LjI4MTkgMzUuMDkyMyAxNS4yMjk1QzM0Ljk3ODMgMTUuMTE3MyAzMy43NzAxIDEyLjcyNDIgMzMuMzM1IDExLjc0OUMzMi42NjQyIDEwLjI0NSAzMS4yMTE1IDYuNTA3MDUgMzEuMjExNSA2LjI4NDY4QzMxLjIxMTUgNi4yNTAyNyAzMC42NDc5IDYuMjMyNzYgMjkuNTM3NiA2LjIzMjc2QzI4LjYxNyA2LjIzMjc2IDI3Ljg2MzcgNi4yNDIyMiAyNy44NjM3IDYuMjUzNzZaTTcxLjEyNzIgMTIuNjg1MlYxOS4xMzc3SDcxLjUwNzFINzEuODg3MUw3Mi45NjM1IDE4LjEzODJDNzQuNTU3MiAxNi42NTgzIDc2LjI5MDYgMTUuMDkyNCA3OC4yODYyIDEzLjMyOTVMODAuMDYzMSAxMS43Nkw4MC4wNzYzIDE1LjQ0ODhMODAuMDg5NSAxOS4xMzc3SDgxLjU4MjhIODMuMDc2MVYxMi42ODUyVjYuMjMyNzZIODIuNjU3NUg4Mi4yMzg5TDgxLjc5NzggNi41OTk2NkM4MC4zNDI5IDcuODA5NjkgNzcuMDQ1NyAxMC42ODk3IDc1LjAxNTcgMTIuNTIzNEw3NC4xNDAyIDEzLjMxNDRMNzQuMTI2OSA5Ljc3MzU2TDc0LjExMzcgNi4yMzI3Nkg3Mi42MjA0SDcxLjEyNzJWMTIuNjg1MlpNODcuNDg0IDYuNjUwMjdDODcuNDY3MSA2Ljg3OTg4IDg3LjQxODIgNy44ODc2MiA4Ny4zNzUzIDguODg5NjVDODcuMjI0NiAxMi40MTE4IDg2Ljk5NzcgMTQuNDI2OSA4Ni42NDk0IDE1LjMzOUM4Ni4zMTk5IDE2LjIwMTcgODUuODYxMSAxNi41MzM0IDg0LjkxMzggMTYuNTkzOEM4NC40ODU2IDE2LjYyMSA4NC40NjEgMTYuNjI4OCA4NC40ODQzIDE2LjcyODlDODQuNDk4IDE2Ljc4NzIgODQuNTYyNSAxNy4zOTkzIDg0LjYyNzUgMTguMDg5MUM4NC42OTI2IDE4Ljc3ODkgODQuNzYxOCAxOS4zNjg2IDg0Ljc4MTQgMTkuMzk5N0M4NC44Mzk1IDE5LjQ5MiA4Ni4wNjQyIDE5LjM2NTggODYuNjA1OCAxOS4yMTE4Qzg3LjQ5MTIgMTguOTU5OSA4OC4xOTkzIDE4LjQ5MiA4OC42NTkyIDE3Ljg1NUM4OS4zMzcgMTYuOTE2MSA4OS43NDUxIDE1LjYyMDQgODkuOTc2NyAxMy42NzIxQzkwLjAxNjkgMTMuMzMzOCA5MC4zODk3IDkuMDIxODQgOTAuMzg5NyA4Ljg5NTA3QzkwLjM4OTcgOC44NzgxNiA5MS40MzI3IDguODY0MzUgOTIuNzA3NCA4Ljg2NDM1SDk1LjAyNTFWMTQuMDAxVjE5LjEzNzdIOTYuNTQ0NEg5OC4wNjM4VjEyLjY4NTJWNi4yMzI3Nkg5Mi43ODkzSDg3LjUxNDdMODcuNDg0IDYuNjUwMjdaTTEwMi40MjIgNi43NTE0OUMxMDIuNDA0IDcuMDM2NzYgMTAyLjM2NiA3LjgyODE2IDEwMi4zMzggOC41MTAxQzEwMi4xNTYgMTIuODQzIDEwMS45MDEgMTQuODQ5OSAxMDEuNDIzIDE1LjcxMjhDMTAxLjEwNiAxNi4yODYzIDEwMC42NjQgMTYuNTM4NSA5OS44ODE1IDE2LjU5MjdMOTkuNDU0NCAxNi42MjIzTDk5LjQ1NTQgMTYuODA0NkM5OS40NTcgMTcuMDkyNSA5OS42OTk3IDE5LjM5NTYgOTkuNzMxOCAxOS40MjcxQzk5Ljc3OTUgMTkuNDczOSAxMDEuMDUxIDE5LjM0NzggMTAxLjQxMiAxOS4yNjA1QzEwMS45NjcgMTkuMTI2IDEwMi43MzEgMTguNzMzNyAxMDMuMTE5IDE4LjM4MzZDMTAzLjg2NyAxNy43MSAxMDQuNDA5IDE2LjU3NDggMTA0LjcwNSAxNS4wNjRDMTA0Ljg2MSAxNC4yNjk1IDEwNC45NTEgMTMuNDg2MSAxMDUuMTE4IDExLjQ3MDZDMTA1LjIwNCAxMC40NDA4IDEwNS4yODggOS40MzMwNyAxMDUuMzA2IDkuMjMxMjVMMTA1LjMzOCA4Ljg2NDM1SDEwNy42NzVIMTEwLjAxM1YxNC4wMDFWMTkuMTM3N0gxMTEuNTA2SDExM1YxMi42ODUyVjYuMjMyNzZIMTA3LjcyN0gxMDIuNDU0TDEwMi40MjIgNi43NTE0OVpNNy43OTkzNyAxMC42NTU1QzguODMyNjQgMTAuODU2MSA5LjQ0MDc1IDExLjE5OTUgOS44NzgzMyAxMS44MjkzQzkuOTM4MDggMTEuOTE1MyAxMC4wNTA0IDEyLjE2NTggMTAuMTI3OSAxMi4zODZDMTAuMjUzOCAxMi43NDM2IDEwLjI2OTIgMTIuODU5NiAxMC4yNzEyIDEzLjQ2OTZDMTAuMjcyOSAxMy45OTA3IDEwLjI1MTEgMTQuMjI0OSAxMC4xNzk1IDE0LjQ1NjVDOS44NTEwNCAxNS41MTkxIDkuMTMxMzcgMTYuMTIzMSA3Ljg3Njk5IDE2LjM4ODdDNy40OTcxNCAxNi40NjkyIDcuMTc5NDEgMTYuNDgwOCA1LjM1NjQzIDE2LjQ4MDhIMy4yNzA1MUwzLjI1NzIyIDEzLjUwMjRMMy4yNDM5MyAxMC41MjRMNS4zMTczOSAxMC41NTAxQzYuOTA0NjkgMTAuNTcgNy40ODY2NCAxMC41OTQ4IDcuNzk5MzcgMTAuNjU1NVpNNjIuNzU5OSAxMC41ODk5QzYzLjgyOTUgMTAuNjk1NiA2NC41NCAxMC45NDk1IDY1LjAyMzIgMTEuMzk4NUM2NS4zNTczIDExLjcwOSA2NS41MTQyIDExLjk1NzggNjUuNjc2MSAxMi40MzQxQzY1Ljc3ODYgMTIuNzM1OCA2NS43OTU4IDEyLjg4ODIgNjUuNzk1OCAxMy40OTQ5QzY1Ljc5NTggMTQuMTAxNyA2NS43Nzg2IDE0LjI1NCA2NS42NzYxIDE0LjU1NTdDNjUuNDM0MyAxNS4yNjY5IDY1LjAwOTkgMTUuNzU3MSA2NC4zNjg0IDE2LjA2NTlDNjMuNTg5NCAxNi40NDEgNjMuMDQxNCAxNi41MDYxIDYwLjY2MDMgMTYuNTA2MUg1OC44MTc3VjEzLjUyMDJWMTAuNTM0NEg2MC41MDg0QzYxLjQzODMgMTAuNTM0NCA2Mi40NTE0IDEwLjU1OTMgNjIuNzU5OSAxMC41ODk5WlwiXHJcbiAgICAgICAgICAgIGZpbGw9XCIjRkZGM0U3XCJcclxuICAgICAgICAgLz5cclxuICAgICAgPC9zdmc+XHJcbiAgICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcclxuaW1wb3J0IHMgZnJvbSBcIi4vVGFzdGVzU1ZHLm1vZHVsZS5zY3NzXCI7XHJcbmV4cG9ydCBjb25zdCBSZWRXaW5lID0gKHsgYm9yZGVyIH0pID0+IHtcclxuICAgcmV0dXJuIChcclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbHN4KHMudGFzdGUsIGJvcmRlciA9PT0gXCJhY2NlbnRcIiA/IHMuYWNjZW50IDogXCJcIil9PlxyXG4gICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIHdpZHRoPVwiOFwiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjEyXCJcclxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCA4IDEyXCJcclxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICBkPVwiTTEuMTkzNjggMC43NDIwNjVDMS4xMDgxMiAwLjc0MjA2NSAxLjAyNjA3IDAuNzc2MDUyIDAuOTY1NTc3IDAuODM2NTQ5QzAuOTA1MDggMC44OTcwNDUgMC44NzEwOTQgMC45NzkwOTYgMC44NzEwOTQgMS4wNjQ2NVY0LjYxMzA5QzAuODcxMDg0IDUuNDEyOCAxLjE2ODEyIDYuMTg0MDEgMS43MDQ1OCA2Ljc3NzA5QzIuMjQxMDMgNy4zNzAxNyAyLjk3ODY3IDcuNzQyODUgMy43NzQzNyA3LjgyMjgyVjEwLjQxOTZIMi40ODQwMkMyLjM5ODQ3IDEwLjQxOTYgMi4zMTY0MiAxMC40NTM2IDIuMjU1OTIgMTAuNTE0MUMyLjE5NTQyIDEwLjU3NDYgMi4xNjE0NCAxMC42NTY3IDIuMTYxNDQgMTAuNzQyMkMyLjE2MTQ0IDEwLjgyNzggMi4xOTU0MiAxMC45MDk4IDIuMjU1OTIgMTAuOTcwM0MyLjMxNjQyIDExLjAzMDggMi4zOTg0NyAxMS4wNjQ4IDIuNDg0MDIgMTEuMDY0OEg1LjcwOTg4QzUuNzk1NDMgMTEuMDY0OCA1Ljg3NzQ5IDExLjAzMDggNS45Mzc5OCAxMC45NzAzQzUuOTk4NDggMTAuOTA5OCA2LjAzMjQ3IDEwLjgyNzggNi4wMzI0NyAxMC43NDIyQzYuMDMyNDcgMTAuNjU2NyA1Ljk5ODQ4IDEwLjU3NDYgNS45Mzc5OCAxMC41MTQxQzUuODc3NDkgMTAuNDUzNiA1Ljc5NTQzIDEwLjQxOTYgNS43MDk4OCAxMC40MTk2SDQuNDE5NTRWNy44Mzg5NVY3LjgyMjgyQzUuMjE1MjQgNy43NDI4NSA1Ljk1Mjg3IDcuMzcwMTcgNi40ODkzMiA2Ljc3NzA5QzcuMDI1NzggNi4xODQwMSA3LjMyMjgyIDUuNDEyOCA3LjMyMjgxIDQuNjEzMDlWMS4wNjQ2NUM3LjMyMjgxIDAuOTc5MDk2IDcuMjg4ODIgMC44OTcwNDUgNy4yMjgzMyAwLjgzNjU0OUM3LjE2NzgzIDAuNzc2MDUyIDcuMDg1NzggMC43NDIwNjUgNy4wMDAyMiAwLjc0MjA2NUgxLjE5MzY4Wk0xLjUxNjI3IDMuMDAwMTdWMS4zODcyNEg2LjY3NzY0VjMuMDAwMTdIMS41MTYyN1pNNi4zMjQwOCA0LjY2MTQ4QzYuMjQ2OTggNS4xMjQ3IDYuMDI3MzggNS41NTIzNiA1LjY5NTg1IDUuODg0OTNDNS4zNjQzMiA2LjIxNzUgNC45MzczNSA2LjQzODQ0IDQuNDc0MzggNi41MTdDNC40MzI2MSA2LjUyNDA3IDQuMzg5ODUgNi41MjI4NSA0LjM0ODU2IDYuNTEzNEM0LjMwNzI2IDYuNTAzOTUgNC4yNjgyMyA2LjQ4NjQ2IDQuMjMzNjkgNi40NjE5M0M0LjE5OTE1IDYuNDM3NCA0LjE2OTc4IDYuNDA2MyA0LjE0NzI2IDYuMzcwNDJDNC4xMjQ3NCA2LjMzNDUzIDQuMTA5NTEgNi4yOTQ1NyA0LjEwMjQ0IDYuMjUyOEM0LjA5NTM2IDYuMjExMDMgNC4wOTY1OCA2LjE2ODI3IDQuMTA2MDMgNi4xMjY5OEM0LjExNTQ4IDYuMDg1NjggNC4xMzI5NyA2LjA0NjY1IDQuMTU3NSA2LjAxMjExQzQuMTgyMDQgNS45Nzc1NyA0LjIxMzEzIDUuOTQ4MiA0LjI0OTAxIDUuOTI1NjhDNC4yODQ5IDUuOTAzMTYgNC4zMjQ4NiA1Ljg4NzkzIDQuMzY2NjMgNS44ODA4NkM0LjY5NzMyIDUuODI0NzcgNS4wMDIzIDUuNjY3IDUuMjM5MTIgNS40Mjk0OEM1LjQ3NTk0IDUuMTkxOTYgNS42MzI4MyA0Ljg4NjUyIDUuNjg3OTQgNC41NTU2N0M1LjcwNDE5IDQuNDczMzkgNS43NTE4NSA0LjQwMDY3IDUuODIwODEgNC4zNTI5M0M1Ljg4OTc3IDQuMzA1MiA1Ljk3NDYxIDQuMjg2MTkgNi4wNTczNSA0LjI5OTk1QzYuMTQwMDggNC4zMTM3MSA2LjIxNDIgNC4zNTkxNiA2LjI2NCA0LjQyNjY1QzYuMzEzNzkgNC40OTQxNCA2LjMzNTM0IDQuNTc4MzcgNi4zMjQwOCA0LjY2MTQ4WlwiXHJcbiAgICAgICAgICAgICAgIGZpbGw9XCIjRkFFRUUyXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgPC9zdmc+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBXaGl0ZVdpbmUgPSAoeyBib3JkZXIgfSkgPT4ge1xyXG4gICByZXR1cm4gKFxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2Nsc3gocy50YXN0ZSwgYm9yZGVyID09PSBcImFjY2VudFwiID8gcy5hY2NlbnQgOiBcIlwiKX0+XHJcbiAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgd2lkdGg9XCI4XCJcclxuICAgICAgICAgICAgaGVpZ2h0PVwiMTJcIlxyXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDggMTJcIlxyXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgIGQ9XCJNNi4zMzI0IDQuNTM0NzdDNi4zMzgyMiA0LjQ4MjE0IDYuMzMzNjIgNC40Mjg4NyA2LjMxODg2IDQuMzc4MDFDNi4zMDQxIDQuMzI3MTUgNi4yNzk0NyA0LjI3OTcgNi4yNDYzNyA0LjIzODM2QzYuMjEzMjcgNC4xOTcwMyA2LjE3MjM1IDQuMTYyNjEgNi4xMjU5NSA0LjEzNzA5QzYuMDc5NTUgNC4xMTE1NiA2LjAyODU4IDQuMDk1NDMgNS45NzU5NCA0LjA4OTYxQzUuOTIzMzEgNC4wODM3OCA1Ljg3MDA0IDQuMDg4MzggNS44MTkxOCA0LjEwMzE0QzUuNzY4MzIgNC4xMTc5IDUuNzIwODcgNC4xNDI1NCA1LjY3OTUzIDQuMTc1NjRDNS42MzgyIDQuMjA4NzQgNS42MDM3OCA0LjI0OTY1IDUuNTc4MjYgNC4yOTYwNUM1LjU1MjczIDQuMzQyNDUgNS41MzY2IDQuMzkzNDMgNS41MzA3NyA0LjQ0NjA2QzUuNDk3NzkgNC43NDIxMiA1LjM3MTk3IDUuMDIwMTUgNS4xNzEzNCA1LjI0MDM0QzQuOTcwNyA1LjQ2MDUzIDQuNzA1NTQgNS42MTE1OSA0LjQxMzgyIDUuNjcxODlDNC4zMDkwMiA1LjY5MzQ5IDQuMjE3MDggNS43NTU4NCA0LjE1ODI1IDUuODQ1MjNDNC4wOTk0MiA1LjkzNDYxIDQuMDc4NSA2LjA0MzcgNC4xMDAxMSA2LjE0ODUxQzQuMTIxNzEgNi4yNTMzMSA0LjE4NDA2IDYuMzQ1MjQgNC4yNzM0NCA2LjQwNDA4QzQuMzYyODMgNi40NjI5MSA0LjQ3MTkyIDYuNDgzODIgNC41NzY3MyA2LjQ2MjIyQzUuMDM1NCA2LjM2NzQ5IDUuNDUyMzEgNi4xMjk5OCA1Ljc2NzcgNS43ODM3M0M2LjA4MzA5IDUuNDM3NDggNi4yODA3NyA1LjAwMDI4IDYuMzMyNCA0LjUzNDc3WlwiXHJcbiAgICAgICAgICAgICAgIGZpbGw9XCIjRkFFRUUyXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgZD1cIk0xLjMwNTA5IDAuMjU4MDU3QzEuMTk4MTQgMC4yNTgwNTcgMS4wOTU1OCAwLjMwMDU0IDEuMDE5OTYgMC4zNzYxNjFDMC45NDQzMzkgMC40NTE3ODEgMC45MDE4NTYgMC41NTQzNDUgMC45MDE4NTYgMC42NjEyODlWNC42OTM2MUMwLjkwMTU4NiA1LjQ3OTUyIDEuMTg4MjMgNi4yMzg0OSAxLjcwNzk1IDYuODI4MDFDMi4yMjc2OCA3LjQxNzUyIDIuOTQ0NzQgNy43OTcwNCAzLjcyNDQ4IDcuODk1MjdWMTAuNzQyMUgyLjUxNDc4QzIuNDA3ODQgMTAuNzQyMSAyLjMwNTI4IDEwLjc4NDYgMi4yMjk2NiAxMC44NjAyQzIuMTU0MDQgMTAuOTM1OCAyLjExMTU1IDExLjAzODQgMi4xMTE1NSAxMS4xNDUzQzIuMTExNTUgMTEuMjUyMyAyLjE1NDA0IDExLjM1NDggMi4yMjk2NiAxMS40MzA1QzIuMzA1MjggMTEuNTA2MSAyLjQwNzg0IDExLjU0ODYgMi41MTQ3OCAxMS41NDg2SDUuNzQwNjRDNS44NDc1OCAxMS41NDg2IDUuOTUwMTUgMTEuNTA2MSA2LjAyNTc3IDExLjQzMDVDNi4xMDEzOSAxMS4zNTQ4IDYuMTQzODcgMTEuMjUyMyA2LjE0Mzg3IDExLjE0NTNDNi4xNDM4NyAxMS4wMzg0IDYuMTAxMzkgMTAuOTM1OCA2LjAyNTc3IDEwLjg2MDJDNS45NTAxNSAxMC43ODQ2IDUuODQ3NTggMTAuNzQyMSA1Ljc0MDY0IDEwLjc0MjFINC41MzA5NFY3LjkxOTQ3VjcuODk1MjdDNS4zMTA2OSA3Ljc5NzA0IDYuMDI3NzQgNy40MTc1MiA2LjU0NzQ3IDYuODI4MDFDNy4wNjcyIDYuMjM4NDkgNy4zNTM4NCA1LjQ3OTUyIDcuMzUzNTcgNC42OTM2MVYwLjY2MTI4OUM3LjM1MzU3IDAuNTU0MzQ1IDcuMzExMDkgMC40NTE3ODEgNy4yMzU0NyAwLjM3NjE2MUM3LjE1OTg0IDAuMzAwNTQgNy4wNTcyOCAwLjI1ODA1NyA2Ljk1MDM0IDAuMjU4MDU3SDEuMzA1MDlaTTEuNzA4MzIgMi42Nzc0NVYxLjA2NDUySDYuNTQ3MVYyLjY3NzQ1SDEuNzA4MzJaTTEuNzA4MzIgMy40ODM5MUg2LjU0NzFWNC42OTM2MUM2LjU0NzEgNS4zMzUyNyA2LjI5MjIxIDUuOTUwNjYgNS44Mzg0OCA2LjQwNDM4QzUuMzg0NzYgNi44NTgxIDQuNzY5MzggNy4xMTMgNC4xMjc3MSA3LjExM0MzLjQ4NjA1IDcuMTEzIDIuODcwNjcgNi44NTgxIDIuNDE2OTQgNi40MDQzOEMxLjk2MzIyIDUuOTUwNjYgMS43MDgzMiA1LjMzNTI3IDEuNzA4MzIgNC42OTM2MVYzLjQ4MzkxWlwiXHJcbiAgICAgICAgICAgICAgIGZpbGw9XCIjRkFFRUUyXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgPC9zdmc+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBWZWdldGFibGVzID0gKHsgYm9yZGVyIH0pID0+IHtcclxuICAgcmV0dXJuIChcclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbHN4KHMudGFzdGUsIGJvcmRlciA9PT0gJ2FjY2VudCcgPyBzLmFjY2VudCA6ICcnKX0+XHJcbiAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgd2lkdGg9XCIxMlwiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjExXCJcclxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxMiAxMVwiXHJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgID5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgZD1cIk05LjkzNTM4IDQuNTAwMTNDOS45MzUwMSA0LjA2NzMgOS44MTg1OCAzLjY0MjQ5IDkuNTk4MjMgMy4yNjk5NUM5LjM3Nzg4IDIuODk3NCA5LjA2MTY3IDIuNTkwNzYgOC42ODI1NCAyLjM4MTk1QzguOTY4MjkgMi4wODM4OSA5LjEyODE2IDEuNjg3MTcgOS4xMjg5MiAxLjI3NDI3SDguMzIyNDZDOC4zMjIyNCAxLjQ4ODA5IDguMjM3MjEgMS42OTMxIDguMDg2MDEgMS44NDQyOUM3LjkzNDgyIDEuOTk1NDkgNy43Mjk4MSAyLjA4MDUyIDcuNTE1OTkgMi4wODA3NEM2Ljg4MjI4IDIuMDgxNTggNi4yNzQxNiAyLjMzMDg2IDUuODIyMTkgMi43NzUwNkM1LjM3MDIyIDMuMjE5MjcgNS4xMTA0NCAzLjgyMjk4IDUuMDk4NjIgNC40NTY1OEM0LjU4MTYyIDMuOTMwMDEgNC4yOTE0MSAzLjIyMTkxIDQuMjkwMTMgMi40ODM5N0M0LjI4OTA3IDIuMTI3MzUgNC4xNjk3NCAxLjc4MTE3IDMuOTUwODMgMS40OTk2NUMzLjczMTkyIDEuMjE4MTMgMy40MjU4IDEuMDE3MTggMy4wODA0NCAwLjkyODI5OVYwLjA2NDU3NTJIMi4yNzM5N1YwLjkyODI5OUMxLjkyODYxIDEuMDE3MTggMS42MjI0OSAxLjIxODEzIDEuNDAzNTggMS40OTk2NUMxLjE4NDY3IDEuNzgxMTcgMS4wNjUzNCAyLjEyNzM1IDEuMDY0MjggMi40ODM5N1Y0LjUwMDEzSDAuMjU3ODEyVjQuOTAzMzZDMC4yNTc4MTIgNi40MDA1NyAwLjg1MjU3OCA3LjgzNjQ3IDEuOTExMjcgOC44OTUxNkMyLjk2OTk2IDkuOTUzODUgNC40MDU4NSAxMC41NDg2IDUuOTAzMDYgMTAuNTQ4NkM3LjQwMDI4IDEwLjU0ODYgOC44MzYxNyA5Ljk1Mzg1IDkuODk0ODYgOC44OTUxNkMxMC45NTM1IDcuODM2NDcgMTEuNTQ4MyA2LjQwMDU3IDExLjU0ODMgNC45MDMzNlY0LjUwMDEzSDkuOTM1MzhaTTcuNTE1OTkgMi44ODcyQzcuOTQzNiAyLjg4NzczIDguMzUzNTUgMy4wNTc4NCA4LjY1NTkyIDMuMzYwMjFDOC45NTgyOCAzLjY2MjU3IDkuMTI4MzkgNC4wNzI1MiA5LjEyODkyIDQuNTAwMTNINS45MDMwNkM1LjkwMzYgNC4wNzI1MiA2LjA3MzcgMy42NjI1NyA2LjM3NjA3IDMuMzYwMjFDNi42Nzg0NCAzLjA1Nzg0IDcuMDg4MzggMi44ODc3MyA3LjUxNTk5IDIuODg3MlpNMS44NzA3NCAyLjQ4Mzk3QzEuODcwNzQgMi4yNzAwOCAxLjk1NTcxIDIuMDY0OTUgMi4xMDY5NSAxLjkxMzcxQzIuMjU4MTkgMS43NjI0NyAyLjQ2MzMyIDEuNjc3NSAyLjY3NzIxIDEuNjc3NUMyLjg5MTA5IDEuNjc3NSAzLjA5NjIyIDEuNzYyNDcgMy4yNDc0NiAxLjkxMzcxQzMuMzk4NyAyLjA2NDk1IDMuNDgzNjcgMi4yNzAwOCAzLjQ4MzY3IDIuNDgzOTdDMy40ODUyOCAzLjIwMjM4IDMuNzAwMjkgMy45MDQxMyA0LjEwMTQyIDQuNTAwMTNIMS44NzA3NFYyLjQ4Mzk3Wk01LjkwMzA2IDkuNzQyMTVDNC42ODk5NSA5Ljc0MDY0IDMuNTIxNTIgOS4yODQxNiAyLjYyODY2IDguNDYyOTFDMS43MzU4MSA3LjY0MTY1IDEuMTgzNDcgNi41MTUzNiAxLjA4MDgxIDUuMzA2NTlIMTAuNzI1N0MxMC42MjMgNi41MTU0MyAxMC4wNzA3IDcuNjQxNzcgOS4xNzc3MiA4LjQ2MzA0QzguMjg0NzggOS4yODQzMSA3LjExNjI1IDkuNzQwNzQgNS45MDMwNiA5Ljc0MjE1WlwiXHJcbiAgICAgICAgICAgICAgIGZpbGw9XCIjRkFFRUUyXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgPC9zdmc+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBGcnVpdHMgPSAoeyBib3JkZXIgfSkgPT4ge1xyXG4gICByZXR1cm4gKFxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2Nsc3gocy50YXN0ZSwgYm9yZGVyID09PSAnYWNjZW50JyA/IHMuYWNjZW50IDogJycpfT5cclxuICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICB3aWR0aD1cIjEwXCJcclxuICAgICAgICAgICAgaGVpZ2h0PVwiMTZcIlxyXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEwIDE2XCJcclxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICBkPVwiTTkuODAxMzMgNy45MDM0NUM5LjgwMTMzIDYuOTY5MyA5LjE2Mjg4IDYuMjAzMTYgOC4zMDkzNyA1Ljk2Nzk0QzguNDMzMTQgNS42NjIxNCA4LjQ3OTg3IDUuMzMwNjIgOC40NDU0NiA1LjAwMjUyQzguNDExMDQgNC42NzQ0MiA4LjI5NjU0IDQuMzU5ODEgOC4xMTIwMiA0LjA4NjM1QzcuOTI3NSAzLjgxMjg4IDcuNjc4NjEgMy41ODg5NSA3LjM4NzI0IDMuNDM0MjNDNy4wOTU4OCAzLjI3OTUyIDYuNzcwOTYgMy4xOTg3NyA2LjQ0MTA2IDMuMTk5MDhDNi4xNTIwOCAzLjE5OTA4IDUuODgzMjYgMy4yNjYyOCA1LjY0MTMyIDMuMzczODFDNS43NjkwMSAyLjY1NDcyIDYuMDMxMTEgMS41Nzk0MyA2LjcwOTg4IDEuMzE3MzNMNi4xNzIyNCAwLjUxMDg2NEM1LjAyOTc1IDEuMDI4MzUgNC42OTM3MiAyLjU4NzUxIDQuNTk5NjMgMy4zOTM5N0M0LjMzNzUzIDMuMjczMDEgNC4wNTUyNyAzLjE5OTA4IDMuNzUyODUgMy4xOTkwOEMzLjQyMjk1IDMuMTk4NzcgMy4wOTgwMyAzLjI3OTUyIDIuODA2NjcgMy40MzQyM0MyLjUxNTMgMy41ODg5NSAyLjI2NjQxIDMuODEyODggMi4wODE4OSA0LjA4NjM1QzEuODk3MzcgNC4zNTk4MSAxLjc4Mjg2IDQuNjc0NDIgMS43NDg0NSA1LjAwMjUyQzEuNzE0MDQgNS4zMzA2MiAxLjc2MDc3IDUuNjYyMTQgMS44ODQ1NCA1Ljk2Nzk0QzEuMDI0MzEgNi4xOTY0NCAwLjM5MjU3OCA2Ljk3NjAyIDAuMzkyNTc4IDcuOTAzNDVDMC4zOTI1NzggOC44Mzc2MSAxLjAzMTAzIDkuNjEwNDcgMS44OTEyNiA5LjgzODk3QzEuNzk3MTcgMTAuMDY3NSAxLjczNjY5IDEwLjMyMjggMS43MzY2OSAxMC41OTE3QzEuNzM2NjkgMTEuNTI1OCAyLjM2ODQyIDEyLjI5ODcgMy4yMjg2NCAxMi41MjcyQzMuMTA0ODggMTIuODMzIDMuMDU4MTUgMTMuMTY0NSAzLjA5MjU2IDEzLjQ5MjZDMy4xMjY5NyAxMy44MjA3IDMuMjQxNDcgMTQuMTM1MyAzLjQyNiAxNC40MDg4QzMuNjEwNTIgMTQuNjgyMiAzLjg1OTQxIDE0LjkwNjIgNC4xNTA3NyAxNS4wNjA5QzQuNDQyMTQgMTUuMjE1NiA0Ljc2NzA2IDE1LjI5NjQgNS4wOTY5NSAxNS4yOTZDNS40MjY4NSAxNS4yOTY0IDUuNzUxNzcgMTUuMjE1NiA2LjA0MzE0IDE1LjA2MDlDNi4zMzQ1IDE0LjkwNjIgNi41ODMzOSAxNC42ODIyIDYuNzY3OTEgMTQuNDA4OEM2Ljk1MjQzIDE0LjEzNTMgNy4wNjY5NCAxMy44MjA3IDcuMTAxMzUgMTMuNDkyNkM3LjEzNTc2IDEzLjE2NDUgNy4wODkwMyAxMi44MzMgNi45NjUyNiAxMi41MjcyQzcuMzkzMDMgMTIuNDE1MSA3Ljc3MTU0IDEyLjE2NDMgOC4wNDE1MiAxMS44MTRDOC4zMTE0OSAxMS40NjM4IDguNDU3NjkgMTEuMDMzOSA4LjQ1NzIyIDEwLjU5MTdDOC40NTcyMiAxMC4zMjI4IDguNDAzNDYgMTAuMDc0MiA4LjMwMjY1IDkuODM4OTdDOC43MzEyMSA5LjcyNzI5IDkuMTEwNzEgOS40NzY3OSA5LjM4MTg0IDkuMTI2NjJDOS42NTI5OCA4Ljc3NjQ1IDkuODAwNDkgOC4zNDYzMyA5LjgwMTMzIDcuOTAzNDVaTTcuOTkzNTEgNi40Nzg3VjYuNDkyMTRINy45ODY3OEw3Ljk5MzUxIDYuNDc4N1pNNi40NDEwNiA0LjIwNzE2QzYuOTk4ODcgNC4yMDcxNiA3LjQ0OTE0IDQuNjU3NDQgNy40NDkxNCA1LjIxNTI0QzcuNDQ5MTQgNS43NzMwNCA2Ljk5ODg3IDYuMjIzMzIgNi40NDEwNiA2LjIyMzMyQzUuODgzMjYgNi4yMjMzMiA1LjQzMjk4IDUuNzczMDQgNS40MzI5OCA1LjIxNTI0QzUuNDMyOTggNC42NTc0NCA1Ljg4MzI2IDQuMjA3MTYgNi40NDEwNiA0LjIwNzE2Wk02LjEwNTAzIDcuOTAzNDVDNi4xMDUwMyA4LjQ2MTI2IDUuNjU0NzYgOC45MTE1NCA1LjA5Njk1IDguOTExNTRDNC41MzkxNSA4LjkxMTU0IDQuMDg4ODcgOC40NjEyNiA0LjA4ODg3IDcuOTAzNDVDNC4wODg4NyA3LjM0NTY1IDQuNTM5MTUgNi44OTUzNyA1LjA5Njk1IDYuODk1MzdDNS42NTQ3NiA2Ljg5NTM3IDYuMTA1MDMgNy4zNDU2NSA2LjEwNTAzIDcuOTAzNDVaTTMuNzUyODUgNC4yMDcxNkM0LjMxMDY1IDQuMjA3MTYgNC43NjA5MyA0LjY1NzQ0IDQuNzYwOTMgNS4yMTUyNEM0Ljc2MDkzIDUuNzczMDQgNC4zMTA2NSA2LjIyMzMyIDMuNzUyODUgNi4yMjMzMkMzLjE5NTA0IDYuMjIzMzIgMi43NDQ3NyA1Ljc3MzA0IDIuNzQ0NzcgNS4yMTUyNEMyLjc0NDc3IDQuNjU3NDQgMy4xOTUwNCA0LjIwNzE2IDMuNzUyODUgNC4yMDcxNlpNMS40MDA2NiA3LjkwMzQ1QzEuNDAwNjYgNy4zNDU2NSAxLjg1MDkzIDYuODk1MzcgMi40MDg3NCA2Ljg5NTM3QzIuOTY2NTQgNi44OTUzNyAzLjQxNjgyIDcuMzQ1NjUgMy40MTY4MiA3LjkwMzQ1QzMuNDE2ODIgOC40NjEyNiAyLjk2NjU0IDguOTExNTQgMi40MDg3NCA4LjkxMTU0QzEuODUwOTMgOC45MTE1NCAxLjQwMDY2IDguNDYxMjYgMS40MDA2NiA3LjkwMzQ1Wk0yLjc0NDc3IDEwLjU5MTdDMi43NDQ3NyAxMC4wMzM5IDMuMTk1MDQgOS41ODM1OSAzLjc1Mjg1IDkuNTgzNTlDNC4zMTA2NSA5LjU4MzU5IDQuNzYwOTMgMTAuMDMzOSA0Ljc2MDkzIDEwLjU5MTdDNC43NjA5MyAxMS4xNDk1IDQuMzEwNjUgMTEuNTk5OCAzLjc1Mjg1IDExLjU5OThDMy4xOTUwNCAxMS41OTk4IDIuNzQ0NzcgMTEuMTQ5NSAyLjc0NDc3IDEwLjU5MTdaTTUuMDk2OTUgMTQuMjg4QzQuNTM5MTUgMTQuMjg4IDQuMDg4ODcgMTMuODM3NyA0LjA4ODg3IDEzLjI3OTlDNC4wODg4NyAxMi43MjIxIDQuNTM5MTUgMTIuMjcxOCA1LjA5Njk1IDEyLjI3MThDNS42NTQ3NiAxMi4yNzE4IDYuMTA1MDMgMTIuNzIyMSA2LjEwNTAzIDEzLjI3OTlDNi4xMDUwMyAxMy44Mzc3IDUuNjU0NzYgMTQuMjg4IDUuMDk2OTUgMTQuMjg4Wk02LjQ0MTA2IDExLjU5OThDNS44ODMyNiAxMS41OTk4IDUuNDMyOTggMTEuMTQ5NSA1LjQzMjk4IDEwLjU5MTdDNS40MzI5OCAxMC4wMzM5IDUuODgzMjYgOS41ODM1OSA2LjQ0MTA2IDkuNTgzNTlDNi45OTg4NyA5LjU4MzU5IDcuNDQ5MTQgMTAuMDMzOSA3LjQ0OTE0IDEwLjU5MTdDNy40NDkxNCAxMS4xNDk1IDYuOTk4ODcgMTEuNTk5OCA2LjQ0MTA2IDExLjU5OThaTTcuNzg1MTcgOC45MTE1NEM3LjIyNzM2IDguOTExNTQgNi43NzcwOSA4LjQ2MTI2IDYuNzc3MDkgNy45MDM0NUM2Ljc3NzA5IDcuMzQ1NjUgNy4yMjczNiA2Ljg5NTM3IDcuNzg1MTcgNi44OTUzN0M4LjM0Mjk3IDYuODk1MzcgOC43OTMyNSA3LjM0NTY1IDguNzkzMjUgNy45MDM0NUM4Ljc5MzI1IDguNDYxMjYgOC4zNDI5NyA4LjkxMTU0IDcuNzg1MTcgOC45MTE1NFpcIlxyXG4gICAgICAgICAgICAgICBmaWxsPVwiI0ZBRUVFMlwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgIDwvc3ZnPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmltcG9ydCBzIGZyb20gXCIuL0Rpc2NvdW50U2VjdGlvbi5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgZyBmcm9tIFwic3JjL3N0eWxlcy9NYWluLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRGlzY291bnRTZWN0aW9uID0gKCkgPT4ge1xyXG4gICByZXR1cm4gKFxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2Nsc3gocy5kaXNjb3VudCl9PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChnLndyYXBwZXIpfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3gocy5jb250YWluZXIpfT5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3gocy5wcm9tbyl9PlxyXG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtjbHN4KHMuYmVmb3JlKX0+0KHQutC40LTQutCwINC00L48L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Nsc3gocy5vZmZlcil9PjEwJTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17Y2xzeChzLmluZm8pfT5cclxuICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbHN4KHMuY2F0ZWdvcnkpfT7QvdCwINGB0YvRgDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbHN4KHMubmFtZSl9PiDQktCw0LvQsNC90YHQtTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3gocy5kYXRlKX0+0JTQviAxNS4wNS4yMDIxPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y2xzeChzLmxpbmspfT7Qn9C+0YHQvNC+0YLRgNC10YLRjDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHtcclxuICAgUmVkV2luZSxcclxuICAgV2hpdGVXaW5lLFxyXG4gICBWZWdldGFibGVzLFxyXG4gICBGcnVpdHMsXHJcbn0gZnJvbSBcIkBjb21wb25lbnRzL1NWRy9UYXN0ZXNTVkcvVGFzdGVzU1ZHXCI7XHJcbmltcG9ydCBzIGZyb20gXCIuL05ld1Rhc3RlLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBnIGZyb20gXCJzcmMvc3R5bGVzL01haW4ubW9kdWxlLnNjc3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBOZXdUYXN0ZSA9ICh7IGhyZWYsIG5hbWUsIGFkZGl0aW9uLCBpbWFnZSwgc3R5bGUsIHRhc3RlcyB9KSA9PiB7XHJcbiAgIGNvbnN0IGFsbFRhc3RlcyA9IHtcclxuICAgICAgXCJyZWQtd2luZVwiOiA8UmVkV2luZSBrZXk9ezB9Lz4sXHJcbiAgICAgIFwid2hpdGUtd2luZVwiOiA8V2hpdGVXaW5lIGtleT17MX0vPixcclxuICAgICAgdmVnZXRhYmxlczogPFZlZ2V0YWJsZXMga2V5PXsyfS8+LFxyXG4gICAgICBmcnVpdHM6IDxGcnVpdHMga2V5PXszfS8+LFxyXG4gICB9O1xyXG4gICBjb25zdCBjb3VudHJ5RmxhZ3MgPSB7XHJcbiAgICAgIEZyZW5jaDogXCIvaW1nL2ljb25zL2ZyZW5jaC1mbGFnLmpwZ1wiLFxyXG4gICAgICBSdXNzaWFuOiBcIi9pbWcvaWNvbnMvcnVzLWZsYWcuanBnXCIsXHJcbiAgIH07XHJcblxyXG4gICByZXR1cm4gKFxyXG4gICAgICA8TGluayBocmVmPXtocmVmfT5cclxuICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KHMuY2FyZCl9PlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChzLmJvZHkpfT5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlfSBhbHQ9e25hbWV9IGNsYXNzTmFtZT17Y2xzeChzLmltYWdlKX0gLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgeyEhc3R5bGUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChzLnN0eWxlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xzeChzLmNvdW50cnkpfT57c3R5bGV9IHN0eWxlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17Y291bnRyeUZsYWdzW3N0eWxlXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtzdHlsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KHMuZmxhZyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIHshIXRhc3Rlcy5sZW5ndGggJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChzLndlbGwpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Rhc3Rlcy5tYXAoKHRhc3RlLCBpKSA9PiBhbGxUYXN0ZXNbdGFzdGVdKX1cclxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtjbHN4KHMubmFtZSl9PntuYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xzeChzLmFkZGl0aW9uKX0+e2FkZGl0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcbmltcG9ydCB7IFNsaWRlciB9IGZyb20gXCJAY29tcG9uZW50cy9Db21tb24vU2xpZGVyL1NsaWRlclwiO1xyXG5pbXBvcnQgeyBOZXdUYXN0ZSB9IGZyb20gXCIuL05ld1Rhc3RlL05ld1Rhc3RlXCI7XHJcblxyXG5pbXBvcnQgcyBmcm9tIFwiLi9OZXdUYXN0ZXNTZWN0aW9uLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBnIGZyb20gXCJzcmMvc3R5bGVzL01haW4ubW9kdWxlLnNjc3NcIjtcclxuXHJcbmNvbnN0IG5ld1Byb2R1Y3RzID0gW1xyXG4gICB7XHJcbiAgICAgIGhyZWY6IFwiL1wiLFxyXG4gICAgICBpbWFnZTogXCJpbWcvY29udGVudC9zbGlkZS0xLmpwZ1wiLFxyXG4gICAgICBuYW1lOiBcItCa0LDQvNCw0LzQsdC10YAg0LrQvtC30LjQuVwiLFxyXG4gICAgICBhZGRpdGlvbjogXCLRgSDQsdC10LvQvtC5INC/0LvQtdGB0LXQvdGM0Y5cIixcclxuICAgICAgc3R5bGU6IFwiRnJlbmNoXCIsXHJcbiAgICAgIHRhc3RlczogW1wicmVkLXdpbmVcIiwgXCJ3aGl0ZS13aW5lXCIsIFwiZnJ1aXRzXCJdLFxyXG4gICB9LFxyXG4gICB7XHJcbiAgICAgIGhyZWY6IFwiL1wiLFxyXG4gICAgICBpbWFnZTogXCJpbWcvY29udGVudC9zbGlkZS0xLmpwZ1wiLFxyXG4gICAgICBuYW1lOiBcItCU0LbQtdC8INCw0LHRgNC40LrQvtGB0L7QstGL0LlcIixcclxuICAgICAgYWRkaXRpb246IFwi0YEg0LrQu9C10L3QvtCy0YvQvNC4INGI0LjRiNC60LDQvNC4XCIsXHJcbiAgICAgIHRhc3RlczogW1wicmVkLXdpbmVcIiwgXCJ2ZWdldGFibGVzXCIsIFwiZnJ1aXRzXCJdLFxyXG4gICB9LFxyXG4gICB7XHJcbiAgICAgIGhyZWY6IFwiL1wiLFxyXG4gICAgICBpbWFnZTogXCJpbWcvY29udGVudC9zbGlkZS0xLmpwZ1wiLFxyXG4gICAgICBuYW1lOiBcItCR0YDRjtGIINC60L7Qt9C40LlcIixcclxuICAgICAgYWRkaXRpb246IFwi0YEg0LHQtdC70L7QuSDQv9C70LXRgdC10L3RjNGOXCIsXHJcbiAgICAgIHN0eWxlOiBcIlJ1c3NpYW5cIixcclxuICAgICAgdGFzdGVzOiBbXSxcclxuICAgfSxcclxuICAge1xyXG4gICAgICBocmVmOiBcIi9cIixcclxuICAgICAgaW1hZ2U6IFwiaW1nL2NvbnRlbnQvc2xpZGUtMS5qcGdcIixcclxuICAgICAgbmFtZTogXCLQmtCw0LzQsNC80LHQtdGAINC60L7Qt9C40LlcIixcclxuICAgICAgYWRkaXRpb246IFwi0YEg0LHQtdC70L7QuSDQv9C70LXRgdC10L3RjNGOXCIsXHJcbiAgICAgIHN0eWxlOiBcIkZyZW5jaFwiLFxyXG4gICAgICB0YXN0ZXM6IFtcInJlZC13aW5lXCIsIFwid2hpdGUtd2luZVwiLCBcImZydWl0c1wiXSxcclxuICAgfSxcclxuICAge1xyXG4gICAgICBocmVmOiBcIi9cIixcclxuICAgICAgaW1hZ2U6IFwiaW1nL2NvbnRlbnQvc2xpZGUtMS5qcGdcIixcclxuICAgICAgbmFtZTogXCLQlNC20LXQvCDQsNCx0YDQuNC60L7RgdC+0LLRi9C5XCIsXHJcbiAgICAgIGFkZGl0aW9uOiBcItGBINC60LvQtdC90L7QstGL0LzQuCDRiNC40YjQutCw0LzQuFwiLFxyXG4gICAgICB0YXN0ZXM6IFtcInJlZC13aW5lXCIsIFwidmVnZXRhYmxlc1wiLCBcImZydWl0c1wiXSxcclxuICAgfSxcclxuICAge1xyXG4gICAgICBocmVmOiBcIi9cIixcclxuICAgICAgaW1hZ2U6IFwiaW1nL2NvbnRlbnQvc2xpZGUtMS5qcGdcIixcclxuICAgICAgbmFtZTogXCLQkdGA0Y7RiCDQutC+0LfQuNC5XCIsXHJcbiAgICAgIGFkZGl0aW9uOiBcItGBINCx0LXQu9C+0Lkg0L/Qu9C10YHQtdC90YzRjlwiLFxyXG4gICAgICBzdHlsZTogXCJSdXNzaWFuXCIsXHJcbiAgICAgIHRhc3RlczogW10sXHJcbiAgIH0sXHJcbiAgIHtcclxuICAgICAgaHJlZjogXCIvXCIsXHJcbiAgICAgIGltYWdlOiBcImltZy9jb250ZW50L3NsaWRlLTEuanBnXCIsXHJcbiAgICAgIG5hbWU6IFwi0JrQsNC80LDQvNCx0LXRgCDQutC+0LfQuNC5XCIsXHJcbiAgICAgIGFkZGl0aW9uOiBcItGBINCx0LXQu9C+0Lkg0L/Qu9C10YHQtdC90YzRjlwiLFxyXG4gICAgICBzdHlsZTogXCJGcmVuY2hcIixcclxuICAgICAgdGFzdGVzOiBbXCJyZWQtd2luZVwiLCBcIndoaXRlLXdpbmVcIiwgXCJmcnVpdHNcIl0sXHJcbiAgIH0sXHJcbiAgIHtcclxuICAgICAgaHJlZjogXCIvXCIsXHJcbiAgICAgIGltYWdlOiBcImltZy9jb250ZW50L3NsaWRlLTEuanBnXCIsXHJcbiAgICAgIG5hbWU6IFwi0JTQttC10Lwg0LDQsdGA0LjQutC+0YHQvtCy0YvQuVwiLFxyXG4gICAgICBhZGRpdGlvbjogXCLRgSDQutC70LXQvdC+0LLRi9C80Lgg0YjQuNGI0LrQsNC80LhcIixcclxuICAgICAgdGFzdGVzOiBbXCJyZWQtd2luZVwiLCBcInZlZ2V0YWJsZXNcIiwgXCJmcnVpdHNcIl0sXHJcbiAgIH0sXHJcbiAgIHtcclxuICAgICAgaHJlZjogXCIvXCIsXHJcbiAgICAgIGltYWdlOiBcImltZy9jb250ZW50L3NsaWRlLTEuanBnXCIsXHJcbiAgICAgIG5hbWU6IFwi0JHRgNGO0Ygg0LrQvtC30LjQuVwiLFxyXG4gICAgICBhZGRpdGlvbjogXCLRgSDQsdC10LvQvtC5INC/0LvQtdGB0LXQvdGM0Y5cIixcclxuICAgICAgc3R5bGU6IFwiUnVzc2lhblwiLFxyXG4gICAgICB0YXN0ZXM6IFtdLFxyXG4gICB9LFxyXG5dO1xyXG5jb25zdCBzbGlkZXJQYXJhbXMgPSB7XHJcbiAgIHNsaWRlcjoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICBzbGlkZXNQZXJHcm91cDogMyxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiA1MCxcclxuICAgfSxcclxuICAgbmF2OiB7XHJcbiAgICAgIGNvdW50ZXI6IHRydWUsXHJcbiAgIH0sXHJcbn07XHJcbmV4cG9ydCBjb25zdCBOZXdUYXN0ZXNTZWN0aW9uID0gKCkgPT4ge1xyXG4gICByZXR1cm4gKFxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2Nsc3gocy5uZXcpfT5cclxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goZy53cmFwcGVyKX0+XHJcbiAgICAgICAgICAgIDxTbGlkZXJcclxuICAgICAgICAgICAgICAgdGl0bGU9e1wi0J3QvtCy0YvQtSDQstC60YPRgdGLXCJ9XHJcbiAgICAgICAgICAgICAgIHNsaWRlcz17bmV3UHJvZHVjdHN9XHJcbiAgICAgICAgICAgICAgIHBhcmFtcz17c2xpZGVyUGFyYW1zfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgIDxOZXdUYXN0ZSAvPlxyXG4gICAgICAgICAgICA8L1NsaWRlcj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgKTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xyXG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSBcIkBjb21wb25lbnRzL0NvbW1vbi9Qcm9kdWN0L1Byb2R1Y3RcIjtcclxuXHJcbmltcG9ydCBzIGZyb20gXCIuL1Byb2R1Y3RzU2VjdGlvbi5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgZyBmcm9tIFwic3JjL3N0eWxlcy9NYWluLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFByb2R1Y3RzU2VjdGlvbiA9ICh7IHByb2R1Y3RzIH0pID0+IHtcclxuICAgLy8gY29uc29sZS5sb2cocHJvZHVjdHMpXHJcbiAgIGNvbnN0IFthY3RpdmVDYXRlZ29yeSwgc2V0QWN0aXZlQ2F0ZWdvcnldID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcbiAgIGNvbnN0IFthY3RpdmVTdWJjYXRlZ29yeSwgc2V0QWN0aXZlU3ViY2F0ZWdvcnldID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcblxyXG4gICBjb25zdCBzZXRBY3RpdmVJdGVtID0gKGksIHNldFN0YXRlKSA9PiB7XHJcbiAgICAgIHNldFN0YXRlKGkpO1xyXG4gICB9O1xyXG5cclxuICAgY29uc3QgY2F0ZWdvcmllcyA9IFtcclxuICAgICAge1xyXG4gICAgICAgICB0aXRsZTogXCLQodGL0YDRi1wiLFxyXG4gICAgICAgICBocmVmOiBcIi9cIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICB0aXRsZTogXCLQnNC+0LvQvtC60L5cIixcclxuICAgICAgICAgaHJlZjogXCIvXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAgdGl0bGU6IFwi0JTQtdGB0LXRgNGC0YtcIixcclxuICAgICAgICAgaHJlZjogXCIvXCIsXHJcbiAgICAgIH0sXHJcbiAgIF07XHJcblxyXG4gICBjb25zdCBzdWJDYXRlZ29yaWVzID0gW1xyXG4gICAgICB7XHJcbiAgICAgICAgIHRpdGxlOiBcItCh0LLQtdC20LjQtVwiLFxyXG4gICAgICAgICBocmVmOiBcIi9cIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICB0aXRsZTogXCLQnNGP0LPQutC40LVcIixcclxuICAgICAgICAgaHJlZjogXCIvXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAgdGl0bGU6IFwi0KLQstC10YDQtNGL0LVcIixcclxuICAgICAgICAgaHJlZjogXCIvXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAgdGl0bGU6IFwi0KEg0LHQtdC70L7QuSDQv9C70LXRgdC10L3RjNGOXCIsXHJcbiAgICAgICAgIGhyZWY6IFwiL1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgIHRpdGxlOiBcItChINCz0L7Qu9GD0LHQvtC5INC/0LvQtdGB0LXQvdGM0Y5cIixcclxuICAgICAgICAgaHJlZjogXCIvXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAgdGl0bGU6IFwi0JrQvtGA0L7QstC40LlcIixcclxuICAgICAgICAgaHJlZjogXCIvXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAgdGl0bGU6IFwi0JrQvtC30LjQuVwiLFxyXG4gICAgICAgICBocmVmOiBcIi9cIixcclxuICAgICAgfSxcclxuICAgXTtcclxuXHJcbiAgIHJldHVybiAoXHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xzeChzLnByb2R1Y3RzKX0+XHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KGcud3JhcHBlcil9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChzLmhlYWRlcil9PlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChzLmNhdGVnb3JpZXMpfT5cclxuICAgICAgICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICA8aDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzLmNhdGVnb3J5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVDYXRlZ29yeSA9PT0gaSA/IHMuYWN0aXZlIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVJdGVtKGksIHNldEFjdGl2ZUNhdGVnb3J5KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChzLnN1YmNhdGVnb3JpZXMpfT5cclxuICAgICAgICAgICAgICAgICAge3N1YkNhdGVnb3JpZXMubWFwKChzdWJjYXRlZ29yeSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuc3ViY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVN1YmNhdGVnb3J5ID09PSBpID8gcy5hY3RpdmUgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZUl0ZW0oaSwgc2V0QWN0aXZlU3ViY2F0ZWdvcnkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3N1YmNhdGVnb3J5LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3gocy5ib2R5KX0+XHJcbiAgICAgICAgICAgICAgIHtwcm9kdWN0cyAmJlxyXG4gICAgICAgICAgICAgICAgICBwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3Qga2V5PXtwcm9kdWN0LmlkfSB7Li4ucHJvZHVjdH0gLz5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICApO1xyXG59O1xyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgcyBmcm9tICcuL0luc3RhZ3JhbVByb21vU2VjdGlvbi5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBnIGZyb20gJ3NyYy9zdHlsZXMvTWFpbi5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IEluc3RhZ3JhbSB9IGZyb20gXCJAY29tcG9uZW50cy9Db21tb24vSW5zdGFncmFtL0luc3RhZ3JhbVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEluc3RhZ3JhbVByb21vU2VjdGlvbiA9ICh7dXJsfSkgPT4ge1xyXG4gICByZXR1cm4gKFxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3MucHJvbW99PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Zy53cmFwcGVyfT5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17cy50aXRsZX0+SW5zdGFncmFtPC9oMj5cclxuICAgICAgICAgICAgPGEgaHJlZj17dXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9e3Muc3Vic2NyaWJlfT7Qn9C+0LTQv9C40YHQsNGC0YzRgdGPINC90LAg0L3QsNGBPC9hPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICApO1xyXG59O1xyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgcyBmcm9tIFwiLi9JbnN0YWdyYW1TZWN0aW9uLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBnIGZyb20gXCJzcmMvc3R5bGVzL01haW4ubW9kdWxlLnNjc3NcIjtcclxuXHJcbmltcG9ydCB7IF9pbnN0YWdyYW0gfSBmcm9tIFwic3JjL2FwaS9faW5zdGFncmFtXCI7XHJcbmltcG9ydCB7IEluc3RhZ3JhbSB9IGZyb20gXCJAY29tcG9uZW50cy9Db21tb24vSW5zdGFncmFtL0luc3RhZ3JhbVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEluc3RhZ3JhbVNlY3Rpb24gPSAoKSA9PiB7XHJcbiAgIGNvbnN0IFtwaG90b3MsIHNldFBob3Rvc10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcbiAgIGNvbnN0IGdldEluc3RhZ3JhbURhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHJldHVybiBhd2FpdCBfaW5zdGFncmFtKCk7XHJcbiAgIH07XHJcbiAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGdldEluc3RhZ3JhbURhdGEoKS50aGVuKChyZXMpID0+IHNldFBob3RvcyhyZXMpKTtcclxuICAgfSwgW10pO1xyXG4gICBjb25zdCBpbnN0YWdyYW1Vc2VyID0gJ2tvLWNoZWVzZSc7XHJcbiAgIHJldHVybiAoXHJcbiAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Zy53cmFwcGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAge3Bob3Rvcy5tYXAoXHJcbiAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJtYWxpbmssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lZGlhX3VybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHVtYm5haWxfdXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICBpXHJcbiAgICAgICAgICAgICAgICAgICkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgaSA8IDQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnN0YWdyYW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsPXtwZXJtYWxpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXttZWRpYV91cmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvQ292ZXI9e3RodW1ibmFpbF91cmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e2NhcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXI9e2luc3RhZ3JhbVVzZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9e3RpbWVzdGFtcC5zbGljZSgwLCAxMCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHMgZnJvbSAnLi9QYXJ0bmVyLm1vZHVsZS5zY3NzJztcclxuZXhwb3J0IGNvbnN0IFBhcnRuZXIgPSAoe2xvZ28sIGxpbmt9KSA9PiB7XHJcbiAgIHJldHVybiAoXHJcbiAgICAgIDxhIGhyZWY9e2xpbmt9IGNsYXNzTmFtZT17cy5wYXJ0bmVyfT57bG9nb308L2E+XHJcbiAgICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcclxuaW1wb3J0IHMgZnJvbSBcIi4vUHJvbW9TZWN0aW9uLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBnIGZyb20gXCJzcmMvc3R5bGVzL01haW4ubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgUGFydG5lciB9IGZyb20gXCIuL1BhcnRuZXIvUGFydG5lclwiO1xyXG5pbXBvcnQgeyBBYkxvZ28sIFVzYWNoZXZMb2dvLCBWa3VzV2lsbExvZ28gfSBmcm9tIFwiQGNvbXBvbmVudHMvU1ZHL1BhcnRuZXJzU1ZHXCI7XHJcblxyXG5jb25zdCBwYXJ0bmVycyA9IFtcclxuICAge1xyXG4gICAgICBsaW5rOiBcIi9cIixcclxuICAgICAgbG9nbzogPEFiTG9nbyAvPixcclxuICAgfSxcclxuICAge1xyXG4gICAgICBsaW5rOiBcIi9cIixcclxuICAgICAgbG9nbzogPFVzYWNoZXZMb2dvIC8+LFxyXG4gICB9LFxyXG4gICB7XHJcbiAgICAgIGxpbms6IFwiL1wiLFxyXG4gICAgICBsb2dvOiA8Vmt1c1dpbGxMb2dvIC8+LFxyXG4gICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb21vU2VjdGlvbiA9ICgpID0+IHtcclxuICAgcmV0dXJuIChcclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbHN4KHMucHJvbW8pfT5cclxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goZy53cmFwcGVyKX0+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2Nsc3gocy50aXRsZSl9PlxyXG4gICAgICAgICAgICAgICDQnNCw0LPQsNC30LjQvSDQvdCw0YLRg9GA0LDQu9GM0L3Ri9GFe1wiIFwifVxyXG4gICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Nsc3goZy5pdGFsaWMpfT7QvNC+0LvQvtGH0L3Ri9GFINC/0YDQvtC00YPQutGC0L7Qsjwvc3Bhbj4gPGJyIC8+0YDRg9GH0L3QvtC5XHJcbiAgICAgICAgICAgICAgINGA0LDQsdC+0YLRi1xyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Nsc3gocy5saW5rKX0+XHJcbiAgICAgICAgICAgICAgINChINC00L7RgdGC0LDQstC60L7QuSDQv9C+INCc0L7RgdC60LLQtSDQuCDQnNC+0YHQutC+0LLRgdC60L7QuSDQvtCx0LvQsNGB0YLQuFxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KHMuZm9vdGVyKX0+XHJcbiAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xzeChzLnJlbWFyayl9PtGC0LXQv9C10YDRjCDQsiDQvNCw0LPQsNC30LjQvdCw0YU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KHMuY29udGFpbmVyKX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KHMuYmxvY2spfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3gocy5wYXJ0bmVycyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICB7cGFydG5lcnMubWFwKChsb2dvLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYXJ0bmVyIHsuLi5sb2dvfSBrZXk9e2l9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3gocy5ibG9jayl9PlxyXG4gICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzTmFtZT17Y2xzeChzLmluc3QpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjM5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDM5IDM5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTE5LjQ5ODUgMEMxNC4xOTgyIDAgMTMuNTM3NiAwLjAyNTU5MzggMTEuNDYzMyAwLjExMzM0NEM5LjM4MDQ4IDAuMjE1NzE5IDcuOTcxNiAwLjUzODY4OCA2LjcyODQ4IDEuMDIxMzFDNS40Mjc0MSAxLjUxMjQ5IDQuMjQ5MTMgMi4yODE1MiAzLjI3NTc2IDMuMjc0NzhDMi4yNzk3MyA0LjI0NTg4IDEuNTEwMjcgNS40MjQ4MiAxLjAyMjI5IDYuNzI3NUMwLjUzOTY2NCA3Ljk3MDYyIDAuMjE2Njk1IDkuMzc5NSAwLjExNDMyIDExLjQ2MjNDMC4wMjA0NzY2IDEzLjUzNzkgMC4wMDA5NzY1NjIgMTQuMTk3MiAwLjAwMDk3NjU2MiAxOS40OTc2QzAuMDAwOTc2NTYyIDI0Ljc5NzkgMC4wMjY1NzAzIDI1LjQ1ODUgMC4xMTQzMiAyNy41MzI4QzAuMjE2Njk1IDI5LjYwOTUgMC41Mzk2NjQgMzEuMDI0NSAxLjAyMjI5IDMyLjI2NzZDMS41MTM0NyAzMy41Njg3IDIuMjgyNSAzNC43NDcgMy4yNzU3NiAzNS43MjAzQzQuMjQ2ODUgMzYuNzE2NCA1LjQyNTc5IDM3LjQ4NTggNi43Mjg0OCAzNy45NzM4QzcuOTcxNiAzOC40NTAzIDkuMzg2NTcgMzguNzc5NCAxMS40NjMzIDM4Ljg4MThDMTMuNTM4OSAzOC45NzU2IDE0LjE5ODIgMzguOTk1MSAxOS40OTg1IDM4Ljk5NTFDMjQuNzk4OSAzOC45OTUxIDI1LjQ1OTQgMzguOTY5NSAyNy41MzM4IDM4Ljg4MThDMjkuNjEwNSAzOC43Nzk0IDMxLjAyNTUgMzguNDQ5MSAzMi4yNjg2IDM3Ljk3MzhDMzMuNTY5NyAzNy40ODI2IDM0Ljc0NzkgMzYuNzEzNiAzNS43MjEzIDM1LjcyMDNDMzYuNzE4NiAzNC43NTAzIDM3LjQ4ODMgMzMuNTcxMSAzNy45NzQ4IDMyLjI2NzZDMzguNDUxMyAzMS4wMjQ1IDM4Ljc4MDQgMjkuNjA5NSAzOC44ODI4IDI3LjUzMjhDMzguOTc2NiAyNS40NTcyIDM4Ljk5NjEgMjQuNzk3OSAzOC45OTYxIDE5LjQ5NzZDMzguOTk2MSAxNC4xOTcyIDM4Ljk3MDUgMTMuNTM2NyAzOC44ODI4IDExLjQ2MjNDMzguNzgwNCA5LjM4NTU5IDM4LjQ1MDEgNy45NjMzMSAzNy45NzQ4IDYuNzI3NUMzNy40ODM2IDUuNDI2NDQgMzYuNzE0NiA0LjI0ODE1IDM1LjcyMTMgMy4yNzQ3OEMzNC43NTEzIDIuMjc3NDcgMzMuNTcyIDEuNTA3ODEgMzIuMjY4NiAxLjAyMTMxQzMxLjAyNTUgMC41Mzg2ODggMjkuNjEwNSAwLjIxNTcxOSAyNy41MzM4IDAuMTEzMzQ0QzI1LjQ1ODIgMC4wMTk1IDI0Ljc5ODkgMCAxOS40OTg1IDBaTTE5LjQ5ODUgMy41MUMyNC43MDM4IDMuNTEgMjUuMzI1NCAzLjUzNTU5IDI3LjM4MjYgMy42MjMzNEMyOS4yODAyIDMuNzEyMzEgMzAuMzEzNyA0LjAyOTE5IDMwLjk5OTkgNC4yOTczMUMzMS44NDgyIDQuNjEwNDQgMzIuNjE1OSA1LjEwODgyIDMzLjI0NzMgNS43NTYxNkMzMy44OTM1IDYuMzg0ODIgMzQuMzkgNy4xNTA4MyAzNC43IDcuOTk3NDRDMzQuOTY4MSA4LjY4MzU5IDM1LjI4NSA5LjcxNzA5IDM1LjM3NCAxMS42MTQ3QzM1LjQ2MTcgMTMuNjcxOSAzNS40ODczIDE0LjI5NDcgMzUuNDg3MyAxOS40OTg4QzM1LjQ4NzMgMjQuNzAyOCAzNS40NjE3IDI1LjMyNTYgMzUuMzY2NyAyNy4zODI5QzM1LjI2NDMgMjkuMjgwNSAzNC45NDc0IDMwLjMxNCAzNC42ODA1IDMxLjAwMDFDMzQuMzExMiAzMS45MTU0IDMzLjg5OTMgMzIuNTU1MyAzMy4yMTkyIDMzLjI0NzVDMzIuNTg1OCAzMy44OTA4IDMxLjgxODUgMzQuMzg2OCAzMC45NzE4IDM0LjcwMDJDMzAuMjk0MiAzNC45Njg0IDI5LjI0NjEgMzUuMjg1MiAyNy4zNDEyIDM1LjM3NDJDMjUuMjczIDM1LjQ2MiAyNC42NjM2IDM1LjQ4NzYgMTkuNDQ0OSAzNS40ODc2QzE0LjIyNjIgMzUuNDg3NiAxMy42MTgxIDM1LjQ2MiAxMS41NDc0IDM1LjM2NjlDOS42NDk4MiAzNS4yNjQ1IDguNjAyOTEgMzQuOTQ3NyA3LjkxNjc2IDM0LjY4MDdDNi45OTA1MSAzNC4zMTE1IDYuMzU1NTQgMzMuODk5NSA1LjY3NTQ4IDMzLjIxOTVDNC45ODkzMiAzMi41MzMzIDQuNTUzMDEgMzEuODgwMSA0LjIxNjYzIDMwLjk3MjFDMy45NDM2MyAzMC4yOTQ1IDMuNjMxNjMgMjkuMjQ2MyAzLjUzMDQ4IDI3LjM0MTRDMy40NjEwMSAyNS4yOTc2IDMuNDI4MSAyNC42NjM4IDMuNDI4MSAxOS40Njk1QzMuNDI4MSAxNC4yNzc3IDMuNDYxMDEgMTMuNjQyNyAzLjUzMDQ4IDExLjU3MzNDMy42MzE2MyA5LjY2ODM0IDMuOTQzNjMgOC42MjI2NiA0LjIxNjYzIDcuOTQyNTlDNC41NTMwMSA3LjAxNTEzIDQuOTkwNTQgNi4zODEzNyA1LjY3NTQ4IDUuNjk1MjJDNi4zNTQzMiA1LjAxNjM4IDYuOTkwNTEgNC41Nzc2MiA3LjkxNjc2IDQuMjMzOTRDOC42MDI5MSAzLjk2NzAzIDkuNjI0MjMgMy42NTAxNiAxMS41MjkxIDMuNTU1MDlDMTMuNTk3NCAzLjQ4MDc1IDE0LjIwNjcgMy40NTM5NCAxOS40MTgxIDMuNDUzOTRMMTkuNDk4NSAzLjUxWk0xOS40OTg1IDkuNDkwNDFDMTguMTgzOSA5LjQ4OTkzIDE2Ljg4MjEgOS43NDg1IDE1LjY2NzUgMTAuMjUxNEMxNC40NTI4IDEwLjc1NDIgMTMuMzQ5MiAxMS40OTE1IDEyLjQxOTYgMTIuNDIxMUMxMS40OSAxMy4zNTA2IDEwLjc1MjggMTQuNDU0MyAxMC4yNDk5IDE1LjY2ODlDOS43NDcwNCAxNi44ODM2IDkuNDg4NDcgMTguMTg1NCA5LjQ4ODk1IDE5LjVDOS40ODg0NyAyMC44MTQ2IDkuNzQ3MDQgMjIuMTE2NCAxMC4yNDk5IDIzLjMzMTFDMTAuNzUyOCAyNC41NDU3IDExLjQ5IDI1LjY0OTQgMTIuNDE5NiAyNi41Nzg5QzEzLjM0OTIgMjcuNTA4NSAxNC40NTI4IDI4LjI0NTggMTUuNjY3NSAyOC43NDg2QzE2Ljg4MjEgMjkuMjUxNSAxOC4xODM5IDI5LjUxMDEgMTkuNDk4NSAyOS41MDk2QzIwLjgxMzIgMjkuNTEwMSAyMi4xMTUgMjkuMjUxNSAyMy4zMjk2IDI4Ljc0ODZDMjQuNTQ0MyAyOC4yNDU4IDI1LjY0NzkgMjcuNTA4NSAyNi41Nzc1IDI2LjU3ODlDMjcuNTA3IDI1LjY0OTQgMjguMjQ0MyAyNC41NDU3IDI4Ljc0NzIgMjMuMzMxMUMyOS4yNSAyMi4xMTY0IDI5LjUwODYgMjAuODE0NiAyOS41MDgxIDE5LjVDMjkuNTA4NiAxOC4xODU0IDI5LjI1IDE2Ljg4MzYgMjguNzQ3MiAxNS42Njg5QzI4LjI0NDMgMTQuNDU0MyAyNy41MDcgMTMuMzUwNiAyNi41Nzc1IDEyLjQyMTFDMjUuNjQ3OSAxMS40OTE1IDI0LjU0NDMgMTAuNzU0MiAyMy4zMjk2IDEwLjI1MTRDMjIuMTE1IDkuNzQ4NSAyMC44MTMyIDkuNDg5OTMgMTkuNDk4NSA5LjQ5MDQxWk0xOS40OTg1IDI1Ljk5OTZDMTUuOTA1NyAyNS45OTk2IDEyLjk5ODkgMjMuMDkyOSAxMi45OTg5IDE5LjVDMTIuOTk4OSAxNS45MDcxIDE1LjkwNTcgMTMuMDAwNCAxOS40OTg1IDEzLjAwMDRDMjMuMDkxNCAxMy4wMDA0IDI1Ljk5ODEgMTUuOTA3MSAyNS45OTgxIDE5LjVDMjUuOTk4MSAyMy4wOTI5IDIzLjA5MTQgMjUuOTk5NiAxOS40OTg1IDI1Ljk5OTZaTTMyLjI1MTUgOS4wOTA2NkMzMi4yNTA5IDkuNzExODEgMzIuMDAzNyAxMC4zMDczIDMxLjU2NDIgMTAuNzQ2M0MzMS4xMjQ4IDExLjE4NTMgMzAuNTI5IDExLjQzMTkgMjkuOTA3OSAxMS40MzE5QzI5LjYwMDcgMTEuNDMxOSAyOS4yOTY2IDExLjM3MTQgMjkuMDEyOSAxMS4yNTM4QzI4LjcyOTEgMTEuMTM2MyAyOC40NzEzIDEwLjk2NCAyOC4yNTQxIDEwLjc0NjlDMjguMDM2OSAxMC41Mjk3IDI3Ljg2NDcgMTAuMjcxOSAyNy43NDcxIDkuOTg4MTFDMjcuNjI5NiA5LjcwNDM1IDI3LjU2OTEgOS40MDAyMyAyNy41NjkxIDkuMDkzMDlDMjcuNTY5MSA4Ljc4NTk2IDI3LjYyOTYgOC40ODE4NCAyNy43NDcxIDguMTk4MDhDMjcuODY0NyA3LjkxNDMzIDI4LjAzNjkgNy42NTY1IDI4LjI1NDEgNy40MzkzM0MyOC40NzEzIDcuMjIyMTUgMjguNzI5MSA3LjA0OTg4IDI5LjAxMjkgNi45MzIzNEMyOS4yOTY2IDYuODE0ODEgMjkuNjAwNyA2Ljc1NDMxIDI5LjkwNzkgNi43NTQzMUMzMS4xOTYxIDYuNzU0MzEgMzIuMjUxNSA3LjgwMjQ0IDMyLjI1MTUgOS4wOTA2NlpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI0ZGRjNFN1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGcgZnJvbSBcInNyYy9zdHlsZXMvTWFpbi5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyBTbGlkZXIgfSBmcm9tIFwiQGNvbXBvbmVudHMvQ29tbW9uL1NsaWRlci9TbGlkZXJcIjtcclxuaW1wb3J0IHsgUmVjaXBlIH0gZnJvbSBcIkBjb21wb25lbnRzL0NvbW1vbi9SZWNpcGUvUmVjaXBlXCI7XHJcblxyXG5cclxuY29uc3QgcmVjaXBlcyA9IFtcclxuICAge1xyXG4gICAgICBpbWFnZTogXCIvaW1nL2NvbnRlbnQvcmVjaXBlLTEuanBnXCIsXHJcbiAgICAgIHVybDogXCIvXCIsXHJcbiAgICAgIG5hbWU6IFwi0KHRi9GA0L3Ri9C5INGB0L7Rg9GBXCIsXHJcbiAgICAgIHRleHQ6IFwi0JzRiyDQv9GA0LjQt9C90LDQtdC8LCDRh9GC0L4g0LzRiyDQstGB0YLRgNC10YfQsNC10LzRgdGPINC4INGA0LDQsdC+0YLQsNC10Lwg0L3QsCDQt9C10LzQu9GP0YUg0LrQvtGA0LXQvdC90YvRhSDQvdCw0YDQvtC00L7QsiDQv9C+INCy0YHQtdC5INGB0YLRgNCw0L3QtSDQuCDRh9GC0L4g0YHRg9Cy0LXRgNC10L3QuNGC0LXRgiDQvdCw0LQg0Y3RgtC+0Lkg0LfQtdC80LvQtdC5INC90LjQutC+0LPQtNCwINC90LUg0YPRgdGC0YPQv9Cw0LvRgdGPLiBcIixcclxuICAgfSxcclxuICAge1xyXG4gICAgICBpbWFnZTogXCIvaW1nL2NvbnRlbnQvcmVjaXBlLTIuanBnXCIsXHJcbiAgICAgIHVybDogXCIvXCIsXHJcbiAgICAgIG5hbWU6IFwi0KTRgNCw0L3RhtGD0LfRgdC60LjQuSDRgdGL0YDQvdGL0Lkg0YHQvtGD0YFcIixcclxuICAgICAgdGV4dDogXCLQmNC30YPQvNC40YLQtdC70YzQvdGL0Lkg0YDQtdGG0LXQv9GCLCDQutC+0YLQvtGA0YvQuSDQvdCw0LTQviDQuNC80LXRgtGMINCyINGB0LLQvtC10Lkg0LrQvtC/0LjQu9C60LUuINCf0L7QtNGF0L7QtNC40YIg0LTQu9GPINC70Y7QsdGL0YUg0LHRi9GB0YLRgNGL0YUg0LfQsNC60YPRgdC+0LouXCIsXHJcbiAgIH0sXHJcbiAgIHtcclxuICAgICAgaW1hZ2U6IFwiL2ltZy9jb250ZW50L3JlY2lwZS0zLmpwZ1wiLFxyXG4gICAgICB1cmw6IFwiL1wiLFxyXG4gICAgICBuYW1lOiBcItCh0LDQu9Cw0YIg0Lgg0LfQsNC/0YDQsNCy0LrQsCDQuNC3INGB0YvRgNCwINGBINCz0L7Qu9GD0LHQvtC5INC/0LvQtdGB0LXQvdGM0Y5cIixcclxuICAgICAgdGV4dDogXCLQrdGC0L7RgiDRgdCw0LvQsNGCIOKAkyDQutC70LDRgdGB0LjRh9C10YHQutC+0LUg0LDQvNC10YDQuNC60LDQvdGB0LrQvtC1INCx0LvRjtC00L4sINC60L7RgtC+0YDQvtC1INCx0YvQu9C+INC/0YDQuNC00YPQvNCw0L3QviDQtdGJ0LUg0LIgMTkyMC3RhSwg0Lgg0L/RgNCw0LrRgtC40YfQtdGB0LrQuCDQv9C+0LLRgdC10LzQtdGB0YLQvdC+INCy0YHRgtGA0LXRh9Cw0LvQvtGB0Ywg0LIg0LzQtdC90Y4g0YDQtdGB0YLQvtGA0LDQvdC+0LIg0LTQviAxOTUwLdGFLlwiLFxyXG4gICB9LFxyXG4gICB7XHJcbiAgICAgIGltYWdlOiBcIi9pbWcvY29udGVudC9yZWNpcGUtMS5qcGdcIixcclxuICAgICAgdXJsOiBcIi9cIixcclxuICAgICAgbmFtZTogXCLQodGL0YDQvdGL0Lkg0YHQvtGD0YFcIixcclxuICAgICAgdGV4dDogXCLQnNGLINC/0YDQuNC30L3QsNC10LwsINGH0YLQviDQvNGLINCy0YHRgtGA0LXRh9Cw0LXQvNGB0Y8g0Lgg0YDQsNCx0L7RgtCw0LXQvCDQvdCwINC30LXQvNC70Y/RhSDQutC+0YDQtdC90L3Ri9GFINC90LDRgNC+0LTQvtCyINC/0L4g0LLRgdC10Lkg0YHRgtGA0LDQvdC1INC4INGH0YLQviDRgdGD0LLQtdGA0LXQvdC40YLQtdGCINC90LDQtCDRjdGC0L7QuSDQt9C10LzQu9C10Lkg0L3QuNC60L7Qs9C00LAg0L3QtSDRg9GB0YLRg9C/0LDQu9GB0Y8uIFwiLFxyXG4gICB9LFxyXG4gICB7XHJcbiAgICAgIGltYWdlOiBcIi9pbWcvY29udGVudC9yZWNpcGUtMi5qcGdcIixcclxuICAgICAgdXJsOiBcIi9cIixcclxuICAgICAgbmFtZTogXCLQpNGA0LDQvdGG0YPQt9GB0LrQuNC5INGB0YvRgNC90YvQuSDRgdC+0YPRgVwiLFxyXG4gICAgICB0ZXh0OiBcItCY0LfRg9C80LjRgtC10LvRjNC90YvQuSDRgNC10YbQtdC/0YIsINC60L7RgtC+0YDRi9C5INC90LDQtNC+INC40LzQtdGC0Ywg0LIg0YHQstC+0LXQuSDQutC+0L/QuNC70LrQtS4g0J/QvtC00YXQvtC00LjRgiDQtNC70Y8g0LvRjtCx0YvRhSDQsdGL0YHRgtGA0YvRhSDQt9Cw0LrRg9GB0L7Qui5cIixcclxuICAgfSxcclxuICAge1xyXG4gICAgICBpbWFnZTogXCIvaW1nL2NvbnRlbnQvcmVjaXBlLTMuanBnXCIsXHJcbiAgICAgIHVybDogXCIvXCIsXHJcbiAgICAgIG5hbWU6IFwi0KHQsNC70LDRgiDQuCDQt9Cw0L/RgNCw0LLQutCwINC40Lcg0YHRi9GA0LAg0YEg0LPQvtC70YPQsdC+0Lkg0L/Qu9C10YHQtdC90YzRjlwiLFxyXG4gICAgICB0ZXh0OiBcItCt0YLQvtGCINGB0LDQu9Cw0YIg4oCTINC60LvQsNGB0YHQuNGH0LXRgdC60L7QtSDQsNC80LXRgNC40LrQsNC90YHQutC+0LUg0LHQu9GO0LTQviwg0LrQvtGC0L7RgNC+0LUg0LHRi9C70L4g0L/RgNC40LTRg9C80LDQvdC+INC10YnQtSDQsiAxOTIwLdGFLCDQuCDQv9GA0LDQutGC0LjRh9C10YHQutC4INC/0L7QstGB0LXQvNC10YHRgtC90L4g0LLRgdGC0YDQtdGH0LDQu9C+0YHRjCDQsiDQvNC10L3RjiDRgNC10YHRgtC+0YDQsNC90L7QsiDQtNC+IDE5NTAt0YUuXCIsXHJcbiAgIH0sXHJcbiAgIHtcclxuICAgICAgaW1hZ2U6IFwiL2ltZy9jb250ZW50L3JlY2lwZS0xLmpwZ1wiLFxyXG4gICAgICB1cmw6IFwiL1wiLFxyXG4gICAgICBuYW1lOiBcItCh0YvRgNC90YvQuSDRgdC+0YPRgVwiLFxyXG4gICAgICB0ZXh0OiBcItCc0Ysg0L/RgNC40LfQvdCw0LXQvCwg0YfRgtC+INC80Ysg0LLRgdGC0YDQtdGH0LDQtdC80YHRjyDQuCDRgNCw0LHQvtGC0LDQtdC8INC90LAg0LfQtdC80LvRj9GFINC60L7RgNC10L3QvdGL0YUg0L3QsNGA0L7QtNC+0LIg0L/QviDQstGB0LXQuSDRgdGC0YDQsNC90LUg0Lgg0YfRgtC+INGB0YPQstC10YDQtdC90LjRgtC10YIg0L3QsNC0INGN0YLQvtC5INC30LXQvNC70LXQuSDQvdC40LrQvtCz0LTQsCDQvdC1INGD0YHRgtGD0L/QsNC70YHRjy4gXCIsXHJcbiAgIH0sXHJcbiAgIHtcclxuICAgICAgaW1hZ2U6IFwiL2ltZy9jb250ZW50L3JlY2lwZS0yLmpwZ1wiLFxyXG4gICAgICB1cmw6IFwiL1wiLFxyXG4gICAgICBuYW1lOiBcItCk0YDQsNC90YbRg9C30YHQutC40Lkg0YHRi9GA0L3Ri9C5INGB0L7Rg9GBXCIsXHJcbiAgICAgIHRleHQ6IFwi0JjQt9GD0LzQuNGC0LXQu9GM0L3Ri9C5INGA0LXRhtC10L/Rgiwg0LrQvtGC0L7RgNGL0Lkg0L3QsNC00L4g0LjQvNC10YLRjCDQsiDRgdCy0L7QtdC5INC60L7Qv9C40LvQutC1LiDQn9C+0LTRhdC+0LTQuNGCINC00LvRjyDQu9GO0LHRi9GFINCx0YvRgdGC0YDRi9GFINC30LDQutGD0YHQvtC6LlwiLFxyXG4gICB9LFxyXG4gICB7XHJcbiAgICAgIGltYWdlOiBcIi9pbWcvY29udGVudC9yZWNpcGUtMy5qcGdcIixcclxuICAgICAgdXJsOiBcIi9cIixcclxuICAgICAgbmFtZTogXCLQodCw0LvQsNGCINC4INC30LDQv9GA0LDQstC60LAg0LjQtyDRgdGL0YDQsCDRgSDQs9C+0LvRg9Cx0L7QuSDQv9C70LXRgdC10L3RjNGOXCIsXHJcbiAgICAgIHRleHQ6IFwi0K3RgtC+0YIg0YHQsNC70LDRgiDigJMg0LrQu9Cw0YHRgdC40YfQtdGB0LrQvtC1INCw0LzQtdGA0LjQutCw0L3RgdC60L7QtSDQsdC70Y7QtNC+LCDQutC+0YLQvtGA0L7QtSDQsdGL0LvQviDQv9GA0LjQtNGD0LzQsNC90L4g0LXRidC1INCyIDE5MjAt0YUsINC4INC/0YDQsNC60YLQuNGH0LXRgdC60Lgg0L/QvtCy0YHQtdC80LXRgdGC0L3QviDQstGB0YLRgNC10YfQsNC70L7RgdGMINCyINC80LXQvdGOINGA0LXRgdGC0L7RgNCw0L3QvtCyINC00L4gMTk1MC3RhS5cIixcclxuICAgfSxcclxuXTtcclxuXHJcbmNvbnN0IHNsaWRlclBhcmFtcyA9IHtcclxuICAgc2xpZGVyOiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgIHNsaWRlc1Blckdyb3VwOiAzLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4gICAgICBzbGlkZUNsYXNzOiBcInJlY2lwZV9zbGlkZVwiLFxyXG4gICB9LFxyXG4gICBuYXY6IHtcclxuICAgICAgY291bnRlcjogdHJ1ZSxcclxuICAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBSZWNpcGVzU2VjdGlvbiA9ICgpID0+IHtcclxuICAgcmV0dXJuIChcclxuICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtnLndyYXBwZXJ9PlxyXG4gICAgICAgICAgICA8U2xpZGVyXHJcbiAgICAgICAgICAgICAgIHNsaWRlcz17cmVjaXBlc31cclxuICAgICAgICAgICAgICAgcGFyYW1zPXtzbGlkZXJQYXJhbXN9XHJcbiAgICAgICAgICAgICAgIHRpdGxlPXtcItCg0LXRhtC10L/RgtGLXCJ9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgPFJlY2lwZSAvPlxyXG4gICAgICAgICAgICA8L1NsaWRlcj5cclxuICAgICAgICAgICAgPGRpdj57LyogICovfTwvZGl2PlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICApO1xyXG59O1xyXG4iLCJpbXBvcnQge1xyXG4gICBSZWRXaW5lLFxyXG4gICBXaGl0ZVdpbmUsXHJcbiAgIFZlZ2V0YWJsZXMsXHJcbiAgIEZydWl0cyxcclxufSBmcm9tIFwiQGNvbXBvbmVudHMvU1ZHL1Rhc3Rlc1NWRy9UYXN0ZXNTVkdcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhbGxTdGF0dXMgPSB7XHJcbiAgIGF2YWxpYWJsZToge1xyXG4gICAgICB0aXRsZTogXCLQsiDQvdCw0LvQuNGH0LjQuFwiLFxyXG4gICAgICBjbGFzczogXCJhdmFsaWFibGVcIixcclxuICAgfSxcclxuICAgcHJlcGFyaW5nOiB7XHJcbiAgICAgIHRpdGxlOiBcItGB0L7Qt9GA0LXQstCw0LXRglwiLFxyXG4gICAgICBjbGFzczogXCJwcmVwYXJpbmdcIixcclxuICAgfSxcclxuICAgXCJub3QtYXZhbGlhYmxlXCI6IHtcclxuICAgICAgdGl0bGU6IFwi0L3QtdGCINCyINC90LDQu9C40YfQuNC4XCIsXHJcbiAgICAgIGNsYXNzOiBcIm5vdC1hdmFsaWFibGVcIixcclxuICAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhbGxUYXN0ZXMgPSB7XHJcbiAgIFwicmVkLXdpbmVcIjogPFJlZFdpbmUgYm9yZGVyPXtcImFjY2VudFwifSBrZXk9ezB9IC8+LFxyXG4gICBcIndoaXRlLXdpbmVcIjogPFdoaXRlV2luZSBib3JkZXI9e1wiYWNjZW50XCJ9IGtleT17MX0gLz4sXHJcbiAgIHZlZ2V0YWJsZXM6IDxWZWdldGFibGVzIGJvcmRlcj17XCJhY2NlbnRcIn0ga2V5PXsyfSAvPixcclxuICAgZnJ1aXRzOiA8RnJ1aXRzIGJvcmRlcj17XCJhY2NlbnRcIn0ga2V5PXszfSAvPixcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9kdWN0cyA9IFtcclxuICAge1xyXG4gICAgICBzdGF0dXM6IFwiYXZhbGlhYmxlXCIsXHJcbiAgICAgIGFsbFN0YXR1czogW1xyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiYXZhbGlhYmxlXCIsXHJcbiAgICAgICAgICAgIGNvdW50OiAyMCxcclxuICAgICAgICAgfSxcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcInByZXBhcmluZ1wiLFxyXG4gICAgICAgICAgICBjb3VudDogMTUsXHJcbiAgICAgICAgICAgIGRhdGU6IFwiMTUuMDguMjAyMVwiLFxyXG4gICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICBpbWFnZTogXCIvc3RhdGljL2ltZy9jb250ZW50L2NhbWFtYmVyR29hdC5wbmdcIixcclxuICAgICAgZ2FsbGVyeTogW1xyXG4gICAgICAgICBcIi9zdGF0aWMvaW1nL2NvbnRlbnQvY2FtYW1iZXJHb2F0LnBuZ1wiLFxyXG4gICAgICAgICBcIi9zdGF0aWMvaW1nL2NvbnRlbnQvc2xpZGUtMS5qcGdcIixcclxuICAgICAgICAgXCIvc3RhdGljL2ltZy9jb250ZW50L3JlY2lwZS0yLmpwZ1wiLFxyXG4gICAgICAgICBcIi9zdGF0aWMvaW1nL2NvbnRlbnQvcmVjaXBlLTMuanBnXCIsXHJcbiAgICAgIF0sXHJcbiAgICAgIG5hbWU6IFwi0JrQsNC80LDQvNCx0LXRgCDQutC+0LfQuNC5XCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICBcItCk0YDQsNC90YbRg9C30YHQutC40Lkg0YHRi9GAINC40Lcg0LzQvtC70L7QutCwINC60L7Qt9GLINC/0YDQvtC00L7Qu9Cz0L7QstCw0YLQvtC5INGE0L7RgNC80YssINC40LzQtdGO0YnQuNC5INGB0LLQtdC20LjQuSDRgNC10LfQutC40Lkg0LfQsNC/0LDRhSDQuCDQvdC10LbQvdGL0Lkg0YHQu9C40LLQvtGH0L3Ri9C5INCy0LrRg9GBINCyINGB0LXRgNC10LTQuNC90LUg0Lgg0L/QuNC60LDQvdGC0L3Ri9C5INCy0LrRg9GBINGDINC60L7RgNC+0YfQutC4LCDQv9C+0LrRgNGL0YLQvtC5INC70LXQs9C60L7QuSDQsdC10LvQvtC5INC/0LvQtdGB0LXQvdGM0Y4uXCIsXHJcbiAgICAgIGFkZGl0aW9uOiBcItGBINCx0LXQu9C+0Lkg0L/Qu9C10YHQtdC90YzRjlwiLFxyXG4gICAgICB3ZWlnaHQ6IFwiMjAwINCz0YBcIixcclxuICAgICAgcHJpY2U6IDMyMCxcclxuICAgICAgdGFzdGVzOiBbXCJyZWQtd2luZVwiLCBcImZydWl0c1wiXSxcclxuICAgICAgbGluazogXCIvY2FyZFwiLFxyXG4gICAgICBpZDogMjMsXHJcbiAgIH0sXHJcbiAgIHtcclxuICAgICAgc3RhdHVzOiBcInByZXBhcmluZ1wiLFxyXG4gICAgICBhbGxTdGF0dXM6IFtcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcImF2YWxpYWJsZVwiLFxyXG4gICAgICAgICAgICBjb3VudDogMjAsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJwcmVwYXJpbmdcIixcclxuICAgICAgICAgICAgY291bnQ6IDE1LFxyXG4gICAgICAgICAgICBkYXRlOiBcIjE1LjA4LjIwMjFcIixcclxuICAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgaW1hZ2U6IFwiL3N0YXRpYy9pbWcvY29udGVudC9jYW1hbWJlckNvdy5wbmdcIixcclxuICAgICAgZ2FsbGVyeTogW1xyXG4gICAgICAgICBcIi9zdGF0aWMvaW1nL2NvbnRlbnQvY2FtYW1iZXJDb3cucG5nXCIsXHJcbiAgICAgICAgIFwiL3N0YXRpYy9pbWcvY29udGVudC9zbGlkZS0xLmpwZ1wiLFxyXG4gICAgICAgICBcIi9zdGF0aWMvaW1nL2NvbnRlbnQvcmVjaXBlLTIuanBnXCIsXHJcbiAgICAgICAgIFwiL3N0YXRpYy9pbWcvY29udGVudC9yZWNpcGUtMy5qcGdcIixcclxuICAgICAgXSxcclxuICAgICAgbmFtZTogXCLQmtCw0LzQsNC80LHQtdGAINC60L7RgNC+0LLQuNC5XCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICBcItCk0YDQsNC90YbRg9C30YHQutC40Lkg0YHRi9GAINC40Lcg0LzQvtC70L7QutCwINC60L7Qt9GLINC/0YDQvtC00L7Qu9Cz0L7QstCw0YLQvtC5INGE0L7RgNC80YssINC40LzQtdGO0YnQuNC5INGB0LLQtdC20LjQuSDRgNC10LfQutC40Lkg0LfQsNC/0LDRhSDQuCDQvdC10LbQvdGL0Lkg0YHQu9C40LLQvtGH0L3Ri9C5INCy0LrRg9GBINCyINGB0LXRgNC10LTQuNC90LUg0Lgg0L/QuNC60LDQvdGC0L3Ri9C5INCy0LrRg9GBINGDINC60L7RgNC+0YfQutC4LCDQv9C+0LrRgNGL0YLQvtC5INC70LXQs9C60L7QuSDQsdC10LvQvtC5INC/0LvQtdGB0LXQvdGM0Y4uXCIsXHJcbiAgICAgIGFkZGl0aW9uOiBcItGBINCx0LXQu9C+0Lkg0L/Qu9C10YHQtdC90YzRjlwiLFxyXG4gICAgICB3ZWlnaHQ6IFwiMjAwINCz0YBcIixcclxuICAgICAgcHJpY2U6IDMyMCxcclxuICAgICAgdGFzdGVzOiBbXCJ3aGl0ZS13aW5lXCIsIFwidmVnZXRhYmxlc1wiXSxcclxuICAgICAgbGluazogXCIvY2FyZFwiLFxyXG4gICAgICBpZDogMjAsXHJcbiAgIH0sXHJcbiAgIHtcclxuICAgICAgc3RhdHVzOiBcImF2YWxpYWJsZVwiLFxyXG4gICAgICBhbGxTdGF0dXM6IFtcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcImF2YWxpYWJsZVwiLFxyXG4gICAgICAgICAgICBjb3VudDogMjAsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJwcmVwYXJpbmdcIixcclxuICAgICAgICAgICAgY291bnQ6IDE1LFxyXG4gICAgICAgICAgICBkYXRlOiBcIjE1LjA4LjIwMjFcIixcclxuICAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgaW1hZ2U6IFwiL3N0YXRpYy9pbWcvY29udGVudC9nb2F0QmFsYW5jZS5wbmdcIixcclxuICAgICAgZ2FsbGVyeTogW1xyXG4gICAgICAgICBcIi9zdGF0aWMvaW1nL2NvbnRlbnQvZ29hdEJhbGFuY2UucG5nXCIsXHJcbiAgICAgICAgIFwiL3N0YXRpYy9pbWcvY29udGVudC9zbGlkZS0xLmpwZ1wiLFxyXG4gICAgICAgICBcIi9zdGF0aWMvaW1nL2NvbnRlbnQvcmVjaXBlLTIuanBnXCIsXHJcbiAgICAgICAgIFwiL3N0YXRpYy9pbWcvY29udGVudC9yZWNpcGUtMy5qcGdcIixcclxuICAgICAgXSxcclxuICAgICAgbmFtZTogXCJD0YvRgCDQmtC+0LfQuNC5INCS0LDQu9Cw0L3RgdC1XCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICBcItCk0YDQsNC90YbRg9C30YHQutC40Lkg0YHRi9GAINC40Lcg0LzQvtC70L7QutCwINC60L7Qt9GLINC/0YDQvtC00L7Qu9Cz0L7QstCw0YLQvtC5INGE0L7RgNC80YssINC40LzQtdGO0YnQuNC5INGB0LLQtdC20LjQuSDRgNC10LfQutC40Lkg0LfQsNC/0LDRhSDQuCDQvdC10LbQvdGL0Lkg0YHQu9C40LLQvtGH0L3Ri9C5INCy0LrRg9GBINCyINGB0LXRgNC10LTQuNC90LUg0Lgg0L/QuNC60LDQvdGC0L3Ri9C5INCy0LrRg9GBINGDINC60L7RgNC+0YfQutC4LCDQv9C+0LrRgNGL0YLQvtC5INC70LXQs9C60L7QuSDQsdC10LvQvtC5INC/0LvQtdGB0LXQvdGM0Y4uXCIsXHJcbiAgICAgIGFkZGl0aW9uOiBcItGBINCx0LXQu9C+0Lkg0L/Qu9C10YHQtdC90YzRjlwiLFxyXG4gICAgICB3ZWlnaHQ6IFwiMjAwINCz0YBcIixcclxuICAgICAgcHJpY2U6IDY1MCxcclxuICAgICAgdGFzdGVzOiBbXCJ3aGl0ZS13aW5lXCIsIFwidmVnZXRhYmxlc1wiXSxcclxuICAgICAgbGluazogXCIvY2FyZFwiLFxyXG4gICAgICBpZDogMixcclxuICAgfSxcclxuICAge1xyXG4gICAgICBzdGF0dXM6IFwiYXZhbGlhYmxlXCIsXHJcbiAgICAgIGFsbFN0YXR1czogW1xyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiYXZhbGlhYmxlXCIsXHJcbiAgICAgICAgICAgIGNvdW50OiAyMCxcclxuICAgICAgICAgfSxcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcInByZXBhcmluZ1wiLFxyXG4gICAgICAgICAgICBjb3VudDogMTUsXHJcbiAgICAgICAgICAgIGRhdGU6IFwiMTUuMDguMjAyMVwiLFxyXG4gICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICBpbWFnZTogXCIvc3RhdGljL2ltZy9jb250ZW50L2dvYXRCYWxhbmNlMi5wbmdcIixcclxuICAgICAgZ2FsbGVyeTogW1xyXG4gICAgICAgICBcIi9zdGF0aWMvaW1nL2NvbnRlbnQvZ29hdEJhbGFuY2UyLnBuZ1wiLFxyXG4gICAgICAgICBcIi9zdGF0aWMvaW1nL2NvbnRlbnQvc2xpZGUtMS5qcGdcIixcclxuICAgICAgICAgXCIvc3RhdGljL2ltZy9jb250ZW50L3JlY2lwZS0yLmpwZ1wiLFxyXG4gICAgICAgICBcIi9zdGF0aWMvaW1nL2NvbnRlbnQvcmVjaXBlLTMuanBnXCIsXHJcbiAgICAgIF0sXHJcbiAgICAgIG5hbWU6IFwiQ9GL0YAg0JrQvtC30LjQuSDQktCw0LvQsNC90YHQtVwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgXCLQpNGA0LDQvdGG0YPQt9GB0LrQuNC5INGB0YvRgCDQuNC3INC80L7Qu9C+0LrQsCDQutC+0LfRiyDQv9GA0L7QtNC+0LvQs9C+0LLQsNGC0L7QuSDRhNC+0YDQvNGLLCDQuNC80LXRjtGJ0LjQuSDRgdCy0LXQttC40Lkg0YDQtdC30LrQuNC5INC30LDQv9Cw0YUg0Lgg0L3QtdC20L3Ri9C5INGB0LvQuNCy0L7Rh9C90YvQuSDQstC60YPRgSDQsiDRgdC10YDQtdC00LjQvdC1INC4INC/0LjQutCw0L3RgtC90YvQuSDQstC60YPRgSDRgyDQutC+0YDQvtGH0LrQuCwg0L/QvtC60YDRi9GC0L7QuSDQu9C10LPQutC+0Lkg0LHQtdC70L7QuSDQv9C70LXRgdC10L3RjNGOLlwiLFxyXG4gICAgICBhZGRpdGlvbjogXCLRgSDQsdC10LvQvtC5INC/0LvQtdGB0LXQvdGM0Y5cIixcclxuICAgICAgd2VpZ2h0OiBcIjIwMCDQs9GAXCIsXHJcbiAgICAgIHByaWNlOiA1MDAsXHJcbiAgICAgIHRhc3RlczogW1wid2hpdGUtd2luZVwiLCBcInZlZ2V0YWJsZXNcIl0sXHJcbiAgICAgIGxpbms6IFwiL2NhcmRcIixcclxuICAgICAgaWQ6IDMsXHJcbiAgIH0sXHJcbiAgIHtcclxuICAgICAgc3RhdHVzOiBcInByZXBhcmluZ1wiLFxyXG4gICAgICBhbGxTdGF0dXM6IFtcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcImF2YWxpYWJsZVwiLFxyXG4gICAgICAgICAgICBjb3VudDogMjAsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJwcmVwYXJpbmdcIixcclxuICAgICAgICAgICAgY291bnQ6IDE1LFxyXG4gICAgICAgICAgICBkYXRlOiBcIjE1LjA4LjIwMjFcIixcclxuICAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgaW1hZ2U6IFwiL3N0YXRpYy9pbWcvY29udGVudC9idXNoRGVTaGV2ci5wbmdcIixcclxuICAgICAgZ2FsbGVyeTogW1xyXG4gICAgICAgICBcIi9zdGF0aWMvaW1nL2NvbnRlbnQvYnVzaERlU2hldnIucG5nXCIsXHJcbiAgICAgICAgIFwiL3N0YXRpYy9pbWcvY29udGVudC9zbGlkZS0xLmpwZ1wiLFxyXG4gICAgICAgICBcIi9zdGF0aWMvaW1nL2NvbnRlbnQvcmVjaXBlLTIuanBnXCIsXHJcbiAgICAgICAgIFwiL3N0YXRpYy9pbWcvY29udGVudC9yZWNpcGUtMy5qcGdcIixcclxuICAgICAgXSxcclxuICAgICAgbmFtZTogXCLQkdGO0Ygg0LTQtSDRiNC10LLRgFwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgXCLQpNGA0LDQvdGG0YPQt9GB0LrQuNC5INGB0YvRgCDQuNC3INC80L7Qu9C+0LrQsCDQutC+0LfRiyDQv9GA0L7QtNC+0LvQs9C+0LLQsNGC0L7QuSDRhNC+0YDQvNGLLCDQuNC80LXRjtGJ0LjQuSDRgdCy0LXQttC40Lkg0YDQtdC30LrQuNC5INC30LDQv9Cw0YUg0Lgg0L3QtdC20L3Ri9C5INGB0LvQuNCy0L7Rh9C90YvQuSDQstC60YPRgSDQsiDRgdC10YDQtdC00LjQvdC1INC4INC/0LjQutCw0L3RgtC90YvQuSDQstC60YPRgSDRgyDQutC+0YDQvtGH0LrQuCwg0L/QvtC60YDRi9GC0L7QuSDQu9C10LPQutC+0Lkg0LHQtdC70L7QuSDQv9C70LXRgdC10L3RjNGOLlwiLFxyXG4gICAgICB3ZWlnaHQ6IFwiMjAwINCz0YBcIixcclxuICAgICAgcHJpY2U6IDUwMCxcclxuICAgICAgdGFzdGVzOiBbXCJ3aGl0ZS13aW5lXCIsIFwidmVnZXRhYmxlc1wiXSxcclxuICAgICAgbGluazogXCIvY2FyZFwiLFxyXG4gICAgICBpZDogNCxcclxuICAgfSxcclxuICAge1xyXG4gICAgICBzdGF0dXM6IFwiYXZhbGlhYmxlXCIsXHJcbiAgICAgIGFsbFN0YXR1czogW1xyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiYXZhbGlhYmxlXCIsXHJcbiAgICAgICAgICAgIGNvdW50OiAyMCxcclxuICAgICAgICAgfSxcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcInByZXBhcmluZ1wiLFxyXG4gICAgICAgICAgICBjb3VudDogMTUsXHJcbiAgICAgICAgICAgIGRhdGU6IFwiMTUuMDguMjAyMVwiLFxyXG4gICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICBpbWFnZTogXCIvc3RhdGljL2ltZy9jb250ZW50L21venphcmVsbGEucG5nXCIsXHJcbiAgICAgIGdhbGxlcnk6IFtcclxuICAgICAgICAgXCIvc3RhdGljL2ltZy9jb250ZW50L21venphcmVsbGEucG5nXCIsXHJcbiAgICAgICAgIFwiL3N0YXRpYy9pbWcvY29udGVudC9zbGlkZS0xLmpwZ1wiLFxyXG4gICAgICAgICBcIi9zdGF0aWMvaW1nL2NvbnRlbnQvcmVjaXBlLTIuanBnXCIsXHJcbiAgICAgICAgIFwiL3N0YXRpYy9pbWcvY29udGVudC9yZWNpcGUtMy5qcGdcIixcclxuICAgICAgXSxcclxuICAgICAgbmFtZTogXCLQnNC+0YbQsNGA0LXQu9C70LBcIixcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgIFwi0KTRgNCw0L3RhtGD0LfRgdC60LjQuSDRgdGL0YAg0LjQtyDQvNC+0LvQvtC60LAg0LrQvtC30Ysg0L/RgNC+0LTQvtC70LPQvtCy0LDRgtC+0Lkg0YTQvtGA0LzRiywg0LjQvNC10Y7RidC40Lkg0YHQstC10LbQuNC5INGA0LXQt9C60LjQuSDQt9Cw0L/QsNGFINC4INC90LXQttC90YvQuSDRgdC70LjQstC+0YfQvdGL0Lkg0LLQutGD0YEg0LIg0YHQtdGA0LXQtNC40L3QtSDQuCDQv9C40LrQsNC90YLQvdGL0Lkg0LLQutGD0YEg0YMg0LrQvtGA0L7Rh9C60LgsINC/0L7QutGA0YvRgtC+0Lkg0LvQtdCz0LrQvtC5INCx0LXQu9C+0Lkg0L/Qu9C10YHQtdC90YzRji5cIixcclxuICAgICAgd2VpZ2h0OiBcIjIwMCDQs9GAXCIsXHJcbiAgICAgIHByaWNlOiA1MDAsXHJcbiAgICAgIGxpbms6IFwiL2NhcmRcIixcclxuICAgICAgaWQ6IDI5LFxyXG4gICB9LFxyXG4gICB7XHJcbiAgICAgIHN0YXR1czogXCJub3QtYXZhbGlhYmxlXCIsXHJcbiAgICAgIGFsbFN0YXR1czogW1xyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiYXZhbGlhYmxlXCIsXHJcbiAgICAgICAgICAgIGNvdW50OiAyMCxcclxuICAgICAgICAgfSxcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcInByZXBhcmluZ1wiLFxyXG4gICAgICAgICAgICBjb3VudDogMTUsXHJcbiAgICAgICAgICAgIGRhdGU6IFwiMTUuMDguMjAyMVwiLFxyXG4gICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICBpbWFnZTogXCIvc3RhdGljL2ltZy9jb250ZW50L2J1cmF0dGEucG5nXCIsXHJcbiAgICAgIGdhbGxlcnk6IFtcclxuICAgICAgICAgXCIvc3RhdGljL2ltZy9jb250ZW50L2J1cmF0dGEucG5nXCIsXHJcbiAgICAgICAgIFwiL3N0YXRpYy9pbWcvY29udGVudC9zbGlkZS0xLmpwZ1wiLFxyXG4gICAgICAgICBcIi9zdGF0aWMvaW1nL2NvbnRlbnQvcmVjaXBlLTIuanBnXCIsXHJcbiAgICAgICAgIFwiL3N0YXRpYy9pbWcvY29udGVudC9yZWNpcGUtMy5qcGdcIixcclxuICAgICAgXSxcclxuICAgICAgbmFtZTogXCLQkdGD0YDQsNGC0YLQsFwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgXCLQpNGA0LDQvdGG0YPQt9GB0LrQuNC5INGB0YvRgCDQuNC3INC80L7Qu9C+0LrQsCDQutC+0LfRiyDQv9GA0L7QtNC+0LvQs9C+0LLQsNGC0L7QuSDRhNC+0YDQvNGLLCDQuNC80LXRjtGJ0LjQuSDRgdCy0LXQttC40Lkg0YDQtdC30LrQuNC5INC30LDQv9Cw0YUg0Lgg0L3QtdC20L3Ri9C5INGB0LvQuNCy0L7Rh9C90YvQuSDQstC60YPRgSDQsiDRgdC10YDQtdC00LjQvdC1INC4INC/0LjQutCw0L3RgtC90YvQuSDQstC60YPRgSDRgyDQutC+0YDQvtGH0LrQuCwg0L/QvtC60YDRi9GC0L7QuSDQu9C10LPQutC+0Lkg0LHQtdC70L7QuSDQv9C70LXRgdC10L3RjNGOLlwiLFxyXG4gICAgICB3ZWlnaHQ6IFwiMjAwINCz0YBcIixcclxuICAgICAgcHJpY2U6IDUwMCxcclxuICAgICAgdGFzdGVzOiBbXCJ3aGl0ZS13aW5lXCIsIFwidmVnZXRhYmxlc1wiXSxcclxuICAgICAgbGluazogXCIvY2FyZFwiLFxyXG4gICAgICBpZDogMTgsXHJcbiAgIH0sXHJcbiAgIHtcclxuICAgICAgc3RhdHVzOiBcImF2YWxpYWJsZVwiLFxyXG4gICAgICBhbGxTdGF0dXM6IFtcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcImF2YWxpYWJsZVwiLFxyXG4gICAgICAgICAgICBjb3VudDogMjAsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJwcmVwYXJpbmdcIixcclxuICAgICAgICAgICAgY291bnQ6IDE1LFxyXG4gICAgICAgICAgICBkYXRlOiBcIjE1LjA4LjIwMjFcIixcclxuICAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgaW1hZ2U6IFwiL3N0YXRpYy9pbWcvY29udGVudC9zdHJhY2hlbGxhLnBuZ1wiLFxyXG4gICAgICBnYWxsZXJ5OiBbXHJcbiAgICAgICAgIFwiL3N0YXRpYy9pbWcvY29udGVudC9zdHJhY2hlbGxhLnBuZ1wiLFxyXG4gICAgICAgICBcIi9zdGF0aWMvaW1nL2NvbnRlbnQvc2xpZGUtMS5qcGdcIixcclxuICAgICAgICAgXCIvc3RhdGljL2ltZy9jb250ZW50L3JlY2lwZS0yLmpwZ1wiLFxyXG4gICAgICAgICBcIi9zdGF0aWMvaW1nL2NvbnRlbnQvcmVjaXBlLTMuanBnXCIsXHJcbiAgICAgIF0sXHJcbiAgICAgIG5hbWU6IFwi0KHRgtGA0LDRh9C10LvQu9CwXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICBcItCk0YDQsNC90YbRg9C30YHQutC40Lkg0YHRi9GAINC40Lcg0LzQvtC70L7QutCwINC60L7Qt9GLINC/0YDQvtC00L7Qu9Cz0L7QstCw0YLQvtC5INGE0L7RgNC80YssINC40LzQtdGO0YnQuNC5INGB0LLQtdC20LjQuSDRgNC10LfQutC40Lkg0LfQsNC/0LDRhSDQuCDQvdC10LbQvdGL0Lkg0YHQu9C40LLQvtGH0L3Ri9C5INCy0LrRg9GBINCyINGB0LXRgNC10LTQuNC90LUg0Lgg0L/QuNC60LDQvdGC0L3Ri9C5INCy0LrRg9GBINGDINC60L7RgNC+0YfQutC4LCDQv9C+0LrRgNGL0YLQvtC5INC70LXQs9C60L7QuSDQsdC10LvQvtC5INC/0LvQtdGB0LXQvdGM0Y4uXCIsXHJcbiAgICAgIHdlaWdodDogXCIyMDAg0LPRgFwiLFxyXG4gICAgICBwcmljZTogNTAwLFxyXG4gICAgICB0YXN0ZXM6IFtcIndoaXRlLXdpbmVcIiwgXCJ2ZWdldGFibGVzXCJdLFxyXG4gICAgICBsaW5rOiBcIi9jYXJkXCIsXHJcbiAgICAgIGlkOiA3LFxyXG4gICB9LFxyXG4gICB7XHJcbiAgICAgIHN0YXR1czogXCJwcmVwYXJpbmdcIixcclxuICAgICAgYWxsU3RhdHVzOiBbXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJhdmFsaWFibGVcIixcclxuICAgICAgICAgICAgY291bnQ6IDIwLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwicHJlcGFyaW5nXCIsXHJcbiAgICAgICAgICAgIGNvdW50OiAxNSxcclxuICAgICAgICAgICAgZGF0ZTogXCIxNS4wOC4yMDIxXCIsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIGltYWdlOiBcIi9zdGF0aWMvaW1nL2NvbnRlbnQvYnVzaERlU2hldnIucG5nXCIsXHJcbiAgICAgIGdhbGxlcnk6IFtcclxuICAgICAgICAgXCIvc3RhdGljL2ltZy9jb250ZW50L2J1c2hEZVNoZXZyLnBuZ1wiLFxyXG4gICAgICAgICBcIi9zdGF0aWMvaW1nL2NvbnRlbnQvc2xpZGUtMS5qcGdcIixcclxuICAgICAgICAgXCIvc3RhdGljL2ltZy9jb250ZW50L3JlY2lwZS0yLmpwZ1wiLFxyXG4gICAgICAgICBcIi9zdGF0aWMvaW1nL2NvbnRlbnQvcmVjaXBlLTMuanBnXCIsXHJcbiAgICAgIF0sXHJcbiAgICAgIG5hbWU6IFwi0JHRjtGIINC00LUg0YjQtdCy0YBcIixcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgIFwi0KTRgNCw0L3RhtGD0LfRgdC60LjQuSDRgdGL0YAg0LjQtyDQvNC+0LvQvtC60LAg0LrQvtC30Ysg0L/RgNC+0LTQvtC70LPQvtCy0LDRgtC+0Lkg0YTQvtGA0LzRiywg0LjQvNC10Y7RidC40Lkg0YHQstC10LbQuNC5INGA0LXQt9C60LjQuSDQt9Cw0L/QsNGFINC4INC90LXQttC90YvQuSDRgdC70LjQstC+0YfQvdGL0Lkg0LLQutGD0YEg0LIg0YHQtdGA0LXQtNC40L3QtSDQuCDQv9C40LrQsNC90YLQvdGL0Lkg0LLQutGD0YEg0YMg0LrQvtGA0L7Rh9C60LgsINC/0L7QutGA0YvRgtC+0Lkg0LvQtdCz0LrQvtC5INCx0LXQu9C+0Lkg0L/Qu9C10YHQtdC90YzRji5cIixcclxuICAgICAgd2VpZ2h0OiBcIjIwMCDQs9GAXCIsXHJcbiAgICAgIHByaWNlOiA1MDAsXHJcbiAgICAgIHRhc3RlczogW1wid2hpdGUtd2luZVwiLCBcInZlZ2V0YWJsZXNcIl0sXHJcbiAgICAgIGxpbms6IFwiL2NhcmRcIixcclxuICAgICAgaWQ6IDQwLFxyXG4gICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJBU0VfVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS8nOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgZyBmcm9tIFwiLi4vc3R5bGVzL01haW4ubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29tbW9uL0hlYWRlci9IZWFkZXJcIjtcclxuaW1wb3J0IHsgUHJvbW9TZWN0aW9uIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VjdGlvbnMvSW5kZXgvUHJvbW9TZWN0aW9uL1Byb21vU2VjdGlvblwiO1xyXG5pbXBvcnQgeyBOZXdUYXN0ZXNTZWN0aW9uIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VjdGlvbnMvQ29tbW9uL05ld1Rhc3Rlc1NlY3Rpb24vTmV3VGFzdGVzU2VjdGlvblwiO1xyXG5pbXBvcnQgeyBQcm9kdWN0c1NlY3Rpb24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWN0aW9ucy9Db21tb24vUHJvZHVjdHNTZWN0aW9uL1Byb2R1Y3RzU2VjdGlvblwiO1xyXG5pbXBvcnQgeyBEaXNjb3VudFNlY3Rpb24gfSBmcm9tIFwiQGNvbXBvbmVudHMvU2VjdGlvbnMvQ29tbW9uL0Rpc2NvdW50U2VjdGlvbi9EaXNjb3VudFNlY3Rpb25cIjtcclxuaW1wb3J0IHsgUmVjaXBlc1NlY3Rpb24gfSBmcm9tIFwiQGNvbXBvbmVudHMvU2VjdGlvbnMvSW5kZXgvUmVjaXBlc1NlY3Rpb24vUmVjaXBlc1NlY3Rpb25cIjtcclxuaW1wb3J0IHsgSW5zdGFncmFtUHJvbW9TZWN0aW9uIH0gZnJvbSBcIkBjb21wb25lbnRzL1NlY3Rpb25zL0luZGV4L0luc3RhZ3JhbVByb21vU2VjdGlvbi9JbnN0YWdyYW1Qcm9tb1NlY3Rpb25cIjtcclxuaW1wb3J0IHsgSW5zdGFncmFtU2VjdGlvbiB9IGZyb20gXCJAY29tcG9uZW50cy9TZWN0aW9ucy9JbmRleC9JbnN0YWdyYW1TZWN0aW9uL0luc3RhZ3JhbVNlY3Rpb25cIjtcclxuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSBcIkBjb21wb25lbnRzL0NvbW1vbi9Gb290ZXIvRm9vdGVyXCI7XHJcblxyXG5cclxuY29uc3QgaW5kZXggPSAoKSA9PiB7XHJcbiAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgIDxIZWFkPjwvSGVhZD5cclxuICAgICAgICAgPEhlYWRlciBwcm9tby8+XHJcbiAgICAgICAgIDxtYWluIGNsYXNzTmFtZT17Zy5tYWlufT5cclxuICAgICAgICAgICAgPFByb21vU2VjdGlvbiAvPlxyXG4gICAgICAgICAgICA8TmV3VGFzdGVzU2VjdGlvbiAvPlxyXG4gICAgICAgICAgICA8UHJvZHVjdHNTZWN0aW9uIC8+XHJcbiAgICAgICAgICAgIDxEaXNjb3VudFNlY3Rpb24vPlxyXG4gICAgICAgICAgICA8UmVjaXBlc1NlY3Rpb24vPlxyXG4gICAgICAgICAgICA8SW5zdGFncmFtUHJvbW9TZWN0aW9uIHVybD17J2h0dHA6Ly9pbnN0YWdyYW0uY29tL2luc3RhZ3JhbSd9Lz5cclxuICAgICAgICAgICAgPEluc3RhZ3JhbVNlY3Rpb24vPlxyXG4gICAgICAgICA8L21haW4+XHJcbiAgICAgICAgIDxGb290ZXIvPlxyXG4gICAgICA8Lz5cclxuICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWN0XCI6IFwiRm9vdGVyX2NvbnRhY3RfXzIwM2Z0XCIsXG5cdFwibGlua1wiOiBcIkZvb3Rlcl9saW5rX18zTVhwWVwiLFxuXHRcImZvb3RlclwiOiBcIkZvb3Rlcl9mb290ZXJfXzhkOVFuXCIsXG5cdFwiY29udGFpbmVyXCI6IFwiRm9vdGVyX2NvbnRhaW5lcl9fMUIxUmFcIixcblx0XCJibG9ja1wiOiBcIkZvb3Rlcl9ibG9ja19fMmU0dWtcIixcblx0XCJtZW51XCI6IFwiRm9vdGVyX21lbnVfX1JpUl9qXCIsXG5cdFwiaW5mb1wiOiBcIkZvb3Rlcl9pbmZvX18yeDZlTVwiLFxuXHRcImFkZHJlc3NcIjogXCJGb290ZXJfYWRkcmVzc19fM0FnQk1cIixcblx0XCJjb250YWN0c1wiOiBcIkZvb3Rlcl9jb250YWN0c19fM3BvVU9cIixcblx0XCJhc2FwXCI6IFwiRm9vdGVyX2FzYXBfXzN0VDRhXCIsXG5cdFwiY29ycFwiOiBcIkZvb3Rlcl9jb3JwX18yWExFd1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udHJvbFwiOiBcIkhlYWRlcl9jb250cm9sX18zazFJNFwiLFxuXHRcImJsb2NrXCI6IFwiSGVhZGVyX2Jsb2NrX18zSDdLRlwiLFxuXHRcImxvZ29cIjogXCJIZWFkZXJfbG9nb19fMmZFZnBcIixcblx0XCJuYXZcIjogXCJIZWFkZXJfbmF2X18zR2VkUVwiLFxuXHRcImNvbnRhaW5lclwiOiBcIkhlYWRlcl9jb250YWluZXJfXzItMGpoXCIsXG5cdFwiYnV0dG9uXCI6IFwiSGVhZGVyX2J1dHRvbl9fNnFGNkpcIixcblx0XCJsaW5rXCI6IFwiSGVhZGVyX2xpbmtfXzFnT25lXCIsXG5cdFwiaGVhZGVyXCI6IFwiSGVhZGVyX2hlYWRlcl9fMi1manFcIixcblx0XCJib3JkZXJfYWNjZW50XCI6IFwiSGVhZGVyX2JvcmRlcl9hY2NlbnRfXzJqLWRwXCIsXG5cdFwibGlua19hY2NlbnRcIjogXCJIZWFkZXJfbGlua19hY2NlbnRfXzNKeHJ2XCIsXG5cdFwiYnV0dG9uX2FjY2VudFwiOiBcIkhlYWRlcl9idXR0b25fYWNjZW50X18yV1NTTFwiLFxuXHRcImxvZ29fYWNjZW50XCI6IFwiSGVhZGVyX2xvZ29fYWNjZW50X18xSFFCZVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaGVhZGVyXCI6IFwiSW5zdGFncmFtX2hlYWRlcl9fMy04NWlcIixcblx0XCJwb3N0XCI6IFwiSW5zdGFncmFtX3Bvc3RfXzJuS3N0XCIsXG5cdFwidXNlclwiOiBcIkluc3RhZ3JhbV91c2VyX18xVWRXdFwiLFxuXHRcImRhdGVcIjogXCJJbnN0YWdyYW1fZGF0ZV9fbHhsblpcIixcblx0XCJpbWFnZVwiOiBcIkluc3RhZ3JhbV9pbWFnZV9fYzNmSW1cIixcblx0XCJ0ZXh0XCI6IFwiSW5zdGFncmFtX3RleHRfXzNvQ2YyXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtb3JlXCI6IFwiUHJvZHVjdF9tb3JlX19KWUlIUVwiLFxuXHRcImFkZFwiOiBcIlByb2R1Y3RfYWRkX18xa1NuR1wiLFxuXHRcImNhcmRcIjogXCJQcm9kdWN0X2NhcmRfXzFoN25TXCIsXG5cdFwiaW5mb1wiOiBcIlByb2R1Y3RfaW5mb19fMVNnOTdcIixcblx0XCJjYXJkX3NsaWRlclwiOiBcIlByb2R1Y3RfY2FyZF9zbGlkZXJfXzlkMW5aXCIsXG5cdFwiaW1hZ2VcIjogXCJQcm9kdWN0X2ltYWdlX18xRnl3U1wiLFxuXHRcIm5hbWVcIjogXCJQcm9kdWN0X25hbWVfXzNXaVpLXCIsXG5cdFwiYWRkaXRpb25cIjogXCJQcm9kdWN0X2FkZGl0aW9uX18yc3BvUVwiLFxuXHRcIndlaWdodFwiOiBcIlByb2R1Y3Rfd2VpZ2h0X18ySDljTFwiLFxuXHRcInByaWNlXCI6IFwiUHJvZHVjdF9wcmljZV9fa0ZQNWRcIixcblx0XCJ3ZWxsXCI6IFwiUHJvZHVjdF93ZWxsX18yczFDM1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibGlua1wiOiBcIlJlY2lwZV9saW5rX18ydHdyRFwiLFxuXHRcImNhcmRcIjogXCJSZWNpcGVfY2FyZF9fMXZJNWZcIixcblx0XCJpbWFnZVwiOiBcIlJlY2lwZV9pbWFnZV9fMWJhSlJcIixcblx0XCJuYW1lXCI6IFwiUmVjaXBlX25hbWVfXzcyN01ZXCIsXG5cdFwidGV4dFwiOiBcIlJlY2lwZV90ZXh0X19ya0UxY1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicHJvZHVjdF9zbGlkZVwiOiBcIlNsaWRlcl9wcm9kdWN0X3NsaWRlX18zVnhEc1wiLFxuXHRcInJlY2lwZV9zbGlkZVwiOiBcIlNsaWRlcl9yZWNpcGVfc2xpZGVfXzJxaWRlXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJuYXZcIjogXCJTbGlkZXJOYXZfbmF2X18xOF9FLVwiLFxuXHRcImNvbnRhaW5lclwiOiBcIlNsaWRlck5hdl9jb250YWluZXJfXzNEOHlzXCIsXG5cdFwiaGVhZGVyXCI6IFwiU2xpZGVyTmF2X2hlYWRlcl9fMUhSR1FcIixcblx0XCJjb3VudGVyXCI6IFwiU2xpZGVyTmF2X2NvdW50ZXJfXzNwek5ZXCIsXG5cdFwiY291bnRlcl9fYWxsXCI6IFwiU2xpZGVyTmF2X2NvdW50ZXJfX2FsbF9fM3M1Rk9cIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRhc3RlXCI6IFwiVGFzdGVzU1ZHX3Rhc3RlX18yZDVXaVwiLFxuXHRcImFjY2VudFwiOiBcIlRhc3Rlc1NWR19hY2NlbnRfX1JEQVhnXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsaW5rXCI6IFwiRGlzY291bnRTZWN0aW9uX2xpbmtfX2x4akhnXCIsXG5cdFwiY29udGFpbmVyXCI6IFwiRGlzY291bnRTZWN0aW9uX2NvbnRhaW5lcl9fMlJWTnRcIixcblx0XCJwcm9tb1wiOiBcIkRpc2NvdW50U2VjdGlvbl9wcm9tb19fMzkyS1dcIixcblx0XCJjYXRlZ29yeVwiOiBcIkRpc2NvdW50U2VjdGlvbl9jYXRlZ29yeV9fRGZqYWNcIixcblx0XCJvZmZlclwiOiBcIkRpc2NvdW50U2VjdGlvbl9vZmZlcl9fM1IwTm5cIixcblx0XCJuYW1lXCI6IFwiRGlzY291bnRTZWN0aW9uX25hbWVfXzIyaGxZXCIsXG5cdFwiZGF0ZVwiOiBcIkRpc2NvdW50U2VjdGlvbl9kYXRlX18yWjFfeFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY2FyZFwiOiBcIk5ld1Rhc3RlX2NhcmRfXzJ3cUJfXCIsXG5cdFwiYm9keVwiOiBcIk5ld1Rhc3RlX2JvZHlfXzNQT3pwXCIsXG5cdFwiaW1hZ2VcIjogXCJOZXdUYXN0ZV9pbWFnZV9fMlpUWWJcIixcblx0XCJ3ZWxsXCI6IFwiTmV3VGFzdGVfd2VsbF9fM0I1OE1cIixcblx0XCJuYW1lXCI6IFwiTmV3VGFzdGVfbmFtZV9faG1KNThcIixcblx0XCJhZGRpdGlvblwiOiBcIk5ld1Rhc3RlX2FkZGl0aW9uX19DZ1dnT1wiLFxuXHRcInN0eWxlXCI6IFwiTmV3VGFzdGVfc3R5bGVfXzJyVl9wXCIsXG5cdFwiY291bnRyeVwiOiBcIk5ld1Rhc3RlX2NvdW50cnlfX3d4dVhnXCIsXG5cdFwiZmxhZ1wiOiBcIk5ld1Rhc3RlX2ZsYWdfX3JSTjg0XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJvZHlcIjogXCJQcm9kdWN0c1NlY3Rpb25fYm9keV9fMU9BeGxcIixcblx0XCJzdWJjYXRlZ29yaWVzXCI6IFwiUHJvZHVjdHNTZWN0aW9uX3N1YmNhdGVnb3JpZXNfX1g1enlnXCIsXG5cdFwiY2F0ZWdvcmllc1wiOiBcIlByb2R1Y3RzU2VjdGlvbl9jYXRlZ29yaWVzX18zdWpjTVwiLFxuXHRcInN1YmNhdGVnb3J5XCI6IFwiUHJvZHVjdHNTZWN0aW9uX3N1YmNhdGVnb3J5X19XQTNTRVwiLFxuXHRcImFjdGl2ZVwiOiBcIlByb2R1Y3RzU2VjdGlvbl9hY3RpdmVfXzF0NndEXCIsXG5cdFwiY2F0ZWdvcnlcIjogXCJQcm9kdWN0c1NlY3Rpb25fY2F0ZWdvcnlfX3BvV29NXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzdWJzY3JpYmVcIjogXCJJbnN0YWdyYW1Qcm9tb1NlY3Rpb25fc3Vic2NyaWJlX18yWV91MlwiLFxuXHRcInRpdGxlXCI6IFwiSW5zdGFncmFtUHJvbW9TZWN0aW9uX3RpdGxlX18xRmdsT1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSW5zdGFncmFtU2VjdGlvbl9jb250YWluZXJfXzFHb2RMXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJwYXJ0bmVyXCI6IFwiUGFydG5lcl9wYXJ0bmVyX18zd3VuZVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiUHJvbW9TZWN0aW9uX2NvbnRhaW5lcl9fMXZWQVhcIixcblx0XCJwYXJ0bmVyc1wiOiBcIlByb21vU2VjdGlvbl9wYXJ0bmVyc19fMkZkNC1cIixcblx0XCJsaW5rXCI6IFwiUHJvbW9TZWN0aW9uX2xpbmtfXzJFUjdmXCIsXG5cdFwicHJvbW9cIjogXCJQcm9tb1NlY3Rpb25fcHJvbW9fXzF3aWxtXCIsXG5cdFwidGl0bGVcIjogXCJQcm9tb1NlY3Rpb25fdGl0bGVfXzN4dWNEXCIsXG5cdFwiZm9vdGVyXCI6IFwiUHJvbW9TZWN0aW9uX2Zvb3Rlcl9fMU56NXRcIixcblx0XCJyZW1hcmtcIjogXCJQcm9tb1NlY3Rpb25fcmVtYXJrX18ya3JqQVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic3RhdHVzXCI6IFwiTWFpbl9zdGF0dXNfX1RBN0FkXCIsXG5cdFwibm90LWF2YWxpYWJsZVwiOiBcIk1haW5fbm90LWF2YWxpYWJsZV9fM0w2Q0JcIixcblx0XCJwcmVwYXJpbmdcIjogXCJNYWluX3ByZXBhcmluZ19fMUhxU3hcIixcblx0XCJhdmFsaWFibGVcIjogXCJNYWluX2F2YWxpYWJsZV9fMURyOFFcIixcblx0XCJtb2RhbFwiOiBcIk1haW5fbW9kYWxfXzNtVGd1XCIsXG5cdFwibW9kYWxfX2Nsb3NlXCI6IFwiTWFpbl9tb2RhbF9fY2xvc2VfXzFkdWQ5XCIsXG5cdFwibWFpblwiOiBcIk1haW5fbWFpbl9fMS1Ta2pcIixcblx0XCJ3cmFwcGVyXCI6IFwiTWFpbl93cmFwcGVyX19PT3AyclwiLFxuXHRcIm1vZGFsX19ib3hcIjogXCJNYWluX21vZGFsX19ib3hfX2g3cEhyXCIsXG5cdFwiaXRhbGljXCI6IFwiTWFpbl9pdGFsaWNfXzFzLXRQXCIsXG5cdFwibnVtYmVyc1wiOiBcIk1haW5fbnVtYmVyc19fQTBubURcIixcblx0XCJmbGV4XCI6IFwiTWFpbl9mbGV4X18xelVzaFwiLFxuXHRcInB0XCI6IFwiTWFpbl9wdF9fMmlnWWJcIixcblx0XCJ0aXRsZVwiOiBcIk1haW5fdGl0bGVfXzFib0NGXCJcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xzeFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3dpcGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzd2lwZXIvcmVhY3RcIik7OyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=