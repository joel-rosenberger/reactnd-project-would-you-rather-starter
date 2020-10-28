import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addQuestion, handleAddQuestion } from '../actions/questions'

class NewQuestion extends Component {
    state = {
        optionOne: '',
        optionTwo: ''
    }

    handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        if (target.name == "optionOne") {
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
        }))
    }

    render() {
        const { optionOne, optionTwo } = this.state
        return <div class="panel panel-default">
        <div class="panel-heading">Create New Question</div>
            <div class="panel-body">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <h6>Complete the question:</h6>
                        <h5>Would you rather...</h5>
                        <input type="text"
                        name="optionOne" 
                        className="form-control" 
                        placeholder="Enter option one text"
                        value = {optionOne}
                        onChange = {this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <h5 class="text-center">OR</h5>
                    </div>
                    <div className="form-group">
                        <input type="text"
                        name="optionTwo" 
                        className="form-control" 
                        placeholder="Enter option two text"
                        value = {optionTwo}
                        onChange = {this.handleChange}/>
                    </div>
                    <div class="btn-group btn-group-justified">
                        <div class="btn-group">
                            <button 
                            type="submit" 
                            class=" btn btn-default">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    }
}

function mapStateToProps() {
}

export default connect(mapStateToProps)(NewQuestion)