import React, { Component } from 'react';
import cx from 'classnames';

class Article extends Component {
  render() {
    const { name, className, ...other } = this.props;
    return (
      <article
        {...other}
        id={`main-${name}`}
        className={cx(`main-${name}`, className)}
      />
    );
  }
}
export default Article;
