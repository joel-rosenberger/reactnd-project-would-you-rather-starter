import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { changeTab } from '../actions/ui'
import Avatar from './Avatar'
import { NAV_HOME, NAV_NEW, NAV_LEADERBOARD } from '../actions/ui'

class Nav extends Component {
    
    handleClick = (e) => {
        this.props.dispatch(changeTab(e.target.name))
    }
    
    render() {
        return <nav>
            <div className="container">
            <ul className="nav nav-pills">
                <li role="presentation" className={this.props.currentTab === NAV_HOME?"active":""}><Link name={NAV_HOME} to="/" onClick={this.handleClick}>Home</Link></li>
                <li role="presentation" className={this.props.currentTab === NAV_NEW?"active":""}><Link name={NAV_NEW} to="/new" onClick={this.handleClick}>New Question</Link></li>
                <li role="presentation" className={this.props.currentTab === NAV_LEADERBOARD?"active":""}><Link name={NAV_LEADERBOARD} to="/leaderboard" onClick={this.handleClick}>Leaderboard</Link></li>
                {this.props.currentUser && <Link className="navbar-text navbar-right" to="/logout">Logout</Link>}
                {this.props.currentUser && <p className="navbar-text navbar-right"><Avatar size="28px" user={this.props.currentUser}></Avatar></p>}
                {this.props.currentUser && <p className="navbar-text navbar-right">Hello {this.props.currentUser.name} </p>}
            </ul>
            </div>
        </nav>
        
    }
}

function mapStateToProps({ currentTab, authedUser, users }) {
    console.log("userName", users[authedUser])
    return {
        currentTab: currentTab,
        currentUser: users[authedUser]
    }
}

export default connect(mapStateToProps)(Nav)