import styled from 'styled-components'

export const SidebarContainer = styled.div`
  background-color: ${props => (props.bgColor ? '#231f20' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const SidebarSmallerDevicesContainer = styled.div`
  width: 100%;
`

export const MenuOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  text-decoration: none;
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

export const ContactUsLogosContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0px;
  align-items: center;
  height: 30px;
`

export const ContactUsLogo = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
`

export const ContactUsDescription = styled.p`
  font-family: 'Roboto';
  font-size: 16px;

  font-weight: 500;
  color: ${props => (props.fontColor ? '#f1f1f1' : '#1e293b')};
`
