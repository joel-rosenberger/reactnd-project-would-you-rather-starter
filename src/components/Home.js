import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setQuestionFilter, QUESTION_FILTER_ANSWERED, QUESTION_FILTER_UNANSWERED } from '../actions/ui'
import Question from './Question'

class Home extends Component {

    answered = (question) => question.optionOne.votes.length > 0 ||
            question.optionTwo.votes.length > 0

    unanswered = (question) => question.optionOne.votes.length === 0 &&
            question.optionTwo.votes.length === 0

    handleFilterChange = (e) => {
        this.props.dispatch(setQuestionFilter(e.target.name))
    }

    render() {
        let filter
        this.props.questionFilter===QUESTION_FILTER_ANSWERED
        ? filter = this.answered
        : filter = this.unanswered

        return <div className="container" style={{width:"600px"}}>
        <div class="panel panel-default">
            <ul class="nav nav-pills">
                <li role="presentation" class={this.props.questionFilter===QUESTION_FILTER_ANSWERED?"active":""}><a name={QUESTION_FILTER_ANSWERED} onClick={this.handleFilterChange}>Answered</a></li>
                <li role="presentation" class={this.props.questionFilter===QUESTION_FILTER_UNANSWERED?"active":""}><a name={QUESTION_FILTER_UNANSWERED} onClick={this.handleFilterChange}>Unanswered</a></li>
            </ul>
            <div class="panel-body">
                {this.props.questionIds
                .filter(id => filter(this.props.questions[id]))
                .map(id => <Question questionId={id}></Question>)}
            </div>
        </div>
      </div>
    }
}

function mapStateToProps({ questions, users, currentQuestionFilter }) {
    return {
        questions: questions,
        questionIds: Object.keys(questions),
        userIds: Object.keys(users),
        questionFilter: currentQuestionFilter
    }
}

export default connect(mapStateToProps)(Home)