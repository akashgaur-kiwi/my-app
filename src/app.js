import React from 'react';
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';
import Header from './header/header';
import { APP_LOAD, REDIRECT } from './constants/actionType';
import agent from './agent';

const mapStateToProps = (state) => {
  return  {
   // name: state.name,
  }
};

const mapDispatchToProps = (dispatch) => {
 return {
  onLoad: (payload, token) => {
    dispatch({ type: APP_LOAD, payload, token, skipTracking: true })
  }
 }
}; 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    };
  }

  componentDidMount() {
    const token = window.localStorage.getItem('jwt');
    if (token) {
      agent.setToken(token);
    }

    this.props.onLoad(token ? agent.Auth.current() : null, token);
  }

  componentWillUnmount() {

  }
  render() {
    return (
      <div>
        {/* <h1>Hello</h1> {this.props.name}
          <button onClick={()=>{ this.props.changeName("aman")} }> Change Name</button> */}

        <Header appName="Demo App" currentUser="" />
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          {/* <Route path="/login" component={Login} /> */}
          {/* <Route path="/register" component={Register} /> */}
          {/* <Route path="/editor/:slug" component={Editor} />
            <Route path="/editor" component={Editor} />
            <Route path="/article/:id" component={Article} />
            <Route path="/settings" component={Settings} />
            <Route path="/@:username/favorites" component={ProfileFavorites} />
            <Route path="/@:username" component={Profile} /> */}
        </Switch>
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default connect()(App);
