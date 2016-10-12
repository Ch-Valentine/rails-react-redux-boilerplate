import React, { PropTypes, Component } from 'react';
import './style';


export default class AppTitle extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.actions.fetchTitle();
  }

  render() {
    const { title, text } = this.props;
    return (
      <div className="app-title">
        <h1 className="app-title__title">{ title }</h1>
        <p className="app-title__text">{ text }</p>
      </div>
    );
  }
}
