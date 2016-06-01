import { setLoggedin, setPassword, resetUser } from 'actions/user-actions';
import { loadStrings } from 'services/strings-services';
import { resetStrings } from 'actions/translation-actions';
import { goToRoute } from 'services/route-services';

import * as Api from 'lib/api';

export function login() {
  return (dispatch, getState) => {
    var user = getState().user;
    var successCallback = function(response){
      var tokenData = response.data.attributes;
      dispatch(setLoggedin(tokenData.user_id, tokenData.token));
      dispatch(setPassword(''));
      dispatch(loadStrings());
      dispatch(goToRoute('/translations'));
    };
    var failCallback = function(data){
      alert('Bad account');
    }
    Api.verifyUser(user, successCallback, failCallback);
  }
}

export function verifyLoggedIn() {
  return (dispatch, getState) => {
    var user = getState().user;
    var successCallback = $ => {};
    var failCallback = function(data){
      dispatch(resetUser());
      dispatch(resetStrings());
      dispatch(goToRoute('/'));
    }
    Api.verifyLoggedIn(user, successCallback, failCallback);
  }
}

export function logout(){
  return (dispatch, getState) => {
    var successCallback = function(response){
      dispatch(resetUser());
      dispatch(resetStrings());
      dispatch(goToRoute('/'));
    };
    var failCallback = function(data){
      dispatch(verifyLoggedIn());
      alert('Failed to log out.');
    };
    var user = getState().user;
    Api.logout(user, null, successCallback, failCallback);
  };
}
