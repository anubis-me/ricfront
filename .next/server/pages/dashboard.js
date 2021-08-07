(function() {
var exports = {};
exports.id = "pages/dashboard";
exports.ids = ["pages/dashboard"];
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

/***/ "./atoms/atom.js":
/*!***********************!*\
  !*** ./atoms/atom.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pageState": function() { return /* binding */ pageState; },
/* harmony export */   "conversationState": function() { return /* binding */ conversationState; },
/* harmony export */   "activeConvState": function() { return /* binding */ activeConvState; },
/* harmony export */   "profileState": function() { return /* binding */ profileState; }
/* harmony export */ });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ "recoil");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);

const pageState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: "pageState",
  default: {}
});
const conversationState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: "convState",
  default: []
});
const activeConvState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: "activeConv",
  default: {}
});
const profileState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: "Profile",
  default: {}
});

/***/ }),

/***/ "./components/Conversations/Conversation.jsx":
/*!***************************************************!*\
  !*** ./components/Conversations/Conversation.jsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ "recoil");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _atoms_atom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../atoms/atom */ "./atoms/atom.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api */ "./api.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _senderProfile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./senderProfile */ "./components/Conversations/senderProfile.jsx");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/helpers */ "./utils/helpers.js");

var _jsxFileName = "C:\\Users\\Ayushi Gupta\\task101\\frontend\\components\\Conversations\\Conversation.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const LeftMsg = ({
  msg,
  sender
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
    className: "left w-1/2 self-start flex items-center space-x-3",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "msg w-full flex flex-col space-y-2",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "grid grid-cols-11 items-end  justify-end",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "sender-img col-span-2 flex justify-start",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: sender.profile_pic,
            alt: "sender-img",
            className: "rounded-full h-9"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 7
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: " col-span-9 flex justify-start",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "bg-white text  p-4 rounded-lg shadow-md w-max",
            children: msg.msg
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 7
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 5
      }, undefined), "//Time stamp as asked in the assignment", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "date-time text-sm text-left",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "font-semibold",
          children: sender.first_name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 6
        }, undefined), " -", " ", moment__WEBPACK_IMPORTED_MODULE_5___default()(msg.time).format("MMM D, h.mm a")]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 3
  }, undefined);
};

const RightMsg = ({
  msg,
  sender
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
    className: "right w-1/2 self-end flex items-center space-x-3",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "msg w-full flex flex-col space-y-2",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "grid grid-cols-11 items-end space-x-2 justify-end",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: " col-span-9 flex justify-end",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "bg-white text  p-4 rounded-lg shadow-md w-max",
            children: msg.msg
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 7
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "sender-img col-span-2 flex justify-end",
          children: ["//profile image of the user", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: sender.image,
            alt: "sender-img",
            className: "rounded-full h-9"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 5
      }, undefined), "//User name", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "date-time text-sm text-right",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "font-semibold",
          children: sender.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 6
        }, undefined), " -", " ", moment__WEBPACK_IMPORTED_MODULE_5___default()(msg.time).format("MMM D, h.mm a")]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 3
  }, undefined);
};

function Conversation({
  className
}) {
  var _activeConv$messages;

  const [session, loading] = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_7__.useSession)();
  const [convState, setConvState] = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_atoms_atom__WEBPACK_IMPORTED_MODULE_3__.conversationState);
  const [activeConv, setActiveConv] = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_atoms_atom__WEBPACK_IMPORTED_MODULE_3__.activeConvState);
  const profile = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue)(_atoms_atom__WEBPACK_IMPORTED_MODULE_3__.profileState);
  const [input, setInput] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
  const form = react__WEBPACK_IMPORTED_MODULE_1___default().useRef();
  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
    setActiveConv(activeConv => _objectSpread({}, convState.filter(item => item.sender_id === activeConv.sender_id).pop()));
  }, [convState]); //sending messages

  const sendMsg = async (email, msg, id) => {
    await (0,_api__WEBPACK_IMPORTED_MODULE_4__.sendMessage)(email, msg, id);
    setConvState(convState => (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_8__.setSendConv)(convState, msg, id));
  };

  const handleSubmit = e => {
    e.preventDefault();
    sendMsg(session.user.email, e.target[0].value, activeConv.sender_id);
    form.current.reset();
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: className + " h-screen bg-red-50 bg-opacity-70 relative",
      children: Object.keys(activeConv).length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "title text-2xl font-semibold border-1 bg-white border-gray-200 py-4 px-6",
          children: activeConv.user.first_name + " " + activeConv.user.last_name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "chats w-full h-full",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            className: "w-auto flex flex-col p-4 h-5/6 overflow-auto",
            children: activeConv === null || activeConv === void 0 ? void 0 : (_activeConv$messages = activeConv.messages) === null || _activeConv$messages === void 0 ? void 0 : _activeConv$messages.map((item, index) => {
              return item.type === "received" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LeftMsg, {
                msg: item,
                sender: activeConv.user
              }, index, false, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 11
              }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RightMsg, {
                msg: item,
                sender: profile
              }, index, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 11
              }, this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 8
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
            onSubmit: handleSubmit,
            ref: form,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "input w-full absolute bottom-3 px-3 flex space-x-2",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                type: "text",
                className: "w-full border-1 p-3",
                placeholder: "Enter Message",
                onSubmit: e => e.target.value = ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 10
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                type: "submit",
                defaultValue: input,
                value: input,
                className: "border-1 border-solid border-gray-600 rounded-lg px-2 hidden",
                children: "Submit"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 10
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 9
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 8
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 6
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 4
    }, this), Object.keys(activeConv).length > 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_senderProfile__WEBPACK_IMPORTED_MODULE_6__.default, {
      className: "col-span-3"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 5
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "bg-red-50 bg-opacity-70 col-span-3"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 99,
    columnNumber: 3
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Conversation);

/***/ }),

/***/ "./components/Conversations/senderProfile.jsx":
/*!****************************************************!*\
  !*** ./components/Conversations/senderProfile.jsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ "recoil");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _atoms_atom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../atoms/atom */ "./atoms/atom.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons */ "./components/icons/index.js");

var _jsxFileName = "C:\\Users\\Ayushi Gupta\\task101\\frontend\\components\\Conversations\\senderProfile.jsx";





function SenderProfile({
  className
}) {
  const activeConv = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue)(_atoms_atom__WEBPACK_IMPORTED_MODULE_3__.activeConvState);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: className + " bg-gray-200 bg-opacity-60",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "profile p-10 w-full text-center flex flex-col space-y-5 bg-white",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "image flex justify-center",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: activeConv.user.profile_pic,
          alt: "senderimage",
          className: "rounded-full h-20"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "name-status",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "name text-2xl font-semibold",
          children: activeConv.user.first_name + " " + activeConv.user.last_name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "status text-gray-400 font-semibold flex justify-center items-center space-x-2",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "badge bg-gray-400 w-2 h-2 rounded-full"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 7
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: "Offline"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "buttons flex space-x-2 justify-center",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "call-button flex space-x-1 px-4 py-2 font-bold text-gray-600 border-1 border-solid border-gray-600 rounded-md",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_4__.Call, {
            fill: "#000",
            className: "h-6"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "txt",
            children: "Call"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "profile-button flex space-x-1 px-4 py-2 font-bold text-gray-600 border-1 border-solid border-gray-600 rounded-md",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_4__.User, {
            className: "h-6"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "txt",
            children: "Profile"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }, this), "//side Profile view", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "cards p-2",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "info-card bg-white rounded-md p-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "title font-semibold text-xl",
          children: "Customer details"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "table w-full",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
            className: "w-full",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                className: "grid grid-cols-10 py-2",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  className: "col-span-5 text-gray-400 font-semibold",
                  children: "Email"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 46,
                  columnNumber: 10
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  className: "col-span-5 text-right font-medium text-gray-900",
                  children: "example@gmail.com"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 49,
                  columnNumber: 10
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                className: "grid grid-cols-10 py-2",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  className: "col-span-5 text-gray-400 font-semibold",
                  children: "First Name"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 10
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  className: "col-span-5 text-right font-medium text-gray-900",
                  children: activeConv.user.first_name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 10
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                className: "grid grid-cols-10 py-2",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  className: "col-span-5 text-gray-400 font-semibold",
                  children: "Last Name"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 10
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  className: "col-span-5 text-right font-medium text-gray-900",
                  children: activeConv.user.last_name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 10
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "view-details mt-3",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "font-semibold text-lg text-primary",
            children: "View more details"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 3
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (SenderProfile);

/***/ }),

/***/ "./components/Conversations/userListing.jsx":
/*!**************************************************!*\
  !*** ./components/Conversations/userListing.jsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons */ "./components/icons/index.js");
/* harmony import */ var _atoms_atom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../atoms/atom */ "./atoms/atom.js");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recoil */ "recoil");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\Ayushi Gupta\\task101\\frontend\\components\\Conversations\\userListing.jsx";



 // listing of the users in the chat based on the lastest message

function UserListing({
  className
}) {
  const convState = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilValue)(_atoms_atom__WEBPACK_IMPORTED_MODULE_3__.conversationState);
  const [activeConv, setActiveConv] = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState)(_atoms_atom__WEBPACK_IMPORTED_MODULE_3__.activeConvState);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: className + " w-full  h-screen",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "bar flex justify-between items-center border-gray-300 border-b-1 py-5 px-4",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "font-semibold text-xl",
        children: "Chats"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_2__.Refresh, {
        className: "h-6",
        fill: "none"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 4
    }, this), convState.length ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "list",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        children: convState.map((item, index) => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            onClick: () => {
              console.log(item.sender_id);
              setActiveConv(activeConvState => item);
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "h-auto p-4 border-1 border-solid border-gray-200",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "head grid grid-cols-10 items-center mb-2",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                  type: "checkbox",
                  className: "col-span-1",
                  name: "",
                  id: ""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 30,
                  columnNumber: 12
                }, this), "//displaying the details", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "name-type col-span-8 text-left",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "name font-semibold",
                    children: item.user.first_name + " " + item.user.last_name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 38,
                    columnNumber: 13
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "type font-medium",
                    children: "Facebook DM"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 41,
                    columnNumber: 13
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 37,
                  columnNumber: 12
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "elapse col-span-1",
                  children: "10m"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 43,
                  columnNumber: 12
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 11
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 10
            }, this)
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 9
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 6
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w-full py-10 text-center",
      children: "No pending chats"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 3
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (UserListing);

/***/ }),

/***/ "./components/base/Layout/Sidebar.jsx":
/*!********************************************!*\
  !*** ./components/base/Layout/Sidebar.jsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons_logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../icons/logo */ "./components/icons/logo.jsx");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../icons */ "./components/icons/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\Ayushi Gupta\\task101\\frontend\\components\\base\\Layout\\Sidebar.jsx";
//Side layout as per the document






function Sidebar({
  active
}) {
  const [session, loading] = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_4__.useSession)();

  const setTab = val => {
    setActive(val);
  };

  if (!session && !loading) {
    next_router__WEBPACK_IMPORTED_MODULE_5___default().push("/");
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "sidebar bg-primary bg-opacity-99 h-full fixed flex flex-col justify-between",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "logo p-5",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_logo__WEBPACK_IMPORTED_MODULE_1__.default, {
          className: "h-8 mx-auto",
          children: "Home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "menu",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
            href: "/dashboard/conversations",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: active == "conv" ? "bg-white py-3" : "py-3",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_2__.Chats, {
                className: "h-8 mx-auto p-1",
                fill: active == "conv" ? "black" : "white"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 9
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "icons-down",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "signout text-center",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: () => (0,next_auth_client__WEBPACK_IMPORTED_MODULE_4__.signOut)(),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_2__.Logout, {
            className: "h-8",
            fill: "#fff"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "user p-5",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
          href: "/profile",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "https://cdn.jetcommerce.io/wp-content/uploads/sites/11/2018/03/15145621/Richpanel-Icon-Blue.png",
            className: "h-10 rounded-full mx-auto",
            alt: "user"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 3
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./components/icons/call.jsx":
/*!***********************************!*\
  !*** ./components/icons/call.jsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Ayushi Gupta\\task101\\frontend\\components\\icons\\call.jsx";


function Call({
  className,
  fill
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: className,
    viewBox: "0 0 512 512",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
      children: "ionicons-v5-g"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M451,374c-15.88-16-54.34-39.35-73-48.76C353.7,313,351.7,312,332.6,326.19c-12.74,9.47-21.21,17.93-36.12,14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48,5.41-23.23,14.79-36c13.22-18,12.22-21,.92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9,44,119.9,47,108.83,51.6A160.15,160.15,0,0,0,83,65.37C67,76,58.12,84.83,51.91,98.1s-9,44.38,23.07,102.64,54.57,88.05,101.14,134.49S258.5,406.64,310.85,436c64.76,36.27,89.6,29.2,102.91,23s22.18-15,32.83-31a159.09,159.09,0,0,0,13.8-25.8C465,391.17,468,391.17,451,374Z",
      fill: "none",
      stroke: fill,
      strokeMiterlimit: "10",
      strokeWidth: "32px"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Call);

/***/ }),

/***/ "./components/icons/chart.jsx":
/*!************************************!*\
  !*** ./components/icons/chart.jsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Ayushi Gupta\\task101\\frontend\\components\\icons\\chart.jsx";


function Chart({
  className,
  fill
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: className,
    viewBox: "0 0 512 512",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
      children: "ionicons-v5-p"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("polygon", {
      points: "496 496 16 496 16 16 48 16 48 464 496 464 496 496",
      fill: fill
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M192,432H80V208H192Z",
      fill: fill
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M336,432H224V160H336Z",
      fill: fill
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M479.64,432h-112V96h112Z",
      fill: fill
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Chart);

/***/ }),

/***/ "./components/icons/chats.jsx":
/*!************************************!*\
  !*** ./components/icons/chats.jsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Ayushi Gupta\\task101\\frontend\\components\\icons\\chats.jsx";


function Chats({
  className,
  fill
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: className,
    viewBox: "0 0 512 512",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
      children: "ionicons-v5-q"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fill: fill,
      d: "M456,48H56A24,24,0,0,0,32,72V360a24,24,0,0,0,24,24h72v80l117.74-80H456a24,24,0,0,0,24-24V72A24,24,0,0,0,456,48ZM160,248a32,32,0,1,1,32-32A32,32,0,0,1,160,248Zm96,0a32,32,0,1,1,32-32A32,32,0,0,1,256,248Zm96,0a32,32,0,1,1,32-32A32,32,0,0,1,352,248ZM456,80h0Z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Chats);

/***/ }),

/***/ "./components/icons/index.js":
/*!***********************************!*\
  !*** ./components/icons/index.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Refresh": function() { return /* reexport safe */ _refresh__WEBPACK_IMPORTED_MODULE_0__.default; },
/* harmony export */   "Logo": function() { return /* reexport safe */ _logo__WEBPACK_IMPORTED_MODULE_1__.default; },
/* harmony export */   "Chart": function() { return /* reexport safe */ _chart__WEBPACK_IMPORTED_MODULE_2__.default; },
/* harmony export */   "Chats": function() { return /* reexport safe */ _chats__WEBPACK_IMPORTED_MODULE_3__.default; },
/* harmony export */   "People": function() { return /* reexport safe */ _people__WEBPACK_IMPORTED_MODULE_4__.default; },
/* harmony export */   "Call": function() { return /* reexport safe */ _call__WEBPACK_IMPORTED_MODULE_5__.default; },
/* harmony export */   "User": function() { return /* reexport safe */ _user__WEBPACK_IMPORTED_MODULE_6__.default; },
/* harmony export */   "Logout": function() { return /* reexport safe */ _logout__WEBPACK_IMPORTED_MODULE_7__.default; },
/* harmony export */   "Login": function() { return /* reexport safe */ _login__WEBPACK_IMPORTED_MODULE_8__.default; }
/* harmony export */ });
/* harmony import */ var _refresh__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./refresh */ "./components/icons/refresh.jsx");
/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo */ "./components/icons/logo.jsx");
/* harmony import */ var _chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chart */ "./components/icons/chart.jsx");
/* harmony import */ var _chats__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chats */ "./components/icons/chats.jsx");
/* harmony import */ var _people__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./people */ "./components/icons/people.jsx");
/* harmony import */ var _call__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./call */ "./components/icons/call.jsx");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user */ "./components/icons/user.jsx");
/* harmony import */ var _logout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./logout */ "./components/icons/logout.jsx");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login */ "./components/icons/login.jsx");











/***/ }),

/***/ "./components/icons/login.jsx":
/*!************************************!*\
  !*** ./components/icons/login.jsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Ayushi Gupta\\task101\\frontend\\components\\icons\\login.jsx";


function Login({
  className,
  fill
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: className,
    viewBox: "0 0 512 512",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
      children: "ionicons-v5-o"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M192,176V136a40,40,0,0,1,40-40H392a40,40,0,0,1,40,40V376a40,40,0,0,1-40,40H240c-22.09,0-48-17.91-48-40V336",
      fill: "none",
      stroke: fill,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "40px"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("polyline", {
      points: "288 336 368 256 288 176",
      fill: "none",
      stroke: fill,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "40px"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("line", {
      x1: "80",
      y1: "256",
      x2: "352",
      y2: "256",
      fill: "none",
      stroke: fill,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "40px"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./components/icons/logo.jsx":
/*!***********************************!*\
  !*** ./components/icons/logo.jsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Ayushi Gupta\\task101\\frontend\\components\\icons\\logo.jsx";


function Logo({
  className
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
    xmlns: "https://cdn.jetcommerce.io/wp-content/uploads/sites/11/2018/03/15145621/Richpanel-Icon-Blue.png",
    className: className,
    viewBox: "0 0 250 250",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
      id: "Richpanel_Logo_Horizontal_Color",
      transform: "translate(-41 -108)",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        id: "Ellipse_1_copy_3",
        "data-name": "Ellipse 1 copy 3",
        d: "M271.185,358H60.262A19.284,19.284,0,0,1,41,338.7v-211.4A19.284,19.284,0,0,1,60.262,108H271.185a19.284,19.284,0,0,1,19.263,19.305V338.7A19.284,19.284,0,0,1,271.185,358Z",
        fill: "#fff",
        fillRule: "evenodd"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        id: "Ellipse_6_copy_3",
        "data-name": "Ellipse 6 copy 3",
        d: "M193.9,167.689a7.708,7.708,0,0,1-15,2.439,14.056,14.056,0,1,0-12.439,20.521,13.909,13.909,0,0,0,7.42-2.148,7.72,7.72,0,0,1,1.4-.991q.254-.2.5-.417l.063.142a7.654,7.654,0,1,1,6.221,13.986l.074.167a29.583,29.583,0,0,1-41.084-9.913,57.142,57.142,0,0,0-31.884,44.9s-1.372,7.62-9.347,7.62a8.931,8.931,0,0,1-8.971-8.89c0-1.431.373-6.843.98-8.041,4.077-25.987,21.611-44.366,45.329-53.512a29.525,29.525,0,0,1,56.074-9.051l-.028.021a7.56,7.56,0,0,1,.692,3.167Zm22.914,135.045a7.728,7.728,0,0,1,5.392-14.239,14.073,14.073,0,1,0-13.368-13.542A7.676,7.676,0,0,1,209,276.66c.033.214.07.428.112.64l-.154-.016a7.747,7.747,0,0,1-1,3.092,7.618,7.618,0,0,1-14.2-4.686l-.182-.019a29.668,29.668,0,0,1,29.108-30.7,57.2,57.2,0,0,0-22.854-50.122s-5.9-5-1.911-11.923a8.911,8.911,0,0,1,12.168-3.341c1.237.716,5.726,3.745,6.458,4.87,20.417,16.532,27.532,40.941,23.577,66.1A29.609,29.609,0,0,1,219.9,303.749v-.035a7.517,7.517,0,0,1-3.092-.98ZM87.42,255.548a7.722,7.722,0,0,1,9.608,11.8,14.157,14.157,0,0,0-.193,14.507,13.948,13.948,0,1,0,18.578-19.338,7.714,7.714,0,0,1-1.554-.715c-.2-.079-.4-.154-.609-.223l.091-.126a7.731,7.731,0,0,1,.582-12.919,7.616,7.616,0,0,1,8.393.527l.107-.149A29.716,29.716,0,0,1,134.4,289.527a56.916,56.916,0,0,0,54.738,5.225s7.271-2.619,11.258,4.3a8.952,8.952,0,0,1-3.2,12.232c-1.236.715-6.1,3.1-7.437,3.17-24.494,9.455-49.144,3.426-68.906-12.587A29.586,29.586,0,0,1,85,257.726l.032.015a7.533,7.533,0,0,1,2.388-2.193Z",
        fill: "#0e5394",
        fillRule: "evenodd"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./components/icons/logout.jsx":
/*!*************************************!*\
  !*** ./components/icons/logout.jsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Ayushi Gupta\\task101\\frontend\\components\\icons\\logout.jsx";


function Logout({
  className,
  fill = "none"
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: className,
    viewBox: "0 0 512 512",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
      children: "ionicons-v5-o"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M304,336v40a40,40,0,0,1-40,40H104a40,40,0,0,1-40-40V136a40,40,0,0,1,40-40H256c22.09,0,48,17.91,48,40v40",
      fill: "none",
      stroke: fill,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "40px"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("polyline", {
      points: "368 336 448 256 368 176",
      fill: "none",
      stroke: fill,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "40px"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("line", {
      x1: "176",
      y1: "256",
      x2: "432",
      y2: "256",
      fill: "none",
      stroke: fill,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "40px"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Logout);

/***/ }),

/***/ "./components/icons/people.jsx":
/*!*************************************!*\
  !*** ./components/icons/people.jsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Ayushi Gupta\\task101\\frontend\\components\\icons\\people.jsx";


function People({
  className,
  fill
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: className,
    viewBox: "0 0 512 512",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
      children: "ionicons-v5-j"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
      fill: fill,
      cx: "152",
      cy: "184",
      r: "72"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fill: fill,
      d: "M234,296c-28.16-14.3-59.24-20-82-20-44.58,0-136,27.34-136,82v42H166V383.93c0-19,8-38.05,22-53.93C199.17,317.32,214.81,305.55,234,296Z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fill: fill,
      d: "M340,288c-52.07,0-156,32.16-156,96v48H496V384C496,320.16,392.07,288,340,288Z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
      fill: fill,
      cx: "340",
      cy: "168",
      r: "88"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (People);

/***/ }),

/***/ "./components/icons/refresh.jsx":
/*!**************************************!*\
  !*** ./components/icons/refresh.jsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Ayushi Gupta\\task101\\frontend\\components\\icons\\refresh.jsx";


function Refresh({
  className,
  fill
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: className,
    viewBox: "0 0 512 512",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
      children: "ionicons-v5-b"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M320,146s24.36-12-64-12A160,160,0,1,0,416,294",
      fill: fill,
      stroke: "#000",
      strokeLinecap: "square",
      strokeMiterlimit: "10",
      strokeWidth: "40px"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("polyline", {
      points: "256 58 336 138 256 218",
      fill: fill,
      stroke: "#000",
      strokeLinecap: "square",
      strokeMiterlimit: "10",
      strokeWidth: "40px"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Refresh);

/***/ }),

/***/ "./components/icons/user.jsx":
/*!***********************************!*\
  !*** ./components/icons/user.jsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Ayushi Gupta\\task101\\frontend\\components\\icons\\user.jsx";


function User({
  className,
  fill
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: className,
    viewBox: "0 0 512 512",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
      children: "ionicons-v5-j"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM205.78,164.82C218.45,151.39,236.28,144,256,144s37.39,7.44,50.11,20.94C319,178.62,325.27,197,323.79,216.76,320.83,256,290.43,288,256,288s-64.89-32-67.79-71.25C186.74,196.83,193,178.39,205.78,164.82ZM256,432a175.49,175.49,0,0,1-126-53.22,122.91,122.91,0,0,1,35.14-33.44C190.63,329,222.89,320,256,320s65.37,9,90.83,25.34A122.87,122.87,0,0,1,382,378.78,175.45,175.45,0,0,1,256,432Z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (User);

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

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
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
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
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

/***/ "./pages/dashboard/conversations.jsx":
/*!*******************************************!*\
  !*** ./pages/dashboard/conversations.jsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_base_Layout_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/base/Layout/Sidebar */ "./components/base/Layout/Sidebar.jsx");
/* harmony import */ var _components_Conversations_userListing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Conversations/userListing */ "./components/Conversations/userListing.jsx");
/* harmony import */ var _components_Conversations_Conversation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Conversations/Conversation */ "./components/Conversations/Conversation.jsx");
/* harmony import */ var _components_Conversations_senderProfile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Conversations/senderProfile */ "./components/Conversations/senderProfile.jsx");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! socket.io-client */ "socket.io-client");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! recoil */ "recoil");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _atoms_atom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../atoms/atom */ "./atoms/atom.js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/helpers */ "./utils/helpers.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../api */ "./api.js");

var _jsxFileName = "C:\\Users\\Ayushi Gupta\\task101\\frontend\\pages\\dashboard\\conversations.jsx";












const Conversations = () => {
  var socket;
  const [session, loading] = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_7__.useSession)();
  const [page, setPage] = (0,recoil__WEBPACK_IMPORTED_MODULE_8__.useRecoilState)(_atoms_atom__WEBPACK_IMPORTED_MODULE_9__.pageState);
  const [convState, setConvState] = (0,recoil__WEBPACK_IMPORTED_MODULE_8__.useRecoilState)(_atoms_atom__WEBPACK_IMPORTED_MODULE_9__.conversationState);
  const activeConv = (0,recoil__WEBPACK_IMPORTED_MODULE_8__.useRecoilValue)(_atoms_atom__WEBPACK_IMPORTED_MODULE_9__.activeConvState);
  const [profile, setProfile] = (0,recoil__WEBPACK_IMPORTED_MODULE_8__.useRecoilState)(_atoms_atom__WEBPACK_IMPORTED_MODULE_9__.profileState);
  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(async () => {
    if (session) {
      const accounts = await (0,_api__WEBPACK_IMPORTED_MODULE_11__.getAccount)(session.user.email);
      setPage(accounts.data.data.accounts[0]);
      const profile = await (0,_api__WEBPACK_IMPORTED_MODULE_11__.getProfile)(session.user.email);
      const user = profile.data.data.user;
      setProfile(profile => user);
    }
  }, [session]);
  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(async () => {
    if (page && session && Object.keys(page).length) {
      socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_6__.io)("localhost:8000");
      configureSocket();
    }
  }, [session, page]);

  const configureSocket = () => {
    socket.on("connect", () => {
      socket.emit("/init", {
        pageId: page.id
      });
    });
    socket.on("connect_error", err => {
      console.error(err);
    });

    const newmsgCb = async data => {
      const user = await (0,_api__WEBPACK_IMPORTED_MODULE_11__.fetchProfile)(session.user.email, data.event.sender.id);
      setConvState(convState => (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_10__.setConv)(convState, data.event, user.data.data.details));
    };

    socket.on("/new_message", newmsgCb);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_base_Layout_Sidebar__WEBPACK_IMPORTED_MODULE_2__.default, {
      active: "conv"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "ml-20 grid grid-cols-10",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Conversations_userListing__WEBPACK_IMPORTED_MODULE_3__.default, {
        className: "border-r-1 border-gray-300 border-solid col-span-2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Conversations_Conversation__WEBPACK_IMPORTED_MODULE_4__.default, {
        className: "col-span-5"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Conversations);

/***/ }),

/***/ "./pages/dashboard/index.js":
/*!**********************************!*\
  !*** ./pages/dashboard/index.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ "recoil");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _atoms_atom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../atoms/atom */ "./atoms/atom.js");
/* harmony import */ var _components_base_Layout_Sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/base/Layout/Sidebar */ "./components/base/Layout/Sidebar.jsx");
/* harmony import */ var _conversations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./conversations */ "./pages/dashboard/conversations.jsx");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../api */ "./api.js");

var _jsxFileName = "C:\\Users\\Ayushi Gupta\\task101\\frontend\\pages\\dashboard\\index.js";








function Dashboard() {
  const [session, loading] = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_1__.useSession)();
  const {
    0: active,
    1: setActive
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const [page, setPage] = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilState)(_atoms_atom__WEBPACK_IMPORTED_MODULE_4__.pageState);
  const [profile, setProfile] = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilState)(_atoms_atom__WEBPACK_IMPORTED_MODULE_4__.profileState);
  react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(async () => {
    if (session) {
      const accounts = await (0,_api__WEBPACK_IMPORTED_MODULE_7__.getAccount)(session.user.email); // console.log(accounts.data.data.accounts[0]);

      setPage(accounts.data.data.accounts[0]);
      const profile = await (0,_api__WEBPACK_IMPORTED_MODULE_7__.getProfile)(session.user.email);
      const user = profile.data.data.user;
      setProfile(profile => user);
    }
  }, [session]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_base_Layout_Sidebar__WEBPACK_IMPORTED_MODULE_5__.default, {
      active: active,
      setActive: setActive
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_conversations__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 3
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ }),

