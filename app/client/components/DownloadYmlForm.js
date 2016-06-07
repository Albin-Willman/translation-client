import React from 'react';

import FormGroup from 'react-bootstrap/lib/FormGroup';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Button from 'react-bootstrap/lib/Button';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Well from 'react-bootstrap/lib/Well';

export default class DownloadYmlForm extends React.Component {

  static defaultProps = {
    submit: '',
    languages: [],
    yml: ''
  }


  state = {
    currentLanguageIso: '',
  }

  setLanguage = (e) => {
    this.setState({ currentLanguageIso: e.target.value }); 
  }

  download = (e) => {
    var { submit } = this.props;
    var {  currentLanguageIso } = this.state;
    submit(currentLanguageIso);
  }

  buildLanguageOption = (language) => {
    return (<option key={language.iso} value={language.iso}>{language.label}</option>);
  }

  buildDisplayBox() {
    var { yml } = this.props;
    if(yml.length == 0){
      return '';
    }
    return (
      <div style={{"white-space": "pre", "padding": "15px", "background": "white", "margin-top": "25px"}}>
        {yml}
      </div>
    );
  }

  render() {
    var { languages, yml } = this.props;
    var languageOptions = languages.map(this.buildLanguageOption);
    var displayBox = this.buildDisplayBox();

    return (
      <Row>
        <Col md={10} mdOffset={1}>
          <Well>
            <h1>Download yml</h1>
            <FormGroup>
              <ControlLabel>Select Language</ControlLabel>
              <FormControl componentClass="select" placeholder="select language" onChange={this.setLanguage}>
                <option>Select language</option>
                {languageOptions}
              </FormControl>
            </FormGroup>
            <Button block bsStyle={'primary'} onClick={this.download}>
              download
            </Button>
            {displayBox}
          </Well>
        </Col>
      </Row>
      );
  }
}
