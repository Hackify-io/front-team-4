import React, {Component} from 'react'
import { Container, Grid, Responsive } from 'semantic-ui-react'
import SearchClinicForm from './SearchClinicForm';
class LoginForm extends Component {
  state = {}

  handleOnUpdate = (e, { width }) => this.setState({ width })

  render(){
    const { width } = this.state
    const numberOfColumns = width > Responsive.onlyMobile.maxWidth ? 6 : 14
  return (
    <Grid verticalAlign='middle'>
        <Grid.Row color="grey" style={{backgroundImage: `url(https://www.pulso.com/wp-content/uploads/2017/02/doctor-tablet-2.jpg)`, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
          <Container>
          <Responsive as={Grid} fireOnMount onUpdate={this.handleOnUpdate}>
              <Grid.Column width={numberOfColumns}>
                  <SearchClinicForm/>
              </Grid.Column>   
          </Responsive>
          </Container>
      </Grid.Row> 
    </Grid>
    ) 
  }
}

export default LoginForm