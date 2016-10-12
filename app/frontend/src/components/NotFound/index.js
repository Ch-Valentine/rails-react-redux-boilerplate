import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import './style';

export default class AppTitle extends Component {
  render() {
    return (
      <div className="not-found">
        <h1 className="not-found__title">404 Not found.</h1>
        <p className="not-found__text">
          Sorry, an error has occured, Requested page not found!<br/>
          <Link to="/">Take me at home.</Link>
        </p>
      </div>
    );
  }
}
