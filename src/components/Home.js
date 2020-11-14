import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setQuestionFilter, QUESTION_FILTER_ANSWERED, QUESTION_FILTER_UNANSWERED, changeTab } from '../actions/ui'
import QuestionFrame from './QuestionFrame'
import { Link } from 'react-router-dom'
import NewQuestion from './NewQuestion'
import QuestionSummary from './QuestionSummary'
import { NAV_HOME } from '../actions/ui'

class Home extends Component {

    answered = (question) => question.optionOne.votes.includes(this.props.currentUser) ||
            question.optionTwo.votes.includes(this.props.currentUser)

    unanswered = (question) => !question.optionOne.votes.includes(this.props.currentUser) &&
            !question.optionTwo.votes.includes(this.props.currentUser)

    handleFilterChange = (e) => {
        this.props.dispatch(setQuestionFilter(e.target.name))
    }

    componentDidMount() {
        this.props.dispatch(changeTab(NAV_HOME))
    }

    render() {
        let filter
        this.props.questionFilter===QUESTION_FILTER_ANSWERED
        ? filter = this.answered
        : filter = this.unanswered

        let ids = this.props.questionIds.filter(id => filter(this.props.questions[id]))

        return <div className="panel panel-default">
            <ul className="nav nav-pills">
                <li role="presentation" className={this.props.questionFilter===QUESTION_FILTER_ANSWERED?"active":""}><a name={QUESTION_FILTER_ANSWERED} onClick={this.handleFilterChange}>Answered</a></li>
                <li role="presentation" className={this.props.questionFilter===QUESTION_FILTER_UNANSWERED?"active":""}><a name={QUESTION_FILTER_UNANSWERED} onClick={this.handleFilterChange}>Unanswered</a></li>
            </ul>
            <div className="panel-body">
                {ids.length > 0 
                ? ids.map(id => <QuestionFrame key={id} questionId={id}><QuestionSummary questionId={id}></QuestionSummary></QuestionFrame>)
                :<div>
                    <h6>No questions found.</h6>
                    <h5>Why don't you create a new one?</h5>
                    <NewQuestion></NewQuestion>
                </div>}
            </div>
        </div>
    }
}

function mapStateToProps({ questions, users, currentQuestionFilter, authedUser }) {
    let questionValues = Object.values(questions)
    questionValues.sort((q1, q2) => q2.timestamp-q1.timestamp)
    return {
        questions: questions,
        questionIds: questionValues.map(q => q.id),
        userIds: Object.keys(users),
        questionFilter: currentQuestionFilter,
        currentUser: authedUser
    }
}

export default connect(mapStateToProps)(Home)