/***/ "./utils/helpers.js":
/*!**************************!*\
  !*** ./utils/helpers.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setConv": function() { return /* binding */ setConv; },
/* harmony export */   "setSendConv": function() { return /* binding */ setSendConv; }
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const setConv = (convState, rcvd_msg, user) => {
  const sender_id = rcvd_msg.sender.id;
  console.log(user);
  var sender = convState.filter(item => item.sender_id === sender_id);
  var otherSenders = convState.filter(item => item.sender_id !== sender_id);

  if (!sender.length) {
    sender = {
      sender_id,
      user,
      messages: [{
        msg: rcvd_msg.message.text,
        type: "received",
        time: new Date(rcvd_msg.timestamp).toISOString()
      }]
    };
    return [sender, ...otherSenders];
  } else {
    const snd = sender[0];
    sender = _objectSpread(_objectSpread({}, snd), {}, {
      messages: [...snd.messages, {
        msg: rcvd_msg.message.text,
        type: "received",
        time: new Date(rcvd_msg.timestamp).toISOString()
      }]
    });
    return [sender, ...otherSenders];
  }
};
const setSendConv = (convState, message, receipentId) => {
  var receiver = convState.filter(item => item.sender_id == receipentId);
  var otherSenders = convState.filter(item => item.sender_id != receipentId);
  const snd = receiver[0];
  receiver = _objectSpread(_objectSpread({}, snd), {}, {
    messages: [...snd.messages, {
      msg: message,
      type: "sent",
      time: new Date().toISOString()
    }]
  });
  return [receiver, ...otherSenders];
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

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("moment");;

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-auth/client");;

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

/***/ "recoil":
/*!*************************!*\
  !*** external "recoil" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("recoil");;

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("socket.io-client");;

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
var __webpack_exports__ = (__webpack_exec__("./pages/dashboard/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vYXBpLmpzIiwid2VicGFjazovL2NsaWVudC8uL2F0b21zL2F0b20uanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29tcG9uZW50cy9Db252ZXJzYXRpb25zL0NvbnZlcnNhdGlvbi5qc3giLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29tcG9uZW50cy9Db252ZXJzYXRpb25zL3NlbmRlclByb2ZpbGUuanN4Iiwid2VicGFjazovL2NsaWVudC8uL2NvbXBvbmVudHMvQ29udmVyc2F0aW9ucy91c2VyTGlzdGluZy5qc3giLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29tcG9uZW50cy9iYXNlL0xheW91dC9TaWRlYmFyLmpzeCIsIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL2ljb25zL2NhbGwuanN4Iiwid2VicGFjazovL2NsaWVudC8uL2NvbXBvbmVudHMvaWNvbnMvY2hhcnQuanN4Iiwid2VicGFjazovL2NsaWVudC8uL2NvbXBvbmVudHMvaWNvbnMvY2hhdHMuanN4Iiwid2VicGFjazovL2NsaWVudC8uL2NvbXBvbmVudHMvaWNvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29tcG9uZW50cy9pY29ucy9sb2dpbi5qc3giLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29tcG9uZW50cy9pY29ucy9sb2dvLmpzeCIsIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL2ljb25zL2xvZ291dC5qc3giLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29tcG9uZW50cy9pY29ucy9wZW9wbGUuanN4Iiwid2VicGFjazovL2NsaWVudC8uL2NvbXBvbmVudHMvaWNvbnMvcmVmcmVzaC5qc3giLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29tcG9uZW50cy9pY29ucy91c2VyLmpzeCIsIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9saW5rLmpzIiwid2VicGFjazovL2NsaWVudC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGUtbG9hZGVyLmpzIiwid2VicGFjazovL2NsaWVudC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL2NsaWVudC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyLmpzIiwid2VicGFjazovL2NsaWVudC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzIiwid2VicGFjazovL2NsaWVudC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL21pdHQuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzIiwid2VicGFjazovL2NsaWVudC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvZGFzaGJvYXJkL2NvbnZlcnNhdGlvbnMuanN4Iiwid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL2Rhc2hib2FyZC9pbmRleC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi91dGlscy9oZWxwZXJzLmpzIiwid2VicGFjazovL2NsaWVudC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwibmV4dC1hdXRoL2NsaWVudFwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwicmVjb2lsXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwic29ja2V0LmlvLWNsaWVudFwiIiwid2VicGFjazovL2NsaWVudC9pZ25vcmVkfEM6XFxVc2Vyc1xcQXl1c2hpIEd1cHRhXFx0YXNrMTAxXFxmcm9udGVuZFxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbImZldGNoUHJvZmlsZSIsImVtYWlsIiwiaWQiLCJyZXMiLCJheGlvcyIsInVwZGF0ZVRva2VuIiwiYWNjZXNzVG9rZW4iLCJnZXRBY2NvdW50Iiwic2VuZE1lc3NhZ2UiLCJtZXNzYWdlIiwicmVjaXBpZW50SWQiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwiZ2V0UHJvZmlsZSIsInBhZ2VTdGF0ZSIsImF0b20iLCJrZXkiLCJkZWZhdWx0IiwiY29udmVyc2F0aW9uU3RhdGUiLCJhY3RpdmVDb252U3RhdGUiLCJwcm9maWxlU3RhdGUiLCJMZWZ0TXNnIiwibXNnIiwic2VuZGVyIiwicHJvZmlsZV9waWMiLCJmaXJzdF9uYW1lIiwibW9tZW50IiwidGltZSIsImZvcm1hdCIsIlJpZ2h0TXNnIiwiaW1hZ2UiLCJuYW1lIiwiQ29udmVyc2F0aW9uIiwiY2xhc3NOYW1lIiwic2Vzc2lvbiIsImxvYWRpbmciLCJ1c2VTZXNzaW9uIiwiY29udlN0YXRlIiwic2V0Q29udlN0YXRlIiwidXNlUmVjb2lsU3RhdGUiLCJhY3RpdmVDb252Iiwic2V0QWN0aXZlQ29udiIsInByb2ZpbGUiLCJ1c2VSZWNvaWxWYWx1ZSIsImlucHV0Iiwic2V0SW5wdXQiLCJSZWFjdCIsImZvcm0iLCJmaWx0ZXIiLCJpdGVtIiwic2VuZGVyX2lkIiwicG9wIiwic2VuZE1zZyIsInNldFNlbmRDb252IiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidXNlciIsInRhcmdldCIsInZhbHVlIiwiY3VycmVudCIsInJlc2V0IiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImxhc3RfbmFtZSIsIm1lc3NhZ2VzIiwibWFwIiwiaW5kZXgiLCJ0eXBlIiwiU2VuZGVyUHJvZmlsZSIsIlVzZXJMaXN0aW5nIiwiU2lkZWJhciIsImFjdGl2ZSIsInNldFRhYiIsInZhbCIsInNldEFjdGl2ZSIsInJvdXRlciIsInNpZ25PdXQiLCJDYWxsIiwiZmlsbCIsIkNoYXJ0IiwiQ2hhdHMiLCJMb2dpbiIsIkxvZ28iLCJMb2dvdXQiLCJQZW9wbGUiLCJSZWZyZXNoIiwiVXNlciIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwicmVxdWlyZSIsImV4cG9ydHMiLCJfcmVhY3QiLCJfcm91dGVyIiwiX3JvdXRlcjIiLCJfdXNlSW50ZXJzZWN0aW9uIiwicHJlZmV0Y2hlZCIsInByZWZldGNoIiwiaHJlZiIsImFzIiwib3B0aW9ucyIsImlzTG9jYWxVUkwiLCJjYXRjaCIsImVyciIsImN1ckxvY2FsZSIsImxvY2FsZSIsImlzTW9kaWZpZWRFdmVudCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJhbHRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwibGlua0NsaWNrZWQiLCJyZXBsYWNlIiwic2hhbGxvdyIsInNjcm9sbCIsIm5vZGVOYW1lIiwiaW5kZXhPZiIsIkxpbmsiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsImFyZ3MiLCJFcnJvciIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsImZvckVhY2giLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwicGFzc0hyZWYiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsInVzZVJlZiIsIndhcm4iLCJwIiwidXNlUm91dGVyIiwidXNlTWVtbyIsInJlc29sdmVkSHJlZiIsInJlc29sdmVkQXMiLCJyZXNvbHZlSHJlZiIsImNoaWxkcmVuIiwiY3JlYXRlRWxlbWVudCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY2hpbGRSZWYiLCJyZWYiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJpc1Zpc2libGUiLCJ1c2VJbnRlcnNlY3Rpb24iLCJyb290TWFyZ2luIiwic2V0UmVmIiwidXNlQ2FsbGJhY2siLCJlbCIsInVzZUVmZmVjdCIsInNob3VsZFByZWZldGNoIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsIm9uQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJsb2NhbGVEb21haW4iLCJpc0xvY2FsZURvbWFpbiIsImdldERvbWFpbkxvY2FsZSIsImxvY2FsZXMiLCJkb21haW5Mb2NhbGVzIiwiYWRkQmFzZVBhdGgiLCJhZGRMb2NhbGUiLCJkZWZhdWx0TG9jYWxlIiwiY2xvbmVFbGVtZW50IiwiX2RlZmF1bHQiLCJyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCIsInBhdGgiLCJlbmRzV2l0aCIsInNsaWNlIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJjYiIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJtYXgiLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJjbGVhclRpbWVvdXQiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwibWFya0Fzc2V0RXJyb3IiLCJpc0Fzc2V0RXJyb3IiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwiX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiTVNfTUFYX0lETEVfREVMQVkiLCJ3aXRoRnV0dXJlIiwiZ2VuZXJhdG9yIiwiZW50cnkiLCJnZXQiLCJmdXR1cmUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlc29sdmVyIiwicHJvbSIsInNldCIsInRoZW4iLCJoYXNQcmVmZXRjaCIsImxpbmsiLCJkb2N1bWVudCIsIndpbmRvdyIsIk1TSW5wdXRNZXRob2RDb250ZXh0IiwiZG9jdW1lbnRNb2RlIiwicmVsTGlzdCIsInN1cHBvcnRzIiwiX3VudXNlZCIsImNhblByZWZldGNoIiwicHJlZmV0Y2hWaWFEb20iLCJyZWoiLCJxdWVyeVNlbGVjdG9yIiwicmVsIiwiY3Jvc3NPcmlnaW4iLCJvbmxvYWQiLCJvbmVycm9yIiwiaGVhZCIsImFwcGVuZENoaWxkIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImRlZmluZVByb3BlcnR5IiwiYXBwZW5kU2NyaXB0Iiwic3JjIiwic2NyaXB0IiwicmVqZWN0IiwiYm9keSIsInJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQiLCJtcyIsImNhbmNlbGxlZCIsInIiLCJfX0JVSUxEX01BTklGRVNUIiwib25CdWlsZE1hbmlmZXN0IiwiX19CVUlMRF9NQU5JRkVTVF9DQiIsImdldEZpbGVzRm9yUm91dGUiLCJhc3NldFByZWZpeCIsInJvdXRlIiwic2NyaXB0cyIsImVuY29kZVVSSSIsImNzcyIsIm1hbmlmZXN0IiwiYWxsRmlsZXMiLCJ2IiwiY3JlYXRlUm91dGVMb2FkZXIiLCJlbnRyeXBvaW50cyIsIk1hcCIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsIm1heWJlRXhlY3V0ZVNjcmlwdCIsImZldGNoU3R5bGVTaGVldCIsImZldGNoIiwib2siLCJ0ZXh0IiwiY29udGVudCIsIndoZW5FbnRyeXBvaW50Iiwib25FbnRyeXBvaW50IiwiZXhlY3V0ZSIsImZuIiwiY29tcG9uZW50IiwiZXJyb3IiLCJvbGQiLCJsb2FkUm91dGUiLCJhbGwiLCJoYXMiLCJlbnRyeXBvaW50Iiwic3R5bGVzIiwiYXNzaWduIiwiY24iLCJuYXZpZ2F0b3IiLCJjb25uZWN0aW9uIiwic2F2ZURhdGEiLCJ0ZXN0IiwiZWZmZWN0aXZlVHlwZSIsIm91dHB1dCIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsIk5leHRSb3V0ZXIiLCJfcm91dGVyQ29udGV4dCIsIl93aXRoUm91dGVyIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwib24iLCJldmVudEZpZWxkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJfc2luZ2xldG9uUm91dGVyIiwic3RhY2siLCJ1c2VDb250ZXh0IiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsImluc3RhbmNlIiwicHJvcGVydHkiLCJBcnJheSIsImlzQXJyYXkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZGlzYWJsZWQiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ1c2VTdGF0ZSIsInVuZGVmaW5lZCIsInRhZ05hbWUiLCJvYnNlcnZlIiwiaWRsZUNhbGxiYWNrIiwiZWxlbWVudCIsImNhbGxiYWNrIiwib2JzZXJ2ZXIiLCJlbGVtZW50cyIsImNyZWF0ZU9ic2VydmVyIiwiZGVsZXRlIiwic2l6ZSIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsIndpdGhSb3V0ZXIiLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImRpc3BsYXlOYW1lIiwibm9ybWFsaXplTG9jYWxlUGF0aCIsInBhdGhuYW1lIiwiZGV0ZWN0ZWRMb2NhbGUiLCJwYXRobmFtZVBhcnRzIiwic3BsaXQiLCJzb21lIiwidG9Mb3dlckNhc2UiLCJzcGxpY2UiLCJqb2luIiwibWl0dCIsImNyZWF0ZSIsImhhbmRsZXIiLCJwdXNoIiwib2ZmIiwiZW1pdCIsImV2dHMiLCJkZWxMb2NhbGUiLCJoYXNCYXNlUGF0aCIsImRlbEJhc2VQYXRoIiwiaW50ZXJwb2xhdGVBcyIsIl9ub3JtYWxpemVUcmFpbGluZ1NsYXNoIiwiX3JvdXRlTG9hZGVyIiwiX2Rlbm9ybWFsaXplUGFnZVBhdGgiLCJfbm9ybWFsaXplTG9jYWxlUGF0aCIsIl9taXR0IiwiX3V0aWxzIiwiX2lzRHluYW1pYyIsIl9wYXJzZVJlbGF0aXZlVXJsIiwiX3F1ZXJ5c3RyaW5nIiwiX3Jlc29sdmVSZXdyaXRlcyIsIl9yb3V0ZU1hdGNoZXIiLCJfcm91dGVSZWdleCIsIm9iaiIsIl9fZXNNb2R1bGUiLCJkZXRlY3REb21haW5Mb2NhbGUiLCJiYXNlUGF0aCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJhZGRQYXRoUHJlZml4IiwicHJlZml4Iiwic3RhcnRzV2l0aCIsInBhdGhOb1F1ZXJ5SGFzaCIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJVUkwiLCJvcmlnaW4iLCJhc1BhdGhuYW1lIiwicXVlcnkiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImdldFJvdXRlUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZ3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJnZXRSb3V0ZU1hdGNoZXIiLCJwYXJhbXMiLCJldmVyeSIsInBhcmFtIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJyZXBsYWNlZCIsInNlZ21lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXN1bHQiLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJmaWx0ZXJlZFF1ZXJ5IiwiaW5jbHVkZXMiLCJyZXNvbHZlQXMiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsImFzUGF0aCIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpc0R5bmFtaWNSb3V0ZSIsInNlYXJjaFBhcmFtcyIsInNlYXJjaFBhcmFtc1RvVXJsUXVlcnkiLCJoYXNoIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlVXJsQXMiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJwcmVwYXJlZFVybCIsInByZXBhcmVkQXMiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwicGFnZXMiLCJjbGVhblBhdGhuYW1lIiwiZGVub3JtYWxpemVQYWdlUGF0aCIsInBhZ2UiLCJyZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiZmV0Y2hSZXRyeSIsImF0dGVtcHRzIiwiY3JlZGVudGlhbHMiLCJqc29uIiwiZGF0YSIsIm5vdEZvdW5kIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJSb3V0ZXIiLCJjb25zdHJ1Y3RvciIsIl9wYXRobmFtZSIsIl9xdWVyeSIsIl9hcyIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwiQ29tcG9uZW50Iiwic3Vic2NyaXB0aW9uIiwiaXNGYWxsYmFjayIsImlzUHJldmlldyIsImNvbXBvbmVudHMiLCJzZGMiLCJzZHIiLCJzdWIiLCJjbGMiLCJfYnBzIiwiX3dyYXBBcHAiLCJpc1NzciIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJpc1JlYWR5IiwiX2lkeCIsIm9uUG9wU3RhdGUiLCJzdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiX19OIiwiZm9yY2VkU2Nyb2xsIiwiaWR4IiwicGFyc2VSZWxhdGl2ZVVybCIsImNoYW5nZSIsImluaXRpYWwiLCJfX05fU1NHIiwiX19OX1NTUCIsImF1dG9FeHBvcnREeW5hbWljIiwiX19ORVhUX0RBVEFfXyIsImF1dG9FeHBvcnQiLCJnc3NwIiwiZ2lwIiwibG9jYXRpb24iLCJzZWFyY2giLCJyZWxvYWQiLCJiYWNrIiwiaGlzdG9yeSIsIm1ldGhvZCIsInNob3VsZFJlc29sdmVIcmVmIiwiX2giLCJfc2hvdWxkUmVzb2x2ZUhyZWYiLCJsb2NhbGVDaGFuZ2UiLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsInJvdXRlUHJvcHMiLCJhYm9ydENvbXBvbmVudExvYWQiLCJjbGVhbmVkQXMiLCJvbmx5QUhhc2hDaGFuZ2UiLCJzY3JvbGxUb0hhc2giLCJub3RpZnkiLCJwYXJzZWQiLCJyZXdyaXRlcyIsImdldFBhZ2VMaXN0IiwiX19yZXdyaXRlcyIsInVybElzTmV3IiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsIl9zZWxmJF9fTkVYVF9EQVRBX18kcCIsIl9zZWxmJF9fTkVYVF9EQVRBX18kcDIiLCJfb3B0aW9ucyRzY3JvbGwiLCJyb3V0ZUluZm8iLCJnZXRSb3V0ZUluZm8iLCJwYWdlUHJvcHMiLCJfX05fUkVESVJFQ1QiLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJuZXdVcmwiLCJuZXdBcyIsIl9fTl9QUkVWSUVXIiwibm90Rm91bmRSb3V0ZSIsImZldGNoQ29tcG9uZW50IiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwic3RhdHVzQ29kZSIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJzaG91bGRTY3JvbGwiLCJyZXNldFNjcm9sbCIsIngiLCJ5IiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwiZ2lwRXJyIiwicm91dGVJbmZvRXJyIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJtb2QiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJnZXREYXRhSHJlZiIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJfZ2V0U2VydmVyRGF0YSIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJzY3JvbGxUbyIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJfaXNTc2ciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiY2FjaGVLZXkiLCJyZXNvdXJjZUtleSIsImN0eCIsIkFwcFRyZWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiZm9ybWF0VXJsIiwicXVlcnlzdHJpbmciLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJXZWFrTWFwIiwiY2FjaGUiLCJuZXdPYmoiLCJoYXNQcm9wZXJ0eURlc2NyaXB0b3IiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJkZXNjIiwic2xhc2hlZFByb3RvY29scyIsInVybE9iaiIsImF1dGgiLCJob3N0bmFtZSIsInByb3RvY29sIiwiaG9zdCIsInBvcnQiLCJTdHJpbmciLCJ1cmxRdWVyeVRvU2VhcmNoUGFyYW1zIiwic3Vic3RyIiwic2xhc2hlcyIsIlRFU1RfUk9VVEUiLCJnbG9iYWxCYXNlIiwicmVzb2x2ZWRCYXNlIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsImlzTmFOIiwidXJsUXVlcnkiLCJVUkxTZWFyY2hQYXJhbXMiLCJhcHBlbmQiLCJzZWFyY2hQYXJhbXNMaXN0IiwiZnJvbSIsImV4ZWMiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJjb2RlIiwic2x1Z05hbWUiLCJnIiwibSIsInBvcyIsImVzY2FwZVJlZ2V4Iiwic3RyIiwicGFyc2VQYXJhbWV0ZXIiLCJub3JtYWxpemVkUm91dGUiLCJzZWdtZW50cyIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwiZnJvbUNoYXJDb2RlIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwiUmVnRXhwIiwibmFtZWRSZWdleCIsImV4ZWNPbmNlIiwiZ2V0RGlzcGxheU5hbWUiLCJpc1Jlc1NlbnQiLCJfZm9ybWF0VXJsIiwidXNlZCIsImZpbmlzaGVkIiwiaGVhZGVyc1NlbnQiLCJfQXBwJHByb3RvdHlwZSIsInVybE9iamVjdEtleXMiLCJTUCIsIm1lYXN1cmUiLCJDb252ZXJzYXRpb25zIiwic29ja2V0Iiwic2V0UGFnZSIsInNldFByb2ZpbGUiLCJhY2NvdW50cyIsImlvIiwiY29uZmlndXJlU29ja2V0IiwicGFnZUlkIiwibmV3bXNnQ2IiLCJzZXRDb252IiwiZGV0YWlscyIsIkRhc2hib2FyZCIsInJjdmRfbXNnIiwib3RoZXJTZW5kZXJzIiwidGltZXN0YW1wIiwidG9JU09TdHJpbmciLCJzbmQiLCJyZWNlaXBlbnRJZCIsInJlY2VpdmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7O0FDTkEsY0FBYyxtQkFBTyxDQUFDLHNGQUErQjs7QUFFckQ7QUFDQTtBQUNBOztBQUVB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RCxJQUFVQSxJQUFJLENBQUNDLFNBQUwsSUFBa0J3bUIsV0FBN0MsQ0FBbkI7QUFDQSxRQUFNRCxHQUFHLEdBQUdFLFFBQVEsQ0FBQyxDQUFELENBQXBCO0FBQ0FBLFVBQVEsbUNBQ0pGLEdBREk7QUFFUHZsQixZQUFRLEVBQUUsQ0FDVCxHQUFHdWxCLEdBQUcsQ0FBQ3ZsQixRQURFLEVBRVQ7QUFDQzVDLFNBQUcsRUFBRWQsT0FETjtBQUVDNkQsVUFBSSxFQUFFLE1BRlA7QUFHQzFDLFVBQUksRUFBRSxJQUFJZ0ssSUFBSixHQUFXNmQsV0FBWDtBQUhQLEtBRlM7QUFGSCxJQUFSO0FBV0EsU0FBTyxDQUFDRyxRQUFELEVBQVcsR0FBR0wsWUFBZCxDQUFQO0FBQ0EsQ0FoQk0sQzs7Ozs7Ozs7Ozs7QUNuQ00sa0JBQWtCLE1BQU0sd0JBQXdCLGtCQUFrQiwyQkFBMkIscUJBQXFCLGdDQUFnQyxnQ0FBZ0MsbUNBQW1DLDRCQUE0QiwrQkFBK0Isb0JBQW9CLHlCQUF5QixVQUFVO0FBQ3BWLGlEOzs7Ozs7Ozs7O0FDREEseUdBQThDOzs7Ozs7Ozs7Ozs7QUNBOUMsbUM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6InBhZ2VzL2Rhc2hib2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbi8vY29ubmVjdGluZyBmcm9tIGJhY2tlbmRcclxuXHJcbi8vdG8gZ2V0IHVzZXIgcHJvZmlsZVxyXG5jb25zdCBmZXRjaFByb2ZpbGUgPSBhc3luYyAoZW1haWwsIGlkKSA9PiB7XHJcblx0Y29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG5cdFx0YGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvdXNlci8ke2VtYWlsfS9wcm9maWxlLyR7aWR9YCxcclxuXHQpO1xyXG5cdGlmIChyZXMpIHJldHVybiByZXM7XHJcblx0ZWxzZSByZXR1cm4ge307XHJcbn07XHJcblxyXG4vL3RvIHVwZGF0ZSB0aGUgdG9rZW4gaWYgZXhwaXJlZFxyXG5jb25zdCB1cGRhdGVUb2tlbiA9IGFzeW5jIChlbWFpbCwgYWNjZXNzVG9rZW4pID0+IHtcclxuXHRjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wdXQoXHJcblx0XHRgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS91c2VyLyR7ZW1haWx9L2FjY2Vzc3Rva2VuYCxcclxuXHRcdHtcclxuXHRcdFx0YWNjZXNzVG9rZW4sXHJcblx0XHR9LFxyXG5cdCk7XHJcblx0aWYgKHJlcykge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coXCJtc2dcIiwgcmVzKTtcclxuXHR9XHJcbn07XHJcblxyXG4vL2xhdGVzdCBhY2NvdW50IGRldGFpbFxyXG5jb25zdCBnZXRBY2NvdW50ID0gYXN5bmMgKGVtYWlsKSA9PiB7XHJcblx0Y29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG5cdFx0YGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvdXNlci8ke2VtYWlsfS9hY2NvdW50c2AsXHJcblx0KTtcclxuXHRpZiAocmVzKSB7XHJcblx0XHRyZXR1cm4gcmVzO1xyXG5cdH1cclxuXHRyZXR1cm4ge307XHJcbn07XHJcblxyXG5cclxuLy90byBzZW5kIHRoZSBtZXNzYWdlIHRvIGJhY2tlbmRcclxuY29uc3Qgc2VuZE1lc3NhZ2UgPSBhc3luYyAoZW1haWwsIG1lc3NhZ2UsIHJlY2lwaWVudElkKSA9PiB7XHJcblx0Y29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChcclxuXHRcdGBodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3dlYmhvb2svJHtlbWFpbH0vc2VuZF9tZXNzYWdlYCxcclxuXHRcdHtcclxuXHRcdFx0cmVjaXBpZW50SWQsXHJcblx0XHRcdG1lc3NhZ2UsXHJcblx0XHR9LFxyXG5cdCk7XHJcblx0aWYgKHJlcy5zdGF0dXMgIT0gMjAwKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIlNvbWUgZXJyb3Igb2NjdXJlZFwiKTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgeyB1cGRhdGVUb2tlbiwgZ2V0QWNjb3VudCwgZmV0Y2hQcm9maWxlLCBzZW5kTWVzc2FnZSB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFByb2ZpbGUgPSBhc3luYyAoZW1haWwpID0+IHtcclxuXHRjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvdXNlci8ke2VtYWlsfS9tZWApO1xyXG5cdGlmIChyZXMpIHtcclxuXHRcdHJldHVybiByZXM7XHJcblx0fVxyXG5cdHJldHVybiB7fTtcclxufTtcclxuIiwiaW1wb3J0IHsgYXRvbSB9IGZyb20gXCJyZWNvaWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBwYWdlU3RhdGUgPSBhdG9tKHtcclxuXHRrZXk6IFwicGFnZVN0YXRlXCIsXHJcblx0ZGVmYXVsdDoge30sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbnZlcnNhdGlvblN0YXRlID0gYXRvbSh7XHJcblx0a2V5OiBcImNvbnZTdGF0ZVwiLFxyXG5cdGRlZmF1bHQ6IFtdLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhY3RpdmVDb252U3RhdGUgPSBhdG9tKHtcclxuXHRrZXk6IFwiYWN0aXZlQ29udlwiLFxyXG5cdGRlZmF1bHQ6IHt9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9maWxlU3RhdGUgPSBhdG9tKHtcclxuXHRrZXk6IFwiUHJvZmlsZVwiLFxyXG5cdGRlZmF1bHQ6IHt9LFxyXG59KTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSZWNvaWxTdGF0ZSwgdXNlUmVjb2lsVmFsdWUgfSBmcm9tIFwicmVjb2lsXCI7XHJcbmltcG9ydCB7XHJcblx0YWN0aXZlQ29udlN0YXRlLFxyXG5cdGNvbnZlcnNhdGlvblN0YXRlLFxyXG5cdHByb2ZpbGVTdGF0ZSxcclxufSBmcm9tIFwiLi4vLi4vYXRvbXMvYXRvbVwiO1xyXG5pbXBvcnQgeyBzZW5kTWVzc2FnZSB9IGZyb20gXCIuLi8uLi9hcGlcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmltcG9ydCBTZW5kZXJQcm9maWxlIGZyb20gXCIuL3NlbmRlclByb2ZpbGVcIjtcclxuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XHJcbmltcG9ydCB7IHNldFNlbmRDb252IH0gZnJvbSBcIi4uLy4uL3V0aWxzL2hlbHBlcnNcIjtcclxuXHJcbmNvbnN0IExlZnRNc2cgPSAoeyBtc2csIHNlbmRlciB9KSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxsaSBjbGFzc05hbWU9J2xlZnQgdy0xLzIgc2VsZi1zdGFydCBmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTMnPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbXNnIHctZnVsbCBmbGV4IGZsZXgtY29sIHNwYWNlLXktMic+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTExIGl0ZW1zLWVuZCAganVzdGlmeS1lbmQnPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3NlbmRlci1pbWcgY29sLXNwYW4tMiBmbGV4IGp1c3RpZnktc3RhcnQnPlxyXG5cdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdFx0c3JjPXtzZW5kZXIucHJvZmlsZV9waWN9XHJcblx0XHRcdFx0XHRcdFx0YWx0PSdzZW5kZXItaW1nJ1xyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0ncm91bmRlZC1mdWxsIGgtOSdcclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9JyBjb2wtc3Bhbi05IGZsZXgganVzdGlmeS1zdGFydCc+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0nYmctd2hpdGUgdGV4dCAgcC00IHJvdW5kZWQtbGcgc2hhZG93LW1kIHctbWF4Jz5cclxuXHRcdFx0XHRcdFx0XHR7bXNnLm1zZ31cclxuXHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0Ly9UaW1lIHN0YW1wIGFzIGFza2VkIGluIHRoZSBhc3NpZ25tZW50XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2RhdGUtdGltZSB0ZXh0LXNtIHRleHQtbGVmdCc+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J2ZvbnQtc2VtaWJvbGQnPntzZW5kZXIuZmlyc3RfbmFtZX08L3NwYW4+IC17XCIgXCJ9XHJcblx0XHRcdFx0XHR7bW9tZW50KG1zZy50aW1lKS5mb3JtYXQoXCJNTU0gRCwgaC5tbSBhXCIpfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvbGk+XHJcblx0KTtcclxufTtcclxuXHJcbmNvbnN0IFJpZ2h0TXNnID0gKHsgbXNnLCBzZW5kZXIgfSkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8bGkgY2xhc3NOYW1lPSdyaWdodCB3LTEvMiBzZWxmLWVuZCBmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTMnPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbXNnIHctZnVsbCBmbGV4IGZsZXgtY29sIHNwYWNlLXktMic+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTExIGl0ZW1zLWVuZCBzcGFjZS14LTIganVzdGlmeS1lbmQnPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9JyBjb2wtc3Bhbi05IGZsZXgganVzdGlmeS1lbmQnPlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J2JnLXdoaXRlIHRleHQgIHAtNCByb3VuZGVkLWxnIHNoYWRvdy1tZCB3LW1heCc+XHJcblx0XHRcdFx0XHRcdFx0e21zZy5tc2d9XHJcblx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3NlbmRlci1pbWcgY29sLXNwYW4tMiBmbGV4IGp1c3RpZnktZW5kJz5cclxuXHRcdFx0XHRcdC8vcHJvZmlsZSBpbWFnZSBvZiB0aGUgdXNlclxyXG5cdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdFx0c3JjPXtzZW5kZXIuaW1hZ2V9XHJcblx0XHRcdFx0XHRcdFx0YWx0PSdzZW5kZXItaW1nJ1xyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0ncm91bmRlZC1mdWxsIGgtOSdcclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdC8vVXNlciBuYW1lXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2RhdGUtdGltZSB0ZXh0LXNtIHRleHQtcmlnaHQnPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSdmb250LXNlbWlib2xkJz57c2VuZGVyLm5hbWV9PC9zcGFuPiAte1wiIFwifVxyXG5cdFx0XHRcdFx0e21vbWVudChtc2cudGltZSkuZm9ybWF0KFwiTU1NIEQsIGgubW0gYVwiKX1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2xpPlxyXG5cdCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBDb252ZXJzYXRpb24oeyBjbGFzc05hbWUgfSkge1xyXG5cdGNvbnN0IFtzZXNzaW9uLCBsb2FkaW5nXSA9IHVzZVNlc3Npb24oKTtcclxuXHRjb25zdCBbY29udlN0YXRlLCBzZXRDb252U3RhdGVdID0gdXNlUmVjb2lsU3RhdGUoY29udmVyc2F0aW9uU3RhdGUpO1xyXG5cdGNvbnN0IFthY3RpdmVDb252LCBzZXRBY3RpdmVDb252XSA9IHVzZVJlY29pbFN0YXRlKGFjdGl2ZUNvbnZTdGF0ZSk7XHJcblx0Y29uc3QgcHJvZmlsZSA9IHVzZVJlY29pbFZhbHVlKHByb2ZpbGVTdGF0ZSk7XHJcblx0Y29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuXHRjb25zdCBmb3JtID0gUmVhY3QudXNlUmVmKCk7XHJcblxyXG5cdFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRzZXRBY3RpdmVDb252KChhY3RpdmVDb252KSA9PiAoe1xyXG5cdFx0XHQuLi5jb252U3RhdGVcclxuXHRcdFx0XHQuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnNlbmRlcl9pZCA9PT0gYWN0aXZlQ29udi5zZW5kZXJfaWQpXHJcblx0XHRcdFx0LnBvcCgpLFxyXG5cdFx0fSkpO1xyXG5cdH0sIFtjb252U3RhdGVdKTtcclxuXHJcblx0Ly9zZW5kaW5nIG1lc3NhZ2VzXHJcblx0Y29uc3Qgc2VuZE1zZyA9IGFzeW5jIChlbWFpbCwgbXNnLCBpZCkgPT4ge1xyXG5cdFx0YXdhaXQgc2VuZE1lc3NhZ2UoZW1haWwsIG1zZywgaWQpO1xyXG5cdFx0c2V0Q29udlN0YXRlKChjb252U3RhdGUpID0+IHNldFNlbmRDb252KGNvbnZTdGF0ZSwgbXNnLCBpZCkpO1xyXG5cdH07XHJcblx0Y29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdHNlbmRNc2coc2Vzc2lvbi51c2VyLmVtYWlsLCBlLnRhcmdldFswXS52YWx1ZSwgYWN0aXZlQ29udi5zZW5kZXJfaWQpO1xyXG5cdFx0Zm9ybS5jdXJyZW50LnJlc2V0KCk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxSZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZSArIFwiIGgtc2NyZWVuIGJnLXJlZC01MCBiZy1vcGFjaXR5LTcwIHJlbGF0aXZlXCJ9PlxyXG5cdFx0XHRcdHtPYmplY3Qua2V5cyhhY3RpdmVDb252KS5sZW5ndGggPiAwICYmIChcclxuXHRcdFx0XHRcdDxSZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RpdGxlIHRleHQtMnhsIGZvbnQtc2VtaWJvbGQgYm9yZGVyLTEgYmctd2hpdGUgYm9yZGVyLWdyYXktMjAwIHB5LTQgcHgtNic+XHJcblx0XHRcdFx0XHRcdFx0e2FjdGl2ZUNvbnYudXNlci5maXJzdF9uYW1lICsgXCIgXCIgKyBhY3RpdmVDb252LnVzZXIubGFzdF9uYW1lfVxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NoYXRzIHctZnVsbCBoLWZ1bGwnPlxyXG5cdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9J3ctYXV0byBmbGV4IGZsZXgtY29sIHAtNCBoLTUvNiBvdmVyZmxvdy1hdXRvJz5cclxuXHRcdFx0XHRcdFx0XHRcdHthY3RpdmVDb252Py5tZXNzYWdlcz8ubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gaXRlbS50eXBlID09PSBcInJlY2VpdmVkXCIgPyAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PExlZnRNc2cgbXNnPXtpdGVtfSBrZXk9e2luZGV4fSBzZW5kZXI9e2FjdGl2ZUNvbnYudXNlcn0gLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8UmlnaHRNc2cgbXNnPXtpdGVtfSBrZXk9e2luZGV4fSBzZW5kZXI9e3Byb2ZpbGV9IC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9KX1cclxuXHRcdFx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdFx0XHRcdDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IHJlZj17Zm9ybX0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0naW5wdXQgdy1mdWxsIGFic29sdXRlIGJvdHRvbS0zIHB4LTMgZmxleCBzcGFjZS14LTInPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0ndy1mdWxsIGJvcmRlci0xIHAtMydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nRW50ZXIgTWVzc2FnZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvblN1Ym1pdD17KGUpID0+IChlLnRhcmdldC52YWx1ZSA9IFwiXCIpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nc3VibWl0J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17aW5wdXR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2lucHV0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nYm9yZGVyLTEgYm9yZGVyLXNvbGlkIGJvcmRlci1ncmF5LTYwMCByb3VuZGVkLWxnIHB4LTIgaGlkZGVuJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRTdWJtaXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Zvcm0+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0XHQpfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0e09iamVjdC5rZXlzKGFjdGl2ZUNvbnYpLmxlbmd0aCA+IDAgPyAoXHJcblx0XHRcdFx0PFNlbmRlclByb2ZpbGUgY2xhc3NOYW1lPSdjb2wtc3Bhbi0zJyAvPlxyXG5cdFx0XHQpIDogKFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdiZy1yZWQtNTAgYmctb3BhY2l0eS03MCBjb2wtc3Bhbi0zJz48L2Rpdj5cclxuXHRcdFx0KX1cclxuXHRcdDwvUmVhY3QuRnJhZ21lbnQ+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udmVyc2F0aW9uO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJlY29pbFZhbHVlIH0gZnJvbSBcInJlY29pbFwiO1xyXG5pbXBvcnQgeyBhY3RpdmVDb252U3RhdGUgfSBmcm9tIFwiLi4vLi4vYXRvbXMvYXRvbVwiO1xyXG5pbXBvcnQgeyBVc2VyLCBDYWxsIH0gZnJvbSBcIi4uL2ljb25zXCI7XHJcblxyXG5mdW5jdGlvbiBTZW5kZXJQcm9maWxlKHsgY2xhc3NOYW1lIH0pIHtcclxuXHRjb25zdCBhY3RpdmVDb252ID0gdXNlUmVjb2lsVmFsdWUoYWN0aXZlQ29udlN0YXRlKTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZSArIFwiIGJnLWdyYXktMjAwIGJnLW9wYWNpdHktNjBcIn0+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcm9maWxlIHAtMTAgdy1mdWxsIHRleHQtY2VudGVyIGZsZXggZmxleC1jb2wgc3BhY2UteS01IGJnLXdoaXRlJz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0naW1hZ2UgZmxleCBqdXN0aWZ5LWNlbnRlcic+XHJcblx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdHNyYz17YWN0aXZlQ29udi51c2VyLnByb2ZpbGVfcGljfVxyXG5cdFx0XHRcdFx0XHRhbHQ9J3NlbmRlcmltYWdlJ1xyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J3JvdW5kZWQtZnVsbCBoLTIwJ1xyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbmFtZS1zdGF0dXMnPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J25hbWUgdGV4dC0yeGwgZm9udC1zZW1pYm9sZCc+XHJcblx0XHRcdFx0XHRcdHthY3RpdmVDb252LnVzZXIuZmlyc3RfbmFtZSArIFwiIFwiICsgYWN0aXZlQ29udi51c2VyLmxhc3RfbmFtZX1cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3N0YXR1cyB0ZXh0LWdyYXktNDAwIGZvbnQtc2VtaWJvbGQgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgc3BhY2UteC0yJz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2JhZGdlIGJnLWdyYXktNDAwIHctMiBoLTIgcm91bmRlZC1mdWxsJz48L2Rpdj57XCIgXCJ9XHJcblx0XHRcdFx0XHRcdDxkaXY+T2ZmbGluZTwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2J1dHRvbnMgZmxleCBzcGFjZS14LTIganVzdGlmeS1jZW50ZXInPlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9J2NhbGwtYnV0dG9uIGZsZXggc3BhY2UteC0xIHB4LTQgcHktMiBmb250LWJvbGQgdGV4dC1ncmF5LTYwMCBib3JkZXItMSBib3JkZXItc29saWQgYm9yZGVyLWdyYXktNjAwIHJvdW5kZWQtbWQnPlxyXG5cdFx0XHRcdFx0XHQ8Q2FsbCBmaWxsPScjMDAwJyBjbGFzc05hbWU9J2gtNicgLz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3R4dCc+Q2FsbDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT0ncHJvZmlsZS1idXR0b24gZmxleCBzcGFjZS14LTEgcHgtNCBweS0yIGZvbnQtYm9sZCB0ZXh0LWdyYXktNjAwIGJvcmRlci0xIGJvcmRlci1zb2xpZCBib3JkZXItZ3JheS02MDAgcm91bmRlZC1tZCc+XHJcblx0XHRcdFx0XHRcdDxVc2VyIGNsYXNzTmFtZT0naC02JyAvPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndHh0Jz5Qcm9maWxlPC9kaXY+XHJcblx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdC8vc2lkZSBQcm9maWxlIHZpZXdcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcmRzIHAtMic+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2luZm8tY2FyZCBiZy13aGl0ZSByb3VuZGVkLW1kIHAtNCc+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGl0bGUgZm9udC1zZW1pYm9sZCB0ZXh0LXhsJz5DdXN0b21lciBkZXRhaWxzPC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGFibGUgdy1mdWxsJz5cclxuXHRcdFx0XHRcdFx0PHRhYmxlIGNsYXNzTmFtZT0ndy1mdWxsJz5cclxuXHRcdFx0XHRcdFx0XHQ8dGJvZHk+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dHIgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0xMCBweS0yJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzTmFtZT0nY29sLXNwYW4tNSB0ZXh0LWdyYXktNDAwIGZvbnQtc2VtaWJvbGQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdEVtYWlsXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBjbGFzc05hbWU9J2NvbC1zcGFuLTUgdGV4dC1yaWdodCBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRleGFtcGxlQGdtYWlsLmNvbVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdFx0XHRcdDx0ciBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTEwIHB5LTInPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGQgY2xhc3NOYW1lPSdjb2wtc3Bhbi01IHRleHQtZ3JheS00MDAgZm9udC1zZW1pYm9sZCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Rmlyc3QgTmFtZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGQgY2xhc3NOYW1lPSdjb2wtc3Bhbi01IHRleHQtcmlnaHQgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e2FjdGl2ZUNvbnYudXNlci5maXJzdF9uYW1lfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdFx0XHRcdDx0ciBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTEwIHB5LTInPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGQgY2xhc3NOYW1lPSdjb2wtc3Bhbi01IHRleHQtZ3JheS00MDAgZm9udC1zZW1pYm9sZCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0TGFzdCBOYW1lXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBjbGFzc05hbWU9J2NvbC1zcGFuLTUgdGV4dC1yaWdodCBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7YWN0aXZlQ29udi51c2VyLmxhc3RfbmFtZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHRcdFx0PC90Ym9keT5cclxuXHRcdFx0XHRcdFx0PC90YWJsZT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3ZpZXctZGV0YWlscyBtdC0zJz5cclxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9J2ZvbnQtc2VtaWJvbGQgdGV4dC1sZyB0ZXh0LXByaW1hcnknPlxyXG5cdFx0XHRcdFx0XHRcdFZpZXcgbW9yZSBkZXRhaWxzXHJcblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VuZGVyUHJvZmlsZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBSZWZyZXNoIH0gZnJvbSBcIi4uL2ljb25zXCI7XHJcbmltcG9ydCB7IGNvbnZlcnNhdGlvblN0YXRlLCBhY3RpdmVDb252U3RhdGUgfSBmcm9tIFwiLi4vLi4vYXRvbXMvYXRvbVwiO1xyXG5pbXBvcnQgeyB1c2VSZWNvaWxTdGF0ZSwgdXNlUmVjb2lsVmFsdWUgfSBmcm9tIFwicmVjb2lsXCI7XHJcblxyXG5cclxuLy8gbGlzdGluZyBvZiB0aGUgdXNlcnMgaW4gdGhlIGNoYXQgYmFzZWQgb24gdGhlIGxhc3Rlc3QgbWVzc2FnZVxyXG5mdW5jdGlvbiBVc2VyTGlzdGluZyh7IGNsYXNzTmFtZSB9KSB7XHJcblx0Y29uc3QgY29udlN0YXRlID0gdXNlUmVjb2lsVmFsdWUoY29udmVyc2F0aW9uU3RhdGUpO1xyXG5cdGNvbnN0IFthY3RpdmVDb252LCBzZXRBY3RpdmVDb252XSA9IHVzZVJlY29pbFN0YXRlKGFjdGl2ZUNvbnZTdGF0ZSk7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWUgKyBcIiB3LWZ1bGwgIGgtc2NyZWVuXCJ9PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nYmFyIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBib3JkZXItZ3JheS0zMDAgYm9yZGVyLWItMSBweS01IHB4LTQnPlxyXG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0nZm9udC1zZW1pYm9sZCB0ZXh0LXhsJz5DaGF0czwvc3Bhbj5cclxuXHRcdFx0XHQ8UmVmcmVzaCBjbGFzc05hbWU9J2gtNicgZmlsbD0nbm9uZScgLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdHtjb252U3RhdGUubGVuZ3RoID8gKFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdsaXN0Jz5cclxuXHRcdFx0XHRcdDx1bD5cclxuXHRcdFx0XHRcdFx0e2NvbnZTdGF0ZS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0XHRcdDxsaVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRrZXk9e2luZGV4fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coaXRlbS5zZW5kZXJfaWQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldEFjdGl2ZUNvbnYoKGFjdGl2ZUNvbnZTdGF0ZSkgPT4gaXRlbSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0naC1hdXRvIHAtNCBib3JkZXItMSBib3JkZXItc29saWQgYm9yZGVyLWdyYXktMjAwJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0naGVhZCBncmlkIGdyaWQtY29scy0xMCBpdGVtcy1jZW50ZXIgbWItMic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nY2hlY2tib3gnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nY29sLXNwYW4tMSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT0nJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZD0nJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vZGlzcGxheWluZyB0aGUgZGV0YWlsc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J25hbWUtdHlwZSBjb2wtc3Bhbi04IHRleHQtbGVmdCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSduYW1lIGZvbnQtc2VtaWJvbGQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtpdGVtLnVzZXIuZmlyc3RfbmFtZSArIFwiIFwiICsgaXRlbS51c2VyLmxhc3RfbmFtZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0eXBlIGZvbnQtbWVkaXVtJz5GYWNlYm9vayBETTwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZWxhcHNlIGNvbC1zcGFuLTEnPjEwbTwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0fSl9XHJcblx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpIDogKFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgcHktMTAgdGV4dC1jZW50ZXInPk5vIHBlbmRpbmcgY2hhdHM8L2Rpdj5cclxuXHRcdFx0KX1cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJMaXN0aW5nO1xyXG4iLCIvL1NpZGUgbGF5b3V0IGFzIHBlciB0aGUgZG9jdW1lbnRcclxuaW1wb3J0IExvZ28gZnJvbSBcIi4uLy4uL2ljb25zL2xvZ29cIjtcclxuaW1wb3J0IHsgUGVvcGxlLCBDaGF0cywgQ2hhcnQsIExvZ291dCB9IGZyb20gXCIuLi8uLi9pY29uc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVNlc3Npb24sIHNpZ25PdXQgfSBmcm9tIFwibmV4dC1hdXRoL2NsaWVudFwiO1xyXG5pbXBvcnQgcm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuZnVuY3Rpb24gU2lkZWJhcih7IGFjdGl2ZSB9KSB7XHJcblx0Y29uc3QgW3Nlc3Npb24sIGxvYWRpbmddID0gdXNlU2Vzc2lvbigpO1xyXG5cdGNvbnN0IHNldFRhYiA9ICh2YWwpID0+IHtcclxuXHRcdHNldEFjdGl2ZSh2YWwpO1xyXG5cdH07XHJcblx0aWYgKCFzZXNzaW9uICYmICFsb2FkaW5nKSB7XHJcblx0XHRyb3V0ZXIucHVzaChcIi9cIik7XHJcblx0fVxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nc2lkZWJhciBiZy1wcmltYXJ5IGJnLW9wYWNpdHktOTkgaC1mdWxsIGZpeGVkIGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuJz5cclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbG9nbyBwLTUnPlxyXG5cdFx0XHRcdFx0PExvZ28gY2xhc3NOYW1lPSdoLTggbXgtYXV0byc+SG9tZTwvTG9nbz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J21lbnUnPlxyXG5cdFx0XHRcdFx0PHVsPlxyXG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPScvZGFzaGJvYXJkL2NvbnZlcnNhdGlvbnMnPlxyXG5cdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9e2FjdGl2ZSA9PSBcImNvbnZcIiA/IFwiYmctd2hpdGUgcHktM1wiIDogXCJweS0zXCJ9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PENoYXRzXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0naC04IG14LWF1dG8gcC0xJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRmaWxsPXthY3RpdmUgPT0gXCJjb252XCIgPyBcImJsYWNrXCIgOiBcIndoaXRlXCJ9XHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2ljb25zLWRvd24nPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzaWdub3V0IHRleHQtY2VudGVyJz5cclxuXHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17KCkgPT4gc2lnbk91dCgpfT5cclxuXHRcdFx0XHRcdFx0PExvZ291dCBjbGFzc05hbWU9J2gtOCcgZmlsbD0nI2ZmZicgLz5cclxuXHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd1c2VyIHAtNSc+XHJcblx0XHRcdFx0XHQ8TGluayBocmVmPScvcHJvZmlsZSc+XHJcblx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRzcmM9J2h0dHBzOi8vY2RuLmpldGNvbW1lcmNlLmlvL3dwLWNvbnRlbnQvdXBsb2Fkcy9zaXRlcy8xMS8yMDE4LzAzLzE1MTQ1NjIxL1JpY2hwYW5lbC1JY29uLUJsdWUucG5nJ1xyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0naC0xMCByb3VuZGVkLWZ1bGwgbXgtYXV0bydcclxuXHRcdFx0XHRcdFx0XHRhbHQ9J3VzZXInXHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gQ2FsbCh7IGNsYXNzTmFtZSwgZmlsbCB9KSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxzdmdcclxuXHRcdFx0eG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG5cdFx0XHRjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuXHRcdFx0dmlld0JveD0nMCAwIDUxMiA1MTInPlxyXG5cdFx0XHQ8dGl0bGU+aW9uaWNvbnMtdjUtZzwvdGl0bGU+XHJcblx0XHRcdDxwYXRoXHJcblx0XHRcdFx0ZD0nTTQ1MSwzNzRjLTE1Ljg4LTE2LTU0LjM0LTM5LjM1LTczLTQ4Ljc2QzM1My43LDMxMywzNTEuNywzMTIsMzMyLjYsMzI2LjE5Yy0xMi43NCw5LjQ3LTIxLjIxLDE3LjkzLTM2LjEyLDE0Ljc1cy00Ny4zMS0yMS4xMS03NS42OC00OS4zOS00Ny4zNC02MS42Mi01MC41My03Ni40OCw1LjQxLTIzLjIzLDE0Ljc5LTM2YzEzLjIyLTE4LDEyLjIyLTIxLC45Mi00NS4zLTguODEtMTguOS0zMi44NC01Ny00OC45LTcyLjhDMTE5LjksNDQsMTE5LjksNDcsMTA4LjgzLDUxLjZBMTYwLjE1LDE2MC4xNSwwLDAsMCw4Myw2NS4zN0M2Nyw3Niw1OC4xMiw4NC44Myw1MS45MSw5OC4xcy05LDQ0LjM4LDIzLjA3LDEwMi42NCw1NC41Nyw4OC4wNSwxMDEuMTQsMTM0LjQ5UzI1OC41LDQwNi42NCwzMTAuODUsNDM2YzY0Ljc2LDM2LjI3LDg5LjYsMjkuMiwxMDIuOTEsMjNzMjIuMTgtMTUsMzIuODMtMzFhMTU5LjA5LDE1OS4wOSwwLDAsMCwxMy44LTI1LjhDNDY1LDM5MS4xNyw0NjgsMzkxLjE3LDQ1MSwzNzRaJ1xyXG5cdFx0XHRcdGZpbGw9J25vbmUnXHJcblx0XHRcdFx0c3Ryb2tlPXtmaWxsfVxyXG5cdFx0XHRcdHN0cm9rZU1pdGVybGltaXQ9JzEwJ1xyXG5cdFx0XHRcdHN0cm9rZVdpZHRoPSczMnB4J1xyXG5cdFx0XHQvPlxyXG5cdFx0PC9zdmc+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FsbDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBDaGFydCh7IGNsYXNzTmFtZSwgZmlsbCB9KSB7XG5cdHJldHVybiAoXG5cdFx0PHN2Z1xuXHRcdFx0eG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuXHRcdFx0Y2xhc3NOYW1lPXtjbGFzc05hbWV9XG5cdFx0XHR2aWV3Qm94PScwIDAgNTEyIDUxMic+XG5cdFx0XHQ8dGl0bGU+aW9uaWNvbnMtdjUtcDwvdGl0bGU+XG5cdFx0XHQ8cG9seWdvblxuXHRcdFx0XHRwb2ludHM9JzQ5NiA0OTYgMTYgNDk2IDE2IDE2IDQ4IDE2IDQ4IDQ2NCA0OTYgNDY0IDQ5NiA0OTYnXG5cdFx0XHRcdGZpbGw9e2ZpbGx9XG5cdFx0XHQvPlxuXHRcdFx0PHBhdGggZD0nTTE5Miw0MzJIODBWMjA4SDE5MlonIGZpbGw9e2ZpbGx9IC8+XG5cdFx0XHQ8cGF0aCBkPSdNMzM2LDQzMkgyMjRWMTYwSDMzNlonIGZpbGw9e2ZpbGx9IC8+XG5cdFx0XHQ8cGF0aCBkPSdNNDc5LjY0LDQzMmgtMTEyVjk2aDExMlonIGZpbGw9e2ZpbGx9IC8+XG5cdFx0PC9zdmc+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXJ0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gQ2hhdHMoeyBjbGFzc05hbWUsIGZpbGwgfSkge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8c3ZnXHJcblx0XHRcdHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcclxuXHRcdFx0Y2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcblx0XHRcdHZpZXdCb3g9JzAgMCA1MTIgNTEyJz5cclxuXHRcdFx0PHRpdGxlPmlvbmljb25zLXY1LXE8L3RpdGxlPlxyXG5cdFx0XHQ8cGF0aFxyXG5cdFx0XHRcdGZpbGw9e2ZpbGx9XHJcblx0XHRcdFx0ZD0nTTQ1Niw0OEg1NkEyNCwyNCwwLDAsMCwzMiw3MlYzNjBhMjQsMjQsMCwwLDAsMjQsMjRoNzJ2ODBsMTE3Ljc0LTgwSDQ1NmEyNCwyNCwwLDAsMCwyNC0yNFY3MkEyNCwyNCwwLDAsMCw0NTYsNDhaTTE2MCwyNDhhMzIsMzIsMCwxLDEsMzItMzJBMzIsMzIsMCwwLDEsMTYwLDI0OFptOTYsMGEzMiwzMiwwLDEsMSwzMi0zMkEzMiwzMiwwLDAsMSwyNTYsMjQ4Wm05NiwwYTMyLDMyLDAsMSwxLDMyLTMyQTMyLDMyLDAsMCwxLDM1MiwyNDhaTTQ1Niw4MGgwWidcclxuXHRcdFx0Lz5cclxuXHRcdDwvc3ZnPlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXRzO1xyXG4iLCJpbXBvcnQgUmVmcmVzaCBmcm9tIFwiLi9yZWZyZXNoXCI7XHJcbmltcG9ydCBMb2dvIGZyb20gXCIuL2xvZ29cIjtcclxuaW1wb3J0IENoYXJ0IGZyb20gXCIuL2NoYXJ0XCI7XHJcbmltcG9ydCBDaGF0cyBmcm9tIFwiLi9jaGF0c1wiO1xyXG5pbXBvcnQgUGVvcGxlIGZyb20gXCIuL3Blb3BsZVwiO1xyXG5pbXBvcnQgQ2FsbCBmcm9tIFwiLi9jYWxsXCI7XHJcbmltcG9ydCBVc2VyIGZyb20gXCIuL3VzZXJcIjtcclxuaW1wb3J0IExvZ291dCBmcm9tIFwiLi9sb2dvdXRcIjtcclxuaW1wb3J0IExvZ2luIGZyb20gXCIuL2xvZ2luXCI7XHJcblxyXG5leHBvcnQgeyBSZWZyZXNoLCBMb2dvLCBDaGFydCwgQ2hhdHMsIFBlb3BsZSwgQ2FsbCwgVXNlciwgTG9nb3V0LCBMb2dpbiB9O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBMb2dpbih7IGNsYXNzTmFtZSwgZmlsbCB9KSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxzdmdcclxuXHRcdFx0eG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG5cdFx0XHRjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuXHRcdFx0dmlld0JveD0nMCAwIDUxMiA1MTInPlxyXG5cdFx0XHQ8dGl0bGU+aW9uaWNvbnMtdjUtbzwvdGl0bGU+XHJcblx0XHRcdDxwYXRoXHJcblx0XHRcdFx0ZD0nTTE5MiwxNzZWMTM2YTQwLDQwLDAsMCwxLDQwLTQwSDM5MmE0MCw0MCwwLDAsMSw0MCw0MFYzNzZhNDAsNDAsMCwwLDEtNDAsNDBIMjQwYy0yMi4wOSwwLTQ4LTE3LjkxLTQ4LTQwVjMzNidcclxuXHRcdFx0XHRmaWxsPXtcIm5vbmVcIn1cclxuXHRcdFx0XHRzdHJva2U9e2ZpbGx9XHJcblx0XHRcdFx0c3Ryb2tlTGluZWNhcD0ncm91bmQnXHJcblx0XHRcdFx0c3Ryb2tlTGluZWpvaW49J3JvdW5kJ1xyXG5cdFx0XHRcdHN0cm9rZVdpZHRoPSc0MHB4J1xyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8cG9seWxpbmVcclxuXHRcdFx0XHRwb2ludHM9JzI4OCAzMzYgMzY4IDI1NiAyODggMTc2J1xyXG5cdFx0XHRcdGZpbGw9e1wibm9uZVwifVxyXG5cdFx0XHRcdHN0cm9rZT17ZmlsbH1cclxuXHRcdFx0XHRzdHJva2VMaW5lY2FwPSdyb3VuZCdcclxuXHRcdFx0XHRzdHJva2VMaW5lam9pbj0ncm91bmQnXHJcblx0XHRcdFx0c3Ryb2tlV2lkdGg9JzQwcHgnXHJcblx0XHRcdC8+XHJcblx0XHRcdDxsaW5lXHJcblx0XHRcdFx0eDE9JzgwJ1xyXG5cdFx0XHRcdHkxPScyNTYnXHJcblx0XHRcdFx0eDI9JzM1MidcclxuXHRcdFx0XHR5Mj0nMjU2J1xyXG5cdFx0XHRcdGZpbGw9e1wibm9uZVwifVxyXG5cdFx0XHRcdHN0cm9rZT17ZmlsbH1cclxuXHRcdFx0XHRzdHJva2VMaW5lY2FwPSdyb3VuZCdcclxuXHRcdFx0XHRzdHJva2VMaW5lam9pbj0ncm91bmQnXHJcblx0XHRcdFx0c3Ryb2tlV2lkdGg9JzQwcHgnXHJcblx0XHRcdC8+XHJcblx0XHQ8L3N2Zz5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gTG9nbyh7IGNsYXNzTmFtZSB9KSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxzdmdcclxuXHRcdFx0eG1sbnM9J2h0dHBzOi8vY2RuLmpldGNvbW1lcmNlLmlvL3dwLWNvbnRlbnQvdXBsb2Fkcy9zaXRlcy8xMS8yMDE4LzAzLzE1MTQ1NjIxL1JpY2hwYW5lbC1JY29uLUJsdWUucG5nJ1xyXG5cdFx0XHRjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuXHRcdFx0dmlld0JveD0nMCAwIDI1MCAyNTAnPlxyXG5cdFx0XHQ8ZyBpZD0nUmljaHBhbmVsX0xvZ29fSG9yaXpvbnRhbF9Db2xvcicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTQxIC0xMDgpJz5cclxuXHRcdFx0XHQ8cGF0aFxyXG5cdFx0XHRcdFx0aWQ9J0VsbGlwc2VfMV9jb3B5XzMnXHJcblx0XHRcdFx0XHRkYXRhLW5hbWU9J0VsbGlwc2UgMSBjb3B5IDMnXHJcblx0XHRcdFx0XHRkPSdNMjcxLjE4NSwzNThINjAuMjYyQTE5LjI4NCwxOS4yODQsMCwwLDEsNDEsMzM4Ljd2LTIxMS40QTE5LjI4NCwxOS4yODQsMCwwLDEsNjAuMjYyLDEwOEgyNzEuMTg1YTE5LjI4NCwxOS4yODQsMCwwLDEsMTkuMjYzLDE5LjMwNVYzMzguN0ExOS4yODQsMTkuMjg0LDAsMCwxLDI3MS4xODUsMzU4WidcclxuXHRcdFx0XHRcdGZpbGw9JyNmZmYnXHJcblx0XHRcdFx0XHRmaWxsUnVsZT0nZXZlbm9kZCdcclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxwYXRoXHJcblx0XHRcdFx0XHRpZD0nRWxsaXBzZV82X2NvcHlfMydcclxuXHRcdFx0XHRcdGRhdGEtbmFtZT0nRWxsaXBzZSA2IGNvcHkgMydcclxuXHRcdFx0XHRcdGQ9J00xOTMuOSwxNjcuNjg5YTcuNzA4LDcuNzA4LDAsMCwxLTE1LDIuNDM5LDE0LjA1NiwxNC4wNTYsMCwxLDAtMTIuNDM5LDIwLjUyMSwxMy45MDksMTMuOTA5LDAsMCwwLDcuNDItMi4xNDgsNy43Miw3LjcyLDAsMCwxLDEuNC0uOTkxcS4yNTQtLjIuNS0uNDE3bC4wNjMuMTQyYTcuNjU0LDcuNjU0LDAsMSwxLDYuMjIxLDEzLjk4NmwuMDc0LjE2N2EyOS41ODMsMjkuNTgzLDAsMCwxLTQxLjA4NC05LjkxMyw1Ny4xNDIsNTcuMTQyLDAsMCwwLTMxLjg4NCw0NC45cy0xLjM3Miw3LjYyLTkuMzQ3LDcuNjJhOC45MzEsOC45MzEsMCwwLDEtOC45NzEtOC44OWMwLTEuNDMxLjM3My02Ljg0My45OC04LjA0MSw0LjA3Ny0yNS45ODcsMjEuNjExLTQ0LjM2Niw0NS4zMjktNTMuNTEyYTI5LjUyNSwyOS41MjUsMCwwLDEsNTYuMDc0LTkuMDUxbC0uMDI4LjAyMWE3LjU2LDcuNTYsMCwwLDEsLjY5MiwzLjE2N1ptMjIuOTE0LDEzNS4wNDVhNy43MjgsNy43MjgsMCwwLDEsNS4zOTItMTQuMjM5LDE0LjA3MywxNC4wNzMsMCwxLDAtMTMuMzY4LTEzLjU0MkE3LjY3Niw3LjY3NiwwLDAsMSwyMDksMjc2LjY2Yy4wMzMuMjE0LjA3LjQyOC4xMTIuNjRsLS4xNTQtLjAxNmE3Ljc0Nyw3Ljc0NywwLDAsMS0xLDMuMDkyLDcuNjE4LDcuNjE4LDAsMCwxLTE0LjItNC42ODZsLS4xODItLjAxOWEyOS42NjgsMjkuNjY4LDAsMCwxLDI5LjEwOC0zMC43LDU3LjIsNTcuMiwwLDAsMC0yMi44NTQtNTAuMTIycy01LjktNS0xLjkxMS0xMS45MjNhOC45MTEsOC45MTEsMCwwLDEsMTIuMTY4LTMuMzQxYzEuMjM3LjcxNiw1LjcyNiwzLjc0NSw2LjQ1OCw0Ljg3LDIwLjQxNywxNi41MzIsMjcuNTMyLDQwLjk0MSwyMy41NzcsNjYuMUEyOS42MDksMjkuNjA5LDAsMCwxLDIxOS45LDMwMy43NDl2LS4wMzVhNy41MTcsNy41MTcsMCwwLDEtMy4wOTItLjk4Wk04Ny40MiwyNTUuNTQ4YTcuNzIyLDcuNzIyLDAsMCwxLDkuNjA4LDExLjgsMTQuMTU3LDE0LjE1NywwLDAsMC0uMTkzLDE0LjUwNywxMy45NDgsMTMuOTQ4LDAsMSwwLDE4LjU3OC0xOS4zMzgsNy43MTQsNy43MTQsMCwwLDEtMS41NTQtLjcxNWMtLjItLjA3OS0uNC0uMTU0LS42MDktLjIyM2wuMDkxLS4xMjZhNy43MzEsNy43MzEsMCwwLDEsLjU4Mi0xMi45MTksNy42MTYsNy42MTYsMCwwLDEsOC4zOTMuNTI3bC4xMDctLjE0OUEyOS43MTYsMjkuNzE2LDAsMCwxLDEzNC40LDI4OS41MjdhNTYuOTE2LDU2LjkxNiwwLDAsMCw1NC43MzgsNS4yMjVzNy4yNzEtMi42MTksMTEuMjU4LDQuM2E4Ljk1Miw4Ljk1MiwwLDAsMS0zLjIsMTIuMjMyYy0xLjIzNi43MTUtNi4xLDMuMS03LjQzNywzLjE3LTI0LjQ5NCw5LjQ1NS00OS4xNDQsMy40MjYtNjguOTA2LTEyLjU4N0EyOS41ODYsMjkuNTg2LDAsMCwxLDg1LDI1Ny43MjZsLjAzMi4wMTVhNy41MzMsNy41MzMsMCwwLDEsMi4zODgtMi4xOTNaJ1xyXG5cdFx0XHRcdFx0ZmlsbD0nIzBlNTM5NCdcclxuXHRcdFx0XHRcdGZpbGxSdWxlPSdldmVub2RkJ1xyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvZz5cclxuXHRcdDwvc3ZnPlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ287XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIExvZ291dCh7IGNsYXNzTmFtZSwgZmlsbCA9IFwibm9uZVwiIH0pIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PHN2Z1xyXG5cdFx0XHR4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXHJcblx0XHRcdGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG5cdFx0XHR2aWV3Qm94PScwIDAgNTEyIDUxMic+XHJcblx0XHRcdDx0aXRsZT5pb25pY29ucy12NS1vPC90aXRsZT5cclxuXHRcdFx0PHBhdGhcclxuXHRcdFx0XHRkPSdNMzA0LDMzNnY0MGE0MCw0MCwwLDAsMS00MCw0MEgxMDRhNDAsNDAsMCwwLDEtNDAtNDBWMTM2YTQwLDQwLDAsMCwxLDQwLTQwSDI1NmMyMi4wOSwwLDQ4LDE3LjkxLDQ4LDQwdjQwJ1xyXG5cdFx0XHRcdGZpbGw9e1wibm9uZVwifVxyXG5cdFx0XHRcdHN0cm9rZT17ZmlsbH1cclxuXHRcdFx0XHRzdHJva2VMaW5lY2FwPSdyb3VuZCdcclxuXHRcdFx0XHRzdHJva2VMaW5lam9pbj0ncm91bmQnXHJcblx0XHRcdFx0c3Ryb2tlV2lkdGg9JzQwcHgnXHJcblx0XHRcdC8+XHJcblx0XHRcdDxwb2x5bGluZVxyXG5cdFx0XHRcdHBvaW50cz0nMzY4IDMzNiA0NDggMjU2IDM2OCAxNzYnXHJcblx0XHRcdFx0ZmlsbD17XCJub25lXCJ9XHJcblx0XHRcdFx0c3Ryb2tlPXtmaWxsfVxyXG5cdFx0XHRcdHN0cm9rZUxpbmVjYXA9J3JvdW5kJ1xyXG5cdFx0XHRcdHN0cm9rZUxpbmVqb2luPSdyb3VuZCdcclxuXHRcdFx0XHRzdHJva2VXaWR0aD0nNDBweCdcclxuXHRcdFx0Lz5cclxuXHRcdFx0PGxpbmVcclxuXHRcdFx0XHR4MT0nMTc2J1xyXG5cdFx0XHRcdHkxPScyNTYnXHJcblx0XHRcdFx0eDI9JzQzMidcclxuXHRcdFx0XHR5Mj0nMjU2J1xyXG5cdFx0XHRcdGZpbGw9e1wibm9uZVwifVxyXG5cdFx0XHRcdHN0cm9rZT17ZmlsbH1cclxuXHRcdFx0XHRzdHJva2VMaW5lY2FwPSdyb3VuZCdcclxuXHRcdFx0XHRzdHJva2VMaW5lam9pbj0ncm91bmQnXHJcblx0XHRcdFx0c3Ryb2tlV2lkdGg9JzQwcHgnXHJcblx0XHRcdC8+XHJcblx0XHQ8L3N2Zz5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dvdXQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIFBlb3BsZSh7IGNsYXNzTmFtZSwgZmlsbCB9KSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxzdmdcclxuXHRcdFx0eG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG5cdFx0XHRjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuXHRcdFx0dmlld0JveD0nMCAwIDUxMiA1MTInPlxyXG5cdFx0XHQ8dGl0bGU+aW9uaWNvbnMtdjUtajwvdGl0bGU+XHJcblx0XHRcdDxjaXJjbGUgZmlsbD17ZmlsbH0gY3g9JzE1MicgY3k9JzE4NCcgcj0nNzInIC8+XHJcblx0XHRcdDxwYXRoXHJcblx0XHRcdFx0ZmlsbD17ZmlsbH1cclxuXHRcdFx0XHRkPSdNMjM0LDI5NmMtMjguMTYtMTQuMy01OS4yNC0yMC04Mi0yMC00NC41OCwwLTEzNiwyNy4zNC0xMzYsODJ2NDJIMTY2VjM4My45M2MwLTE5LDgtMzguMDUsMjItNTMuOTNDMTk5LjE3LDMxNy4zMiwyMTQuODEsMzA1LjU1LDIzNCwyOTZaJ1xyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8cGF0aFxyXG5cdFx0XHRcdGZpbGw9e2ZpbGx9XHJcblx0XHRcdFx0ZD0nTTM0MCwyODhjLTUyLjA3LDAtMTU2LDMyLjE2LTE1Niw5NnY0OEg0OTZWMzg0QzQ5NiwzMjAuMTYsMzkyLjA3LDI4OCwzNDAsMjg4WidcclxuXHRcdFx0Lz5cclxuXHRcdFx0PGNpcmNsZSBmaWxsPXtmaWxsfSBjeD0nMzQwJyBjeT0nMTY4JyByPSc4OCcgLz5cclxuXHRcdDwvc3ZnPlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBlb3BsZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gUmVmcmVzaCh7IGNsYXNzTmFtZSwgZmlsbCB9KSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxzdmdcclxuXHRcdFx0eG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG5cdFx0XHRjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuXHRcdFx0dmlld0JveD0nMCAwIDUxMiA1MTInPlxyXG5cdFx0XHQ8dGl0bGU+aW9uaWNvbnMtdjUtYjwvdGl0bGU+XHJcblx0XHRcdDxwYXRoXHJcblx0XHRcdFx0ZD0nTTMyMCwxNDZzMjQuMzYtMTItNjQtMTJBMTYwLDE2MCwwLDEsMCw0MTYsMjk0J1xyXG5cdFx0XHRcdGZpbGw9e2ZpbGx9XHJcblx0XHRcdFx0c3Ryb2tlPScjMDAwJ1xyXG5cdFx0XHRcdHN0cm9rZUxpbmVjYXA9J3NxdWFyZSdcclxuXHRcdFx0XHRzdHJva2VNaXRlcmxpbWl0PScxMCdcclxuXHRcdFx0XHRzdHJva2VXaWR0aD0nNDBweCdcclxuXHRcdFx0Lz5cclxuXHRcdFx0PHBvbHlsaW5lXHJcblx0XHRcdFx0cG9pbnRzPScyNTYgNTggMzM2IDEzOCAyNTYgMjE4J1xyXG5cdFx0XHRcdGZpbGw9e2ZpbGx9XHJcblx0XHRcdFx0c3Ryb2tlPScjMDAwJ1xyXG5cdFx0XHRcdHN0cm9rZUxpbmVjYXA9J3NxdWFyZSdcclxuXHRcdFx0XHRzdHJva2VNaXRlcmxpbWl0PScxMCdcclxuXHRcdFx0XHRzdHJva2VXaWR0aD0nNDBweCdcclxuXHRcdFx0Lz5cclxuXHRcdDwvc3ZnPlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZnJlc2g7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIFVzZXIoeyBjbGFzc05hbWUsIGZpbGwgfSkge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8c3ZnXHJcblx0XHRcdHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcclxuXHRcdFx0Y2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcblx0XHRcdHZpZXdCb3g9JzAgMCA1MTIgNTEyJz5cclxuXHRcdFx0PHRpdGxlPmlvbmljb25zLXY1LWo8L3RpdGxlPlxyXG5cdFx0XHQ8cGF0aCBkPSdNMjU2LDQ4QzE0MS4zMSw0OCw0OCwxNDEuMzEsNDgsMjU2czkzLjMxLDIwOCwyMDgsMjA4LDIwOC05My4zMSwyMDgtMjA4UzM3MC42OSw0OCwyNTYsNDhaTTIwNS43OCwxNjQuODJDMjE4LjQ1LDE1MS4zOSwyMzYuMjgsMTQ0LDI1NiwxNDRzMzcuMzksNy40NCw1MC4xMSwyMC45NEMzMTksMTc4LjYyLDMyNS4yNywxOTcsMzIzLjc5LDIxNi43NiwzMjAuODMsMjU2LDI5MC40MywyODgsMjU2LDI4OHMtNjQuODktMzItNjcuNzktNzEuMjVDMTg2Ljc0LDE5Ni44MywxOTMsMTc4LjM5LDIwNS43OCwxNjQuODJaTTI1Niw0MzJhMTc1LjQ5LDE3NS40OSwwLDAsMS0xMjYtNTMuMjIsMTIyLjkxLDEyMi45MSwwLDAsMSwzNS4xNC0zMy40NEMxOTAuNjMsMzI5LDIyMi44OSwzMjAsMjU2LDMyMHM2NS4zNyw5LDkwLjgzLDI1LjM0QTEyMi44NywxMjIuODcsMCwwLDEsMzgyLDM3OC43OCwxNzUuNDUsMTc1LjQ1LDAsMCwxLDI1Niw0MzJaJyAvPlxyXG5cdFx0PC9zdmc+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXI9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpO3ZhciBfcm91dGVyMj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7dmFyIF91c2VJbnRlcnNlY3Rpb249cmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtjb25zdCBwcmVmZXRjaGVkPXt9O2Z1bmN0aW9uIHByZWZldGNoKHJvdXRlcixocmVmLGFzLG9wdGlvbnMpe2lmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJ3x8IXJvdXRlcilyZXR1cm47aWYoISgwLF9yb3V0ZXIuaXNMb2NhbFVSTCkoaHJlZikpcmV0dXJuOy8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbi8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbi8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG5yb3V0ZXIucHJlZmV0Y2goaHJlZixhcyxvcHRpb25zKS5jYXRjaChlcnI9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Ly8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xudGhyb3cgZXJyO319KTtjb25zdCBjdXJMb2NhbGU9b3B0aW9ucyYmdHlwZW9mIG9wdGlvbnMubG9jYWxlIT09J3VuZGVmaW5lZCc/b3B0aW9ucy5sb2NhbGU6cm91dGVyJiZyb3V0ZXIubG9jYWxlOy8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG5wcmVmZXRjaGVkW2hyZWYrJyUnK2FzKyhjdXJMb2NhbGU/JyUnK2N1ckxvY2FsZTonJyldPXRydWU7fWZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCl7Y29uc3R7dGFyZ2V0fT1ldmVudC5jdXJyZW50VGFyZ2V0O3JldHVybiB0YXJnZXQmJnRhcmdldCE9PSdfc2VsZid8fGV2ZW50Lm1ldGFLZXl8fGV2ZW50LmN0cmxLZXl8fGV2ZW50LnNoaWZ0S2V5fHxldmVudC5hbHRLZXl8fC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG5ldmVudC5uYXRpdmVFdmVudCYmZXZlbnQubmF0aXZlRXZlbnQud2hpY2g9PT0yO31mdW5jdGlvbiBsaW5rQ2xpY2tlZChlLHJvdXRlcixocmVmLGFzLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlKXtjb25zdHtub2RlTmFtZX09ZS5jdXJyZW50VGFyZ2V0O2lmKG5vZGVOYW1lPT09J0EnJiYoaXNNb2RpZmllZEV2ZW50KGUpfHwhKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSkpey8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxucmV0dXJuO31lLnByZXZlbnREZWZhdWx0KCk7Ly8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG5pZihzY3JvbGw9PW51bGwmJmFzLmluZGV4T2YoJyMnKT49MCl7c2Nyb2xsPWZhbHNlO30vLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbnJvdXRlcltyZXBsYWNlPydyZXBsYWNlJzoncHVzaCddKGhyZWYsYXMse3NoYWxsb3csbG9jYWxlLHNjcm9sbH0pO31mdW5jdGlvbiBMaW5rKHByb3BzKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7ZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3Mpe3JldHVybiBuZXcgRXJyb3IoYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmArKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz9cIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCI6JycpKTt9Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbmNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZD17aHJlZjp0cnVlfTtjb25zdCByZXF1aXJlZFByb3BzPU9iamVjdC5rZXlzKHJlcXVpcmVkUHJvcHNHdWFyZCk7cmVxdWlyZWRQcm9wcy5mb3JFYWNoKGtleT0+e2lmKGtleT09PSdocmVmJyl7aWYocHJvcHNba2V5XT09bnVsbHx8dHlwZW9mIHByb3BzW2tleV0hPT0nc3RyaW5nJyYmdHlwZW9mIHByb3BzW2tleV0hPT0nb2JqZWN0Jyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2BzdHJpbmdgIG9yIGBvYmplY3RgJyxhY3R1YWw6cHJvcHNba2V5XT09PW51bGw/J251bGwnOnR5cGVvZiBwcm9wc1trZXldfSk7fX1lbHNley8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5jb25zdCBfPWtleTt9fSk7Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbmNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZD17YXM6dHJ1ZSxyZXBsYWNlOnRydWUsc2Nyb2xsOnRydWUsc2hhbGxvdzp0cnVlLHBhc3NIcmVmOnRydWUscHJlZmV0Y2g6dHJ1ZSxsb2NhbGU6dHJ1ZX07Y29uc3Qgb3B0aW9uYWxQcm9wcz1PYmplY3Qua2V5cyhvcHRpb25hbFByb3BzR3VhcmQpO29wdGlvbmFsUHJvcHMuZm9yRWFjaChrZXk9Pntjb25zdCB2YWxUeXBlPXR5cGVvZiBwcm9wc1trZXldO2lmKGtleT09PSdhcycpe2lmKHByb3BzW2tleV0mJnZhbFR5cGUhPT0nc3RyaW5nJyYmdmFsVHlwZSE9PSdvYmplY3QnKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYHN0cmluZ2Agb3IgYG9iamVjdGAnLGFjdHVhbDp2YWxUeXBlfSk7fX1lbHNlIGlmKGtleT09PSdsb2NhbGUnKXtpZihwcm9wc1trZXldJiZ2YWxUeXBlIT09J3N0cmluZycpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgc3RyaW5nYCcsYWN0dWFsOnZhbFR5cGV9KTt9fWVsc2UgaWYoa2V5PT09J3JlcGxhY2UnfHxrZXk9PT0nc2Nyb2xsJ3x8a2V5PT09J3NoYWxsb3cnfHxrZXk9PT0ncGFzc0hyZWYnfHxrZXk9PT0ncHJlZmV0Y2gnKXtpZihwcm9wc1trZXldIT1udWxsJiZ2YWxUeXBlIT09J2Jvb2xlYW4nKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYGJvb2xlYW5gJyxhY3R1YWw6dmFsVHlwZX0pO319ZWxzZXsvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuY29uc3QgXz1rZXk7fX0pOy8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbmNvbnN0IGhhc1dhcm5lZD1fcmVhY3QuZGVmYXVsdC51c2VSZWYoZmFsc2UpO2lmKHByb3BzLnByZWZldGNoJiYhaGFzV2FybmVkLmN1cnJlbnQpe2hhc1dhcm5lZC5jdXJyZW50PXRydWU7Y29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCcpO319Y29uc3QgcD1wcm9wcy5wcmVmZXRjaCE9PWZhbHNlO2NvbnN0IHJvdXRlcj0oMCxfcm91dGVyMi51c2VSb3V0ZXIpKCk7Y29uc3R7aHJlZixhc309X3JlYWN0LmRlZmF1bHQudXNlTWVtbygoKT0+e2NvbnN0W3Jlc29sdmVkSHJlZixyZXNvbHZlZEFzXT0oMCxfcm91dGVyLnJlc29sdmVIcmVmKShyb3V0ZXIscHJvcHMuaHJlZix0cnVlKTtyZXR1cm57aHJlZjpyZXNvbHZlZEhyZWYsYXM6cHJvcHMuYXM/KDAsX3JvdXRlci5yZXNvbHZlSHJlZikocm91dGVyLHByb3BzLmFzKTpyZXNvbHZlZEFzfHxyZXNvbHZlZEhyZWZ9O30sW3JvdXRlcixwcm9wcy5ocmVmLHByb3BzLmFzXSk7bGV0e2NoaWxkcmVuLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlfT1wcm9wczsvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbmlmKHR5cGVvZiBjaGlsZHJlbj09PSdzdHJpbmcnKXtjaGlsZHJlbj0vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIixudWxsLGNoaWxkcmVuKTt9Ly8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG5sZXQgY2hpbGQ7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXt0cnl7Y2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO31jYXRjaChlcnIpe3Rocm93IG5ldyBFcnJvcihgTXVsdGlwbGUgY2hpbGRyZW4gd2VyZSBwYXNzZWQgdG8gPExpbms+IHdpdGggXFxgaHJlZlxcYCBvZiBcXGAke3Byb3BzLmhyZWZ9XFxgIGJ1dCBvbmx5IG9uZSBjaGlsZCBpcyBzdXBwb3J0ZWQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbGluay1tdWx0aXBsZS1jaGlsZHJlbmArKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz9cIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCI6JycpKTt9fWVsc2V7Y2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO31jb25zdCBjaGlsZFJlZj1jaGlsZCYmdHlwZW9mIGNoaWxkPT09J29iamVjdCcmJmNoaWxkLnJlZjtjb25zdFtzZXRJbnRlcnNlY3Rpb25SZWYsaXNWaXNpYmxlXT0oMCxfdXNlSW50ZXJzZWN0aW9uLnVzZUludGVyc2VjdGlvbikoe3Jvb3RNYXJnaW46JzIwMHB4J30pO2NvbnN0IHNldFJlZj1fcmVhY3QuZGVmYXVsdC51c2VDYWxsYmFjayhlbD0+e3NldEludGVyc2VjdGlvblJlZihlbCk7aWYoY2hpbGRSZWYpe2lmKHR5cGVvZiBjaGlsZFJlZj09PSdmdW5jdGlvbicpY2hpbGRSZWYoZWwpO2Vsc2UgaWYodHlwZW9mIGNoaWxkUmVmPT09J29iamVjdCcpe2NoaWxkUmVmLmN1cnJlbnQ9ZWw7fX19LFtjaGlsZFJlZixzZXRJbnRlcnNlY3Rpb25SZWZdKTsoMCxfcmVhY3QudXNlRWZmZWN0KSgoKT0+e2NvbnN0IHNob3VsZFByZWZldGNoPWlzVmlzaWJsZSYmcCYmKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKTtjb25zdCBjdXJMb2NhbGU9dHlwZW9mIGxvY2FsZSE9PSd1bmRlZmluZWQnP2xvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Y29uc3QgaXNQcmVmZXRjaGVkPXByZWZldGNoZWRbaHJlZisnJScrYXMrKGN1ckxvY2FsZT8nJScrY3VyTG9jYWxlOicnKV07aWYoc2hvdWxkUHJlZmV0Y2gmJiFpc1ByZWZldGNoZWQpe3ByZWZldGNoKHJvdXRlcixocmVmLGFzLHtsb2NhbGU6Y3VyTG9jYWxlfSk7fX0sW2FzLGhyZWYsaXNWaXNpYmxlLGxvY2FsZSxwLHJvdXRlcl0pO2NvbnN0IGNoaWxkUHJvcHM9e3JlZjpzZXRSZWYsb25DbGljazplPT57aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25DbGljayhlKTt9aWYoIWUuZGVmYXVsdFByZXZlbnRlZCl7bGlua0NsaWNrZWQoZSxyb3V0ZXIsaHJlZixhcyxyZXBsYWNlLHNoYWxsb3csc2Nyb2xsLGxvY2FsZSk7fX19O2NoaWxkUHJvcHMub25Nb3VzZUVudGVyPWU9PntpZighKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSlyZXR1cm47aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXI9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSk7fXByZWZldGNoKHJvdXRlcixocmVmLGFzLHtwcmlvcml0eTp0cnVlfSk7fTsvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbi8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuaWYocHJvcHMucGFzc0hyZWZ8fGNoaWxkLnR5cGU9PT0nYScmJiEoJ2hyZWYnaW4gY2hpbGQucHJvcHMpKXtjb25zdCBjdXJMb2NhbGU9dHlwZW9mIGxvY2FsZSE9PSd1bmRlZmluZWQnP2xvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Ly8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbi8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG5jb25zdCBsb2NhbGVEb21haW49cm91dGVyJiZyb3V0ZXIuaXNMb2NhbGVEb21haW4mJigwLF9yb3V0ZXIuZ2V0RG9tYWluTG9jYWxlKShhcyxjdXJMb2NhbGUscm91dGVyJiZyb3V0ZXIubG9jYWxlcyxyb3V0ZXImJnJvdXRlci5kb21haW5Mb2NhbGVzKTtjaGlsZFByb3BzLmhyZWY9bG9jYWxlRG9tYWlufHwoMCxfcm91dGVyLmFkZEJhc2VQYXRoKSgoMCxfcm91dGVyLmFkZExvY2FsZSkoYXMsY3VyTG9jYWxlLHJvdXRlciYmcm91dGVyLmRlZmF1bHRMb2NhbGUpKTt9cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCxjaGlsZFByb3BzKTt9dmFyIF9kZWZhdWx0PUxpbms7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoPXJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO2V4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9dm9pZCAwOy8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCl7cmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSYmcGF0aCE9PScvJz9wYXRoLnNsaWNlKDAsLTEpOnBhdGg7fS8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL2NvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoPXByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSD9wYXRoPT57aWYoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpe3JldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKTt9ZWxzZSBpZihwYXRoLmVuZHNXaXRoKCcvJykpe3JldHVybiBwYXRoO31lbHNle3JldHVybiBwYXRoKycvJzt9fTpyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtleHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoPW5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrPWV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjaz12b2lkIDA7Y29uc3QgcmVxdWVzdElkbGVDYWxsYmFjaz10eXBlb2Ygc2VsZiE9PSd1bmRlZmluZWQnJiZzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2t8fGZ1bmN0aW9uKGNiKXtsZXQgc3RhcnQ9RGF0ZS5ub3coKTtyZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpe2NiKHtkaWRUaW1lb3V0OmZhbHNlLHRpbWVSZW1haW5pbmc6ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5tYXgoMCw1MC0oRGF0ZS5ub3coKS1zdGFydCkpO319KTt9LDEpO307ZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVlc3RJZGxlQ2FsbGJhY2s7Y29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrPXR5cGVvZiBzZWxmIT09J3VuZGVmaW5lZCcmJnNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrfHxmdW5jdGlvbihpZCl7cmV0dXJuIGNsZWFyVGltZW91dChpZCk7fTtleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjaz1jYW5jZWxJZGxlQ2FsbGJhY2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubWFya0Fzc2V0RXJyb3I9bWFya0Fzc2V0RXJyb3I7ZXhwb3J0cy5pc0Fzc2V0RXJyb3I9aXNBc3NldEVycm9yO2V4cG9ydHMuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdD1nZXRDbGllbnRCdWlsZE1hbmlmZXN0O2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9nZXRBc3NldFBhdGhGcm9tUm91dGU9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlXCIpKTt2YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpOy8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWT0zODAwO2Z1bmN0aW9uIHdpdGhGdXR1cmUoa2V5LG1hcCxnZW5lcmF0b3Ipe2xldCBlbnRyeT1tYXAuZ2V0KGtleSk7aWYoZW50cnkpe2lmKCdmdXR1cmUnaW4gZW50cnkpe3JldHVybiBlbnRyeS5mdXR1cmU7fXJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpO31sZXQgcmVzb2x2ZXI7Y29uc3QgcHJvbT1uZXcgUHJvbWlzZShyZXNvbHZlPT57cmVzb2x2ZXI9cmVzb2x2ZTt9KTttYXAuc2V0KGtleSxlbnRyeT17cmVzb2x2ZTpyZXNvbHZlcixmdXR1cmU6cHJvbX0pO3JldHVybiBnZW5lcmF0b3I/Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuZ2VuZXJhdG9yKCkudGhlbih2YWx1ZT0+KHJlc29sdmVyKHZhbHVlKSx2YWx1ZSkpOnByb207fWZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbmspe3RyeXtsaW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtyZXR1cm4oLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4vLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQmJiEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlfHxsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJykpO31jYXRjaChfdW51c2VkKXtyZXR1cm4gZmFsc2U7fX1jb25zdCBjYW5QcmVmZXRjaD1oYXNQcmVmZXRjaCgpO2Z1bmN0aW9uIHByZWZldGNoVmlhRG9tKGhyZWYsYXMsbGluayl7cmV0dXJuIG5ldyBQcm9taXNlKChyZXMscmVqKT0+e2lmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpe3JldHVybiByZXMoKTt9bGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7Ly8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbmlmKGFzKWxpbmsuYXM9YXM7bGluay5yZWw9YHByZWZldGNoYDtsaW5rLmNyb3NzT3JpZ2luPXByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47bGluay5vbmxvYWQ9cmVzO2xpbmsub25lcnJvcj1yZWo7Ly8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbmxpbmsuaHJlZj1ocmVmO2RvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7fSk7fWNvbnN0IEFTU0VUX0xPQURfRVJST1I9U3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJyk7Ly8gVE9ETzogdW5leHBvcnRcbmZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycil7cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsQVNTRVRfTE9BRF9FUlJPUix7fSk7fWZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnIpe3JldHVybiBlcnImJkFTU0VUX0xPQURfRVJST1IgaW4gZXJyO31mdW5jdGlvbiBhcHBlbmRTY3JpcHQoc3JjLHNjcmlwdCl7cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntzY3JpcHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7Ly8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbi8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbi8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0Llxuc2NyaXB0Lm9ubG9hZD1yZXNvbHZlO3NjcmlwdC5vbmVycm9yPSgpPT5yZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSk7Ly8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4vLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbnNjcmlwdC5jcm9zc09yaWdpbj1wcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOOy8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4vLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbnNjcmlwdC5zcmM9c3JjO2RvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTt9KTt9Ly8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocCxtcyxlcnIpe3JldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57bGV0IGNhbmNlbGxlZD1mYWxzZTtwLnRoZW4ocj0+ey8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbmNhbmNlbGxlZD10cnVlO3Jlc29sdmUocik7fSkuY2F0Y2gocmVqZWN0KTsoMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+c2V0VGltZW91dCgoKT0+e2lmKCFjYW5jZWxsZWQpe3JlamVjdChlcnIpO319LG1zKSk7fSk7fS8vIFRPRE86IHN0b3AgZXhwb3J0aW5nIG9yIGNhY2hlIHRoZSBmYWlsdXJlXG4vLyBJdCdkIGJlIGJlc3QgdG8gc3RvcCBleHBvcnRpbmcgdGhpcy4gSXQncyBhbiBpbXBsZW1lbnRhdGlvbiBkZXRhaWwuIFdlJ3JlXG4vLyBvbmx5IGV4cG9ydGluZyBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWx0eSB3aXRoIHRoZSBgcGFnZS1sb2FkZXJgLlxuLy8gT25seSBjYWNoZSB0aGlzIHJlc3BvbnNlIGFzIGEgbGFzdCByZXNvcnQgaWYgd2UgY2Fubm90IGVsaW1pbmF0ZSBhbGwgb3RoZXJcbi8vIGNvZGUgYnJhbmNoZXMgdGhhdCB1c2UgdGhlIEJ1aWxkIE1hbmlmZXN0IENhbGxiYWNrIGFuZCBwdXNoIHRoZW0gdGhyb3VnaFxuLy8gdGhlIFJvdXRlIExvYWRlciBpbnRlcmZhY2UuXG5mdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCl7aWYoc2VsZi5fX0JVSUxEX01BTklGRVNUKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7fWNvbnN0IG9uQnVpbGRNYW5pZmVzdD1uZXcgUHJvbWlzZShyZXNvbHZlPT57Ly8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuY29uc3QgY2I9c2VsZi5fX0JVSUxEX01BTklGRVNUX0NCO3NlbGYuX19CVUlMRF9NQU5JRkVTVF9DQj0oKT0+e3Jlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtjYiYmY2IoKTt9O30pO3JldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KG9uQnVpbGRNYW5pZmVzdCxNU19NQVhfSURMRV9ERUxBWSxtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKSk7fWZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgscm91dGUpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSh7c2NyaXB0czpbYXNzZXRQcmVmaXgrJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJytlbmNvZGVVUkkoKDAsX2dldEFzc2V0UGF0aEZyb21Sb3V0ZS5kZWZhdWx0KShyb3V0ZSwnLmpzJykpXSwvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG5jc3M6W119KTt9cmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKG1hbmlmZXN0PT57aWYoIShyb3V0ZSBpbiBtYW5pZmVzdCkpe3Rocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSk7fWNvbnN0IGFsbEZpbGVzPW1hbmlmZXN0W3JvdXRlXS5tYXAoZW50cnk9PmFzc2V0UHJlZml4KycvX25leHQvJytlbmNvZGVVUkkoZW50cnkpKTtyZXR1cm57c2NyaXB0czphbGxGaWxlcy5maWx0ZXIodj0+di5lbmRzV2l0aCgnLmpzJykpLGNzczphbGxGaWxlcy5maWx0ZXIodj0+di5lbmRzV2l0aCgnLmNzcycpKX07fSk7fWZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4KXtjb25zdCBlbnRyeXBvaW50cz1uZXcgTWFwKCk7Y29uc3QgbG9hZGVkU2NyaXB0cz1uZXcgTWFwKCk7Y29uc3Qgc3R5bGVTaGVldHM9bmV3IE1hcCgpO2NvbnN0IHJvdXRlcz1uZXcgTWFwKCk7ZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYyl7bGV0IHByb209bG9hZGVkU2NyaXB0cy5nZXQoc3JjKTtpZihwcm9tKXtyZXR1cm4gcHJvbTt9Ly8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuaWYoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO31sb2FkZWRTY3JpcHRzLnNldChzcmMscHJvbT1hcHBlbmRTY3JpcHQoc3JjKSk7cmV0dXJuIHByb207fWZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmKXtsZXQgcHJvbT1zdHlsZVNoZWV0cy5nZXQoaHJlZik7aWYocHJvbSl7cmV0dXJuIHByb207fXN0eWxlU2hlZXRzLnNldChocmVmLHByb209ZmV0Y2goaHJlZikudGhlbihyZXM9PntpZighcmVzLm9rKXt0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKTt9cmV0dXJuIHJlcy50ZXh0KCkudGhlbih0ZXh0PT4oe2hyZWY6aHJlZixjb250ZW50OnRleHR9KSk7fSkuY2F0Y2goZXJyPT57dGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKTt9KSk7cmV0dXJuIHByb207fXJldHVybnt3aGVuRW50cnlwb2ludChyb3V0ZSl7cmV0dXJuIHdpdGhGdXR1cmUocm91dGUsZW50cnlwb2ludHMpO30sb25FbnRyeXBvaW50KHJvdXRlLGV4ZWN1dGUpe1Byb21pc2UucmVzb2x2ZShleGVjdXRlKS50aGVuKGZuPT5mbigpKS50aGVuKGV4cG9ydHM9Pih7Y29tcG9uZW50OmV4cG9ydHMmJmV4cG9ydHMuZGVmYXVsdHx8ZXhwb3J0cyxleHBvcnRzOmV4cG9ydHN9KSxlcnI9Pih7ZXJyb3I6ZXJyfSkpLnRoZW4oaW5wdXQ9Pntjb25zdCBvbGQ9ZW50cnlwb2ludHMuZ2V0KHJvdXRlKTtlbnRyeXBvaW50cy5zZXQocm91dGUsaW5wdXQpO2lmKG9sZCYmJ3Jlc29sdmUnaW4gb2xkKW9sZC5yZXNvbHZlKGlucHV0KTt9KTt9LGxvYWRSb3V0ZShyb3V0ZSxwcmVmZXRjaCl7cmV0dXJuIHdpdGhGdXR1cmUocm91dGUscm91dGVzLCgpPT57cmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQoZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSkudGhlbigoe3NjcmlwdHMsY3NzfSk9PntyZXR1cm4gUHJvbWlzZS5hbGwoW2VudHJ5cG9pbnRzLmhhcyhyb3V0ZSk/W106UHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKV0pO30pLnRoZW4ocmVzPT57cmV0dXJuIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLnRoZW4oZW50cnlwb2ludD0+KHtlbnRyeXBvaW50LHN0eWxlczpyZXNbMV19KSk7fSksTVNfTUFYX0lETEVfREVMQVksbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YCkpKS50aGVuKCh7ZW50cnlwb2ludCxzdHlsZXN9KT0+e2NvbnN0IHJlcz1PYmplY3QuYXNzaWduKHtzdHlsZXM6c3R5bGVzfSxlbnRyeXBvaW50KTtyZXR1cm4nZXJyb3InaW4gZW50cnlwb2ludD9lbnRyeXBvaW50OnJlczt9KS5jYXRjaChlcnI9PntpZihwcmVmZXRjaCl7Ly8gd2UgZG9uJ3Qgd2FudCB0byBjYWNoZSBlcnJvcnMgZHVyaW5nIHByZWZldGNoXG50aHJvdyBlcnI7fXJldHVybntlcnJvcjplcnJ9O30pO30pO30scHJlZmV0Y2gocm91dGUpey8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbi8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbmxldCBjbjtpZihjbj1uYXZpZ2F0b3IuY29ubmVjdGlvbil7Ly8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG5pZihjbi5zYXZlRGF0YXx8LzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKXJldHVybiBQcm9taXNlLnJlc29sdmUoKTt9cmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgscm91dGUpLnRoZW4ob3V0cHV0PT5Qcm9taXNlLmFsbChjYW5QcmVmZXRjaD9vdXRwdXQuc2NyaXB0cy5tYXAoc2NyaXB0PT5wcmVmZXRjaFZpYURvbShzY3JpcHQsJ3NjcmlwdCcpKTpbXSkpLnRoZW4oKCk9PnsoMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+dGhpcy5sb2FkUm91dGUocm91dGUsdHJ1ZSkuY2F0Y2goKCk9Pnt9KSk7fSkuY2F0Y2goLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbigpPT57fSk7fX07fXZhciBfZGVmYXVsdD1jcmVhdGVSb3V0ZUxvYWRlcjtleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1sb2FkZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMudXNlUm91dGVyPXVzZVJvdXRlcjtleHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZT1tYWtlUHVibGljUm91dGVySW5zdGFuY2U7ZXhwb3J0cy5jcmVhdGVSb3V0ZXI9ZXhwb3J0cy53aXRoUm91dGVyPWV4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXIyPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKSk7ZXhwb3J0cy5Sb3V0ZXI9X3JvdXRlcjIuZGVmYXVsdDtleHBvcnRzLk5leHRSb3V0ZXI9X3JvdXRlcjIuTmV4dFJvdXRlcjt2YXIgX3JvdXRlckNvbnRleHQ9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dFwiKTt2YXIgX3dpdGhSb3V0ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93aXRoLXJvdXRlclwiKSk7ZXhwb3J0cy53aXRoUm91dGVyPV93aXRoUm91dGVyLmRlZmF1bHQ7LyogZ2xvYmFsIHdpbmRvdyAqL2NvbnN0IHNpbmdsZXRvblJvdXRlcj17cm91dGVyOm51bGwsLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbnJlYWR5Q2FsbGJhY2tzOltdLHJlYWR5KGNiKXtpZih0aGlzLnJvdXRlcilyZXR1cm4gY2IoKTtpZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpe3RoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7fX19Oy8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzPVsncGF0aG5hbWUnLCdyb3V0ZScsJ3F1ZXJ5JywnYXNQYXRoJywnY29tcG9uZW50cycsJ2lzRmFsbGJhY2snLCdiYXNlUGF0aCcsJ2xvY2FsZScsJ2xvY2FsZXMnLCdkZWZhdWx0TG9jYWxlJywnaXNSZWFkeScsJ2lzUHJldmlldycsJ2lzTG9jYWxlRG9tYWluJywnZG9tYWluTG9jYWxlcyddO2NvbnN0IHJvdXRlckV2ZW50cz1bJ3JvdXRlQ2hhbmdlU3RhcnQnLCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywncm91dGVDaGFuZ2VDb21wbGV0ZScsJ3JvdXRlQ2hhbmdlRXJyb3InLCdoYXNoQ2hhbmdlU3RhcnQnLCdoYXNoQ2hhbmdlQ29tcGxldGUnXTtjb25zdCBjb3JlTWV0aG9kRmllbGRzPVsncHVzaCcsJ3JlcGxhY2UnLCdyZWxvYWQnLCdiYWNrJywncHJlZmV0Y2gnLCdiZWZvcmVQb3BTdGF0ZSddOy8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsJ2V2ZW50cycse2dldCgpe3JldHVybiBfcm91dGVyMi5kZWZhdWx0LmV2ZW50czt9fSk7dXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2Ugd2UgbmVlZCB0byByZXR1cm5cbi8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4vLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlcixmaWVsZCx7Z2V0KCl7Y29uc3Qgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdO319KTt9KTtjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PnsvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuO3NpbmdsZXRvblJvdXRlcltmaWVsZF09KC4uLmFyZ3MpPT57Y29uc3Qgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO307fSk7cm91dGVyRXZlbnRzLmZvckVhY2goZXZlbnQ9PntzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9Pntfcm91dGVyMi5kZWZhdWx0LmV2ZW50cy5vbihldmVudCwoLi4uYXJncyk9Pntjb25zdCBldmVudEZpZWxkPWBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoMSl9YDtjb25zdCBfc2luZ2xldG9uUm91dGVyPXNpbmdsZXRvblJvdXRlcjtpZihfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKXt0cnl7X3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKTt9Y2F0Y2goZXJyKXtjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApO2NvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YCk7fX19KTt9KTt9KTtmdW5jdGlvbiBnZXRSb3V0ZXIoKXtpZighc2luZ2xldG9uUm91dGVyLnJvdXRlcil7Y29uc3QgbWVzc2FnZT0nTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicrJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIG9uIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fS8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxudmFyIF9kZWZhdWx0PXNpbmdsZXRvblJvdXRlcjsvLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O2Z1bmN0aW9uIHVzZVJvdXRlcigpe3JldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO30vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogYmUgdXNlZCBpbnNpZGUgdGhlIHNlcnZlci5cbmNvbnN0IGNyZWF0ZVJvdXRlcj0oLi4uYXJncyk9PntzaW5nbGV0b25Sb3V0ZXIucm91dGVyPW5ldyBfcm91dGVyMi5kZWZhdWx0KC4uLmFyZ3MpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKGNiPT5jYigpKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3M9W107cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fTsvLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnRzLmNyZWF0ZVJvdXRlcj1jcmVhdGVSb3V0ZXI7ZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcil7Y29uc3QgX3JvdXRlcj1yb3V0ZXI7Y29uc3QgaW5zdGFuY2U9e307Zm9yKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtpZih0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV09PT0nb2JqZWN0Jyl7aW5zdGFuY2VbcHJvcGVydHldPU9iamVjdC5hc3NpZ24oQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSk/W106e30sX3JvdXRlcltwcm9wZXJ0eV0pOy8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG5jb250aW51ZTt9aW5zdGFuY2VbcHJvcGVydHldPV9yb3V0ZXJbcHJvcGVydHldO30vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5pbnN0YW5jZS5ldmVudHM9X3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57aW5zdGFuY2VbZmllbGRdPSguLi5hcmdzKT0+e3JldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKTt9O30pO3JldHVybiBpbnN0YW5jZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VJbnRlcnNlY3Rpb249dXNlSW50ZXJzZWN0aW9uO3ZhciBfcmVhY3Q9cmVxdWlyZShcInJlYWN0XCIpO3ZhciBfcmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7Y29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI9dHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyIT09J3VuZGVmaW5lZCc7ZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uKHtyb290TWFyZ2luLGRpc2FibGVkfSl7Y29uc3QgaXNEaXNhYmxlZD1kaXNhYmxlZHx8IWhhc0ludGVyc2VjdGlvbk9ic2VydmVyO2NvbnN0IHVub2JzZXJ2ZT0oMCxfcmVhY3QudXNlUmVmKSgpO2NvbnN0W3Zpc2libGUsc2V0VmlzaWJsZV09KDAsX3JlYWN0LnVzZVN0YXRlKShmYWxzZSk7Y29uc3Qgc2V0UmVmPSgwLF9yZWFjdC51c2VDYWxsYmFjaykoZWw9PntpZih1bm9ic2VydmUuY3VycmVudCl7dW5vYnNlcnZlLmN1cnJlbnQoKTt1bm9ic2VydmUuY3VycmVudD11bmRlZmluZWQ7fWlmKGlzRGlzYWJsZWR8fHZpc2libGUpcmV0dXJuO2lmKGVsJiZlbC50YWdOYW1lKXt1bm9ic2VydmUuY3VycmVudD1vYnNlcnZlKGVsLGlzVmlzaWJsZT0+aXNWaXNpYmxlJiZzZXRWaXNpYmxlKGlzVmlzaWJsZSkse3Jvb3RNYXJnaW59KTt9fSxbaXNEaXNhYmxlZCxyb290TWFyZ2luLHZpc2libGVdKTsoMCxfcmVhY3QudXNlRWZmZWN0KSgoKT0+e2lmKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcil7aWYoIXZpc2libGUpe2NvbnN0IGlkbGVDYWxsYmFjaz0oMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+c2V0VmlzaWJsZSh0cnVlKSk7cmV0dXJuKCk9PigwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLmNhbmNlbElkbGVDYWxsYmFjaykoaWRsZUNhbGxiYWNrKTt9fX0sW3Zpc2libGVdKTtyZXR1cm5bc2V0UmVmLHZpc2libGVdO31mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsY2FsbGJhY2ssb3B0aW9ucyl7Y29uc3R7aWQsb2JzZXJ2ZXIsZWxlbWVudHN9PWNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpO2VsZW1lbnRzLnNldChlbGVtZW50LGNhbGxiYWNrKTtvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO3JldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKXtlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7b2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpOy8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbmlmKGVsZW1lbnRzLnNpemU9PT0wKXtvYnNlcnZlci5kaXNjb25uZWN0KCk7b2JzZXJ2ZXJzLmRlbGV0ZShpZCk7fX07fWNvbnN0IG9ic2VydmVycz1uZXcgTWFwKCk7ZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyl7Y29uc3QgaWQ9b3B0aW9ucy5yb290TWFyZ2lufHwnJztsZXQgaW5zdGFuY2U9b2JzZXJ2ZXJzLmdldChpZCk7aWYoaW5zdGFuY2Upe3JldHVybiBpbnN0YW5jZTt9Y29uc3QgZWxlbWVudHM9bmV3IE1hcCgpO2NvbnN0IG9ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzPT57ZW50cmllcy5mb3JFYWNoKGVudHJ5PT57Y29uc3QgY2FsbGJhY2s9ZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCk7Y29uc3QgaXNWaXNpYmxlPWVudHJ5LmlzSW50ZXJzZWN0aW5nfHxlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbz4wO2lmKGNhbGxiYWNrJiZpc1Zpc2libGUpe2NhbGxiYWNrKGlzVmlzaWJsZSk7fX0pO30sb3B0aW9ucyk7b2JzZXJ2ZXJzLnNldChpZCxpbnN0YW5jZT17aWQsb2JzZXJ2ZXIsZWxlbWVudHN9KTtyZXR1cm4gaW5zdGFuY2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVyc2VjdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXdpdGhSb3V0ZXI7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXI9cmVxdWlyZShcIi4vcm91dGVyXCIpO2Z1bmN0aW9uIHdpdGhSb3V0ZXIoQ29tcG9zZWRDb21wb25lbnQpe2Z1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKXtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb3NlZENvbXBvbmVudCxPYmplY3QuYXNzaWduKHtyb3V0ZXI6KDAsX3JvdXRlci51c2VSb3V0ZXIpKCl9LHByb3BzKSk7fVdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG47V2l0aFJvdXRlcldyYXBwZXIub3JpZ0dldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5vcmlnR2V0SW5pdGlhbFByb3BzO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdCBuYW1lPUNvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lfHxDb21wb3NlZENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7V2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWU9YHdpdGhSb3V0ZXIoJHtuYW1lfSlgO31yZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2l0aC1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVMb2NhbGVQYXRoPW5vcm1hbGl6ZUxvY2FsZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlUGF0aChwYXRobmFtZSxsb2NhbGVzKXtsZXQgZGV0ZWN0ZWRMb2NhbGU7Ly8gZmlyc3QgaXRlbSB3aWxsIGJlIGVtcHR5IHN0cmluZyBmcm9tIHNwbGl0dGluZyBhdCBmaXJzdCBjaGFyXG5jb25zdCBwYXRobmFtZVBhcnRzPXBhdGhuYW1lLnNwbGl0KCcvJyk7KGxvY2FsZXN8fFtdKS5zb21lKGxvY2FsZT0+e2lmKHBhdGhuYW1lUGFydHNbMV0udG9Mb3dlckNhc2UoKT09PWxvY2FsZS50b0xvd2VyQ2FzZSgpKXtkZXRlY3RlZExvY2FsZT1sb2NhbGU7cGF0aG5hbWVQYXJ0cy5zcGxpY2UoMSwxKTtwYXRobmFtZT1wYXRobmFtZVBhcnRzLmpvaW4oJy8nKXx8Jy8nO3JldHVybiB0cnVlO31yZXR1cm4gZmFsc2U7fSk7cmV0dXJue3BhdGhuYW1lLGRldGVjdGVkTG9jYWxlfTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtbG9jYWxlLXBhdGguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PW1pdHQ7Lypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovIC8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5mdW5jdGlvbiBtaXR0KCl7Y29uc3QgYWxsPU9iamVjdC5jcmVhdGUobnVsbCk7cmV0dXJue29uKHR5cGUsaGFuZGxlcil7OyhhbGxbdHlwZV18fChhbGxbdHlwZV09W10pKS5wdXNoKGhhbmRsZXIpO30sb2ZmKHR5cGUsaGFuZGxlcil7aWYoYWxsW3R5cGVdKXthbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpPj4+MCwxKTt9fSxlbWl0KHR5cGUsLi4uZXZ0cyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuOyhhbGxbdHlwZV18fFtdKS5zbGljZSgpLm1hcChoYW5kbGVyPT57aGFuZGxlciguLi5ldnRzKTt9KTt9fTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1taXR0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZ2V0RG9tYWluTG9jYWxlPWdldERvbWFpbkxvY2FsZTtleHBvcnRzLmFkZExvY2FsZT1hZGRMb2NhbGU7ZXhwb3J0cy5kZWxMb2NhbGU9ZGVsTG9jYWxlO2V4cG9ydHMuaGFzQmFzZVBhdGg9aGFzQmFzZVBhdGg7ZXhwb3J0cy5hZGRCYXNlUGF0aD1hZGRCYXNlUGF0aDtleHBvcnRzLmRlbEJhc2VQYXRoPWRlbEJhc2VQYXRoO2V4cG9ydHMuaXNMb2NhbFVSTD1pc0xvY2FsVVJMO2V4cG9ydHMuaW50ZXJwb2xhdGVBcz1pbnRlcnBvbGF0ZUFzO2V4cG9ydHMucmVzb2x2ZUhyZWY9cmVzb2x2ZUhyZWY7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2g9cmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2hcIik7dmFyIF9yb3V0ZUxvYWRlcj1yZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlclwiKTt2YXIgX2Rlbm9ybWFsaXplUGFnZVBhdGg9cmVxdWlyZShcIi4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGhcIik7dmFyIF9ub3JtYWxpemVMb2NhbGVQYXRoPXJlcXVpcmUoXCIuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aFwiKTt2YXIgX21pdHQ9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vdXRpbHNcIik7dmFyIF9pc0R5bmFtaWM9cmVxdWlyZShcIi4vdXRpbHMvaXMtZHluYW1pY1wiKTt2YXIgX3BhcnNlUmVsYXRpdmVVcmw9cmVxdWlyZShcIi4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsXCIpO3ZhciBfcXVlcnlzdHJpbmc9cmVxdWlyZShcIi4vdXRpbHMvcXVlcnlzdHJpbmdcIik7dmFyIF9yZXNvbHZlUmV3cml0ZXM9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9yZXNvbHZlLXJld3JpdGVzXCIpKTt2YXIgX3JvdXRlTWF0Y2hlcj1yZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO3ZhciBfcm91dGVSZWdleD1yZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iail7cmV0dXJuIG9iaiYmb2JqLl9fZXNNb2R1bGU/b2JqOntkZWZhdWx0Om9ian07fS8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmxldCBkZXRlY3REb21haW5Mb2NhbGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7ZGV0ZWN0RG9tYWluTG9jYWxlPXJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGU7fWNvbnN0IGJhc2VQYXRoPXByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEh8fCcnO2Z1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKXtyZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLHtjYW5jZWxsZWQ6dHJ1ZX0pO31mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGgscHJlZml4KXtyZXR1cm4gcHJlZml4JiZwYXRoLnN0YXJ0c1dpdGgoJy8nKT9wYXRoPT09Jy8nPygwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKShwcmVmaXgpOmAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKT09PScvJz9wYXRoLnN1YnN0cmluZygxKTpwYXRofWA6cGF0aDt9ZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKHBhdGgsbG9jYWxlLGxvY2FsZXMsZG9tYWluTG9jYWxlcyl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7bG9jYWxlPWxvY2FsZXx8KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGF0aCxsb2NhbGVzKS5kZXRlY3RlZExvY2FsZTtjb25zdCBkZXRlY3RlZERvbWFpbj1kZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcyx1bmRlZmluZWQsbG9jYWxlKTtpZihkZXRlY3RlZERvbWFpbil7cmV0dXJuYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHA/Jyc6J3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YmFzZVBhdGh8fCcnfSR7bG9jYWxlPT09ZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZT8nJzpgLyR7bG9jYWxlfWB9JHtwYXRofWA7fXJldHVybiBmYWxzZTt9cmV0dXJuIGZhbHNlO31mdW5jdGlvbiBhZGRMb2NhbGUocGF0aCxsb2NhbGUsZGVmYXVsdExvY2FsZSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Y29uc3QgcGF0aG5hbWU9cGF0aE5vUXVlcnlIYXNoKHBhdGgpO2NvbnN0IHBhdGhMb3dlcj1wYXRobmFtZS50b0xvd2VyQ2FzZSgpO2NvbnN0IGxvY2FsZUxvd2VyPWxvY2FsZSYmbG9jYWxlLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGxvY2FsZSYmbG9jYWxlIT09ZGVmYXVsdExvY2FsZSYmIXBhdGhMb3dlci5zdGFydHNXaXRoKCcvJytsb2NhbGVMb3dlcisnLycpJiZwYXRoTG93ZXIhPT0nLycrbG9jYWxlTG93ZXI/YWRkUGF0aFByZWZpeChwYXRoLCcvJytsb2NhbGUpOnBhdGg7fXJldHVybiBwYXRoO31mdW5jdGlvbiBkZWxMb2NhbGUocGF0aCxsb2NhbGUpe2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2NvbnN0IHBhdGhuYW1lPXBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtjb25zdCBwYXRoTG93ZXI9cGF0aG5hbWUudG9Mb3dlckNhc2UoKTtjb25zdCBsb2NhbGVMb3dlcj1sb2NhbGUmJmxvY2FsZS50b0xvd2VyQ2FzZSgpO3JldHVybiBsb2NhbGUmJihwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycrbG9jYWxlTG93ZXIrJy8nKXx8cGF0aExvd2VyPT09Jy8nK2xvY2FsZUxvd2VyKT8ocGF0aG5hbWUubGVuZ3RoPT09bG9jYWxlLmxlbmd0aCsxPycvJzonJykrcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCsxKTpwYXRoO31yZXR1cm4gcGF0aDt9ZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGgpe2NvbnN0IHF1ZXJ5SW5kZXg9cGF0aC5pbmRleE9mKCc/Jyk7Y29uc3QgaGFzaEluZGV4PXBhdGguaW5kZXhPZignIycpO2lmKHF1ZXJ5SW5kZXg+LTF8fGhhc2hJbmRleD4tMSl7cGF0aD1wYXRoLnN1YnN0cmluZygwLHF1ZXJ5SW5kZXg+LTE/cXVlcnlJbmRleDpoYXNoSW5kZXgpO31yZXR1cm4gcGF0aDt9ZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aCl7cGF0aD1wYXRoTm9RdWVyeUhhc2gocGF0aCk7cmV0dXJuIHBhdGg9PT1iYXNlUGF0aHx8cGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoKycvJyk7fWZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpey8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG5yZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLGJhc2VQYXRoKTt9ZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCl7cGF0aD1wYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCk7aWYoIXBhdGguc3RhcnRzV2l0aCgnLycpKXBhdGg9YC8ke3BhdGh9YDtyZXR1cm4gcGF0aDt9LyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmwpey8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbmlmKHVybC5zdGFydHNXaXRoKCcvJyl8fHVybC5zdGFydHNXaXRoKCcjJyl8fHVybC5zdGFydHNXaXRoKCc/JykpcmV0dXJuIHRydWU7dHJ5ey8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuY29uc3QgbG9jYXRpb25PcmlnaW49KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpO2NvbnN0IHJlc29sdmVkPW5ldyBVUkwodXJsLGxvY2F0aW9uT3JpZ2luKTtyZXR1cm4gcmVzb2x2ZWQub3JpZ2luPT09bG9jYXRpb25PcmlnaW4mJmhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKTt9Y2F0Y2goXyl7cmV0dXJuIGZhbHNlO319ZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhyb3V0ZSxhc1BhdGhuYW1lLHF1ZXJ5KXtsZXQgaW50ZXJwb2xhdGVkUm91dGU9Jyc7Y29uc3QgZHluYW1pY1JlZ2V4PSgwLF9yb3V0ZVJlZ2V4LmdldFJvdXRlUmVnZXgpKHJvdXRlKTtjb25zdCBkeW5hbWljR3JvdXBzPWR5bmFtaWNSZWdleC5ncm91cHM7Y29uc3QgZHluYW1pY01hdGNoZXM9Ly8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuKGFzUGF0aG5hbWUhPT1yb3V0ZT8oMCxfcm91dGVNYXRjaGVyLmdldFJvdXRlTWF0Y2hlcikoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKTonJyl8fC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxucXVlcnk7aW50ZXJwb2xhdGVkUm91dGU9cm91dGU7Y29uc3QgcGFyYW1zPU9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpO2lmKCFwYXJhbXMuZXZlcnkocGFyYW09PntsZXQgdmFsdWU9ZHluYW1pY01hdGNoZXNbcGFyYW1dfHwnJztjb25zdHtyZXBlYXQsb3B0aW9uYWx9PWR5bmFtaWNHcm91cHNbcGFyYW1dOy8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxubGV0IHJlcGxhY2VkPWBbJHtyZXBlYXQ/Jy4uLic6Jyd9JHtwYXJhbX1dYDtpZihvcHRpb25hbCl7cmVwbGFjZWQ9YCR7IXZhbHVlPycvJzonJ31bJHtyZXBsYWNlZH1dYDt9aWYocmVwZWF0JiYhQXJyYXkuaXNBcnJheSh2YWx1ZSkpdmFsdWU9W3ZhbHVlXTtyZXR1cm4ob3B0aW9uYWx8fHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSYmKC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuaW50ZXJwb2xhdGVkUm91dGU9aW50ZXJwb2xhdGVkUm91dGUucmVwbGFjZShyZXBsYWNlZCxyZXBlYXQ/dmFsdWUubWFwKC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3Rcbi8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbi8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4vLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbnNlZ21lbnQ9PmVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KSkuam9pbignLycpOmVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpfHwnLycpO30pKXtpbnRlcnBvbGF0ZWRSb3V0ZT0nJzsvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbi8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG59cmV0dXJue3BhcmFtcyxyZXN1bHQ6aW50ZXJwb2xhdGVkUm91dGV9O31mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnkscGFyYW1zKXtjb25zdCBmaWx0ZXJlZFF1ZXJ5PXt9O09iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKGtleT0+e2lmKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSl7ZmlsdGVyZWRRdWVyeVtrZXldPXF1ZXJ5W2tleV07fX0pO3JldHVybiBmaWx0ZXJlZFF1ZXJ5O30vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovZnVuY3Rpb24gcmVzb2x2ZUhyZWYocm91dGVyLGhyZWYscmVzb2x2ZUFzKXsvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xubGV0IGJhc2U7Y29uc3QgdXJsQXNTdHJpbmc9dHlwZW9mIGhyZWY9PT0nc3RyaW5nJz9ocmVmOigwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoaHJlZik7dHJ5e2Jhc2U9bmV3IFVSTCh1cmxBc1N0cmluZy5zdGFydHNXaXRoKCcjJyk/cm91dGVyLmFzUGF0aDpyb3V0ZXIucGF0aG5hbWUsJ2h0dHA6Ly9uJyk7fWNhdGNoKF8pey8vIGZhbGxiYWNrIHRvIC8gZm9yIGludmFsaWQgYXNQYXRoIHZhbHVlcyBlLmcuIC8vXG5iYXNlPW5ldyBVUkwoJy8nLCdodHRwOi8vbicpO30vLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuaWYoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKXtyZXR1cm4gcmVzb2x2ZUFzP1t1cmxBc1N0cmluZ106dXJsQXNTdHJpbmc7fXRyeXtjb25zdCBmaW5hbFVybD1uZXcgVVJMKHVybEFzU3RyaW5nLGJhc2UpO2ZpbmFsVXJsLnBhdGhuYW1lPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKShmaW5hbFVybC5wYXRobmFtZSk7bGV0IGludGVycG9sYXRlZEFzPScnO2lmKCgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKGZpbmFsVXJsLnBhdGhuYW1lKSYmZmluYWxVcmwuc2VhcmNoUGFyYW1zJiZyZXNvbHZlQXMpe2NvbnN0IHF1ZXJ5PSgwLF9xdWVyeXN0cmluZy5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KShmaW5hbFVybC5zZWFyY2hQYXJhbXMpO2NvbnN0e3Jlc3VsdCxwYXJhbXN9PWludGVycG9sYXRlQXMoZmluYWxVcmwucGF0aG5hbWUsZmluYWxVcmwucGF0aG5hbWUscXVlcnkpO2lmKHJlc3VsdCl7aW50ZXJwb2xhdGVkQXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh7cGF0aG5hbWU6cmVzdWx0LGhhc2g6ZmluYWxVcmwuaGFzaCxxdWVyeTpvbWl0UGFybXNGcm9tUXVlcnkocXVlcnkscGFyYW1zKX0pO319Ly8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbmNvbnN0IHJlc29sdmVkSHJlZj1maW5hbFVybC5vcmlnaW49PT1iYXNlLm9yaWdpbj9maW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpOmZpbmFsVXJsLmhyZWY7cmV0dXJuIHJlc29sdmVBcz9bcmVzb2x2ZWRIcmVmLGludGVycG9sYXRlZEFzfHxyZXNvbHZlZEhyZWZdOnJlc29sdmVkSHJlZjt9Y2F0Y2goXyl7cmV0dXJuIHJlc29sdmVBcz9bdXJsQXNTdHJpbmddOnVybEFzU3RyaW5nO319ZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsKXtjb25zdCBvcmlnaW49KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpO3JldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pP3VybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCk6dXJsO31mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyLHVybCxhcyl7Ly8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4vLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxubGV0W3Jlc29sdmVkSHJlZixyZXNvbHZlZEFzXT1yZXNvbHZlSHJlZihyb3V0ZXIsdXJsLHRydWUpO2NvbnN0IG9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7Y29uc3QgaHJlZkhhZE9yaWdpbj1yZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pO2NvbnN0IGFzSGFkT3JpZ2luPXJlc29sdmVkQXMmJnJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pO3Jlc29sdmVkSHJlZj1zdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpO3Jlc29sdmVkQXM9cmVzb2x2ZWRBcz9zdHJpcE9yaWdpbihyZXNvbHZlZEFzKTpyZXNvbHZlZEFzO2NvbnN0IHByZXBhcmVkVXJsPWhyZWZIYWRPcmlnaW4/cmVzb2x2ZWRIcmVmOmFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZik7Y29uc3QgcHJlcGFyZWRBcz1hcz9zdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIsYXMpKTpyZXNvbHZlZEFzfHxyZXNvbHZlZEhyZWY7cmV0dXJue3VybDpwcmVwYXJlZFVybCxhczphc0hhZE9yaWdpbj9wcmVwYXJlZEFzOmFkZEJhc2VQYXRoKHByZXBhcmVkQXMpfTt9ZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSxwYWdlcyl7Y29uc3QgY2xlYW5QYXRobmFtZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkoKDAsX2Rlbm9ybWFsaXplUGFnZVBhdGguZGVub3JtYWxpemVQYWdlUGF0aCkocGF0aG5hbWUpKTtpZihjbGVhblBhdGhuYW1lPT09Jy80MDQnfHxjbGVhblBhdGhuYW1lPT09Jy9fZXJyb3InKXtyZXR1cm4gcGF0aG5hbWU7fS8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbmlmKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lKSl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxucGFnZXMuc29tZShwYWdlPT57aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkocGFnZSkmJigwLF9yb3V0ZVJlZ2V4LmdldFJvdXRlUmVnZXgpKHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSkpe3BhdGhuYW1lPXBhZ2U7cmV0dXJuIHRydWU7fX0pO31yZXR1cm4oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkocGF0aG5hbWUpO31jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbj1wcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OJiZ0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcmJidzY3JvbGxSZXN0b3JhdGlvbidpbiB3aW5kb3cuaGlzdG9yeSYmISFmdW5jdGlvbigpe3RyeXtsZXQgdj0nX19uZXh0JzsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG5yZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LHYpLHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksdHJ1ZTt9Y2F0Y2gobil7fX0oKTtjb25zdCBTU0dfREFUQV9OT1RfRk9VTkQ9U3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKTtmdW5jdGlvbiBmZXRjaFJldHJ5KHVybCxhdHRlbXB0cyl7cmV0dXJuIGZldGNoKHVybCx7Ly8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4vLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbi8vXG4vLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4vLyA+IG9wdGlvbi5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbi8vXG4vLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG5jcmVkZW50aWFsczonc2FtZS1vcmlnaW4nfSkudGhlbihyZXM9PntpZighcmVzLm9rKXtpZihhdHRlbXB0cz4xJiZyZXMuc3RhdHVzPj01MDApe3JldHVybiBmZXRjaFJldHJ5KHVybCxhdHRlbXB0cy0xKTt9aWYocmVzLnN0YXR1cz09PTQwNCl7cmV0dXJuIHJlcy5qc29uKCkudGhlbihkYXRhPT57aWYoZGF0YS5ub3RGb3VuZCl7cmV0dXJue25vdEZvdW5kOlNTR19EQVRBX05PVF9GT1VORH07fXRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7fSk7fXRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7fXJldHVybiByZXMuanNvbigpO30pO31mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLGlzU2VydmVyUmVuZGVyKXtyZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZixpc1NlcnZlclJlbmRlcj8zOjEpLmNhdGNoKGVycj0+ey8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbi8vIGxvb3AuXG5pZighaXNTZXJ2ZXJSZW5kZXIpeygwLF9yb3V0ZUxvYWRlci5tYXJrQXNzZXRFcnJvcikoZXJyKTt9dGhyb3cgZXJyO30pO31jbGFzcyBSb3V0ZXJ7LyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4vLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuY29uc3RydWN0b3IoX3BhdGhuYW1lLF9xdWVyeSxfYXMse2luaXRpYWxQcm9wcyxwYWdlTG9hZGVyLEFwcCx3cmFwQXBwLENvbXBvbmVudCxlcnIsc3Vic2NyaXB0aW9uLGlzRmFsbGJhY2ssbG9jYWxlLGxvY2FsZXMsZGVmYXVsdExvY2FsZSxkb21haW5Mb2NhbGVzLGlzUHJldmlld30pe3RoaXMucm91dGU9dm9pZCAwO3RoaXMucGF0aG5hbWU9dm9pZCAwO3RoaXMucXVlcnk9dm9pZCAwO3RoaXMuYXNQYXRoPXZvaWQgMDt0aGlzLmJhc2VQYXRoPXZvaWQgMDt0aGlzLmNvbXBvbmVudHM9dm9pZCAwO3RoaXMuc2RjPXt9O3RoaXMuc2RyPXt9O3RoaXMuc3ViPXZvaWQgMDt0aGlzLmNsYz12b2lkIDA7dGhpcy5wYWdlTG9hZGVyPXZvaWQgMDt0aGlzLl9icHM9dm9pZCAwO3RoaXMuZXZlbnRzPXZvaWQgMDt0aGlzLl93cmFwQXBwPXZvaWQgMDt0aGlzLmlzU3NyPXZvaWQgMDt0aGlzLmlzRmFsbGJhY2s9dm9pZCAwO3RoaXMuX2luRmxpZ2h0Um91dGU9dm9pZCAwO3RoaXMuX3NoYWxsb3c9dm9pZCAwO3RoaXMubG9jYWxlPXZvaWQgMDt0aGlzLmxvY2FsZXM9dm9pZCAwO3RoaXMuZGVmYXVsdExvY2FsZT12b2lkIDA7dGhpcy5kb21haW5Mb2NhbGVzPXZvaWQgMDt0aGlzLmlzUmVhZHk9dm9pZCAwO3RoaXMuaXNQcmV2aWV3PXZvaWQgMDt0aGlzLmlzTG9jYWxlRG9tYWluPXZvaWQgMDt0aGlzLl9pZHg9MDt0aGlzLm9uUG9wU3RhdGU9ZT0+e2NvbnN0IHN0YXRlPWUuc3RhdGU7aWYoIXN0YXRlKXsvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbi8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuLy9cbi8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4vLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4vLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbi8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbi8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuY29uc3R7cGF0aG5hbWUscXVlcnl9PXRoaXM7dGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywoMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTphZGRCYXNlUGF0aChwYXRobmFtZSkscXVlcnl9KSwoMCxfdXRpbHMuZ2V0VVJMKSgpKTtyZXR1cm47fWlmKCFzdGF0ZS5fX04pe3JldHVybjt9bGV0IGZvcmNlZFNjcm9sbDtjb25zdHt1cmwsYXMsb3B0aW9ucyxpZHh9PXN0YXRlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pe2lmKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKXtpZih0aGlzLl9pZHghPT1pZHgpey8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxudHJ5e3Nlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyt0aGlzLl9pZHgsSlNPTi5zdHJpbmdpZnkoe3g6c2VsZi5wYWdlWE9mZnNldCx5OnNlbGYucGFnZVlPZmZzZXR9KSk7fWNhdGNoKF91bnVzZWQpe30vLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG50cnl7Y29uc3Qgdj1zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycraWR4KTtmb3JjZWRTY3JvbGw9SlNPTi5wYXJzZSh2KTt9Y2F0Y2goX3VudXNlZDIpe2ZvcmNlZFNjcm9sbD17eDowLHk6MH07fX19fXRoaXMuX2lkeD1pZHg7Y29uc3R7cGF0aG5hbWV9PSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHVybCk7Ly8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4vLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbmlmKHRoaXMuaXNTc3ImJmFzPT09dGhpcy5hc1BhdGgmJnBhdGhuYW1lPT09dGhpcy5wYXRobmFtZSl7cmV0dXJuO30vLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4vLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuaWYodGhpcy5fYnBzJiYhdGhpcy5fYnBzKHN0YXRlKSl7cmV0dXJuO310aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJyx1cmwsYXMsT2JqZWN0LmFzc2lnbih7fSxvcHRpb25zLHtzaGFsbG93Om9wdGlvbnMuc2hhbGxvdyYmdGhpcy5fc2hhbGxvdyxsb2NhbGU6b3B0aW9ucy5sb2NhbGV8fHRoaXMuZGVmYXVsdExvY2FsZX0pLGZvcmNlZFNjcm9sbCk7fTsvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbnRoaXMucm91dGU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKF9wYXRobmFtZSk7Ly8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG50aGlzLmNvbXBvbmVudHM9e307Ly8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbi8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbmlmKF9wYXRobmFtZSE9PScvX2Vycm9yJyl7dGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdPXtDb21wb25lbnQsaW5pdGlhbDp0cnVlLHByb3BzOmluaXRpYWxQcm9wcyxlcnIsX19OX1NTRzppbml0aWFsUHJvcHMmJmluaXRpYWxQcm9wcy5fX05fU1NHLF9fTl9TU1A6aW5pdGlhbFByb3BzJiZpbml0aWFsUHJvcHMuX19OX1NTUH07fXRoaXMuY29tcG9uZW50c1snL19hcHAnXT17Q29tcG9uZW50OkFwcCxzdHlsZVNoZWV0czpbLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL119Oy8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4vLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxudGhpcy5ldmVudHM9Um91dGVyLmV2ZW50czt0aGlzLnBhZ2VMb2FkZXI9cGFnZUxvYWRlcjt0aGlzLnBhdGhuYW1lPV9wYXRobmFtZTt0aGlzLnF1ZXJ5PV9xdWVyeTsvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbmNvbnN0IGF1dG9FeHBvcnREeW5hbWljPSgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKF9wYXRobmFtZSkmJnNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0O3RoaXMuYXNQYXRoPWF1dG9FeHBvcnREeW5hbWljP19wYXRobmFtZTpfYXM7dGhpcy5iYXNlUGF0aD1iYXNlUGF0aDt0aGlzLnN1Yj1zdWJzY3JpcHRpb247dGhpcy5jbGM9bnVsbDt0aGlzLl93cmFwQXBwPXdyYXBBcHA7Ly8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbnRoaXMuaXNTc3I9dHJ1ZTt0aGlzLmlzRmFsbGJhY2s9aXNGYWxsYmFjazt0aGlzLmlzUmVhZHk9ISEoc2VsZi5fX05FWFRfREFUQV9fLmdzc3B8fHNlbGYuX19ORVhUX0RBVEFfXy5naXB8fCFhdXRvRXhwb3J0RHluYW1pYyYmIXNlbGYubG9jYXRpb24uc2VhcmNoJiYhcHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyk7dGhpcy5pc1ByZXZpZXc9ISFpc1ByZXZpZXc7dGhpcy5pc0xvY2FsZURvbWFpbj1mYWxzZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXt0aGlzLmxvY2FsZT1sb2NhbGU7dGhpcy5sb2NhbGVzPWxvY2FsZXM7dGhpcy5kZWZhdWx0TG9jYWxlPWRlZmF1bHRMb2NhbGU7dGhpcy5kb21haW5Mb2NhbGVzPWRvbWFpbkxvY2FsZXM7dGhpcy5pc0xvY2FsZURvbWFpbj0hIWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLHNlbGYubG9jYXRpb24uaG9zdG5hbWUpO31pZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpey8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4vLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuaWYoX2FzLnN1YnN0cigwLDIpIT09Jy8vJyl7Ly8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbi8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuY29uc3Qgb3B0aW9ucz17bG9jYWxlfTtvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZj1fYXMhPT1fcGF0aG5hbWU7dGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywoMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTphZGRCYXNlUGF0aChfcGF0aG5hbWUpLHF1ZXJ5Ol9xdWVyeX0pLCgwLF91dGlscy5nZXRVUkwpKCksb3B0aW9ucyk7fXdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsdGhpcy5vblBvcFN0YXRlKTsvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG5pZihwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKXtpZihtYW51YWxTY3JvbGxSZXN0b3JhdGlvbil7d2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb249J21hbnVhbCc7fX19fXJlbG9hZCgpe3dpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTt9LyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9iYWNrKCl7d2luZG93Lmhpc3RvcnkuYmFjaygpO30vKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovcHVzaCh1cmwsYXMsb3B0aW9ucz17fSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTil7Ly8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4vLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuaWYobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pe3RyeXsvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyt0aGlzLl9pZHgsSlNPTi5zdHJpbmdpZnkoe3g6c2VsZi5wYWdlWE9mZnNldCx5OnNlbGYucGFnZVlPZmZzZXR9KSk7fWNhdGNoKF91bnVzZWQzKXt9fX07KHt1cmwsYXN9PXByZXBhcmVVcmxBcyh0aGlzLHVybCxhcykpO3JldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJyx1cmwsYXMsb3B0aW9ucyk7fS8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9yZXBsYWNlKHVybCxhcyxvcHRpb25zPXt9KXs7KHt1cmwsYXN9PXByZXBhcmVVcmxBcyh0aGlzLHVybCxhcykpO3JldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJyx1cmwsYXMsb3B0aW9ucyk7fWFzeW5jIGNoYW5nZShtZXRob2QsdXJsLGFzLG9wdGlvbnMsZm9yY2VkU2Nyb2xsKXtpZighaXNMb2NhbFVSTCh1cmwpKXt3aW5kb3cubG9jYXRpb24uaHJlZj11cmw7cmV0dXJuIGZhbHNlO31jb25zdCBzaG91bGRSZXNvbHZlSHJlZj11cmw9PT1hc3x8b3B0aW9ucy5faHx8b3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY7Ly8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4vLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbmlmKG9wdGlvbnMuX2gpe3RoaXMuaXNSZWFkeT10cnVlO31sZXQgbG9jYWxlQ2hhbmdlPW9wdGlvbnMubG9jYWxlIT09dGhpcy5sb2NhbGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7dGhpcy5sb2NhbGU9b3B0aW9ucy5sb2NhbGU9PT1mYWxzZT90aGlzLmRlZmF1bHRMb2NhbGU6b3B0aW9ucy5sb2NhbGV8fHRoaXMubG9jYWxlO2lmKHR5cGVvZiBvcHRpb25zLmxvY2FsZT09PSd1bmRlZmluZWQnKXtvcHRpb25zLmxvY2FsZT10aGlzLmxvY2FsZTt9Y29uc3QgcGFyc2VkQXM9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoaGFzQmFzZVBhdGgoYXMpP2RlbEJhc2VQYXRoKGFzKTphcyk7Y29uc3QgbG9jYWxlUGF0aFJlc3VsdD0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZXMpO2lmKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpe3RoaXMubG9jYWxlPWxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGU7cGFyc2VkQXMucGF0aG5hbWU9YWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpO2FzPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkQXMpO3VybD1hZGRCYXNlUGF0aCgoMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShoYXNCYXNlUGF0aCh1cmwpP2RlbEJhc2VQYXRoKHVybCk6dXJsLHRoaXMubG9jYWxlcykucGF0aG5hbWUpO31sZXQgZGlkTmF2aWdhdGU9ZmFsc2U7Ly8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4vLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe3ZhciBfdGhpcyRsb2NhbGVzOy8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbmlmKCEoKF90aGlzJGxvY2FsZXM9dGhpcy5sb2NhbGVzKSE9bnVsbCYmX3RoaXMkbG9jYWxlcy5pbmNsdWRlcyh0aGlzLmxvY2FsZSkpKXtwYXJzZWRBcy5wYXRobmFtZT1hZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsdGhpcy5sb2NhbGUpO3dpbmRvdy5sb2NhdGlvbi5ocmVmPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkQXMpOy8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4vLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuZGlkTmF2aWdhdGU9dHJ1ZTt9fWNvbnN0IGRldGVjdGVkRG9tYWluPWRldGVjdERvbWFpbkxvY2FsZSh0aGlzLmRvbWFpbkxvY2FsZXMsdW5kZWZpbmVkLHRoaXMubG9jYWxlKTsvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbi8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuaWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Ly8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbi8vIGNvcnJlY3QgZG9tYWluXG5pZighZGlkTmF2aWdhdGUmJmRldGVjdGVkRG9tYWluJiZ0aGlzLmlzTG9jYWxlRG9tYWluJiZzZWxmLmxvY2F0aW9uLmhvc3RuYW1lIT09ZGV0ZWN0ZWREb21haW4uZG9tYWluKXtjb25zdCBhc05vQmFzZVBhdGg9ZGVsQmFzZVBhdGgoYXMpO3dpbmRvdy5sb2NhdGlvbi5ocmVmPWBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwPycnOidzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2FkZEJhc2VQYXRoKGAke3RoaXMubG9jYWxlPT09ZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZT8nJzpgLyR7dGhpcy5sb2NhbGV9YH0ke2FzTm9CYXNlUGF0aD09PScvJz8nJzphc05vQmFzZVBhdGh9YHx8Jy8nKX1gOy8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4vLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuZGlkTmF2aWdhdGU9dHJ1ZTt9fWlmKGRpZE5hdmlnYXRlKXtyZXR1cm4gbmV3IFByb21pc2UoKCk9Pnt9KTt9fWlmKCFvcHRpb25zLl9oKXt0aGlzLmlzU3NyPWZhbHNlO30vLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG5pZihfdXRpbHMuU1Qpe3BlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7fWNvbnN0e3NoYWxsb3c9ZmFsc2V9PW9wdGlvbnM7Y29uc3Qgcm91dGVQcm9wcz17c2hhbGxvd307aWYodGhpcy5faW5GbGlnaHRSb3V0ZSl7dGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSxyb3V0ZVByb3BzKTt9YXM9YWRkQmFzZVBhdGgoYWRkTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKT9kZWxCYXNlUGF0aChhcyk6YXMsb3B0aW9ucy5sb2NhbGUsdGhpcy5kZWZhdWx0TG9jYWxlKSk7Y29uc3QgY2xlYW5lZEFzPWRlbExvY2FsZShoYXNCYXNlUGF0aChhcyk/ZGVsQmFzZVBhdGgoYXMpOmFzLHRoaXMubG9jYWxlKTt0aGlzLl9pbkZsaWdodFJvdXRlPWFzOy8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4vLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG4vLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4vLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4vLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbmlmKCFvcHRpb25zLl9oJiZ0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKXt0aGlzLmFzUGF0aD1jbGVhbmVkQXM7Um91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLGFzLHJvdXRlUHJvcHMpOy8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG50aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyk7dGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKTt0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sbnVsbCk7Um91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLGFzLHJvdXRlUHJvcHMpO3JldHVybiB0cnVlO31sZXQgcGFyc2VkPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHVybCk7bGV0e3BhdGhuYW1lLHF1ZXJ5fT1wYXJzZWQ7Ly8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4vLyB3aGVuIHJld3JpdHRlbiB0b1xubGV0IHBhZ2VzLHJld3JpdGVzO3RyeXtwYWdlcz1hd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTsoe19fcmV3cml0ZXM6cmV3cml0ZXN9PWF3YWl0KDAsX3JvdXRlTG9hZGVyLmdldENsaWVudEJ1aWxkTWFuaWZlc3QpKCkpO31jYXRjaChlcnIpey8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxud2luZG93LmxvY2F0aW9uLmhyZWY9YXM7cmV0dXJuIGZhbHNlO30vLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4vLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4vLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuaWYoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSYmIWxvY2FsZUNoYW5nZSl7bWV0aG9kPSdyZXBsYWNlU3RhdGUnO30vLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxubGV0IHJlc29sdmVkQXM9YXM7Ly8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbnBhdGhuYW1lPXBhdGhuYW1lPygwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShkZWxCYXNlUGF0aChwYXRobmFtZSkpOnBhdGhuYW1lO2lmKHNob3VsZFJlc29sdmVIcmVmJiZwYXRobmFtZSE9PScvX2Vycm9yJyl7O29wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmPXRydWU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyYmYXMuc3RhcnRzV2l0aCgnLycpKXtjb25zdCByZXdyaXRlc1Jlc3VsdD0oMCxfcmVzb2x2ZVJld3JpdGVzLmRlZmF1bHQpKGFkZEJhc2VQYXRoKGFkZExvY2FsZShjbGVhbmVkQXMsdGhpcy5sb2NhbGUpKSxwYWdlcyxyZXdyaXRlcyxxdWVyeSxwPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAscGFnZXMpLHRoaXMubG9jYWxlcyk7cmVzb2x2ZWRBcz1yZXdyaXRlc1Jlc3VsdC5hc1BhdGg7aWYocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UmJnJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZil7Ly8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbnBhdGhuYW1lPXJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtwYXJzZWQucGF0aG5hbWU9YWRkQmFzZVBhdGgocGF0aG5hbWUpO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1lbHNle3BhcnNlZC5wYXRobmFtZT1yZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLHBhZ2VzKTtpZihwYXJzZWQucGF0aG5hbWUhPT1wYXRobmFtZSl7cGF0aG5hbWU9cGFyc2VkLnBhdGhuYW1lO3BhcnNlZC5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXRobmFtZSk7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fX1jb25zdCByb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkocGF0aG5hbWUpO2lmKCFpc0xvY2FsVVJMKGFzKSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3Rocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2ArYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYCk7fXdpbmRvdy5sb2NhdGlvbi5ocmVmPWFzO3JldHVybiBmYWxzZTt9cmVzb2x2ZWRBcz1kZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksdGhpcy5sb2NhbGUpO2lmKCgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKHJvdXRlKSl7Y29uc3QgcGFyc2VkQXM9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkocmVzb2x2ZWRBcyk7Y29uc3QgYXNQYXRobmFtZT1wYXJzZWRBcy5wYXRobmFtZTtjb25zdCByb3V0ZVJlZ2V4PSgwLF9yb3V0ZVJlZ2V4LmdldFJvdXRlUmVnZXgpKHJvdXRlKTtjb25zdCByb3V0ZU1hdGNoPSgwLF9yb3V0ZU1hdGNoZXIuZ2V0Um91dGVNYXRjaGVyKShyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKTtjb25zdCBzaG91bGRJbnRlcnBvbGF0ZT1yb3V0ZT09PWFzUGF0aG5hbWU7Y29uc3QgaW50ZXJwb2xhdGVkQXM9c2hvdWxkSW50ZXJwb2xhdGU/aW50ZXJwb2xhdGVBcyhyb3V0ZSxhc1BhdGhuYW1lLHF1ZXJ5KTp7fTtpZighcm91dGVNYXRjaHx8c2hvdWxkSW50ZXJwb2xhdGUmJiFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpe2NvbnN0IG1pc3NpbmdQYXJhbXM9T2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihwYXJhbT0+IXF1ZXJ5W3BhcmFtXSk7aWYobWlzc2luZ1BhcmFtcy5sZW5ndGg+MCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnNvbGUud2FybihgJHtzaG91bGRJbnRlcnBvbGF0ZT9gSW50ZXJwb2xhdGluZyBocmVmYDpgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgK2B0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO310aHJvdyBuZXcgRXJyb3IoKHNob3VsZEludGVycG9sYXRlP2BUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGA6YFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkrYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtzaG91bGRJbnRlcnBvbGF0ZT8naHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCc6J2luY29tcGF0aWJsZS1ocmVmLWFzJ31gKTt9fWVsc2UgaWYoc2hvdWxkSW50ZXJwb2xhdGUpe2FzPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoT2JqZWN0LmFzc2lnbih7fSxwYXJzZWRBcyx7cGF0aG5hbWU6aW50ZXJwb2xhdGVkQXMucmVzdWx0LHF1ZXJ5Om9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxpbnRlcnBvbGF0ZWRBcy5wYXJhbXMpfSkpO31lbHNley8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG5PYmplY3QuYXNzaWduKHF1ZXJ5LHJvdXRlTWF0Y2gpO319Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0Jyxhcyxyb3V0ZVByb3BzKTt0cnl7dmFyIF9zZWxmJF9fTkVYVF9EQVRBX18kcCxfc2VsZiRfX05FWFRfREFUQV9fJHAyLF9vcHRpb25zJHNjcm9sbDtsZXQgcm91dGVJbmZvPWF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLHJlc29sdmVkQXMscm91dGVQcm9wcyk7bGV0e2Vycm9yLHByb3BzLF9fTl9TU0csX19OX1NTUH09cm91dGVJbmZvOy8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuaWYoKF9fTl9TU0d8fF9fTl9TU1ApJiZwcm9wcyl7aWYocHJvcHMucGFnZVByb3BzJiZwcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUKXtjb25zdCBkZXN0aW5hdGlvbj1wcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUOy8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4vLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4vLyBpdCdzIG5vdFxuaWYoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKXtjb25zdCBwYXJzZWRIcmVmPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKGRlc3RpbmF0aW9uKTtwYXJzZWRIcmVmLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkSHJlZi5wYXRobmFtZSxwYWdlcyk7Y29uc3R7dXJsOm5ld1VybCxhczpuZXdBc309cHJlcGFyZVVybEFzKHRoaXMsZGVzdGluYXRpb24sZGVzdGluYXRpb24pO3JldHVybiB0aGlzLmNoYW5nZShtZXRob2QsbmV3VXJsLG5ld0FzLG9wdGlvbnMpO313aW5kb3cubG9jYXRpb24uaHJlZj1kZXN0aW5hdGlvbjtyZXR1cm4gbmV3IFByb21pc2UoKCk9Pnt9KTt9dGhpcy5pc1ByZXZpZXc9ISFwcm9wcy5fX05fUFJFVklFVzsvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG5pZihwcm9wcy5ub3RGb3VuZD09PVNTR19EQVRBX05PVF9GT1VORCl7bGV0IG5vdEZvdW5kUm91dGU7dHJ5e2F3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKTtub3RGb3VuZFJvdXRlPScvNDA0Jzt9Y2F0Y2goXyl7bm90Rm91bmRSb3V0ZT0nL19lcnJvcic7fXJvdXRlSW5mbz1hd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhub3RGb3VuZFJvdXRlLG5vdEZvdW5kUm91dGUscXVlcnksYXMscmVzb2x2ZWRBcyx7c2hhbGxvdzpmYWxzZX0pO319Um91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxhcyxyb3V0ZVByb3BzKTt0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyk7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0IGFwcENvbXA9dGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudDt3aW5kb3cubmV4dC5pc1ByZXJlbmRlcmVkPWFwcENvbXAuZ2V0SW5pdGlhbFByb3BzPT09YXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzJiYhcm91dGVJbmZvLkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7fWlmKG9wdGlvbnMuX2gmJnBhdGhuYW1lPT09Jy9fZXJyb3InJiYoKF9zZWxmJF9fTkVYVF9EQVRBX18kcD1zZWxmLl9fTkVYVF9EQVRBX18ucHJvcHMpPT1udWxsP3ZvaWQgMDooX3NlbGYkX19ORVhUX0RBVEFfXyRwMj1fc2VsZiRfX05FWFRfREFUQV9fJHAucGFnZVByb3BzKT09bnVsbD92b2lkIDA6X3NlbGYkX19ORVhUX0RBVEFfXyRwMi5zdGF0dXNDb2RlKT09PTUwMCYmcHJvcHMhPW51bGwmJnByb3BzLnBhZ2VQcm9wcyl7Ly8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4vLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG5wcm9wcy5wYWdlUHJvcHMuc3RhdHVzQ29kZT01MDA7fS8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbmNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGU9b3B0aW9ucy5zaGFsbG93JiZ0aGlzLnJvdXRlPT09cm91dGU7Y29uc3Qgc2hvdWxkU2Nyb2xsPShfb3B0aW9ucyRzY3JvbGw9b3B0aW9ucy5zY3JvbGwpIT1udWxsP19vcHRpb25zJHNjcm9sbDohaXNWYWxpZFNoYWxsb3dSb3V0ZTtjb25zdCByZXNldFNjcm9sbD1zaG91bGRTY3JvbGw/e3g6MCx5OjB9Om51bGw7YXdhaXQgdGhpcy5zZXQocm91dGUscGF0aG5hbWUscXVlcnksY2xlYW5lZEFzLHJvdXRlSW5mbyxmb3JjZWRTY3JvbGwhPW51bGw/Zm9yY2VkU2Nyb2xsOnJlc2V0U2Nyb2xsKS5jYXRjaChlPT57aWYoZS5jYW5jZWxsZWQpZXJyb3I9ZXJyb3J8fGU7ZWxzZSB0aHJvdyBlO30pO2lmKGVycm9yKXtSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLGVycm9yLGNsZWFuZWRBcyxyb3V0ZVByb3BzKTt0aHJvdyBlcnJvcjt9aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7aWYodGhpcy5sb2NhbGUpe2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nPXRoaXMubG9jYWxlO319Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxhcyxyb3V0ZVByb3BzKTtyZXR1cm4gdHJ1ZTt9Y2F0Y2goZXJyKXtpZihlcnIuY2FuY2VsbGVkKXtyZXR1cm4gZmFsc2U7fXRocm93IGVycjt9fWNoYW5nZVN0YXRlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucz17fSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKHR5cGVvZiB3aW5kb3cuaGlzdG9yeT09PSd1bmRlZmluZWQnKXtjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO3JldHVybjt9aWYodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF09PT0ndW5kZWZpbmVkJyl7Y29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKTtyZXR1cm47fX1pZihtZXRob2QhPT0ncHVzaFN0YXRlJ3x8KDAsX3V0aWxzLmdldFVSTCkoKSE9PWFzKXt0aGlzLl9zaGFsbG93PW9wdGlvbnMuc2hhbGxvdzt3aW5kb3cuaGlzdG9yeVttZXRob2RdKHt1cmwsYXMsb3B0aW9ucyxfX046dHJ1ZSxpZHg6dGhpcy5faWR4PW1ldGhvZCE9PSdwdXNoU3RhdGUnP3RoaXMuX2lkeDp0aGlzLl9pZHgrMX0sLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4vLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbicnLGFzKTt9fWFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycixwYXRobmFtZSxxdWVyeSxhcyxyb3V0ZVByb3BzLGxvYWRFcnJvckZhaWwpe2lmKGVyci5jYW5jZWxsZWQpey8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG50aHJvdyBlcnI7fWlmKCgwLF9yb3V0ZUxvYWRlci5pc0Fzc2V0RXJyb3IpKGVycil8fGxvYWRFcnJvckZhaWwpe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsZXJyLGFzLHJvdXRlUHJvcHMpOy8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4vLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4vLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG53aW5kb3cubG9jYXRpb24uaHJlZj1hczsvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbi8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG50aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKCk7fXRyeXtsZXQgQ29tcG9uZW50O2xldCBzdHlsZVNoZWV0cztsZXQgcHJvcHM7aWYodHlwZW9mIENvbXBvbmVudD09PSd1bmRlZmluZWQnfHx0eXBlb2Ygc3R5bGVTaGVldHM9PT0ndW5kZWZpbmVkJyl7Oyh7cGFnZTpDb21wb25lbnQsc3R5bGVTaGVldHN9PWF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKSk7fWNvbnN0IHJvdXRlSW5mbz17cHJvcHMsQ29tcG9uZW50LHN0eWxlU2hlZXRzLGVycixlcnJvcjplcnJ9O2lmKCFyb3V0ZUluZm8ucHJvcHMpe3RyeXtyb3V0ZUluZm8ucHJvcHM9YXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LHtlcnIscGF0aG5hbWUscXVlcnl9KTt9Y2F0Y2goZ2lwRXJyKXtjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLGdpcEVycik7cm91dGVJbmZvLnByb3BzPXt9O319cmV0dXJuIHJvdXRlSW5mbzt9Y2F0Y2gocm91dGVJbmZvRXJyKXtyZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIscGF0aG5hbWUscXVlcnksYXMscm91dGVQcm9wcyx0cnVlKTt9fWFzeW5jIGdldFJvdXRlSW5mbyhyb3V0ZSxwYXRobmFtZSxxdWVyeSxhcyxyZXNvbHZlZEFzLHJvdXRlUHJvcHMpe3RyeXtjb25zdCBleGlzdGluZ1JvdXRlSW5mbz10aGlzLmNvbXBvbmVudHNbcm91dGVdO2lmKHJvdXRlUHJvcHMuc2hhbGxvdyYmZXhpc3RpbmdSb3V0ZUluZm8mJnRoaXMucm91dGU9PT1yb3V0ZSl7cmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvO31jb25zdCBjYWNoZWRSb3V0ZUluZm89ZXhpc3RpbmdSb3V0ZUluZm8mJidpbml0aWFsJ2luIGV4aXN0aW5nUm91dGVJbmZvP3VuZGVmaW5lZDpleGlzdGluZ1JvdXRlSW5mbztjb25zdCByb3V0ZUluZm89Y2FjaGVkUm91dGVJbmZvP2NhY2hlZFJvdXRlSW5mbzphd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKHJlcz0+KHtDb21wb25lbnQ6cmVzLnBhZ2Usc3R5bGVTaGVldHM6cmVzLnN0eWxlU2hlZXRzLF9fTl9TU0c6cmVzLm1vZC5fX05fU1NHLF9fTl9TU1A6cmVzLm1vZC5fX05fU1NQfSkpO2NvbnN0e0NvbXBvbmVudCxfX05fU1NHLF9fTl9TU1B9PXJvdXRlSW5mbztpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3R7aXNWYWxpZEVsZW1lbnRUeXBlfT1yZXF1aXJlKCdyZWFjdC1pcycpO2lmKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSl7dGhyb3cgbmV3IEVycm9yKGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImApO319bGV0IGRhdGFIcmVmO2lmKF9fTl9TU0d8fF9fTl9TU1Ape2RhdGFIcmVmPXRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZigoMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZSxxdWVyeX0pLHJlc29sdmVkQXMsX19OX1NTRyx0aGlzLmxvY2FsZSk7fWNvbnN0IHByb3BzPWF3YWl0IHRoaXMuX2dldERhdGEoKCk9Pl9fTl9TU0c/dGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZik6X19OX1NTUD90aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKTp0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbntwYXRobmFtZSxxdWVyeSxhc1BhdGg6YXMsbG9jYWxlOnRoaXMubG9jYWxlLGxvY2FsZXM6dGhpcy5sb2NhbGVzLGRlZmF1bHRMb2NhbGU6dGhpcy5kZWZhdWx0TG9jYWxlfSkpO3JvdXRlSW5mby5wcm9wcz1wcm9wczt0aGlzLmNvbXBvbmVudHNbcm91dGVdPXJvdXRlSW5mbztyZXR1cm4gcm91dGVJbmZvO31jYXRjaChlcnIpe3JldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycixwYXRobmFtZSxxdWVyeSxhcyxyb3V0ZVByb3BzKTt9fXNldChyb3V0ZSxwYXRobmFtZSxxdWVyeSxhcyxkYXRhLHJlc2V0U2Nyb2xsKXt0aGlzLmlzRmFsbGJhY2s9ZmFsc2U7dGhpcy5yb3V0ZT1yb3V0ZTt0aGlzLnBhdGhuYW1lPXBhdGhuYW1lO3RoaXMucXVlcnk9cXVlcnk7dGhpcy5hc1BhdGg9YXM7cmV0dXJuIHRoaXMubm90aWZ5KGRhdGEscmVzZXRTY3JvbGwpO30vKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovYmVmb3JlUG9wU3RhdGUoY2Ipe3RoaXMuX2Jwcz1jYjt9b25seUFIYXNoQ2hhbmdlKGFzKXtpZighdGhpcy5hc1BhdGgpcmV0dXJuIGZhbHNlO2NvbnN0W29sZFVybE5vSGFzaCxvbGRIYXNoXT10aGlzLmFzUGF0aC5zcGxpdCgnIycpO2NvbnN0W25ld1VybE5vSGFzaCxuZXdIYXNoXT1hcy5zcGxpdCgnIycpOy8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbmlmKG5ld0hhc2gmJm9sZFVybE5vSGFzaD09PW5ld1VybE5vSGFzaCYmb2xkSGFzaD09PW5ld0hhc2gpe3JldHVybiB0cnVlO30vLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG5pZihvbGRVcmxOb0hhc2ghPT1uZXdVcmxOb0hhc2gpe3JldHVybiBmYWxzZTt9Ly8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4vLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4vLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbnJldHVybiBvbGRIYXNoIT09bmV3SGFzaDt9c2Nyb2xsVG9IYXNoKGFzKXtjb25zdFssaGFzaF09YXMuc3BsaXQoJyMnKTsvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4vLyBUbyBtaXJyb3IgYnJvd3NlcnNcbmlmKGhhc2g9PT0nJ3x8aGFzaD09PSd0b3AnKXt3aW5kb3cuc2Nyb2xsVG8oMCwwKTtyZXR1cm47fS8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG5jb25zdCBpZEVsPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO2lmKGlkRWwpe2lkRWwuc2Nyb2xsSW50b1ZpZXcoKTtyZXR1cm47fS8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuLy8gVG8gbWlycm9yIGJyb3dzZXJzXG5jb25zdCBuYW1lRWw9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF07aWYobmFtZUVsKXtuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTt9fXVybElzTmV3KGFzUGF0aCl7cmV0dXJuIHRoaXMuYXNQYXRoIT09YXNQYXRoO30vKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL2FzeW5jIHByZWZldGNoKHVybCxhc1BhdGg9dXJsLG9wdGlvbnM9e30pe2xldCBwYXJzZWQ9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTtsZXR7cGF0aG5hbWV9PXBhcnNlZDtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtpZihvcHRpb25zLmxvY2FsZT09PWZhbHNlKXtwYXRobmFtZT0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXRobmFtZSx0aGlzLmxvY2FsZXMpLnBhdGhuYW1lO3BhcnNlZC5wYXRobmFtZT1wYXRobmFtZTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO2xldCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShhc1BhdGgpO2NvbnN0IGxvY2FsZVBhdGhSZXN1bHQ9KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGFyc2VkQXMucGF0aG5hbWUsdGhpcy5sb2NhbGVzKTtwYXJzZWRBcy5wYXRobmFtZT1sb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lO29wdGlvbnMubG9jYWxlPWxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGV8fHRoaXMuZGVmYXVsdExvY2FsZTthc1BhdGg9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7fX1jb25zdCBwYWdlcz1hd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtsZXQgcmVzb2x2ZWRBcz1hc1BhdGg7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyYmYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSl7bGV0IHJld3JpdGVzOyh7X19yZXdyaXRlczpyZXdyaXRlc309YXdhaXQoMCxfcm91dGVMb2FkZXIuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCkoKSk7Y29uc3QgcmV3cml0ZXNSZXN1bHQ9KDAsX3Jlc29sdmVSZXdyaXRlcy5kZWZhdWx0KShhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXNQYXRoLHRoaXMubG9jYWxlKSkscGFnZXMscmV3cml0ZXMscGFyc2VkLnF1ZXJ5LHA9PnJlc29sdmVEeW5hbWljUm91dGUocCxwYWdlcyksdGhpcy5sb2NhbGVzKTtyZXNvbHZlZEFzPWRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLHRoaXMubG9jYWxlKTtpZihyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSYmcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKXsvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4vLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxucGF0aG5hbWU9cmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO3BhcnNlZC5wYXRobmFtZT1wYXRobmFtZTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319ZWxzZXtwYXJzZWQucGF0aG5hbWU9cmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUscGFnZXMpO2lmKHBhcnNlZC5wYXRobmFtZSE9PXBhdGhuYW1lKXtwYXRobmFtZT1wYXJzZWQucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1jb25zdCByb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkocGF0aG5hbWUpOy8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtyZXR1cm47fWF3YWl0IFByb21pc2UuYWxsKFt0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKGlzU3NnPT57cmV0dXJuIGlzU3NnP3RoaXMuX2dldFN0YXRpY0RhdGEodGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKHVybCxyZXNvbHZlZEFzLHRydWUsdHlwZW9mIG9wdGlvbnMubG9jYWxlIT09J3VuZGVmaW5lZCc/b3B0aW9ucy5sb2NhbGU6dGhpcy5sb2NhbGUpKTpmYWxzZTt9KSx0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eT8nbG9hZFBhZ2UnOidwcmVmZXRjaCddKHJvdXRlKV0pO31hc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSl7bGV0IGNhbmNlbGxlZD1mYWxzZTtjb25zdCBjYW5jZWw9dGhpcy5jbGM9KCk9PntjYW5jZWxsZWQ9dHJ1ZTt9O2NvbnN0IGNvbXBvbmVudFJlc3VsdD1hd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpO2lmKGNhbmNlbGxlZCl7Y29uc3QgZXJyb3I9bmV3IEVycm9yKGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgKTtlcnJvci5jYW5jZWxsZWQ9dHJ1ZTt0aHJvdyBlcnJvcjt9aWYoY2FuY2VsPT09dGhpcy5jbGMpe3RoaXMuY2xjPW51bGw7fXJldHVybiBjb21wb25lbnRSZXN1bHQ7fV9nZXREYXRhKGZuKXtsZXQgY2FuY2VsbGVkPWZhbHNlO2NvbnN0IGNhbmNlbD0oKT0+e2NhbmNlbGxlZD10cnVlO307dGhpcy5jbGM9Y2FuY2VsO3JldHVybiBmbigpLnRoZW4oZGF0YT0+e2lmKGNhbmNlbD09PXRoaXMuY2xjKXt0aGlzLmNsYz1udWxsO31pZihjYW5jZWxsZWQpe2NvbnN0IGVycj1uZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKTtlcnIuY2FuY2VsbGVkPXRydWU7dGhyb3cgZXJyO31yZXR1cm4gZGF0YTt9KTt9X2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpe2NvbnN0e2hyZWY6Y2FjaGVLZXl9PW5ldyBVUkwoZGF0YUhyZWYsd2luZG93LmxvY2F0aW9uLmhyZWYpO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J3Byb2R1Y3Rpb24nJiYhdGhpcy5pc1ByZXZpZXcmJnRoaXMuc2RjW2NhY2hlS2V5XSl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pO31yZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZix0aGlzLmlzU3NyKS50aGVuKGRhdGE9Pnt0aGlzLnNkY1tjYWNoZUtleV09ZGF0YTtyZXR1cm4gZGF0YTt9KTt9X2dldFNlcnZlckRhdGEoZGF0YUhyZWYpe2NvbnN0e2hyZWY6cmVzb3VyY2VLZXl9PW5ldyBVUkwoZGF0YUhyZWYsd2luZG93LmxvY2F0aW9uLmhyZWYpO2lmKHRoaXMuc2RyW3Jlc291cmNlS2V5XSl7cmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XTt9cmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XT1mZXRjaE5leHREYXRhKGRhdGFIcmVmLHRoaXMuaXNTc3IpLnRoZW4oZGF0YT0+e2RlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07cmV0dXJuIGRhdGE7fSkuY2F0Y2goZXJyPT57ZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTt0aHJvdyBlcnI7fSk7fWdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsY3R4KXtjb25zdHtDb21wb25lbnQ6QXBwfT10aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107Y29uc3QgQXBwVHJlZT10aGlzLl93cmFwQXBwKEFwcCk7Y3R4LkFwcFRyZWU9QXBwVHJlZTtyZXR1cm4oMCxfdXRpbHMubG9hZEdldEluaXRpYWxQcm9wcykoQXBwLHtBcHBUcmVlLENvbXBvbmVudCxyb3V0ZXI6dGhpcyxjdHh9KTt9YWJvcnRDb21wb25lbnRMb2FkKGFzLHJvdXRlUHJvcHMpe2lmKHRoaXMuY2xjKXtSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSxhcyxyb3V0ZVByb3BzKTt0aGlzLmNsYygpO3RoaXMuY2xjPW51bGw7fX1ub3RpZnkoZGF0YSxyZXNldFNjcm9sbCl7cmV0dXJuIHRoaXMuc3ViKGRhdGEsdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCxyZXNldFNjcm9sbCk7fX1leHBvcnRzLmRlZmF1bHQ9Um91dGVyO1JvdXRlci5ldmVudHM9KDAsX21pdHQuZGVmYXVsdCkoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmZvcm1hdFVybD1mb3JtYXRVcmw7dmFyIHF1ZXJ5c3RyaW5nPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL3F1ZXJ5c3RyaW5nXCIpKTtmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKXtpZih0eXBlb2YgV2Vha01hcCE9PVwiZnVuY3Rpb25cIilyZXR1cm4gbnVsbDt2YXIgY2FjaGU9bmV3IFdlYWtNYXAoKTtfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGU9ZnVuY3Rpb24oKXtyZXR1cm4gY2FjaGU7fTtyZXR1cm4gY2FjaGU7fWZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iail7aWYob2JqJiZvYmouX19lc01vZHVsZSl7cmV0dXJuIG9iajt9aWYob2JqPT09bnVsbHx8dHlwZW9mIG9iaiE9PVwib2JqZWN0XCImJnR5cGVvZiBvYmohPT1cImZ1bmN0aW9uXCIpe3JldHVybntkZWZhdWx0Om9ian07fXZhciBjYWNoZT1fZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtpZihjYWNoZSYmY2FjaGUuaGFzKG9iaikpe3JldHVybiBjYWNoZS5nZXQob2JqKTt9dmFyIG5ld09iaj17fTt2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSYmT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtmb3IodmFyIGtleSBpbiBvYmope2lmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosa2V5KSl7dmFyIGRlc2M9aGFzUHJvcGVydHlEZXNjcmlwdG9yP09iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLGtleSk6bnVsbDtpZihkZXNjJiYoZGVzYy5nZXR8fGRlc2Muc2V0KSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaixrZXksZGVzYyk7fWVsc2V7bmV3T2JqW2tleV09b2JqW2tleV07fX19bmV3T2JqLmRlZmF1bHQ9b2JqO2lmKGNhY2hlKXtjYWNoZS5zZXQob2JqLG5ld09iaik7fXJldHVybiBuZXdPYmo7fS8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzPS9odHRwcz98ZnRwfGdvcGhlcnxmaWxlLztmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqKXtsZXR7YXV0aCxob3N0bmFtZX09dXJsT2JqO2xldCBwcm90b2NvbD11cmxPYmoucHJvdG9jb2x8fCcnO2xldCBwYXRobmFtZT11cmxPYmoucGF0aG5hbWV8fCcnO2xldCBoYXNoPXVybE9iai5oYXNofHwnJztsZXQgcXVlcnk9dXJsT2JqLnF1ZXJ5fHwnJztsZXQgaG9zdD1mYWxzZTthdXRoPWF1dGg/ZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCc6JykrJ0AnOicnO2lmKHVybE9iai5ob3N0KXtob3N0PWF1dGgrdXJsT2JqLmhvc3Q7fWVsc2UgaWYoaG9zdG5hbWUpe2hvc3Q9YXV0aCsofmhvc3RuYW1lLmluZGV4T2YoJzonKT9gWyR7aG9zdG5hbWV9XWA6aG9zdG5hbWUpO2lmKHVybE9iai5wb3J0KXtob3N0Kz0nOicrdXJsT2JqLnBvcnQ7fX1pZihxdWVyeSYmdHlwZW9mIHF1ZXJ5PT09J29iamVjdCcpe3F1ZXJ5PVN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5KSk7fWxldCBzZWFyY2g9dXJsT2JqLnNlYXJjaHx8cXVlcnkmJmA/JHtxdWVyeX1gfHwnJztpZihwcm90b2NvbCYmcHJvdG9jb2wuc3Vic3RyKC0xKSE9PSc6Jylwcm90b2NvbCs9JzonO2lmKHVybE9iai5zbGFzaGVzfHwoIXByb3RvY29sfHxzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSYmaG9zdCE9PWZhbHNlKXtob3N0PScvLycrKGhvc3R8fCcnKTtpZihwYXRobmFtZSYmcGF0aG5hbWVbMF0hPT0nLycpcGF0aG5hbWU9Jy8nK3BhdGhuYW1lO31lbHNlIGlmKCFob3N0KXtob3N0PScnO31pZihoYXNoJiZoYXNoWzBdIT09JyMnKWhhc2g9JyMnK2hhc2g7aWYoc2VhcmNoJiZzZWFyY2hbMF0hPT0nPycpc2VhcmNoPSc/JytzZWFyY2g7cGF0aG5hbWU9cGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLGVuY29kZVVSSUNvbXBvbmVudCk7c2VhcmNoPXNlYXJjaC5yZXBsYWNlKCcjJywnJTIzJyk7cmV0dXJuYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWA7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm9ybWF0LXVybC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmlzRHluYW1pY1JvdXRlPWlzRHluYW1pY1JvdXRlOy8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEU9L1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS87ZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGUpe3JldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzLWR5bmFtaWMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5wYXJzZVJlbGF0aXZlVXJsPXBhcnNlUmVsYXRpdmVVcmw7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vLi4vdXRpbHNcIik7dmFyIF9xdWVyeXN0cmluZz1yZXF1aXJlKFwiLi9xdWVyeXN0cmluZ1wiKTsvKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9mdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybCxiYXNlKXtjb25zdCBnbG9iYWxCYXNlPW5ldyBVUkwodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnPydodHRwOi8vbic6KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpKTtjb25zdCByZXNvbHZlZEJhc2U9YmFzZT9uZXcgVVJMKGJhc2UsZ2xvYmFsQmFzZSk6Z2xvYmFsQmFzZTtjb25zdHtwYXRobmFtZSxzZWFyY2hQYXJhbXMsc2VhcmNoLGhhc2gsaHJlZixvcmlnaW59PW5ldyBVUkwodXJsLHJlc29sdmVkQmFzZSk7aWYob3JpZ2luIT09Z2xvYmFsQmFzZS5vcmlnaW4pe3Rocm93IG5ldyBFcnJvcihgaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCwgcm91dGVyIHJlY2VpdmVkICR7dXJsfWApO31yZXR1cm57cGF0aG5hbWUscXVlcnk6KDAsX3F1ZXJ5c3RyaW5nLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkpKHNlYXJjaFBhcmFtcyksc2VhcmNoLGhhc2gsaHJlZjpocmVmLnNsaWNlKGdsb2JhbEJhc2Uub3JpZ2luLmxlbmd0aCl9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnNlLXJlbGF0aXZlLXVybC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnk9c2VhcmNoUGFyYW1zVG9VcmxRdWVyeTtleHBvcnRzLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXM9dXJsUXVlcnlUb1NlYXJjaFBhcmFtcztleHBvcnRzLmFzc2lnbj1hc3NpZ247ZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpe2NvbnN0IHF1ZXJ5PXt9O3NlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSxrZXkpPT57aWYodHlwZW9mIHF1ZXJ5W2tleV09PT0ndW5kZWZpbmVkJyl7cXVlcnlba2V5XT12YWx1ZTt9ZWxzZSBpZihBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKXs7cXVlcnlba2V5XS5wdXNoKHZhbHVlKTt9ZWxzZXtxdWVyeVtrZXldPVtxdWVyeVtrZXldLHZhbHVlXTt9fSk7cmV0dXJuIHF1ZXJ5O31mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtKXtpZih0eXBlb2YgcGFyYW09PT0nc3RyaW5nJ3x8dHlwZW9mIHBhcmFtPT09J251bWJlcicmJiFpc05hTihwYXJhbSl8fHR5cGVvZiBwYXJhbT09PSdib29sZWFuJyl7cmV0dXJuIFN0cmluZyhwYXJhbSk7fWVsc2V7cmV0dXJuJyc7fX1mdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHVybFF1ZXJ5KXtjb25zdCByZXN1bHQ9bmV3IFVSTFNlYXJjaFBhcmFtcygpO09iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LHZhbHVlXSk9PntpZihBcnJheS5pc0FycmF5KHZhbHVlKSl7dmFsdWUuZm9yRWFjaChpdGVtPT5yZXN1bHQuYXBwZW5kKGtleSxzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSk7fWVsc2V7cmVzdWx0LnNldChrZXksc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpO319KTtyZXR1cm4gcmVzdWx0O31mdW5jdGlvbiBhc3NpZ24odGFyZ2V0LC4uLnNlYXJjaFBhcmFtc0xpc3Qpe3NlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaChzZWFyY2hQYXJhbXM9PntBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goa2V5PT50YXJnZXQuZGVsZXRlKGtleSkpO3NlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSxrZXkpPT50YXJnZXQuYXBwZW5kKGtleSx2YWx1ZSkpO30pO3JldHVybiB0YXJnZXQ7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cXVlcnlzdHJpbmcuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXRSb3V0ZU1hdGNoZXI9Z2V0Um91dGVNYXRjaGVyO2Z1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KXtjb25zdHtyZSxncm91cHN9PXJvdXRlUmVnZXg7cmV0dXJuIHBhdGhuYW1lPT57Y29uc3Qgcm91dGVNYXRjaD1yZS5leGVjKHBhdGhuYW1lKTtpZighcm91dGVNYXRjaCl7cmV0dXJuIGZhbHNlO31jb25zdCBkZWNvZGU9cGFyYW09Pnt0cnl7cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSk7fWNhdGNoKF8pe2NvbnN0IGVycj1uZXcgRXJyb3IoJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nKTtlcnIuY29kZT0nREVDT0RFX0ZBSUxFRCc7dGhyb3cgZXJyO319O2NvbnN0IHBhcmFtcz17fTtPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goc2x1Z05hbWU9Pntjb25zdCBnPWdyb3Vwc1tzbHVnTmFtZV07Y29uc3QgbT1yb3V0ZU1hdGNoW2cucG9zXTtpZihtIT09dW5kZWZpbmVkKXtwYXJhbXNbc2x1Z05hbWVdPX5tLmluZGV4T2YoJy8nKT9tLnNwbGl0KCcvJykubWFwKGVudHJ5PT5kZWNvZGUoZW50cnkpKTpnLnJlcGVhdD9bZGVjb2RlKG0pXTpkZWNvZGUobSk7fX0pO3JldHVybiBwYXJhbXM7fTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1tYXRjaGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZ2V0Um91dGVSZWdleD1nZXRSb3V0ZVJlZ2V4Oy8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHIpe3JldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCdcXFxcJCYnKTt9ZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW0pe2NvbnN0IG9wdGlvbmFsPXBhcmFtLnN0YXJ0c1dpdGgoJ1snKSYmcGFyYW0uZW5kc1dpdGgoJ10nKTtpZihvcHRpb25hbCl7cGFyYW09cGFyYW0uc2xpY2UoMSwtMSk7fWNvbnN0IHJlcGVhdD1wYXJhbS5zdGFydHNXaXRoKCcuLi4nKTtpZihyZXBlYXQpe3BhcmFtPXBhcmFtLnNsaWNlKDMpO31yZXR1cm57a2V5OnBhcmFtLHJlcGVhdCxvcHRpb25hbH07fWZ1bmN0aW9uIGdldFJvdXRlUmVnZXgobm9ybWFsaXplZFJvdXRlKXtjb25zdCBzZWdtZW50cz0obm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCcnKXx8Jy8nKS5zbGljZSgxKS5zcGxpdCgnLycpO2NvbnN0IGdyb3Vwcz17fTtsZXQgZ3JvdXBJbmRleD0xO2NvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZT1zZWdtZW50cy5tYXAoc2VnbWVudD0+e2lmKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpJiZzZWdtZW50LmVuZHNXaXRoKCddJykpe2NvbnN0e2tleSxvcHRpb25hbCxyZXBlYXR9PXBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwtMSkpO2dyb3Vwc1trZXldPXtwb3M6Z3JvdXBJbmRleCsrLHJlcGVhdCxvcHRpb25hbH07cmV0dXJuIHJlcGVhdD9vcHRpb25hbD8nKD86LyguKz8pKT8nOicvKC4rPyknOicvKFteL10rPyknO31lbHNle3JldHVybmAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gO319KS5qb2luKCcnKTsvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbi8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG5pZih0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCcpe2xldCByb3V0ZUtleUNoYXJDb2RlPTk3O2xldCByb3V0ZUtleUNoYXJMZW5ndGg9MTsvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG5jb25zdCBnZXRTYWZlUm91dGVLZXk9KCk9PntsZXQgcm91dGVLZXk9Jyc7Zm9yKGxldCBpPTA7aTxyb3V0ZUtleUNoYXJMZW5ndGg7aSsrKXtyb3V0ZUtleSs9U3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKTtyb3V0ZUtleUNoYXJDb2RlKys7aWYocm91dGVLZXlDaGFyQ29kZT4xMjIpe3JvdXRlS2V5Q2hhckxlbmd0aCsrO3JvdXRlS2V5Q2hhckNvZGU9OTc7fX1yZXR1cm4gcm91dGVLZXk7fTtjb25zdCByb3V0ZUtleXM9e307bGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlPXNlZ21lbnRzLm1hcChzZWdtZW50PT57aWYoc2VnbWVudC5zdGFydHNXaXRoKCdbJykmJnNlZ21lbnQuZW5kc1dpdGgoJ10nKSl7Y29uc3R7a2V5LG9wdGlvbmFsLHJlcGVhdH09cGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLC0xKSk7Ly8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuLy8gdGhlIG5hbWVkIHJlZ2V4XG5sZXQgY2xlYW5lZEtleT1rZXkucmVwbGFjZSgvXFxXL2csJycpO2xldCBpbnZhbGlkS2V5PWZhbHNlOy8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuLy8gc2FmZSBrZXlcbmlmKGNsZWFuZWRLZXkubGVuZ3RoPT09MHx8Y2xlYW5lZEtleS5sZW5ndGg+MzApe2ludmFsaWRLZXk9dHJ1ZTt9aWYoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsMSkpKSl7aW52YWxpZEtleT10cnVlO31pZihpbnZhbGlkS2V5KXtjbGVhbmVkS2V5PWdldFNhZmVSb3V0ZUtleSgpO31yb3V0ZUtleXNbY2xlYW5lZEtleV09a2V5O3JldHVybiByZXBlYXQ/b3B0aW9uYWw/YCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2A6YC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgOmAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYDt9ZWxzZXtyZXR1cm5gLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YDt9fSkuam9pbignJyk7cmV0dXJue3JlOm5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksZ3JvdXBzLHJvdXRlS2V5cyxuYW1lZFJlZ2V4OmBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYH07fXJldHVybntyZTpuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLGdyb3Vwc307fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtcmVnZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5leGVjT25jZT1leGVjT25jZTtleHBvcnRzLmdldExvY2F0aW9uT3JpZ2luPWdldExvY2F0aW9uT3JpZ2luO2V4cG9ydHMuZ2V0VVJMPWdldFVSTDtleHBvcnRzLmdldERpc3BsYXlOYW1lPWdldERpc3BsYXlOYW1lO2V4cG9ydHMuaXNSZXNTZW50PWlzUmVzU2VudDtleHBvcnRzLmxvYWRHZXRJbml0aWFsUHJvcHM9bG9hZEdldEluaXRpYWxQcm9wcztleHBvcnRzLmZvcm1hdFdpdGhWYWxpZGF0aW9uPWZvcm1hdFdpdGhWYWxpZGF0aW9uO2V4cG9ydHMuU1Q9ZXhwb3J0cy5TUD1leHBvcnRzLnVybE9iamVjdEtleXM9dm9pZCAwO3ZhciBfZm9ybWF0VXJsPXJlcXVpcmUoXCIuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsXCIpOy8qKlxuICogVXRpbHNcbiAqL2Z1bmN0aW9uIGV4ZWNPbmNlKGZuKXtsZXQgdXNlZD1mYWxzZTtsZXQgcmVzdWx0O3JldHVybiguLi5hcmdzKT0+e2lmKCF1c2VkKXt1c2VkPXRydWU7cmVzdWx0PWZuKC4uLmFyZ3MpO31yZXR1cm4gcmVzdWx0O307fWZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCl7Y29uc3R7cHJvdG9jb2wsaG9zdG5hbWUscG9ydH09d2luZG93LmxvY2F0aW9uO3JldHVybmAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQ/JzonK3BvcnQ6Jyd9YDt9ZnVuY3Rpb24gZ2V0VVJMKCl7Y29uc3R7aHJlZn09d2luZG93LmxvY2F0aW9uO2NvbnN0IG9yaWdpbj1nZXRMb2NhdGlvbk9yaWdpbigpO3JldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTt9ZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KXtyZXR1cm4gdHlwZW9mIENvbXBvbmVudD09PSdzdHJpbmcnP0NvbXBvbmVudDpDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7fWZ1bmN0aW9uIGlzUmVzU2VudChyZXMpe3JldHVybiByZXMuZmluaXNoZWR8fHJlcy5oZWFkZXJzU2VudDt9YXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wcyhBcHAsY3R4KXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dmFyIF9BcHAkcHJvdG90eXBlO2lmKChfQXBwJHByb3RvdHlwZT1BcHAucHJvdG90eXBlKSE9bnVsbCYmX0FwcCRwcm90b3R5cGUuZ2V0SW5pdGlhbFByb3BzKXtjb25zdCBtZXNzYWdlPWBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9fS8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbmNvbnN0IHJlcz1jdHgucmVzfHxjdHguY3R4JiZjdHguY3R4LnJlcztpZighQXBwLmdldEluaXRpYWxQcm9wcyl7aWYoY3R4LmN0eCYmY3R4LkNvbXBvbmVudCl7Ly8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxucmV0dXJue3BhZ2VQcm9wczphd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsY3R4LmN0eCl9O31yZXR1cm57fTt9Y29uc3QgcHJvcHM9YXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpO2lmKHJlcyYmaXNSZXNTZW50KHJlcykpe3JldHVybiBwcm9wczt9aWYoIXByb3BzKXtjb25zdCBtZXNzYWdlPWBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGg9PT0wJiYhY3R4LmN0eCl7Y29uc29sZS53YXJuKGAke2dldERpc3BsYXlOYW1lKEFwcCl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYCk7fX1yZXR1cm4gcHJvcHM7fWNvbnN0IHVybE9iamVjdEtleXM9WydhdXRoJywnaGFzaCcsJ2hvc3QnLCdob3N0bmFtZScsJ2hyZWYnLCdwYXRoJywncGF0aG5hbWUnLCdwb3J0JywncHJvdG9jb2wnLCdxdWVyeScsJ3NlYXJjaCcsJ3NsYXNoZXMnXTtleHBvcnRzLnVybE9iamVjdEtleXM9dXJsT2JqZWN0S2V5cztmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmwpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7aWYodXJsIT09bnVsbCYmdHlwZW9mIHVybD09PSdvYmplY3QnKXtPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goa2V5PT57aWYodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSk9PT0tMSl7Y29uc29sZS53YXJuKGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWApO319KTt9fXJldHVybigwLF9mb3JtYXRVcmwuZm9ybWF0VXJsKSh1cmwpO31jb25zdCBTUD10eXBlb2YgcGVyZm9ybWFuY2UhPT0ndW5kZWZpbmVkJztleHBvcnRzLlNQPVNQO2NvbnN0IFNUPVNQJiZ0eXBlb2YgcGVyZm9ybWFuY2UubWFyaz09PSdmdW5jdGlvbicmJnR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlPT09J2Z1bmN0aW9uJztleHBvcnRzLlNUPVNUO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbHMuanMubWFwIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9iYXNlL0xheW91dC9TaWRlYmFyXCI7XHJcbmltcG9ydCBVc2VyTGlzdGluZyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Db252ZXJzYXRpb25zL3VzZXJMaXN0aW5nXCI7XHJcbmltcG9ydCBDb252ZXJzYXRpb24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ29udmVyc2F0aW9ucy9Db252ZXJzYXRpb25cIjtcclxuaW1wb3J0IFNlbmRlclByb2ZpbGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ29udmVyc2F0aW9ucy9zZW5kZXJQcm9maWxlXCI7XHJcbmltcG9ydCB7IGlvIH0gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcclxuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XHJcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlLCB1c2VSZWNvaWxWYWx1ZSB9IGZyb20gXCJyZWNvaWxcIjtcclxuaW1wb3J0IHtcclxuXHRhY3RpdmVDb252U3RhdGUsXHJcblx0Y29udmVyc2F0aW9uU3RhdGUsXHJcblx0cGFnZVN0YXRlLFxyXG5cdHByb2ZpbGVTdGF0ZSxcclxufSBmcm9tIFwiLi4vLi4vYXRvbXMvYXRvbVwiO1xyXG5pbXBvcnQgeyBzZXRDb252LCBzZXRTZW5kQ29udiB9IGZyb20gXCIuLi8uLi91dGlscy9oZWxwZXJzXCI7XHJcbmltcG9ydCB7IGZldGNoUHJvZmlsZSwgZ2V0QWNjb3VudCwgZ2V0UHJvZmlsZSB9IGZyb20gXCIuLi8uLi9hcGlcIjtcclxuXHJcbmNvbnN0IENvbnZlcnNhdGlvbnMgPSAoKSA9PiB7XHJcblx0dmFyIHNvY2tldDtcclxuXHRjb25zdCBbc2Vzc2lvbiwgbG9hZGluZ10gPSB1c2VTZXNzaW9uKCk7XHJcblx0Y29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlUmVjb2lsU3RhdGUocGFnZVN0YXRlKTtcclxuXHRjb25zdCBbY29udlN0YXRlLCBzZXRDb252U3RhdGVdID0gdXNlUmVjb2lsU3RhdGUoY29udmVyc2F0aW9uU3RhdGUpO1xyXG5cdGNvbnN0IGFjdGl2ZUNvbnYgPSB1c2VSZWNvaWxWYWx1ZShhY3RpdmVDb252U3RhdGUpO1xyXG5cdGNvbnN0IFtwcm9maWxlLCBzZXRQcm9maWxlXSA9IHVzZVJlY29pbFN0YXRlKHByb2ZpbGVTdGF0ZSk7XHJcblxyXG5cdFJlYWN0LnVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcblx0XHRpZiAoc2Vzc2lvbikge1xyXG5cdFx0XHRjb25zdCBhY2NvdW50cyA9IGF3YWl0IGdldEFjY291bnQoc2Vzc2lvbi51c2VyLmVtYWlsKTtcclxuXHRcdFx0c2V0UGFnZShhY2NvdW50cy5kYXRhLmRhdGEuYWNjb3VudHNbMF0pO1xyXG5cdFx0XHRjb25zdCBwcm9maWxlID0gYXdhaXQgZ2V0UHJvZmlsZShzZXNzaW9uLnVzZXIuZW1haWwpO1xyXG5cdFx0XHRjb25zdCB1c2VyID0gcHJvZmlsZS5kYXRhLmRhdGEudXNlcjtcclxuXHRcdFx0c2V0UHJvZmlsZSgocHJvZmlsZSkgPT4gdXNlcik7XHJcblx0XHR9XHJcblx0fSwgW3Nlc3Npb25dKTtcclxuXHJcblx0UmVhY3QudXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuXHRcdFxyXG5cdFx0aWYgKHBhZ2UgJiYgc2Vzc2lvbiAmJiBPYmplY3Qua2V5cyhwYWdlKS5sZW5ndGgpIHtcclxuXHRcdFx0c29ja2V0ID0gaW8oXCJsb2NhbGhvc3Q6ODAwMFwiKTtcclxuXHRcdFx0Y29uZmlndXJlU29ja2V0KCk7XHJcblx0XHR9XHJcblx0fSwgW3Nlc3Npb24sIHBhZ2VdKTtcclxuXHJcblx0Y29uc3QgY29uZmlndXJlU29ja2V0ID0gKCkgPT4ge1xyXG5cdFx0c29ja2V0Lm9uKFwiY29ubmVjdFwiLCAoKSA9PiB7XHJcblx0XHRcdHNvY2tldC5lbWl0KFwiL2luaXRcIiwgeyBwYWdlSWQ6IHBhZ2UuaWQgfSk7XHJcblx0XHR9KTtcclxuXHRcdHNvY2tldC5vbihcImNvbm5lY3RfZXJyb3JcIiwgKGVycikgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKGVycik7XHJcblx0XHR9KTtcclxuXHRcdGNvbnN0IG5ld21zZ0NiID0gYXN5bmMgKGRhdGEpID0+IHtcclxuXHRcdFx0Y29uc3QgdXNlciA9IGF3YWl0IGZldGNoUHJvZmlsZShzZXNzaW9uLnVzZXIuZW1haWwsIGRhdGEuZXZlbnQuc2VuZGVyLmlkKTtcclxuXHRcdFx0c2V0Q29udlN0YXRlKChjb252U3RhdGUpID0+XHJcblx0XHRcdFx0c2V0Q29udihjb252U3RhdGUsIGRhdGEuZXZlbnQsIHVzZXIuZGF0YS5kYXRhLmRldGFpbHMpLFxyXG5cdFx0XHQpO1xyXG5cdFx0fTtcclxuXHRcdHNvY2tldC5vbihcIi9uZXdfbWVzc2FnZVwiLCBuZXdtc2dDYik7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPScnPlxyXG5cdFx0XHQ8U2lkZWJhciBhY3RpdmU9J2NvbnYnIC8+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdtbC0yMCBncmlkIGdyaWQtY29scy0xMCc+XHJcblx0XHRcdFx0PFVzZXJMaXN0aW5nIGNsYXNzTmFtZT0nYm9yZGVyLXItMSBib3JkZXItZ3JheS0zMDAgYm9yZGVyLXNvbGlkIGNvbC1zcGFuLTInIC8+XHJcblx0XHRcdFx0PENvbnZlcnNhdGlvbiBjbGFzc05hbWU9J2NvbC1zcGFuLTUnIC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnZlcnNhdGlvbnM7XHJcbiIsImltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL2NsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUmVjb2lsU3RhdGUgfSBmcm9tIFwicmVjb2lsXCI7XHJcbmltcG9ydCB7IHBhZ2VTdGF0ZSwgcHJvZmlsZVN0YXRlIH0gZnJvbSBcIi4uLy4uL2F0b21zL2F0b21cIjtcclxuaW1wb3J0IFNpZGViYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9MYXlvdXQvU2lkZWJhclwiO1xyXG5pbXBvcnQgQ29udmVyc2F0aW9ucyBmcm9tICBcIi4vY29udmVyc2F0aW9uc1wiXHJcbmltcG9ydCB7IGdldEFjY291bnQsIGdldFByb2ZpbGUgfSBmcm9tIFwiLi4vLi4vYXBpXCI7XHJcblxyXG5mdW5jdGlvbiBEYXNoYm9hcmQoKSB7XHJcblx0Y29uc3QgW3Nlc3Npb24sIGxvYWRpbmddID0gdXNlU2Vzc2lvbigpO1xyXG5cdGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHRjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VSZWNvaWxTdGF0ZShwYWdlU3RhdGUpO1xyXG5cdGNvbnN0IFtwcm9maWxlLCBzZXRQcm9maWxlXSA9IHVzZVJlY29pbFN0YXRlKHByb2ZpbGVTdGF0ZSk7XHJcblx0UmVhY3QudXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuXHRcdGlmIChzZXNzaW9uKSB7XHJcblx0XHRcdGNvbnN0IGFjY291bnRzID0gYXdhaXQgZ2V0QWNjb3VudChzZXNzaW9uLnVzZXIuZW1haWwpO1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhhY2NvdW50cy5kYXRhLmRhdGEuYWNjb3VudHNbMF0pO1xyXG5cdFx0XHRzZXRQYWdlKGFjY291bnRzLmRhdGEuZGF0YS5hY2NvdW50c1swXSk7XHJcblx0XHRcdGNvbnN0IHByb2ZpbGUgPSBhd2FpdCBnZXRQcm9maWxlKHNlc3Npb24udXNlci5lbWFpbCk7XHJcblx0XHRcdGNvbnN0IHVzZXIgPSBwcm9maWxlLmRhdGEuZGF0YS51c2VyO1xyXG5cdFx0XHRzZXRQcm9maWxlKChwcm9maWxlKSA9PiB1c2VyKTtcclxuXHRcdH1cclxuXHR9LCBbc2Vzc2lvbl0pO1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8U2lkZWJhciBhY3RpdmU9e2FjdGl2ZX0gc2V0QWN0aXZlPXtzZXRBY3RpdmV9IC8+XHJcblx0XHRcdDxDb252ZXJzYXRpb25zIC8+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQ7XHJcbiIsImV4cG9ydCBjb25zdCBzZXRDb252ID0gKGNvbnZTdGF0ZSwgcmN2ZF9tc2csIHVzZXIpID0+IHtcclxuXHRjb25zdCBzZW5kZXJfaWQgPSByY3ZkX21zZy5zZW5kZXIuaWQ7XHJcblx0Y29uc29sZS5sb2codXNlcik7XHJcblx0dmFyIHNlbmRlciA9IGNvbnZTdGF0ZS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uc2VuZGVyX2lkID09PSBzZW5kZXJfaWQpO1xyXG5cdHZhciBvdGhlclNlbmRlcnMgPSBjb252U3RhdGUuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnNlbmRlcl9pZCAhPT0gc2VuZGVyX2lkKTtcclxuXHRpZiAoIXNlbmRlci5sZW5ndGgpIHtcclxuXHRcdHNlbmRlciA9IHtcclxuXHRcdFx0c2VuZGVyX2lkLFxyXG5cdFx0XHR1c2VyLFxyXG5cdFx0XHRtZXNzYWdlczogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG1zZzogcmN2ZF9tc2cubWVzc2FnZS50ZXh0LFxyXG5cdFx0XHRcdFx0dHlwZTogXCJyZWNlaXZlZFwiLFxyXG5cdFx0XHRcdFx0dGltZTogbmV3IERhdGUocmN2ZF9tc2cudGltZXN0YW1wKS50b0lTT1N0cmluZygpLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdF0sXHJcblx0XHR9O1xyXG5cdFx0cmV0dXJuIFtzZW5kZXIsIC4uLm90aGVyU2VuZGVyc107XHJcblx0fSBlbHNlIHtcclxuXHRcdGNvbnN0IHNuZCA9IHNlbmRlclswXTtcclxuXHRcdHNlbmRlciA9IHtcclxuXHRcdFx0Li4uc25kLFxyXG5cdFx0XHRtZXNzYWdlczogW1xyXG5cdFx0XHRcdC4uLnNuZC5tZXNzYWdlcyxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRtc2c6IHJjdmRfbXNnLm1lc3NhZ2UudGV4dCxcclxuXHRcdFx0XHRcdHR5cGU6IFwicmVjZWl2ZWRcIixcclxuXHRcdFx0XHRcdHRpbWU6IG5ldyBEYXRlKHJjdmRfbXNnLnRpbWVzdGFtcCkudG9JU09TdHJpbmcoKSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRdLFxyXG5cdFx0fTtcclxuXHRcdHJldHVybiBbc2VuZGVyLCAuLi5vdGhlclNlbmRlcnNdO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRTZW5kQ29udiA9IChjb252U3RhdGUsIG1lc3NhZ2UsIHJlY2VpcGVudElkKSA9PiB7XHJcblx0dmFyIHJlY2VpdmVyID0gY29udlN0YXRlLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5zZW5kZXJfaWQgPT0gcmVjZWlwZW50SWQpO1xyXG5cdHZhciBvdGhlclNlbmRlcnMgPSBjb252U3RhdGUuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnNlbmRlcl9pZCAhPSByZWNlaXBlbnRJZCk7XHJcblx0Y29uc3Qgc25kID0gcmVjZWl2ZXJbMF07XHJcblx0cmVjZWl2ZXIgPSB7XHJcblx0XHQuLi5zbmQsXHJcblx0XHRtZXNzYWdlczogW1xyXG5cdFx0XHQuLi5zbmQubWVzc2FnZXMsXHJcblx0XHRcdHtcclxuXHRcdFx0XHRtc2c6IG1lc3NhZ2UsXHJcblx0XHRcdFx0dHlwZTogXCJzZW50XCIsXHJcblx0XHRcdFx0dGltZTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG5cdFx0XHR9LFxyXG5cdFx0XSxcclxuXHR9O1xyXG5cdHJldHVybiBbcmVjZWl2ZXIsIC4uLm90aGVyU2VuZGVyc107XHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aC9jbGllbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVjb2lsXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzb2NrZXQuaW8tY2xpZW50XCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9