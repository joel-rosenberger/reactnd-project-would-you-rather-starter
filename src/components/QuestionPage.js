import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionFrame from './QuestionFrame'
import QuestionAnswer from './QuestionAnswer'
import QuestionStats from './QuestionStats'

class QuestionPage extends Component {
    render() {
        return this.props.answered
            ? <QuestionStats questionId={this.props.questionId}></QuestionStats>
            : <QuestionFrame questionId={this.props.questionId}>
                <QuestionAnswer questionId={this.props.questionId}></QuestionAnswer>
              </QuestionFrame>
    }
}

function mapStateToProps({questions, authedUser}, {questionId}) {
    return {
        questionId: questionId,
        question: questions[questionId],
        answered: authedUser
        ? questions[questionId].optionOne.votes.includes(authedUser) ||
            questions[questionId].optionTwo.votes.includes(authedUser)
        : false
    }
}

export default connect(mapStateToProps)(QuestionPage)