exports.id = 669;
exports.ids = [669];
exports.modules = {

/***/ 3170:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "zK": function() { return /* binding */ pageState; },
/* harmony export */   "mA": function() { return /* binding */ conversationState; },
/* harmony export */   "yh": function() { return /* binding */ activeConvState; },
/* harmony export */   "rc": function() { return /* binding */ profileState; }
/* harmony export */ });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8121);
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

/***/ 2452:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons_logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6510);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1472);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8104);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);








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

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "sidebar bg-primary bg-opacity-99 h-full fixed flex flex-col justify-between",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "logo p-5",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_logo__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
          className: "h-8 mx-auto",
          children: "Home"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "menu",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__.default, {
            href: "/dashboard/conversations",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
              className: active == "conv" ? "bg-white py-3" : "py-3",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__/* .Chats */ .D$, {
                className: "h-8 mx-auto p-1",
                fill: active == "conv" ? "black" : "white"
              })
            })
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "icons-down",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "signout text-center",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
          onClick: () => (0,next_auth_client__WEBPACK_IMPORTED_MODULE_4__.signOut)(),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__/* .Logout */ .RD, {
            className: "h-8",
            fill: "#fff"
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "user p-5",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__.default, {
          href: "/profile",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
            src: "https://cdn.jetcommerce.io/wp-content/uploads/sites/11/2018/03/15145621/Richpanel-Icon-Blue.png",
            className: "h-10 rounded-full mx-auto",
            alt: "user"
          })
        })
      })]
    })]
  });
}

/* harmony default export */ __webpack_exports__["Z"] = (Sidebar);

/***/ }),

/***/ 6505:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ conversations; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./components/base/Layout/Sidebar.jsx
var Sidebar = __webpack_require__(2452);
// EXTERNAL MODULE: ./components/icons/index.js + 8 modules
var icons = __webpack_require__(1472);
// EXTERNAL MODULE: ./atoms/atom.js
var atom = __webpack_require__(3170);
// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(8121);
;// CONCATENATED MODULE: ./components/Conversations/userListing.jsx







function UserListing({
  className
}) {
  const convState = (0,external_recoil_.useRecoilValue)(atom/* conversationState */.mA);
  const [activeConv, setActiveConv] = (0,external_recoil_.useRecoilState)(atom/* activeConvState */.yh);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: className + " w-full  h-screen",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "bar flex justify-between items-center border-gray-300 border-b-1 py-5 px-4",
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "font-semibold text-xl",
        children: "Chats"
      }), /*#__PURE__*/jsx_runtime_.jsx(icons/* Refresh */.hY, {
        className: "h-6",
        fill: "none"
      })]
    }), convState.length ? /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "list",
      children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
        children: convState.map((item, index) => {
          return /*#__PURE__*/jsx_runtime_.jsx("li", {
            onClick: () => {
              console.log(item.sender_id);
              setActiveConv(activeConvState => item);
            },
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "h-auto p-4 border-1 border-solid border-gray-200",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "head grid grid-cols-10 items-center mb-2",
                children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
                  type: "checkbox",
                  className: "col-span-1",
                  name: "",
                  id: ""
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "name-type col-span-8 text-left",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "name font-semibold",
                    children: item.user.first_name + " " + item.user.last_name
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "type font-medium",
                    children: "Facebook DM"
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "elapse col-span-1",
                  children: "10m"
                })]
              })
            })
          }, index);
        })
      })
    }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "w-full py-10 text-center",
      children: "No pending chats"
    })]
  });
}

/* harmony default export */ var userListing = (UserListing);
// EXTERNAL MODULE: ./api.js
var api = __webpack_require__(7433);
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(2470);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);
;// CONCATENATED MODULE: ./components/Conversations/senderProfile.jsx







