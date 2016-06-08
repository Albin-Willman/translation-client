import React from 'react';
import { SGPage, SGSection } from 'reapp-dev-tools';


import LanguageSelect from 'components/LanguageSelect';

export default class LanguageSelectGuideComponent extends React.Component {
    render() {
        return (
            <SGPage>

                <SGSection title="LanguageSelect - without properties">
                    <LanguageSelect />
                </SGSection>

                <SGSection title="LanguageSelect - with value property">
                    <LanguageSelect value="Content for the component" />
                </SGSection>

            </SGPage>
        );
    }
}
