import styled from 'styled-components'

export const SidebarContainer = styled.div`
  background-color: ${props => (props.bgColor ? '#231f20' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;

  flex-grow: 1;
`

export const MenuOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: ${props => (props.fontColor ? '#f1f1f1' : '#1e293b')};
`

export const Option = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  margin-top: 12px;
  align-self: center;
  color: ${props => (props.fontColor ? '#f1f1f1' : '#1e293b')};
  margin-left: 6px;
`

export const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
`

export const ContactUsSection = styled.div`
  display: flex;
  flex-direction: column;
`

export const ContactUs = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => (props.fontColor ? '#f1f1f1' : '#1e293b')};
  font-weight: 800;
  margin-bottom: 10px;
`

export const ConstactUsIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0px;
  padding-left: 10px;
  align-items: center;
  height: 30px;
`

export const FacebookIcon = styled.p`
  color: #00306e;
  font-size: 25px;
  margin-right: 15px;
`

export const TwitterIcon = styled.p`
  color: #3b82f6;
  font-size: 27px;
  margin-right: 15px;
`

export const LinkedInIcon = styled.p`
  color: #00306e;
  font-size: 25px;
`

export const ContactUsDescription = styled.p`
  font-family: 'Roboto';
  font-size: 16px;

  font-weight: 500;
  color: ${props => (props.fontColor ? '#f1f1f1' : '#1e293b')};
`
