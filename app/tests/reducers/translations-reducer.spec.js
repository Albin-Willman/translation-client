
import {
    translationsReducer,
    INITIAL_STATE,
} from 'reducers/translations-reducer';

import {
    setTranslation,
} from 'actions/translation-actions';

describe('translationsReducer', () => {

    it('should setup its initial state', () => {
        var expectedState = {
            ...INITIAL_STATE,
        };
        var nextState = translationsReducer(undefined, {});
        expect(nextState).to.deep.equal(expectedState);
    });

    it('should set a translation', () => {
        var action = setTranslation('string', 'language', 'key');
        var expectedState = {
            ...INITIAL_STATE,
        };
        expectedState.strings = { ... expectedState.strings,
         key: { language: 'string'} }
        var nextState = translationsReducer(undefined, action);
        expect(nextState).to.deep.equal(expectedState);
    });
});