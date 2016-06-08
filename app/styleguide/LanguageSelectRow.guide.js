import React from 'react';
import { SGPage, SGSection } from 'reapp-dev-tools';


import LanguageSelectRow from 'components/LanguageSelectRow';

export default class LanguageSelectRowGuideComponent extends React.Component {
    render() {
        return (
            <SGPage>

                <SGSection title="LanguageSelectRow - without properties">
                    <LanguageSelectRow />
                </SGSection>

                <SGSection title="LanguageSelectRow - with value property">
                    <LanguageSelectRow value="Content for the component" />
                </SGSection>

            </SGPage>
        );
    }
}
