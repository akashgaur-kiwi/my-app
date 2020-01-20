import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    console.log('mapStateToProps Register', state)
    return  {
        
    }
  };
  
  const mapDispatchToProps = (dispatch) => {
   return {
   }
  };

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            email: '',
            password: '',
            isSubmitted: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        console.log(value, 'pppp',event);
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state)
        this.setState({ isSubmitted: true });
        // const { user } = this.state;
        // if (user.firstName && user.lastName && user.username && user.password) {
        //     this.props.register(user);
        // }
    }

    render() {
        return (
            <div className="auth-page">
            <div className="container page">
              <div className="row">
    
                <div className="col-md-6 offset-md-3 col-xs-12">
                  <h1 className="text-xs-center">Sign Up</h1>
                  <p className="text-xs-center">
                    <Link to="/login">
                      Have an account?
                    </Link>
                  </p>
    
                  <form>
                    <fieldset>
                      <fieldset className="form-group">
                        <input
                          className="form-control form-control-lg"
                          type="text"
                          placeholder="Username"
                          name="userName"
                          id="userName"
                          onChange={this.handleChange}
                          />
                      </fieldset>
    
                      <fieldset className="form-group">
                        <input
                          className="form-control form-control-lg"
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Email"
                          value={this.state.email}
                          onChange={this.handleChange}
                          />
                      </fieldset>
    
                      <fieldset className="form-group">
                        <input
                          className="form-control form-control-lg"
                          type="password"
                          name="password"
                          id="password"
                          placeholder="Password"
                          value={this.state.password}
                          onChange={this.handleChange}
                        />
                      </fieldset>
    
                      <button
                        className="btn btn-lg btn-primary pull-xs-right"
                        type="submit"
                        name="submit"
                        id="submit"
                        onClick={this.handleSubmit}
                        disabled={this.state.isSubmitted}>
                        >
                        Sign up
                      </button>
    
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);