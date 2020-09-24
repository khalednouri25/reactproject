import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as ACTIONS from '../../redux/actions/action'
import SignIn from './SignIn'
//import '../../css/Login.scss'
class Login extends Component {
  state = {
      showSignIn: true,
      showSignUp: false, 
      ShowWelcome: false
  }

  onFormSubmit = (e) => {
    e.preventDefault()
  }

  handleChange = (e) => {
    this.setState({
      userName: e.target.value
    })
  }

  render () {

    return (
      <div className="login">
         {this.state.showSignIn === true? 
           <SignIn />
          : 
          null
          }

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.userInput 
  }
}

function mapDispatchToProps (dispatch) {
  return{
    nameUser: () => dispatch(ACTIONS.USER_INPUT())
  }
}

export default connect (mapStateToProps, mapDispatchToProps) (Login)