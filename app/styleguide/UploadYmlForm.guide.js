import React from 'react';
import { SGPage, SGSection } from 'reapp-dev-tools';


import UploadYmlForm from 'components/UploadYmlForm';

export default class UploadYmlFormGuideComponent extends React.Component {
    render() {
        return (
            <SGPage>

                <SGSection title="UploadYmlForm - without properties">
                    <UploadYmlForm />
                </SGSection>

                <SGSection title="UploadYmlForm - with value property">
                    <UploadYmlForm value="Content for the component" />
                </SGSection>

            </SGPage>
        );
    }
}
