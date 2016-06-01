/* eslint max-nested-callbacks:0 */

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import TranslationItem from 'components/TranslationItem';

describe('TranslationItem Component', () => {
    it('should render without exceptions', () => {
        ReactTestUtils.renderIntoDocument(<TranslationItem />);
    });
});
