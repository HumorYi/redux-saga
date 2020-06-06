import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../action/login'

export default
@connect(
  // mapStateToProps
  ({ user: { isLogin, loading, err } }) => ({ isLogin, loading, err }),
  // mapDispatchToProps
  { login }
)
class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = { name: '' }
  }

  nameChange = e => this.setState({ name: e.target.value })

  render() {
    const { isLogin, location } = this.props
    const { redirect = '/' } = location.state || {}

    if (isLogin) {
      return <Redirect to={redirect} />
    }

    const { name } = this.state
    const { loading, err = {}, login } = this.props

    return (
      <div>
        <h3>LoginPage</h3>
        <input value={name} onChange={this.nameChange} />
        <button onClick={() => login({ name })}>{loading ? 'loading...' : 'click login'}</button>
        <p className="red">{err.msg}</p>
      </div>
    )
  }
}
