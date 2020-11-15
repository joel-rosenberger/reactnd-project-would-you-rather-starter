import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ANSWER_OPTION_ONE,
    ANSWER_OPTION_TWO } from '../actions/questions'

class QuestionStatPanel extends Component {

    render() {
        return <div className="panel panel-success">
                    {this.props.userSelectedAnswer && <div className="panel-heading"><h4>Your Answer</h4></div>}
                    <div className="panel-body">
                        <h4>{this.props.answerToDisplay}</h4>
                        <p/>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: this.props.percentage}}>{this.props.percentage}</div>
                        </div>
                        {this.props.answerVotes} out of {this.props.questionVotes} votes
                    </div>
                </div>
    }
}

function mapStateToProps({ questions, users, authedUser }, {questionId, answer}) {
    return {
        question: questions[questionId],
        user: users[questions[questionId].author],
        authedUser: authedUser,
        answerToDisplay: questions[questionId][answer].text,
        userSelectedAnswer: questions[questionId][answer].votes.includes(authedUser),
        answerVotes: questions[questionId][answer].votes.length,
        questionVotes: questions[questionId][ANSWER_OPTION_ONE].votes.length + questions[questionId][ANSWER_OPTION_TWO].votes.length,
        percentage: `${Math.round(questions[questionId][answer].votes.length/(questions[questionId][ANSWER_OPTION_ONE].votes.length + questions[questionId][ANSWER_OPTION_TWO].votes.length)*100)}%`
    }
}

export default connect(mapStateToProps)(QuestionStatPanel)