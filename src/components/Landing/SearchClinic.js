import React from 'react'
import { Container, Grid } from 'semantic-ui-react'
import SearchClinicForm from './SearchClinicForm';
const LoginForm = () => (
  <Grid verticalAlign='middle'>
      <Grid.Row color="grey" style={{backgroundImage: `url(https://www.pulso.com/wp-content/uploads/2017/02/doctor-tablet-2.jpg)`, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
        <Container>
        <Grid>
            <Grid.Column width={6}>
                <SearchClinicForm/>
             </Grid.Column>   
        </Grid>
        </Container>
    </Grid.Row> 
  </Grid>
)

export default LoginForm