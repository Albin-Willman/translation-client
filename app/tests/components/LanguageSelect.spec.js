/* eslint max-nested-callbacks:0 */

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import LanguageSelect from 'components/LanguageSelect';

describe('LanguageSelect Component', () => {
    it('should render without exceptions', () => {
        ReactTestUtils.renderIntoDocument(<LanguageSelect />);
    });
});
