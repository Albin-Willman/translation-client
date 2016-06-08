'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setRoute = setRoute;
var SET_ROUTE = exports.SET_ROUTE = '@routess@setRoute';

function setRoute(val) {
  return {
    type: SET_ROUTE,
    payload: val
  };
}