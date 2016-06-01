import React from 'react';
import { SGPage, SGSection } from 'reapp-dev-tools';


import TranslationItem from 'components/TranslationItem';

export default class TranslationItemGuideComponent extends React.Component {
    render() {
        return (
            <SGPage>

                <SGSection title="TranslationItem - without properties">
                    <TranslationItem />
                </SGSection>

                <SGSection title="TranslationItem - with value property">
                    <TranslationItem value="Content for the component" />
                </SGSection>

            </SGPage>
        );
    }
}
