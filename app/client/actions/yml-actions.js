export const SET_YML = 'setYML@yml';

export function setYml(yml){
	return {
		type: SET_YML,
		payload: yml,
	}
}