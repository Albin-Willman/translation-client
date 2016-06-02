import * as Api from 'lib/api';

import { addLanguage } from 'actions/language-actions';
import { setLoading } from 'actions/translation-actions';

export function loadLanguages() {
  return (dispatch, getState) => {
    dispatch(setLoading(true));
    var addLanguageFunction = function(languageData) {
      dispatch(addLanguage(languageData));
    }
    var successCallback = function(data){
      dispatch(setLoading(false));
      data.map(transformToLanguageObjects).map(addLanguageFunction);
    };

    var failCallback = function(data){
      dispatch(setLoading(false));
      alert('Failed to load strings.');
    };
    var user = getState().user;
    Api.loadLanguages(user, successCallback, failCallback);
  }
}

function transformToLanguageObjects(data){
	return {
		label: data.name,
		iso: data.iso,
	}
}