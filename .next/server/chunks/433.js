exports.id = 433;
exports.ids = [433];
exports.modules = {

/***/ 7433:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "jM": function() { return /* binding */ updateToken; },
/* harmony export */   "D0": function() { return /* binding */ getAccount; },
/* harmony export */   "In": function() { return /* binding */ fetchProfile; },
/* harmony export */   "bG": function() { return /* binding */ sendMessage; },
/* harmony export */   "Ai": function() { return /* binding */ getProfile; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


const fetchProfile = async (email, id) => {
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://testt222222.herokuapp.com/api/user/${email}/profile/${id}`);
  if (res) return res;else return {};
}; //to update the token if expired


const updateToken = async (email, accessToken) => {
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().put(`https://testt222222.herokuapp.com/api/user/${email}/accesstoken`, {
    accessToken
  });

  if (res) {// console.log("msg", res);
  }
}; //latest account detail


const getAccount = async email => {
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://testt222222.herokuapp.com/api/user/${email}/accounts`);

  if (res) {
    return res;
  }

  return {};
}; //to send the message to backend


const sendMessage = async (email, message, recipientId) => {
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`https://testt222222.herokuapp.com/api/webhook/${email}/send_message`, {
    recipientId,
    message
  });

  if (res.status != 200) {
    console.log("Some error occured");
  }
};


const getProfile = async email => {
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://testt222222.herokuapp.com/api/user/${email}/me`);

  if (res) {
    return res;
  }

  return {};
};

/***/ })

};
;