import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setQuestionFilter, QUESTION_FILTER_ANSWERED, QUESTION_FILTER_UNANSWERED } from '../actions/ui'
import Question from './Question'
import { Link } from 'react-router-dom'
import NewQuestion from './NewQuestion'

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

        let ids = this.props.questionIds.filter(id => filter(this.props.questions[id]))

        return <div class="panel panel-default">
            <ul class="nav nav-pills">
                <li role="presentation" class={this.props.questionFilter===QUESTION_FILTER_ANSWERED?"active":""}><a name={QUESTION_FILTER_ANSWERED} onClick={this.handleFilterChange}>Answered</a></li>
                <li role="presentation" class={this.props.questionFilter===QUESTION_FILTER_UNANSWERED?"active":""}><a name={QUESTION_FILTER_UNANSWERED} onClick={this.handleFilterChange}>Unanswered</a></li>
            </ul>
            <div class="panel-body">
                {ids.length > 0 
                ? ids.map(id => <Question questionId={id}></Question>)
                :<div>
                    <h6>No unanswered questions found.</h6>
                    <h5>Why don't you create a new question?</h5>
                    <NewQuestion></NewQuestion>
                </div>}
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