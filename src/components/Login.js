import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from './User'

class Login extends Component {
    render() {
        return <div className="panel panel-default">
            <div className="panel-heading">
                <h4 className="text-center">Welcome to the Would You Rather App!</h4>
                </div>
            <div className="panel-body">
                <h5 className="text-center">Please Login.</h5>
                <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown">
                    Dropdown
                <span className="caret"></span>
                </button>
                <div className="list-group">
                    {this.props.userIds.map(id =>
                        <User key={id} userId={id}/>)}
                </div>
                <div class="btn-group btn-group-justified" role="group">
                    <a type="button" class="btn btn-default">Login</a>
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