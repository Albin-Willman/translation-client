
import React from 'react';
import { connect } from 'react-redux';

// ReactBoostrap components:
import Grid from 'react-bootstrap/lib/Grid';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

import TranslationList from 'components/TranslationList';
import LoadingScreen from 'components/LoadingScreen';
import LoginPage from 'components/LoginPage';



import { setTranslation } from 'actions/translation-actions';
import {
  setUsername,
  setPassword
} from 'actions/user-actions';

import { login, createUser } from 'services/user-services';
import { loadStrings, saveTranslations } from 'services/strings-services';
import { goToRoute } from 'services/route-services';

import { router } from 'lib/router';


const STYLES = {
  grid: {
    marginTop: 50,
  },
  jumbo: {
    borderRadius: 0,
    boxShadow: '2px 2px 5px #aaa',
  },
  icon: {
    marginRight: 10,
  },
};

@connect(s => s)
export default class App extends React.Component {

  static propTypes = {
    title: React.PropTypes.string,
  }

  static defaultProps = {
    to: "sv",
    from: "en",
  }

  verifyLoggedIn() {
    var { user } = this.props;
    return !!user.token;
  }

  componentWillMount() {
    var { dispatch, routes } = this.props;
    var urlPath = location.hash.slice(1);
    var resultingPath = urlPath;
    var authorized = this.allowWithoutAuthorization(urlPath);
    if(!authorized){
      authorized = this.verifyLoggedIn()
    }
    if(!authorized) {
      resultingPath = router.login;
    }
    if((routes.currentPage) != urlPath){
      dispatch(goToRoute(resultingPath));
    }
  }

  buildContent() {
    var { translations, routes } = this.props;
    if(translations.loading){
      return (<LoadingScreen/>);
    }
    let Page;
    switch (routes.currentPage) {
      case router.login:         Page = this.buildLoginPage(); break;
      case router.translations:  Page = this.buildTranslationPage(); break;
      default:                   Page = this.buildLoginPage(); break;
    }
    return Page;
  }

  buildTranslationPage() {
    var { translations, from, to, dispatch } = this.props;
    return <TranslationList 
      items={translations.strings}
      to={ to }
      from={ from }
      handleChange={ this.updateTranslation }
      submit={  $=> { dispatch(saveTranslations()); } }
    />
  }

  buildLoginPage() {
    var { dispatch, user } = this.props;
    return (<LoginPage
      onUsernameChange={ username => { dispatch(setUsername(username))} }
      onPasswordChange={ password => { dispatch(setPassword(password))} }
      submit={ $=> { dispatch(login())} }
      title={'Login'}
      user={user}
      />)
  }

  render() {
    var { translations, from, to } = this.props;
    var content = this.buildContent();
    return (
      <Grid style={STYLES.grid}>
        { content }
      </Grid>
      );
  }

  updateTranslation = (string, key) => {
    var { dispatch, to } = this.props;
    dispatch(setTranslation(string, to, key));
  }

  allowWithoutAuthorization(path) {
    switch (path) {
      case router.login:       return true;
      default:                 return false;
    }
  }
}