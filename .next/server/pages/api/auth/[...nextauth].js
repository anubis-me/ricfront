(function() {
var exports = {};
exports.id = 748;
exports.ids = [748];
exports.modules = {

/***/ 555:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _nextauth_; }
});

;// CONCATENATED MODULE: external "next-auth"
var external_next_auth_namespaceObject = require("next-auth");;
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers"
var providers_namespaceObject = require("next-auth/providers");;
var providers_default = /*#__PURE__*/__webpack_require__.n(providers_namespaceObject);
// EXTERNAL MODULE: ./api.js
var api = __webpack_require__(7433);
;// CONCATENATED MODULE: ./pages/api/auth/[...nextauth].js



/* harmony default export */ var _nextauth_ = (external_next_auth_default()({
  providers: [providers_default().Facebook({
    clientId: "318743000036266",
    clientSecret: "6836241fb97f9bc5753c8a0f43c137e9"
  })],
  debug:  false && 0,
  callbacks: {
    async signIn(user, account, profile) {
      (0,api/* updateToken */.jM)(user.email, account.accessToken);
      return true;
    },

    async jwt(token, user, account, profile, isNewUser) {
      if (account) {
        token.accountId = account.id;
        token.accessToken = account.accessToken;
      }

      return token;
    },

    async session(session, token) {
      if (token) {
        session.accountId = token.accountId;
        session.accessToken = token.accessToken;
      }

      return session;
    }

  },
  session: {
    jwt: true
  },
  jwt: {
    secret: "cvbugnuri0hvurt286356tchneugeugmawialfobfiughcm4"
  },
  database: "mongodb+srv://abc:abc@cluster0.u7po5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
}));

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [433], function() { return __webpack_exec__(555); });
module.exports = __webpack_exports__;

})();