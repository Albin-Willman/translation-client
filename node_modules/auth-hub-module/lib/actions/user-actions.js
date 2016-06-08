'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setUsername = setUsername;
exports.resetUser = resetUser;
exports.setPassword = setPassword;
exports.setLoggedin = setLoggedin;
var SET_USERNAME = exports.SET_USERNAME = '@user@setUsername';
var SET_PASSWORD = exports.SET_PASSWORD = '@user@setPassword';
var SET_LOGGEDIN = exports.SET_LOGGEDIN = '@user@setLoggedin';
var RESET_USER = exports.RESET_USER = '@user@resetUser';

function setUsername(val) {
  return {
    type: SET_USERNAME,
    payload: val
  };
}

function resetUser() {
  return {
    type: RESET_USER
  };
}

function setPassword(val) {
  return {
    type: SET_PASSWORD,
    payload: val
  };
}

function setLoggedin(userId, token) {
  return {
    type: SET_LOGGEDIN,
    payload: {
      token: token,
      userId: userId
    }
  };
}