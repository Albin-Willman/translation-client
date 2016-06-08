
import React from 'react';
import { connect } from 'react-redux';

import TranslationItem from 'components/TranslationItem';
import Table from 'react-bootstrap/lib/Table';
import Button from 'react-bootstrap/lib/Button';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Well from 'react-bootstrap/lib/Well';
import LanguageSelectRow from 'components/LanguageSelectRow';

import { setTranslation } from 'actions/translation-actions';
import { setToLanguage, setFromLanguage } from 'actions/language-actions';

@connect(s => s)
export default class TranslationList extends React.Component {

    updateTranslation = (string, key) => {
      var { dispatch, languages } = this.props;
      dispatch(setTranslation(string, languages.to, key));
    }

  render() {

    var { dispatch, languages, translations } = this.props
    var { from, to } = languages;
    var items = translations.strings;
    var rows = [];
    for (var key in items) {
      var item = items[key];
      rows.push(<TranslationItem key={key}
        stringKey={key}
        base={item[from]}
        translation={item[to]}
        handleChange={this.updateTranslation} />);
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
