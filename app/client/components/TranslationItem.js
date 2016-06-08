
import React from 'react';
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
        <Col md={6}>
          <h6>{stringKey}</h6>
          {base}
        </Col>
        <Col md={6}>
          <FormControl
            componentClass="textarea"
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
