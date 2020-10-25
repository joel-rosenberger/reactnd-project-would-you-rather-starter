import React, { Component } from 'react'
import { connect } from 'react-redux'

class Avatar extends Component {
    render() {
        return <img alt={"avatar for " + this.props.user.name}
            src={this.props.user.avatarURL}
            style={{ width: this.props.size, height: this.props.size, verticalAlign: "middle", marginRight: "20px" }} />
    }
}

function mapStateToProps(state, {user, size}) {
    return {
        user: user,
        size: size
    }
}

export default connect(mapStateToProps)(Avatar)