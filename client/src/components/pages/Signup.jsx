import React, { Component } from 'react';
import { connect } from 'react-redux';
import { validate } from 'validate.js';
import { NigerianStateComponent } from '../ui/NigerianStateComponent';
import { SelectComponent } from '../ui/SelectComponent';
import { Error } from '../ui/Error';
import { signupGuestUser } from './../../store/action-creators';
import { ACCOUNT_TYPE_GUEST } from '../../store/consts';
import { SIGNUP_VALIDATION_RULES } from '../ui/consts'
import { log } from '../ui/log';

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstname: 'TestFirstName',
      lastname: 'TestLastName',
      address: 'TestAddress',
      state: '2',
			phonenumber: '09032108214',
      email: 'email@test.com',
      username: 'TestUsername',
      password: 'testpassword',
      repassword: 'testpassword',
			role: ACCOUNT_TYPE_GUEST,
			errors: {
				firstname: null,
				lastname: null,
				address: null,
				state: null,
				phonenumber: null,
				email: null,
				username: null,
				password: null,
				repassword: null,
			}
	
    };
    this.handleSelectState = this.handleSelectState.bind(this);
		this.handleChangeRole = this.handleChangeRole.bind(this);
  }
	resetErrors(callback) {
		let err = {};
		
		for(const error in this.state.errors) {
			err[error] = null;
		}
		let errors = Object.assign({}, {...this.state.errors}, err);
		this.setState({ errors }, callback);
	}
	
	registerUser(e) {
		e.preventDefault();
		this.resetErrors(() => {
			let errorMsg = validate(this.state, SIGNUP_VALIDATION_RULES);
			if (errorMsg !== undefined) {
				let errors = Object.assign({}, {...this.state.errors}, errorMsg);
				this.setState({errors});
				return;
			}
			this.props.dispatch(signupGuestUser(this.state));
		});
	}
  handleSelectState(value) {
    this.setState({ state: value });
  }
	handleChangeRole(value) {
		this.setState({ state: value });
	}
  handleUnique(field, value) {
    console.log(this.state.firstname);
  }
  componentDidMount() {
   //alert(log(this.props.user, 'user'));
  }
	validate(field, value, objectMode) {
		let errors = { ...this.state.errors };
		let errorMsg = validate(value, {[field]: SIGNUP_VALIDATION_RULES[field]});
		
		errorMsg = !errorMsg || errorMsg[field];
		errors[field] = Array.isArray(errorMsg) ? errorMsg[0] : errorMsg;
		this.setState({ errors });
	}
  render() {
    return (
      <div className="main-wrapper">
        <div className="container small-container">
          <div className="row card register">
            <div className="col s12 m12 l12">
              <h5>REGISTER</h5>
              
	      <form>
                <div className="row">
            <div className="input-field col s6">
                    <input
                      id="firstname"
                      type="text"
                      className="validate"
                      value={this.state.firstname}
        onChange={e => this.setState({ firstname: e.target.value })}
											onBlur={e => this.validate('firstname', { firstname: e.target.value })}
                    />
											<label htmlFor="firstname">First Name</label>
											<Error message={this.state.errors.firstname} />
                  </div>
                  <div className="input-field col s6">
                    <input
                      id="lastname"
                      type="text"
                      className="validate"
                      value={this.state.lastname}
											onBlur={e => this.validate('lastname', { lastname: e.target.value })}
                      onChange={e => this.setState({ lastname: e.target.value })}
                    />
											<label htmlFor="lastname">Last Name</label>
											<Error message={this.state.errors.lastname} />
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s6">
                    <input
                      id="address"
                      type="text"
                      className="validate"
											value={this.state.address} onChange={e => this.setState({ address: e.target.value })}
											onBlur={e => this.validate('address', { address: e.target.value })}
                    />
											<label htmlFor="address">Address</label>
											<Error message={this.state.errors.address} />
            </div>
                  <NigerianStateComponent errorMessage={this.state.errors.state} change={this.handleSelectState} />
                </div>
								<div className="row">
									<div className="input-field col s6">
										<input
											id="phonenumber"
											type="text"
											className="validate"
											value={this.state.phonenumber}
											onChange={e => this.setState({ phonenumber: e.target.value })}
											onBlur={e => this.validate('phonenumber', { phonenumber: e.target.value })} />
											<label htmlFor="phonenumber">Phone Number</label>
											<Error message={this.state.errors.phonenumber} />
									</div>
									<div className="input-field col s6">
                    <input
                      id="email_address"
                      type="text"
                      className="validate"
        value={this.state.email}
											onChange={e => this.setState({ email: e.target.value })}	onBlur={e => this.validate('email', { email: e.target.value })}
                    />
											<label htmlFor="email_address">Email Address</label>
											<Error message={this.state.errors.email} />
                  </div>
								</div>
                <div className="row">
                  <div className="input-field col s6">
                    <input
                      id="username"
                      type="text"
                      className="validate"
        value={this.state.username}
	onChange={e => this.setState({ username: e.target.value })}
                      onBlur={e => this.validate('username', { username: e.target.value })}
                    />
											<label htmlFor="username">username</label>
											<Error message={this.state.errors.username} />
                  </div>
									<div className="input-field col s6">
										<SelectComponent default="1" id="role" change={this.handleChangeRole} options={['Regular', 'Center Owner']} label="Account Type" />
										</div>
                </div>
                <div className="row">
                  <div className="input-field col s6">
                    <input
                      id="password"
                      type="password"
                      className="validate"
        value={this.state.password}
											onChange={e => this.setState({ password: e.target.value })}
											onBlur={e => {
												this.validate('password', { password: e.target.value });
											/*
											if (this.state.repassword !== '') {
											  this.validate('repassword', { password:this.state.password, repassword: this.state.repassword });
												}*/
											}}
                    />
											<label htmlFor="password">Password</label>
											<Error message={this.state.errors.password} />
                  </div>
                  <div className="input-field col s6">
                    <input
                      id="repassword"
                      type="password"
                      className="validate"
        value={this.state.repassword}
											onChange={e => this.setState({ repassword: e.target.value })} onBlur={e => this.validate('repassword', { password:this.state.password, repassword: e.target.value })}
                    />
											<label htmlFor="repassword">Retype Password</label>
											<Error message={this.state.errors.repassword} />
                  </div>
                </div>
                <div className="row" />
                <button onClick={(e) => this.registerUser(e)} className="btn btn-large blue">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state;
  return {
    user,
  };
}


export default connect(mapStateToProps)(Signup);
