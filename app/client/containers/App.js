
import React from 'react';
import { connect } from 'react-redux';

// ReactBoostrap components:
import Grid from 'react-bootstrap/lib/Grid';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Button from 'react-bootstrap/lib/Button';

import TranslationList from 'components/TranslationList';
import LoadingScreen from 'components/LoadingScreen';
import LoginPage from 'components/LoginPage';
import UploadYmlForm from 'components/UploadYmlForm';
import DownloadYmlForm from 'components/DownloadYmlForm';
import TopBar from 'components/TopBar';


import { setTranslation } from 'actions/translation-actions';
import {
  setUsername,
  setPassword
} from 'actions/user-actions';

import { login, createUser, logout } from 'services/user-services';
import { loadStrings, saveTranslations, uploadYML, downloadYML } from 'services/strings-services';
import { goToRoute } from 'services/route-services';

import { router } from 'lib/router';


const STYLES = {
  grid: {
    marginTop: 50,
  },
};

@connect(s => s)
export default class App extends React.Component {

  static propTypes = {
    title: React.PropTypes.string,
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
      case router.uploadYML:     Page = this.buildUploadYMLPage(); break;
      case router.downloadYML:   Page = this.buildDownloadYMLPage(); break;
      default:                   Page = this.buildLoginPage(); break;
    }
    return Page;
  }

  buildDownloadYMLPage() {
    var { dispatch, languages, yml } = this.props;
    console.log(yml);
    return <DownloadYmlForm
      languages={languages.languages}
      submit={(language) => dispatch(downloadYML(language))}
      yml={yml.yml}
      />
  }

  buildUploadYMLPage() {
    var { dispatch, languages } = this.props;
    return <UploadYmlForm
      submit={(yml, language) => { dispatch(uploadYML(yml, language))}}
      languages={languages.languages}
      />

  }

  buildTranslationPage() {
    var { translations, languages, dispatch } = this.props;
    var { from, to } = languages;
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

  buildTopBar() {
    var { dispatch } = this.props;
    return <TopBar
      goTo={(route) => { dispatch(goToRoute(route)) }}
      loggedIn={this.verifyLoggedIn()}
      logout={$ => { dispatch(logout()) }}
      router={router}
      />
  }

  render() {
    var content = this.buildContent();
    var topbar = this.buildTopBar();
    return (
      <div>
        {topbar}
        <Grid style={STYLES.grid}>
          { content }
        </Grid>
      </div>
      );
  }

  updateTranslation = (string, key) => {
    var { dispatch, languages } = this.props;
    var { to } = languages;
    dispatch(setTranslation(string, to, key));
  }

  allowWithoutAuthorization(path) {
    switch (path) {
      case router.login:       return true;
      default:                 return false;
    }
  }
}
