
import React from 'react';
import { connect } from 'react-redux';

import TranslationItem from 'components/TranslationItem';
import Table from 'react-bootstrap/lib/Table';
import Button from 'react-bootstrap/lib/Button';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Well from 'react-bootstrap/lib/Well';
import LanguageSelectRow from 'components/LanguageSelectRow';
import FilterRow from 'components/FilterRow';

import { setTranslation } from 'actions/translation-actions';
import { setToLanguage, setFromLanguage } from 'actions/language-actions';

@connect(s => s)
export default class TranslationList extends React.Component {

  updateTranslation = (string, key) => {
    var { dispatch, languages } = this.props;
    dispatch(setTranslation(string, languages.to, key));
  }

  state = {
    filter: '',
  }

  setFilter(val) {
    this.setState({ filter: val }); 
  }

  itemIncluded(filter, strings){
    for (var i in strings){
      if((typeof strings[i] != 'undefined') && (strings[i].indexOf(filter) > -1)) {
        return true;
      }
    }
    return false;
  }

  render() {

    var { dispatch, languages, translations } = this.props
    var { from, to } = languages;
    var { strings } = translations;
    var rows = [];
    var { filter } = this.state;
    var filterCount = 0;
    for (var key in strings) {
      var item = strings[key];
      if(this.itemIncluded(filter, [key, item[from], item[to]])){
        filterCount++;
        rows.push(<TranslationItem key={key}
          stringKey={key}
          base={item[from]}
          translation={item[to]}
          handleChange={this.updateTranslation} />);
      }
    }

    return (
      <Row>
        <Col md={12}>
          <Well>
            <LanguageSelectRow
              to={to}
              from={from}
              languages={languages.languages}
              setTo={lang=>{ dispatch(setToLanguage(lang)); }}
              setFrom={lang=>{ dispatch(setFromLanguage(lang)); }}
            />
            <FilterRow value={filter} changeCallback={(v) => { this.setFilter(v) }} totalCount={Object.keys(strings).length} filterCount={filterCount}/>
            <hr style={{ borderColor: '#ccc' }}/>
            {rows}
            <Row>
              <Col md={12}>
                <Button block bsStyle={'primary'} onClick={$=> { dispatch(saveTranslations()); }}>
                  Save
                </Button>
              </Col>
            </Row>
          </Well>
        </Col>
      </Row>
    );
  }
}
