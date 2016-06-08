import { setLoggedin, setPassword, resetUser } from 'auth-hub-module/lib/actions/user-actions';
import { loadStrings } from 'services/strings-services';
import { loadLanguages } from 'services/languages-services';
import { resetStrings } from 'actions/translation-actions';
import { goToRoute } from 'auth-hub-module/lib/services/route-services';



import * as Api from 'lib/api';

export function login() {
  return (dispatch, getState) => {
    var user = getState().user;
    var successCallback = function(response){
      var tokenData = response.data.attributes;
      dispatch(setLoggedin(tokenData.user_id, tokenData.token));
      dispatch(setPassword(''));
      dispatch(loadStrings());
      dispatch(loadLanguages());
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
      resetState(dispatch)
    }
    Api.verifyLoggedIn(user, successCallback, failCallback);
  }
}

export function logout(){
  return (dispatch, getState) => {
    var successCallback = function(response){
      resetState(dispatch)
    };
    var failCallback = function(data){
      dispatch(verifyLoggedIn());
      alert('Failed to log out.');
    };
    var user = getState().user;
    Api.logout(user, null, successCallback, failCallback);
  };
}

function resetState(dispatch){
  dispatch(resetUser());
  dispatch(resetStrings());
  dispatch(goToRoute('/'));
}
