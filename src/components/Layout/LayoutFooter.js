import React, { Component } from 'react';
import { Container, Segment, Grid, List, Header, Input, Icon, Responsive } from 'semantic-ui-react';

class LayoutFooter extends Component {
  state = {};
  handleOnUpdate = (e, {width}) => this.setState({width});
  render() {
    const {width} = this.state;
    const textAlign = width <= Responsive.onlyMobile.maxWidth ? 'center' : '';
    return (
      <Responsive 
        as={Segment}
        color={"teal"}
        inverted vertical style={{ padding: '5em 0em' }}
        onUpdate={this.handleOnUpdate}
      >
        <Container>
          <Grid textAlign={textAlign} inverted stackable>
            <Grid.Row>
              <Grid.Column width={7}>           
                <Grid textAlign={textAlign} inverted stackable>
                  <Grid.Row>
                    <Grid.Column>
                      (LOGO) MED TRAVEL
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={7}>
                      <Header inverted as='h4' content='FOLLOW US' />
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Icon name="twitter"/>
                        <Icon name="facebook f" />
                        <Icon name="youtube"/>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Grid.Column>
              <Grid.Column width={4}>
                <Header inverted as='h4' content='Useful links' />
                <List link inverted>
                  <List.Item as='a'>About</List.Item>
                  <List.Item as='a'>Login</List.Item>
                  <List.Item as='a'>Register</List.Item>
                  <List.Item as='a'>Contacts</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={4}>
              <Header inverted as='h4' content='Contact with us' />
                <List link inverted>
                  <List.Item as='a'>+61 154515451545</List.Item>
                  <List.Item as='a'>info@medtravel.com</List.Item>
                </List>
              <Header inverted as='h4' content='Newsletter' />
              <Input
                action={{
                  color: 'teal',
                  content: 'Submit',
                }}
                actionPosition='right'
                placeholder='Your email'
              />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>          
      </Responsive>
    );
  }
}

export default LayoutFooter;
