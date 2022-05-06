import styled from 'styled-components'

export const HeaderContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${props => (props.bgColor ? '#231f20' : '#f9f9f9')};
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
`

export const WebsiteLogo = styled.img`
  width: 120px;
`
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const LogoutButtonContainer = styled.button`
  display: flex;
  background-color: transparent;
  border: none;
`

export const IconButton = styled.button`
  font-size: 20px;
  margin-right: 10px;
  align-self: center;
  color: ${props => (props.fontColor ? '#f1f1f1' : '#1e293b')};
  background-color: transparent;
  border: none;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const ThemeButtons = styled.div`
  align-self: center;
  font-size: 20px;
  margin-right: 10px;
  align-self: center;
  color: ${props => (props.fontColor ? '#f1f1f1' : '#1e293b')};
  background-color: transparent;
  border: none;
  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
`

export const HamburgerButton = styled.div`
  align-self: center;
  font-size: 20px;
  margin-right: 10px;
  align-self: center;
  color: ${props => (props.fontColor ? '#f1f1f1' : '#1e293b')};
  background-color: transparent;
  border: none;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const PopUpContainer = styled.div`
  background-color: ${props => (props.bgColor ? '#231f20' : '#f9f9f9')};
  padding: 30px;
  width: 100%;
  border: 1px green solid;
  border-radius: 10px;
`

export const PopupDescription = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  text-align: center;
  color: ${props => (props.fontColor ? '#f1f1f1' : '#1e293b')};
  margin-top: 10px;
`

export const CancelButton = styled.button`
  font-family: 'Roboto';
  font-size: 14px;
  height: 29px;
  width: 80px;
  margin-top: 10px;
  margin-left: auto;
  color: ${props => (props.fontColor ? '#f1f1f1' : '#1e293b')};
  background-color: transparent;
  border: 1px solid ${props => (props.fontColor ? '#f1f1f1' : '#1e293b')};
  border-radius: 5px;
`

export const ConfirmButton = styled(CancelButton)`
  background-color: #4f46e5;
  border: none;
  height: 30px;
  margin-right: auto;
`
export const ProfileImage = styled.img`
  height: 25px;
  width: 25px;
  align-self: center;
  margin-right: 10px;
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    height: 30px;
    width: 30px;
  }
`

export const MenuContainer = styled.div`
  background-color: ${props => (props.bgColor ? '#231f20' : '#f9f9f9')};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const CloseButton = styled.button`
  color: ${props => (props.fontColor ? '#f9f9f9' : '#231f20')};
  font-size: 16px;
  background-color: transparent;
  border: none;
  align-self: flex-end;
`
export const LogoutButton = styled.button`
  font-family: 'Roboto';
  font-size: 16px;
  width: 100px;
  height: 30px;
  align-self: center;
  border: 1px solid ${props => (props.fontColor ? '#ffffff' : '#3b82f6')};
  background-color: transparent;
  color: ${props => (props.fontColor ? '#ffffff' : '#3b82f6')};
  @media screen and (max-width: 768px) {
    display: none;
  }
`
