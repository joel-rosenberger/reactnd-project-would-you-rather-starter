import React, { Component } from 'react'
import { connect } from 'react-redux'

class Avatar extends Component {
    render() {
        return <img alt={"avatar for " + this.props.user.name}
            src={this.props.user.avatarURL}
            style={{ width: "32px", height: "32px", verticalAlign: "middle", marginRight: "20px" }} />
    }
}

function mapStateToProps(state, {user}) {
    return {
        user: user
    }
}

export default connect(mapStateToProps)(Avatar)