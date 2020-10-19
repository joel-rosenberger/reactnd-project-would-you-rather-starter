import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from './User'

class Login extends Component {
    render() {
        return <div className="panel panel-primary">
            <div className="panel-heading">Login</div>
            <div className="panel-body">
                <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown">
                    Dropdown
                <span className="caret"></span>
                </button>
                <div className="list-group">
                    {this.props.userIds.map(id =>
                        <User key={id} userId={id}/>)}
                </div>
            </div>
        </div>
    }
}

function mapStateToProps({ users }) {
    return {
            userIds: Object.keys(users)
    }
}

export default connect(mapStateToProps)(Login)