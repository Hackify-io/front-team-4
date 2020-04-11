import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { withFirebase } from './../../../firebase/';

class FacebookLoginButton extends Component {
  buttonClickHandler = () => {
    console.log('Facebook Login Starting');
    this.props.firebase.doSignInWithFacebook();
  };
  render() {
    return (
      <Button fluid color="facebook" onClick={this.buttonClickHandler}>
        <Icon name="facebook" /> Facebook
      </Button>
    );
  }
}

export default withFirebase(FacebookLoginButton);
