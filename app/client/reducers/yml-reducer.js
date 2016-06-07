import {
  SET_YML,
} from 'actions/yml-actions';

export const initialState = {
  yml: '',
};

export function ymlReducer(state = initialState, action) {
  switch (action.type) {
    case SET_YML:
      return { ...state,
        yml: action.payload
      };
    default:
      return state;
  }
}
