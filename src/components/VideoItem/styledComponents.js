import styled from 'styled-components'

export const LinkItem = styled.link`
  text-decoration: none;
`
export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (min-width: 576px) {
    padding: 15px;
  }
`

export const VideoThumbnail = styled.img`
  width: 100%;
`

export const VideoDetailsContainer = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: row;
  background-color: transparent;
`

export const ChannelProfileImage = styled.img`
  height: 40px;
  width: 40px;
  @media screen and (min-width:576px){
      height:45px;
      width:45px;
  }
  @ media screen and (min-width:768px){
      height:50px;
      width:50px;
  }
`

export const VideoName = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.fontColor ? '#ffffff' : '#1e293b')};
`
export const VideoTitleAndDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  width: 100%;
  margin-top: 0px;
`

export const VideoDetailsDescription = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  margin: 0px;
  color: ${props => (props.fontColor ? '#ffffff' : '#1e293b')};
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const VideoDetailsDescriptionMedScreens = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  margin: 0px;
  color: ${props => (props.fontColor ? '#ffffff' : '#1e293b')};

  font-size: 18px;
  @media screen and (max-width: 576px) {
    display: none;
  }
`

export const CountAndTime = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  margin-top: 0px;

  color: ${props => (props.fontColor ? '#ffffff' : '#1e293b')};
  @media screen and (max-width: 576px) {
    display: none;
  }
`
