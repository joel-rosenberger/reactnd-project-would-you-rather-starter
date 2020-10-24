import React, { Component } from 'react'
import { connect } from 'react-redux'
import Avatar from './Avatar'

class Question extends Component {
    render() {
        return <div class="panel panel-default">
        <div class="panel-heading">{this.props.user.name} asks:</div>
        <div class="panel-body">
            <div class="media">
                <div class="media-left media-top">
                    <Avatar user={this.props.user}></Avatar>
                </div>
                <div class="media-body">
                    <h4 class="media-heading">Would you rather</h4>
                    ...{this.props.question.optionOne.text}
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

export default connect(mapStateToProps)(Question)