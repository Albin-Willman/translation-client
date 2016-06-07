
import React from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

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
            <Row>

                <Col md={2}>{stringKey}</Col>
                <Col md={5}>{base}</Col>
                <Col md={5}>
                <FormControl
                    type="text"
                    value={translation}
                    placeholder="Enter translation"
                    onChange={this.callOnChange}
                  />
                </Col>
            </Row>
        );
    }

    callOnChange = (e) => {
        this.props.handleChange(e.target.value, this.props.stringKey);
    }
}
