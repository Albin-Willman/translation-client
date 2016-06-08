
import React from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';

export default class LanguageSelect extends React.Component {

  static propTypes = {
    label: React.PropTypes.string,
  }

  static defaultProps = {
    label: 'A New Component',
    languages: [],
    value: '',
    callback: $=>{},
  }

  callCallback = (e) => {
    this.props.callback(e.target.value);
  }

  buildLanguageOptions() {
    return this.props.languages.map(this.buildLanguageOption);
  }

  buildLanguageOption(language) {
    return (
      <option key={language.iso} value={language.iso}>
        {language.label}
      </option>);
  }

  render() {
    var { label, value } = this.props;

    var languageOptions = this.buildLanguageOptions();

    return (
      <FormGroup>
        <ControlLabel>{label}</ControlLabel>
        <FormControl componentClass="select" placeholder={label} onChange={this.callCallback} value={value}>
          <option>Select language</option>
          {languageOptions}
        </FormControl>
      </FormGroup>
      );
  }
}
