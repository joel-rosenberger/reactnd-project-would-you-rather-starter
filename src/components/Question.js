import React, { Component } from 'react'
import { connect } from 'react-redux'

class Question extends Component {
    render() {
        return <div>
            QUESTION
        </div>
    }
}

function mapStateToProps() {

}

export default connect(mapStateToProps)(Question)