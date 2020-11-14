import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { setAuthedUser } from '../actions/authedUser'
import LoadingBar from 'react-redux-loading'
import Nav from './Nav'
import Login from './Login'
import QuestionFrame from './QuestionFrame'
import QuestionAnswer from './QuestionAnswer'
import NewQuestion from './NewQuestion'
import QuestionPage from './QuestionPage'
import Leaderboard from './Leaderboard'
import Home from './Home'
import Logout from './Logout'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (<Router>
        <Fragment>
          <LoadingBar/>
          <div className="container-fluid">
            {this.props.loading === true 
            ? null: <div>
              <Nav></Nav>
              <div className="container" style={{width:"600px"}}>
                <Route exact path='/' >
                  {this.props.loggedIn
                  ?<Home></Home>
                  :<Login></Login>}
                </Route>
                <Route path='/logout'>
                  <Logout></Logout>
                </Route>
                <Route path='/leaderboard'>
                  {this.props.loggedIn
                    ?<Leaderboard></Leaderboard>
                    :<Login></Login>}
                </Route>
                <Route 
                path='/question/:id'
                render = {({match}) => { 
                  return this.props.loggedIn
                    ?<QuestionFrame questionId={match.params.id}>
                      <QuestionAnswer questionId={match.params.id}></QuestionAnswer>
                    </QuestionFrame>
                    :<Login></Login>
                }}
                />
                <Route path='/new' >
                  {this.props.loggedIn
                    ?<NewQuestion></NewQuestion>
                    :<Login></Login>}
                </Route>
              </div>
            </div>}
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps( { authedUser, users }) {
  return {
    loggedIn: authedUser !== null,
    loading: users === null
  }
}  

export default connect(mapStateToProps)(App);
