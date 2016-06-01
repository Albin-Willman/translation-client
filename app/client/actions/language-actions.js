export const ADD_LANGUAGE = 'addLanguage@languages';
export const SET_TO_LANGUAGE = 'setToLanguage@languages';
export const SET_FROM_LANGUAGE = 'setFromLanguage@languages';

export function addLanguage(lang_data) {
  return {
    type: ADD_LANGUAGE,
    payload: lang_data
  };
}

export function setToLanguage(lang) {
  return {
    type: SET_TO_LANGUAGE,
    payload: lang
  };
}

export function setFromLanguage(lang) {
  return {
    type: SET_FROM_LANGUAGE,
    payload: lang
  };
}
