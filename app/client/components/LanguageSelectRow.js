
import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import LanguageSelect from 'components/LanguageSelect';

export default class LanguageSelectRow extends React.Component {

  static propTypes = {
    from: React.PropTypes.string,
    to: React.PropTypes.string,
    setFrom: React.PropTypes.func,
    setTo: React.PropTypes.func,
  }

  static defaultProps = {
    from: '',
    to: '',
    setFrom: $=>{},
    setTo: $=>{},
    languages: [],
  }

  render() {
    var { from, to, setFrom, setTo, languages } = this.props;

    return (
      <Row>
        <Col md={6}>
          <LanguageSelect label="Translate from" languages={languages} callback={setFrom} value={from}/>

        </Col>
        <Col md={6}>
          <LanguageSelect label="Translate to" languages={languages} callback={setTo} value={to}/>

        </Col>
      </Row>
      );
  }

}
