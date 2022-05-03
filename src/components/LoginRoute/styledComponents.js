import styled from 'styled-components'

export const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.bgColor ? '#231f20' : '#f9f9f9')};
  height: 100vh;
  padding-left: 20px;
  padding-right: 20px;
`

export const LoginAndLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#f9f9f9')};
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 15px;
  padding-right: 15px;
  width: 80%;
  border-radius: 5px;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const LogoImage = styled.img`
  align-self: center;
  width: 120px;
  margin-bottom: 25px;
  @media screen and (min-width: 768px) {
    width: 150px;
  }
`

export const LoginForm = styled.form`
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#f9f9f9')};
`

export const InputLabel = styled.label`
  color: ${props => (props.fontColor ? '#f1f1f1' : '#94a3b8')};
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: bold;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
export const FormInput = styled.input`
  color: ${props => (props.fontColor ? '#f1f1f1' : '#1e293b')};
  height: 40px;
  width: 120px;
  border-radius: 5px;
  font-size: 18px;
  padding-left: 10px;
  background-color: transparent;
  border: 1px solid #94a3b8;
  margin-top: 3px;
  margin-bottom: 25px;
  width: 100%;
`
export const PasswordCheckbox = styled.input`
  border: 1px solid #94a3b8;
  width: 18px;
  height: 18px;
  padding-top: 5px;
  align-self: center;
`

export const ShowPassword = styled.label`
  color: ${props => (props.fontColor ? '#f1f1f1' : '#475569')};
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  align-self: center;
  padding-bottom: 10px;
  margin-left: 5px;
`
export const ErrorMessage = styled.p`
  color: ${props => (props.fontColor ? '#ff0000' : '#ff0b37')};
  font-size: 13px;
  font-family: 'Roboto';
  margin-top: 5px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`

export const LoginButton = styled.button`
  color: #f1f1f1;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  background-color: #4f46e5;
  height: 40px;
  width: 100%;
  border-radius: 10px;
  border: none;
  margin-top: 15px;
`
