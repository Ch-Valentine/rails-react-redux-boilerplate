import React, { PropTypes } from 'react';
import Root from '../routes/index';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';


const store  = configureStore();

export default class App extends React.Component {

  render() {
    return (
      <Provider store={ store }>
        <Root />
      </Provider>
    );
  }

}
