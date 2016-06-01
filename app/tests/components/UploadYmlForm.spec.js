/* eslint max-nested-callbacks:0 */

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import UploadYmlForm from 'components/UploadYmlForm';

describe('UploadYmlForm Component', () => {
    it('should render without exceptions', () => {
        ReactTestUtils.renderIntoDocument(<UploadYmlForm />);
    });
});
