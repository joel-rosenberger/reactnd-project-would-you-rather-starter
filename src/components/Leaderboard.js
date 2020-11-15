import React, { Component } from 'react'
import { connect } from 'react-redux'
import LeaderboardItem from './LeaderboardItem'

class Leaderboard extends Component {
    render() {
        return <div>
            {this.props.userIds.map(userId =>
                <LeaderboardItem userId={userId} key={userId}></LeaderboardItem>
            )}
        </div>
    }
}

function mapStateToProps({users, questions, authedUser}) {
    var i=0;
    const userIdList = Object.entries(users)
    .map(([key, value]) => value)
    .sort((userA, userB) => (Object.keys(userB.answers).length + userB.questions.length) - (Object.keys(userA.answers).length + userA.questions.length))
    .map(user => user.id)
    return {
        userIds: userIdList
    }
}

export default connect(mapStateToProps)(Leaderboard)