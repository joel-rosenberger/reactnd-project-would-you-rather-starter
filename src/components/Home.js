import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class Home extends Component {
    render() {
        return <div>
            {this.props.questionIds.map(id => <Question questionId={id}></Question>)}
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