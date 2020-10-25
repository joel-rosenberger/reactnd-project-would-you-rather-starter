import React, { Component } from 'react'
import { connect } from 'react-redux'
import Avatar from './Avatar'

class User extends Component {

    handleClick = (e) => {
        this.props.onSelectUser(this.props.user)
    }

    render() {
        return <button onClick={this.handleClick} className='list-group-item'>
            <Avatar user={this.props.user} size="48px"></Avatar>
            {this.props.user.name}
            </button>
    }
}

function mapStateToProps ( { users }, { userId }) {
    const user = users[userId]

    return {
        users,
        user: user
    }
}

export default connect(mapStateToProps)(User)