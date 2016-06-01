
import React from 'react';

import FormGroup from 'react-bootstrap/lib/FormGroup';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Well from 'react-bootstrap/lib/Well';

export default class UploadYmlForm extends React.Component {

  static propTypes = {
    submit: React.PropTypes.func,
  }

  static defaultProps = {
    submit: '',
    
  }

  state = {
    currentValue: ''
  }

  setYml = (e) => {
    this.setState({ currentValue: e.target.value });
  }

  upload = (e) => {
    var { submit } = this.props;
    var { currentValue } = this.state;
    submit(currentValue);
  }

  render() {
    var { currentValue } = this.props;

    return (
      <Row>
        <Col md={10} mdOffset={1}>
          <Well>
            <h1>Paste yml</h1>
            <FormGroup>
              <FormControl
                componentClass="textarea"
                onChange={this.setYml}
                value={currentValue}
                />
            </FormGroup>
            <Button block bsStyle={'primary'} onClick={this.upload}>
              Save
            </Button>
          </Well>
        </Col>
      </Row>
      );
  }
}
