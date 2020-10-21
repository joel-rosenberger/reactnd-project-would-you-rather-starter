import React, { Component } from 'react'
import { connect } from 'react-redux'

class User extends Component {

    handleClick = (e) => {
        this.props.onSelectUser(this.props.user)
    }

    render() {
        return <button onClick={this.handleClick} className='list-group-item'>
            <img  
            src={this.props.user.avatarURL} 
            style={{width:"32px", height:"32px", verticalAlign:"middle", marginRight:"20px"}}/>
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