function SenderProfile({
  className
}) {
  const activeConv = (0,external_recoil_.useRecoilValue)(atom/* activeConvState */.yh);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: className + " bg-gray-200 bg-opacity-60",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "profile p-10 w-full text-center flex flex-col space-y-5 bg-white",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "image flex justify-center",
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: activeConv.user.profile_pic,
          alt: "senderimage",
          className: "rounded-full h-20"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "name-status",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "name text-2xl font-semibold",
          children: activeConv.user.first_name + " " + activeConv.user.last_name
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "status text-gray-400 font-semibold flex justify-center items-center space-x-2",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "badge bg-gray-400 w-2 h-2 rounded-full"
          }), " ", /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: "Offline"
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "buttons flex space-x-2 justify-center",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
          className: "call-button flex space-x-1 px-4 py-2 font-bold text-gray-600 border-1 border-solid border-gray-600 rounded-md",
          children: [/*#__PURE__*/jsx_runtime_.jsx(icons/* Call */.Ig, {
            fill: "#000",
            className: "h-6"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "txt",
            children: "Call"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
          className: "profile-button flex space-x-1 px-4 py-2 font-bold text-gray-600 border-1 border-solid border-gray-600 rounded-md",
          children: [/*#__PURE__*/jsx_runtime_.jsx(icons/* User */.n5, {
            className: "h-6"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "txt",
            children: "Profile"
          })]
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "cards p-2",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "info-card bg-white rounded-md p-4",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "title font-semibold text-xl",
          children: "Customer details"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "table w-full",
          children: /*#__PURE__*/jsx_runtime_.jsx("table", {
            className: "w-full",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("tbody", {
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
                className: "grid grid-cols-10 py-2",
                children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
                  className: "col-span-5 text-gray-400 font-semibold",
                  children: "Email"
                }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                  className: "col-span-5 text-right font-medium text-gray-900",
                  children: "example@gmail.com"
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
                className: "grid grid-cols-10 py-2",
                children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
                  className: "col-span-5 text-gray-400 font-semibold",
                  children: "First Name"
                }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                  className: "col-span-5 text-right font-medium text-gray-900",
                  children: activeConv.user.first_name
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
                className: "grid grid-cols-10 py-2",
                children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
                  className: "col-span-5 text-gray-400 font-semibold",
                  children: "Last Name"
                }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                  className: "col-span-5 text-right font-medium text-gray-900",
                  children: activeConv.user.last_name
                })]
              })]
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "view-details mt-3",
          children: /*#__PURE__*/jsx_runtime_.jsx("button", {
            className: "font-semibold text-lg text-primary",
            children: "View more details"
          })
        })]
      })
    })]
  });
}

/* harmony default export */ var senderProfile = (SenderProfile);
// EXTERNAL MODULE: external "next-auth/client"
var client_ = __webpack_require__(8104);
;// CONCATENATED MODULE: ./utils/helpers.js
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
;// CONCATENATED MODULE: ./components/Conversations/Conversation.jsx



function Conversation_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Conversation_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Conversation_ownKeys(Object(source), true).forEach(function (key) { Conversation_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Conversation_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Conversation_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const LeftMsg = ({
  msg,
  sender
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("li", {
    className: "left w-1/2 self-start flex items-center space-x-3",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "msg w-full flex flex-col space-y-2",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "grid grid-cols-11 items-end  justify-end",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "sender-img col-span-2 flex justify-start",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: sender.profile_pic,
            alt: "sender-img",
            className: "rounded-full h-9"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: " col-span-9 flex justify-start",
          children: /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "bg-white text  p-4 rounded-lg shadow-md w-max",
            children: msg.msg
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "date-time text-sm text-left",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "font-semibold",
          children: sender.first_name
        }), " -", " ", external_moment_default()(msg.time).format("MMM D, h.mm a")]
      })]
    })
  });
};

const RightMsg = ({
  msg,
  sender
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("li", {
    className: "right w-1/2 self-end flex items-center space-x-3",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "msg w-full flex flex-col space-y-2",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "grid grid-cols-11 items-end space-x-2 justify-end",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: " col-span-9 flex justify-end",
          children: /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "bg-white text  p-4 rounded-lg shadow-md w-max",
            children: msg.msg
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "sender-img col-span-2 flex justify-end",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: sender.image,
            alt: "sender-img",
            className: "rounded-full h-9"
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "date-time text-sm text-right",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "font-semibold",
          children: sender.name
        }), " -", " ", external_moment_default()(msg.time).format("MMM D, h.mm a")]
      })]
    })
  });
};

