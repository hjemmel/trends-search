import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  Alignment,
  Classes,
  Button,
  Navbar,
  NavbarGroup,
  NavbarHeading
} from '@blueprintjs/core';

class Header extends React.Component {
  render (props) {
    const classes = classNames(Classes.DARK, Classes.FIXED_TOP);
    return (
      <div className={this.props.className}>
        <Navbar className={classes}>
          <NavbarGroup align={Alignment.LEFT}>
            <NavbarHeading>Trends Analyzer</NavbarHeading>
          </NavbarGroup>
          <NavbarGroup align={Alignment.RIGHT}>
            <Button className={Classes.MINIMAL} icon='user' />
            <Button className={Classes.MINIMAL} icon='notifications' />
            <Button className={Classes.MINIMAL} icon='cog' />
          </NavbarGroup>
        </Navbar>
      </div>
    );
  }
}

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
