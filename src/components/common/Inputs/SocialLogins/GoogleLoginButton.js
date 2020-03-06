import React, { Component } from 'react'
import {Button, Icon} from 'semantic-ui-react';

class GoogleLoginButton extends Component {
    render() {
        return (
            <Button fluid color='google plus'>
                <Icon name='google' /> Google
            </Button>
        )
    }
}

export default GoogleLoginButton;