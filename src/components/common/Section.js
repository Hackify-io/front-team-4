import React, { Component } from 'react';
import cx from 'classnames';
import propTypes from 'prop-types';
import './section.css';
class Section extends Component {
  render() {
    const { name, header, className, ...other } = this.props;
    return (
      <section
        {...other}
        className={cx('section', `section-${name}`, className)}
      >
        {header && <h4 className="header">{header}</h4>}
        {this.props.children}
      </section>
    );
  }
}

Section.propTypes = {
  name: propTypes.string.isRequired,
};

export default Section;
