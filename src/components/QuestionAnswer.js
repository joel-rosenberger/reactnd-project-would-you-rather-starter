import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { handleAnswerQuestion,
    ANSWER_OPTION_ONE, 
    ANSWER_OPTION_TWO } from '../actions/questions'

class QuestionAnswer extends Component {
    state = {
        selected: ANSWER_OPTION_ONE
    }

    handleChange = (e) => {
        const target = e.target;
        this.setState(() => ({
            selected: target.name
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { selected } = this.state

        this.props.dispatch(handleAnswerQuestion(this.props.question.id, this.state.selected))

        this.props.history.push('/question/' + this.props.questionId)
    }

    render() {
        return  <Fragment>
                    <h4 className="media-heading">Would you rather</h4>
                    <form onSubmit={this.handleSubmit}>
                        <div className="radio">
                            <label>
                                <input type="radio" name={ANSWER_OPTION_ONE} checked={this.state.selected == "optionOne"} onChange={ this.handleChange }/>
                                {this.props.question.optionOne.text}
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio" name={ANSWER_OPTION_TWO} checked={this.state.selected == "optionTwo"} onChange={ this.handleChange }/>
                                {this.props.question.optionTwo.text}
                            </label>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </Fragment>
    }
}

function mapStateToProps({ questions }, { questionId }) {
    return {
        question: questions[questionId]
    }
}

export default withRouter(connect(mapStateToProps)(QuestionAnswer))