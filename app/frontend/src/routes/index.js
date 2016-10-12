import React, { PropTypes }              from 'react';
import { Route, Router, browserHistory } from 'react-router';
import AppTitle                          from '../containers/AppTitle';
import NotFound                          from '../components/NotFound';


export default class Root extends React.Component {
 render() {
   return (
     <Router history={ browserHistory }>
       <Route path="/" component={ AppTitle } />
       <Route path="*" component={ NotFound } />
     </Router>
   );
 }
}
