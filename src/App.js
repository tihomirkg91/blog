import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './components/home-page/HomePage';
import SelectedPage from './components/selected-page/SelectedPage';
import EditPost from './components/edit-post/EditPost';
import CreatePost from './components/create-post/CreatePost';

import { AppContainer } from './AppStyles';

import { connect } from 'react-redux';
import { fetchPosts } from './actions';

class App extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <AppContainer>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/createpost" component={CreatePost} />
          <Route exact path="/:id" component={SelectedPage} />
          <Route exact path="/:id/edit" component={EditPost} />
        </Switch>
      </AppContainer>
    );
  }
}

export default connect(null, { fetchPosts })(App);
