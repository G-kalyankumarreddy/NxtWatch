import styled from 'styled-components'

export const SavedVideoItem = styled.li`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: transparent;
  padding: 10px;
  @media screen and (min-width: 576px) {
    flex-direction: row;
    justify-content: space-between;
  }
`
export const SavedVideoThumbnail = styled.img`
  width: 100%;
  @media screen and (min-width: 576px) {
    width: 50%;
  }
`
export const SavedVideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 576px) {
    width: 48%;
  }
`

export const SavedVideoTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 14px;
  margin-bottom: 0px;
  color: ${props => (props.fontColor ? '#f1f5f9' : '#231f20')};
  @media screen and (min-width: 576px) {
    font-size: 18px;
  }
`
export const ChannelNameAndDetails = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #94a3b8;
  margin-top: 15px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`
export const Dot = styled.span`
  font-size: 15px;
  font-weight: 800;
  color: #616e7c;
`
export const ChannelNameMediumScreen = styled.h1`
  font-family: 'Roboto';
  font-size: 18px;
  color: #94a3b8;
  margin-top: 15px;
  margin-bottom: 10px;
  @media screen and (max-width: 576px) {
    display: none;
  }
`

export const SubscriberCountAndPublished = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #94a3b8;
  margin-top: 0px;
  @media screen and (max-width: 576px) {
    display: none;
  }
`
