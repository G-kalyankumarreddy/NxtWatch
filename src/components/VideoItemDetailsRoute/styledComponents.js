import styled from 'styled-components'

export const VideoDetailsPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#f9f9f9 ')};
`
export const VideoDetailsViewContainer = styled.div`
  width: 100%;
  overflow-y: scroll;
  @media screen and (min-width: 768px) {
    padding: 20px;
  }
`

export const ReactPlayerContainer = styled.div`
  @media screen and (min-width: 576px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`

export const videoDetailsContainer = styled.div`
  background-color: transparent;
  border: 1px red solid;
`

export const VideoTitle = styled.p`
  color: ${props => (props.fontColor ? '#f8fafc' : '#1e293b')};
  font-family: 'Roboto';
  font-size: 16px;
  margin-bottom: 0px;
  margin-left: 20px;
  margin-right: 20px;
`

export const ViewsAndLikeButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 0px;
  margin-bottom: 0px;
  @media screen and (min-width: 576px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

export const VideoViewsAndPublished = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #64748b;
`

export const Dot = styled.span`
  font-size: 14px;
  font-weight: 600;
`
export const LikeDislikeAndSaveButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const ButtonContainer = styled.button`
  font-family: 'Roboto';
  font-size: 16px;
  background-color: transparent;
  margin-right: 15px;
  border: none;
`

export const HorizontalLine = styled.hr`
  height: 3;
  color: #64748b;
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
`

export const ChannelDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 20px;
  padding-left: 20px;
  padding-bottom: 15px;
`
export const ProfileImageAndChannelDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const ProfileImage = styled.img`
  height: 40px;
  width: 40px;
  align-self: center;
  margin-right: 10px;
  @media screen and (min-width: 576px) {
    height: 50px;
    width: 50px;
  }
`

export const NameAndSubscribersContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 700;
  color: ${props => (props.fontColor ? '#f8fafc' : '#1e293b')};
  margin-bottom: 0px;
`

export const SubscribersCount = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #64748b;
`

export const VideoDescription = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.fontColor ? '#ffffff' : '#64748b')};
  @media screen and (min-width: 576px) {
    font-size: 18px;
  }
`

export const FailureViewContainer = styled.div`
  background-color: ${props => (props.bgColor ? ' #181818' : '#f9f9f9')};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FailureViewImage = styled.img`
  width: 50%;
  @media screen and (min-width: 768px) {
    width: 30%;
  }
`

export const FailureViewTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  margin-bottom: 15px;
  color: ${props => (props.fontColor ? '#f1f5f9' : `#181818`)};
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`

export const FailureViewDescription = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #94a3b8;
  text-align: center;
  margin-top: 0px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const FailureViewButton = styled.button`
  font-family: 'Roboto';
  font-size: 12px;
  color: #f1f1f1;
  background-color: #4f46e5;
  width: 80px;
  height: 30px;
  border-radius: 5px;
  border: none;
  @media screen and (min-width: 768px) {
    width: 100px;
    height: 40px;
    font-size: 15px;
  }
`
