import React from 'react';
import { SGPage, SGSection } from 'reapp-dev-tools';


import TranslationList from 'components/TranslationList';

export default class TranslationListGuideComponent extends React.Component {
    render() {
        return (
            <SGPage>

                <SGSection title="TranslationList - without properties">
                    <TranslationList />
                </SGSection>

                <SGSection title="TranslationList - with value property">
                    <TranslationList value="Content for the component" />
                </SGSection>

            </SGPage>
        );
    }
}
