import React, { Component } from 'react'
import {Button, Icon} from 'semantic-ui-react';

class FacebookLoginButton extends Component {
    render() {
        return (
            <Button fluid color='facebook'>
                <Icon name='facebook' /> Facebook
            </Button>
        )
    }
}


export default FacebookLoginButton;