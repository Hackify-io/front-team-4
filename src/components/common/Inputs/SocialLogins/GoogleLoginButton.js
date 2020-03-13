import React, { Component } from 'react'
import {Button, Icon} from 'semantic-ui-react';
import { withFirebase } from './../../../firebase/';

class GoogleLoginButton extends Component {
    buttonClickHandler = () => {
        this.props.firebase.doSignInWithGoogle();
    }
    render() {
        return (
            <Button fluid color='google plus' onClick={this.buttonClickHandler}>
                <Icon name='google' /> Google
            </Button>
        )
    }
}

export default withFirebase(GoogleLoginButton);