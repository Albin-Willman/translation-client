
import {
    SET_TRANSLATION,
    SET_LOADING,
    ADD_STRING,
    SET_LOADED,
    RESET_STRINGS,
} from 'actions/translation-actions';

export const INITIAL_STATE = {
    strings: { },
    loading: false,
    loaded: false,
};

export function translationsReducer(state = INITIAL_STATE, action) {
    var { type } = action;
    switch (type) {
    	case SET_TRANSLATION: {
    		var { key, language, string } = action.payload;
    		var newState = { ...state };
    		var newTranslation = { ...newState.strings[key] }
    		newTranslation[language] = string;
    		newState.strings[key] = newTranslation;
    		return newState;
    	}

        case ADD_STRING: {
            var newState = { ...state };
            newState.strings[action.payload.key] = action.payload.translations;
            return newState;
        }
        case SET_LOADING: {
            return { ...state,
                loading: action.payload };
        }
        case RESET_STRINGS: {
            return { ...state,
                strings: {}
            }
        }
        default: return state;
    }
}