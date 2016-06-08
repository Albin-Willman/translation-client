
import React from 'react';

import Button from 'react-bootstrap/lib/Button';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Well from 'react-bootstrap/lib/Well';
import LanguageSelect from 'components/LanguageSelect';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';

export default class UploadYmlForm extends React.Component {

  static propTypes = {
    submit: React.PropTypes.func,
  }

  static defaultProps = {
    submit: '',
    languages: [],
  }

  state = {
    currentValue: '',
    currentLanguageIso: '',
  }

  setYml = (e) => {
    this.setState({ currentValue: e.target.value });
  }

  setLanguage = (val) => {
    this.setState({ currentLanguageIso: val }); 
  }

  upload = (e) => {
    var { currentValue, currentLanguageIso } = this.state;
    this.props.submit(currentValue, currentLanguageIso);
  }

  render() {
    var { currentValue  } = this.state;
    var { languages } = this.props;

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
            <LanguageSelect label="Select language" languages={languages} callback={this.setLanguage} />
            <Button block bsStyle={'primary'} onClick={this.upload}>
              Save
            </Button>
          </Well>
        </Col>
      </Row>
      );
  }
}
