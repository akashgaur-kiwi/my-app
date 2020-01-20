import React from 'react';
import { connect } from 'react-redux';
import Header from './header/header';
import { APP_LOAD } from './constants/actionType';
import agent from './agent';
import Register from './component/register'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { history } from './store';
 
const mapStateToProps = (state) => {
  console.log('state', state)
  return  {
    appNotLogin: state.auth.name,
  }
};

const mapDispatchToProps = (dispatch) => {
 return {
  onLoad: (payload, token) => {
    console.log('...inside onload');
    dispatch({ type: APP_LOAD, payload, token, skipTracking: true })
  },
 }
}; 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps',nextProps)
    // if (nextProps.redirectTo) {
    //   // this.context.router.replace(nextProps.redirectTo);
    //   store.dispatch(push(nextProps.redirectTo));
    //   this.props.onRedirect();
    // }
  }

  componentDidMount() {
    const token = window.localStorage.getItem('jwt');
    if (token) {
      agent.setToken(token);
    }
    this.props.onLoad(token ? agent.Auth.current() : 'null', token);
  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div> 
      <Router>
      <Header appName={this.props.appNotLogin} currentUser="" />
        <Switch  history={history}>
          <Route path="/register" component={Register} />
        </Switch>
        </Router>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);