import * as Api from 'lib/api';

import { setLoading, addString, resetStrings } from 'actions/translation-actions';
// import { verifyLoggedIn } from 'services/user-services';


export function loadStrings() {
  return (dispatch, getState) => {
    dispatch(setLoading(true));
    var addServiceFunction = function(stringData) {
      dispatch(addString(stringData));
    }
    var successCallback = function(data){
      dispatch(setLoading(false));
      data.map(transformToStringObjects).map(addServiceFunction);
    };

    var failCallback = function(data){
      dispatch(setLoading(false));
      alert('Failed to load strings.');
    };
    var user = getState().user;
    Api.loadTranslations(user, successCallback, failCallback);
  }
}

export function saveTranslations(){
  return (dispatch, getState) => {
    dispatch(setLoading(true));
    var successCallback = (response) => {
      dispatch(setLoading(false));
    }

    var failCallback = function(data){
      dispatch(setLoading(false));
      alert('Failed to save translations.');
    };

    var { user, translations }= getState();
    Api.saveTranslations(user, translations.strings, successCallback, failCallback);

  }
}

export function uploadYML(yml, language){
  return (dispatch, getState) => {
    dispatch(setLoading(true));
    var successCallback = (response) => {
      dispatch(setLoading(false));
      dispatch(resetStrings());
      dispatch(loadStrings());
    }
    var failCallback = function(data){
      dispatch(setLoading(false));
      alert('Failed to save translations.');
    };

    var { user }= getState();
    var data = { yml, language };
    console.log(data)

    Api.uploadYML(user, { yml, language }, successCallback, failCallback);
  }
}

function transformToStringObjects(stringData) {
  return {
    translations: stringData.translations,
    key: stringData.key
  }
}

