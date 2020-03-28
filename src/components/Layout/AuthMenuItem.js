import React, { Component } from 'react'
import { connect } from 'react-redux';

import LoginUser from './../Auth/LoginUser';
import LoginButtons from './../Auth/LoginButtons';

class AuthMenuItem extends Component {
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
export default connect(mapStateToProps, {})(AuthMenuItem);