import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../service/logout'
import { logout as logoutAction } from '../action/logout'

export default
@connect(({ user }) => ({ user }))
class UserPage extends Component {
  logout = () => {
    logout(this.props.user.userInfo).then(({ tip: { msg } }) => {
      alert(msg)
      logoutAction(this.props.dispatch)
    })
  }

  render() {
    const {
      user: { userInfo }
    } = this.props

    return (
      <div>
        <h3>UserPage</h3>
        <p>id: {userInfo.id}</p>
        <p>name: {userInfo.name}</p>
        <p>score: {userInfo.score}</p>
        <button onClick={this.logout}>logout</button>
      </div>
    )
  }
}
