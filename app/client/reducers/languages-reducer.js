import {
  ADD_LANGUAGE,
  SET_TO_LANGUAGE,
  SET_FROM_LANGUAGE,
} from 'actions/language-actions';

export const INITIAL_STATE = {
  languages: [],
  to: 'sv',
  from: 'en',
};

export function languagesReducer(state = INITIAL_STATE, action) {
  var { type } = action;
  switch (type) {
    case ADD_LANGUAGE: {
      var newState = { ...state };

      newState.languages.push(action.payload);
      return newState;
    }

    case SET_TO_LANGUAGE: {
      return { ...state,
        to: action.payload };
    }

    case SET_FROM_LANGUAGE: {
      return { ...state,
        from: action.payload };
    }

    default: return state;
  }
}