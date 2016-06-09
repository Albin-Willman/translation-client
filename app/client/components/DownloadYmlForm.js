import React from 'react';

import LanguageSelect from 'components/LanguageSelect';
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

  setLanguage = (value) => {
    this.setState({ currentLanguageIso: value }); 
  }

  download = (e) => {
    var { submit } = this.props;
    submit(this.state.currentLanguageIso);
  }


  buildDisplayBox() {
    var { yml } = this.props;
    if(yml.length == 0){
      return '';
    }
    return (
      <div style={{"whiteSpace": "pre", "padding": "15px", "background": "white", "marginTop": "25px"}}>
        {yml}
      </div>
    );
  }

  render() {
    var { languages, yml } = this.props;
    var { currentLanguageIso } = this.state;
    var displayBox = this.buildDisplayBox();

    return (
      <Row>
        <Col md={10} mdOffset={1}>
          <Well>
            <h1>Download yml</h1>
            <LanguageSelect label="Select language" languages={languages} value={currentLanguageIso} callback={this.setLanguage} />
            <Button block bsStyle={'primary'} onClick={this.download}>
              Download
            </Button>
            {displayBox}
          </Well>
        </Col>
      </Row>
    );
  }
}
