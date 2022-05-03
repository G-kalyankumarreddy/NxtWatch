import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import NxtWatchContext from '../../context/NxtWatchContext'
import {
  LoginPageContainer,
  LoginAndLogoContainer,
  LogoImage,
  LoginForm,
  InputLabel,
  FormInput,
  PasswordCheckbox,
  ShowPassword,
  ErrorMessage,
  LoginButton,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    errorMsg: '',
    isError: false,
  }

  onSubmitLoginForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userCredentials = {username, password}
    const loginUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userCredentials),
    }
    const response = await fetch(loginUrl, options)

    const data = await response.json()

    if (response.ok) {
      this.onLoginSuccess(data.jwt_token)
    } else {
      this.onLoginFailure(data.error_msg)
    }
  }

  onLoginSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onLoginFailure = errorMsg => {
    this.setState({isError: true, errorMsg})
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onClickShowPasswordCheckbox = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  renderLoginPage = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {showPassword, username, password, isError, errorMsg} = this.state
        const {isDark} = value
        const logoImage = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        return (
          <LoginPageContainer bgColor={isDark}>
            <LoginAndLogoContainer bgColor={isDark}>
              <LogoImage src={logoImage} alt="website logo" />
              <LoginForm bgColor={isDark} onSubmit={this.onSubmitLoginForm}>
                <InputLabel htmlFor="userName" fontColor={isDark}>
                  USERNAME
                </InputLabel>
                <br />
                <FormInput
                  id="userName"
                  type="text"
                  placeholder="Username"
                  fontColor={isDark}
                  value={username}
                  onChange={this.onChangeUserName}
                />
                <br />
                <InputLabel htmlFor="password" fontColor={isDark}>
                  PASSWORD
                </InputLabel>

                <br />
                <FormInput
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  fontColor={isDark}
                  value={password}
                  onChange={this.onChangePassword}
                />
                <br />
                <PasswordCheckbox
                  type="checkbox"
                  id="passwordCheckbox"
                  onClick={this.onClickShowPasswordCheckbox}
                />
                <ShowPassword htmlFor="passwordCheckbox" fontColor={isDark}>
                  Show Password
                </ShowPassword>
                <br />
                <LoginButton type="submit">Login</LoginButton>
                {isError && (
                  <ErrorMessage fontColor={isDark}>*{errorMsg}</ErrorMessage>
                )}
              </LoginForm>
            </LoginAndLogoContainer>
          </LoginPageContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  render() {
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    return this.renderLoginPage()
  }
}

export default Login