function Conversation({
  className
}) {
  var _activeConv$messages;

  const [session, loading] = (0,client_.useSession)();
  const [convState, setConvState] = (0,external_recoil_.useRecoilState)(atom/* conversationState */.mA);
  const [activeConv, setActiveConv] = (0,external_recoil_.useRecoilState)(atom/* activeConvState */.yh);
  const profile = (0,external_recoil_.useRecoilValue)(atom/* profileState */.rc);
  const [input, setInput] = external_react_default().useState("");
  const form = external_react_default().useRef();
  external_react_default().useEffect(() => {
    setActiveConv(activeConv => Conversation_objectSpread({}, convState.filter(item => item.sender_id === activeConv.sender_id).pop()));
  }, [convState]); //sending messages

  const sendMsg = async (email, msg, id) => {
    await (0,api/* sendMessage */.bG)(email, msg, id);
    setConvState(convState => setSendConv(convState, msg, id));
  };

  const handleSubmit = e => {
    e.preventDefault();
    sendMsg(session.user.email, e.target[0].value, activeConv.sender_id);
    form.current.reset();
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: className + " h-screen bg-red-50 bg-opacity-70 relative",
      children: Object.keys(activeConv).length > 0 && /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "title text-2xl font-semibold border-1 bg-white border-gray-200 py-4 px-6",
          children: activeConv.user.first_name + " " + activeConv.user.last_name
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "chats w-full h-full",
          children: [/*#__PURE__*/jsx_runtime_.jsx("ul", {
            className: "w-auto flex flex-col p-4 h-5/6 overflow-auto",
            children: activeConv === null || activeConv === void 0 ? void 0 : (_activeConv$messages = activeConv.messages) === null || _activeConv$messages === void 0 ? void 0 : _activeConv$messages.map((item, index) => {
              return item.type === "received" ? /*#__PURE__*/jsx_runtime_.jsx(LeftMsg, {
                msg: item,
                sender: activeConv.user
              }, index) : /*#__PURE__*/jsx_runtime_.jsx(RightMsg, {
                msg: item,
                sender: profile
              }, index);
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("form", {
            onSubmit: handleSubmit,
            ref: form,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "input w-full absolute bottom-3 px-3 flex space-x-2",
              children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
                type: "text",
                className: "w-full border-1 p-3",
                placeholder: "Enter Message",
                onSubmit: e => e.target.value = ""
              }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                type: "submit",
                defaultValue: input,
                value: input,
                className: "border-1 border-solid border-gray-600 rounded-lg px-2 hidden",
                children: "Submit"
              })]
            })
          })]
        })]
      })
    }), Object.keys(activeConv).length > 0 ? /*#__PURE__*/jsx_runtime_.jsx(senderProfile, {
      className: "col-span-3"
    }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "bg-red-50 bg-opacity-70 col-span-3"
    })]
  });
}

/* harmony default export */ var Conversations_Conversation = (Conversation);
// EXTERNAL MODULE: external "socket.io-client"
var external_socket_io_client_ = __webpack_require__(7069);
;// CONCATENATED MODULE: ./pages/dashboard/conversations.jsx














const Conversations = () => {
  var socket;
  const [session, loading] = (0,client_.useSession)();
  const [page, setPage] = (0,external_recoil_.useRecoilState)(atom/* pageState */.zK);
  const [convState, setConvState] = (0,external_recoil_.useRecoilState)(atom/* conversationState */.mA);
  const activeConv = (0,external_recoil_.useRecoilValue)(atom/* activeConvState */.yh);
  const [profile, setProfile] = (0,external_recoil_.useRecoilState)(atom/* profileState */.rc);
  external_react_default().useEffect(async () => {
    if (session) {
      const accounts = await (0,api/* getAccount */.D0)(session.user.email);
      setPage(accounts.data.data.accounts[0]);
      const profile = await (0,api/* getProfile */.Ai)(session.user.email);
      const user = profile.data.data.user;
      setProfile(profile => user);
    }
  }, [session]);
  external_react_default().useEffect(async () => {
    if (page && session && Object.keys(page).length) {
      socket = (0,external_socket_io_client_.io)("localhost:8000");
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
      const user = await (0,api/* fetchProfile */.In)(session.user.email, data.event.sender.id);
      setConvState(convState => setConv(convState, data.event, user.data.data.details));
    };

    socket.on("/new_message", newmsgCb);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "",
    children: [/*#__PURE__*/jsx_runtime_.jsx(Sidebar/* default */.Z, {
      active: "conv"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ml-20 grid grid-cols-10",
      children: [/*#__PURE__*/jsx_runtime_.jsx(userListing, {
        className: "border-r-1 border-gray-300 border-solid col-span-2"
      }), /*#__PURE__*/jsx_runtime_.jsx(Conversations_Conversation, {
        className: "col-span-5"
      })]
    })]
  });
};

/* harmony default export */ var conversations = (Conversations);

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;