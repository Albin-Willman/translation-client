'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialState = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.userReducer = userReducer;

var _userActions = require('auth-hub-module/lib/actions/user-actions');

var initialState = exports.initialState = {
  username: '',
  password: '',
  loggedin: false,
  token: ''
};

function userReducer() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _userActions.SET_USERNAME:
      return _extends({}, state, {
        username: action.payload
      });
    case _userActions.SET_PASSWORD:
      return _extends({}, state, {
        password: action.payload
      });
    case _userActions.SET_LOGGEDIN:
      return _extends({}, state, {
        id: action.payload.userId,
        token: action.payload.token
      });
    case _userActions.RESET_USER:
      return initialState;
    default:
      return state;
  }
}