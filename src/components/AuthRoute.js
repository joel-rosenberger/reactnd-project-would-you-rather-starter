import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class AuthRoute extends Component {
    render (){
        console.log(this.props.component)
        if (this.props.loggedIn) {
            return <Route component={Component} />
        }
        return <Redirect to='login' />
    }
}

function mapStateToProps({ authedUser }) {
    return {
        loggedIn: authedUser !== null,
    }
}

export default connect(mapStateToProps)(AuthRoute)