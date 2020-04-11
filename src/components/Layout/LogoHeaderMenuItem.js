import React, { Component } from 'react'
import { Header, Image } from 'semantic-ui-react'; 
class LogoHeaderMenuItem extends Component {
    render() {
        const {image, text} = this.props;
        return (
            <Header as='h2'>
                <Image circular src={image} /> {text}
            </Header>
        )
    }
}

export default LogoHeaderMenuItem;