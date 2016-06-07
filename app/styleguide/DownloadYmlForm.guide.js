import React from 'react';
import { SGPage, SGSection } from 'reapp-dev-tools';


import DownloadYmlForm from 'components/DownloadYmlForm';

export default class DownloadYmlFormGuideComponent extends React.Component {
    render() {
        return (
            <SGPage>

                <SGSection title="DownloadYmlForm - without properties">
                    <DownloadYmlForm />
                </SGSection>

                <SGSection title="DownloadYmlForm - with value property">
                    <DownloadYmlForm value="Content for the component" />
                </SGSection>

            </SGPage>
        );
    }
}
