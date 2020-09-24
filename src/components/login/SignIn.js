import React, { Component } from 'react'
import classnames from 'classnames'
import '../../css/Login.SignIn.scss'
class SignIn extends Component{
  state = {
    userName: '',
    password: '',
    errorUserName: false,
    errorPassword: false, 
    showPassword: false
  }

  onFormSubmit = (e) => {
      e.preventDefault()
  }

  handleChage = () => {

  }


  render  () {

    let userClass = '',
    passwordClass = ''
    if (this.state.userName.length > 0) {
      userClass = 'field'
    }

    if (this.state.password.length > 0) {
        passwordClass = 'field'
    }

    return(
      <div className="sign_in">
          <h1>
            welcome
          </h1>
          <form onSubmit={this.onFormSubmit}>
            <div className="offset">
              <div className="form-label">
                User Name:
              </div>
              <input
                type="text"
                onChange={this.handleChage}
                value={this.state.userName}
                placeholder="User Name"
                className={classnames('form-signIn', userClass, {invalid: this.state.errorUserName})}
                />
              <div classnames="form-label">
                  Password:
              </div>
              <input 
                type={this.state.showPassword === true? 'text' : 'password'}
                onChange={this.handleChage}
                value={this.state.password}
                placeholder="Password"
                className={classnames('form-signIn', passwordClass, {invalid: this.state.errorPassword})}
              />

              <button type="submit" className="submit-button">
                Confirm
              </button>

            </div>
        </form>
      </div>
        )
    }
}

export default SignIn