export const SET_TRANSLATION = 'setTranslation@translation';
export const SET_LOADING = 'setLoading@translation';
export const ADD_STRING = 'addString@translation';
export const RESET_STRINGS = 'resetStrings@translation';


export function setTranslation(string, language, key) {
    return {
        type: SET_TRANSLATION,
        payload: {string, language, key},
    };
}

export function addString(payload){
	return {
		type: ADD_STRING,
        payload: payload,	
	}
}

export function setLoading(loading){
	return {
		type: SET_LOADING,
        payload: loading,	
	}
}

export function resetStrings(){
	return { type: RESET_STRINGS }
}