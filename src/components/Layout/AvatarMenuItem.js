import React, { Component, Fragment } from 'react'
import { Image, Dropdown } from 'semantic-ui-react';
class AvatarMenuItem extends Component {
    render() {
        const options = [
            { key: 1, text: 'Choice 1', value: 1 },
            { key: 2, text: 'Choice 2', value: 2 },
          ]
        const {image} = this.props;
        return (
            <Fragment>              
                <Dropdown item trigger={<Image src={image} avatar />}>
                    <Dropdown.Menu>
                        <Dropdown.Item>Electronics</Dropdown.Item>
                        <Dropdown.Item>Automotive</Dropdown.Item>
                        <Dropdown.Item>Home</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Fragment>
        )
    }
}

export default AvatarMenuItem;