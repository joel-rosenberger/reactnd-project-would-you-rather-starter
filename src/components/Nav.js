import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { changeTab } from '../actions/ui'

class Nav extends Component {
    
    handleClick = (e) => {
        this.props.dispatch(changeTab(e.target.name))
    }
    
    render() {
        return <div>
            <ul className="nav nav-tabs">
                <li role="presentation" className={this.props.currentTab === "home"?"active":""}><Link name="home" to="/" onClick={this.handleClick}>Home</Link></li>
                <li role="presentation" className={this.props.currentTab === "new"?"active":""}><Link name="new" to="/new" onClick={this.handleClick}>New Question</Link></li>
                <li role="presentation" className={this.props.currentTab === "leaderboard"?"active":""}><Link name="leaderboard" to="/leaderboard" onClick={this.handleClick}>Leaderboard</Link></li>
            </ul>
        </div>
    }
}

function mapStateToProps({ currentTab }) {
    return {
        currentTab: currentTab
    }
}

export default connect(mapStateToProps)(Nav)