(function() {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "./api.js":
/*!****************!*\
  !*** ./api.js ***!
  \****************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateToken": function() { return /* binding */ updateToken; },
/* harmony export */   "getAccount": function() { return /* binding */ getAccount; },
/* harmony export */   "fetchProfile": function() { return /* binding */ fetchProfile; },
/* harmony export */   "sendMessage": function() { return /* binding */ sendMessage; },
/* harmony export */   "getProfile": function() { return /* binding */ getProfile; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
 //connecting from backend
//to get user profile

const fetchProfile = async (email, id) => {
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`http://localhost:8000/api/user/${email}/profile/${id}`);
  if (res) return res;else return {};
}; //to update the token if expired


const updateToken = async (email, accessToken) => {
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().put(`http://localhost:8000/api/user/${email}/accesstoken`, {
    accessToken
  });

  if (res) {// console.log("msg", res);
  }
}; //latest account detail


const getAccount = async email => {
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`http://localhost:8000/api/user/${email}/accounts`);

  if (res) {
    return res;
  }

  return {};
}; //to send the message to backend


const sendMessage = async (email, message, recipientId) => {
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`http://localhost:8000/api/webhook/${email}/send_message`, {
    recipientId,
    message
  });

  if (res.status != 200) {
    console.log("Some error occured");
  }
};


const getProfile = async email => {
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`http://localhost:8000/api/user/${email}/me`);

  if (res) {
    return res;
  }

  return {};
};

/***/ }),

/***/ "./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ "next-auth");
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ "next-auth/providers");
/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api */ "./api.js");
//Creating session between the frontend and backend



