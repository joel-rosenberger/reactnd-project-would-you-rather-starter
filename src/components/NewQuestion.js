import React, { Component } from 'react'
import { connect } from 'react-redux'

class NewQuestion extends Component {
    render() {
        return <div>
            NEW QUESTION
        </div>
    }
}

function mapStateToProps() {

}

export default connect(mapStateToProps)(NewQuestion)