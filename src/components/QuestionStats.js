import React, { Component } from 'react'
import { connect } from 'react-redux'
import Avatar from './Avatar'

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
                    <div className="card text-white bg-dark mb-3" style={{"max-width": "18rem"}}></div>
                    <div className="card-body">
                        <h5 className="card-title">Your Answer</h5>
                        <h4>{this.props.question.optionOne.text}</h4>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: "50%"}}>50%</div>
                        </div>
                        <p className="card-text">1 out of 2 votes</p>
                    </div>
                    <div className="card text-white bg-dark mb-3" style={{"max-width": "18rem"}}></div>
                    <div className="card-body">
                        <h4>{this.props.question.optionTwo.text}</h4>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: "50%"}}>50%</div>
                        </div>
                        <p className="card-text">1 out of 2 votes</p>
                    </div>
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