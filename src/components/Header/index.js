import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'

import {FaMoon} from 'react-icons/fa'
import {FiSun, FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'

import {SidebarSmallerDevices} from '../Sidebar'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  HeaderContainer,
  WebsiteLogo,
  PopUpContainer,
  PopupDescription,
  CancelButton,
  ConfirmButton,
  ButtonsContainer,
  LogoutButtonContainer,
  IconButton,
  ThemeButtons,
  ProfileImage,
  HamburgerButton,
  MenuContainer,
  CloseButton,
  LogoutButton,
} from './styledComponents'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  const mobileDevicesHeader = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark, changeThemeButton} = value

        const onClickingThemeButton = () => {
          changeThemeButton()
        }

        const LogoutPopup = () => (
          <Popup
            modal
            trigger={
              <LogoutButtonContainer>
                <IconButton fontColor={isDark}>
                  {' '}
                  <FiLogOut />
                </IconButton>

                <LogoutButton fontColor={isDark}>Logout</LogoutButton>
              </LogoutButtonContainer>
            }
          >
            {close => (
              <PopUpContainer bgColor={isDark}>
                <PopupDescription fontColor={isDark}>
                  Are you sure,you want to logout?
                </PopupDescription>
                <ButtonsContainer>
                  <CancelButton fontColor={isDark} onClick={() => close()}>
                    cancel
                  </CancelButton>
                  <ConfirmButton fontColor={isDark} onClick={onClickLogout}>
                    confirm
                  </ConfirmButton>
                </ButtonsContainer>
              </PopUpContainer>
            )}
          </Popup>
        )

        const MenuPopUp = () => (
          <Popup
            modal
            trigger={
              <HamburgerButton fontColor={isDark}>
                <GiHamburgerMenu />
              </HamburgerButton>
            }
          >
            {close => (
              <MenuContainer bgColor={isDark}>
                <CloseButton fontColor={isDark} onClick={() => close()}>
                  <AiOutlineClose />
                </CloseButton>
                <SidebarSmallerDevices />
              </MenuContainer>
            )}
          </Popup>
        )

        const websiteLogo = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        return (
          <HeaderContainer bgColor={isDark}>
            <Link to="/">
              <WebsiteLogo src={websiteLogo} alt="website logo" />
            </Link>
            <ButtonsContainer>
              <ThemeButtons onClick={onClickingThemeButton} fontColor={isDark}>
                {isDark ? <FiSun /> : <FaMoon />}
              </ThemeButtons>
              {MenuPopUp()}
              <ProfileImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              {LogoutPopup()}
            </ButtonsContainer>
          </HeaderContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  return mobileDevicesHeader()
}

export default withRouter(Header)
