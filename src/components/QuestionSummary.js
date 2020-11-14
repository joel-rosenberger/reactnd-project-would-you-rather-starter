import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class QuestionSummary extends Component {

    handleClick = (e) => this.props.history.push('/question/' + this.props.question.id)

    render() {
        return  <Fragment>
                    <h4 className="media-heading">Would you rather</h4>
                    <p>...{this.props.question.optionOne.text}</p>
                    <button onClick={this.handleClick}>View Poll</button>
                </Fragment>
    }
}

function mapStateToProps({ questions }, { questionId }) {
    return {
        question: questions[questionId]
    }
}

export default withRouter(connect(mapStateToProps)(QuestionSummary))