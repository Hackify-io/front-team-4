//Import Modules
import React, { Component } from "react";
import { connect } from "react-redux";
import { withFirebase } from './../firebase'
import {Dropdown} from 'semantic-ui-react';
import AvatarMenuItem from './../Layout/AvatarMenuItem';
//Import Utils
import { logoutUser } from "../../actions/authActions";
class LoginUser extends Component {
  onLogoutClick = () => {
    this.props.logoutUser();
    this.props.firebase.doSignOut();
  };
  render() {
    const { userAvatar, displayName } = this.props;
    const defaultImage = "https://biblioteca.acropolis.org/wp-content/uploads/2019/12/roble.jpg";
    const avatar = userAvatar ? userAvatar: defaultImage;
    return (
      <AvatarMenuItem image={avatar} displayName={displayName}>
        <Dropdown.Item onClick={this.onLogoutClick}>Logout</Dropdown.Item>
      </AvatarMenuItem>
    );
  }
}

const mapStateToProps = state => {
  return {
    userAvatar: state.auth.user.data.avatar,
    displayName: state.auth.user.data.name
  };
};
export default withFirebase(connect(mapStateToProps, { logoutUser })(LoginUser));
