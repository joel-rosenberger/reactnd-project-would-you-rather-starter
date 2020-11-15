import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion, ANSWER_OPTION_ONE, ANSWER_OPTION_TWO } from '../actions/questions'
import { withRouter } from 'react-router-dom'
class NewQuestion extends Component {
    state = {
        optionOne: '',
        optionTwo: ''
    }

    handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        if (target.name == ANSWER_OPTION_ONE) {
            this.setState(() => ({
                optionOne: value
            }))
        } else {
            this.setState(() => ({
                optionTwo: value
            }))
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { optionOne, optionTwo } = this.state

        this.props.dispatch(handleAddQuestion(optionOne, optionTwo))

        this.setState(() => ({
            optionOne: optionOne,
            optionTwo: optionTwo,
        }), () => {
            this.props.history.push('/')
        })
    }

    render() {
        const { optionOne, optionTwo } = this.state
        return <div className="panel panel-default">
        <div className="panel-heading">Create New Question</div>
            <div className="panel-body">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <h6>Complete the question:</h6>
                        <h5>Would you rather...</h5>
                        <input type="text"
                        name={ANSWER_OPTION_ONE}
                        className="form-control" 
                        placeholder="Enter option one text"
                        value = {optionOne}
                        onChange = {this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <h5 className="text-center">OR</h5>
                    </div>
                    <div className="form-group">
                        <input type="text"
                        name={ANSWER_OPTION_TWO}
                        className="form-control" 
                        placeholder="Enter option two text"
                        value = {optionTwo}
                        onChange = {this.handleChange}/>
                    </div>
                    <div className="btn-group btn-group-justified">
                        <div className="btn-group">
                            <button 
                            type="submit" 
                            className=" btn btn-default">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    }
}

function mapStateToProps() {
    return {}
}

export default withRouter(connect(mapStateToProps)(NewQuestion))