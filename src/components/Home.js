import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
    render() {
        return <div>
            HOME
        </div>
    }
}

function mapStateToProps() {

}

export default connect(mapStateToProps)(Home)