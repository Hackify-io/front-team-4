import React, { Component } from 'react'
import { connect } from 'react-redux';

import { withFirebase } from './../firebase'
import { logoutUser, partialSocialLogin } from "./../../actions/authActions";

import LoginUser from './../Auth/LoginUser';
import LoginButtons from './../Auth/LoginButtons';

class AuthMenuItem extends Component {
    componentDidMount() {
        this.listener = this.props.firebase.onAuthUserListener(
          authUser => {
            this.props.partialSocialLogin(authUser);
          },
          () => {
            this.props.logoutUser();
          }
        );
      }    

    render() {
        const { isAuthenticated } = this.props;
        return (
             isAuthenticated ? <LoginUser/> : <LoginButtons/>
        )
    }
}


const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}
export default withFirebase(connect(mapStateToProps, {logoutUser, partialSocialLogin})(AuthMenuItem));