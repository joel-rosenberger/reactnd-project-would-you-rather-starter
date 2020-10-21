import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionPage extends Component {
    render() {
        return <div>
            QUESTION PAGE
        </div>
    }
}

function mapStateToProps() {

}

export default connect(mapStateToProps)(QuestionPage)