'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.goToRoute = goToRoute;

var _routeActions = require('auth-hub-module/lib/actions/route-actions');

function goToRoute(route) {
  return function (dispatch, getState) {
    dispatch((0, _routeActions.setRoute)(route));
    location.hash = route;
  };
}