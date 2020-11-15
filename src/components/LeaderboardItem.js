import React, { Component } from 'react'
import { connect } from 'react-redux'
import Avatar from './Avatar'

class LeaderboardItem extends Component {

    render() {
        return <div className="panel panel-default">
                    <div className="panel-heading">{this.props.user.name}</div>
                    <div className="panel-body">
                        <div className="media">
                            <div className="media-left media-middle">
                                <Avatar size="64px" user={this.props.user}></Avatar>
                            </div>
                            <div className="media-body">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-6 col-md-8"><strong>Answered questions</strong></div>
                                        <div className="col-xs-6 col-md-4"><span className="badge">{this.props.answeredQuestions}</span></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-6 col-md-8"><strong>Created questions</strong></div>
                                        <div className="col-xs-6 col-md-4"><span className="badge">{this.props.createdQuestions}</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="media-left media-right">
                                <strong>Score</strong><span className="badge">{this.props.score}</span>
                            </div>
                        </div>
                    </div>
                </div>

    }
}

function mapStateToProps({users}, {userId}) {
    return {
        user: users[userId],
        answeredQuestions: Object.keys(users[userId].answers).length,
        createdQuestions: users[userId].questions.length,
        score: Object.keys(users[userId].answers).length + users[userId].questions.length
    }
}

export default connect(mapStateToProps)(LeaderboardItem)