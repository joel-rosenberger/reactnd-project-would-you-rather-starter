import React, { Component } from 'react'
import { connect } from 'react-redux'

class Leaderboard extends Component {
    render() {
        return <div>
            LEADERBOARD
        </div>
    }
}

function mapStateToProps() {

}

export default connect(mapStateToProps)(Leaderboard)