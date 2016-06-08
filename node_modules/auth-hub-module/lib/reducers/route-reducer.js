'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialState = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.routeReducer = routeReducer;

var _routeActions = require('auth-hub-module/lib/actions/route-actions');

var initialState = exports.initialState = {
  currentPage: '/'
};

function routeReducer() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _routeActions.SET_ROUTE:
      return _extends({}, state, {
        currentPage: action.payload
      });
    default:
      return state;
  }
}