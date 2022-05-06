import {Link} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import NxtWatchContext from '../../context/NxtWatchContext'

import './index.css'
import {
  SidebarContainer,
  SidebarSmallerDevicesContainer,
  MenuOptionsContainer,
  OptionContainer,
  Option,
  ContactUsSection,
  ContactUs,
  ContactUsLogosContainer,
  ContactUsLogo,
  ContactUsDescription,
} from './styledComponents'

export const Sidebar = () => {
  const SidebarMediumDevices = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <SidebarContainer bgColor={isDark}>
            <MenuOptionsContainer>
              <Link to="/">
                <OptionContainer fontColor={isDark}>
                  <AiFillHome />
                  <Option fontColor={isDark}>Home</Option>
                </OptionContainer>
              </Link>
              <Link to="/trending">
                <OptionContainer fontColor={isDark}>
                  <HiFire />
                  <Option fontColor={isDark}>Trending</Option>
                </OptionContainer>
              </Link>
              <Link to="/gaming">
                <OptionContainer fontColor={isDark}>
                  <SiYoutubegaming />
                  <Option fontColor={isDark}>Gaming</Option>
                </OptionContainer>
              </Link>
              <Link to="/saved-videos">
                <OptionContainer fontColor={isDark}>
                  <MdPlaylistAdd />
                  <Option fontColor={isDark}>Saved Videos</Option>
                </OptionContainer>
              </Link>
            </MenuOptionsContainer>
            <ContactUsSection>
              <ContactUs fontColor={isDark}>CONTACT US</ContactUs>
              <ContactUsLogosContainer>
                <ContactUsLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <ContactUsLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <ContactUsLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </ContactUsLogosContainer>
              <ContactUsDescription fontColor={isDark}>
                Enjoy! Now to see your <br /> channels and <br />{' '}
                recommendations!
              </ContactUsDescription>
            </ContactUsSection>
          </SidebarContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  return SidebarMediumDevices()
}

export const SidebarSmallerDevices = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark} = value
      return (
        <SidebarSmallerDevicesContainer bgColor={isDark}>
          <MenuOptionsContainer>
            <Link to="/">
              <OptionContainer fontColor={isDark}>
                <AiFillHome />
                <Option fontColor={isDark}>Home</Option>
              </OptionContainer>
            </Link>
            <Link to="/trending">
              <OptionContainer fontColor={isDark}>
                <HiFire />
                <Option fontColor={isDark}>Trending</Option>
              </OptionContainer>
            </Link>
            <Link to="/gaming">
              <OptionContainer fontColor={isDark}>
                <SiYoutubegaming />
                <Option fontColor={isDark}>Gaming</Option>
              </OptionContainer>
            </Link>
            <Link to="/saved-videos">
              <OptionContainer fontColor={isDark}>
                <MdPlaylistAdd />
                <Option fontColor={isDark}>Saved Videos</Option>
              </OptionContainer>
            </Link>
          </MenuOptionsContainer>
        </SidebarSmallerDevicesContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)
