import {Link} from 'react-router-dom'

import {AiFillHome, AiFillTwitterCircle} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {FaFacebook, FaLinkedin} from 'react-icons/fa'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  SidebarContainer,
  MenuOptionsContainer,
  OptionContainer,
  Option,
  ContactUsSection,
  ContactUs,
  ConstactUsIconsContainer,
  FacebookIcon,
  TwitterIcon,
  LinkedInIcon,
  ContactUsDescription,
} from './styledComponents'

const Sidebar = () => (
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
            <ConstactUsIconsContainer>
              <FacebookIcon>
                <FaFacebook />
              </FacebookIcon>
              <TwitterIcon>
                <AiFillTwitterCircle />
              </TwitterIcon>
              <LinkedInIcon>
                <FaLinkedin />
              </LinkedInIcon>
            </ConstactUsIconsContainer>
            <ContactUsDescription fontColor={isDark}>
              Enjoy! Now to see your <br /> channels and <br /> recommendations!
            </ContactUsDescription>
          </ContactUsSection>
        </SidebarContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default Sidebar
