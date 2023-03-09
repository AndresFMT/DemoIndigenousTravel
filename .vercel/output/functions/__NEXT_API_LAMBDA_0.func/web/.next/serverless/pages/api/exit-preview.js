"use strict";
(() => {
var exports = {};
exports.id = 211;
exports.ids = [211];
exports.modules = {

/***/ 5360:
/***/ ((module) => {

module.exports = require("@next/env");

/***/ }),

/***/ 252:
/***/ ((module) => {

module.exports = require("next/dist/compiled/cookie");

/***/ }),

/***/ 9371:
/***/ ((module) => {

module.exports = require("next/dist/compiled/node-fetch");

/***/ }),

/***/ 600:
/***/ ((module) => {

module.exports = require("next/dist/server/accept-header.js");

/***/ }),

/***/ 730:
/***/ ((module) => {

module.exports = require("next/dist/server/api-utils/node.js");

/***/ }),

/***/ 5947:
/***/ ((module) => {

module.exports = require("next/dist/server/base-http/node.js");

/***/ }),

/***/ 2779:
/***/ ((module) => {

module.exports = require("next/dist/server/request-meta.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 2374:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-locale-cookie.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 5753:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-match.js");

/***/ }),

/***/ 9521:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/prepare-destination.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 9819:
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ 4269:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 3685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 6105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7157);
/* harmony import */ var next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2800);
/* harmony import */ var next_dist_build_webpack_loaders_next_serverless_loader_api_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6249);

        
      const { processEnv } = __webpack_require__(5360)
      processEnv([{"path":".env.production","contents":"# This env file should be checked into source control\n# This is the place for default values for all environments\n# Values in `.env.local` and `.env.production` will override these values\n\nNEXT_PUBLIC_SANITY_PROJECT_ID=\"uimvg3pl\"\nNEXT_PUBLIC_SANITY_DATASET=\"production\"\nNEXT_PUBLIC_SANITY_API_VERSION=\"v2021-10-21\"\nSANITY_API_DEPLOY_STUDIO=\"\"\n"},{"path":".env","contents":"# This env file should be checked into source control\n# This is the place for default values for all environments\n# Values in `.env.local` and `.env.production` will override these values\n"}])
    
        
        const runtimeConfig = {}
        ;
        

        

        const rewrites = Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)
          ? {
            afterFiles: private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg
          }
          : private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg

        const apiHandler = (0,next_dist_build_webpack_loaders_next_serverless_loader_api_handler__WEBPACK_IMPORTED_MODULE_2__/* .getApiHandler */ .Y)({
          pageModule: __webpack_require__(5006),
          rewrites: rewrites,
          i18n: undefined,
          page: "/api/exit-preview",
          basePath: "",
          pageIsDynamic: false,
          encodedPreviewProps: {previewModeId:"0b8018d1b5e18f5bb78819821189d988",previewModeSigningKey:"2d05317d5b1e53d0068ead1d63ac6f83626f459c01375d9e21c5278f409759e1",previewModeEncryptionKey:"f4bc30d85aae4c1a174a48757e51bae08a413f07bd116576a65ef30b45e12187"}
        })
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apiHandler);
      

/***/ }),

/***/ 5006:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ exit)
/* harmony export */ });
function exit(_req, res) {
    res.clearPreviewData();
    res.writeHead(307, {
        Location: "/"
    });
    res.end();
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [884,800], () => (__webpack_exec__(6105)));
module.exports = __webpack_exports__;

})();