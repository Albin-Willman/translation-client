import React from 'react';
import { SGPage, SGSection } from 'reapp-dev-tools';


import LoadingScreen from 'components/LoadingScreen';

export default class LoadingScreenGuideComponent extends React.Component {
    render() {
        return (
            <SGPage>

                <SGSection title="LoadingScreen - without properties">
                    <LoadingScreen />
                </SGSection>

                <SGSection title="LoadingScreen - with value property">
                    <LoadingScreen value="Content for the component" />
                </SGSection>

            </SGPage>
        );
    }
}
