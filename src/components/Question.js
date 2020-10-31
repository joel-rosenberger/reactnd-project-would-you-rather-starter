import React, { Component } from 'react'
import { connect } from 'react-redux'
import Avatar from './Avatar'
import { withRouter } from 'react-router-dom'

class Question extends Component {

    handleClick = (e) => this.props.history.push('/question/' + this.props.questionId)

    render() {
        return <div class="panel panel-default">
        <div class="panel-heading">{this.props.user.name} asks:</div>
        <div class="panel-body">
            <div class="media">
                <div class="media-left media-middle">
                    <Avatar size="64px" user={this.props.user}></Avatar>
                </div>
                <div class="media-body">
                    <h4 class="media-heading">Would you rather</h4>
                    <p>...{this.props.question.optionOne.text}</p>
                    <button onClick={this.handleClick}>View Poll</button>
                </div>
            </div>
        </div>
      </div>
    }
}

function mapStateToProps({ questions, users }, {questionId}) {
    console.log("QUESTIONID", questionId)
    return {
        question: questions[questionId],
        user: users[questions[questionId].author]
    }
}

export default withRouter(connect(mapStateToProps)(Question))