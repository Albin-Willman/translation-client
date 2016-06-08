
import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import LanguageSelect from 'components/LanguageSelect';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';

export default class FilterRow extends React.Component {

  static propTypes = {
    value: React.PropTypes.string,
  }

  static defaultProps = {
    value: '',
    changeCallback: $=>{},
    totalCount: 0,
    filterCount: 0,
  }

  render() {
    var { value, changeCallback, filterCount, totalCount } = this.props;

    return (
      <Row>
        <Col md={6}>
          <FormControl  placeholder="Filter" onChange={(e)=>{changeCallback(e.target.value)}} value={value} />
        </Col>
        <Col md={6}>
          Filtered {filterCount} from {totalCount} items.
        </Col>
      </Row>
      );
  }
}
