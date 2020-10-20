import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Home from './Home'
import Login from './Login'
import Question from './Question'
import NewQuestion from './NewQuestion'
import QuestionPage from './QuestionPage'

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
          <div className="container-fluid">
            {this.props.loading === true 
            ? null: <div>
              <Route path='/' >
                <Home></Home>
                {!this.props.loggedIn &&
                  <Login></Login>}
              </Route>
              <Route path='/logout'></Route>
              <Route path='/question/:id' >
                {!this.props.loggedIn
                ? <Redirect to="/login" />
                : <QuestionPage></QuestionPage>}
              </Route>
              <Route path='/new' >
                {!this.props.loggedIn
                ? <Redirect to="/login" />
                : <NewQuestion></NewQuestion>}
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
