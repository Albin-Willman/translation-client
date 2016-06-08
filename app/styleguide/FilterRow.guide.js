import React from 'react';
import { SGPage, SGSection } from 'reapp-dev-tools';


import FilterRow from 'components/FilterRow';

export default class FilterRowGuideComponent extends React.Component {
    render() {
        return (
            <SGPage>

                <SGSection title="FilterRow - without properties">
                    <FilterRow />
                </SGSection>

                <SGSection title="FilterRow - with value property">
                    <FilterRow value="Content for the component" />
                </SGSection>

            </SGPage>
        );
    }
}
