import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'

class Logout extends Component {
    render() {
        this.props.dispatch(setAuthedUser(null))
        return <Redirect to="/"></Redirect>
    }
}

function mapStateToProps() {

}

export default connect(mapStateToProps)(Logout)