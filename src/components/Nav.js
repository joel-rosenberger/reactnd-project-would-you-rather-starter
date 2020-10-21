import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Nav extends Component {
    render() {
        return <div>
            <ul className="nav nav-tabs">
                <li role="presentation" className="active"><Link to="/">Home</Link></li>
                <li role="presentation"><Link to="/new">New Question</Link></li>
                <li role="presentation"><Link to="/leaderboard">Leaderboard</Link></li>
            </ul>
        </div>
    }
}

function mapStateToProps() {
    
}

export default connect(mapStateToProps)(Nav)