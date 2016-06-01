/* eslint max-nested-callbacks:0 */

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import TranslationList from 'components/TranslationList';

describe('TranslationList Component', () => {
    it('should render without exceptions', () => {
        ReactTestUtils.renderIntoDocument(<TranslationList />);
    });
});
