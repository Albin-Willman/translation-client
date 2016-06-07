export const SET_YML = 'setYML@yml';

export function setYml(yml){
	console.log("yml action", yml);
	return {
		type: SET_YML,
		payload: yml,
	}
}