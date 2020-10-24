import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class Home extends Component {
    render() {
        return <div class="panel panel-primary">
        <ul class="nav nav-tabs">
            <li role="presentation" class="active"><a href="#">Answered</a></li>
            <li role="presentation"><a href="#">Unanswered</a></li>
        </ul>
        <div class="panel-body">
            {this.props.questionIds.map(id => <Question questionId={id}></Question>)}
        </div>
      </div>
    }
}

function mapStateToProps({ questions, users }) {
    return {
        questionIds: Object.keys(questions),
        userIds: Object.keys(users)
    }
}

export default connect(mapStateToProps)(Home)