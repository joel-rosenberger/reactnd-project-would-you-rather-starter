import React, { Component } from 'react'
import { connect } from 'react-redux'

class NotFound extends Component {

    render() {
        return <div className="panel panel-danger">
        <div className="panel-heading">404 - Not Found</div>
        <div className="panel-body">
            <h4>The requested question was not found for id: {this.props.questionId}</h4>
        </div>
      </div>
    }
}


function mapStateToProps({}, { questionId }) {
    return {
        questionId: questionId
    }
}

export default connect(mapStateToProps)(NotFound)

