import React, { Component } from 'react'
import classnames from 'classnames'
import '../../css/Login.SignIn.scss'
class SignIn extends Component{
  state = {
    email: '',
    password: '',
    errorEmail: false,
    errorPassword: false, 
    showPassword: false
  }

  onFormSubmit = (e) => {
      e.preventDefault()
  }

  handleChage = () => {

  }

  onToggleClick = () => {

  }


  render  () {

    let userClass = '',
    passwordClass = ''
    if (this.state.email.length > 0) {
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
                Email:
              </div>
              <input
                type="text"
                onChange={this.handleChage}
                value={this.state.email}
                placeholder="Email"
                className={classnames('form-signIn', userClass, {invalid: this.state.errorEmail})}
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

              <div className={classnames('toggle-password', passwordClass, {open: this.state.showP})}
                onClick={this.onToggleClick}>
              </div>

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