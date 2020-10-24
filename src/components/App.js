import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { setAuthedUser } from '../actions/authedUser'
import LoadingBar from 'react-redux-loading'
import Nav from './Nav'
import Login from './Login'
import Question from './Question'
import NewQuestion from './NewQuestion'
import QuestionPage from './QuestionPage'
import Leaderboard from './Leaderboard'
import Home from './Home'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    console.log("LOGGED IN")
    console.log(this.props.loggedIn)
    return (<Router>
        <Fragment>
          <LoadingBar/>
          <div className="container" style={{width:"600px"}}>
            {this.props.loading === true 
            ? null: <div>
              <Nav></Nav>
              <Route exact path='/' >
                {this.props.loggedIn
                ?<Home></Home>
                :<Login></Login>}
              </Route>
              <Route path='/logout'>
                //TODO logout user
                <Redirect to="/"></Redirect>
              </Route>
              <Route path='/leaderboard'>
                {this.props.loggedIn
                  ?<Leaderboard></Leaderboard>
                  :<Login></Login>}
              </Route>
              <Route path='/question/:id' >
                {this.props.loggedIn
                  ?<QuestionPage></QuestionPage>
                  :<Login></Login>}
              </Route>
              <Route path='/new' >
                {this.props.loggedIn
                  ?<NewQuestion></NewQuestion>
                  :<Login></Login>}
              </Route>
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
