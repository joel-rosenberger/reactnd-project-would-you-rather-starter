import React, { Component } from 'react'
import { connect } from 'react-redux'
import Avatar from './Avatar'

class QuestionFrame extends Component {

    handleClick = (e) => this.props.history.push('/question/' + this.props.questionId)

    render() {
        return <div className="panel panel-default">
        <div className="panel-heading">{this.props.user.name} asks:</div>
        <div className="panel-body">
            <div className="media">
                <div className="media-left media-middle">
                    <Avatar size="64px" user={this.props.user}></Avatar>
                </div>
                <div className="media-body">
                    { this.props.children }
                </div>
            </div>
        </div>
      </div>
    }
}

function mapStateToProps({ questions, users }, {questionId}) {
    return {
        question: questions[questionId],
        user: users[questions[questionId].author]
    }
}

export default connect(mapStateToProps)(QuestionFrame)