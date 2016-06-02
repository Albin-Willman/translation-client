
import React from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import FormControl from 'react-bootstrap/lib/FormControl';

export default class TranslationItem extends React.Component {

    static propTypes = {
        value: React.PropTypes.string,
    }

    static defaultProps = {
        base: '',
        translation: '',
        stringKey: '',
        handleChange: React.PropTypes.func.isRequired,
    }

    render() {
        var { base, translation, stringKey } = this.props;

        return (
            <tr>
                <td>{stringKey}</td>
                <td>{base}</td>
                <td>
                <FormControl
                    type="text"
                    value={translation}
                    placeholder="Enter translation"
                    onChange={this.callOnChange}
                  />
                </td>
            </tr>
        );
    }

    callOnChange = (e) => {
        this.props.handleChange(e.target.value, this.props.stringKey);
    }
}
