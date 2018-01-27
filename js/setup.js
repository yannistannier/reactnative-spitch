import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';

import configureStore from './configureStore';

import App from './App';


class Setup extends Component {

  constructor() {
    super();
    this.state = {
      isLoading: true,
      store: configureStore(() => this.setState({ isLoading: false })),
    };
  }


  render() {
    return (
        <Provider store={this.state.store}>
          <App />
        </Provider>
    );
  }
}


export default Setup;