import React, { Component } from 'react'
import { connect } from 'react-redux'
import Avatar from './Avatar'
import QuestionStatPanel from './QuestionStatPanel'
import { ANSWER_OPTION_ONE, ANSWER_OPTION_TWO } from '../actions/questions'

class QuestionStats extends Component {

    handleClick = (e) => this.props.history.push('/question/' + this.props.questionId)

    render() {
        return <div className="panel panel-default">
        <div className="panel-heading">Asked by {this.props.user.name}</div>
        <div className="panel-body">
            <div className="media">
                <div className="media-left media-middle">
                    <Avatar size="64px" user={this.props.user}></Avatar>
                </div>
                <div className="media-body">
                    <h3>Results</h3> 
                    <QuestionStatPanel questionId={this.props.questionId} answer={ANSWER_OPTION_ONE}></QuestionStatPanel>
                    <QuestionStatPanel questionId={this.props.questionId} answer={ANSWER_OPTION_TWO}></QuestionStatPanel>
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

export default connect(mapStateToProps)(QuestionStats)