/* harmony default export */ __webpack_exports__["default"] = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({
  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default().Facebook({
    clientId: "318743000036266",
    clientSecret: "6836241fb97f9bc5753c8a0f43c137e9"
  })],
  debug:  false && 0,
  callbacks: {
    async signIn(user, account, profile) {
      (0,_api__WEBPACK_IMPORTED_MODULE_2__.updateToken)(user.email, account.accessToken);
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
  //Json web token for safer data transfer
  session: {
    jwt: true
  },
  jwt: {
    secret: "cvbugnuri0hvurt286356tchneugeugmawialfobfiughcm4"
  },
  database: "mongodb+srv://abc:abc@cluster0.u7po5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
}));

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-auth");;

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-auth/providers");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9hcGkuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcyIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcIm5leHQtYXV0aFwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcIm5leHQtYXV0aC9wcm92aWRlcnNcIiJdLCJuYW1lcyI6WyJmZXRjaFByb2ZpbGUiLCJlbWFpbCIsImlkIiwicmVzIiwiYXhpb3MiLCJ1cGRhdGVUb2tlbiIsImFjY2Vzc1Rva2VuIiwiZ2V0QWNjb3VudCIsInNlbmRNZXNzYWdlIiwibWVzc2FnZSIsInJlY2lwaWVudElkIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsImdldFByb2ZpbGUiLCJOZXh0QXV0aCIsInByb3ZpZGVycyIsIlByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImNsaWVudFNlY3JldCIsIkFQUF9TRUNSRVQiLCJkZWJ1ZyIsImNhbGxiYWNrcyIsInNpZ25JbiIsInVzZXIiLCJhY2NvdW50IiwicHJvZmlsZSIsImp3dCIsInRva2VuIiwiaXNOZXdVc2VyIiwiYWNjb3VudElkIiwic2Vzc2lvbiIsInNlY3JldCIsIkpXVF9TRUNSRVQiLCJkYXRhYmFzZSIsIk1PTkdPX1VSSSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FFQTtBQUVBOztBQUNBLE1BQU1BLFlBQVksR0FBRyxPQUFPQyxLQUFQLEVBQWNDLEVBQWQsS0FBcUI7QUFDekMsUUFBTUMsR0FBRyxHQUFHLE1BQU1DLGdEQUFBLENBQ2hCLGtDQUFpQ0gsS0FBTSxZQUFXQyxFQUFHLEVBRHJDLENBQWxCO0FBR0EsTUFBSUMsR0FBSixFQUFTLE9BQU9BLEdBQVAsQ0FBVCxLQUNLLE9BQU8sRUFBUDtBQUNMLENBTkQsQyxDQVFBOzs7QUFDQSxNQUFNRSxXQUFXLEdB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QSxpRCIsImZpbGUiOiJwYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuLy9jb25uZWN0aW5nIGZyb20gYmFja2VuZFxyXG5cclxuLy90byBnZXQgdXNlciBwcm9maWxlXHJcbmNvbnN0IGZldGNoUHJvZmlsZSA9IGFzeW5jIChlbWFpbCwgaWQpID0+IHtcclxuXHRjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXHJcblx0XHRgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS91c2VyLyR7ZW1haWx9L3Byb2ZpbGUvJHtpZH1gLFxyXG5cdCk7XHJcblx0aWYgKHJlcykgcmV0dXJuIHJlcztcclxuXHRlbHNlIHJldHVybiB7fTtcclxufTtcclxuXHJcbi8vdG8gdXBkYXRlIHRoZSB0b2tlbiBpZiBleHBpcmVkXHJcbmNvbnN0IHVwZGF0ZVRva2VuID0gYXN5bmMgKGVtYWlsLCBhY2Nlc3NUb2tlbikgPT4ge1xyXG5cdGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnB1dChcclxuXHRcdGBodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3VzZXIvJHtlbWFpbH0vYWNjZXNzdG9rZW5gLFxyXG5cdFx0e1xyXG5cdFx0XHRhY2Nlc3NUb2tlbixcclxuXHRcdH0sXHJcblx0KTtcclxuXHRpZiAocmVzKSB7XHJcblx0XHQvLyBjb25zb2xlLmxvZyhcIm1zZ1wiLCByZXMpO1xyXG5cdH1cclxufTtcclxuXHJcbi8vbGF0ZXN0IGFjY291bnQgZGV0YWlsXHJcbmNvbnN0IGdldEFjY291bnQgPSBhc3luYyAoZW1haWwpID0+IHtcclxuXHRjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXHJcblx0XHRgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS91c2VyLyR7ZW1haWx9L2FjY291bnRzYCxcclxuXHQpO1xyXG5cdGlmIChyZXMpIHtcclxuXHRcdHJldHVybiByZXM7XHJcblx0fVxyXG5cdHJldHVybiB7fTtcclxufTtcclxuXHJcblxyXG4vL3RvIHNlbmQgdGhlIG1lc3NhZ2UgdG8gYmFja2VuZFxyXG5jb25zdCBzZW5kTWVzc2FnZSA9IGFzeW5jIChlbWFpbCwgbWVzc2FnZSwgcmVjaXBpZW50SWQpID0+IHtcclxuXHRjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG5cdFx0YGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvd2ViaG9vay8ke2VtYWlsfS9zZW5kX21lc3NhZ2VgLFxyXG5cdFx0e1xyXG5cdFx0XHRyZWNpcGllbnRJZCxcclxuXHRcdFx0bWVzc2FnZSxcclxuXHRcdH0sXHJcblx0KTtcclxuXHRpZiAocmVzLnN0YXR1cyAhPSAyMDApIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiU29tZSBlcnJvciBvY2N1cmVkXCIpO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCB7IHVwZGF0ZVRva2VuLCBnZXRBY2NvdW50LCBmZXRjaFByb2ZpbGUsIHNlbmRNZXNzYWdlIH07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UHJvZmlsZSA9IGFzeW5jIChlbWFpbCkgPT4ge1xyXG5cdGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS91c2VyLyR7ZW1haWx9L21lYCk7XHJcblx0aWYgKHJlcykge1xyXG5cdFx0cmV0dXJuIHJlcztcclxuXHR9XHJcblx0cmV0dXJuIHt9O1xyXG59O1xyXG4iLCIvL0NyZWF0aW5nIHNlc3Npb24gYmV0d2VlbiB0aGUgZnJvbnRlbmQgYW5kIGJhY2tlbmRcclxuaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcclxuaW1wb3J0IFByb3ZpZGVycyBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVyc1wiO1xyXG5pbXBvcnQgeyB1cGRhdGVUb2tlbiB9IGZyb20gXCIuLi8uLi8uLi9hcGlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcclxuXHRwcm92aWRlcnM6IFtcclxuXHRcdFByb3ZpZGVycy5GYWNlYm9vayh7XHJcblx0XHRcdGNsaWVudElkXHQ6IHByb2Nlc3MuZW52LkFQUF9JRCxcclxuXHRcdFx0Y2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5BUFBfU0VDUkVULFxyXG5cdFx0fSksXHJcblx0XSxcclxuXHJcblx0ZGVidWc6IGZhbHNlICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIsXHJcblx0XHJcblx0Y2FsbGJhY2tzOiB7XHJcblx0XHRhc3luYyBzaWduSW4odXNlciwgYWNjb3VudCwgcHJvZmlsZSkge1xyXG5cdFx0XHR1cGRhdGVUb2tlbih1c2VyLmVtYWlsLCBhY2NvdW50LmFjY2Vzc1Rva2VuKTtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9LFxyXG5cdFx0YXN5bmMgand0KHRva2VuLCB1c2VyLCBhY2NvdW50LCBwcm9maWxlLCBpc05ld1VzZXIpIHtcclxuXHRcdFx0aWYgKGFjY291bnQpIHtcclxuXHRcdFx0XHR0b2tlbi5hY2NvdW50SWQgPSBhY2NvdW50LmlkO1xyXG5cdFx0XHRcdHRva2VuLmFjY2Vzc1Rva2VuID0gYWNjb3VudC5hY2Nlc3NUb2tlbjtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gdG9rZW47XHJcblx0XHR9LFxyXG5cdFx0YXN5bmMgc2Vzc2lvbihzZXNzaW9uLCB0b2tlbikge1xyXG5cdFx0XHRpZiAodG9rZW4pIHtcclxuXHRcdFx0XHRzZXNzaW9uLmFjY291bnRJZCA9IHRva2VuLmFjY291bnRJZDtcclxuXHRcdFx0XHRzZXNzaW9uLmFjY2Vzc1Rva2VuID0gdG9rZW4uYWNjZXNzVG9rZW47XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHNlc3Npb247XHJcblx0XHR9LFxyXG5cdH0sXHJcblx0Ly9Kc29uIHdlYiB0b2tlbiBmb3Igc2FmZXIgZGF0YSB0cmFuc2ZlclxyXG5cdHNlc3Npb246IHsgand0OiB0cnVlIH0sXHJcblx0and0OiB7XHJcblx0XHRzZWNyZXQ6IHByb2Nlc3MuZW52LkpXVF9TRUNSRVQsXHJcblx0fSxcclxuXHRkYXRhYmFzZTogcHJvY2Vzcy5lbnYuTU9OR09fVVJJLFxyXG59KTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL3Byb3ZpZGVyc1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==