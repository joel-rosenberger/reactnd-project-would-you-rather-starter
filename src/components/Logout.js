import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'
import { withRouter } from 'react-router-dom'

class Logout extends Component {

    componentDidMount() {
        this.props.dispatch(setAuthedUser(null))
        this.props.history.push("/")
    }

    render() {
        return null;
    }
}



function mapStateToProps() {
    return {}
}

export default withRouter(connect(mapStateToProps)(Logout))