import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import User from './User'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {

    /*
     * Local form state used to hide/disable controls.  
     * Once the user is selected and the Login button 
     * is clicked, the logged in user will be set in 
     * redux. 
     */
    state = {
        showUsers: false,
        selectedUser: null
    }

    toggleShowUsers = () => {
        this.setState((state, props) => ({
            showUsers: !state.showUsers
        }))
    }

    selectUser = (user) => {
        this.setState({
            selectedUser: user
        })
    }

    login = () => {
        this.props.dispatch(setAuthedUser(this.state.selectedUser.id))
    }

    render() {
        let buttonClassNames = "btn btn-default";
        if (!this.state.selectedUser) {
            buttonClassNames += " disabled"
        }
        
        return <div className="panel panel-default">
            <div className="panel-heading">
                <h4 className="text-center">Welcome to the Would You Rather App!</h4>
                </div>
            <div className="panel-body">
                <h5 className="text-center">Please Login.</h5>
                <button className="btn btn-default dropdown-toggle" type="button" onClick={this.toggleShowUsers}>
                    Select a User
                <span className="caret"></span>
                </button>
                {this.state.showUsers && <Fragment>
                <div className="list-group">
                    {this.props.userIds.map(id =>
                        <User key={id} userId={id} onSelectUser={this.selectUser}/>)}
                </div>
                </Fragment>}
                <div className="btn-group btn-group-justified" role="group">
                    <a type="button" className={buttonClassNames} onClick={this.login}>Login</a>
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