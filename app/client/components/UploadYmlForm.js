
import React from 'react';

import FormGroup from 'react-bootstrap/lib/FormGroup';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
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
    languages: [],
  }

  state = {
    currentValue: '',
    currentLanguageIso: '',
  }

  setYml = (e) => {
    this.setState({ currentValue: e.target.value });
  }

  setLanguage = (e) => {
    this.setState({ currentLanguageIso: e.target.value }); 
  }

  upload = (e) => {
    var { submit } = this.props;
    var { currentValue, currentLanguageIso } = this.state;
    submit(currentValue, currentLanguageIso);
  }

  buildLanguageOption = (language) => {
    return (<option key={language.iso} value={language.iso}>{language.label}</option>);
  }

  render() {
    var { currentValue  } = this.state;
    var { languages } = this.props;
    var languageOptions = languages.map(this.buildLanguageOption);

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
            <FormGroup>
              <ControlLabel>Select Language</ControlLabel>
              <FormControl componentClass="select" placeholder="select language" onChange={this.setLanguage}>
                <option>Select language</option>
                {languageOptions}
              </FormControl>
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
